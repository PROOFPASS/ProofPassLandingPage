"use client"

import { useState } from "react"
import { ChevronRight, CheckCircle2, ArrowRight, Factory, Leaf, Pill } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DetailedCaseStudies() {
  const [activeCase, setActiveCase] = useState(0)

  const cases = [
    {
      id: 0,
      icon: Factory,
      company: "EuroPower Systems",
      industry: "Electric Vehicle Batteries",
      challenge: {
        title: "EU Battery Passport Compliance by February 2027",
        description:
          "EuroPower Systems produces 50,000 EV batteries per month. The new EU Battery Regulation requires a Digital Product Passport for each battery with full lifecycle data: carbon footprint, recycling content, supply chain provenance. Traditional paper certificates won't work at this scale.",
        problems: [
          "Manual data collection from 15+ suppliers takes 2-3 weeks per batch",
          "Cannot prove carbon footprint <5kg CO2/kWh without revealing exact manufacturing processes (competitive data)",
          "Need to aggregate data from: mining → refining → cell production → pack assembly → distribution",
          "Auditors require proof, but sharing exact numbers with competitors is not acceptable",
        ],
      },
      solution: {
        title: "ProofPass Implementation: 5-Day Deployment",
        steps: [
          {
            step: "Day 1-2: Supplier Integration",
            description:
              "Each supplier in the chain (cobalt mine, lithium refinery, cell manufacturer) creates attestations for their stage using ProofPass API. Example: Mine creates attestation for '10 tons cobalt, origin: Congo, date: 2024-01-15'",
            technical: "Simple REST API call or dashboard form. Takes 30 seconds per batch.",
          },
          {
            step: "Day 3: EuroPower Battery Production",
            description:
              "EuroPower receives supplier attestations via QR codes on shipping containers. Scans QR → verifies authenticity → adds their own attestation: 'Battery pack produced, voltage: 400V, capacity: 75kWh, facility: Munich Plant'",
            technical: "Verification is instant (2 seconds). Creating new attestation takes 20 seconds.",
          },
          {
            step: "Day 4: Zero-Knowledge Proof for Carbon",
            description:
              "EuroPower needs to prove 'Carbon footprint <5kg CO2/kWh' for EU compliance, but cannot reveal exact 3.2kg number (competitive secret). Creates ZK proof: 'I know a number X where X < 5, without revealing X'",
            technical: "ProofPass generates cryptographic proof. Auditor can verify claim is true without seeing actual data.",
          },
          {
            step: "Day 5: Product Passport Generation",
            description:
              "All attestations (mining → production → carbon proof) are aggregated into a single Product Passport. QR code printed on each battery. Customers/auditors scan QR → see full verified history.",
            technical: "Passport aggregates all attestations. Blockchain-anchored for immutability.",
          },
        ],
      },
      results: {
        metrics: [
          { label: "Time to compliance", before: "6+ months", after: "5 days", improvement: "97% faster" },
          { label: "Cost per battery", before: "€2.50", after: "€0.02", improvement: "99% cheaper" },
          { label: "Audit preparation", before: "3 weeks", after: "2 minutes", improvement: "Instant" },
          { label: "Data privacy", before: "Exposed to competitors", after: "ZK proofs protect IP", improvement: "100% private" },
        ],
        quote:
          "We went from panic about EU compliance to becoming the first battery manufacturer with full Digital Product Passports. ProofPass made it trivial.",
        author: "Chief Compliance Officer, EuroPower Systems",
      },
    },
    {
      id: 1,
      icon: Leaf,
      company: "FreshTrack Organic Foods",
      industry: "Farm-to-Table Supply Chain",
      challenge: {
        title: "FDA 48-Hour Trace-Back Requirement",
        description:
          "FreshTrack distributes organic produce from 200+ farms to 500+ stores. FDA requires ability to trace any product back to farm within 48 hours during recalls. Current process: paper logs, phone calls, manual spreadsheets = 2-3 weeks minimum.",
        problems: [
          "E. coli outbreak: took 18 days to identify contaminated farm",
          "$2M worth of safe product destroyed because couldn't prove which farms were clean",
          "Paper certificates easily forged (3 cases of fake 'organic' certification discovered)",
          "Cold chain monitoring: no way to prove 'kept at 4°C' during transport",
        ],
      },
      solution: {
        title: "ProofPass Implementation: Farm to Store",
        steps: [
          {
            step: "Farm: Harvest Attestation",
            description:
              "Farmer Juan harvests 500kg organic tomatoes on 2024-10-15. Creates attestation via mobile app: 'Harvest: 500kg tomatoes, organic cert: USDA-12345, field: A-3, date: 2024-10-15'. QR code printed on crate label.",
            technical: "Mobile app takes 30 seconds. QR code generation instant. Blockchain anchoring <5 seconds.",
          },
          {
            step: "Transport: Cold Chain Attestation",
            description:
              "Truck driver scans QR on crate → verifies farm attestation → adds transport attestation: 'Loaded 2024-10-15 09:00, temp: 4°C, truck: T-442, driver: ID-8821'. IoT sensor auto-creates attestations every 30 mins with temperature data.",
            technical: "QR scan verifies previous attestations. IoT integration via webhook. Auto-attestations every 30 mins.",
          },
          {
            step: "Distribution Center: Receiving",
            description:
              "DC scans QR → sees full history (farm + transport + all temp readings). Verifies: organic cert valid, cold chain maintained. Adds attestation: 'Received 2024-10-15 14:00, inspection: passed, storage: cooler-7'.",
            technical: "Verification takes 2 seconds. Full audit trail visible instantly.",
          },
          {
            step: "Store: Final Mile",
            description:
              "Store receives crate, scans QR → complete timeline visible. Places on shelf. Consumer can scan QR on product sticker → see farm photo, harvest date, organic cert, full journey with timestamps.",
            technical: "Public verification page. No login needed. Mobile-friendly. Supports 10 languages.",
          },
        ],
      },
      results: {
        metrics: [
          { label: "Trace-back time", before: "18 days", after: "47 seconds", improvement: "99.97% faster" },
          { label: "Recall cost", before: "$2M", after: "$15K", improvement: "Surgical precision" },
          { label: "Fraud incidents", before: "3/year", after: "0", improvement: "100% eliminated" },
          { label: "Consumer trust", before: "67% NPS", after: "94% NPS", improvement: "+40%" },
        ],
        quote:
          "During the last E. coli scare, we traced back the contaminated batch to the exact farm in under 1 minute. Saved us $1.8M in unnecessary product destruction. ROI paid for itself in the first month.",
        author: "VP of Operations, FreshTrack Organic Foods",
      },
    },
    {
      id: 2,
      icon: Pill,
      company: "MediChain Pharmaceuticals",
      industry: "Drug Serialization & Anti-Counterfeiting",
      challenge: {
        title: "DSCSA Compliance + $200B Counterfeit Crisis",
        description:
          "MediChain produces high-value cancer drugs. DSCSA requires serialization (unique ID per package) and track-and-trace. Additionally, counterfeit drugs are a $200B/year problem. Need cryptographic proof of authenticity that pharmacies can verify instantly.",
        problems: [
          "Legacy serialization system: $500K annual license, 99.2% accuracy (0.8% error = thousands of drugs)",
          "Wholesalers struggle to verify authenticity → some counterfeit drugs slip through",
          "Patient safety risk: fake cancer drugs contain incorrect dosage or no active ingredient",
          "Verification process slow: pharmacist calls manufacturer hotline, waits 20 mins on hold",
        ],
      },
      solution: {
        title: "ProofPass Implementation: Serialization + Authentication",
        steps: [
          {
            step: "Manufacturing: Unit-Level Attestation",
            description:
              "Production line creates attestation for each drug package at bottling: 'Drug: Oncotrix-500mg, Serial: ON5-2024-847291, batch: B-4428, mfg date: 2024-10-15, expiry: 2026-10-15, facility: FDA-approved'. QR + NFC tag on package.",
            technical: "Integrated with existing bottling line. 1000 attestations/minute capacity. Each takes 0.001 seconds.",
          },
          {
            step: "Distribution: Chain of Custody",
            description:
              "Wholesaler scans package → verifies manufacturer attestation → adds own attestation: 'Received from MediChain, date: 2024-10-16, warehouse: W-12, temp log: compliant'. Creates audit trail.",
            technical: "Scan verifies: 1) MediChain signature authentic, 2) blockchain record matches, 3) not expired. Takes 2 seconds.",
          },
          {
            step: "Pharmacy: Point-of-Sale Verification",
            description:
              "Pharmacist scans QR before dispensing to patient. Sees: manufacturer attestation (verified ✓), wholesaler attestation (verified ✓), full chain of custody. Confidence drug is authentic. Adds 'dispensed' attestation.",
            technical: "Verification UI color-coded: Green = all attestations verified. Red = broken chain or counterfeit detected.",
          },
          {
            step: "Patient: Trust & Safety",
            description:
              "Patient receives drug with QR code. Can scan with phone → see: manufacturer details, batch testing results, full journey from factory to pharmacy. Knows drug is authentic, not counterfeit.",
            technical: "Consumer-friendly verification page. Shows timeline with icons. 'Verified Authentic' badge. Multilingual.",
          },
        ],
      },
      results: {
        metrics: [
          { label: "Serialization accuracy", before: "99.2%", after: "100%", improvement: "Perfect" },
          { label: "Counterfeit detection", before: "~60% caught", after: "100% caught", improvement: "Zero slip-through" },
          { label: "Verification time", before: "20 mins (phone)", after: "2 seconds (scan)", improvement: "600x faster" },
          { label: "Patient confidence", before: "72%", after: "98%", improvement: "+36%" },
        ],
        quote:
          "We caught 3 counterfeit incidents in the first month that our old system missed. One batch contained only 40% of the active ingredient. ProofPass literally saved lives.",
        author: "Director of Quality Assurance, MediChain Pharmaceuticals",
      },
    },
  ]

  const activeData = cases[activeCase]
  const Icon = activeData.icon

  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Real-World Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Detailed examples of how companies use ProofPass to solve complex compliance and trust problems
          </p>
        </div>

        {/* Case Selector */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
          {cases.map((caseStudy) => {
            const CaseIcon = caseStudy.icon
            return (
              <button
                key={caseStudy.id}
                onClick={() => setActiveCase(caseStudy.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-lg font-semibold transition-all text-left ${
                  activeCase === caseStudy.id
                    ? "bg-accent text-white shadow-lg"
                    : "bg-muted text-foreground hover:bg-accent/10"
                }`}
              >
                <CaseIcon className="h-6 w-6 flex-shrink-0" />
                <div>
                  <div className="font-bold">{caseStudy.company}</div>
                  <div className="text-xs opacity-80">{caseStudy.industry}</div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Case Study Content */}
        <div className="space-y-12">
          {/* Challenge */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-error/10 flex items-center justify-center">
                <Icon className="h-6 w-6 text-error" />
              </div>
              <div>
                <div className="text-sm font-semibold text-error uppercase">The Challenge</div>
                <h3 className="text-2xl font-bold text-foreground">{activeData.challenge.title}</h3>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {activeData.challenge.description}
            </p>

            <div className="bg-error/5 border-l-4 border-error rounded-r-lg p-6">
              <div className="font-semibold text-foreground mb-3">Specific Problems:</div>
              <ul className="space-y-2">
                {activeData.challenge.problems.map((problem, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-error mt-1">✗</span>
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="text-sm font-semibold text-accent uppercase">The Solution</div>
                <h3 className="text-2xl font-bold text-foreground">{activeData.solution.title}</h3>
              </div>
            </div>

            <div className="space-y-6">
              {activeData.solution.steps.map((step, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-accent/30 pb-6 last:pb-0">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-2 border-white" />

                  <div className="bg-white border-2 border-border rounded-lg p-6 hover:border-accent transition-colors">
                    <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                      <span className="text-accent">{step.step}</span>
                    </h4>
                    <p className="text-muted-foreground mb-3">{step.description}</p>
                    <div className="bg-muted rounded p-3 text-sm">
                      <span className="font-semibold text-foreground">Technical: </span>
                      <span className="text-muted-foreground">{step.technical}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <div className="text-sm font-semibold text-secondary uppercase">The Results</div>
                <h3 className="text-2xl font-bold text-foreground">Measurable Impact</h3>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {activeData.results.metrics.map((metric, idx) => (
                <div key={idx} className="bg-secondary/5 border border-secondary/20 rounded-lg p-6">
                  <div className="text-sm font-semibold text-muted-foreground mb-2">{metric.label}</div>
                  <div className="flex items-baseline gap-4 mb-2">
                    <div className="text-2xl font-bold text-error line-through">{metric.before}</div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    <div className="text-2xl font-bold text-secondary">{metric.after}</div>
                  </div>
                  <div className="text-sm font-semibold text-accent">{metric.improvement}</div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-r from-accent/5 to-secondary/5 border-l-4 border-accent rounded-r-lg p-8">
              <blockquote className="text-lg text-foreground mb-4 leading-relaxed">
                &ldquo;{activeData.results.quote}&rdquo;
              </blockquote>
              <div className="text-sm font-semibold text-muted-foreground">
                — {activeData.results.author}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see how ProofPass can solve your specific challenges?
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent-600 text-white" asChild>
            <a href="#contact">
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
