# ProofPass Landing Page

Enterprise-grade landing page for ProofPass - the B2B platform for verifiable attestations and zero-knowledge proofs for regulated industries.

## Overview

ProofPass enables companies to create cryptographically-signed digital attestations for business events, generate blockchain-anchored product passports, and prove compliance claims without revealing sensitive data. Built for manufacturing, food & agriculture, pharmaceuticals, and other regulated industries.

### Core Capabilities
- **Attestations**: Cryptographically-signed proofs for any business event
- **Product Passports**: Blockchain-anchored aggregated product history (EU Battery Passport compliant)
- **Zero-Knowledge Proofs**: Prove claims without revealing sensitive data

## Tech Stack

- **Framework**: Next.js 14+ with App Router and Server Components
- **Styling**: Tailwind CSS with custom enterprise color palette
- **Components**: shadcn/ui + Radix UI primitives
- **Icons**: Lucide React
- **Forms**: Native React with API routes
- **Language**: TypeScript
- **Backend**: Next.js API Routes (contact form)
- **Storage**: File system (JSON) for contact submissions

## Features

- **Enterprise B2B Design**: Professional, conversion-focused layout
- **Fully Responsive**: Mobile, tablet, desktop optimized
- **Working Contact Form**: API endpoint that saves leads to `/data/contact-submissions.json`
- **Complete Documentation**: Interactive docs with SDK examples (JS, Python, Go)
- **Real Case Studies**: Detailed implementation examples (EuroPower Systems, FreshTrack, MediChain)
- **SEO Optimized**: Meta tags and JSON-LD structured data
- **Performance**: Fast page loads with optimized components
- **Accessible**: Semantic HTML and ARIA labels

## Project Structure

