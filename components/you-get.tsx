"use client"

import { Reveal } from "./reveal"

const items = [
  {
    k: "01",
    t: "30-second scan, 100+ checks",
    d: "11 categories — security, auth, payments, AI cost, infra, legal — all in one pass.",
  },
  {
    k: "02",
    t: "Paste-ready fix prompts",
    d: "Every finding ships with a prompt for Cursor, Windsurf, or Copilot. Drop it in. Re-scan.",
  },
  {
    k: "03",
    t: "50% off for the first 500",
    d: "Locked in at signup. Early-access cohort gets a free deep scan on day one.",
  },
]

export function YouGet() {
  return (
    <section className="border-b border-line/60">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <Reveal className="text-center" as="header">
          <div className="font-mono text-[11px] uppercase tracking-widemono text-accent">
            What you get
          </div>
          <h2 className="mt-3 text-[28px] font-medium tracking-tighter2 text-ink-primary sm:text-[36px]">
            Built for shipping in a weekend.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {items.map((it, i) => (
            <Reveal
              key={it.k}
              delay={((i + 1) as 1 | 2 | 3)}
              className="border-t border-line pt-6"
            >
              <div className="font-mono text-[11px] text-ink-tertiary">{it.k}</div>
              <h3 className="mt-3 text-[17px] font-medium tracking-tightish text-ink-primary">
                {it.t}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-ink-secondary">{it.d}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a
            href="#waitlist"
            className="btn-glow inline-flex h-11 items-center rounded-[8px] bg-ink-primary px-5 text-[14px] font-medium text-bg"
          >
            Get on the list →
          </a>
        </Reveal>
      </div>
    </section>
  )
}
