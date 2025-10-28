"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, X, Check } from "lucide-react"

export function VsAlternatives() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const comparisons = [
    {
      title: "vs. Papel / PDF",
      description: "La forma tradicional de documentar",
      problems: [
        { icon: X, text: "Fácil de falsificar", color: "text-red-500" },
        { icon: X, text: "Sin verificación instantánea", color: "text-red-500" },
        { icon: X, text: "Se pierde fácilmente", color: "text-red-500" },
        { icon: X, text: "No auditable digitalmente", color: "text-red-500" },
      ],
      solutions: [
        { icon: Check, text: "Imposible falsificar (blockchain)", color: "text-secondary" },
        { icon: Check, text: "Verificación en 2 segundos con QR", color: "text-secondary" },
        { icon: Check, text: "Almacenado permanentemente", color: "text-secondary" },
        { icon: Check, text: "Audit trail completo", color: "text-secondary" },
      ],
    },
    {
      title: "vs. Excel / Google Sheets",
      description: "Hojas de cálculo compartidas",
      problems: [
        { icon: X, text: "Sin firma digital", color: "text-red-500" },
        { icon: X, text: "Cualquiera puede editar", color: "text-red-500" },
        { icon: X, text: "No verificable por terceros", color: "text-red-500" },
        { icon: X, text: "Requiere acceso completo", color: "text-red-500" },
      ],
      solutions: [
        { icon: Check, text: "Firmado criptográficamente", color: "text-secondary" },
        { icon: Check, text: "Inmutable una vez creado", color: "text-secondary" },
        { icon: Check, text: "Verificable públicamente", color: "text-secondary" },
        { icon: Check, text: "Datos privados con ZK proofs", color: "text-secondary" },
      ],
    },
    {
      title: "vs. IBM Food Trust / SAP",
      description: "Soluciones enterprise blockchain",
      problems: [
        { icon: X, text: "0.50+ EUR por transacción", color: "text-red-500" },
        { icon: X, text: "6-12 meses de implementación", color: "text-red-500" },
        { icon: X, text: "Vendor lock-in", color: "text-red-500" },
        { icon: X, text: "Sin zero-knowledge proofs", color: "text-red-500" },
      ],
      solutions: [
        { icon: Check, text: "0.001 EUR por attestation", color: "text-secondary" },
        { icon: Check, text: "2 semanas para integrar", color: "text-secondary" },
        { icon: Check, text: "Open standards (W3C)", color: "text-secondary" },
        { icon: Check, text: "ZK proofs incluidos", color: "text-secondary" },
      ],
    },
    {
      title: "vs. Desarrollo Propio",
      description: "Construir tu propia solución blockchain",
      problems: [
        { icon: X, text: "500K-2M EUR inversión inicial", color: "text-red-500" },
        { icon: X, text: "18+ meses desarrollo", color: "text-red-500" },
        { icon: X, text: "Requiere expertise crypto", color: "text-red-500" },
        { icon: X, text: "Mantenimiento constante", color: "text-red-500" },
      ],
      solutions: [
        { icon: Check, text: "Desde 0 EUR/mes", color: "text-secondary" },
        { icon: Check, text: "2 minutos para empezar", color: "text-secondary" },
        { icon: Check, text: "No se necesita expertise", color: "text-secondary" },
        { icon: Check, text: "Fully managed", color: "text-secondary" },
      ],
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-muted">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            ¿Por qué no usar...?
          </h2>
          <p className="text-xl text-muted-foreground">
            Comparaciones honestas con las alternativas
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-primary transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {comparison.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {comparison.description}
                  </p>
                </div>
                <ChevronDown
                  className={`h-6 w-6 text-muted-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-6 pt-6 border-t">
                    {/* Problems */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                          <X className="h-5 w-5 text-red-500" />
                        </div>
                        <span className="font-semibold text-foreground">
                          Alternativa
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {comparison.problems.map((problem, idx) => {
                          const Icon = problem.icon
                          return (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Icon className={`h-4 w-4 mt-0.5 flex-shrink-0 ${problem.color}`} />
                              <span>{problem.text}</span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-secondary-100 flex items-center justify-center">
                          <Check className="h-5 w-5 text-secondary" />
                        </div>
                        <span className="font-semibold text-foreground">
                          ProofPass
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {comparison.solutions.map((solution, idx) => {
                          const Icon = solution.icon
                          return (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Icon className={`h-4 w-4 mt-0.5 flex-shrink-0 ${solution.color}`} />
                              <span>{solution.text}</span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
