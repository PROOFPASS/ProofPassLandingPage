# ProofPass Landing Page

A modern, professional landing page for ProofPass - a B2B platform for verifiable attestations and zero-knowledge proofs for regulated industries.

## Overview

This landing page showcases ProofPass's three core services:
- **Simple Attestations**: Cryptographically-signed proofs for any business event
- **Product Passports**: Complete product history aggregation
- **Zero-Knowledge Proofs**: Prove claims without revealing sensitive data

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod (ready for integration)
- **Language**: TypeScript

## Features

- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and transitions with Framer Motion
- SEO optimized with meta tags and JSON-LD structured data
- Performance optimized for fast load times
- Accessible (WCAG AA compliant)
- Professional design inspired by Stripe, Vercel, and Linear

## Project Structure

```
proofpass-landing/
├── app/
│   ├── page.tsx              # Main landing page
│   ├── layout.tsx            # Root layout with metadata
│   └── globals.css           # Global styles
├── components/
│   ├── sections/             # Landing page sections
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Services.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── UseCases.tsx
│   │   ├── Comparison.tsx
│   │   ├── Pricing.tsx
│   │   ├── TrustSignals.tsx
│   │   ├── SocialProof.tsx
│   │   ├── Resources.tsx
│   │   └── FinalCTA.tsx
│   ├── ui/                   # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   └── shared/               # Shared components
│       ├── Header.tsx
│       └── Footer.tsx
├── lib/
│   └── utils.ts              # Utility functions
└── public/                   # Static assets
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

### 1. Hero Section
Eye-catching introduction with headline, subheadline, and three CTAs (Start Free Trial, View Demo, Read Docs). Includes animated flow diagram.

### 2. Problem Statement
Three-column layout explaining the pain points: Regulatory Pressure, Data Privacy Concerns, and Operational Burden.

### 3. Three-Service Platform
Interactive tabs showcasing Simple Attestations, Product Passports, and Zero-Knowledge Proofs with detailed features and pricing.

### 4. How It Works
Timeline-based section showing the three-step process: Attest → Anchor → Verify or Prove.

### 5. Industry Use Cases
Four industry cards: Manufacturing, Food & Agriculture, Batteries & EV, and Pharma & Healthcare with specific examples.

### 6. Why ProofPass
Comparison table vs IBM Food Trust, SAP/Oracle, and Custom Build solutions with key differentiators.

### 7. Pricing
Three pricing tiers (Free, Professional, Enterprise) with FAQ accordion.

### 8. Technical Trust Signals
Technology badges (W3C, Stellar, Optimism, etc.) with animated performance metrics.

### 9. Social Proof
Customer testimonials with ratings and company information.

### 10. Resources
Links to documentation, use cases, and company information.

### 11. Final CTA
Strong call-to-action before footer with trust indicators.

### 12. Footer
Comprehensive footer with links, newsletter signup, and social media.

## Design System

### Colors
- **Primary**: #0066CC (blue - trust, technology)
- **Secondary**: #00A86B (green - verification, success)
- **Accent**: #FF6B35 (orange - attention, ZK proofs)
- **Dark**: #2C3E50
- **Light Gray**: #ECF0F1
- **White**: #FFFFFF

### Typography
- **Font**: Inter (via next/font/google)
- **Headings**: Bold, large sizes
- **Body**: Regular weight, readable line-height

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

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

See LICENSE file for details.

## Support

For questions or issues, please contact the development team or open an issue in the repository.

---

Built for regulated industries with precision and care.
