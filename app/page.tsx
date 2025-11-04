import { HeaderEnterprise } from "@/components/shared/HeaderEnterprise"
import { FooterEnterprise } from "@/components/shared/FooterEnterprise"

// ENTERPRISE B2B REDESIGN
import { HeroEnterprise } from "@/components/sections/HeroEnterprise"
import { PublicGoodBanner } from "@/components/sections/PublicGoodBanner"
import { CommonsImpact } from "@/components/sections/CommonsImpact"
import { SocialProofEnterprise } from "@/components/sections/SocialProofEnterprise"
import { ProblemStatement } from "@/components/sections/ProblemStatement"
import { SolutionTiers } from "@/components/sections/SolutionTiers"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { DetailedCaseStudies } from "@/components/sections/DetailedCaseStudies"
import { ComparisonTableEnterprise } from "@/components/sections/ComparisonTableEnterprise"
import { BlockchainNetworks } from "@/components/sections/BlockchainNetworks"
import { PricingEnterprise } from "@/components/sections/PricingEnterprise"
import { SecurityCompliance } from "@/components/sections/SecurityCompliance"
import { ArchitectureOverview } from "@/components/sections/ArchitectureOverview"
import { IntegrationDeveloper } from "@/components/sections/IntegrationDeveloper"
import { EnterpriseCTA } from "@/components/sections/EnterpriseCTA"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeaderEnterprise />

      {/* ENTERPRISE B2B REDESIGN - Optimized Flow */}
      <HeroEnterprise />
      <SocialProofEnterprise />
      <ProblemStatement />
      <SolutionTiers />
      <HowItWorks />
      <BlockchainNetworks />
      <DetailedCaseStudies />
      <ComparisonTableEnterprise />
      <PricingEnterprise />
      <SecurityCompliance />
      <ArchitectureOverview />
      <IntegrationDeveloper />
      <PublicGoodBanner />
      <CommonsImpact />
      <EnterpriseCTA />

      <FooterEnterprise />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "ProofPass",
            "applicationCategory": "BusinessApplication",
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "199",
              "highPrice": "50000",
              "priceCurrency": "EUR"
            },
            "description": "Open infrastructure for supply chain transparency. A Digital Public Good providing cryptographic trust for global supply chains. Built by the commons, for the commons—no gatekeepers, no vendor lock-in. ISO 27001 certified.",
            "operatingSystem": "Web",
            "keywords": "attestations, blockchain, compliance, supply chain, traceability, zero-knowledge proofs, enterprise, B2B, W3C credentials, digital public good"
          })
        }}
      />
    </main>
  )
}
