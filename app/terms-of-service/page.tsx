import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-sans font-bold molten-text mb-8">Terms of Service</h1>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-sans font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using Car-Organize.com, you accept and agree to be bound by the terms and provision of
                this agreement. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-bold text-foreground mb-4">2. Use License</h2>
              <p className="leading-relaxed">
                Permission is granted to temporarily access the materials on Car-Organize.com for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-bold text-foreground mb-4">3. Product Information</h2>
              <p className="leading-relaxed">
                We strive to provide accurate product descriptions and pricing. However, we do not warrant that product
                descriptions, pricing, or other content on this site is accurate, complete, reliable, current, or
                error-free. Products are sold through Amazon.com and are subject to Amazon's terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-bold text-foreground mb-4">4. Affiliate Disclaimer</h2>
              <p className="leading-relaxed">
                Car-Organize.com participates in affiliate marketing programs. We may earn commissions on purchases made
                through links on our site. This does not affect the price you pay.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-bold text-foreground mb-4">5. Limitation of Liability</h2>
              <p className="leading-relaxed">
                In no event shall Car-Organize.com or its suppliers be liable for any damages arising out of the use or
                inability to use the materials on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-bold text-foreground mb-4">6. Modifications</h2>
              <p className="leading-relaxed">
                Car-Organize.com may revise these terms of service at any time without notice. By using this website,
                you agree to be bound by the current version of these terms.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
