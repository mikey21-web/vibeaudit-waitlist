import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Problems } from "@/components/problems"
import { HowItWorks } from "@/components/how-it-works"
import { Pricing } from "@/components/pricing"
import { Perks } from "@/components/perks"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-ink-primary">
      <Navbar />
      <Hero />
      <Problems />
      <HowItWorks />
      <Pricing />
      <Perks />
      <Footer />
    </main>
  )
}
