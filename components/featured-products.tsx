"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ExternalLink } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Drive Auto Products Car Trunk Organizer",
    description: "3-compartment trunk organizer with collapsible design",
    rating: 5,
    price: "$29.99",
    image: "/car-trunk-organizer-black-premium.jpg",
    link: "#",
  },
  {
    id: 2,
    name: "Fortem Car Storage Bin",
    description: "Heavy-duty polyester with reinforced handles",
    rating: 4,
    price: "$24.99",
    image: "/car-storage-bin-organizer-black.jpg",
    link: "#",
  },
  {
    id: 3,
    name: "Honey-Can-Do Collapsible Organizer",
    description: "Foldable design with multiple pockets",
    rating: 5,
    price: "$19.99",
    image: "/collapsible-car-organizer-premium.jpg",
    link: "#",
  },
  {
    id: 4,
    name: "Premium Backseat Organizer",
    description: "Multi-pocket design with tablet holder",
    rating: 5,
    price: "$34.99",
    image: "/backseat-car-organizer-black.jpg",
    link: "#",
  },
]

export function FeaturedProducts() {
  return (
    <section id="products" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-4">
            <span className="molten-text">Hot Picks</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our most popular organizers, forged for performance and built to last
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 glow-hover group"
            >
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-lg font-sans mb-2 text-foreground">{product.name}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">{product.description}</CardDescription>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: product.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href={`/products#product-${product.id}`} className="w-full">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group">
                    View Product
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
