import dynamic from "next/dynamic"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AttackReplay } from "@/components/attack-replay"
import { Problems } from "@/components/problems"
import { HowItWorks } from "@/components/how-it-works"

const Comparison = dynamic(() =>
  import("@/components/comparison").then((m) => m.Comparison)
)
const Testimonial = dynamic(() =>
  import("@/components/testimonial").then((m) => m.Testimonial)
)
const MCPSection = dynamic(() =>
  import("@/components/mcp-section").then((m) => m.MCPSection)
)
const Pricing = dynamic(() =>
  import("@/components/pricing").then((m) => m.Pricing)
)
const Perks = dynamic(() =>
  import("@/components/perks").then((m) => m.Perks)
)
const FAQ = dynamic(() => import("@/components/faq").then((m) => m.FAQ))
const Footer = dynamic(() =>
  import("@/components/footer").then((m) => m.Footer)
)
const TrustBar = dynamic(
  () => import("@/components/trust-bar").then((m) => m.TrustBar),
  { ssr: false }
)
const ExitIntent = dynamic(
  () => import("@/components/exit-intent").then((m) => m.ExitIntent),
  { ssr: false }
)

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-ink-primary">
      <Navbar />
      <Hero />
      <AttackReplay />
      <Problems />
      <HowItWorks />
      <Comparison />
      <Testimonial />
      <MCPSection />
      <Pricing />
      <Perks />
      <FAQ />
      <Footer />
      <TrustBar />
      <ExitIntent />
    </main>
  )
}
