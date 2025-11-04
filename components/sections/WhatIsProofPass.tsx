"use client"

import { motion } from "framer-motion"
import { FileText, Share2, CheckCircle2, ArrowRight } from "lucide-react"

export function WhatIsProofPass() {
  const steps = [
    {
      number: "1",
      title: "EMITIR",
      subtitle: "Crea tu attestation",
      time: "20 segundos",
      icon: FileText,
      color: "primary",
      description: "Usuario llena formulario simple",
      details: [
        "¿Qué evento? → Test de calidad aprobado",
        "¿Sobre qué? → Batería #12345",
        "Datos → Voltaje: 3.7V, Ciclos: 1000",
        "[Click 'Crear Attestation']",
      ],
      result: "→ QR code generado instantáneamente",
    },
    {
      number: "2",
      title: "COMPARTIR",
      subtitle: "Distribuye la prueba",
      time: "10 segundos",
      icon: Share2,
      color: "secondary",
      description: "Múltiples opciones de distribución",
      details: [
        "□ Descargar QR",
        "□ Enviar por email",
        "□ Agregar a Product Passport",
        "□ Generar ZK Proof",
      ],
      result: "→ Listo para verificación pública",
    },
    {
      number: "3",
      title: "VERIFICAR",
      subtitle: "Cualquiera puede confirmar",
      time: "2 segundos",
      icon: CheckCircle2,
      color: "accent",
      description: "Verificación instantánea vía QR",
      details: [
        "✓ Firmado por: ACME Battery Corp",
        "✓ Timestamp: 2025-10-28 14:30 UTC",
        "✓ Blockchain: verificado",
        "✓ Estado: Válido",
      ],
      result: "→ Confianza instantánea",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
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
            ¿Qué es ProofPass?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            3 pasos. 2 minutos. Infinitas posibilidades.
          </p>
          <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-sm text-muted-foreground">
            <span>Sin instalación</span>
            <span>·</span>
            <span>Sin hardware especial</span>
            <span>·</span>
            <span>Solo tu navegador</span>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Card */}
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-primary transition-all h-full hover:shadow-xl">
                  {/* Number badge */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-${step.color}-50 text-${step.color} font-bold text-xl mb-4`}>
                    {step.number}
                  </div>

                  {/* Header */}
                  <div className="mb-6">
                    <div className={`text-sm font-bold text-${step.color} mb-1`}>
                      PASO {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.subtitle}</p>
                    <div className="mt-2 inline-flex items-center gap-2 text-xs bg-muted px-3 py-1 rounded-full">
                      <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                      {step.time}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 mb-6">
                    <p className="text-sm text-muted-foreground font-medium">
                      {step.description}
                    </p>
                    <div className="bg-muted rounded-lg p-4 space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="text-sm text-foreground font-mono">
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Result */}
                  <div className={`bg-${step.color}-50 border border-${step.color}-200 rounded-lg p-3 flex items-center gap-2`}>
                    <Icon className={`h-5 w-5 text-${step.color} flex-shrink-0`} />
                    <span className="text-sm font-medium text-foreground">
                      {step.result}
                    </span>
                  </div>
                </div>

                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                )}
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
            ¿Listo para probar? Crea tu primera attestation ahora
          </p>
          <button className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl hover:bg-accent-600 transition-all">
            Empieza Gratis
            <ArrowRight className="h-5 w-5" />
          </button>        </motion.div>
      </div>
    </section>
  )
}
