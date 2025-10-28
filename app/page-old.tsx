import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"
import { Hero } from "@/components/sections/Hero"
import { Problem } from "@/components/sections/Problem"
import { Services } from "@/components/sections/Services"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { UseCases } from "@/components/sections/UseCases"
import { Comparison } from "@/components/sections/Comparison"
import { Pricing } from "@/components/sections/Pricing"
import { TrustSignals } from "@/components/sections/TrustSignals"
import { SocialProof } from "@/components/sections/SocialProof"
import { Resources } from "@/components/sections/Resources"
import { FinalCTA } from "@/components/sections/FinalCTA"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <Services />
      <HowItWorks />
      <UseCases />
      <Comparison />
      <Pricing />
      <TrustSignals />
      <SocialProof />
      <Resources />
      <FinalCTA />
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
            "description": "Create cryptographically-signed proofs for any business event. Prove compliance without revealing sensitive data. Open source blockchain platform.",
            "operatingSystem": "Web",
            "keywords": "attestations, blockchain, compliance, supply chain, traceability, zero-knowledge proofs"
          })
        }}
      />
    </main>
  )
}
