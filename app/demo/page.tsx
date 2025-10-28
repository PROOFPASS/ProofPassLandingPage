import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Calendar } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Demo - ProofPass",
  description: "See ProofPass in action with live demos and interactive examples.",
}

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              See ProofPass in Action
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience how ProofPass transforms supply chain verification with
              live demonstrations and interactive examples.
            </p>
          </div>

          {/* Demo Options */}
          <div className="space-y-8">
            {/* Video Demo */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Play className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Video Walkthrough</h2>
                  <p className="text-muted-foreground mb-4">
                    Watch a 5-minute overview of ProofPass features, from creating attestations
                    to generating zero-knowledge proofs.
                  </p>
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <Play className="h-16 w-16 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Demo video coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Demo */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-8 w-8 text-secondary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Schedule a Live Demo</h2>
                  <p className="text-muted-foreground mb-6">
                    Book a personalized demo with our team. We&apos;ll show you how ProofPass
                    solves your specific use case and answer all your questions.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>30-minute personalized session</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Live Q&A with our experts</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Custom use case examples</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button size="lg">
                      Schedule Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border-2 border-primary/20">
              <h2 className="text-2xl font-bold mb-2 text-center">
                Try It Yourself
              </h2>
              <p className="text-muted-foreground text-center mb-6">
                Start your free trial and explore ProofPass with 100 free attestations
              </p>
              <div className="flex justify-center">
                <Button size="lg" className="px-8">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
