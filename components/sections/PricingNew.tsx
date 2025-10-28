"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, ArrowRight, Sparkles, HelpCircle } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PricingNew() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const plans = [
    {
      name: "Free",
      price: "0",
      period: "para siempre",
      badge: "Perfecto para probar",
      description: "Ideal para pilotos y pruebas de concepto",
      features: [
        "100 attestations/mes",
        "Verificación ilimitada",
        "API REST",
        "Templates básicos",
        "Community support",
        "QR codes",
        "Blockchain testnet",
      ],
      notIncluded: [
        "Product Passports",
        "Zero-Knowledge Proofs",
        "White-label",
        "Priority support",
      ],
      cta: "Empezar Gratis",
      ctaSubtext: "No se requiere tarjeta de crédito",
      popular: false,
      color: "gray",
    },
    {
      name: "Professional",
      price: "199",
      period: "EUR/mes",
      badge: "⭐ Más Popular",
      description: "Para equipos en crecimiento",
      features: [
        "5,000 attestations/mes",
        "50 ZK proofs/mes incluidos",
        "Product Passports ilimitados",
        "White-label (tu marca)",
        "Webhooks",
        "Templates custom",
        "Priority email support",
        "Blockchain mainnet",
        "Advanced analytics",
      ],
      extras: [
        "+0.10 EUR por ZK proof extra",
        "+0.02 EUR por attestation extra",
      ],
      cta: "Prueba 14 Días Gratis",
      ctaSubtext: "o habla con ventas",
      popular: true,
      color: "primary",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contrato anual",
      badge: "Para operaciones críticas",
      description: "Solución completa para empresas",
      features: [
        "Attestations ilimitadas",
        "ZK proofs ilimitados",
        "Custom proof circuits",
        "SLA 99.9% uptime",
        "Dedicated account manager",
        "24/7 phone support",
        "On-premise option",
        "SSO (SAML/OIDC)",
        "Audit logs advanced",
        "ERP integrations",
        "Training & onboarding",
        "Custom blockchain",
      ],
      cta: "Contactar Ventas",
      ctaSubtext: "ver caso de uso enterprise",
      popular: false,
      color: "accent",
    },
  ]

  const faqs = [
    {
      question: "¿Qué pasa si supero el límite de mi plan?",
      answer:
        "Activamos pay-as-you-go automáticamente. Pagas 0.02 EUR por attestation adicional y 0.10 EUR por ZK proof adicional. Sin sorpresas, recibes notificación cuando llegas al 80% del límite.",
    },
    {
      question: "¿Puedo cambiar de plan en cualquier momento?",
      answer:
        "Sí, totalmente flexible. Los upgrades son inmediatos. Los downgrades se aplican al final del ciclo de facturación actual para que no pierdas lo que pagaste.",
    },
    {
      question: "¿Ofrecen descuentos por volumen?",
      answer:
        "Sí! Para volúmenes >50,000 attestations/mes tenemos precios especiales. Contacta a ventas para una cotización personalizada.",
    },
    {
      question: "¿Qué incluye 'verificación ilimitada'?",
      answer:
        "Cualquier persona puede verificar tus attestations gratis, sin límite de cantidad. Solo pagas por CREAR attestations, no por verificarlas. Esto hace que tus clientes y partners puedan verificar sin costo.",
    },
  ]

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Empieza gratis.{" "}
            <span className="text-primary">Escala cuando quieras.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sin contratos de largo plazo. Sin costos ocultos. Sin sorpresas.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-accent text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                    <Sparkles className="h-4 w-4" />
                    {plan.badge}
                  </div>
                </div>
              )}

              <Card
                className={`h-full ${
                  plan.popular
                    ? "border-2 border-primary shadow-2xl scale-105"
                    : "border border-gray-200 shadow-lg"
                } hover:shadow-2xl transition-all bg-white`}
              >
                <CardHeader className="text-center pb-8 pt-10">
                  {!plan.popular && plan.badge && (
                    <div className="text-sm text-muted-foreground mb-2">{plan.badge}</div>
                  )}
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    {plan.price === "Custom" ? (
                      <div className="text-4xl font-bold text-foreground">Custom</div>
                    ) : (
                      <>
                        <div className="flex items-baseline justify-center gap-1">
                          {plan.price !== "0" && (
                            <span className="text-2xl text-muted-foreground">€</span>
                          )}
                          <span className="text-5xl font-bold text-foreground">
                            {plan.price}
                          </span>
                        </div>
                        <span className="text-muted-foreground text-sm">{plan.period}</span>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="pb-8">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary-100 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-secondary" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded?.map((feature, idx) => (
                      <li key={`not-${idx}`} className="flex items-start gap-3 opacity-40">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                          <span className="text-xs">✗</span>
                        </div>
                        <span className="text-sm text-muted-foreground line-through">{feature}</span>
                      </li>
                    ))}
                    {plan.extras?.map((extra, idx) => (
                      <li key={`extra-${idx}`} className="flex items-start gap-3 pt-2 mt-2 border-t">
                        <span className="text-xs text-muted-foreground">{extra}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full mb-2 h-12 text-base"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  {plan.ctaSubtext && (
                    <p className="text-center text-xs text-muted-foreground">
                      {plan.ctaSubtext}
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <HelpCircle className="h-6 w-6 text-primary" />
            Preguntas Frecuentes
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-6 flex justify-between items-start hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-foreground pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
