"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

export function Comparison() {
  const comparisonData = [
    {
      feature: "Cost per credential",
      proofpass: "0.001 EUR",
      ibm: "0.50+ EUR",
      sap: "0.20+ EUR",
      custom: "50-100 EUR",
    },
    {
      feature: "Setup time",
      proofpass: "2 weeks",
      ibm: "3-6 months",
      sap: "6-12 months",
      custom: "18+ months",
    },
    {
      feature: "Zero-Knowledge Proofs",
      proofpass: true,
      ibm: false,
      sap: false,
      custom: "Manual",
    },
    {
      feature: "Open Source",
      proofpass: true,
      ibm: false,
      sap: false,
      custom: "Variable",
    },
    {
      feature: "Open Standards (W3C)",
      proofpass: true,
      ibm: false,
      sap: false,
      custom: "Variable",
    },
    {
      feature: "Multi-chain Support",
      proofpass: true,
      ibm: "Limited",
      sap: "Limited",
      custom: "Custom",
    },
  ]

  const differentiators = [
    {
      emoji: "📖",
      title: "100% Open Source",
      description: "Transparent, auditable code on GitHub",
    },
    {
      emoji: "🚀",
      title: "1000x cheaper",
      description: "Than enterprise blockchain solutions",
    },
    {
      emoji: "⚡",
      title: "2-week integration",
      description: "REST API + SDKs ready to use",
    },
    {
      emoji: "🔒",
      title: "ZK proofs as a service",
      description: "Only platform with built-in privacy",
    },
    {
      emoji: "🌐",
      title: "W3C standards",
      description: "Cross-platform compatibility guaranteed",
    },
    {
      emoji: "⛓️",
      title: "Multi-chain flexibility",
      description: "Support for multiple blockchains",
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
            Why <span className="text-primary">ProofPass?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Compare us with enterprise blockchain platforms and see why companies
            choose ProofPass for verifiable attestations.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left p-6 font-semibold text-foreground">Feature</th>
                  <th className="p-6">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-primary rounded-lg mb-2 flex items-center justify-center">
                        <span className="text-white font-bold">P</span>
                      </div>
                      <span className="font-bold text-primary">ProofPass</span>
                    </div>
                  </th>
                  <th className="p-6 text-center font-semibold text-muted-foreground">
                    IBM Food Trust
                  </th>
                  <th className="p-6 text-center font-semibold text-muted-foreground">
                    SAP/Oracle
                  </th>
                  <th className="p-6 text-center font-semibold text-muted-foreground">
                    Custom Build
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="p-6 font-medium text-foreground">{row.feature}</td>
                    <td className="p-6 text-center">
                      {typeof row.proofpass === "boolean" ? (
                        row.proofpass ? (
                          <div className="flex justify-center">
                            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                              <Check className="h-5 w-5 text-secondary" />
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                              <X className="h-5 w-5 text-gray-400" />
                            </div>
                          </div>
                        )
                      ) : (
                        <span className="font-bold text-primary">{row.proofpass}</span>
                      )}
                    </td>
                    <td className="p-6 text-center text-muted-foreground">
                      {typeof row.ibm === "boolean" ? (
                        row.ibm ? (
                          <div className="flex justify-center">
                            <Check className="h-5 w-5 text-secondary" />
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <X className="h-5 w-5 text-gray-400" />
                          </div>
                        )
                      ) : (
                        row.ibm
                      )}
                    </td>
                    <td className="p-6 text-center text-muted-foreground">
                      {typeof row.sap === "boolean" ? (
                        row.sap ? (
                          <div className="flex justify-center">
                            <Check className="h-5 w-5 text-secondary" />
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <X className="h-5 w-5 text-gray-400" />
                          </div>
                        )
                      ) : (
                        row.sap
                      )}
                    </td>
                    <td className="p-6 text-center text-muted-foreground">
                      {typeof row.custom === "boolean" ? (
                        row.custom ? (
                          <div className="flex justify-center">
                            <Check className="h-5 w-5 text-secondary" />
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <X className="h-5 w-5 text-gray-400" />
                          </div>
                        )
                      ) : (
                        row.custom
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Key Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Key Differentiators</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <div className="font-bold text-foreground mb-2">{item.title}</div>
                <div className="text-sm text-muted-foreground">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
