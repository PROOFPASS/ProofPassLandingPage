"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function SocialProof() {
  const testimonials = [
    {
      quote:
        "ProofPass reduced our audit preparation time from 3 weeks to 2 days. The ZK proofs let us prove compliance without exposing sensitive production data to competitors.",
      author: "Sarah Chen",
      role: "Head of Compliance",
      company: "GlobalManufacturing Corp",
      image: "👩‍💼",
      rating: 5,
    },
    {
      quote:
        "We needed EU Battery Passport compliance by 2027. ProofPass got us ready in 6 weeks, not 6 months. The cost savings compared to enterprise blockchain are incredible.",
      author: "Marcus Schmidt",
      role: "CTO",
      company: "EuroBattery GmbH",
      image: "👨‍💻",
      rating: 5,
    },
    {
      quote:
        "The 48-hour FDA traceability requirement seemed impossible until we found ProofPass. Now we can trace any product from farm to table in seconds with a single QR code.",
      author: "Jennifer Williams",
      role: "Supply Chain Director",
      company: "FreshFoods International",
      image: "👩‍🔬",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by{" "}
            <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how companies are using ProofPass to transform their supply chain compliance
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-foreground mb-6 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-primary font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Logo cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-gray-200"
        >
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by companies in manufacturing, food & agriculture, batteries, and pharma
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
            {["🏭", "🌾", "🔋", "💊", "🚗", "⚙️"].map((icon, i) => (
              <div
                key={i}
                className="text-5xl grayscale hover:grayscale-0 transition-all"
              >
                {icon}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
