"use client"

import { useState } from "react"
import { Reveal } from "./reveal"

type Period = "monthly" | "annual"

interface Feature {
  text: string
  tag?: "NEW" | "BETA" | "SOON"
}

interface Tier {
  name: string
  tagline: string
  isFree?: boolean
  full?: number
  monthly: { price: number }
  annual: { price: number; billed: string }
  features: Feature[]
  cta: string
  popular?: boolean
}

const tiers: Tier[] = [
  {
    name: "Free",
    tagline: "Try it once before you commit.",
    isFree: true,
    monthly: { price: 0 },
    annual: { price: 0, billed: "Free forever" },
    cta: "Start free at launch",
    features: [
      { text: "1 free scan per month" },
      { text: "Vibe Score + severity counts" },
      { text: "1 finding preview (others locked)" },
      { text: "Email report" },
    ],
  },
  {
    name: "Starter",
    tagline: "For solo makers shipping fast.",
    full: 18,
    monthly: { price: 9 },
    annual: { price: 6, billed: "Billed $76/yr" },
    cta: "Lock in 50% off",
    features: [
      { text: "1 project" },
      { text: "30 scans/month" },
      { text: "All 17 categories unlocked" },
      { text: "AI fix prompts" },
      { text: "Live attack replay" },
      { text: "MCP server access" },
      { text: "PDF export" },
      { text: "1 API key" },
    ],
  },
  {
    name: "Pro",
    tagline: "For growing projects.",
    full: 38,
    monthly: { price: 19 },
    annual: { price: 13, billed: "Billed $160/yr" },
    cta: "Lock in 50% off",
    popular: true,
    features: [
      { text: "5 projects" },
      { text: "Unlimited scans" },
      { text: "Daily monitoring" },
      { text: "Diff reports (what changed)" },
      { text: "Trust badge (score 80+)" },
      { text: "Slack / Discord alerts" },
      { text: "Compliance gap analysis" },
      { text: "Supply chain checks" },
      { text: "Priority support" },
      { text: "5 API keys" },
    ],
  },
  {
    name: "Max",
    tagline: "For teams and agencies.",
    full: 78,
    monthly: { price: 39 },
    annual: { price: 27, billed: "Billed $328/yr" },
    cta: "Lock in 50% off",
    features: [
      { text: "50 projects" },
      { text: "Unlimited scans" },
      { text: "Custom monitoring schedules" },
      { text: "Team workspace + SSO" },
      { text: "Breach monitoring" },
      { text: "GitHub PR auto-fix", tag: "SOON" },
      { text: "Dedicated support" },
      { text: "20 API keys" },
    ],
  },
]

function TagPill({ tag }: { tag: NonNullable<Feature["tag"]> }) {
  const styles: Record<typeof tag, string> = {
    NEW: "border-accent/40 bg-accent/10 text-accent",
    BETA: "border-[#E2B341]/40 bg-[#E2B341]/10 text-[#E2B341]",
    SOON: "border-ink-tertiary/40 bg-ink-tertiary/10 text-ink-tertiary",
  }
  return (
    <span
      className={`ml-1.5 inline-block rounded-[4px] border px-1.5 py-[1px] font-mono text-[9px] uppercase tracking-widemono ${styles[tag]}`}
    >
      {tag}
    </span>
  )
}

