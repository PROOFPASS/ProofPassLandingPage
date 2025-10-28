"use client"

import { useState } from "react"
import { HeaderEnterprise } from "@/components/shared/HeaderEnterprise"
import { FooterEnterprise } from "@/components/shared/FooterEnterprise"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Copy, Check, Terminal, Code2, Zap, Shield, FileText } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const codeExamples = {
    quickStart: `npm install @proofpass/sdk

import { ProofPass } from '@proofpass/sdk'

// Initialize client
const proofpass = new ProofPass({
  apiKey: 'YOUR_API_KEY'
})

// Create an attestation
const attestation = await proofpass.attestations.create({
  type: 'quality_check',
  data: {
    productId: 'BAT-2024-001',
    result: 'PASSED',
    inspector: 'John Doe',
    timestamp: new Date().toISOString()
  }
})

console.log('Attestation created:', attestation.id)`,

    createAttestation: `// POST /v1/attestations
const response = await fetch('https://api.proofpass.com/v1/attestations', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    type: 'shipment',
    data: {
      productId: 'PROD-123',
      origin: 'Factory A',
      destination: 'Warehouse B',
      timestamp: '2024-10-28T10:00:00Z'
    }
  })
})

const attestation = await response.json()
// Returns: { id, type, data, signature, blockchain_tx }`,

    verifyAttestation: `// GET /v1/attestations/:id/verify
const response = await fetch('https://api.proofpass.com/v1/attestations/att_abc123/verify', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})

const verification = await response.json()
console.log('Valid:', verification.valid)
console.log('Blockchain confirmed:', verification.blockchain_confirmed)`,

    zkProof: `// Create Zero-Knowledge Proof
const zkProof = await proofpass.zkproofs.create({
  type: 'range_proof',
  claim: 'carbon_footprint_below_threshold',
  privateData: {
    actualValue: 3.2,  // This stays private
    threshold: 5.0     // Prove: actualValue < threshold
  }
})

// Verifier can confirm the claim without seeing actualValue
const isValid = await proofpass.zkproofs.verify(zkProof.id)
console.log('Claim verified:', isValid)  // true, but 3.2 remains secret`,

    productPassport: `// Create Product Passport with multiple attestations
const passport = await proofpass.passports.create({
  productId: 'BATTERY-EV-2024-001',
  attestations: [
    'att_mining_001',    // Mining attestation
    'att_refining_002',  // Refining attestation
    'att_assembly_003'   // Assembly attestation
  ],
  metadata: {
    manufacturer: 'EuroPower Systems',
    model: 'EV-500',
    serialNumber: 'EP-2024-12345'
  }
})

// Generate QR code for product
const qrCode = await passport.generateQRCode()
console.log('Passport URL:', passport.publicUrl)`,

    pythonExample: `from proofpass import ProofPass

# Initialize
client = ProofPass(api_key='YOUR_API_KEY')

# Create attestation
attestation = client.attestations.create(
    type='temperature_log',
    data={
        'productId': 'FOOD-123',
        'temperature': 4.2,
        'location': 'Truck-442',
        'timestamp': '2024-10-28T10:00:00Z'
    }
)

print(f'Attestation ID: {attestation.id}')`,

    goExample: `package main

import (
    "github.com/proofpass/proofpass-go"
)

func main() {
    client := proofpass.NewClient("YOUR_API_KEY")

    attestation, err := client.Attestations.Create(&proofpass.AttestationRequest{
        Type: "inspection",
        Data: map[string]interface{}{
            "productId": "PHARMA-456",
            "result": "PASSED",
            "inspector": "Jane Smith",
        },
    })

    if err != nil {
        panic(err)
    }

    fmt.Printf("Attestation: %s\\n", attestation.ID)
}`,

    webhooks: `// Configure webhook to receive events
const webhook = await proofpass.webhooks.create({
  url: 'https://your-api.com/webhooks/proofpass',
  events: ['attestation.created', 'attestation.verified']
})

// Your webhook endpoint receives:
// POST /webhooks/proofpass
{
  "event": "attestation.created",
  "data": {
    "id": "att_abc123",
    "type": "quality_check",
    "created_at": "2024-10-28T10:00:00Z"
  }
}`
  }

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
              Developer Documentation
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete API reference, SDKs, and integration examples to get started with ProofPass
            </p>
          </div>

          {/* Quick Start */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">Quick Start</h2>
                <p className="text-muted-foreground">Get up and running in 5 minutes</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border-2 border-border p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-accent" />
                  <span className="font-semibold text-foreground">Installation & Basic Usage</span>
                </div>
                <button
                  onClick={() => copyToClipboard(codeExamples.quickStart, 'quickStart')}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  {copiedCode === 'quickStart' ? (
                    <Check className="h-5 w-5 text-secondary" />
                  ) : (
                    <Copy className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
              </div>
              <pre className="bg-primary/5 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm text-foreground font-mono">{codeExamples.quickStart}</code>
              </pre>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg border border-border p-4">
                <div className="text-2xl font-bold text-accent mb-2">1.</div>
                <h3 className="font-semibold text-foreground mb-2">Get API Key</h3>
                <p className="text-sm text-muted-foreground">Sign up and get your API key from the dashboard</p>
              </div>
              <div className="bg-white rounded-lg border border-border p-4">
                <div className="text-2xl font-bold text-accent mb-2">2.</div>
                <h3 className="font-semibold text-foreground mb-2">Install SDK</h3>
                <p className="text-sm text-muted-foreground">Install the SDK for your language (JS/Python/Go)</p>
              </div>
              <div className="bg-white rounded-lg border border-border p-4">
                <div className="text-2xl font-bold text-accent mb-2">3.</div>
                <h3 className="font-semibold text-foreground mb-2">Create Attestation</h3>
                <p className="text-sm text-muted-foreground">Start creating verifiable attestations</p>
              </div>
            </div>
          </section>

          {/* API Reference */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Code2 className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">API Reference</h2>
                <p className="text-muted-foreground">RESTful API endpoints</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Create Attestation */}
              <div className="bg-white rounded-lg border-2 border-border p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-semibold rounded">POST</span>
                      <code className="text-foreground font-mono">/v1/attestations</code>
                    </div>
                    <p className="text-muted-foreground">Create a new attestation</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(codeExamples.createAttestation, 'create')}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    {copiedCode === 'create' ? (
                      <Check className="h-5 w-5 text-secondary" />
                    ) : (
                      <Copy className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                </div>
                <pre className="bg-primary/5 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm text-foreground font-mono">{codeExamples.createAttestation}</code>
                </pre>
              </div>

              {/* Verify Attestation */}
              <div className="bg-white rounded-lg border-2 border-border p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded">GET</span>
                      <code className="text-foreground font-mono">/v1/attestations/:id/verify</code>
                    </div>
                    <p className="text-muted-foreground">Verify an attestation</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(codeExamples.verifyAttestation, 'verify')}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    {copiedCode === 'verify' ? (
                      <Check className="h-5 w-5 text-secondary" />
                    ) : (
                      <Copy className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                </div>
                <pre className="bg-primary/5 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm text-foreground font-mono">{codeExamples.verifyAttestation}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Advanced Features */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">Advanced Features</h2>
                <p className="text-muted-foreground">Zero-Knowledge Proofs & Product Passports</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* ZK Proofs */}
              <div className="bg-white rounded-lg border-2 border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-foreground">Zero-Knowledge Proofs</h3>
                  <button
                    onClick={() => copyToClipboard(codeExamples.zkProof, 'zk')}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    {copiedCode === 'zk' ? (
                      <Check className="h-5 w-5 text-secondary" />
                    ) : (
                      <Copy className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Prove claims without revealing underlying data
                </p>
                <pre className="bg-primary/5 p-4 rounded-lg overflow-x-auto">
                  <code className="text-xs text-foreground font-mono">{codeExamples.zkProof}</code>
                </pre>
              </div>

              {/* Product Passports */}
              <div className="bg-white rounded-lg border-2 border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-foreground">Product Passports</h3>
                  <button
                    onClick={() => copyToClipboard(codeExamples.productPassport, 'passport')}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    {copiedCode === 'passport' ? (
                      <Check className="h-5 w-5 text-secondary" />
                    ) : (
                      <Copy className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Aggregate multiple attestations into a digital passport
                </p>
                <pre className="bg-primary/5 p-4 rounded-lg overflow-x-auto">
                  <code className="text-xs text-foreground font-mono">{codeExamples.productPassport}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* SDKs */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <FileText className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">SDKs & Libraries</h2>
                <p className="text-muted-foreground">Official client libraries</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Python */}
              <div className="bg-white rounded-lg border-2 border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-foreground">Python</h3>
                  <button
                    onClick={() => copyToClipboard(codeExamples.pythonExample, 'python')}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    {copiedCode === 'python' ? (
                      <Check className="h-5 w-5 text-secondary" />
                    ) : (
                      <Copy className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                </div>
                <pre className="bg-primary/5 p-4 rounded-lg overflow-x-auto mb-4">
                  <code className="text-xs text-foreground font-mono">{codeExamples.pythonExample}</code>
                </pre>
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <a href="https://github.com/PROOFPASS/ProofPassPlatform" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </Button>
              </div>

              {/* Go */}
              <div className="bg-white rounded-lg border-2 border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-foreground">Go</h3>
                  <button
                    onClick={() => copyToClipboard(codeExamples.goExample, 'go')}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    {copiedCode === 'go' ? (
                      <Check className="h-5 w-5 text-secondary" />
                    ) : (
                      <Copy className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                </div>
                <pre className="bg-primary/5 p-4 rounded-lg overflow-x-auto mb-4">
                  <code className="text-xs text-foreground font-mono">{codeExamples.goExample}</code>
                </pre>
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <a href="https://github.com/PROOFPASS/ProofPassPlatform" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </Button>
              </div>

              {/* Webhooks */}
              <div className="bg-white rounded-lg border-2 border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-foreground">Webhooks</h3>
                  <button
                    onClick={() => copyToClipboard(codeExamples.webhooks, 'webhooks')}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    {copiedCode === 'webhooks' ? (
                      <Check className="h-5 w-5 text-secondary" />
                    ) : (
                      <Copy className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                </div>
                <pre className="bg-primary/5 p-4 rounded-lg overflow-x-auto mb-4">
                  <code className="text-xs text-foreground font-mono">{codeExamples.webhooks}</code>
                </pre>
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <a href="/#contact">Configure Webhooks</a>
                </Button>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-accent to-accent-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">Ready to Integrate?</h3>
            <p className="mb-6 text-white/90">
              Get your API key and start building with ProofPass today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white text-accent hover:bg-white/90" asChild>
                <a href="/#contact">Get API Access</a>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
                <a href="/#contact">Talk to Solutions Team</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <FooterEnterprise />
    </main>
  )
}
