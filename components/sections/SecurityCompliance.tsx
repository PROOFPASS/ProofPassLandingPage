"use client"

import { Shield, Lock, Eye, Server, FileCheck, Users } from "lucide-react"

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
      description: "Verifiable Credentials standard",
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
      title: "Data",
      subtitle: "Encryption",
      description: "AES-256 at rest, TLS 1.3 in transit",
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
    ],
    monitoring: [
      "24/7 security operations center",
      "Real-time threat detection",
      "Incident response team",
      "Security event logging",
    ],
    compliance: [
      "HIPAA available (healthcare)",
      "FDA 21 CFR Part 11 (pharma)",
      "ISO 22000 (food safety)",
      "IATF 16949 (automotive)",
    ],
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
