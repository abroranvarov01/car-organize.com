import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Zap, Target, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-sans font-bold molten-text mb-4">About Car-Organize</h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Energy in Motion — Premium car storage solutions for the modern driver.
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-sans font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Car-Organize, we believe that your vehicle deserves the same level of organization and efficiency as
                your home or office. We curate the best car storage solutions from trusted brands to help you maintain a
                clean, organized, and functional vehicle interior.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-bold text-foreground mb-4">What We Do</h2>
              <p className="text-muted-foreground leading-relaxed">
                We research, test, and recommend premium car organizers that combine durability, functionality, and
                style. Our team carefully selects products from top manufacturers like Drive Auto Products, Fortem, and
                Honey-Can-Do to ensure you get the best value for your investment.
              </p>
            </section>

            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="p-6 bg-card border border-border rounded-lg">
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-sans font-bold text-foreground mb-2">Energy</h3>
                <p className="text-sm text-muted-foreground">
                  Dynamic solutions that keep pace with your active lifestyle.
                </p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-sans font-bold text-foreground mb-2">Precision</h3>
                <p className="text-sm text-muted-foreground">Carefully curated products that fit your exact needs.</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-sans font-bold text-foreground mb-2">Quality</h3>
                <p className="text-sm text-muted-foreground">Only the best products from trusted manufacturers.</p>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-sans font-bold text-foreground mb-4">Amazon Affiliate Partnership</h2>
              <p className="text-muted-foreground leading-relaxed">
                Car-Organize.com is a proud participant in the Amazon Services LLC Associates Program. This means when
                you purchase products through our links, we may earn a small commission at no additional cost to you.
                This helps us continue providing valuable content and recommendations to help you find the perfect car
                organization solutions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-bold text-foreground mb-4">Our Commitment</h2>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to transparency, quality, and customer satisfaction. Every product we recommend is
                thoroughly researched and evaluated based on real customer reviews, durability, functionality, and
                value. Your trust is our top priority.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
