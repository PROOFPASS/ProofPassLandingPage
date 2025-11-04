"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, ArrowRight, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const plans = [
    {
      name: "Free",
      price: "0",
      period: "forever",
      description: "Perfect for testing and small projects",
      features: [
        "100 attestations/month",
        "Basic templates",
        "API access",
        "Community support",
        "Public verification portal",
      ],
      cta: "Start Free",
      popular: false,
      color: "gray",
    },
    {
      name: "Professional",
      price: "199",
      period: "per month",
      description: "For growing businesses and supply chains",
      features: [
        "5,000 attestations/month",
        "50 ZK proofs included",
        "Product Passports",
        "White-label option",
        "Priority support",
        "Custom templates",
        "Advanced analytics",
      ],
      cta: "Start Trial",
      popular: true,
      color: "primary",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large-scale operations and compliance",
      features: [
        "Unlimited attestations",
        "Unlimited ZK proofs",
        "Custom proof circuits",
        "SLA guarantee (99.9%)",
        "Dedicated support",
        "ERP integration",
        "On-premise option",
        "Audit trail & reporting",
      ],
      cta: "Contact Sales",
      popular: false,
      color: "accent",
    },
  ]

  const faqs = [
    {
      question: "What happens if I exceed my plan limits?",
      answer:
        "You can upgrade anytime or pay as you go. Additional attestations are 0.001 EUR each, and ZK proofs are 0.10 EUR each.",
    },
    {
      question: "Can I change plans anytime?",
      answer:
        "Yes! You can upgrade, downgrade, or cancel anytime. Changes take effect at the start of your next billing cycle.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a 30-day money-back guarantee on all paid plans. No questions asked.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, wire transfers for annual plans, and crypto payments (USDC) for enterprise customers.",
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple, <span className="text-primary">Transparent Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Start free. Scale as you grow. No hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                    <Sparkles className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}
              <Card
                className={`h-full ${
                  plan.popular
                    ? "border-2 border-primary shadow-xl scale-105"
                    : "border-gray-200"
                } hover:shadow-xl transition-all`}
              >
                <CardHeader className="text-center pb-8 pt-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    {plan.price === "Custom" ? (
                      <div className="text-4xl font-bold text-primary">Custom</div>
                    ) : (
                      <>
                        <span className="text-5xl font-bold text-foreground">
                          {plan.price === "0" ? "Free" : `€${plan.price}`}
                        </span>
                        {plan.price !== "0" && (
                          <span className="text-muted-foreground ml-2">/{plan.period}</span>
                        )}
                      </>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="pb-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-secondary" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full group"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
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
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom trust signal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            All plans include SSL encryption, SOC 2 compliance, and 99.9% uptime SLA
          </p>
        </motion.div>
      </div>
    </section>
  )
}
