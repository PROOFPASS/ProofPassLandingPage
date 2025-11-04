# AWS Deployment Guide - ProofPass Landing Page

Complete step-by-step guide for DevOps team to deploy the ProofPass landing page on AWS.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Option 1: AWS Amplify (Recommended)](#option-1-aws-amplify-recommended)
3. [Option 2: AWS ECS with Fargate](#option-2-aws-ecs-with-fargate)
4. [Option 3: AWS EC2](#option-3-aws-ec2)
5. [Custom Domain Configuration](#custom-domain-configuration)
6. [Monitoring & Logging](#monitoring--logging)

---

## Prerequisites

### Required
- AWS Account with appropriate permissions
- GitHub repository access: `https://github.com/PROOFPASS/ProofPassLandingPage`
- AWS CLI installed and configured
- Domain name (e.g., `proofpass.com` or `landing.proofpass.com`)

### AWS IAM Permissions Needed
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "amplify:*",
        "ecs:*",
        "ec2:*",
        "route53:*",
        "acm:*",
        "cloudfront:*",
        "s3:*"
      ],
      "Resource": "*"
    }
  ]
}
```

---

## Option 1: AWS Amplify (Recommended)

**Best for:** Easy deployment, automatic CI/CD, built-in SSL, global CDN.

### Step 1: Install AWS Amplify CLI

```bash
npm install -g @aws-amplify/cli
amplify configure
```

### Step 2: Connect GitHub Repository

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "New app" → "Host web app"
3. Select "GitHub" as the repository service
4. Authorize AWS Amplify to access your GitHub account
5. Select repository: `PROOFPASS/ProofPassLandingPage`
6. Select branch: `main`

### Step 3: Configure Build Settings

Amplify will auto-detect Next.js. Verify the build settings:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

### Step 4: Configure Environment Variables

No environment variables are required for basic functionality.

If you add any in the future:
1. Go to "App settings" → "Environment variables"
2. Add variables (e.g., API keys)

### Step 5: Deploy

1. Click "Save and deploy"
2. Wait 3-5 minutes for initial deployment
3. Access your app at: `https://main.d1234abcd.amplifyapp.com`

### Step 6: Configure Custom Domain

1. In Amplify Console, go to "Domain management"
2. Click "Add domain"
3. Enter your domain (e.g., `proofpass.com`)
4. Amplify will:
   - Generate SSL certificate (via AWS ACM)
   - Configure DNS settings
5. Update DNS records at your domain registrar with provided values
6. Wait 15-30 minutes for DNS propagation

**Cost Estimate (AWS Amplify):**
- Build minutes: First 1,000 minutes free, then $0.01/minute
- Hosting: First 5 GB free, then $0.15/GB
- Data transfer: First 15 GB free, then $0.15/GB
- **Typical monthly cost: $0-10** (for low-traffic landing page)

---

## Option 2: AWS ECS with Fargate

**Best for:** Docker-based deployments, more control, microservices architecture.

### Step 1: Create Dockerfile

Create `Dockerfile` in project root:

```dockerfile
# Dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

Update `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
}

module.exports = nextConfig
```

### Step 2: Build and Push Docker Image

```bash
# Login to AWS ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <AWS_ACCOUNT_ID>.dkr.ecr.us-east-1.amazonaws.com

# Create ECR repository
aws ecr create-repository --repository-name proofpass-landing --region us-east-1

# Build image
docker build -t proofpass-landing .

# Tag image
docker tag proofpass-landing:latest <AWS_ACCOUNT_ID>.dkr.ecr.us-east-1.amazonaws.com/proofpass-landing:latest

# Push to ECR
docker push <AWS_ACCOUNT_ID>.dkr.ecr.us-east-1.amazonaws.com/proofpass-landing:latest
```

### Step 3: Create ECS Cluster

```bash
# Create cluster
aws ecs create-cluster --cluster-name proofpass-landing-cluster --region us-east-1

# Create task definition
aws ecs register-task-definition --cli-input-json file://task-definition.json
```

Create `task-definition.json`:

```json
{
  "family": "proofpass-landing",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "256",
  "memory": "512",
  "containerDefinitions": [
    {
      "name": "proofpass-landing",
      "image": "<AWS_ACCOUNT_ID>.dkr.ecr.us-east-1.amazonaws.com/proofpass-landing:latest",
      "portMappings": [
        {
          "containerPort": 3000,
          "protocol": "tcp"
        }
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/proofpass-landing",
          "awslogs-region": "us-east-1",
          "awslogs-stream-prefix": "ecs"
        }
      }
    }
  ]
}
```

### Step 4: Create Application Load Balancer

```bash
# Create security group for ALB
aws ec2 create-security-group \
  --group-name proofpass-landing-alb-sg \
  --description "Security group for ProofPass landing ALB" \
  --vpc-id <VPC_ID>

