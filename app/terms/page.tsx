import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service — DeploySafe",
  description: "DeploySafe waitlist terms.",
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
        <h1 className="text-[36px] font-medium tracking-tighter2 text-ink-primary">
          Terms of Service
        </h1>
        <p className="mt-2 text-[13px] text-ink-tertiary">
          Last updated: May 2026
        </p>

        <div className="mt-10 space-y-8 text-[15px] leading-[1.7] text-ink-secondary">
          <section>
            <h2 className="text-[18px] font-medium text-ink-primary">Waitlist scope</h2>
            <p className="mt-3">
              This page describes terms for the DeploySafe waitlist only. DeploySafe is not
              yet available as a product. Joining the waitlist costs nothing, creates no
              account, and obligates neither party.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-medium text-ink-primary">No guarantees</h2>
            <p className="mt-3">
              Joining the waitlist does not guarantee access, pricing, or a specific launch
              date. Promotional perks (such as the &ldquo;50% off for the first 500&rdquo;
              offer) are subject to change and verification at launch.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-medium text-ink-primary">Email communication</h2>
            <p className="mt-3">
              By signing up you consent to receive a confirmation email and a single launch
              announcement. No marketing emails or third-party newsletters. Unsubscribe any
              time.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-medium text-ink-primary">Disclaimers</h2>
            <p className="mt-3">
              When DeploySafe ships, it will be a security and quality scanning tool. Any
              report it produces is informational and does not replace professional security
              audits. DeploySafe is provided &ldquo;as is&rdquo; with no warranties.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-medium text-ink-primary">Changes</h2>
            <p className="mt-3">
              We may update these terms before launch. Material changes will be announced via
              the launch email.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-medium text-ink-primary">Contact</h2>
            <p className="mt-3">
              Questions?{" "}
              <a
                href="mailto:hello@deploysafe.in"
                className="text-accent underline-offset-2 hover:underline"
              >
                hello@deploysafe.in
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
