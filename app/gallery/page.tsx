import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function GalleryPage() {
  const galleryImages = [
    {
      id: 1,
      src: "/premium-black-car-trunk-organizer-with-compartment.jpg",
      alt: "Premium Black Car Trunk Organizer",
      title: "Premium Organization",
    },
    {
      id: 2,
      src: "/black-foldable-car-trunk-organizer.jpg",
      alt: "Foldable Car Trunk Organizer",
      title: "Foldable Design",
    },
    {
      id: 3,
      src: "/soft-fabric-car-trunk-storage-organizer.jpg",
      alt: "Soft Fabric Storage Organizer",
      title: "Soft Fabric Storage",
    },
    {
      id: 4,
      src: "/luxury-leather-car-trunk-organizer.jpg",
      alt: "Luxury Leather Organizer",
      title: "Luxury Leather",
    },
    {
      id: 5,
      src: "/heavy-duty-black-cargo-trunk-organizer.jpg",
      alt: "Heavy Duty Cargo Organizer",
      title: "Heavy Duty Cargo",
    },
    {
      id: 6,
      src: "/compact-portable-car-trunk-organizer.jpg",
      alt: "Compact Portable Organizer",
      title: "Compact & Portable",
    },
    {
      id: 7,
      src: "/car-trunk-with-organized-items.jpg",
      alt: "Organized Car Trunk",
      title: "Perfect Organization",
    },
    {
      id: 8,
      src: "/car-organizer-in-use-with-groceries.jpg",
      alt: "Organizer with Groceries",
      title: "Grocery Shopping Made Easy",
    },
    {
      id: 9,
      src: "/car-trunk-organizer-with-sports-equipment.jpg",
      alt: "Sports Equipment Storage",
      title: "Sports Equipment Storage",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-sans font-bold mb-6">
              Product <span className="molten-text">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of premium car organizers in action. See how they transform chaos into order.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary transition-all duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-sans font-bold text-foreground mb-2">{image.title}</h3>
                  <p className="text-sm text-muted-foreground">Premium quality car organization</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="inline-block p-8 rounded-lg border border-border bg-card/50 backdrop-blur-sm">
              <h2 className="text-3xl font-sans font-bold mb-4">
                Ready to <span className="molten-text">Organize</span>?
              </h2>
              <p className="text-muted-foreground mb-6">Transform your car trunk with our premium organizers</p>
              <a
                href="/products"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