export function Pricing() {
  const [period, setPeriod] = useState<Period>("monthly")

  return (
    <section id="pricing" className="border-b border-line/60">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal as="header" className="mx-auto max-w-2xl text-center">
          <div className="font-mono text-[11px] uppercase tracking-widemono text-accent">
            Pricing · 50% off for first 500 waitlist members
          </div>
          <h2 className="mt-4 text-h2 text-ink-primary">
            Cheap insurance against shipping a leak.
          </h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-ink-secondary">
            One missed API key in a client bundle costs more than a year of Pro.
            Waitlist members lock 50% off — forever.
          </p>
        </Reveal>

        <Reveal delay={1} className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Billing period"
            className="relative inline-grid w-[300px] grid-cols-2 rounded-full border border-line bg-surface/80 p-1 backdrop-blur"
          >
            <span
              aria-hidden
              className={`pointer-events-none absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full bg-ink-primary transition-transform duration-300 ease-out ${
                period === "annual" ? "translate-x-full" : "translate-x-0"
              }`}
            />
            <button
              role="tab"
              aria-selected={period === "monthly"}
              onClick={() => setPeriod("monthly")}
              className={`relative z-10 py-2 text-[13px] font-medium transition-colors ${
                period === "monthly" ? "text-bg" : "text-ink-secondary"
              }`}
            >
              Monthly
            </button>
            <button
              role="tab"
              aria-selected={period === "annual"}
              onClick={() => setPeriod("annual")}
              className={`relative z-10 inline-flex items-center justify-center gap-1.5 py-2 text-[13px] font-medium transition-colors ${
                period === "annual" ? "text-bg" : "text-ink-secondary"
              }`}
            >
              Annual
              <span
                className={`rounded-full px-1.5 py-[1px] font-mono text-[9px] uppercase tracking-widemono ${
                  period === "annual"
                    ? "bg-bg/15 text-bg"
                    : "bg-accent/15 text-accent"
                }`}
              >
                Save 30%
              </span>
            </button>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, i) => {
            const current = period === "annual" ? tier.annual : tier.monthly
            return (
              <Reveal
                key={`${tier.name}-${period}`}
                delay={((i % 3) + 1) as 1 | 2 | 3}
                className={`pricing-card group relative flex flex-col rounded-[14px] border p-7 ${
                  tier.popular
                    ? "pricing-card-popular border-accent/50 bg-gradient-to-b from-accent/[0.08] to-transparent shadow-[0_0_60px_-10px_rgba(99,102,241,0.25),0_30px_80px_-30px_rgba(94,106,210,0.45)]"
                    : "border-line bg-surface/40"
                }`}
              >
                {tier.popular && (
                  <div className="badge-pop absolute -top-3 left-1/2 rounded-full border border-accent/40 bg-bg px-3 py-1 font-mono text-[10px] uppercase tracking-widemono text-accent">
                    Most popular
                  </div>
                )}

                <h3 className="text-[20px] font-medium tracking-tightish text-ink-primary">
                  {tier.name}
                </h3>
                <p className="mt-1 text-[13px] leading-[1.5] text-ink-tertiary">
                  {tier.tagline}
                </p>

                <div className="mt-6">
                  {tier.isFree ? (
                    <div className="flex items-baseline gap-2">
                      <span className="text-[44px] font-medium leading-none tracking-tighter2 text-ink-primary">
                        $0
                      </span>
                      <span className="text-[13px] text-ink-tertiary">/forever</span>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-2">
                        {tier.full && (
                          <span className="text-[18px] text-ink-tertiary line-through decoration-ink-tertiary/40">
                            ${tier.full}
                          </span>
                        )}
                        <span
                          key={`${tier.name}-${period}`}
                          className="price-spring text-[44px] font-medium leading-none tracking-tighter2 text-ink-primary"
                        >
                          ${current.price}
                        </span>
                        <span className="text-[13px] text-ink-tertiary">/mo</span>
                      </div>
                      <div className="mt-2 text-[11px] font-mono uppercase tracking-widemono text-accent">
                        50% off — first 500 only
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-2 text-[12px] text-ink-tertiary">
                  {tier.isFree
                    ? "No card. No expiry."
                    : period === "annual"
                    ? tier.annual.billed
                    : "Billed monthly"}
                </div>

                <a
                  href="#waitlist"
                  className={`mt-6 inline-flex h-11 items-center justify-center rounded-full text-[13px] font-medium transition-colors ${
                    tier.popular
                      ? "btn-glow cta-shimmer bg-ink-primary text-bg"
                      : "border border-line bg-surface/60 text-ink-primary hover:border-accent/40 hover:bg-surface"
                  }`}
                >
                  {tier.cta} →
                </a>

                <ul className="mt-7 space-y-3 border-t border-line pt-6">
                  {tier.features.map((f, fIdx) => (
                    <li
                      key={f.text}
                      className="feature-row flex items-start gap-2.5 text-[13.5px] leading-[1.5] text-ink-secondary"
                      style={{ animationDelay: `${120 + fIdx * 50}ms` }}
                    >
                      <span className="mt-[3px] grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent/15 text-[10px] text-accent transition-all duration-200 group-hover:bg-accent/25 group-hover:text-accent">
                        ✓
                      </span>
                      <span>
                        {f.text}
                        {f.tag && <TagPill tag={f.tag} />}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-10 text-center text-[13px] text-ink-tertiary">
          Pay only when you find issues. Cancel any time. No card required to join the waitlist.
        </Reveal>
      </div>
    </section>
  )
}
