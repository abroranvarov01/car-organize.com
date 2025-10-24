"use client"

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-sans font-bold">
              <span className="molten-text">Function</span> Meets <span className="molten-text">Fire</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We design car storage that moves with your energy. Every organizer is crafted to bring order to chaos,
              transforming your vehicle into a precision machine.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Built with premium materials and engineered for durability, our products don't just store—they elevate
              your driving experience.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex-1 p-4 bg-card border border-border rounded-lg glow-hover">
                <div className="text-3xl font-sans font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Products Sold</div>
              </div>
              <div className="flex-1 p-4 bg-card border border-border rounded-lg glow-hover">
                <div className="text-3xl font-sans font-bold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Right column - Visual */}
          <div className="relative h-96 rounded-lg overflow-hidden">
            <div className="absolute inset-0 lava-bg opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-card/80 backdrop-blur-sm rounded-lg border-2 border-primary pulse-glow flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔥</div>
                  <div className="text-xl font-sans font-bold molten-text">Energy in Motion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
