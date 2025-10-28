"use client"

import { FileText, Lock, Database, CheckCircle2, ChevronRight } from "lucide-react"

export function HowItWorksEnterprise() {
  const steps = [
    {
      icon: FileText,
      title: "CREATE",
      subtitle: "Attestation",
      description: "Your Systems",
      details: ["ERP integration", "API/SDK", "Batch upload"],
    },
    {
      icon: Lock,
      title: "SIGN",
      subtitle: "Cryptographic",
      description: "ProofPass Platform",
      details: ["DID generation", "Ed25519 signing", "W3C VC standard"],
    },
    {
      icon: Database,
      title: "ANCHOR",
      subtitle: "Blockchain",
      description: "Stellar/Optimism",
      details: ["Immutable record", "<5 sec finality", "Permanent storage"],
    },
    {
      icon: CheckCircle2,
      title: "VERIFY",
      subtitle: "Public or ZK",
      description: "Stakeholders",
      details: ["Instant verify", "No login needed", "QR or API"],
    },
  ]

  const technicalDetails = [
    {
      category: "Security",
      items: [
        "Ed25519 elliptic curve signatures",
        "SHA-256 cryptographic hashing",
        "Decentralized Identifiers (DIDs)",
        "W3C Verifiable Credentials standard",
      ],
    },
    {
      category: "Infrastructure",
      items: [
        "99.9% uptime SLA",
        "Multi-region deployment",
        "ISO 27001 compliant",
        "GDPR compliant",
        "W3C VC standard",
      ],
    },
    {
      category: "Blockchain",
      items: [
        "Stellar: Primary (0.00001 XLM/tx)",
        "Optimism: Secondary (EVM compatible)",
        "Custom chain: Enterprise option",
        "Transaction batching for efficiency",
      ],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Enterprise Architecture Built for Scale
          </h2>
        </div>

        {/* Process Flow */}
        <div className="mb-16">
          <div className="grid md:grid-cols-4 gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  <div className="bg-white border-2 border-border rounded-lg p-6 h-full hover:border-accent transition-colors">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>

                    {/* Title */}
                    <div className="mb-2">
                      <div className="text-sm font-semibold text-accent uppercase tracking-wide">
                        {step.title}
                      </div>
                      <div className="text-lg font-bold text-foreground">
                        {step.subtitle}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="text-sm text-muted-foreground mb-3">
                      {step.description}
                    </div>

                    {/* Details */}
                    <ul className="space-y-1">
                      {step.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-muted-foreground flex items-center gap-1"
                        >
                          <span className="w-1 h-1 rounded-full bg-accent" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
                      <ChevronRight className="h-8 w-8 text-accent" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Technical Details */}
        <div className="grid md:grid-cols-3 gap-8">
          {technicalDetails.map((section, index) => (
            <div key={index} className="bg-muted rounded-lg border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">
                {section.category}:
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
