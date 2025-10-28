"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Play, FileText, Check } from "lucide-react"

export function HeroNew() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[60%,40%] gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary-100 text-primary-600 text-sm font-medium mb-6 shadow-sm"
            >
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              Open Source & Código Transparente
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight"
            >
              Como DocuSign,
              <br />
              pero para tu{" "}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Supply Chain
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
            >
              Crea pruebas digitales verificables de cualquier evento de negocio.
              <br />
              Tus clientes, partners y auditores pueden verificar al instante.
              <br />
              <strong className="text-foreground">Sin blockchain expertise. Sin vendor lock-in.</strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button size="lg" className="group text-base px-8 h-14 shadow-lg hover:shadow-xl bg-accent hover:bg-accent-600">
                Empieza Gratis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group text-base px-8 h-14 border-2">
                <Play className="mr-2 h-5 w-5" />
                Ver Demo en 2 Min
              </Button>
              <Button size="lg" variant="ghost" className="group text-base">
                <FileText className="mr-2 h-5 w-5" />
                Lee la Documentación
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm"
            >
              {[
                { icon: "📊", text: "10,000+ attestations creadas" },
                { icon: "💰", text: "<$0.001 por attestation" },
                { icon: "⚡", text: "2 minutos para integrar" },
                { icon: "✅", text: "Compatible W3C" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-xs">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            {/* Dashboard mockup */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-xs text-muted-foreground ml-2">Dashboard ProofPass</span>
              </div>

              {/* Form mockup */}
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-muted-foreground mb-2">¿Qué evento?</div>
                  <div className="bg-primary-50 border border-primary-200 rounded-lg px-3 py-2 text-sm">
                    Test de calidad aprobado
                  </div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-2">¿Sobre qué producto?</div>
                  <div className="bg-muted border border-gray-200 rounded-lg px-3 py-2 text-sm">
                    Batería #12345
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs text-muted-foreground mb-2">Voltaje</div>
                    <div className="bg-muted border border-gray-200 rounded-lg px-3 py-2 text-sm">
                      3.7V
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-2">Ciclos</div>
                    <div className="bg-muted border border-gray-200 rounded-lg px-3 py-2 text-sm">
                      1000
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow">
                  Crear Attestation
                </button>

                {/* Success state */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="bg-secondary-50 border-2 border-secondary rounded-lg p-3 flex items-start gap-3"
                >
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <div className="font-medium text-foreground mb-1">¡Attestation creada!</div>
                    <div className="text-muted-foreground">QR code generado en 2 segundos</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
            >
              ⚡ Verificable al instante
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-warning text-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg"
            >
              🔒 Inmutable
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
