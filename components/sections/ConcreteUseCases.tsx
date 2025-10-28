"use client"

import { motion } from "framer-motion"
import { Factory, Package, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ConcreteUseCases() {
  const useCases = [
    {
      icon: Factory,
      company: "ACME Battery Corp",
      industry: "Fabricante",
      emoji: "🏭",
      color: "primary",
      tagline: "Emitimos attestations de calidad",
      workflow: [
        "1. Técnico termina test → crea attestation desde tablet",
        "2. Sistema genera QR automáticamente",
        "3. QR se imprime en etiqueta del producto",
        "4. Cliente escanea → ve certificado de calidad",
      ],
      result: "Reducimos reclamos 60%. Los clientes ven el QR y confían.",
      screenshot: "Dashboard móvil creando attestation",
    },
    {
      icon: Package,
      company: "FreshFood Logistics",
      industry: "Distribuidor",
      emoji: "📦",
      color: "secondary",
      tagline: "Verificamos origen de productos",
      workflow: [
        "1. Recibimos pallet con QR de granja",
        "2. Escaneamos → verificamos origen orgánico",
        "3. Agregamos attestation de 'recibido a 4°C'",
        "4. Siguiente en cadena verifica ambas",
      ],
      result: "Cumplimos FDA en 48 horas. Antes tomaba 2 semanas.",
      screenshot: "App móvil escaneando QR",
    },
    {
      icon: CheckCircle2,
      company: "GreenCheck Certification",
      industry: "Auditor",
      emoji: "✅",
      color: "accent",
      tagline: "Verificamos sin acceder a datos sensibles",
      workflow: [
        "1. Cliente genera ZK proof: 'Carbono < 5kg CO2/kWh'",
        "2. Nosotros verificamos el proof (sin ver cifra exacta)",
        "3. Emitimos certificación basada en proof",
        "4. Cliente mantiene datos privados",
      ],
      result: "Certificamos más rápido. Clientes protegen su IP.",
      screenshot: "Dashboard de verificación ZK",
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
            ¿Quién lo usa y{" "}
            <span className="text-primary">para qué?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde laboratorios hasta logística. Casos reales, resultados reales.
          </p>
        </motion.div>

        {/* Use Case Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <motion.div
                key={useCase.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-2xl transition-all border-2 hover:border-primary">
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-${useCase.color}-100 flex items-center justify-center text-3xl flex-shrink-0`}>
                        {useCase.emoji}
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">
                          {useCase.industry}
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {useCase.company}
                        </h3>
                        <p className={`text-sm font-medium text-${useCase.color}`}>
                          &ldquo;{useCase.tagline}&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Workflow */}
                    <div className="mb-6">
                      <div className="text-sm font-semibold text-foreground mb-3">
                        Workflow:
                      </div>
                      <div className="space-y-2">
                        {useCase.workflow.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className={`text-${useCase.color} font-bold mt-0.5`}>→</span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Result */}
                    <div className={`bg-${useCase.color}-50 border-l-4 border-${useCase.color} rounded-r-lg p-4`}>
                      <div className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                        Resultado
                      </div>
                      <p className="text-sm font-medium text-foreground">
                        &ldquo;{useCase.result}&rdquo;
                      </p>
                    </div>

                    {/* Screenshot placeholder */}
                    <div className="mt-6 bg-muted rounded-lg p-4 text-center">
                      <Icon className={`h-8 w-8 text-${useCase.color} mx-auto mb-2`} />
                      <div className="text-xs text-muted-foreground">
                        {useCase.screenshot}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            ¿Tu industria no está aquí? ProofPass funciona para cualquier supply chain.
          </p>
          <button className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl hover:bg-primary-600 transition-all">
            Ver Más Casos de Uso
          </button>
        </motion.div>
      </div>
    </section>
  )
}
