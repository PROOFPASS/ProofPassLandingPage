"use client"

import { Check, Zap, Globe, DollarSign } from "lucide-react"

export function BlockchainNetworks() {
  const networks = [
    {
      blockchain: "Stellar",
      networks: ["Testnet", "Mainnet"],
      type: "Layer 0",
      costPerTx: "~$0.00001",
      useCase: "High-volume, low-cost anchoring",
      icon: "⭐",
      color: "bg-purple-100 text-purple-700 border-purple-300",
    },
    {
      blockchain: "Optimism",
      networks: ["Mainnet", "Sepolia"],
      type: "Ethereum L2",
      costPerTx: "~$0.001-$0.01",
      useCase: "OP Stack ecosystem integration",
      icon: "🔴",
      color: "bg-red-100 text-red-700 border-red-300",
    },
    {
      blockchain: "Arbitrum",
      networks: ["Mainnet (One)", "Sepolia"],
      type: "Ethereum L2",
      costPerTx: "~$0.0001-$0.001",
      useCase: "Best balance cost/performance",
      icon: "🔵",
      color: "bg-blue-100 text-blue-700 border-blue-300",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            <Globe className="h-4 w-4" />
            Multi-Blockchain Support
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            3 Blockchains
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Anchor your credentials on 3 major blockchains for immutable verification.
            Choose the network that fits your budget and performance needs.
          </p>
        </div>

        {/* Networks Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {networks.map((network, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border-2 border-border p-8 hover:border-accent transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon & Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">{network.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {network.blockchain}
                  </h3>
                  <p className="text-sm text-muted-foreground">{network.type}</p>
                </div>
              </div>

              {/* Networks Available */}
              <div className="mb-4">
                <div className="text-sm font-semibold text-foreground mb-2">
                  Networks:
                </div>
                <div className="flex flex-wrap gap-2">
                  {network.networks.map((net, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${network.color}`}
                    >
                      {net}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cost */}
              <div className="mb-4 pb-4 border-b border-border">
                <div className="flex items-center gap-2 mb-1">
                  <DollarSign className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-semibold text-foreground">
                    Cost per Transaction:
                  </span>
                </div>
                <div className="text-2xl font-bold text-accent">
                  {network.costPerTx}
                </div>
              </div>

              {/* Use Case */}
              <div className="mb-4">
                <div className="flex items-start gap-2">
                  <Zap className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-1">
                      Best For:
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {network.useCase}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white rounded-lg border border-border p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Network-Agnostic API
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-foreground mb-1">
                  Unified API
                </div>
                <p className="text-sm text-muted-foreground">
                  Same API for all networks
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-foreground mb-1">
                  Automatic Failover
                </div>
                <p className="text-sm text-muted-foreground">
                  Switch networks seamlessly
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-foreground mb-1">
                  Cost Optimization
                </div>
                <p className="text-sm text-muted-foreground">
                  Auto-select cheapest option
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-foreground mb-1">
                  Real-time Status
                </div>
                <p className="text-sm text-muted-foreground">
                  Monitor all transactions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="mt-8 bg-primary rounded-lg overflow-hidden border border-border">
          <div className="bg-primary-light px-4 py-2 border-b border-primary-600 flex items-center gap-2">
            <span className="text-sm text-muted-foreground font-mono">
              blockchain-example.ts
            </span>
          </div>
          <pre className="p-6 text-sm overflow-x-auto">
            <code className="text-white font-mono">{`// Anchor on Stellar (default - ultra-low cost)
await client.blockchain.anchor({
  data: 'credential-hash'
});

// Anchor on Optimism (OP Stack ecosystem)
await client.blockchain.anchor({
  data: 'credential-hash',
  network: 'optimism'
});

// Anchor on Arbitrum (best cost/performance)
await client.blockchain.anchor({
  data: 'credential-hash',
  network: 'arbitrum'
});`}</code>
          </pre>
        </div>
      </div>
    </section>
  )
}
