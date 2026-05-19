"use client"

import { Reveal } from "./reveal"

const items = [
  {
    cat: "Pentest",
    title: "Active pentest probes",
    desc: "We don't just check headers — we actually try the attacks. JWT bypass, webhook forgery, mass assignment, BOLA, IDOR.",
  },
  {
    cat: "Security",
    title: "Exposed API keys",
    desc: "Stripe secrets, OpenAI keys, and Supabase tokens shipped inside client bundles — readable from DevTools.",
  },
  {
    cat: "Auth",
    title: "Unprotected admin routes",
    desc: "/admin, /api/admin, dashboard routes returning 200 to anonymous requests. No middleware in front.",
  },
  {
    cat: "Payments",
    title: "Unverified Stripe webhooks",
    desc: "Webhook handlers skipping signature checks — anyone can forge events and unlock paid features.",
  },
  {
    cat: "Supply chain",
    title: "Supply chain attacks",
    desc: "Dependency confusion, typosquatting, compromised npm packages flagged before they ship to production.",
  },
  {
    cat: "AI cost",
    title: "Unbounded model calls",
    desc: "Public AI routes with no rate limits, no auth. One bored visitor drains $50/day in OpenAI usage.",
  },
  {
    cat: "Infra",
    title: "Supabase tables wide open",
    desc: "Missing or permissive RLS policies — any signed-in user can read or mutate other users' rows.",
  },
  {
    cat: "Compliance",
    title: "Compliance gaps",
    desc: "PCI-DSS, GDPR, SOC2, DPDP — find what blocks enterprise sales before legal does.",
  },
  {
    cat: "Legal",
    title: "No privacy policy",
    desc: "Missing privacy, terms, cookie banner — blocks Stripe verification and breaks GDPR/DPDP.",
  },
]

export function Problems() {
  return (
    <section id="catch" className="border-b border-line/60">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal className="max-w-2xl" as="header">
          <div className="font-mono text-[11px] uppercase tracking-widemono text-accent">
            What we catch
          </div>
          <h2 className="mt-4 text-h2 text-ink-primary">
            Issues we find in 9 out of 10 vibe-coded apps.
          </h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-ink-secondary">
            We scanned 2,700+ apps shipped from Claude Code, Cursor, Antigravity, Lovable, Bolt,
            and v0. These show up over and over.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 border-t border-line sm:grid-cols-2">
          {items.map((it, i) => (
            <Reveal
              key={it.title}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className={`group flex items-start gap-6 border-b border-line px-2 py-7 transition-colors hover:bg-surface/60 sm:px-6 ${
                i % 2 === 0 ? "sm:border-r" : ""
              }`}
            >
              <div className="w-20 shrink-0 pt-1 font-mono text-[11px] uppercase tracking-widemono text-ink-tertiary transition-colors group-hover:text-accent">
                {it.cat}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-[16px] font-medium tracking-tightish text-ink-primary">
                  {it.title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-[1.6] text-ink-secondary">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a
            href="#waitlist"
            className="btn-glow inline-flex h-11 items-center rounded-[8px] bg-ink-primary px-5 text-[14px] font-medium text-bg"
          >
            Scan my app →
          </a>
        </Reveal>
      </div>
    </section>
  )
}
