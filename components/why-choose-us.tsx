"use client"

import { Settings, Car, Flame } from "lucide-react"

const features = [
  {
    icon: Settings,
    title: "Durability",
    description: "Built with premium materials that withstand daily use and extreme conditions",
  },
  {
    icon: Car,
    title: "Smart Fit",
    description: "Designed to fit perfectly in any vehicle, from sedans to SUVs",
  },
  {
    icon: Flame,
    title: "Energy Design",
    description: "Aesthetics that match your drive—sleek, powerful, and purposeful",
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-4">
            Built for <span className="molten-text">Motion</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three core principles drive everything we create
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="relative p-8 bg-card/50 backdrop-blur-sm border border-border rounded-lg glow-hover h-full">
                <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg border border-primary/20 pulse-glow">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-sans font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
