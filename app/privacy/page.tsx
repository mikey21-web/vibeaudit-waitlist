import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy — DeploySafe",
  description: "How DeploySafe handles your data.",
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
        <h1 className="text-[36px] font-medium tracking-tighter2 text-ink-primary">
          Privacy Policy
        </h1>
        <p className="mt-2 text-[13px] text-ink-tertiary">
          Last updated: May 2026
        </p>

        <div className="mt-10 space-y-8 text-[15px] leading-[1.7] text-ink-secondary">
          <section>
            <h2 className="text-[18px] font-medium text-ink-primary">What we collect</h2>
            <p className="mt-3">
              When you join the waitlist, we collect your email address and optionally your
              name. That&apos;s it. We do not collect IP addresses, device fingerprints, or
              behavioral data.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-medium text-ink-primary">How we use it</h2>
            <p className="mt-3">
              We use your email for two things only:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>Send you a confirmation that you joined the waitlist.</li>
              <li>Email you once when DeploySafe launches and early access opens.</li>
            </ul>
            <p className="mt-3">
              We never sell your data. We never share it with third parties for marketing.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-medium text-ink-primary">Where it lives</h2>
            <p className="mt-3">
              Your email is stored in Resend (our email infrastructure provider) and nowhere
              else. Resend is{" "}
              <a
                href="https://resend.com/legal/privacy-policy"
                className="text-accent underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener"
              >
                GDPR-compliant
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-medium text-ink-primary">Removing your data</h2>
            <p className="mt-3">
              Email{" "}
              <a
                href="mailto:hello@deploysafe.in"
                className="text-accent underline-offset-2 hover:underline"
              >
                hello@deploysafe.in
              </a>{" "}
              and we&apos;ll delete your record within 48 hours. Every launch email also
              includes a one-click unsubscribe link.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-medium text-ink-primary">Analytics</h2>
            <p className="mt-3">
              We use Vercel Analytics, which is privacy-friendly and does not use cookies or
              track individuals across sites.
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
