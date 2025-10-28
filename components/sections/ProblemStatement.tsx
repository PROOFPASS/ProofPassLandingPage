"use client"

import { AlertCircle, TrendingUp, Shield, ArrowRight } from "lucide-react"

export function ProblemStatement() {
  const complianceData = [
    {
      industry: "Food & Agriculture",
      complianceCost: "$50K-200K",
      fraudPerYear: "$12B EUR",
    },
    {
      industry: "Battery/EV",
      complianceCost: "$100K-500K",
      fraudPerYear: "$8B EUR",
    },
    {
      industry: "Pharmaceuticals",
      complianceCost: "$200K-1M",
      fraudPerYear: "$15B EUR",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Supply Chain Compliance Without{" "}
            <span className="text-accent">Compromising Data Security</span>
          </h2>
        </div>

        {/* Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Challenges */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-error/10 flex items-center justify-center">
                  <AlertCircle className="h-5 w-5 text-error" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Regulatory Requirements Intensifying
                </h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                  <span>EU Battery Passport (Feb 2027)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                  <span>FDA 48-hour traceability</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                  <span>ESG disclosure mandates</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                  <span>Penalties: Market exclusion, revenue fines</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-warning" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Manual Processes Don&apos;t Scale
                </h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                  <span>50K-200K EUR annual audit costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                  <span>Weeks to prepare documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                  <span>High error rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                  <span>Fragmented data systems</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Competitive Data at Risk
                </h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                  <span>Must prove compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                  <span>Cannot reveal exact figures to competitors</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                  <span>Need to protect IP</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                  <span>Privacy regulations (GDPR)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Impact Table */}
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Industry Impact
              </h3>
              <p className="text-muted-foreground">
                Annual costs and fraud losses by industry
              </p>
            </div>

            <div className="bg-white rounded-lg border-2 border-border overflow-hidden shadow-sm">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Industry
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Compliance Cost
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Fraud/Year
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {complianceData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-muted transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-foreground">
                        {row.industry}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {row.complianceCost}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-error">
                        {row.fraudPerYear}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Additional context */}
            <div className="mt-8 p-6 bg-accent/5 border border-accent/20 rounded-lg">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-semibold">The Challenge:</span> Organizations
                need to prove regulatory compliance without exposing sensitive
                competitive data. Traditional systems force you to choose between
                transparency and security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
