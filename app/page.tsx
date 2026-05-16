import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ProofStrip } from "@/components/proof-strip"
import { YouGet } from "@/components/you-get"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-ink-primary">
      <Navbar />
      <Hero />
      <ProofStrip />
      <YouGet />
      <Footer />
    </main>
  )
}