# Allow HTTP/HTTPS traffic
aws ec2 authorize-security-group-ingress \
  --group-id <SG_ID> \
  --protocol tcp \
  --port 80 \
  --cidr 0.0.0.0/0

aws ec2 authorize-security-group-ingress \
  --group-id <SG_ID> \
  --protocol tcp \
  --port 443 \
  --cidr 0.0.0.0/0

# Create ALB
aws elbv2 create-load-balancer \
  --name proofpass-landing-alb \
  --subnets <SUBNET_ID_1> <SUBNET_ID_2> \
  --security-groups <SG_ID>

# Create target group
aws elbv2 create-target-group \
  --name proofpass-landing-tg \
  --protocol HTTP \
  --port 3000 \
  --vpc-id <VPC_ID> \
  --target-type ip \
  --health-check-path /

# Create listener
aws elbv2 create-listener \
  --load-balancer-arn <ALB_ARN> \
  --protocol HTTP \
  --port 80 \
  --default-actions Type=forward,TargetGroupArn=<TG_ARN>
```

### Step 5: Create ECS Service

```bash
aws ecs create-service \
  --cluster proofpass-landing-cluster \
  --service-name proofpass-landing-service \
  --task-definition proofpass-landing \
  --desired-count 2 \
  --launch-type FARGATE \
  --network-configuration "awsvpcConfiguration={subnets=[<SUBNET_ID_1>,<SUBNET_ID_2>],securityGroups=[<SG_ID>],assignPublicIp=ENABLED}" \
  --load-balancers targetGroupArn=<TG_ARN>,containerName=proofpass-landing,containerPort=3000
```

**Cost Estimate (AWS ECS):**
- Fargate: $0.04048/hour (256 CPU, 512 MB) × 2 tasks × 730 hours = ~$60/month
- ALB: $16.20/month + data processing
- ECR storage: $0.10/GB/month
- **Typical monthly cost: $80-100**

---

## Option 3: AWS EC2

**Best for:** Full control, custom configurations, existing infrastructure.

### Step 1: Launch EC2 Instance

```bash
# Launch Ubuntu 22.04 instance (t3.small recommended)
aws ec2 run-instances \
  --image-id ami-0c55b159cbfafe1f0 \
  --instance-type t3.small \
  --key-name your-key-pair \
  --security-group-ids <SG_ID> \
  --subnet-id <SUBNET_ID> \
  --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=proofpass-landing}]'
```

### Step 2: Configure Security Group

Allow ports:
- **22** (SSH) - Your IP only
- **80** (HTTP) - 0.0.0.0/0
- **443** (HTTPS) - 0.0.0.0/0
- **3000** (Next.js) - Only from ALB or internally

### Step 3: SSH into Instance and Install Dependencies

```bash
# SSH into instance
ssh -i your-key.pem ubuntu@<INSTANCE_IP>

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 for process management
sudo npm install -g pm2

# Install Nginx for reverse proxy
sudo apt install -y nginx

# Install Git
sudo apt install -y git
```

### Step 4: Clone Repository and Build

```bash
# Clone repository (use deploy key or personal access token)
cd /home/ubuntu
git clone https://github.com/PROOFPASS/ProofPassLandingPage.git
cd ProofPassLandingPage

# Install dependencies
npm ci

# Build application
npm run build
```

### Step 5: Configure PM2

```bash
# Start application with PM2
pm2 start npm --name "proofpass-landing" -- start

# Configure PM2 to start on boot
pm2 startup
pm2 save

