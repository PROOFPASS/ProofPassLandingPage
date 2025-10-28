"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Layout, Code, Package, Webhook, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Integration() {
  const [activeTab, setActiveTab] = useState(0)
  const [copied, setCopied] = useState(false)

  const tabs = [
    {
      id: 0,
      name: "Dashboard",
      icon: Layout,
      title: "Interfaz visual para crear attestations",
      description: "No se necesita código. Solo llenar formulario y click.",
      steps: ["1. Llenar formulario", "2. Click 'Crear'", "3. Descargar QR"],
      visual: true,
    },
    {
      id: 1,
      name: "API",
      icon: Code,
      title: "REST API simple",
      code: `POST https://api.proofpass.co/v1/attestations

{
  "subject": "Batería #12345",
  "type": "QualityTest",
  "claims": {
    "voltage": 3.7,
    "cycles": 1000,
    "inspector": "John Doe"
  }
}

Response: {
  "id": "att_abc123",
  "qr_code": "https://verify.proofpass.co/att_abc123",
  "blockchain_tx": "stellar:ABC123..."
}`,
    },
    {
      id: 2,
      name: "SDKs",
      icon: Package,
      title: "Librerías para Python, JavaScript, PHP, Java",
      code: `# Python
pip install proofpass

from proofpass import Client

client = Client(api_key="your_key")

attestation = client.create_attestation(
    subject="Batería #12345",
    type="QualityTest",
    claims={"voltage": 3.7, "cycles": 1000}
)

print(attestation.qr_code)
# https://verify.proofpass.co/att_abc123`,
      languages: ["Python", "JavaScript", "PHP", "Java"],
    },
    {
      id: 3,
      name: "Webhooks",
      icon: Webhook,
      title: "Notificaciones en tiempo real",
      code: `// Config en dashboard:
URL: https://tuservidor.com/webhook
Events: [✓] attestation.verified

// Payload que recibes:
{
  "event": "attestation.verified",
  "attestation_id": "att_abc123",
  "verified_by": "ip:192.168.1.1",
  "timestamp": "2025-10-28T14:30:00Z",
  "verifier_location": "Madrid, Spain"
}

// Events disponibles:
• attestation.created
• attestation.verified
• passport.created
• zkproof.generated`,
    },
  ]

  const handleCopy = () => {
    if (tabs[activeTab].code) {
      navigator.clipboard.writeText(tabs[activeTab].code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

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
            Integración en{" "}
            <span className="text-primary">Minutos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No necesitas ser developer. Pero si lo eres, tenemos todo listo.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-gray-200"
                }`}
              >
                <Icon className="h-5 w-5" />
                {tab.name}
              </button>
            )
          })}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-muted to-white rounded-2xl p-8 md:p-12 border-2 border-gray-200"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {tabs[activeTab].title}
            </h3>
            {tabs[activeTab].description && (
              <p className="text-muted-foreground">{tabs[activeTab].description}</p>
            )}
          </div>

          {tabs[activeTab].visual && (
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-md border">
                {tabs[activeTab].steps?.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3 py-3">
                    <div className="w-8 h-8 rounded-full bg-primary-100 text-primary flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <span className="text-foreground">{step}</span>
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground text-center">
                ✨ Interfaz visual disponible en /dashboard
              </div>
            </div>
          )}

          {tabs[activeTab].code && (
            <div className="relative">
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-3 py-2 bg-white/90 hover:bg-white rounded-lg text-sm font-medium shadow-md transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-secondary" />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copiar
                    </>
                  )}
                </button>
              </div>

              <pre className="bg-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto">
                <code className="text-sm font-mono">{tabs[activeTab].code}</code>
              </pre>

              {tabs[activeTab].languages && (
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <span>También disponible en:</span>
                  {tabs[activeTab].languages.map((lang, idx) => (
                    <span key={idx} className="px-2 py-1 bg-muted rounded text-xs font-medium">
                      {lang}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group">
              Ver Documentación Completa
              <Code className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Probar en Sandbox
            </Button>
          </div>
        </motion.div>

        {/* Bottom trust */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-6 text-sm text-muted-foreground">
            <span>⚡ 2 semanas promedio de integración</span>
            <span>•</span>
            <span>📚 Docs en español</span>
            <span>•</span>
            <span>🆘 Soporte técnico incluido</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
