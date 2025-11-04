"use client"

import { FileCheck, GitBranch, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SolutionTiers() {
  const tiers = [
    {
      icon: FileCheck,
      title: "Digital Attestations",
      description:
        "Create cryptographically-signed proofs for any business event.",
      features: [
        "REST API & SDKs (TypeScript, Python, Go)",
        "W3C DID methods (did:key, did:web)",
        "Ed25519 cryptographic signatures",
        "Batch operations (1000s/minute)",
        "3 blockchains (Stellar, Optimism, Arbitrum)",
        "QR code generation",
        "Webhook notifications",
      ],
      useCases: [
        "Quality control certificates",
        "Compliance audit records",
        "Shipment confirmations",
        "Safety inspections",
      ],
      pricing: "From €0.001 per attestation",
    },
    {
      icon: GitBranch,
      title: "Product Passports",
      description:
        "Aggregate multiple attestations into comprehensive product histories. EU Digital Product Passport (DPP) compliant.",
      features: [
        "🇪🇺 EU Digital Product Passport ready",
        "Multi-source data aggregation",
        "W3C Verifiable Presentation composition",
        "Timeline visualization & lifecycle tracking",
        "Regulatory template library (EU Battery, Electronics)",
        "Automated reporting & export (JSON, PDF, XML)",
        "QR code + NFC tag support",
        "Circular economy enablement",
      ],
      useCases: [
        "EU Battery Passport (Regulation 2023/1542)",
        "EU Ecodesign for Sustainable Products (ESPR)",
        "Farm-to-table traceability & food safety",
        "Pharmaceutical serialization (FMD)",
        "Manufacturing provenance & origin",
      ],
      pricing: "Included in: Pro tier+",
    },
    {
      icon: ShieldCheck,
      title: "Privacy-Preserving Verification",
      description:
        "Prove compliance without revealing sensitive competitive data.",
      features: [
        "Groth16 zk-SNARK proof generation",
        "Threshold proofs (x > limit)",
        "Range proofs (min < x < max)",
        "Set membership proofs",
        "Custom circuit deployment (Circom)",
        "Instant cryptographic verification",
        "ZK-toolkit with Rust bindings",
      ],
      useCases: [
        "Carbon footprint compliance",
        "Production capacity verification",
        "Revenue threshold proof",
        "Material sourcing validation",
      ],
      pricing: "Available in: Professional tier+ (50 included)",
    },
  ]

  return (
    <section id="platform" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Enterprise-Grade Attestation Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From single attestations to complex zero-knowledge proofs. One
            platform for your entire compliance infrastructure.
          </p>
        </div>

        {/* Three Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => {
            const Icon = tier.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg border border-border p-8 hover:shadow-md transition-shadow"
              >
                {/* Icon & Title */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {tier.title}
                  </h3>
                  <p className="text-muted-foreground">{tier.description}</p>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <div className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                    Key Features:
                  </div>
                  <ul className="space-y-2">
                    {tier.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-secondary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Use Cases */}
                <div className="mb-6 pb-6 border-b border-border">
                  <div className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                    Use Cases:
                  </div>
                  <ul className="space-y-2">
                    {tier.useCases.map((useCase, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="text-sm font-semibold text-accent">
                  {tier.pricing}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="border-2" asChild>
            <a href="#pricing">
              View Detailed Comparison
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
