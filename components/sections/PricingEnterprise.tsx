"use client"

import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingEnterprise() {
  const plans = [
    {
      name: "Professional",
      price: "199",
      period: "/month",
      description: "Managed SaaS for Teams",
      features: [
        "5,000 attestations/month",
        "50 ZK proofs/month",
        "Product Passports",
        "Priority email support",
        "Advanced analytics",
        "Custom templates",
        "Webhook integrations",
        "99.5% SLA",
      ],
      additional: [
        "API Rate Limit: 100 req/sec",
        "Storage: 100GB included",
        "€0.02/attestation overage",
        "€0.10/ZK proof overage",
      ],
      cta: "Start 30-Day Trial",
      popular: false,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Pricing",
      description: "For Large Organizations",
      features: [
        "Unlimited attestations",
        "Unlimited ZK proofs",
        "Custom proof circuits",
        "99.9% uptime SLA",
        "24/7 phone support",
        "Dedicated account manager",
        "On-premise deployment option",
        "SSO (SAML/OIDC)",
        "Advanced audit logs",
        "Custom SLA terms",
      ],
      additional: [
        "SAP connector",
        "Oracle ERP",
        "Microsoft Dynamics",
        "Custom APIs",
      ],
      cta: "Contact Sales",
      popular: true,
    },
    {
      name: "Enterprise Plus",
      price: "Volume",
      period: "Pricing",
      description: "For Global Deployments",
      features: [
        "Multi-region deployment",
        "Custom blockchain deployment",
        "White-label option",
        "Professional services included",
        "Training & onboarding",
        "Quarterly business reviews",
        "Priority feature requests",
        "Custom contractual terms",
      ],
      additional: [
        "Minimum commitment: €50K annually",
        "Dedicated solutions architect",
        "Custom integration support",
      ],
      cta: "Schedule Consultation",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Transparent Enterprise Pricing
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg border-2 p-8 ${
                plan.popular
                  ? "border-accent shadow-lg scale-105"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6 pb-6 border-b border-border">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  {plan.price === "Custom" || plan.price === "Volume" ? (
                    <div className="text-3xl font-bold text-foreground">
                      {plan.price}
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-muted-foreground">Starting at</span>
                      <span className="text-4xl font-bold text-foreground">
                        €{plan.price}
                      </span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <div className="text-sm font-semibold text-foreground mb-3">
                  Includes:
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Info */}
              {plan.additional.length > 0 && (
                <div className="mb-6 pb-6 border-t border-border pt-6">
                  <div className="text-sm font-semibold text-foreground mb-3">
                    {index === 0 ? "Additional:" : index === 1 ? "Integration:" : ""}
                  </div>
                  <ul className="space-y-2">
                    {plan.additional.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <Button
                variant="ghost"
                className={`w-full ${
                  plan.popular
                    ? "!bg-accent hover:!bg-accent/90 !text-white"
                    : "!bg-white border-2 border-accent !text-accent hover:!bg-accent hover:!text-white"
                }`}
                size="lg"
                asChild
              >
                <a href="#contact">
                  {plan.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Open Source / Community Banner */}
        <div className="bg-gradient-to-r from-secondary-50 to-accent-50 rounded-lg border-2 border-secondary p-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Prefer Self-Hosted? We're Open Source
                </h3>
                <p className="text-muted-foreground mb-4">
                  Deploy ProofPass on your own infrastructure. Full source code access,
                  complete control, and community support. Maintained by the commons, for the commons.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-secondary" />
                    AGPLv3 License
                  </span>
                  <span className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-secondary" />
                    All Core Features
                  </span>
                  <span className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-secondary" />
                    No Vendor Lock-in
                  </span>
                  <span className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-secondary" />
                    Community Support
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Button
                  size="lg"
                  className="!bg-secondary hover:!bg-secondary/90 !text-white shadow-lg"
                  asChild
                >
                  <a
                    href="https://github.com/PROOFPASS/ProofPassPlatform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Volume Discounts */}
        <div className="bg-muted rounded-lg border border-border p-8 text-center">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Volume Discounts Available
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
            <div>
              <span className="font-semibold text-foreground">
                &gt;50K attestations/month:
              </span>{" "}
              Contact us for custom pricing
            </div>
            <div>
              <span className="font-semibold text-foreground">
                Multi-year contracts:
              </span>{" "}
              Up to 20% discount
            </div>
            <div>
              <span className="font-semibold text-foreground">
                Non-profit/Education:
              </span>{" "}
              Special pricing available
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
