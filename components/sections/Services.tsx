"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, Package, EyeOff, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Services() {
  const [activeTab, setActiveTab] = useState(0)

  const services = [
    {
      id: 0,
      icon: CheckCircle2,
      title: "Simple Attestations",
      subtitle: "Attest Any Business Event",
      description: "Create cryptographically-signed proofs for any business event in seconds.",
      points: [
        "Quality control tests",
        "Safety inspections",
        "Compliance audits",
        "Certificates & credentials",
        "Shipment confirmations",
      ],
      pricing: "From 0.001 EUR per attestation",
      cta: "Start Attesting",
      color: "primary",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      id: 1,
      icon: Package,
      title: "Product Passports",
      subtitle: "Complete Product History",
      description: "Aggregate multiple attestations into comprehensive product passports.",
      points: [
        "Aggregate multiple attestations",
        "Full supply chain traceability",
        "EU Battery Passport compliance",
        "One QR code, entire history",
        "Automatic passport updates",
      ],
      pricing: "Included in Professional tier",
      cta: "Create Passport",
      color: "secondary",
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      id: 2,
      icon: EyeOff,
      title: "Zero-Knowledge Proofs",
      subtitle: "Prove Without Revealing",
      description: "Generate cryptographic proofs that verify claims without exposing sensitive data.",
      points: [
        "Threshold proofs (x > limit)",
        "Range proofs (min < x < max)",
        "Set membership verification",
        "Protect competitive data",
        "Custom proof circuits",
      ],
      pricing: "50 proofs included",
      cta: "Generate Proof",
      color: "accent",
      gradient: "from-accent/20 to-accent/5",
    },
  ]

  const activeService = services[activeTab]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Three Services.{" "}
            <span className="text-primary">One Platform.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From simple attestations to complex zero-knowledge proofs, ProofPass provides
            everything you need to make your supply chain verifiable.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-6 py-4 rounded-lg border-2 transition-all ${
                  activeTab === index
                    ? `border-${service.color} bg-${service.color}/5`
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <Icon
                  className={`h-5 w-5 ${
                    activeTab === index ? `text-${service.color}` : "text-muted-foreground"
                  }`}
                />
                <span
                  className={`font-medium ${
                    activeTab === index ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {service.title}
                </span>
              </motion.button>
            )
          })}
        </div>

        {/* Active Service Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${activeService.gradient}`} />
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left: Content */}
                  <div>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-${activeService.color}/10 mb-6`}>
                      <activeService.icon className={`h-8 w-8 text-${activeService.color}`} />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {activeService.title}
                    </h3>
                    <p className="text-lg text-primary mb-4">
                      {activeService.subtitle}
                    </p>
                    <p className="text-muted-foreground mb-6">
                      {activeService.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {activeService.points.map((point, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <svg
                            className={`w-5 h-5 mt-0.5 flex-shrink-0 text-${activeService.color}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-foreground">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <Button size="lg" className="group">
                        {activeService.cta}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <span className="text-sm text-muted-foreground font-medium">
                        {activeService.pricing}
                      </span>
                    </div>
                  </div>

                  {/* Right: Visual */}
                  <div className="relative">
                    <div className={`rounded-xl bg-gradient-to-br ${activeService.gradient} p-8 border-2 border-gray-100`}>
                      <div className="bg-white rounded-lg p-6 shadow-lg">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between pb-4 border-b">
                            <span className="font-medium">Example Use Case</span>
                            <span className={`text-xs px-2 py-1 rounded-full bg-${activeService.color}/10 text-${activeService.color}`}>
                              Live
                            </span>
                          </div>
                          {activeTab === 0 && (
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Event:</span>
                                <span className="font-medium">Quality Test Passed</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Product:</span>
                                <span className="font-medium">Batch #12345</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Timestamp:</span>
                                <span className="font-medium">2025-10-27 14:32</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Cost:</span>
                                <span className="font-medium text-secondary">0.001 EUR</span>
                              </div>
                            </div>
                          )}
                          {activeTab === 1 && (
                            <div className="space-y-3">
                              <div className="text-sm text-muted-foreground">Contains 15 attestations:</div>
                              <div className="space-y-2">
                                {["Raw Material Sourcing", "Manufacturing", "Quality Control", "Shipping", "Carbon Footprint"].map((item, i) => (
                                  <div key={i} className="flex items-center gap-2 text-sm">
                                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                                    <span>{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          {activeTab === 2 && (
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Proof Type:</span>
                                <span className="font-medium">Threshold</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Claim:</span>
                                <span className="font-medium">Capacity {">"} 1000 units</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Actual Value:</span>
                                <span className="font-medium text-muted-foreground">Hidden</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Verified:</span>
                                <span className="font-medium text-secondary">✓ True</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
