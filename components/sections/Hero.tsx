"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Play, FileText } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Open Source & Trusted by regulated industries
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Verifiable Attestations.
              <br />
              <span className="text-primary">Protected Privacy.</span>
              <br />
              One Platform.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Create cryptographically-signed proofs for any business event. Prove
              compliance without revealing sensitive data. <strong className="text-foreground">Open source</strong> blockchain platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Play className="mr-2 h-4 w-4" />
                View Demo
              </Button>
              <Button size="lg" variant="ghost" className="group">
                <FileText className="mr-2 h-4 w-4" />
                Read Docs
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex items-center gap-8 justify-center lg:justify-start text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                100 free attestations
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border">
              <div className="space-y-4">
                {/* Flow diagram */}
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="bg-primary/10 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">📝</div>
                      <div className="text-sm font-medium">Event</div>
                    </div>
                  </div>
                  <div className="px-4">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-secondary/10 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">✓</div>
                      <div className="text-sm font-medium">Attestation</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <ArrowRight className="h-6 w-6 text-primary rotate-90" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="bg-accent/10 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">⛓</div>
                      <div className="text-sm font-medium">Blockchain</div>
                    </div>
                  </div>
                  <div className="px-4">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-primary/10 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🔍</div>
                      <div className="text-sm font-medium">Verification</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg"
              >
                0.001 EUR/attestation
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg"
              >
                ZK Proofs Ready
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