```
ProofPassLandingPage/
├── app/
│   ├── page.tsx                  # Main enterprise landing page
│   ├── docs/page.tsx             # Interactive documentation
│   ├── api/contact/route.ts      # Contact form API endpoint
│   ├── layout.tsx                # Root layout with metadata
│   └── globals.css               # Global styles + Tailwind
├── components/
│   ├── sections/                 # Landing page sections
│   │   ├── HeroEnterprise.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── PublicGoodBanner.tsx
│   │   ├── SocialProofEnterprise.tsx
│   │   ├── ProblemStatement.tsx
│   │   ├── SolutionTiers.tsx
│   │   ├── DetailedCaseStudies.tsx
│   │   ├── ComparisonTableEnterprise.tsx
│   │   ├── PricingEnterprise.tsx
│   │   ├── SecurityCompliance.tsx
│   │   ├── IntegrationDeveloper.tsx
│   │   └── EnterpriseCTA.tsx
│   ├── ui/                       # shadcn/ui components
│   │   ├── button.tsx            # With Radix Slot support
│   │   ├── card.tsx
│   │   └── badge.tsx
│   └── shared/                   # Shared components
│       ├── HeaderEnterprise.tsx
│       └── FooterEnterprise.tsx
├── docs/
│   ├── DEPLOYMENT.md             # AWS deployment guide
│   └── CI-CD.md                  # GitHub Actions CI/CD guide
├── data/
│   └── contact-submissions.json  # Contact form data (gitignored)
├── lib/
│   └── utils.ts                  # Utility functions
└── public/                       # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ProofPassLandingPage
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Landing Page Sections

### 1. Hero Enterprise
B2B-focused hero with clear value proposition, primary CTA (Request Demo), and trust indicators.

### 2. How It Works
4-step visual guide explaining the platform: Create Attestations → Prove Without Revealing → Generate Passports → Anyone Can Verify.

### 3. Public Good Banner
Highlighting ProofPass as a Digital Public Good (DPG) certified platform.

### 4. Social Proof Enterprise
Logos and testimonials from enterprise customers across industries.

### 5. Problem Statement
3-column layout addressing enterprise pain points: Regulatory Compliance, Data Privacy, Operational Complexity.

### 6. Solution Tiers
Three-tier solution showcase: Simple Attestations, Product Passports, Zero-Knowledge Proofs.

### 7. Detailed Case Studies
Interactive case studies with real companies (EuroPower Systems, FreshTrack, MediChain) showing Challenge → Solution → Results with actual metrics.

### 8. Comparison Table Enterprise
Side-by-side comparison vs IBM Food Trust, SAP/Oracle, and custom builds.

### 9. Pricing Enterprise
Three transparent pricing tiers: Professional (€199/mo), Business (€599/mo), Enterprise (€50K/year).

### 10. Security & Compliance
Certifications showcase: ISO 27001, SOC 2, GDPR, CCPA, FDA CFR Part 11, GMP.

### 11. Integration & Developer
API documentation preview with SDK code examples and technical specs.

### 12. Enterprise CTA
Working contact form with company qualification fields, saves leads to `/data/contact-submissions.json`.

### 13. Footer Enterprise
Links to docs, GitHub, social media, and company information.

## Design System

### Enterprise Color Palette
- **Primary**: Navy #0F172A (trust, professionalism)
- **Secondary**: Green #16A34A (verification, success)
- **Accent**: Blue #3B82F6 (CTAs, interactive elements)
- **Error**: Red #DC2626 (problems, warnings)
- **Muted**: Gray #6B7280 (secondary text)
- **Border**: Gray #E5E7EB
- **Background**: White #FFFFFF

### Typography
- **Font**: Inter (via next/font/google)
- **Headings**: Bold (font-bold), large sizes (4xl-5xl)
- **Body**: Regular weight, 1.5 line-height for readability
- **Code**: Monospace for technical examples

## Customization

### Adding New Sections
1. Create a new component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Follow the existing pattern with Framer Motion animations

### Modifying Content
- All content is inline in the components for easy editing
- Look for arrays of data (testimonials, features, etc.) to modify

### Styling
- Use Tailwind utility classes
- Custom colors defined in `tailwind.config.ts`
- Global styles in `app/globals.css`

## Performance Optimization

- Images should be added to `/public/images/` and use Next.js Image component
- Code splitting is automatic with Next.js
- Lazy loading with Framer Motion viewport detection
- Optimized fonts with next/font

## SEO

- Meta tags in `app/layout.tsx`
- JSON-LD structured data in `app/page.tsx`
- Semantic HTML throughout
- Proper heading hierarchy

## Deployment

This project includes comprehensive DevOps documentation for AWS deployment.

### Quick Links
- **[Complete AWS Deployment Guide](docs/DEPLOYMENT.md)** - Step-by-step instructions for 3 AWS deployment options
- **[CI/CD Setup Guide](docs/CI-CD.md)** - GitHub Actions workflow configuration

### Deployment Options

#### Option 1: AWS Amplify (Recommended for simplicity)
- Zero-config deployment
- Automatic CI/CD from GitHub
- ~$20-50/month
- [Full instructions](docs/DEPLOYMENT.md#option-1-aws-amplify-recommended)

#### Option 2: AWS ECS with Fargate (Recommended for scalability)
- Docker containerized
- Auto-scaling
- ~$30-70/month
- [Full instructions](docs/DEPLOYMENT.md#option-2-aws-ecs-with-fargate)

#### Option 3: AWS EC2 (Manual control)
- Traditional VM deployment
- Full server control
- ~$25-50/month
- [Full instructions](docs/DEPLOYMENT.md#option-3-aws-ec2-traditional-vm)

### CI/CD Pipeline

GitHub Actions workflow is configured in `.github/workflows/deploy.yml` with:
- Automated tests and linting
- Deployment to AWS on push to `main`
- Slack notifications for deployment status
- Support for all 3 AWS deployment options

See [CI-CD.md](docs/CI-CD.md) for complete setup instructions.

### Local Production Build
```bash
npm run build
npm start
```

## Contact Form API

The landing page includes a working contact form that saves leads locally.

### Endpoint
- **POST** `/api/contact`
- **Request Body**: JSON with form fields (name, email, company, phone, company_size, industry)
- **Response**: `{ success: true, id: "lead_xxx", message: "Submission received" }`

### Data Storage
Submissions are saved to `/data/contact-submissions.json` (gitignored for privacy).

### Viewing Submissions
```bash
cat data/contact-submissions.json | jq '.'
```

### Production Considerations
For production, consider replacing the file system storage with:
- AWS S3 + Lambda
- Airtable API
- CRM integration (HubSpot, Salesforce)
- Email notification service

## Browser Support

- Chrome (latest) ✅
- Firefox (latest) ✅
- Safari (latest) ✅
- Edge (latest) ✅
- Mobile browsers ✅

## Repository Structure for DevOps

### Important Files
- `.github/workflows/deploy.yml` - GitHub Actions CI/CD pipeline
- `docs/DEPLOYMENT.md` - Complete AWS deployment instructions
- `docs/CI-CD.md` - CI/CD setup and configuration
- `.gitignore` - Excludes `/data` directory (contact form submissions)
- `package.json` - Dependencies and scripts

### Environment Variables (for production)
```bash
# Add these to GitHub Secrets for CI/CD
AWS_ACCESS_KEY_ID=your_key_here
AWS_SECRET_ACCESS_KEY=your_secret_here
AWS_REGION=us-east-1

# For ECS deployments
ECR_REPOSITORY=proofpass-landing

# For EC2 deployments
EC2_SSH_KEY=your_private_key
EC2_HOST=your_ec2_ip_or_domain

# For Amplify deployments
AMPLIFY_APP_ID=your_app_id

# Optional: Slack notifications
SLACK_WEBHOOK_URL=your_webhook_url
```

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Test locally with `npm run dev`
4. Build for production with `npm run build`
5. Submit a pull request to `main`
6. CI/CD will automatically deploy on merge

## License

See LICENSE file for details.

## Support

- **Documentation**: See `docs/` directory
- **Platform Repository**: [ProofPassPlatform](https://github.com/PROOFPASS/ProofPassPlatform)
- **Issues**: Open an issue in this repository
- **Email**: enterprise@proofpass.co

---

**Built for regulated industries with precision and care.**
