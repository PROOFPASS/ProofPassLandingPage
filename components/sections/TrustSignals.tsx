"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function TrustSignals() {
  const [counters, setCounters] = useState({
    latency: 0,
    uptime: 0,
    cost: 0,
  })

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps

      setCounters({
        latency: Math.min(5, progress * 5),
        uptime: Math.min(99.9, progress * 99.9),
        cost: Math.min(0.00001, progress * 0.00001),
      })

      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const technologies = [
    {
      name: "W3C Verifiable Credentials",
      description: "Open standard for digital credentials",
      logo: "🌐",
    },
    {
      name: "Multi-Chain Support",
      description: "Flexible blockchain integration",
      logo: "⛓️",
    },
    {
      name: "Open Source",
      description: "Fully open source on GitHub",
      logo: "📖",
      link: "https://github.com/PROOFPASS/ProofPassPlatform",
    },
    {
      name: "SOC 2 Compliant",
      description: "Enterprise security standards",
      logo: "🔒",
    },
    {
      name: "GDPR Compliant",
      description: "EU privacy regulations",
      logo: "🇪🇺",
    },
  ]

  const stats = [
    {
      value: `<${counters.cost.toFixed(5)} USD`,
      label: "Per blockchain transaction",
      color: "primary",
    },
    {
      value: `<${counters.latency.toFixed(1)}s`,
      label: "Finality time",
      color: "secondary",
    },
    {
      value: `${counters.uptime.toFixed(1)}%`,
      label: "Uptime SLA",
      color: "accent",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built on{" "}
            <span className="text-primary">Battle-Tested Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade infrastructure with open standards and compliance certifications
          </p>
        </motion.div>

        {/* Technology Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
        >
          {technologies.map((tech, index) => {
            const Component = tech.link ? 'a' : 'div'
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                viewport={{ once: true }}
              >
                <Component
                  {...(tech.link ? { href: tech.link, target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="block bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all border border-gray-200 hover:border-primary/50 cursor-pointer"
                >
                  <div className="text-4xl mb-3">{tech.logo}</div>
                  <div className="font-semibold text-sm text-foreground mb-1">
                    {tech.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{tech.description}</div>
                  {tech.link && (
                    <div className="mt-2 text-xs text-primary font-medium">
                      View on GitHub →
                    </div>
                  )}
                </Component>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Technical Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-gray-100"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Performance Metrics
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`text-4xl md:text-5xl font-bold text-${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-muted-foreground">
              ISO 27001 certified • Penetration tested • Regular security audits
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
