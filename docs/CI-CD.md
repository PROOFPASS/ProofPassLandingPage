# CI/CD Configuration Guide - ProofPass Landing Page

Automated deployment pipeline using GitHub Actions for AWS deployment.

## Table of Contents
1. [Overview](#overview)
2. [GitHub Actions Workflow](#github-actions-workflow)
3. [AWS Credentials Setup](#aws-credentials-setup)
4. [Deployment Strategies](#deployment-strategies)
5. [Environment Management](#environment-management)
6. [Rollback Procedure](#rollback-procedure)

---

## Overview

The CI/CD pipeline automatically:
- ✅ Runs on every push to `main` and `develop` branches
- ✅ Installs dependencies and builds the application
- ✅ Runs linting and type checking
- ✅ Deploys to staging (on `develop` branch)
- ✅ Deploys to production (on `main` branch)
- ✅ Sends notifications on success/failure

**Deployment Flow:**
```
Developer Push → GitHub → GitHub Actions → Build → Test → Deploy to AWS → Notify
```

---

## GitHub Actions Workflow

### File Location
`.github/workflows/deploy.yml`

The workflow is already configured in the repository. See the file for full configuration.

### Workflow Triggers

```yaml
on:
  push:
    branches:
      - main        # Production deployment
      - develop     # Staging deployment
  pull_request:
    branches:
      - main        # Test before merging
```

### Workflow Stages

1. **Install** - Install Node.js dependencies
2. **Lint** - Run ESLint
3. **Type Check** - TypeScript validation
4. **Build** - Create production build
5. **Deploy** - Push to AWS (Amplify/ECS/EC2)

---

## AWS Credentials Setup

### Step 1: Create IAM User for CI/CD

```bash
# Create IAM user
aws iam create-user --user-name github-actions-proofpass-landing

# Attach necessary policies
aws iam attach-user-policy \
  --user-name github-actions-proofpass-landing \
  --policy-arn arn:aws:iam::aws:policy/AWSAmplifyFullAccess

# Or for ECS deployment
aws iam attach-user-policy \
  --user-name github-actions-proofpass-landing \
  --policy-arn arn:aws:iam::aws:policy/AmazonECS_FullAccess

# Create access keys
aws iam create-access-key --user-name github-actions-proofpass-landing
```

**Save the output:**
- `AccessKeyId`
- `SecretAccessKey`

### Step 2: Add Secrets to GitHub

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click "New repository secret"
4. Add the following secrets:

| Secret Name | Value | Description |
|-------------|-------|-------------|
| `AWS_ACCESS_KEY_ID` | Your access key ID | AWS credentials |
| `AWS_SECRET_ACCESS_KEY` | Your secret access key | AWS credentials |
| `AWS_REGION` | `us-east-1` (or your region) | AWS region |
| `AWS_ACCOUNT_ID` | Your 12-digit account ID | For ECR |
| `AMPLIFY_APP_ID` | Your Amplify app ID | If using Amplify |

**For Amplify deployment**, also add:
- `AMPLIFY_APP_ID` - Found in Amplify Console URL

**For ECS deployment**, also add:
- `ECR_REPOSITORY` - `proofpass-landing`
- `ECS_CLUSTER` - `proofpass-landing-cluster`
- `ECS_SERVICE` - `proofpass-landing-service`
- `ECS_TASK_DEFINITION` - `proofpass-landing`

---

## Deployment Strategies

### Strategy 1: AWS Amplify (Recommended)

Amplify has built-in CI/CD. GitHub Actions just triggers the deployment.

**Workflow configuration:**

```yaml
deploy-amplify:
  runs-on: ubuntu-latest
  steps:
    - name: Trigger Amplify Build
      run: |
        aws amplify start-job \
          --app-id ${{ secrets.AMPLIFY_APP_ID }} \
          --branch-name ${{ github.ref_name }} \
          --job-type RELEASE
```

**Advantages:**
- No custom CI/CD needed (Amplify does it)
- Built-in preview environments
- Automatic SSL and CDN

**Setup:**
1. Connect GitHub repo to Amplify (see DEPLOYMENT.md)
2. Amplify automatically deploys on push to main
3. GitHub Actions can trigger additional actions (notifications, testing, etc.)

### Strategy 2: AWS ECS with ECR

Build Docker image, push to ECR, update ECS service.

**Workflow configuration:**

```yaml
deploy-ecs:
  runs-on: ubuntu-latest
  steps:
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v2
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: ${{ secrets.AWS_REGION }}

    - name: Login to Amazon ECR
      id: login-ecr
      uses: aws-actions/amazon-ecr-login@v1

    - name: Build, tag, and push image to Amazon ECR
      env:
        ECR_REGISTRY: ${{ steps.login-ecr.outputs.registry }}
        ECR_REPOSITORY: ${{ secrets.ECR_REPOSITORY }}
        IMAGE_TAG: ${{ github.sha }}
      run: |
        docker build -t $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG .
        docker tag $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG $ECR_REGISTRY/$ECR_REPOSITORY:latest
        docker push $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG
        docker push $ECR_REGISTRY/$ECR_REPOSITORY:latest

    - name: Deploy to ECS
      run: |
        aws ecs update-service \
          --cluster ${{ secrets.ECS_CLUSTER }} \
          --service ${{ secrets.ECS_SERVICE }} \
          --force-new-deployment
```

**Advantages:**
- Full control over deployment
- Can add custom health checks
- Easy rollback

### Strategy 3: AWS EC2 with SSH

SSH into EC2, pull latest code, rebuild.

**Workflow configuration:**

```yaml
deploy-ec2:
  runs-on: ubuntu-latest
  steps:
    - name: Deploy to EC2
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.EC2_HOST }}
        username: ubuntu
        key: ${{ secrets.EC2_SSH_KEY }}
        script: |
          cd /home/ubuntu/ProofPassLandingPage
          git pull origin main
          npm ci
          npm run build
          pm2 restart proofpass-landing
```

**Required secrets:**
- `EC2_HOST` - Public IP or domain of EC2 instance
- `EC2_SSH_KEY` - Private SSH key (PEM file contents)

**Advantages:**
- Simple and direct
- Good for single-server setups

---

## Environment Management

### Production vs Staging

Use branch-based deployments:

```yaml
- name: Set environment
  id: set-env
  run: |
    if [[ "${{ github.ref }}" == "refs/heads/main" ]]; then
      echo "environment=production" >> $GITHUB_OUTPUT
    else
      echo "environment=staging" >> $GITHUB_OUTPUT
    fi

- name: Deploy
  run: |
    echo "Deploying to ${{ steps.set-env.outputs.environment }}"
    # Use different AWS resources based on environment
```

### Environment Variables

For different configs per environment:

**Option 1: GitHub Environments**

1. Go to **Settings** → **Environments**
2. Create `production` and `staging` environments
3. Add environment-specific secrets

```yaml
deploy:
  runs-on: ubuntu-latest
  environment:
    name: ${{ github.ref == 'refs/heads/main' && 'production' || 'staging' }}
  steps:
    - name: Deploy
      run: echo "Deploying to ${{ github.event.repository.environment }}"
```

**Option 2: .env files**

```yaml
- name: Create .env file
  run: |
    if [[ "${{ github.ref }}" == "refs/heads/main" ]]; then
      echo "NEXT_PUBLIC_API_URL=https://api.proofpass.com" > .env.production
    else
      echo "NEXT_PUBLIC_API_URL=https://staging-api.proofpass.com" > .env.production
    fi
```

---

## Testing in CI/CD

### Unit Tests

Add Jest tests:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

Add to workflow:

```yaml
- name: Run Tests
  run: npm test
```

### E2E Tests

Add Playwright tests:

```bash
npm install --save-dev @playwright/test
```

Add to workflow:

```yaml
- name: Install Playwright
  run: npx playwright install --with-deps

- name: Run E2E tests
  run: npx playwright test
```

### Lighthouse CI

Check performance scores:

```yaml
- name: Run Lighthouse CI
  run: |
    npm install -g @lhci/cli
    lhci autorun --upload.target=temporary-public-storage
```

---

## Notifications

### Slack Notifications

Add Slack webhook to secrets: `SLACK_WEBHOOK_URL`

```yaml
- name: Notify Slack on Success
  if: success()
  run: |
    curl -X POST ${{ secrets.SLACK_WEBHOOK_URL }} \
      -H 'Content-Type: application/json' \
      -d '{
        "text": "✅ ProofPass Landing deployed successfully to production!",
        "blocks": [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "*Deployment Successful* :white_check_mark:\n*Branch:* ${{ github.ref_name }}\n*Commit:* ${{ github.sha }}\n*Author:* ${{ github.actor }}"
            }
          }
        ]
      }'

- name: Notify Slack on Failure
  if: failure()
  run: |
    curl -X POST ${{ secrets.SLACK_WEBHOOK_URL }} \
      -H 'Content-Type: application/json' \
      -d '{
        "text": "❌ ProofPass Landing deployment FAILED!",
        "blocks": [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "*Deployment Failed* :x:\n*Branch:* ${{ github.ref_name }}\n*Commit:* ${{ github.sha }}\n*Author:* ${{ github.actor }}\n*Check logs:* <https://github.com/${{ github.repository }}/actions/runs/${{ github.run_id }}>"
            }
          }
        ]
      }'
```

### Email Notifications

GitHub Actions automatically sends emails to commit authors on failure.

To customize:
1. Go to **Settings** → **Notifications** on GitHub
2. Configure email preferences

---

## Rollback Procedure

### Manual Rollback (GitHub UI)

1. Go to **Actions** tab
2. Find the last successful workflow run
3. Click "Re-run all jobs"

### Rollback via Git

```bash
# Find last good commit
git log --oneline

# Revert to that commit
git revert <bad_commit_hash>
git push origin main

# Or force push (dangerous!)
git reset --hard <good_commit_hash>
git push --force origin main
```

### Rollback ECS Deployment

```bash
# List task definitions
aws ecs list-task-definitions --family-prefix proofpass-landing

# Update service to previous version
aws ecs update-service \
  --cluster proofpass-landing-cluster \
  --service proofpass-landing-service \
  --task-definition proofpass-landing:7  # Previous version number
```

### Rollback Amplify Deployment

1. Go to Amplify Console
2. Click on your app → "Build history"
3. Find previous successful build
4. Click "Redeploy this version"

---

## Security Best Practices

### 1. Rotate AWS Credentials Regularly

```bash
# Deactivate old key
aws iam update-access-key \
  --user-name github-actions-proofpass-landing \
  --access-key-id <OLD_KEY_ID> \
  --status Inactive

# Create new key
aws iam create-access-key --user-name github-actions-proofpass-landing

# Update GitHub secrets
# Delete old key
aws iam delete-access-key \
  --user-name github-actions-proofpass-landing \
  --access-key-id <OLD_KEY_ID>
```

### 2. Use Least Privilege Principle

Don't use `AdministratorAccess`. Create custom policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "amplify:StartJob",
        "amplify:GetJob",
        "ecs:UpdateService",
        "ecs:DescribeServices",
        "ecr:*"
      ],
      "Resource": [
        "arn:aws:amplify:us-east-1:*:apps/*/branches/*",
        "arn:aws:ecs:us-east-1:*:service/proofpass-landing-cluster/*",
        "arn:aws:ecr:us-east-1:*:repository/proofpass-landing"
      ]
    }
  ]
}
```

### 3. Enable Branch Protection

1. Go to **Settings** → **Branches**
2. Add rule for `main` branch:
   - ✅ Require pull request reviews
   - ✅ Require status checks to pass
   - ✅ Require branches to be up to date

### 4. Scan for Secrets

Add secret scanning to workflow:

```yaml
- name: Scan for secrets
  uses: trufflesecurity/trufflehog@main
  with:
    path: ./
    base: main
    head: HEAD
```

---

## Monitoring Deployments

### Check Deployment Status

```bash
# Amplify
aws amplify list-jobs \
  --app-id $AMPLIFY_APP_ID \
  --branch-name main \
  --max-results 5

# ECS
aws ecs describe-services \
  --cluster proofpass-landing-cluster \
  --services proofpass-landing-service

# Check task status
aws ecs list-tasks \
  --cluster proofpass-landing-cluster \
  --service-name proofpass-landing-service
```

### View Deployment Logs

```bash
# Amplify
aws amplify get-job \
  --app-id $AMPLIFY_APP_ID \
  --branch-name main \
  --job-id <JOB_ID>

# ECS CloudWatch Logs
aws logs tail /ecs/proofpass-landing --follow
```

---

## Troubleshooting CI/CD Issues

### Build Fails

**Issue:** `npm ci` fails
```yaml
# Solution: Clear cache
- name: Clear npm cache
  run: npm cache clean --force
```

**Issue:** TypeScript errors
```bash
# Run locally to debug
npm run build
```

### Deployment Fails

**Issue:** AWS credentials error
```bash
# Verify credentials
aws sts get-caller-identity
```

**Issue:** ECS task won't start
```bash
# Check task logs
aws ecs describe-tasks \
  --cluster proofpass-landing-cluster \
  --tasks <TASK_ARN>
```

### Slow Deployments

- Enable caching in GitHub Actions
- Use `npm ci` instead of `npm install`
- Consider using self-hosted runners for faster builds

---

## Performance Optimizations

### Cache Node Modules

```yaml
- name: Cache dependencies
  uses: actions/cache@v3
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```

### Parallel Jobs

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      # Run tests
  
  lint:
    runs-on: ubuntu-latest
    steps:
      # Run linting
  
  deploy:
    needs: [test, lint]  # Wait for both
    runs-on: ubuntu-latest
    steps:
      # Deploy
```

---

## Next Steps

After CI/CD setup:
1. Test the pipeline with a dummy commit
2. Set up Slack/email notifications
3. Configure monitoring dashboards
4. Document rollback procedures for team
5. Schedule regular security audits

## Support

For CI/CD issues:
- Check GitHub Actions logs
- Review AWS CloudWatch logs
- Contact DevOps team lead
