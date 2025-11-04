"use client"

import { useState } from "react"
import { Factory, Leaf, Pill, Truck, CheckCircle2, FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function IndustryUseCases() {
  const [activeTab, setActiveTab] = useState(0)

  const industries = [
    {
      id: 0,
      icon: Factory,
      name: "Manufacturing & Automotive",
      challenge:
        "EU Battery Passport compliance by Feb 2027. Need to track full battery lifecycle without exposing proprietary manufacturing processes.",
      solution: [
        "Attestations for each production stage",
        "ZK proofs for carbon footprint (<5kg CO2/kWh threshold)",
        "Aggregated Product Passport per battery",
        "Automated regulatory reporting",
      ],
      results: [
        "Compliance achieved in 6 weeks",
        "Reduced audit preparation by 85%",
        "Protected manufacturing IP with ZK proofs",
      ],
    },
    {
      id: 1,
      icon: Leaf,
      name: "Food & Agriculture",
      challenge:
        "FDA requires 48-hour trace-back capability. Manual processes take 2-3 weeks during recalls.",
      solution: [
        "Farm attestation: organic certification, harvest date",
        "Processing attestation: facility inspection, batch number",
        "Transport attestation: cold chain monitoring",
        "Aggregated passport accessible via QR code",
      ],
      results: [
        "Trace-back in <2 minutes (was 2+ weeks)",
        "Prevented $2M potential recall",
        "FDA audit passed with zero findings",
      ],
    },
    {
      id: 2,
      icon: Pill,
      name: "Pharmaceuticals",
      challenge:
        "Track & trace compliance (DSCSA). Combat $200B annual counterfeit drug market.",
      solution: [
        "Serialization attestations per unit",
        "Chain of custody tracking",
        "Authentication at each transfer point",
        "Immutable verification trail",
      ],
      results: [
        "Zero counterfeit incidents",
        "99.9% serialization accuracy",
        "Reduced verification time by 90%",
      ],
    },
    {
      id: 3,
      icon: Truck,
      name: "Logistics & Supply Chain",
      challenge:
        "Multi-party supply chains with trust issues. Paper documents easily forged.",
      solution: [
        "Digital attestations replace paper BoL",
        "Each party verifies previous attestations",
        "Automated handoff notifications",
        "Complete audit trail",
      ],
      results: [
        "Eliminated paper documentation",
        "Reduced disputes by 75%",
        "Faster customs clearance",
      ],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Purpose-Built for{" "}
            <span className="text-accent">Regulated Industries</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === industry.id
                    ? "bg-accent text-white shadow-md"
                    : "bg-white text-foreground border-2 border-border hover:border-accent"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="hidden sm:inline">{industry.name}</span>
                <span className="sm:hidden">{industry.name.split(" ")[0]}</span>
              </button>
            )
          })}
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg border-2 border-border p-8 lg:p-12">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Challenge:
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {industries[activeTab].challenge}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ProofPass Solution:
            </h3>
            <ul className="space-y-3">
              {industries[activeTab].solution.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8 pb-8 border-b border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Results:
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {industries[activeTab].results.map((result, idx) => (
                <div
                  key={idx}
                  className="bg-secondary/10 border border-secondary/20 rounded-lg p-4"
                >
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-foreground">
                      {result}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button size="lg" variant="outline" className="border-2">
            <FileDown className="mr-2 h-5 w-5" />
            Download Case Study PDF
          </Button>
        </div>
      </div>
    </section>
  )
}
