import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"

// NEW SECTIONS - Complete Redesign
import { HeroNew } from "@/components/sections/HeroNew"
import { WhatIsProofPass } from "@/components/sections/WhatIsProofPass"
import { ConcreteUseCases } from "@/components/sections/ConcreteUseCases"
import { ThreeServices } from "@/components/sections/ThreeServices"
import { TrustNetwork } from "@/components/sections/TrustNetwork"
import { Integration } from "@/components/sections/Integration"
import { VsAlternatives } from "@/components/sections/VsAlternatives"
import { PricingNew } from "@/components/sections/PricingNew"
import { ResourcesNew } from "@/components/sections/Resources"
import { CompleteFAQ } from "@/components/sections/CompleteFAQ"
import { FinalCTANew } from "@/components/sections/FinalCTANew"

// Keeping these temporarily
import { TrustSignals } from "@/components/sections/TrustSignals"
import { SocialProof } from "@/components/sections/SocialProof"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* COMPLETE REDESIGN - Shopify Style in Spanish */}
      <HeroNew />
      <WhatIsProofPass />
      <ConcreteUseCases />
      <ThreeServices />
      <TrustNetwork />
      <Integration />
      <VsAlternatives />
      <PricingNew />
      <ResourcesNew />
      <TrustSignals />
      <SocialProof />
      <CompleteFAQ />
      <FinalCTANew />

      <Footer />

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
              "lowPrice": "0",
              "highPrice": "199",
              "priceCurrency": "EUR"
            },
            "description": "Como DocuSign para tu Supply Chain. Crea pruebas digitales verificables de cualquier evento de negocio. Sin blockchain expertise. Open source.",
            "operatingSystem": "Web",
            "keywords": "attestations, blockchain, compliance, supply chain, traceability, zero-knowledge proofs"
          })
        }}
      />
    </main>
  )
}
