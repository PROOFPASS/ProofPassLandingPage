"use client"

import { Globe, Github, Award, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PublicGoodBanner() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary-50 to-accent-50 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left: DPGA Logo Placeholder & Badge */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 bg-white rounded-xl border-2 border-border shadow-md flex items-center justify-center p-4">
              <div className="text-center">
                <Globe className="h-12 w-12 text-accent mx-auto mb-2" />
                <div className="text-xs font-bold text-foreground">DPGA</div>
                <div className="text-[10px] text-muted-foreground">Digital Public Good</div>
              </div>
            </div>
          </div>

          {/* Center: Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Award className="h-5 w-5 text-accent" />
              <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                Open Source & Public Good
              </span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Infrastructure as a Commons
            </h3>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              ProofPass is a{" "}
              <span className="font-semibold text-foreground">
                Digital Public Good nominated by the DPGA
              </span>
              , providing critical supply chain infrastructure accessible to all.
              We believe transparency and trust should not be proprietary—they should be{" "}
              <span className="font-semibold text-foreground">commons infrastructure</span>{" "}
              that benefits everyone, from smallholder farmers to multinational corporations.
            </p>

            <div className="grid sm:grid-cols-4 gap-4 mb-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground text-sm">Open Source</div>
                  <div className="text-xs text-muted-foreground">
                    No vendor lock-in
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground text-sm">Standards-Based</div>
                  <div className="text-xs text-muted-foreground">
                    W3C Compliant
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground text-sm">SDG 9</div>
                  <div className="text-xs text-muted-foreground">
                    Industry & Innovation
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground text-sm">SDG 12</div>
                  <div className="text-xs text-muted-foreground">
                    Responsible Production
                  </div>
                </div>
              </div>
            </div>

            {/* UN SDGs Banner */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-border p-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Globe className="h-8 w-8 text-accent" />
                  <div>
                    <div className="font-bold text-foreground text-sm">Contributing to UN Sustainable Development Goals</div>
                    <div className="text-xs text-muted-foreground">
                      SDG 9 (Industry, Innovation, Infrastructure) · SDG 12 (Responsible Consumption & Production) · SDG 16 (Peace, Justice, Strong Institutions)
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-md text-xs font-bold border border-blue-200">
                    SDG 9
                  </div>
                  <div className="px-3 py-1.5 bg-green-100 text-green-700 rounded-md text-xs font-bold border border-green-200">
                    SDG 12
                  </div>
                  <div className="px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-md text-xs font-bold border border-indigo-200">
                    SDG 16
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex-shrink-0">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-foreground hover:bg-foreground hover:text-white"
            >
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>
        </div>

        {/* Why Commons-Based Infrastructure Matters */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="text-center mb-4">
            <h4 className="text-lg font-bold text-foreground mb-2">
              Why Commons-Based Infrastructure Matters
            </h4>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              When critical infrastructure is built as a commons, everyone benefits from shared innovation, reduced costs, and collective governance.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-sm">
            <div className="text-center">
              <div className="font-semibold text-foreground mb-1">
                💰 Sustainable Funding
              </div>
              <div className="text-muted-foreground">
                Commons-based model reduces costs for all participants
              </div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-foreground mb-1">
                🌍 Global Accessibility
              </div>
              <div className="text-muted-foreground">
                No gatekeepers—anyone can verify, audit, or contribute
              </div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-foreground mb-1">
                🤝 Collective Governance
              </div>
              <div className="text-muted-foreground">
                Community-driven development and decision-making
              </div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-foreground mb-1">
                🔓 Future-Proof
              </div>
              <div className="text-muted-foreground">
                Open standards prevent vendor lock-in and obsolescence
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
