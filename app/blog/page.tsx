import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Blog - ProofPass",
  description: "Latest news, updates, and insights about verifiable attestations and zero-knowledge proofs.",
}

export default function BlogPage() {
  // Placeholder blog posts
  const posts = [
    {
      title: "Understanding EU Battery Passport Requirements for 2027",
      excerpt: "A comprehensive guide to upcoming EU regulations and how ProofPass helps you stay compliant.",
      date: "2025-10-15",
      readTime: "8 min read",
      category: "Compliance",
    },
    {
      title: "Zero-Knowledge Proofs Explained: Privacy Meets Transparency",
      excerpt: "Learn how ZK proofs allow you to prove claims without revealing sensitive business data.",
      date: "2025-10-10",
      readTime: "6 min read",
      category: "Technology",
    },
    {
      title: "Food Traceability in 48 Hours: Meeting FDA Requirements",
      excerpt: "How modern supply chains can achieve rapid traceability with blockchain attestations.",
      date: "2025-10-05",
      readTime: "5 min read",
      category: "Use Cases",
    },
  ]

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
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              ProofPass Blog
            </h1>
            <p className="text-lg text-muted-foreground">
              Insights on supply chain verification, compliance, and blockchain technology.
            </p>
          </div>

          {/* Coming Soon Notice */}
          <div className="bg-primary/10 border-2 border-primary rounded-2xl p-8 mb-12 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Blog Coming Soon
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We&apos;re preparing in-depth articles about compliance, technology, and use cases.
              Subscribe to our newsletter to be notified when we launch.
            </p>
          </div>

          {/* Placeholder Posts */}
          <div className="space-y-6">
            {posts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <button className="text-primary font-medium hover:underline">
                    Read more →
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
