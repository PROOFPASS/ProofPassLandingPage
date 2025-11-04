"use client"

import { motion } from "framer-motion"
import { Factory, Wheat, Battery, HeartPulse } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function UseCases() {
  const industries = [
    {
      icon: Factory,
      name: "Manufacturing",
      useCase: "Quality control attestations + capacity ZK proofs",
      example: "Prove production capacity >1000 units without revealing exact numbers",
      benefits: [
        "Automated quality certifications",
        "Prove capabilities to buyers",
        "Protect competitive data",
        "Streamline supplier audits",
      ],
      color: "primary",
      bgGradient: "from-primary/10 to-primary/5",
    },
    {
      icon: Wheat,
      name: "Food & Agriculture",
      useCase: "Farm-to-table traceability + organic certification",
      example: "48-hour traceability compliance with single QR scan",
      benefits: [
        "Complete supply chain visibility",
        "FDA compliance automation",
        "Reduce food fraud (8-12B EUR/year)",
        "Instant recall capability",
      ],
      color: "secondary",
      bgGradient: "from-secondary/10 to-secondary/5",
    },
    {
      icon: Battery,
      name: "Batteries & EV",
      useCase: "Battery Passport + carbon footprint ZK proofs",
      example: "Prove carbon <5kg CO2/kWh without revealing exact 3.2kg",
      benefits: [
        "EU Battery Passport ready",
        "Carbon footprint verification",
        "Recycling content tracking",
        "Competitive data protection",
      ],
      color: "accent",
      bgGradient: "from-accent/10 to-accent/5",
    },
    {
      icon: HeartPulse,
      name: "Pharma & Healthcare",
      useCase: "Drug serialization + compliance ZK proofs",
      example: "Anti-counterfeit tracking + prove regulatory compliance",
      benefits: [
        "Track-and-trace compliance",
        "Anti-counterfeiting protection",
        "Privacy-preserving audits",
        "Clinical trial verification",
      ],
      color: "primary",
      bgGradient: "from-primary/10 to-primary/5",
    },
  ]

  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by Industries That{" "}
            <span className="text-primary">Can&apos;t Afford to Trust</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From manufacturing to healthcare, regulated industries rely on ProofPass
            to prove compliance while protecting sensitive business data.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <div className={`h-2 bg-gradient-to-r ${industry.bgGradient}`} />
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-${industry.color}/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon className={`h-7 w-7 text-${industry.color}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {industry.name}
                        </h3>
                        <p className="text-sm text-primary font-medium">
                          {industry.useCase}
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-4 mb-6 border-l-4 border-primary">
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        Example Use Case:
                      </p>
                      <p className="text-foreground">
                        &ldquo;{industry.example}&rdquo;
                      </p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <p className="text-sm font-semibold text-foreground">Key Benefits:</p>
                      <ul className="space-y-2">
                        {industry.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <svg
                              className={`w-5 h-5 mt-0.5 flex-shrink-0 text-${industry.color}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="ghost" className="w-full group/btn">
                      Learn More
                      <svg
                        className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8 border"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1000x</div>
              <div className="text-sm text-muted-foreground">
                Cheaper than enterprise blockchain solutions
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">2 weeks</div>
              <div className="text-sm text-muted-foreground">
                Average integration time with REST API
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">
                Uptime SLA for enterprise customers
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
