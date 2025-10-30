"use client"

import { CheckCircle2, X, Minus } from "lucide-react"

export function ComparisonTableEnterprise() {
  const features = [
    {
      feature: "Cost per attestation",
      proofpass: "€0.001",
      blockchain: "€0.50+",
      erp: "€0.20+",
      custom: "€50-100",
      proofpassBest: true,
    },
    {
      feature: "Setup time",
      proofpass: "5 days",
      blockchain: "3-6 months",
      erp: "6-12 months",
      custom: "18+ months",
      proofpassBest: true,
    },
    {
      feature: "Zero-Knowledge Proofs",
      proofpass: true,
      blockchain: false,
      erp: false,
      custom: "manual",
      proofpassBest: true,
    },
    {
      feature: "Open Standards (W3C)",
      proofpass: "Full",
      blockchain: "Partial",
      erp: "Proprietary",
      custom: "Variable",
      proofpassBest: true,
    },
    {
      feature: "Multi-blockchain",
      proofpass: true,
      blockchain: "Limited",
      erp: "Limited",
      custom: true,
      proofpassBest: false,
    },
    {
      feature: "SLA",
      proofpass: "99.9%",
      blockchain: "99.5%",
      erp: "99.0%",
      custom: "N/A",
      proofpassBest: true,
    },
    {
      feature: "On-premise option",
      proofpass: "Enterprise",
      blockchain: false,
      erp: "Expensive",
      custom: true,
      proofpassBest: false,
    },
    {
      feature: "API-first",
      proofpass: true,
      blockchain: "Limited",
      erp: "Complex",
      custom: "Custom",
      proofpassBest: true,
    },
    {
      feature: "Total 3-year TCO*",
      proofpass: "€50K",
      blockchain: "€500K+",
      erp: "€300K+",
      custom: "€2M+",
      proofpassBest: true,
    },
  ]

  const renderCell = (value: boolean | string) => {
    if (value === true) {
      return (
        <div className="flex justify-center">
          <CheckCircle2 className="h-5 w-5 text-secondary" />
        </div>
      )
    } else if (value === false) {
      return (
        <div className="flex justify-center">
          <X className="h-5 w-5 text-error" />
        </div>
      )
    } else if (value === "manual" || value === "N/A" || value === "Variable") {
      return (
        <div className="flex justify-center">
          <Minus className="h-5 w-5 text-muted-foreground" />
        </div>
      )
    } else {
      return <span>{value}</span>
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Enterprises Choose ProofPass
          </h2>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border-2 border-border overflow-x-auto shadow-sm">
          <table className="w-full">
            <thead className="bg-muted border-b-2 border-border">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">
                  Feature
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold text-accent bg-accent/5">
                  ProofPass
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold text-foreground">
                  Blockchain Platforms
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold text-foreground">
                  Legacy ERP Systems
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold text-foreground">
                  Custom Build
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {features.map((row, index) => (
                <tr
                  key={index}
                  className={`hover:bg-muted/50 transition-colors ${
                    row.proofpassBest ? "bg-accent/[0.02]" : ""
                  }`}
                >
                  <td className="px-6 py-4 text-sm font-medium text-foreground">
                    {row.feature}
                  </td>
                  <td
                    className={`px-6 py-4 text-sm text-center ${
                      row.proofpassBest
                        ? "bg-accent/5 font-semibold text-accent"
                        : "text-foreground"
                    }`}
                  >
                    {renderCell(row.proofpass)}
                  </td>
                  <td className="px-6 py-4 text-sm text-center text-muted-foreground">
                    {renderCell(row.blockchain)}
                  </td>
                  <td className="px-6 py-4 text-sm text-center text-muted-foreground">
                    {renderCell(row.erp)}
                  </td>
                  <td className="px-6 py-4 text-sm text-center text-muted-foreground">
                    {renderCell(row.custom)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-muted-foreground mt-4 text-center">
          *Based on 100K attestations/year
        </p>

        {/* Key Differentiators */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          {[
            {
              number: "1",
              title: "Open Standards = No Vendor Lock-in",
              description: "W3C Verifiable Credentials ensure data portability",
            },
            {
              number: "2",
              title: "Privacy by Design",
              description: "Only platform with zero-knowledge proofs as standard",
            },
            {
              number: "3",
              title: "Enterprise SLA",
              description: "99.9% uptime, 24/7 support, dedicated account manager",
            },
            {
              number: "4",
              title: "Rapid Deployment",
              description: "Production-ready in 5 days, not 6+ months",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {item.number}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
