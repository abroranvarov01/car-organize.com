"use client"

export function Gallery() {
  const images = [
    "/car-trunk-organized-premium-black.jpg",
    "/car-interior-storage-organized.jpg",
    "/car-backseat-organizer-installed.jpg",
    "/car-trunk-organizer-with-items.jpg",
  ]

  return (
    <section id="gallery" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-4">
            <span className="molten-text">Lava</span> in Motion
          </h2>
          <p className="text-lg text-muted-foreground">See our organizers in action</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative h-64 md:h-80 rounded-lg overflow-hidden group glow-hover">
              <img
                src={image || "/placeholder.svg"}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
