"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Star } from "lucide-react"

const products = [
  {
    name: "Drive Auto Organizer",
    type: "Trunk",
    capacity: "3 Compartments",
    material: "Oxford Fabric",
    rating: 5,
  },
  {
    name: "Fortem Storage Bin",
    type: "Seat",
    capacity: "2 Compartments",
    material: "Polyester",
    rating: 4,
  },
  {
    name: "Honey-Can-Do Collapsible",
    type: "Trunk",
    capacity: "Multi-Pocket",
    material: "Nylon",
    rating: 5,
  },
  {
    name: "Premium Backseat",
    type: "Backseat",
    capacity: "6 Pockets",
    material: "Leather",
    rating: 5,
  },
]

export function ComparisonTable() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-4">
            Compare <span className="molten-text">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground">Find the perfect organizer for your needs</p>
        </div>

        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden border border-border rounded-lg bg-card/50 backdrop-blur-sm">
              <Table>
                <TableHeader>
                  <TableRow className="border-border hover:bg-muted/50">
                    <TableHead className="text-primary font-sans font-bold">Product</TableHead>
                    <TableHead className="text-primary font-sans font-bold">Type</TableHead>
                    <TableHead className="text-primary font-sans font-bold">Capacity</TableHead>
                    <TableHead className="text-primary font-sans font-bold">Material</TableHead>
                    <TableHead className="text-primary font-sans font-bold">Rating</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product, index) => (
                    <TableRow key={index} className="border-border hover:bg-muted/50 transition-colors glow-hover">
                      <TableCell className="font-medium text-foreground">{product.name}</TableCell>
                      <TableCell className="text-muted-foreground">{product.type}</TableCell>
                      <TableCell className="text-muted-foreground">{product.capacity}</TableCell>
                      <TableCell className="text-muted-foreground">{product.material}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          {Array.from({ length: product.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
