"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 lava-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-5xl md:text-6xl font-sans font-bold">
            Control the <span className="molten-text">Chaos</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">Bring Order to the Drive.</p>
          <Link href="/products">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-xl px-12 py-8 pulse-glow group"
            >
              Shop Now
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
