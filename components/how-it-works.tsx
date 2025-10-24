"use client"

import { ShoppingCart, Wrench, Car } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: ShoppingCart,
    title: "Choose",
    description: "Browse our collection and select the perfect organizer for your vehicle",
  },
  {
    number: "2",
    icon: Wrench,
    title: "Customize",
    description: "Pick your preferred size, color, and configuration options",
  },
  {
    number: "3",
    icon: Car,
    title: "Drive",
    description: "Install in minutes and experience the power of perfect organization",
  },
]

export function HowItWorks() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-4">
            3 Steps to <span className="molten-text">Order</span>
          </h2>
          <p className="text-lg text-muted-foreground">Simple, fast, and built for your convenience</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 glow-hover text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 border-2 border-primary rounded-full mb-6 pulse-glow">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-4xl font-sans font-bold text-primary mb-2">{step.number}</div>
                  <h3 className="text-2xl font-sans font-bold mb-4 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
