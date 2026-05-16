"use client"

import { Reveal } from "./reveal"
import { AnimatedCount } from "./animated-count"

const perks = [
  { k: "01", t: "Early access", d: "Before the public launch." },
  { k: "02", t: "50% off forever", d: "Locked in for first 500 members." },
  { k: "03", t: "Free deep scan", d: "One on day one, on us." },
  { k: "04", t: "Founding badge", d: "Shown on every report you ship." },
  { k: "05", t: "Direct founder line", d: "Reply-all email, not a ticket queue." },
  { k: "06", t: "Roadmap vote", d: "Pick what we build next." },
]

export function Perks() {
  return (
    <section id="pricing" className="border-b border-line/60">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal as="header" className="max-w-2xl">
          <div className="font-mono text-[11px] uppercase tracking-widemono text-accent">
            Waitlist perks
          </div>
          <h2 className="mt-4 text-h2 text-ink-primary">
            Get in early. Lock in the deepest discount.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[12px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((p, i) => (
            <Reveal
              key={p.k}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="group bg-bg p-7 transition-colors hover:bg-surface/60"
            >
              <div className="font-mono text-[11px] text-ink-tertiary">{p.k}</div>
              <h3 className="mt-3 text-[18px] font-medium tracking-tightish text-ink-primary">
                {p.t}
              </h3>
              <p className="mt-1.5 text-[14px] leading-[1.6] text-ink-secondary">{p.d}</p>
              <div className="mt-5 h-px w-8 bg-line transition-all duration-500 group-hover:w-16 group-hover:bg-accent" />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-col items-center text-center">
          <div className="text-[14px] text-ink-secondary">
            <AnimatedCount to={2418} className="font-medium text-ink-primary" /> developers already
            in. Spots filling fast.
          </div>
          <a
            href="#waitlist"
            className="btn-glow mt-5 inline-flex h-12 items-center rounded-[8px] bg-ink-primary px-6 text-[14px] font-medium text-bg"
          >
            Claim your spot →
          </a>
        </Reveal>
      </div>
    </section>
  )
}
