"use client"

import { Server, Layout, Package, Database, Zap, CheckCircle2 } from "lucide-react"

export function ArchitectureOverview() {
  const architecture = [
    {
      icon: Server,
      title: "Backend API",
      subtitle: "apps/api",
      tech: "Fastify + TypeScript 5.3+",
      color: "bg-blue-100 text-blue-700 border-blue-300",
      features: [
        "High-performance Node.js framework",
        "PostgreSQL with Prisma ORM",
        "Redis caching & rate limiting",
        "Multi-blockchain SDK integration",
        "100+ comprehensive tests",
      ],
    },
    {
      icon: Layout,
      title: "Frontend Platform",
      subtitle: "apps/platform",
      tech: "Next.js 15.5.6 + React 19.2.0",
      color: "bg-purple-100 text-purple-700 border-purple-300",
      features: [
        "App Router with Server Components",
        "NextAuth.js authentication",
        "Tailwind CSS styling",
        "Radix UI accessible components",
        "Real-time dashboard & analytics",
      ],
    },
    {
      icon: Package,
      title: "Monorepo Packages",
      subtitle: "packages/*",
      tech: "8 Shared Packages",
      color: "bg-green-100 text-green-700 border-green-300",
      features: [
        "@proofpass/vc-toolkit - W3C Credentials",
        "@proofpass/zk-toolkit - Zero-knowledge proofs",
        "@proofpass/blockchain - Multi-chain integration",
        "@proofpass/client - SDK for applications",
        "@proofpass/types - Shared TypeScript types",
      ],
    },
  ]

  const qualityMetrics = [
    { label: "Test Coverage", value: "85%+", icon: CheckCircle2 },
    { label: "Total Tests", value: "100+", icon: CheckCircle2 },
    { label: "TypeScript", value: "Strict Mode", icon: CheckCircle2 },
    { label: "Code Quality", value: "Production-Ready", icon: CheckCircle2 },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            <Zap className="h-4 w-4" />
            Production-Grade Architecture
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Enterprise Architecture
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with modern technologies and best practices for scalability, security, and maintainability.
          </p>
        </div>

        {/* Architecture Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {architecture.map((component, index) => {
            const Icon = component.icon
            return (
              <div
                key={index}
                className="bg-muted rounded-lg border-2 border-border p-8 hover:border-accent transition-all duration-300 hover:shadow-lg"
              >
                {/* Icon & Title */}
                <div className="mb-6">
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 border ${component.color}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {component.title}
                  </h3>
                  <div className="text-sm font-mono text-muted-foreground mb-2">
                    {component.subtitle}
                  </div>
                  <div className="text-sm font-semibold text-accent">
                    {component.tech}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {component.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Infrastructure Stack */}
        <div className="bg-gradient-to-br from-primary to-primary/90 rounded-lg border border-border p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Database className="h-8 w-8 text-accent" />
            <h3 className="text-2xl font-bold text-white">
              Infrastructure Stack
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4">
              <div className="text-accent font-bold mb-2">Database</div>
              <div className="text-sm text-white/90">
                PostgreSQL 14+ with Prisma ORM for type-safe queries
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4">
              <div className="text-accent font-bold mb-2">Caching</div>
              <div className="text-sm text-white/90">
                Redis 7+ for distributed rate limiting & session storage
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4">
              <div className="text-accent font-bold mb-2">Blockchain</div>
              <div className="text-sm text-white/90">
                Multi-chain support: Stellar, Optimism, Arbitrum (6 networks)
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4">
              <div className="text-accent font-bold mb-2">Deployment</div>
              <div className="text-sm text-white/90">
                Docker + CI/CD ready with comprehensive test suite
              </div>
            </div>
          </div>
        </div>

        {/* Quality Metrics */}
        <div className="bg-muted rounded-lg border border-border p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Code Quality & Testing
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {qualityMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <div className="grid md:grid-cols-3 gap-4 text-sm text-center">
              <div>
                <div className="font-semibold text-foreground mb-1">
                  TypeScript Everywhere
                </div>
                <div className="text-muted-foreground">
                  Strict mode across entire codebase
                </div>
              </div>
              <div>
                <div className="font-semibold text-foreground mb-1">
                  60+ VC Toolkit Tests
                </div>
                <div className="text-muted-foreground">
                  Comprehensive credential testing
                </div>
              </div>
              <div>
                <div className="font-semibold text-foreground mb-1">
                  Production-Ready
                </div>
                <div className="text-muted-foreground">
                  Battle-tested in real deployments
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
