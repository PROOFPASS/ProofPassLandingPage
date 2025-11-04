"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Factory, Truck, Store, User, ArrowDown, CheckCircle2 } from "lucide-react"

export function TrustNetwork() {
  const [activeNode, setActiveNode] = useState<number | null>(null)

  const nodes = [
    {
      id: 0,
      icon: Factory,
      name: "FABRICANTE",
      emoji: "🏭",
      color: "primary",
      emits: ["Test de calidad", "Certificado de manufactura", "Datos de producción"],
      verifies: ["Materia prima del proveedor"],
      sees: ["Sus propios datos completos", "Proofs del proveedor (solo claims, no datos)"],
    },
    {
      id: 1,
      icon: Truck,
      name: "DISTRIBUIDOR",
      emoji: "📦",
      color: "secondary",
      emits: ["Recepción a temperatura correcta", "Condiciones de transporte", "Llegada a destino"],
      verifies: ["Attestation de fabricante", "Origen del producto"],
      sees: ["Datos de transporte", "QR code del producto", "Attestations previas"],
    },
    {
      id: 2,
      icon: Store,
      name: "RETAILER",
      emoji: "🏪",
      color: "accent",
      emits: ["Recepción en tienda", "Almacenamiento correcto"],
      verifies: ["Toda la cadena anterior", "Product Passport completo"],
      sees: ["Timeline completo", "Todas las attestations", "Estado de cada paso"],
    },
    {
      id: 3,
      icon: User,
      name: "CONSUMIDOR",
      emoji: "👤",
      color: "warning",
      emits: ["Nada - solo verifica"],
      verifies: ["Escanea QR del producto"],
      sees: ["Certificado público", "Origen verificado", "Cadena completa (si el fabricante lo permite)"],
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted to-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            ¿Cómo se{" "}
            <span className="text-primary">conecta todo?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Cada actor emite sus attestations. Todos pueden verificar. Nadie puede falsificar.
          </p>
          <p className="text-sm text-muted-foreground">
            Click en cada nodo para ver qué emite, verifica y puede ver
          </p>
        </motion.div>

        {/* Network Diagram */}
        <div className="relative">
          {/* Connecting lines */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary via-accent to-warning transform -translate-x-1/2 hidden md:block" />

          {/* Nodes */}
          <div className="space-y-8">
            {nodes.map((node, index) => {
              const Icon = node.icon
              const isActive = activeNode === node.id

              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex items-center gap-4">
                    {/* Node Circle */}
                    <button
                      onClick={() => setActiveNode(isActive ? null : node.id)}
                      className={`relative z-10 group w-24 h-24 rounded-full border-4 transition-all ${
                        isActive
                          ? `border-${node.color} bg-${node.color} shadow-2xl scale-110`
                          : `border-${node.color} bg-white hover:scale-105 shadow-lg`
                      }`}
                    >
                      <div className="flex flex-col items-center justify-center h-full">
                        <span className="text-3xl mb-1">{node.emoji}</span>
                        <span className={`text-xs font-bold ${isActive ? 'text-white' : `text-${node.color}`}`}>
                          {node.name}
                        </span>
                      </div>
                    </button>

                    {/* Info Card */}
                    <div className={`flex-1 bg-white rounded-xl border-2 p-6 transition-all ${
                      isActive ? `border-${node.color} shadow-xl` : 'border-gray-200'
                    }`}>
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-${node.color}-100 flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`h-6 w-6 text-${node.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-foreground mb-1">{node.name}</h3>
                          <p className={`text-xs text-${node.color} mb-3`}>
                            Click para ver detalles →
                          </p>

                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="space-y-3"
                            >
                              {/* Emite */}
                              <div>
                                <div className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                                  ✏️ Qué emite:
                                </div>
                                <ul className="space-y-1">
                                  {node.emits.map((item, idx) => (
                                    <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                                      <span className={`text-${node.color} mt-1`}>→</span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Verifica */}
                              <div>
                                <div className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                                  🔍 Qué verifica:
                                </div>
                                <ul className="space-y-1">
                                  {node.verifies.map((item, idx) => (
                                    <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                                      <CheckCircle2 className={`h-4 w-4 text-secondary mt-0.5 flex-shrink-0`} />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Ve */}
                              <div>
                                <div className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                                  👁️ Qué datos ve:
                                </div>
                                <ul className="space-y-1">
                                  {node.sees.map((item, idx) => (
                                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                      <span className="mt-1">•</span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  {index < nodes.length - 1 && (
                    <div className="flex justify-center my-4">
                      <ArrowDown className={`h-8 w-8 text-${node.color} animate-bounce`} />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary-50 border-2 border-primary-200 rounded-2xl p-8 text-center"
        >
          <h3 className="text-xl font-bold text-foreground mb-3">
            🔒 Lo Importante
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="font-semibold text-foreground mb-1">
                ✓ Cada actor firma
              </div>
              <div className="text-muted-foreground">
                Sus propias attestations con su DID
              </div>
            </div>
            <div>
              <div className="font-semibold text-foreground mb-1">
                ✓ Todos verifican
              </div>
              <div className="text-muted-foreground">
                Las attestations de otros gratis
              </div>
            </div>
            <div>
              <div className="font-semibold text-foreground mb-1">
                ✓ Nadie falsifica
              </div>
              <div className="text-muted-foreground">
                Las de otros (blockchain lo impide)
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
