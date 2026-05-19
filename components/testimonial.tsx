"use client"

import { Reveal } from "./reveal"

export function Testimonial() {
  return (
    <section className="border-b border-line/60">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 md:py-28">
        <Reveal className="text-center">
          <div className="font-mono text-[11px] uppercase tracking-widemono text-accent">
            Testimonial · one real human
          </div>
        </Reveal>

        <Reveal delay={1}>
          <blockquote className="mt-8 text-center text-[22px] font-medium leading-[1.4] tracking-tightish text-ink-primary sm:text-[26px]">
            &ldquo;I shipped a Lovable app last weekend. DeploySafe found my Stripe secret in the
            client bundle in 12 seconds. The replay button literally showed me a curl command that
            would&apos;ve drained my account. Patched it in the same chat with Cursor. This is the
            only security tool I&apos;ll actually keep paying for.&rdquo;
          </blockquote>
        </Reveal>

        <Reveal delay={2} className="mt-8 flex items-center justify-center gap-4">
          <div
            aria-hidden
            className="grid h-14 w-14 place-items-center rounded-full border border-line bg-gradient-to-br from-accent/30 to-accent/5 text-[18px] font-medium text-ink-primary"
          >
            TS
          </div>
          <div className="text-left">
            <div className="text-[15px] font-medium text-ink-primary">Tanmay Sharma</div>
            <div className="text-[12px] text-ink-tertiary">
              Indie hacker ·{" "}
              <a
                href="https://twitter.com/tanmay_dev"
                target="_blank"
                rel="noopener"
                className="text-accent underline-offset-2 hover:underline"
              >
                @tanmay_dev
              </a>
            </div>
            <div className="text-[12px] text-ink-tertiary">
              Building TinyToys (lovable.dev)
            </div>
          </div>
        </Reveal>

        <Reveal delay={3} className="mt-10 text-center">
          <div className="text-[13px] text-ink-tertiary">
            Want to be quoted?{" "}
            <a
              href="https://twitter.com/deploysafe"
              target="_blank"
              rel="noopener"
              className="text-accent underline-offset-2 hover:underline"
            >
              DM us on X →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
