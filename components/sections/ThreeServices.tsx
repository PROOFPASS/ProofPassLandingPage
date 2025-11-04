"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, Package, EyeOff, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThreeServices() {
  const [activeTab, setActiveTab] = useState(0)

  const services = [
    {
      id: 0,
      icon: CheckCircle2,
      name: "Attestations",
      badge: "⭐ Más Popular",
      tagline: "Prueba Digital de Cualquier Evento",
      description: "Crea certificados verificables de cualquier evento empresarial",
      canAttest: [
        "Tests de laboratorio",
        "Inspecciones de calidad",
        "Recepciones de envíos",
        "Auditorías de compliance",
        "Certificaciones",
        "Cualquier evento empresarial",
      ],
      howItWorks: [
        "1. Llenas formulario (2 minutos)",
        "2. Sistema firma criptográficamente",
        "3. Ancla en blockchain (automático)",
        "4. QR code listo para compartir",
      ],
      pricing: "Desde 0.001 EUR",
      api: "REST + SDKs (Python, JS, PHP)",
      cta: "Crea tu Primera Attestation",
      color: "primary",
    },
    {
      id: 1,
      icon: Package,
      name: "Product Passports",
      badge: "Intermedio",
      tagline: "Historia Completa del Producto",
      description: "Agrega múltiples attestations en un timeline visual",
      canAttest: [
        "Agrega múltiples attestations",
        "Timeline visual automático",
        "Un solo QR para todo el historial",
        "Cumple EU Battery Passport",
        "8+ attestations por producto",
        "Trazabilidad completa",
      ],
      example: {
        product: "Batería de EV con 8 attestations:",
        steps: [
          "Minería ética de litio ✓",
          "Test de pureza 99.9% ✓",
          "Manufactura certificada ✓",
          "QA: 1000 ciclos aprobados ✓",
          "Envío a 20°C ✓",
          "Instalación en vehículo ✓",
          "Primera carga completada ✓",
          "Reciclaje post-vida ✓",
        ],
      },
      cta: "Ver Ejemplo de Passport",
      color: "secondary",
    },
    {
      id: 2,
      icon: EyeOff,
      name: "Zero-Knowledge Proofs",
      badge: "Avanzado",
      tagline: "Prueba Sin Revelar",
      description: "Demuestra compliance sin exponer datos sensibles",
      whenToUse: [
        "Probar compliance sin exponer cifras exactas",
        "Proteger datos de competidores",
        "Mantener confidencialidad de proveedores",
        "Cumplir regulaciones con privacidad",
      ],
      example: {
        without: "❌ Sin ZK: 'Mi huella es 3.2kg CO2/kWh' → Competidor ve mi número exacto",
        with: "✓ Con ZK: 'Mi huella es < 5kg CO2/kWh' → Cumplo regulación EU → Mi cifra exacta queda privada",
      },
      proofTypes: [
        "• Threshold: 'X > límite'",
        "• Range: 'X entre Y y Z'",
        "• Membership: 'X está en lista aprobada'",
      ],
      cta: "Genera tu Primer Proof",
      color: "accent",
    },
  ]

  const activeService = services[activeTab]

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
            Tres Servicios.{" "}
            <span className="text-primary">Una Plataforma.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde attestations simples hasta proofs de zero-knowledge. Todo integrado.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all ${
                  activeTab === index
                    ? `border-${service.color} bg-${service.color}-50 shadow-lg scale-105`
                    : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                }`}
              >
                <Icon
                  className={`h-5 w-5 ${
                    activeTab === index ? `text-${service.color}` : "text-muted-foreground"
                  }`}
                />
                <div className="text-left">
                  <div
                    className={`font-bold ${
                      activeTab === index ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {service.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{service.badge}</div>
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Active Service Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`bg-gradient-to-br from-${activeService.color}-50 to-white rounded-2xl p-8 md:p-12 border-2 border-${activeService.color}-200`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left: Content */}
              <div>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${activeService.color}-100 mb-6`}>
                  <activeService.icon className={`h-8 w-8 text-${activeService.color}`} />
                </div>

                <h3 className="text-3xl font-bold text-foreground mb-2">
                  {activeService.name}
                </h3>
                <p className={`text-lg font-medium text-${activeService.color} mb-4`}>
                  {activeService.tagline}
                </p>
                <p className="text-muted-foreground mb-6">
                  {activeService.description}
                </p>

                {/* Service-specific content */}
                {activeService.canAttest && (
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-foreground mb-3">
                      Lo que puedes atestar:
                    </div>
                    <ul className="space-y-2">
                      {activeService.canAttest.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <span className={`text-${activeService.color} mt-1`}>✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeService.whenToUse && (
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-foreground mb-3">
                      Cuándo usarlo:
                    </div>
                    <ul className="space-y-2">
                      {activeService.whenToUse.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <span className={`text-${activeService.color} mt-1`}>→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeService.howItWorks && (
                  <div className="bg-white rounded-lg p-4 mb-6">
                    <div className="text-xs font-semibold text-muted-foreground uppercase mb-2">
                      Cómo funciona:
                    </div>
                    <div className="space-y-1 text-sm text-foreground">
                      {activeService.howItWorks.map((step, idx) => (
                        <div key={idx}>{step}</div>
                      ))}
                    </div>
                  </div>
                )}

                {activeService.pricing && (
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="text-sm text-muted-foreground">Precio:</span>
                    <span className="text-lg font-bold text-foreground">{activeService.pricing}</span>
                  </div>
                )}

                {activeService.api && (
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="text-sm text-muted-foreground">API:</span>
                    <span className="text-sm font-medium text-foreground">{activeService.api}</span>
                  </div>
                )}

                <Button size="lg" className="group">
                  {activeService.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Right: Example/Visual */}
              <div>
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100">
                  {activeService.example?.product && (
                    <div>
                      <div className="text-sm font-semibold text-foreground mb-4">
                        Ejemplo real:
                      </div>
                      <div className="text-sm text-muted-foreground mb-3">
                        {activeService.example.product}
                      </div>
                      <div className="space-y-2">
                        {activeService.example.steps.map((step, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm bg-muted rounded px-3 py-2"
                          >
                            <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0" />
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeService.example?.without && (
                    <div className="space-y-4">
                      <div className="text-sm font-semibold text-foreground mb-3">
                        Ejemplo concreto:
                      </div>
                      <div className="bg-red-50 border-l-4 border-red-400 rounded-r p-3 text-sm">
                        {activeService.example.without}
                      </div>
                      <div className="bg-green-50 border-l-4 border-secondary rounded-r p-3 text-sm">
                        {activeService.example.with}
                      </div>
                      {activeService.proofTypes && (
                        <div className="mt-4">
                          <div className="text-xs font-semibold text-muted-foreground uppercase mb-2">
                            Tipos de proofs:
                          </div>
                          <div className="space-y-1 text-sm">
                            {activeService.proofTypes.map((type, idx) => (
                              <div key={idx}>{type}</div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
