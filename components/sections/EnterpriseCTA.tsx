"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, Phone, Mail, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EnterpriseCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const formData = new FormData(e.currentTarget)

    console.log("Form data:", Object.fromEntries(formData))

    // Send to Web3Forms
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()
      console.log("Web3Forms response:", data)

      if (data.success) {
        setSubmitStatus("success")
        e.currentTarget.reset()
      } else {
        console.error("Web3Forms error:", data.message)
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary-light scroll-mt-16">
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
          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            {/* Web3Forms Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="397a2065-5ecd-4a98-a2ff-7bbda99b7ecc"
            />
            <input type="hidden" name="subject" value="ProofPass Demo Request" />
            <input type="checkbox" name="botcheck" style={{display: "none"}} tabIndex={-1} />

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="ACME Inc."
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Company Size *
                </label>
                <select
                  name="company_size"
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent bg-white"
                  required
                  disabled={isSubmitting}
                >
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
                <select
                  name="industry"
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent bg-white"
                  required
                  disabled={isSubmitting}
                >
                  <option>Manufacturing</option>
                  <option>Food & Agriculture</option>
                  <option>Pharmaceuticals</option>
                  <option>Logistics</option>
                  <option>Automotive</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Success/Error Messages */}
            {submitStatus === "success" && (
              <div className="bg-secondary-50 border border-secondary text-secondary-600 px-4 py-3 rounded-lg">
                ✓ Thank you! We&apos;ll contact you within 24 hours to schedule your demo.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="bg-error/10 border border-error text-error px-4 py-3 rounded-lg">
                ✗ Something went wrong. Please try again or contact us directly.
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent hover:bg-accent-600 text-white text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
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
