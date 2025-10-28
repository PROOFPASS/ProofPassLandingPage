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
              Becoming a Recognized Digital Public Good
            </h3>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              ProofPass is open source and in the process of recognition by the{" "}
              <span className="font-semibold text-foreground">
                Digital Public Goods Alliance (DPGA)
              </span>
              . This certification validates our commitment to transparency, accessibility,
              and global impact.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-4">
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
                  <div className="font-semibold text-foreground text-sm">Global Impact</div>
                  <div className="text-xs text-muted-foreground">
                    SDG Aligned
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

        {/* Why It Matters */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="text-center mb-4">
            <h4 className="text-lg font-bold text-foreground mb-2">
              Why This Matters for Enterprises
            </h4>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-sm">
            <div className="text-center">
              <div className="font-semibold text-foreground mb-1">
                Future-Proof Investment
              </div>
              <div className="text-muted-foreground">
                Open standards ensure long-term viability
              </div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-foreground mb-1">
                Regulatory Confidence
              </div>
              <div className="text-muted-foreground">
                Auditable codebase and transparent operations
              </div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-foreground mb-1">
                Community Support
              </div>
              <div className="text-muted-foreground">
                Global developer community backing
              </div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-foreground mb-1">
                Sustainability Alignment
              </div>
              <div className="text-muted-foreground">
                Contributes to UN Sustainable Development Goals
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
