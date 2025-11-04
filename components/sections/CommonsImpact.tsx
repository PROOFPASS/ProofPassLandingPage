"use client"

import { Users, GitBranch, Globe, Code, TrendingUp, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CommonsImpact() {
  return (
    <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-50 rounded-full mb-4">
            <Heart className="h-4 w-4 text-secondary" />
            <span className="text-sm font-semibold text-secondary">Commons Impact</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built by the Community, For the Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As commons infrastructure, ProofPass benefits from collective innovation
            and provides value to everyone—from individual developers to enterprise CTOs.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-50 rounded-xl mb-4">
              <Globe className="h-8 w-8 text-accent" />
            </div>
            <div className="text-4xl font-bold text-foreground mb-2">12+</div>
            <div className="text-sm text-muted-foreground">Countries Using Infrastructure</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-50 rounded-xl mb-4">
              <Users className="h-8 w-8 text-secondary" />
            </div>
            <div className="text-4xl font-bold text-foreground mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Active Community Members</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-50 rounded-xl mb-4">
              <GitBranch className="h-8 w-8 text-accent" />
            </div>
            <div className="text-4xl font-bold text-foreground mb-2">Open</div>
            <div className="text-sm text-muted-foreground">100% Open Source Codebase</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-50 rounded-xl mb-4">
              <TrendingUp className="h-8 w-8 text-secondary" />
            </div>
            <div className="text-4xl font-bold text-foreground mb-2">$0</div>
            <div className="text-sm text-muted-foreground">Licensing Fees for Core Platform</div>
          </div>
        </div>

        {/* How Commons Funding Works */}
        <div className="bg-gradient-to-br from-accent-50 to-secondary-50 rounded-2xl p-8 lg:p-12 mb-16 border border-border">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 text-center">
              How Commons Funding Enables Innovation
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🌱</div>
                <h4 className="font-bold text-foreground mb-2">Shared Development</h4>
                <p className="text-sm text-muted-foreground">
                  Funding supports core infrastructure that everyone can build upon,
                  reducing costs and accelerating innovation across the ecosystem.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🔄</div>
                <h4 className="font-bold text-foreground mb-2">Sustainable Model</h4>
                <p className="text-sm text-muted-foreground">
                  Commons-based funding creates sustainable infrastructure without
                  extractive practices—value flows back to the community.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h4 className="font-bold text-foreground mb-2">Collective ROI</h4>
                <p className="text-sm text-muted-foreground">
                  When one organization improves the commons, everyone benefits.
                  Your contribution amplifies across the entire network.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* For Developers & CTOs */}
        <div className="bg-primary text-white rounded-2xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Code className="h-8 w-8" />
              <h3 className="text-2xl lg:text-3xl font-bold">
                Why Developers & CTOs Choose ProofPass
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h4 className="font-bold text-xl mb-3">🛠️ Developer-First Design</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>• RESTful API with comprehensive documentation</li>
                  <li>• SDKs in JavaScript, Python, Go, and Rust</li>
                  <li>• Open source—audit, fork, and contribute freely</li>
                  <li>• Active Discord community for support</li>
                </ul>
              </div>

              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h4 className="font-bold text-xl mb-3">🏗️ Production-Ready Infrastructure</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>• ISO 27001 certified security practices</li>
                  <li>• 99.9% uptime SLA for enterprise tiers</li>
                  <li>• Self-hostable for sovereignty requirements</li>
                  <li>• No vendor lock-in—your data, your control</li>
                </ul>
              </div>

              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h4 className="font-bold text-xl mb-3">⚡ Fast Integration</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>• Deploy in 5 days, not 6 months</li>
                  <li>• Standards-based (W3C Verifiable Credentials)</li>
                  <li>• Works with existing systems via webhooks</li>
                  <li>• Extensive code examples and tutorials</li>
                </ul>
              </div>

              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h4 className="font-bold text-xl mb-3">💡 Innovation-Friendly</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>• Build custom proof circuits with ZK toolkit</li>
                  <li>• Extend with plugins and integrations</li>
                  <li>• Contribute features back to the commons</li>
                  <li>• Shape roadmap through governance</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <a href="/docs">
                  Explore API Docs
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="https://github.com/PROOFPASS/ProofPassPlatform" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
