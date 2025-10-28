import { HeaderEnterprise } from "@/components/shared/HeaderEnterprise"
import { FooterEnterprise } from "@/components/shared/FooterEnterprise"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Code, FileText, Zap } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Documentation - ProofPass",
  description: "Complete documentation for ProofPass attestations, product passports, and zero-knowledge proofs.",
}

export default function DocsPage() {
  const docSections = [
    {
      icon: Zap,
      title: "Quick Start",
      description: "Get started with ProofPass in 5 minutes",
      items: ["Create your first attestation", "Verify credentials", "Generate ZK proofs"],
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Complete API documentation",
      items: ["REST API endpoints", "Authentication", "Rate limits"],
    },
    {
      icon: FileText,
      title: "Use Cases",
      description: "Industry-specific implementation guides",
      items: ["Battery Passport", "Food Traceability", "Manufacturing Quality"],
    },
    {
      icon: BookOpen,
      title: "SDKs & Libraries",
      description: "Client libraries for popular languages",
      items: ["JavaScript/TypeScript", "Python", "Go"],
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <HeaderEnterprise />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <Link href="/" className="inline-flex items-center gap-2 text-accent hover:text-accent-600 font-medium transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Documentation
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to integrate ProofPass into your supply chain.
              API references, guides, and examples.
            </p>
          </div>

          {/* Coming Soon Notice */}
          <div className="bg-accent/10 border-2 border-accent rounded-2xl p-8 mb-16 text-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Documentation Coming Soon
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We&apos;re working hard on comprehensive documentation. In the meantime,
              check out the sections below or contact our team for early access.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent-600 text-white" asChild>
              <a href="/#contact">Request Early Access</a>
            </Button>
          </div>

          {/* Doc Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            {docSections.map((section) => {
              const Icon = section.icon
              return (
                <Card key={section.title} className="hover:shadow-lg transition-shadow border-2 border-border">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle>{section.title}</CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {section.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-accent to-accent-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">Need Help Getting Started?</h3>
            <p className="mb-6 text-white/90">
              Our team is here to help you integrate ProofPass into your workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white text-accent hover:bg-white/90" asChild>
                <a href="/#contact">Contact Support</a>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
                <a href="/#contact">Schedule Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <FooterEnterprise />
    </main>
  )
}
