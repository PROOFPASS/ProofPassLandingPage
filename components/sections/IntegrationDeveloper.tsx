"use client"

import { Code } from "lucide-react"

export function IntegrationDeveloper() {
  const codeExample = `// Install SDK
npm install @proofpass/sdk

// Initialize client
import { ProofPass } from '@proofpass/sdk';

const client = new ProofPass({
  apiKey: process.env.PROOFPASS_API_KEY,
  environment: 'production'
});

// Create attestation
const attestation = await client.attestations.create({
  subject: 'Battery-Serial-12345',
  type: 'QualityTest',
  claims: {
    voltage: 3.7,
    capacity: 5000,
    cycleCount: 1000,
    inspector: 'John Smith',
    facility: 'Plant-A'
  },
  blockchain: 'stellar' // or 'optimism'
});

console.log(attestation.qrCode);
// https://verify.proofpass.co/att_abc123

console.log(attestation.blockchainTx);
// stellar:ABC123DEF456...`

  const features = [
    {
      title: "SDKs",
      items: ["Python 3.8+", "Node.js 18+", "Java 11+", "PHP 8.1+", ".NET 6.0+"],
    },
    {
      title: "Authentication",
      items: ["API keys", "OAuth 2.0", "JWT tokens", "Mutual TLS"],
    },
    {
      title: "Webhooks",
      items: [
        "attestation.created",
        "attestation.verified",
        "passport.created",
        "zkproof.generated",
        "blockchain.confirmed",
      ],
    },
    {
      title: "Rate Limits",
      items: [
        "Professional: 100 req/sec",
        "Enterprise: 500 req/sec",
        "Enterprise Plus: Custom",
      ],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Developer-First Platform
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Code Example */}
          <div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-foreground mb-2">
                API Example
              </h3>
              <p className="text-muted-foreground">
                Create attestations with just a few lines of code
              </p>
            </div>
            <div className="bg-primary rounded-lg overflow-hidden border border-border">
              <div className="bg-primary-light px-4 py-2 border-b border-primary-600 flex items-center gap-2">
                <Code className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground font-mono">
                  example.ts
                </span>
              </div>
              <pre className="p-6 text-sm overflow-x-auto">
                <code className="text-white font-mono">{codeExample}</code>
              </pre>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-muted rounded-lg border border-border p-6"
              >
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {feature.title}:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {feature.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white border border-border rounded text-sm text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
