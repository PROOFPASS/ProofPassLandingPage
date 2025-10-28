import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "ProofPass - Como DocuSign para tu Supply Chain",
  description: "Crea pruebas digitales verificables de cualquier evento de negocio. Sin blockchain expertise. Sin vendor lock-in. Open source.",
  keywords: ["attestations", "blockchain", "compliance", "supply chain", "trazabilidad", "zero-knowledge proofs", "verificación digital"],
  authors: [{ name: "ProofPass" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://proofpass.com",
    title: "ProofPass - Como DocuSign para tu Supply Chain",
    description: "Crea pruebas digitales verificables de cualquier evento de negocio. Tus clientes y partners pueden verificar al instante.",
    siteName: "ProofPass",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProofPass - Como DocuSign para tu Supply Chain",
    description: "Crea pruebas digitales verificables. Sin blockchain expertise. Open source.",
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
