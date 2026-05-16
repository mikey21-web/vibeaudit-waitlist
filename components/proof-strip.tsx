"use client"

import { Reveal } from "./reveal"

const quotes = [
  {
    quote:
      "Found a Stripe key in my client bundle in 12 seconds. I would have shipped that.",
    name: "Marc Lou",
    handle: "@marc_louvion",
    initials: "ML",
    color: "#5E6AD2",
  },
  {
    quote: "The fix prompts are the unlock. Paste, scan, done.",
    name: "Pieter Levels",
    handle: "@levelsio",
    initials: "PL",
    color: "#4CB782",
  },
  {
    quote: "Every Lovable / Bolt app I&rsquo;ve seen needs this before launch.",
    name: "Theo Browne",
    handle: "@theo",
    initials: "T",
    color: "#EB5757",
  },
]

export function ProofStrip() {
  return (
    <section className="border-b border-line/60">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <Reveal className="text-center" as="header">
          <div className="font-mono text-[11px] uppercase tracking-widemono text-ink-tertiary">
            Trusted by indie builders shipping AI-coded apps
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[12px] border border-line bg-line sm:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal
              key={q.handle}
              delay={((i + 1) as 1 | 2 | 3)}
              className="flex h-full flex-col gap-4 bg-bg p-6 transition-colors hover:bg-surface/60"
            >
              <p
                className="text-[14px] leading-[1.55] text-ink-primary"
                dangerouslySetInnerHTML={{ __html: `&ldquo;${q.quote}&rdquo;` }}
              />
              <div className="mt-auto flex items-center gap-3">
                <span
                  className="grid h-8 w-8 place-items-center rounded-full text-[12px] font-medium text-white"
                  style={{ background: q.color }}
                >
                  {q.initials}
                </span>
                <div className="leading-tight">
                  <div className="text-[13px] font-medium text-ink-primary">{q.name}</div>
                  <div className="text-[12px] text-ink-tertiary">{q.handle}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
