"use client"

import { useState } from "react"
import { WaitlistForm } from "./waitlist-form"
import { RotatingWord } from "./rotating-word"
import { AnimatedCount } from "./animated-count"

export function Hero() {
  const [joined, setJoined] = useState(false)

  return (
    <section id="waitlist" className="relative overflow-hidden border-b border-line/60">
      <div className="absolute inset-0 hairline-grid" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-[-40px] h-[460px] w-[860px] accent-glow"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[280px] h-[520px] w-[1000px] accent-glow-2"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-6 pt-28 pb-24 sm:pt-36 sm:pb-32">
        <div className="reveal show text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(94,106,210,0.8)]" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widemono text-ink-secondary">
              Private beta · accepting waitlist
            </span>
          </div>
        </div>

        <h1 className="reveal reveal-d1 show mt-8 text-center text-[44px] font-medium leading-[1.04] tracking-tighter2 text-ink-primary sm:text-[68px]">
          Ship vibe-coded apps
          <br />
          without the{" "}
          <span className="text-accent">
            <RotatingWord
              words={["leaks.", "bugs.", "lawsuits.", "downtime.", "regrets."]}
            />
          </span>
        </h1>

        <p className="reveal reveal-d2 show mx-auto mt-6 max-w-xl text-center text-[16px] leading-[1.55] text-ink-secondary sm:text-[17px]">
          VibeAudit scans apps shipped from Claude Code, Cursor, Antigravity, Lovable, Bolt, and v0
          for exposed API keys, broken auth, and 100+ launch-blocking issues — then writes the fix
          prompts for you.
        </p>

        <div className="reveal reveal-d3 show mx-auto mt-10 max-w-xl">
          {joined ? (
            <SuccessCard />
          ) : (
            <>
              <WaitlistForm onSuccess={() => setJoined(true)} size="lg" />
              <p className="mt-3 text-center text-[12px] text-ink-tertiary">
                No spam. One email when access opens.
              </p>
            </>
          )}
        </div>

        <div className="reveal reveal-d4 show mt-8 flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {["#3F4147", "#5E6AD2", "#4CB782", "#EB5757", "#E2B341"].map((c, i) => (
              <span
                key={c}
                className="avatar-pop h-6 w-6 rounded-full border-2 border-bg"
                style={{ background: c, animationDelay: `${500 + i * 80}ms` }}
              />
            ))}
          </div>
          <span className="text-[13px] text-ink-secondary">
            <AnimatedCount to={2418} className="font-medium text-ink-primary" />
            <span> developers waiting</span>
          </span>
        </div>

        <div className="reveal reveal-d5 show mt-4 flex items-center justify-center gap-6 text-[11px] text-ink-tertiary">
          <span className="flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-success" /> 30s scan
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-success" /> 100+ checks
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-success" /> 50% off for first 500
          </span>
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 pb-24">
        <TerminalPreview />
      </div>
    </section>
  )
}

function SuccessCard() {
  return (
    <div className="reveal show rounded-[10px] border border-accent/40 bg-accent/10 p-5 text-left">
      <div className="flex items-center gap-2">
        <span className="grid h-5 w-5 place-items-center rounded-full bg-accent text-[12px] text-white">
          ✓
        </span>
        <div className="font-mono text-[11px] uppercase tracking-widemono text-accent">
          Confirmed
        </div>
      </div>
      <p className="mt-2 text-[15px] text-ink-primary">
        You&apos;re on the list. We&apos;ll email you when access opens.
      </p>
    </div>
  )
}

function TerminalPreview() {
  const lines: { c: string; t: string; delay: number }[] = [
    { c: "text-ink-tertiary", t: "$ vibeaudit scan https://my-app.vercel.app", delay: 0 },
    { c: "text-ink-secondary", t: "→ Detecting framework: Next.js 14 + Supabase + Stripe", delay: 240 },
    { c: "text-ink-secondary", t: "→ Scanning JS bundles for secrets…", delay: 460 },
    { c: "text-warn", t: "  CRITICAL  Stripe secret key in client bundle", delay: 680 },
    { c: "text-[#E2B341]", t: "  HIGH      No Content-Security-Policy header", delay: 860 },
    { c: "text-ink-secondary", t: "  MEDIUM    Missing OG meta tags (3 pages)", delay: 1040 },
    { c: "text-success", t: "  PASS      HTTPS enforced", delay: 1220 },
    { c: "text-ink-primary", t: "  Score 42 / 100 · 1 critical · 4 high · 7 medium", delay: 1440 },
    { c: "text-accent", t: "✓ Fix prompts ready. Paste into Cursor.", delay: 1680 },
  ]
  return (
    <div className="reveal reveal-d6 show overflow-hidden rounded-[12px] border border-line bg-surface shadow-[0_40px_120px_-30px_rgba(94,106,210,0.35)]">
      <div className="flex items-center gap-2 border-b border-line bg-elevated px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#EB5757]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E2B341]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4CB782]" />
        <span className="ml-2 font-mono text-[11px] text-ink-tertiary">
          ~/projects/my-app — vibeaudit
        </span>
      </div>
      <pre className="m-0 p-5 font-mono text-[12.5px] leading-[1.8]">
        {lines.map((l, i) => (
          <div key={i} className={`term-line ${l.c}`} style={{ animationDelay: `${l.delay}ms` }}>
            {l.t}
          </div>
        ))}
        <div className="text-ink-primary" style={{ animationDelay: `1900ms` }}>
          $ <span className="animate-blink">▍</span>
        </div>
      </pre>
    </div>
  )
}
