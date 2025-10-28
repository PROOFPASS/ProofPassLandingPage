"use client"

import { motion } from "framer-motion"
import { BookOpen, Video, Users, FileText, ArrowRight, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ResourcesNew() {
  const resourceSections = [
    {
      icon: BookOpen,
      title: "Documentación",
      color: "primary",
      description: "Guías completas y referencias técnicas",
      items: [
        { name: "Guía de Inicio Rápido", time: "5 min", badge: "Popular" },
        { name: "Referencia API Completa", time: "Ref" },
        { name: "Ejemplos de Código", time: "Copy-paste" },
        { name: "Preguntas Frecuentes", time: "FAQ" },
      ],
    },
    {
      icon: Video,
      title: "Video Tutorials",
      color: "secondary",
      description: "Aprende viendo ejemplos reales",
      items: [
        { name: "Setup en 5 Minutos", time: "5:23", badge: "Nuevo" },
        { name: "Tu Primera Attestation", time: "8:15" },
        { name: "Product Passports Explicado", time: "12:40" },
        { name: "Zero-Knowledge Proofs Demo", time: "15:20" },
      ],
    },
    {
      icon: Users,
      title: "Community",
      color: "accent",
      description: "Conecta con otros usuarios",
      items: [
        { name: "Discord Server", time: "1.2K miembros" },
        { name: "Stack Overflow", time: "Tag: proofpass" },
        { name: "GitHub Discussions", time: "Open source" },
        { name: "Foro en Español", time: "Activo" },
      ],
    },
    {
      icon: FileText,
      title: "Blog & Casos",
      color: "warning",
      description: "Aprende de casos reales",
      items: [
        { name: "Guía EU Battery Passport", time: "15 min" },
        { name: "Food Traceability 101", time: "10 min" },
        { name: "ZK Proofs Explicados", time: "20 min" },
        { name: "Caso: ACME Battery", time: "Case study" },
      ],
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-muted">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Aprende <span className="text-primary">Más</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Todo lo que necesitas para dominar ProofPass
          </p>
        </motion.div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {resourceSections.map((section, index) => {
            const Icon = section.icon
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all border-2 hover:border-primary">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-xl bg-${section.color}-100 flex items-center justify-center mb-4`}>
                      <Icon className={`h-7 w-7 text-${section.color}`} />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {section.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      {section.description}
                    </p>

                    <ul className="space-y-3">
                      {section.items.map((item, idx) => (
                        <li key={idx}>
                          <a
                            href="#"
                            className="flex items-center justify-between group text-sm hover:text-primary transition-colors"
                          >
                            <span className="flex-1">{item.name}</span>
                            <div className="flex items-center gap-2">
                              {item.badge && (
                                <span className="text-xs px-2 py-0.5 bg-warning text-foreground rounded-full font-medium">
                                  {item.badge}
                                </span>
                              )}
                              <span className="text-xs text-muted-foreground">
                                {item.time}
                              </span>
                              <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
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

        {/* Developer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <Code className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">
                  ¿Listo para integrar?
                </h3>
                <p className="text-white/90 text-lg">
                  Explora nuestra API y empieza a construir en minutos
                </p>
              </div>
            </div>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-xl px-8 flex-shrink-0">
              Ver API Docs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        {/* Sandbox CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 bg-white rounded-2xl p-8 border-2 border-primary-200 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Prueba sin registrarte
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Sandbox Interactivo
          </h3>
          <p className="text-muted-foreground mb-6">
            Prueba la API directamente en el navegador. Sin registro, sin setup.
          </p>
          <Button variant="outline" size="lg">
            Abrir Sandbox
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
