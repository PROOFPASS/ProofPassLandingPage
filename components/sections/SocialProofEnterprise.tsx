"use client"

export function SocialProofEnterprise() {
  const metrics = [
    {
      value: "10,000+",
      label: "Attestations Created",
    },
    {
      value: "<$0.001",
      label: "Cost per Attestation",
    },
    {
      value: "99.9%",
      label: "Uptime SLA",
    },
    {
      value: "2 weeks",
      label: "Average Deployment",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        {/* Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-lg border border-border p-8 lg:p-12 max-w-4xl mx-auto">
          <blockquote className="text-lg lg:text-xl text-foreground mb-6 leading-relaxed">
            &ldquo;ProofPass enables our battery division to meet EU compliance
            requirements while protecting proprietary manufacturing data.&rdquo;
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-semibold">
              JD
            </div>
            <div>
              <div className="font-semibold text-foreground">
                Chief Compliance Officer
              </div>
              <div className="text-sm text-muted-foreground">
                Fortune 500 Automotive Manufacturer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
