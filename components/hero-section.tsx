"use client"

import { Button } from "@/components/ui/button"
import { Flame, Settings } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Lava Background */}
      <div className="absolute inset-0 lava-bg opacity-40" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold leading-tight">
            <span className="molten-text">Organize the Heat.</span>
            <br />
            <span className="text-foreground">Control the Drive.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Premium car organizers built for energy, speed, and precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-hover text-lg px-8 py-6 group"
              >
                <Flame className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Explore Products
              </Button>
            </Link>
            <Link href="/reviews">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 group bg-transparent"
              >
                <Settings className="mr-2 h-5 w-5 group-hover:animate-spin" />
                View Reviews
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
