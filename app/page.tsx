import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturedIn } from "@/components/featured-in"
import { AttackReplay } from "@/components/attack-replay"
import { Problems } from "@/components/problems"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonial } from "@/components/testimonial"
import { MCPSection } from "@/components/mcp-section"
import { Pricing } from "@/components/pricing"
import { Perks } from "@/components/perks"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { TrustBar } from "@/components/trust-bar"

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-ink-primary">
      <Navbar />
      <Hero />
      <FeaturedIn />
      <AttackReplay />
      <Problems />
      <HowItWorks />
      <Testimonial />
      <MCPSection />
      <Pricing />
      <Perks />
      <FAQ />
      <Footer />
      <TrustBar />
    </main>
  )
}
