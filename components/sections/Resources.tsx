"use client"

import { motion } from "framer-motion"
import { BookOpen, FileText, Code, Briefcase, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Resources() {
  const resourceCategories = [
    {
      title: "Documentation",
      icon: BookOpen,
      color: "primary",
      resources: [
        { name: "Getting Started Guide", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "SDK Documentation", href: "#" },
        { name: "Example Code", href: "#" },
      ],
    },
    {
      title: "Use Cases",
      icon: FileText,
      color: "secondary",
      resources: [
        { name: "Battery Passport Implementation", href: "#" },
        { name: "Food Traceability Guide", href: "#" },
        { name: "Pharma Serialization", href: "#" },
        { name: "Manufacturing Quality", href: "#" },
      ],
    },
    {
      title: "Company",
      icon: Briefcase,
      color: "accent",
      resources: [
        { name: "About Us", href: "#" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
      ],
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
            Learn <span className="text-primary">More</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our documentation, use cases, and resources to get the most out of ProofPass
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {resourceCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className={`w-12 h-12 rounded-lg bg-${category.color}/10 flex items-center justify-center mb-6`}>
                      <Icon className={`h-6 w-6 text-${category.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-6">
                      {category.title}
                    </h3>
                    <ul className="space-y-3">
                      {category.resources.map((resource, idx) => (
                        <li key={idx}>
                          <a
                            href={resource.href}
                            className="flex items-center justify-between group text-muted-foreground hover:text-primary transition-colors"
                          >
                            <span className="text-sm">{resource.name}</span>
                            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Developer-focused CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-white/20 flex items-center justify-center">
                <Code className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">
                  Ready to integrate?
                </h3>
                <p className="text-white/90">
                  Explore our API documentation and start building in minutes
                </p>
              </div>
            </div>
            <a
              href="#"
              className="px-8 py-3 bg-white text-primary rounded-lg font-medium hover:shadow-lg transition-shadow whitespace-nowrap"
            >
              View API Docs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
