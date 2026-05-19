"use client"

import { useState } from "react"
import { WaitlistForm } from "./waitlist-form"
import { RotatingWord } from "./rotating-word"
import { LiveTicker } from "./live-ticker"
import { TypingTerminal, TermLine } from "./typing-terminal"

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
              words={["breach.", "bypass.", "leak.", "exploit.", "lawsuit."]}
            />
          </span>
        </h1>

        <p className="reveal reveal-d2 show mx-auto mt-6 max-w-xl text-center text-[16px] leading-[1.55] text-ink-secondary sm:text-[17px]">
          DeploySafe scans, exploits, and fixes apps shipped from Claude Code, Cursor, Antigravity,
          Lovable, Bolt, and v0. We find the vulnerabilities, replay the exploits live so you see
          them happen, then write the fix prompts for you.
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

        <div className="reveal reveal-d4 show mt-8 flex justify-center">
          <LiveTicker />
        </div>

        <div className="reveal reveal-d5 show mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-ink-tertiary">
          <span className="flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-success" /> 30s scan
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-success" /> 17 categories
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
  const lines: TermLine[] = [
    { c: "text-ink-tertiary", t: "$ deploysafe scan https://my-app.vercel.app", pause: 280 },
    { c: "text-ink-secondary", t: "→ Detecting framework: Next.js 14 + Supabase + Stripe", pause: 240 },
    { c: "text-ink-secondary", t: "→ Scanning JS bundles for secrets…", pause: 320 },
    { c: "text-ink-secondary", t: "→ Running active pentest probes…", pause: 420 },
    { c: "text-warn", t: "  CRITICAL  Stripe webhook signature missing", pause: 280 },
    { c: "text-warn", t: "  [Replay Attack ▶]", pause: 360 },
    { c: "text-ink-tertiary", t: "  → POST /api/webhooks/stripe", pause: 200 },
    { c: "text-ink-tertiary", t: "  → Body: { type: \"checkout.session.completed\", … }", pause: 200 },
    { c: "text-success", t: "  ← HTTP 200 OK", pause: 240 },
    { c: "text-warn", t: "  🚨 Forged event accepted — paid plan unlocked.", pause: 480 },
    { c: "text-accent", t: "✓ Fix prompt ready. Paste into Cursor.", pause: 800 },
  ]
  return (
    <div className="reveal reveal-d6 show">
      <TypingTerminal lines={lines} loop restartDelay={2800} />
    </div>
  )
}
