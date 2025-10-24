import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-sans font-bold molten-text mb-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-sans font-bold text-foreground mb-4">1. Information We Collect</h2>
              <p className="leading-relaxed">
                We collect information that you provide directly to us, including when you create an account, make a
                purchase, or contact us for support. This may include your name, email address, shipping address, and
                payment information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-bold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="leading-relaxed">
                We use the information we collect to process your orders, communicate with you about your purchases, and
                improve our services. We may also use your information to send you marketing communications, but you can
                opt out at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-bold text-foreground mb-4">3. Amazon Affiliate Disclosure</h2>
              <p className="leading-relaxed">
                Car-Organize.com is a participant in the Amazon Services LLC Associates Program, an affiliate
                advertising program designed to provide a means for sites to earn advertising fees by advertising and
                linking to Amazon.com. When you click on product links and make a purchase, we may earn a commission at
                no additional cost to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-bold text-foreground mb-4">4. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-bold text-foreground mb-4">5. Cookies</h2>
              <p className="leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and hold certain
                information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-bold text-foreground mb-4">6. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at privacy@car-organize.com
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
