import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, ExternalLink } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 1,
    slug: "thisworx-vacuum-drive-organizer",
    name: "ThisWorx Vacuum & Drive Organizer Bundle",
    price: "$39.99",
    rating: 4.5,
    reviews: 1500,
    image: "https://m.media-amazon.com/images/I/51m9x9FDwhL._AC_SX679_.jpg",
    features: ["Car vacuum included", "Multiple compartments", "Collapsible design", "Portable"],
    amazonLink: "https://www.amazon.com/ThisWorx-Vacuum-Drive-Organizer-Bundle/dp/B09ZGX7QVP",
  },
  {
    id: 2,
    slug: "fortem-car-trunk-organizer",
    name: "FORTEM Car Trunk Organizer",
    price: "$34.99",
    rating: 4.7,
    reviews: 2500,
    image: "https://m.media-amazon.com/images/I/81tOvk78l4L._AC_SX679_.jpg",
    features: ["Collapsible design", "Securing straps included", "Waterproof material", "Multiple compartments"],
    amazonLink: "https://www.amazon.com/FORTEM-Organizer-Collapsible-Securing-Included/dp/B01DIMTWCS",
  },
  {
    id: 3,
    slug: "honey-can-do-trunk-organizer",
    name: "Honey-Can-Do Folding Trunk Organizer",
    price: "$29.99",
    rating: 4.6,
    reviews: 1200,
    image: "https://m.media-amazon.com/images/I/710cSVDC-3L._AC_SX679_.jpg",
    features: ["Foldable design", "Durable fabric", "Easy to clean", "Lightweight"],
    amazonLink: "https://www.amazon.com/Honey-Can-Do-Folding-Trunk-Organizer-Black/dp/B004ZVN78C",
  },
  {
    id: 4,
    slug: "registration-insurance-organizer",
    name: "Registration & Insurance Organizer",
    price: "$19.99",
    rating: 4.8,
    reviews: 800,
    image: "https://m.media-amazon.com/images/I/8178ZCwRyUL._AC_SX679_.jpg",
    features: ["Compact size", "Document protection", "Easy access", "Durable material"],
    amazonLink: "https://www.amazon.com/Registration-Insurance-Organizer-Accessories-Essential/dp/B09B7DMRG5",
  },
  {
    id: 5,
    slug: "gorilla-grip-trunk-organizer",
    name: "Gorilla Grip Travel Trunk Organizer",
    price: "$44.99",
    rating: 4.7,
    reviews: 1800,
    image: "https://m.media-amazon.com/images/I/81cSlvYuHTL._AC_SX679_.jpg",
    features: ["Heavy-duty construction", "Non-slip base", "Large capacity", "Adjustable straps"],
    amazonLink: "https://www.amazon.com/Gorilla-Grip-Travel-Trunk-Organizer/dp/B0C6NMWVPS",
  },
  {
    id: 6,
    slug: "nishel-travel-organizer",
    name: "NISHEL Full-Sized Travel Organizer",
    price: "$24.99",
    rating: 4.5,
    reviews: 600,
    image: "https://m.media-amazon.com/images/I/81ig0y8oZzL._SX679_.jpg",
    features: ["Travel-size accessory storage", "Multiple pockets", "Durable material", "Portable design"],
    amazonLink: "https://www.amazon.com/NISHEL-Full-Sized-Conditioner-Travel-Size-Accessories/dp/B0CXDVNL64",
  },
  {
    id: 7,
    slug: "hotor-trunk-organizer",
    name: "HOTOR Large Capacity Trunk Organizer",
    price: "$49.99",
    rating: 4.8,
    reviews: 2000,
    image: "https://m.media-amazon.com/images/I/91JJ+mKxkFL._AC_SX679_.jpg",
    features: ["Extra-large capacity", "Reinforced walls", "Collapsible", "Water-resistant"],
    amazonLink: "https://www.amazon.com/HOTOR-Trunk-Organizer-Car-Large-Capacity/dp/B0CCRV51YC",
  },
  {
    id: 8,
    slug: "breathable-storage-organizer",
    name: "Breathable Storage Organizer",
    price: "$32.99",
    rating: 4.6,
    reviews: 900,
    image: "https://m.media-amazon.com/images/I/51FKGDCt2RL._AC_SX679_PIbundle-3,TopRight,0,0_SH20_.jpg",
    features: ["Breathable fabric", "Durable handles", "Foldable design", "Multi-purpose storage"],
    amazonLink: "https://www.amazon.com/Breathable-Storage-Handles-Garment-Bedding/dp/B0CKSC1JT4",
  },
  {
    id: 9,
    slug: "wllwoo-handbag-organizer",
    name: "WLLWOO Handbag & Storage Organizer",
    price: "$42.99",
    rating: 4.7,
    reviews: 1100,
    image: "https://m.media-amazon.com/images/I/71KHXI4+m7L._AC_SX679_.jpg",
    features: ["Handbag storage", "Adjustable compartments", "Sturdy construction", "Easy to install"],
    amazonLink: "https://www.amazon.com/WLLWOO-Handbag-Between-Storage-Organizer/dp/B099DKRXZL",
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 lava-bg opacity-20" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-sans font-bold mb-6">
              Our <span className="molten-text">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Premium car trunk organizers designed to bring order to your drive
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                id={`product-${product.id}`}
                className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 scroll-mt-24"
              >
                {/* Product Image */}
                <div className="relative h-80 overflow-hidden bg-muted">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-sans font-bold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <Button
                      className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-glow group/btn"
                      asChild
                    >
                      <Link href={`/products/${product.slug}`}>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Read More
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 lava-bg opacity-30" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-4xl md:text-5xl font-sans font-bold">
                Ready to <span className="molten-text">Organize</span>?
              </h2>
              <p className="text-xl text-muted-foreground">Transform your car trunk into a perfectly organized space</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
