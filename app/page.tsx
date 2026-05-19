import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AttackReplay } from "@/components/attack-replay"
import { Problems } from "@/components/problems"
import { HowItWorks } from "@/components/how-it-works"
import { MCPSection } from "@/components/mcp-section"
import { Pricing } from "@/components/pricing"
import { Perks } from "@/components/perks"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-ink-primary">
      <Navbar />
      <Hero />
      <AttackReplay />
      <Problems />
      <HowItWorks />
      <MCPSection />
      <Pricing />
      <Perks />
      <Footer />
    </main>
  )
}
