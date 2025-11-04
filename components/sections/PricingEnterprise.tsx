"use client"

import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingEnterprise() {
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "/month",
      description: "For Developers & Community",
      features: [
        "100 VCs/month",
        "10K API requests/month",
        "100 requests/hour",
        "W3C Verifiable Credentials",
        "did:key & did:web support",
        "Community support",
        "Open source access",
        "Basic documentation",
      ],
      additional: [
        "Perfect for prototyping",
        "No credit card required",
        "Upgrade anytime",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "199",
      period: "/month",
      description: "For Growing Teams",
      features: [
        "5,000 VCs/month",
        "200K API requests/month",
        "1K requests/hour",
        "Zero-knowledge proofs",
        "Product Passports",
        "Priority email support",
        "Advanced analytics",
        "Custom templates",
        "Webhook integrations",
        "99.5% SLA",
      ],
      additional: [
        "Storage: 100GB included",
        "€0.02/VC overage",
        "€0.10/ZK proof overage",
      ],
      cta: "Request Demo",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Pricing",
      description: "For Large Organizations",
      features: [
        "50K VCs/month",
        "2M API requests/month",
        "10K requests/hour",
        "Unlimited ZK proofs",
        "Custom proof circuits",
        "99.9% uptime SLA",
        "24/7 phone support",
        "Dedicated account manager",
        "On-premise deployment option",
        "SSO (SAML/OIDC)",
        "Advanced audit logs",
      ],
      additional: [
        "SAP/Oracle/Dynamics connectors",
        "Custom APIs",
        "Multi-region deployment",
        "White-label option",
      ],
      cta: "Request Demo",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Enterprise Pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Fully managed infrastructure for your organization
          </p>
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
                <a href={plan.name === "Free" ? "https://github.com/PROOFPASS/ProofPassPlatform" : "#contact"} target={plan.name === "Free" ? "_blank" : undefined} rel={plan.name === "Free" ? "noopener noreferrer" : undefined}>
                  {plan.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Volume Discounts */}
        <div className="bg-muted rounded-lg border border-border p-8 text-center mb-12">
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

        {/* Community Edition - Bottom */}
        <div className="bg-muted/50 rounded-lg border border-border p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold mb-2">
                  Open Source
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Community Edition
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Self-host ProofPass on your own infrastructure. Full source code access with AGPLv3 license.
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    Deploy on your infrastructure
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    All core features
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    Community support
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    No vendor lock-in
                  </li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <Button
                  variant="outline"
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white"
                  asChild
                >
                  <a
                    href="https://github.com/PROOFPASS/ProofPassPlatform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
