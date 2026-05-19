"use client"

import { Reveal } from "./reveal"
import { TypingTerminal, TermLine } from "./typing-terminal"
import { AnimatedScore } from "./animated-score"
import { TypingPrompt } from "./typing-prompt"

const steps = [
  {
    num: "01",
    eyebrow: "Scan",
    title: "Point it at your URL.",
    desc: "Any deployed app — Vercel, Netlify, Railway. We fingerprint your stack and walk the surface like an attacker would.",
    visual: "scan" as const,
  },
  {
    num: "02",
    eyebrow: "Exploit",
    title: "Replay the attack live.",
    desc: "See the exact HTTP request that breaks your app. No theoretical CVEs — a real curl that succeeds, or it doesn't ship as a finding.",
    visual: "exploit" as const,
  },
  {
    num: "03",
    eyebrow: "Score",
    title: "Get a Vibe Score in 30 seconds.",
    desc: "17 categories, 100+ checks. Each finding is severity-tagged and linked to the exact file or route it lives in.",
    visual: "score" as const,
  },
  {
    num: "04",
    eyebrow: "Fix",
    title: "Paste prompts into Cursor.",
    desc: "Every finding has a paste-ready prompt for Cursor, Claude Code, Windsurf. Or use the MCP server and skip the copy-paste entirely.",
    visual: "prompt" as const,
  },
]

export function HowItWorks() {
  return (
    <section id="flow" className="border-b border-line/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 md:py-32">
        <Reveal as="header" className="max-w-2xl">
          <div className="font-mono text-[11px] uppercase tracking-widemono text-accent">
            How it works
          </div>
          <h2 className="mt-4 text-h2 text-ink-primary">
            From URL to fix prompts in under a minute.
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-16">
          {steps.map((s) => (
            <article
              key={s.num}
              className="grid grid-cols-1 gap-10 border-t border-line pt-10 sm:grid-cols-12 sm:gap-12"
            >
              <Reveal delay={1} className="sm:col-span-5">
                <div className="font-mono text-[12px] text-ink-tertiary">{s.num}</div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-widemono text-accent">
                  {s.eyebrow}
                </div>
                <h3 className="mt-3 text-[26px] font-medium tracking-tighter2 text-ink-primary">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-[1.6] text-ink-secondary">
                  {s.desc}
                </p>
              </Reveal>

              <Reveal delay={2} className="sm:col-span-7">
                <StepVisual kind={s.visual} />
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function StepVisual({ kind }: { kind: "scan" | "exploit" | "score" | "prompt" }) {
  if (kind === "scan") {
    const lines: TermLine[] = [
      { c: "text-ink-tertiary", t: "$ deploysafe scan https://my-app.vercel.app", pause: 320 },
      { c: "text-ink-secondary", t: "→ Resolving DNS · OK", pause: 220 },
      { c: "text-ink-secondary", t: "→ Framework: Next.js 14 (App Router)", pause: 240 },
      { c: "text-ink-secondary", t: "→ Stack: Supabase · Stripe · OpenAI", pause: 280 },
      { c: "text-ink-secondary", t: "→ Crawling 24 routes…", pause: 400 },
      { c: "text-ink-secondary", t: "→ Inspecting client bundles…", pause: 480 },
      { c: "text-success", t: "✓ Surface mapped in 6.4s", pause: 900 },
    ]
    return <TypingTerminal title="scan" lines={lines} loop restartDelay={3200} shadow={false} />
  }

  if (kind === "exploit") {
    const lines: TermLine[] = [
      { c: "text-ink-tertiary", t: "$ deploysafe replay critical-1", pause: 280 },
      { c: "text-ink-secondary", t: "→ Crafting POST /api/webhooks/stripe", pause: 260 },
      { c: "text-ink-secondary", t: "→ Body: forged checkout.session.completed", pause: 280 },
      { c: "text-ink-secondary", t: "→ Header: stripe-signature: <missing>", pause: 240 },
      { c: "text-success", t: "← HTTP 200 OK", pause: 240 },
      { c: "text-warn", t: "🚨 Forged event accepted — plan upgraded without payment.", pause: 800 },
    ]
    return <TypingTerminal title="exploit" lines={lines} loop restartDelay={3000} shadow={false} />
  }

  if (kind === "score") {
    return <AnimatedScore />
  }

  return <TypingPrompt />
}
