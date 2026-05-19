"use client"

import { Reveal } from "./reveal"

interface Tier {
  name: string
  price: string
  crossed?: string
  period: string
  desc: string
  cta: string
  features: string[]
  accent: boolean
  badge?: string
}

const tiers: Tier[] = [
  {
    name: "Free",
    price: "$0",
    period: "/forever",
    desc: "Run one scan a month. See where you stand.",
    cta: "Start free at launch",
    features: [
      "1 scan per month",
      "11 categories, 100+ checks",
      "Score + critical findings",
      "Email report",
    ],
    accent: false,
  },
  {
    name: "Pro",
    price: "$9",
    crossed: "$19",
    period: "/month",
    desc: "Built for solo devs shipping fast with AI tools.",
    cta: "Join waitlist",
    features: [
      "Unlimited scans",
      "Paste-ready fix prompts for Cursor, Claude Code, Antigravity",
      "Private reports",
      "GitHub PR comments",
      "Priority support",
    ],
    accent: true,
    badge: "50% off — first 500 only",
  },
  {
    name: "Team",
    price: "$29",
    crossed: "$59",
    period: "/month",
    desc: "Up to 5 seats. One dashboard. Shared findings.",
    cta: "Join waitlist",
    features: [
      "Everything in Pro",
      "5 seats included",
      "Slack + Linear integrations",
      "Custom rules per project",
      "SSO (SAML)",
    ],
    accent: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-line/60">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal as="header" className="max-w-2xl">
          <div className="font-mono text-[11px] uppercase tracking-widemono text-accent">
            Pricing
          </div>
          <h2 className="mt-4 text-h2 text-ink-primary">
            Cheap insurance against shipping a leak.
          </h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-ink-secondary">
            One missed API key in a client bundle costs more than a year of Pro.
            Waitlist members lock 50% off — forever.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={(i + 1) as 1 | 2 | 3}
              className={`relative flex flex-col rounded-[14px] border p-7 ${
                tier.accent
                  ? "border-accent/50 bg-gradient-to-b from-accent/[0.08] to-transparent shadow-[0_30px_80px_-30px_rgba(94,106,210,0.45)]"
                  : "border-line bg-surface/40"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-accent/40 bg-bg px-3 py-1 font-mono text-[10px] uppercase tracking-widemono text-accent">
                  {tier.badge}
                </div>
              )}

              <div className="font-mono text-[11px] uppercase tracking-widemono text-ink-tertiary">
                {tier.name}
              </div>

              <div className="mt-4 flex items-baseline gap-2">
                {tier.crossed && (
                  <span className="text-[18px] text-ink-tertiary line-through decoration-ink-tertiary/40">
                    {tier.crossed}
                  </span>
                )}
                <span className="text-[40px] font-medium tracking-tighter2 text-ink-primary">
                  {tier.price}
                </span>
                <span className="text-[14px] text-ink-tertiary">{tier.period}</span>
              </div>

              <p className="mt-3 text-[14px] leading-[1.55] text-ink-secondary">
                {tier.desc}
              </p>

              <a
                href="#waitlist"
                className={`mt-6 inline-flex h-11 items-center justify-center rounded-[8px] text-[13px] font-medium transition-colors ${
                  tier.accent
                    ? "btn-glow bg-ink-primary text-bg"
                    : "border border-line bg-surface/60 text-ink-primary hover:border-accent/40 hover:bg-surface"
                }`}
              >
                {tier.cta} →
              </a>

              <div className="mt-7 border-t border-line pt-6">
                <ul className="space-y-3">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-[13.5px] leading-[1.5] text-ink-secondary"
                    >
                      <span className="mt-[3px] grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent/15 text-[10px] text-accent">
                        ✓
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col items-center gap-3 text-center">
          <div className="text-[13px] text-ink-tertiary">
            Annual billing saves 20%. Cancel any time. No card required to join the waitlist.
          </div>
        </Reveal>
      </div>
    </section>
  )
}
