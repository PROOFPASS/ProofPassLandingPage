"use client"

import { Github, Linkedin, Twitter, FileText } from "lucide-react"

export function FooterEnterprise() {
  const footerLinks = {
    platform: [
      { name: "Attestations", href: "#platform" },
      { name: "Product Passports", href: "#platform" },
      { name: "Zero-Knowledge Proofs", href: "#platform" },
      { name: "Security & Compliance", href: "#security" },
      { name: "Quick Start Guide", href: "https://github.com/PROOFPASS/ProofPassPlatform/blob/main/docs/guides/QUICK_START.md" },
      { name: "API Documentation", href: "/docs" },
      { name: "Demo Client", href: "https://github.com/PROOFPASS/ProofPassPlatform/tree/main/examples/demo-client" },
      { name: "Architecture Docs", href: "https://github.com/PROOFPASS/ProofPassPlatform/blob/main/docs/architecture/TECHNICAL_ARCHITECTURE.md" },
    ],
    solutions: [
      { name: "Manufacturing", href: "#solutions" },
      { name: "Food & Agriculture", href: "#solutions" },
      { name: "Pharmaceuticals", href: "#solutions" },
      { name: "Logistics", href: "#solutions" },
      { name: "Automotive", href: "#solutions" },
      { name: "Energy", href: "#solutions" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Customers", href: "#solutions" },
      { name: "Partners", href: "#contact" },
      { name: "Careers", href: "#" },
      { name: "Press Kit", href: "#" },
      { name: "Contact Sales", href: "#contact" },
      { name: "Support Portal", href: "#contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "SLA", href: "#pricing" },
      { name: "Security", href: "#security" },
      { name: "Cookie Policy", href: "#" },
      { name: "DPA (Data Processing)", href: "#" },
      { name: "Subprocessors", href: "#" },
    ],
  }

  return (
    <footer className="bg-primary text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 pb-12 border-b border-white/10">
          {/* Platform */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">
              Platform
            </h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">
              Solutions
            </h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">
              Legal
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-white/70">
            <p className="mb-2">
              © 2025 ProofPass Inc. All rights reserved.
            </p>
            <p className="text-xs">
              ISO 27001 Certified | GDPR Compliant | Open Source
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/company/proofpass"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/proofpass"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/PROOFPASS/ProofPassPlatform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="/docs"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Documentation"
            >
              <FileText className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
