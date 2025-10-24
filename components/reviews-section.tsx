"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Michael R.",
    rating: 5,
    text: "Finally, an organizer that doesn't slide around. The quality is outstanding and it fits perfectly in my trunk.",
    avatar: "/professional-man-avatar.png",
  },
  {
    name: "Sarah K.",
    rating: 5,
    text: "Sturdy, stylish, and built like a tank. This organizer has completely transformed my car's storage.",
    avatar: "/professional-woman-avatar.png",
  },
  {
    name: "David L.",
    rating: 5,
    text: "Best car organizer I've ever owned. The design is sleek and it holds everything I need for road trips.",
    avatar: "/professional-man-avatar-2.png",
  },
  {
    name: "Jennifer M.",
    rating: 4,
    text: "Great product with excellent build quality. Makes keeping my car organized so much easier.",
    avatar: "/professional-woman-avatar-2.png",
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-24 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-4">
            Voices from the <span className="molten-text">Road</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real experiences from drivers who've transformed their vehicles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 glow-hover"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary pulse-glow">
                    <img
                      src={review.avatar || "/placeholder.svg"}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-sans font-bold text-foreground">{review.name}</div>
                    <div className="flex gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">"{review.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
