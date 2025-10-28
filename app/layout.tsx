import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "ProofPass - Verifiable Attestations for Regulated Industries",
  description: "Create cryptographically-signed proofs for any business event. Prove compliance without revealing sensitive data. Built on Stellar and Optimism.",
  keywords: ["attestations", "blockchain", "compliance", "supply chain", "traceability", "zero-knowledge proofs", "verifiable credentials"],
  authors: [{ name: "ProofPass" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://proofpass.com",
    title: "ProofPass - Verifiable Attestations for Regulated Industries",
    description: "Create cryptographically-signed proofs for any business event. Prove compliance without revealing sensitive data.",
    siteName: "ProofPass",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProofPass - Verifiable Attestations for Regulated Industries",
    description: "Create cryptographically-signed proofs for any business event. Prove compliance without revealing sensitive data.",
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
