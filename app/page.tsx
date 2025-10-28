import { HeaderEnterprise } from "@/components/shared/HeaderEnterprise"
import { FooterEnterprise } from "@/components/shared/FooterEnterprise"

// ENTERPRISE B2B REDESIGN
import { HeroEnterprise } from "@/components/sections/HeroEnterprise"
import { PublicGoodBanner } from "@/components/sections/PublicGoodBanner"
import { SocialProofEnterprise } from "@/components/sections/SocialProofEnterprise"
import { ProblemStatement } from "@/components/sections/ProblemStatement"
import { SolutionTiers } from "@/components/sections/SolutionTiers"
import { HowItWorksEnterprise } from "@/components/sections/HowItWorksEnterprise"
import { IndustryUseCases } from "@/components/sections/IndustryUseCases"
import { ComparisonTableEnterprise } from "@/components/sections/ComparisonTableEnterprise"
import { PricingEnterprise } from "@/components/sections/PricingEnterprise"
import { SecurityCompliance } from "@/components/sections/SecurityCompliance"
import { IntegrationDeveloper } from "@/components/sections/IntegrationDeveloper"
import { EnterpriseCTA } from "@/components/sections/EnterpriseCTA"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeaderEnterprise />

      {/* ENTERPRISE B2B REDESIGN */}
      <HeroEnterprise />
      <PublicGoodBanner />
      <SocialProofEnterprise />
      <ProblemStatement />
      <SolutionTiers />
      <HowItWorksEnterprise />
      <IndustryUseCases />
      <ComparisonTableEnterprise />
      <PricingEnterprise />
      <SecurityCompliance />
      <IntegrationDeveloper />
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
            "description": "Enterprise-grade platform for creating cryptographically-signed proofs of business events. Enable instant verification across your supply chain. Built for regulated industries. ISO 27001 certified. Open source.",
            "operatingSystem": "Web",
            "keywords": "attestations, blockchain, compliance, supply chain, traceability, zero-knowledge proofs, enterprise, B2B, W3C credentials, digital public good"
          })
        }}
      />
    </main>
  )
}
