"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { HelpCircle, ChevronDown } from "lucide-react"

export function CompleteFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Es esto una blockchain?",
      answer:
        "Usamos blockchain para timestamping, pero NO necesitas entender blockchain. Piénsalo como 'firma digital + registro público inmutable'. Es tan fácil como usar DocuSign, pero las pruebas quedan verificables para siempre.",
    },
    {
      question: "¿Qué blockchain usan?",
      answer:
        "Principalmente Stellar, y opcionalmente Optimism. Los elegimos por costo (<$0.00001/transacción) y velocidad (<5 segundos). Pero tú no tienes que preocuparte por esto - el sistema lo maneja automáticamente.",
    },
    {
      question: "¿Los datos van al blockchain?",
      answer:
        "NO. Solo un hash criptográfico (una huella digital) va al blockchain. Tus datos quedan en tu control - ya sea en servidores ProofPass (encriptados) o self-hosted si prefieres. El blockchain solo sirve para verificar que no se alteró nada.",
    },
    {
      question: "¿Puedo usar mi propio blockchain?",
      answer:
        "Sí, en plan Enterprise. Soportamos Stellar, Optimism, y deployment custom en tu propia blockchain si lo necesitas. Incluso puedes usar una blockchain privada (permissioned).",
    },
    {
      question: "¿Qué es un DID (Decentralized Identifier)?",
      answer:
        "Es como un email pero descentralizado. Ejemplo: did:key:z6MkhaX... No necesitas entenderlo - el sistema lo genera automáticamente cuando creas tu cuenta. Piénsalo como tu 'firma digital' única.",
    },
    {
      question: "¿Cómo funcionan los ZK proofs?",
      answer:
        "Es criptografía que te permite probar 'X > 100' sin revelar que X = 127. Ejemplo real: pruebas que tu huella de carbono es <5kg sin revelar que es exactamente 3.2kg. Nuestro generador visual hace todo el trabajo matemático complejo por ti - tú solo defines qué quieres probar.",
    },
    {
      question: "¿Es compatible con GDPR?",
      answer:
        "Sí. Los datos personales NO van al blockchain (solo el hash). Para el 'derecho al olvido': borramos tus datos off-chain, y el hash on-chain queda pero sin sentido (no se puede reconstruir la información original). Además, puedes hacer ZK proofs sin revelar datos personales.",
    },
    {
      question: "¿Qué pasa si ProofPass desaparece?",
      answer:
        "Tus attestations siguen verificables porque están en blockchain público (no controlado por nosotros). Además, puedes exportar todos tus datos en formato W3C Verifiable Credentials estándar - funcionan con cualquier software compatible. No hay vendor lock-in.",
    },
    {
      question: "¿Necesito crypto o wallets?",
      answer:
        "NO. Nunca tocas cryptocurrency. Nosotros manejamos todo el blockchain en background. Tú pagas en EUR/USD normal con tarjeta de crédito. Es como usar Zoom - funciona en internet pero tú no necesitas entender protocolos de red.",
    },
    {
      question: "¿Puedo integrar con mi ERP (SAP/Oracle)?",
      answer:
        "Sí, en plan Enterprise. Tenemos conectores pre-built para SAP, Oracle, Microsoft Dynamics y otros. También API REST estándar si necesitas integración custom. La mayoría de clientes nos integran en 1-2 semanas.",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
              <HelpCircle className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Preguntas Frecuentes
            </h2>
          </div>
          <p className="text-xl text-muted-foreground">
            Las respuestas que necesitas, en español claro
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border-2 border-gray-200 hover:border-primary transition-colors overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex justify-between items-start hover:bg-gray-50 transition-colors group"
              >
                <span className="font-semibold text-foreground pr-8 group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8"
        >
          <p className="text-lg font-medium text-foreground mb-4">
            ¿Más preguntas?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl hover:bg-primary-600 transition-all">
              Habla con Ventas
            </button>
            <button className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-all">
              Lee la Documentación
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
