import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturedProducts } from "@/components/featured-products"
import { WhyChooseUs } from "@/components/why-choose-us"
import { VideoMotion } from "@/components/video-motion"
import { HowItWorks } from "@/components/how-it-works"
import { ReviewsSection } from "@/components/reviews-section"
import { ComparisonTable } from "@/components/comparison-table"
import { Gallery } from "@/components/gallery"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeaturedProducts />
      <WhyChooseUs />
      <VideoMotion />
      <HowItWorks />
      <ReviewsSection />
      <ComparisonTable />
      <Gallery />
      <CTASection />
      <Footer />
      <CookieBanner />
    </main>
  )
}