# View logs
pm2 logs proofpass-landing
```

### Step 6: Configure Nginx as Reverse Proxy

```bash
# Create Nginx configuration
sudo nano /etc/nginx/sites-available/proofpass-landing
```

Add configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable site:

```bash
sudo ln -s /etc/nginx/sites-available/proofpass-landing /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 7: Configure SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Auto-renewal is configured automatically
```

**Cost Estimate (AWS EC2):**
- t3.small: $0.0208/hour × 730 hours = ~$15/month
- EBS storage: $0.10/GB/month × 30 GB = $3/month
- Data transfer: First 100 GB free, then $0.09/GB
- **Typical monthly cost: $20-30**

---

## Custom Domain Configuration

### Route 53 DNS Setup

1. Go to [Route 53 Console](https://console.aws.amazon.com/route53)
2. Select your hosted zone (e.g., `proofpass.com`)
3. Create A record:
   - **Name**: `www` or leave blank for apex
   - **Type**: A
   - **Alias**: Yes
   - **Target**: 
     - Amplify: Select your Amplify app
     - ALB: Select your Application Load Balancer
     - EC2: Use Elastic IP address

### SSL Certificate (ACM)

For ALB or CloudFront:

```bash
# Request certificate
aws acm request-certificate \
  --domain-name your-domain.com \
  --subject-alternative-names www.your-domain.com \
  --validation-method DNS \
  --region us-east-1

# Validate via DNS (add CNAME records shown in ACM console)
```

---

## Monitoring & Logging

### CloudWatch Logs

1. Go to [CloudWatch Console](https://console.aws.amazon.com/cloudwatch)
2. Navigate to "Logs" → "Log groups"
3. View logs from:
   - Amplify: `/aws/amplify/...`
   - ECS: `/ecs/proofpass-landing`
   - EC2: Configure CloudWatch agent

### CloudWatch Alarms

Create alarms for:
- High CPU usage (>80%)
- High memory usage (>80%)
- 5xx errors (>10 in 5 minutes)
- Application downtime

```bash
# Example: CPU alarm for ECS
aws cloudwatch put-metric-alarm \
  --alarm-name proofpass-landing-high-cpu \
  --alarm-description "Alert when CPU exceeds 80%" \
  --metric-name CPUUtilization \
  --namespace AWS/ECS \
  --statistic Average \
  --period 300 \
  --threshold 80 \
  --comparison-operator GreaterThanThreshold \
  --evaluation-periods 2
```

### Application Monitoring

For production monitoring, consider:
- **AWS X-Ray** - Distributed tracing
- **CloudWatch RUM** - Real user monitoring
- **Datadog** or **New Relic** - APM

---

## Backup & Disaster Recovery

### Contact Form Data Backup

The `/data/contact-submissions.json` file contains leads. Set up automatic backups:

```bash
# Create S3 bucket for backups
aws s3 mb s3://proofpass-landing-backups

# Setup cron job for daily backup (on EC2)
crontab -e

# Add line:
# 0 2 * * * aws s3 cp /home/ubuntu/ProofPassLandingPage/data/contact-submissions.json s3://proofpass-landing-backups/$(date +\%Y\%m\%d).json
```

### Database Backup Strategy

When you add a real database:
- **RDS**: Enable automated backups (retention 7-30 days)
- **DynamoDB**: Enable point-in-time recovery

---

## Troubleshooting

### Application Won't Start

```bash
# Check logs
pm2 logs proofpass-landing

# Restart application
pm2 restart proofpass-landing

# Rebuild if needed
cd /home/ubuntu/ProofPassLandingPage
npm run build
pm2 restart proofpass-landing
```

### High Memory Usage

If Next.js uses too much memory on small instances:

1. Increase instance size
2. Or disable prefetching in `next.config.js`:

```javascript
module.exports = {
  experimental: {
    workerThreads: false,
    cpus: 1
  }
}
```

### SSL Certificate Issues

```bash
# Renew Let's Encrypt certificate manually
sudo certbot renew

# Test renewal
sudo certbot renew --dry-run
```

---

## Rollback Procedure

### Amplify
1. Go to Amplify Console
2. Select app → "Deployments"
3. Click "Redeploy" on previous successful version

### ECS
```bash
# Update service to use previous task definition
aws ecs update-service \
  --cluster proofpass-landing-cluster \
  --service proofpass-landing-service \
  --task-definition proofpass-landing:<PREVIOUS_REVISION>
```

### EC2
```bash
cd /home/ubuntu/ProofPassLandingPage
git log  # Find previous commit
git reset --hard <COMMIT_HASH>
npm run build
pm2 restart proofpass-landing
```

---

## Support

For deployment issues:
- Check logs first (CloudWatch, PM2, Nginx)
- Review [CI-CD.md](./CI-CD.md) for pipeline issues
- Contact DevOps team lead

## Next Steps

After deployment:
1. Configure CI/CD pipeline ([CI-CD.md](./CI-CD.md))
2. Set up monitoring alerts
3. Test contact form submissions
4. Configure backup strategy
5. Load test the application
