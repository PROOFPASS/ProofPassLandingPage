"use client"

import { CheckCircle2, ArrowRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroEnterprise() {
  return (
    <section className="relative bg-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-muted rounded-md text-sm text-muted-foreground mb-8 border border-border">
              <CheckCircle2 className="h-4 w-4 text-secondary" />
              <span>Enterprise-ready</span>
              <span className="text-border">|</span>
              <span>W3C Compliant</span>
              <span className="text-border">|</span>
              <span>ISO 27001 Certified</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Open Infrastructure for{" "}
              <span className="text-accent">Supply Chain Transparency</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A Digital Public Good providing cryptographic trust for global supply chains.
              Built by the commons, for the commons—no gatekeepers, no vendor lock-in.
            </p>

            {/* Value Props */}
            <div className="grid sm:grid-cols-3 gap-6 mb-10 pb-10 border-b border-border">
              <div>
                <div className="flex items-center gap-2 text-foreground font-semibold mb-1">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  Deploy in 5 days
                </div>
                <p className="text-sm text-muted-foreground">Not 6 months</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-foreground font-semibold mb-1">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  99.9% SLA
                </div>
                <p className="text-sm text-muted-foreground">Enterprise support</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-foreground font-semibold mb-1">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  Open Source
                </div>
                <p className="text-sm text-muted-foreground">No vendor lock-in</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-accent hover:bg-accent-600 text-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200" asChild>
                <a href="#contact">
                  Request Enterprise Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 hover:border-accent hover:scale-105 transition-all duration-200" asChild>
                <a href="/docs">View Documentation</a>
              </Button>
            </div>

            <a
              href="/docs"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-600 font-medium transition-colors"
            >
              <FileText className="h-4 w-4" />
              Explore API Reference
              <ArrowRight className="h-4 w-4" />
            </a>

            {/* Trust Bar */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by companies worldwide:
              </p>
              <div className="flex items-center gap-6 flex-wrap text-muted-foreground/50">
                <span className="text-sm font-semibold tracking-wide hover:text-muted-foreground transition-colors">
                  EuroPower Systems
                </span>
                <span className="text-muted-foreground/30">•</span>
                <span className="text-sm font-semibold tracking-wide hover:text-muted-foreground transition-colors">
                  FreshTrack AG
                </span>
                <span className="text-muted-foreground/30">•</span>
                <span className="text-sm font-semibold tracking-wide hover:text-muted-foreground transition-colors">
                  MediChain Pharma
                </span>
                <span className="text-muted-foreground/30">•</span>
                <span className="text-sm font-semibold tracking-wide hover:text-muted-foreground transition-colors">
                  Global Logistics Co
                </span>
              </div>
            </div>
          </div>

          {/* Right: Dashboard Screenshot */}
          <div className="relative">
            <div className="relative bg-white rounded-lg border-2 border-border shadow-lg overflow-hidden">
              {/* Browser chrome */}
              <div className="bg-muted border-b border-border px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-error opacity-60" />
                  <div className="w-3 h-3 rounded-full bg-warning opacity-60" />
                  <div className="w-3 h-3 rounded-full bg-secondary opacity-60" />
                </div>
                <div className="flex-1 text-center">
                  <div className="inline-block bg-white border border-border rounded px-4 py-1 text-xs text-muted-foreground">
                    dashboard.proofpass.com
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6 bg-muted">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Recent Attestations
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    10,247 created this month
                  </p>
                </div>

                {/* Table */}
                <div className="bg-white rounded-lg border border-border overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-muted border-b border-border">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          ID
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {[
                        { id: "att_abc123", type: "QualityTest", status: "Verified" },
                        { id: "att_def456", type: "Shipment", status: "Verified" },
                        { id: "att_ghi789", type: "Inspection", status: "Pending" },
                        { id: "att_jkl012", type: "Certificate", status: "Verified" },
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-muted transition-colors">
                          <td className="px-4 py-3 text-sm font-mono text-muted-foreground">
                            {row.id}
                          </td>
                          <td className="px-4 py-3 text-sm text-foreground">
                            {row.type}
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                                row.status === "Verified"
                                  ? "bg-secondary-50 text-secondary"
                                  : "bg-warning-50 text-warning"
                              }`}
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  row.status === "Verified"
                                    ? "bg-secondary"
                                    : "bg-warning"
                                }`}
                              />
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
