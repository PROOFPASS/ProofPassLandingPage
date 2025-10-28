import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "ProofPass - Digital Attestations for Supply Chain Compliance",
  description: "Enterprise-grade platform for creating cryptographically-signed proofs of business events. Enable instant verification across your supply chain. Built for regulated industries.",
  keywords: ["attestations", "blockchain", "compliance", "supply chain", "traceability", "zero-knowledge proofs", "enterprise", "B2B", "verification", "W3C credentials"],
  authors: [{ name: "ProofPass" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://proofpass.com",
    title: "ProofPass - Digital Attestations for Supply Chain Compliance",
    description: "Create cryptographically-signed proofs for any business event. Enable instant verification across your supply chain. Built for regulated industries.",
    siteName: "ProofPass",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProofPass - Digital Attestations for Supply Chain Compliance",
    description: "Enterprise-grade attestation platform. ISO 27001 certified. Open source. 99.9% SLA. Deploy in 5 days.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
