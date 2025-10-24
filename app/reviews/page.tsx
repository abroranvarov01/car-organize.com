import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Star, Flame, CheckCircle2, User } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      name: "Michael Rodriguez",
      rating: 5,
      date: "March 15, 2024",
      product: "Drive Auto Products Organizer",
      title: "Game Changer for My SUV",
      content:
        "This organizer completely transformed my trunk space. The quality is exceptional and the compartments are perfectly sized. No more rolling groceries!",
      verified: true,
    },
    {
      id: 2,
      name: "Sarah Chen",
      rating: 5,
      date: "March 10, 2024",
      product: "Fortem Car Trunk Organizer",
      title: "Sturdy and Well-Designed",
      content:
        "I've tried several organizers and this is by far the best. The material is durable, it stays in place, and the collapsible design is genius for when I need extra space.",
      verified: true,
    },
    {
      id: 3,
      name: "James Thompson",
      rating: 4,
      date: "March 5, 2024",
      product: "Honey-Can-Do Organizer",
      title: "Perfect for Road Trips",
      content:
        "We take a lot of road trips and this organizer keeps everything secure and accessible. The side pockets are great for smaller items. Highly recommend!",
      verified: true,
    },
    {
      id: 4,
      name: "Emily Watson",
      rating: 5,
      date: "February 28, 2024",
      product: "Drive Auto Products Organizer",
      title: "Exceeded Expectations",
      content:
        "The build quality is outstanding. It's clear this was designed by people who actually use their cars. The adjustable dividers are a fantastic feature.",
      verified: true,
    },
    {
      id: 5,
      name: "David Kim",
      rating: 5,
      date: "February 20, 2024",
      product: "Fortem Car Trunk Organizer",
      title: "Best Purchase This Year",
      content:
        "My trunk went from chaotic to organized in minutes. The non-slip bottom actually works, and the handles make it easy to carry groceries into the house.",
      verified: true,
    },
    {
      id: 6,
      name: "Lisa Martinez",
      rating: 4,
      date: "February 15, 2024",
      product: "Honey-Can-Do Organizer",
      title: "Great Value for Money",
      content:
        "Solid construction and plenty of storage space. It's made my daily commute much more organized. The only minor issue is I wish it came in more colors.",
      verified: true,
    },
    {
      id: 7,
      name: "Robert Johnson",
      rating: 5,
      date: "February 10, 2024",
      product: "Drive Auto Products Organizer",
      title: "Professional Quality",
      content:
        "As someone who spends a lot of time in my car for work, this organizer is essential. It keeps all my tools and supplies organized and easy to access.",
      verified: true,
    },
    {
      id: 8,
      name: "Amanda Foster",
      rating: 5,
      date: "February 5, 2024",
      product: "Fortem Car Trunk Organizer",
      title: "Mom-Approved!",
      content:
        "With three kids, my car was always a mess. This organizer has been a lifesaver. Sports equipment, groceries, emergency supplies - everything has its place now.",
      verified: true,
    },
  ]

  const stats = [
    { label: "Total Reviews", value: "2,847", icon: Star },
    { label: "Average Rating", value: "4.8/5", icon: Flame },
    { label: "Verified Purchases", value: "98%", icon: CheckCircle2 },
    { label: "Happy Customers", value: "2,700+", icon: User },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 lava-bg opacity-20" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-sans font-bold">
              Customer <span className="molten-text">Reviews</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Real feedback from drivers who transformed their trunk space
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="flex justify-center">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-sans font-bold molten-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {reviews.map((review) => (
              <Card
                key={review.id}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 glow-hover"
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-sans font-bold text-foreground">{review.name}</h3>
                        {review.verified && <CheckCircle2 className="h-4 w-4 text-primary" />}
                      </div>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>

                  {/* Product */}
                  <div className="text-sm text-primary font-medium">{review.product}</div>

                  {/* Review Content */}
                  <div className="space-y-2">
                    <h4 className="font-sans font-bold text-foreground">{review.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{review.content}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-sans font-bold">
              Join <span className="molten-text">2,700+</span> Happy Customers
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Experience the difference a premium car organizer makes
            </p>
            <a
              href="/products"
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-md font-sans font-bold text-lg transition-all duration-300 glow-hover"
            >
              <Flame className="inline-block mr-2 h-5 w-5" />
              Shop Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
