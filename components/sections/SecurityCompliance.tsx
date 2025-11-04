"use client"

import { Shield, Lock, Eye, Server, FileCheck, Users, Code2 } from "lucide-react"

export function SecurityCompliance() {
  const certifications = [
    {
      icon: FileCheck,
      title: "ISO 27001",
      subtitle: "Certified",
      description: "Information security",
    },
    {
      icon: Shield,
      title: "W3C Standards",
      subtitle: "Compliant",
      description: "DID Core 1.0 + VC Data Model v1.1",
    },
    {
      icon: Eye,
      title: "GDPR",
      subtitle: "Compliant",
      description: "Data residency options",
    },
    {
      icon: Users,
      title: "Penetration",
      subtitle: "Testing",
      description: "Quarterly by certified firms",
    },
    {
      icon: Lock,
      title: "Cryptography",
      subtitle: "Ed25519",
      description: "Industry-standard signatures + TLS 1.3",
    },
    {
      icon: Server,
      title: "Access",
      subtitle: "Control",
      description: "Role-based permissions, SSO",
    },
  ]

  const securityFeatures = {
    infrastructure: [
      "Multi-region redundancy",
      "Automated backups (hourly)",
      "DDoS protection",
      "Web Application Firewall",
      "Intrusion detection",
      "Replay attack protection (nullifiers)",
    ],
    monitoring: [
      "24/7 security operations center",
      "Real-time threat detection",
      "Incident response team",
      "Security event logging",
      "85%+ test coverage",
    ],
    compliance: [
      "HIPAA available (healthcare)",
      "FDA 21 CFR Part 11 (pharma)",
      "ISO 22000 (food safety)",
      "IATF 16949 (automotive)",
    ],
  }

  return (
    <section id="security" className="py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Enterprise-Grade{" "}
            <span className="text-accent">Security & Compliance</span>
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <div
                key={index}
                className="bg-muted rounded-lg border border-border p-6 hover:border-accent transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {cert.title}
                    </h3>
                    <div className="text-sm font-semibold text-accent mb-1">
                      {cert.subtitle}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Technical Cryptography Details */}
        <div className="bg-gradient-to-br from-primary to-primary/90 rounded-lg border border-border p-8 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="h-8 w-8 text-accent" />
            <h3 className="text-2xl font-bold text-white">
              Cryptographic Standards
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4">
              <div className="text-accent font-bold mb-2">Ed25519 Signatures</div>
              <div className="text-sm text-white/90">
                Industry-standard public-key cryptography via @noble/ed25519 for tamper-evident credentials
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4">
              <div className="text-accent font-bold mb-2">Groth16 zk-SNARKs</div>
              <div className="text-sm text-white/90">
                Privacy-preserving zero-knowledge proofs: threshold, range, and set membership
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4">
              <div className="text-accent font-bold mb-2">JWT/JWS (RFC 7519/7515)</div>
              <div className="text-sm text-white/90">
                W3C Verifiable Credentials in JWT format with EdDSA signatures
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4">
              <div className="text-accent font-bold mb-2">DID Methods</div>
              <div className="text-sm text-white/90">
                did:key (self-contained) and did:web (domain-based) following W3C DID Core 1.0
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/20">
            <h4 className="text-lg font-bold text-white mb-4">Security Features:</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-2">
                <Shield className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold text-sm">Tamper-Evident</div>
                  <div className="text-white/80 text-xs">Any modification invalidates signature</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Lock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold text-sm">Replay Protection</div>
                  <div className="text-white/80 text-xs">Nullifiers prevent proof reuse</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FileCheck className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold text-sm">DID Resolution</div>
                  <div className="text-white/80 text-xs">Automatic verification of decentralized identifiers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Infrastructure:
            </h3>
            <ul className="space-y-2">
              {securityFeatures.infrastructure.map((feature, idx) => (
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

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Monitoring:
            </h3>
            <ul className="space-y-2">
              {securityFeatures.monitoring.map((feature, idx) => (
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

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Compliance:
            </h3>
            <ul className="space-y-2">
              {securityFeatures.compliance.map((feature, idx) => (
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
        </div>
      </div>
    </section>
  )
}
