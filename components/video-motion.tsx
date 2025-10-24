"use client"

export function VideoMotion() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative h-96 rounded-lg overflow-hidden">
          {/* Animated background simulating molten metal forming */}
          <div className="absolute inset-0 lava-bg" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
              <h3 className="text-4xl md:text-5xl font-sans font-bold text-foreground">
                From <span className="molten-text">Molten</span> to Motion
              </h3>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Watch as chaos transforms into perfect order
              </p>
            </div>
          </div>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>
      </div>
    </section>
  )
}
