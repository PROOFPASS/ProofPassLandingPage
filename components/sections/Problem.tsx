"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Problem() {
  const problems = [
    {
      icon: Shield,
      title: "Regulatory Pressure",
      description: "Industries Need Verifiable Proof Without Sacrificing Privacy",
      points: [
        "EU Battery Passport mandatory Feb 2027",
        "Food traceability: 48-hour requirement",
        "ESG reporting obligations increasing",
        "Penalties: Market bans, % of revenue fines",
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Lock,
      title: "Data Privacy Concerns",
      description: "Protect Competitive Information",
      points: [
        "Prove compliance without revealing exact figures",
        "Protect competitive information from rivals",
        "Maintain supplier confidentiality",
        "Meet GDPR and privacy regulations",
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Clock,
      title: "Operational Burden",
      description: "Manual Processes Are Expensive",
      points: [
        "Manual documentation takes weeks",
        "50K-200K EUR annual audit costs",
        "Fragmented systems across supply chain",
        "High risk of human error",
      ],
      color: "text-accent",
      bgColor: "bg-accent/10",
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
            Industries Need Verifiable Proof
            <br />
            <span className="text-primary">Without Sacrificing Privacy</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Regulated industries face increasing compliance demands while protecting sensitive business data.
            Traditional solutions force you to choose between transparency and privacy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-lg ${problem.bgColor} flex items-center justify-center mb-6`}>
                    <problem.icon className={`h-7 w-7 ${problem.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {problem.description}
                  </p>
                  <ul className="space-y-3">
                    {problem.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <svg
                          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${problem.color}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-bold text-primary mb-2">8-12B EUR</div>
            <div className="text-sm text-muted-foreground">Annual food fraud losses in EU</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-secondary mb-2">48 hours</div>
            <div className="text-sm text-muted-foreground">FDA food traceability requirement</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">Feb 2027</div>
            <div className="text-sm text-muted-foreground">EU Battery Passport mandatory</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
