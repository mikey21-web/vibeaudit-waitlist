import { Navbar } from "@/components/navbar"
import { HeroAnimated } from "@/components/hero-animated"
import { Hero } from "@/components/hero"
import { Problems } from "@/components/problems"
import { HowItWorks } from "@/components/how-it-works"
import { Perks } from "@/components/perks"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc" }}>
      <Navbar />
      <HeroAnimated />
      <Hero />
      <Problems />
      <HowItWorks />
      <Perks />
      <Footer />
    </main>
  )
}
