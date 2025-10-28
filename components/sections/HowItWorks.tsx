"use client"

import { motion } from "framer-motion"
import { FileText, Link2, CheckCircle2, ArrowDown } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Attest",
      subtitle: "Create Your Attestation",
      description: "Create attestation via API or dashboard. Sign with your organization's DID. Add event data (who, what, when, where).",
      features: [
        "RESTful API or web dashboard",
        "Decentralized Identifier (DID) signing",
        "Structured event data",
        "Batch operations supported",
      ],
      color: "primary",
    },
    {
      number: "02",
      icon: Link2,
      title: "Anchor",
      subtitle: "Blockchain Timestamp",
      description: "Cryptographic signature. Blockchain timestamp for immutable proof stored forever.",
      features: [
        "Ed25519 cryptographic signatures",
        "Multiple blockchain support",
        "<5 second finality",
        "Permanent, tamper-proof record",
      ],
      color: "secondary",
    },
    {
      number: "03",
      icon: CheckCircle2,
      title: "Verify or Prove",
      subtitle: "Share With Confidence",
      description: "Instant verification via QR code. OR generate ZK proof to hide sensitive data. Share with regulators, partners, customers.",
      features: [
        "QR code for instant verification",
        "Zero-knowledge proofs on demand",
        "Public verification portal",
        "API for integration",
      ],
      color: "accent",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Three Steps to{" "}
            <span className="text-primary">Verifiable Trust</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From creation to verification in minutes, not weeks. Our streamlined process
            makes blockchain attestations as easy as sending an email.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`grid lg:grid-cols-2 gap-8 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}>
                    {/* Content */}
                    <div className={`${isEven ? "" : "lg:col-start-2"}`}>
                      <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-gray-200 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 rounded-xl bg-${step.color}/10 flex items-center justify-center`}>
                            <Icon className={`h-8 w-8 text-${step.color}`} />
                          </div>
                          <div>
                            <div className={`text-sm font-bold text-${step.color} mb-1`}>
                              STEP {step.number}
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">
                              {step.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-lg font-medium text-primary mb-3">
                          {step.subtitle}
                        </p>
                        <p className="text-muted-foreground mb-6">
                          {step.description}
                        </p>

                        <ul className="space-y-3">
                          {step.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <svg
                                className={`w-5 h-5 mt-0.5 flex-shrink-0 text-${step.color}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-sm text-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Visual */}
                    <div className={`${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}>
                      <div className="relative">
                        <div className={`rounded-2xl bg-gradient-to-br from-${step.color}/10 to-${step.color}/5 p-8 border-2 border-${step.color}/20`}>
                          <div className="bg-white rounded-xl p-6 shadow-inner">
                            <div className="space-y-3">
                              <div className="flex items-center gap-3">
                                <div className={`w-3 h-3 rounded-full bg-${step.color}`} />
                                <div className="h-2 bg-gray-200 rounded flex-1" />
                              </div>
                              <div className="flex items-center gap-3">
                                <div className={`w-3 h-3 rounded-full bg-${step.color}/50`} />
                                <div className="h-2 bg-gray-200 rounded flex-1 max-w-[80%]" />
                              </div>
                              <div className="flex items-center gap-3">
                                <div className={`w-3 h-3 rounded-full bg-${step.color}/30`} />
                                <div className="h-2 bg-gray-200 rounded flex-1 max-w-[60%]" />
                              </div>
                            </div>
                            <div className={`mt-6 pt-6 border-t-2 border-${step.color}/20 text-center`}>
                              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-${step.color}/10 text-${step.color} text-sm font-medium`}>
                                <CheckCircle2 className="h-4 w-4" />
                                {step.title} Complete
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Step number badge */}
                        <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-full bg-${step.color} text-white flex items-center justify-center text-2xl font-bold shadow-lg`}>
                          {index + 1}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center my-8 lg:hidden">
                      <ArrowDown className="h-8 w-8 text-primary" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground mb-4">
            Ready to get started?
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View Pricing Plans
            <ArrowDown className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
