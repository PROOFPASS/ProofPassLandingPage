"use client"

export function SocialProofEnterprise() {
  const metrics = [
    {
      value: "10,000+",
      label: "Attestations Created",
    },
    {
      value: "€0.001",
      label: "Cost per Attestation",
    },
    {
      value: "99.9%",
      label: "Uptime SLA",
    },
    {
      value: "5 days",
      label: "Average Deployment",
    },
  ]

  const testimonials = [
    {
      quote: "We went from panic about EU compliance to becoming the first battery manufacturer with full Digital Product Passports. ProofPass made it trivial.",
      author: "Chief Compliance Officer",
      company: "EuroPower Systems",
      industry: "EV Battery Manufacturing",
      initials: "EP",
      color: "bg-accent"
    },
    {
      quote: "During the last E. coli scare, we traced back the contaminated batch to the exact farm in under 1 minute. Saved us $1.8M in unnecessary product destruction.",
      author: "VP of Operations",
      company: "FreshTrack Organic Foods",
      industry: "Farm-to-Table Distribution",
      initials: "FT",
      color: "bg-secondary"
    },
    {
      quote: "We caught 3 counterfeit incidents in the first month that our old system missed. One batch contained only 40% of the active ingredient. ProofPass literally saved lives.",
      author: "Director of Quality Assurance",
      company: "MediChain Pharmaceuticals",
      industry: "Drug Manufacturing",
      initials: "MC",
      color: "bg-accent"
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

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-border p-6 hover:shadow-lg transition-shadow"
            >
              <blockquote className="text-sm text-foreground mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white font-semibold text-sm`}>
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.company}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.industry}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
