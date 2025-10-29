"use client"

import { FileCheck, Shield, QrCode, CheckCircle2 } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: FileCheck,
      title: "Create Attestations",
      description: "Any business event becomes a cryptographically-signed digital attestation",
      examples: [
        "Quality inspection passed",
        "Product shipped from warehouse",
        "Temperature maintained at 4°C",
        "Organic certification verified"
      ]
    },
    {
      number: "2",
      icon: Shield,
      title: "Prove Without Revealing",
      description: "Use Zero-Knowledge Proofs to prove claims without exposing sensitive data",
      examples: [
        "Carbon footprint < 5kg CO2/kWh",
        "Price paid within market range",
        "Supplier meets labor standards",
        "Product is authentic"
      ]
    },
    {
      number: "3",
      icon: QrCode,
      title: "Generate Digital Passports",
      description: "Aggregate all attestations into a Product Passport with QR code",
      examples: [
        "Complete supply chain history",
        "All certifications in one place",
        "Immutable blockchain record",
        "Instant verification"
      ]
    },
    {
      number: "4",
      icon: CheckCircle2,
      title: "Anyone Can Verify",
      description: "Customers, auditors, or partners verify authenticity instantly",
      examples: [
        "Scan QR → See full history",
        "No login required",
        "Works on any device",
        "Compliance reports in seconds"
      ]
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How ProofPass Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Turn any business event into a verifiable attestation. Build trust without revealing secrets.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border z-0" />
                )}

                <div className="relative bg-white border-2 border-border rounded-lg p-6 hover:border-accent transition-colors">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-4 mt-2">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Examples */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-accent uppercase tracking-wide">Examples:</div>
                    <ul className="space-y-1.5">
                      {step.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-3">
            <span className="text-accent font-semibold">💡 Start in 5 minutes</span>
            <span className="text-muted-foreground">→</span>
            <a href="/docs" className="text-accent hover:text-accent-600 font-semibold underline">
              View Quick Start Guide
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
