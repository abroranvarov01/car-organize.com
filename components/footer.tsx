"use client"

export function Footer() {
  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-accent" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-sans font-bold molten-text mb-4">Car-Organize</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium car storage solutions built for energy, speed, and precision.
            </p>
          </div>

          <div>
            <h4 className="font-sans font-bold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p className="mb-2">© 2025 Car-Organize.com — All Rights Reserved.</p>
          <p className="text-xs">
            🛒 Amazon Affiliate Partner | As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  )
}
