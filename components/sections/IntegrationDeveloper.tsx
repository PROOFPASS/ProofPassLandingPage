"use client"

import { Code } from "lucide-react"

export function IntegrationDeveloper() {
  const codeExampleKey = `// Self-contained DID with did:key
import { VCToolkit } from '@proofpass/vc-toolkit';

const toolkit = new VCToolkit({
  apiKey: process.env.PROOFPASS_API_KEY,
  didMethod: 'did:key', // Self-contained, no external dependencies
  environment: 'production'
});

// Create W3C Verifiable Credential
const credential = await toolkit.createCredential({
  subject: 'Battery-Serial-12345',
  type: 'QualityTest',
  claims: {
    voltage: 3.7,
    capacity: 5000,
    cycleCount: 1000
  },
  blockchain: 'arbitrum' // or 'optimism', 'stellar'
});

console.log(credential.did);
// did:key:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH`

  const codeExampleWeb = `// Domain-based DID with did:web
import { VCToolkit } from '@proofpass/vc-toolkit';

const toolkit = new VCToolkit({
  apiKey: process.env.PROOFPASS_API_KEY,
  didMethod: 'did:web', // Domain-based for organizations
  didDomain: 'acme-corp.com', // Your organization domain
  environment: 'production'
});

// Create credential with organizational DID
const credential = await toolkit.createCredential({
  subject: 'Product-ABC-789',
  type: 'Certificate',
  claims: {
    certifiedBy: 'ACME Corp',
    standard: 'ISO 9001:2015'
  }
});

console.log(credential.issuerDID);
// did:web:acme-corp.com`

  const features = [
    {
      title: "Tech Stack",
      items: ["Fastify API", "Next.js 15.5.6", "React 19.2.0", "PostgreSQL + Redis", "TypeScript strict mode"],
    },
    {
      title: "Monorepo Packages",
      items: ["@proofpass/vc-toolkit", "@proofpass/zk-toolkit", "@proofpass/blockchain", "@proofpass/client", "@proofpass/templates"],
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
        "Free: 100 req/h",
        "Pro: 1K req/h",
        "Enterprise: 10K req/h",
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

        {/* Code Example - did:key */}
        <div className="mb-12">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-foreground mb-2">
              API Example - Self-Contained DID (did:key)
            </h3>
            <p className="text-muted-foreground">
              Create W3C Verifiable Credentials with just a few lines of code
            </p>
          </div>
          <div className="bg-primary rounded-lg overflow-hidden border border-border">
            <div className="bg-primary-light px-4 py-2 border-b border-primary-600 flex items-center gap-2">
              <Code className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground font-mono">
                did-key-example.ts
              </span>
            </div>
            <pre className="p-6 text-sm overflow-x-auto">
              <code className="text-white font-mono">{codeExampleKey}</code>
            </pre>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
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
    </section>
  )
}
