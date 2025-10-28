"use client"

import { ArrowRight, CheckCircle2, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EnterpriseCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary-light">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready for Enterprise Deployment?
          </h2>
          <p className="text-xl text-white/90">
            Schedule a technical consultation with our solutions architects.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg p-8 lg:p-12 shadow-xl mb-8">
          <form className="space-y-4 mb-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  placeholder="ACME Inc."
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Company Size *
                </label>
                <select className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent bg-white">
                  <option>1-50 employees</option>
                  <option>51-200 employees</option>
                  <option>201-1000 employees</option>
                  <option>1000+ employees</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Industry *
                </label>
                <select className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent bg-white">
                  <option>Manufacturing</option>
                  <option>Food & Agriculture</option>
                  <option>Pharmaceuticals</option>
                  <option>Logistics</option>
                  <option>Automotive</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent hover:bg-accent-600 text-white text-lg"
            >
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>

          {/* Benefits */}
          <div className="grid md:grid-cols-4 gap-4 pt-6 border-t border-border">
            {[
              "30-minute technical deep-dive",
              "Custom deployment plan",
              "ROI analysis",
              "Security & compliance review",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Alternative Contact */}
        <div className="text-center">
          <p className="text-white mb-4 font-semibold">Prefer to talk now?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>+1 (555) 123-4567</span>
            </a>
            <span className="text-white/60 hidden sm:inline">|</span>
            <a
              href="mailto:enterprise@proofpass.co"
              className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>enterprise@proofpass.co</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
