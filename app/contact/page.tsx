import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-sans font-bold molten-text mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input id="name" type="text" placeholder="Your name" className="bg-card border-border" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" className="bg-card border-border" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input id="subject" type="text" placeholder="How can we help?" className="bg-card border-border" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea id="message" rows={6} placeholder="Tell us more..." className="bg-card border-border" />
                </div>

                <Button className="w-full drive-glow">Send Message</Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-xl font-sans font-bold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">support@car-organize.com</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-xl font-sans font-bold text-foreground mb-2">Business Hours</h3>
                <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-xl font-sans font-bold text-foreground mb-2">Response Time</h3>
                <p className="text-muted-foreground">We typically respond within 24-48 hours during business days.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
