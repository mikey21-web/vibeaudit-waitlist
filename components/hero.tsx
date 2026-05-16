"use client"

import { useState } from "react"
import { WaitlistForm } from "./waitlist-form"

export function Hero() {
  const [joined, setJoined] = useState(false)

  return (
    <section id="waitlist" className="relative overflow-hidden border-b border-line/60">
      <div className="absolute inset-0 hairline-grid" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 accent-glow" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 sm:pt-32 sm:pb-36">
        <div className="mx-auto max-w-2xl text-center">
          <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(94,106,210,0.8)]" />
            <span className="font-mono text-[11px] uppercase tracking-widemono text-ink-secondary">
              Now in private beta
            </span>
          </div>

          <h1 className="animate-fade-up mt-7 text-display-sm sm:text-display text-ink-primary">
            Ship vibe-coded apps
            <br />
            <span className="text-ink-secondary">without the leaks.</span>
          </h1>

          <p className="animate-fade-up mt-6 text-[16px] leading-[1.55] text-ink-secondary [animation-delay:80ms]">
            VibeAudit scans apps built with Cursor, Lovable, Bolt, and v0 for exposed API keys,
            missing auth, and 100+ launch-blocking issues — then writes the fix prompts for you.
          </p>

          <div className="animate-fade-up mx-auto mt-9 max-w-md [animation-delay:160ms]">
            {joined ? (
              <div className="rounded-[8px] border border-line bg-surface p-5 text-left">
                <div className="font-mono text-[11px] uppercase tracking-widemono text-accent">
                  Confirmed
                </div>
                <p className="mt-2 text-[14px] text-ink-primary">
                  You&apos;re on the list. We&apos;ll email you when access opens.
                </p>
              </div>
            ) : (
              <WaitlistForm onSuccess={() => setJoined(true)} />
            )}
          </div>

          <div className="animate-fade-up mt-6 flex items-center justify-center gap-2 [animation-delay:240ms]">
            <div className="flex -space-x-1.5">
              {["#3F4147", "#5E6AD2", "#4CB782", "#EB5757"].map((c) => (
                <span
                  key={c}
                  className="h-5 w-5 rounded-full border border-bg"
                  style={{ background: c }}
                />
              ))}
            </div>
            <span className="text-[12px] text-ink-tertiary">
              2,400+ developers on the waitlist
            </span>
          </div>
        </div>

        <TerminalPreview />
      </div>
    </section>
  )
}

function TerminalPreview() {
  const lines: { c: string; t: string }[] = [
    { c: "text-ink-tertiary", t: "$ vibeaudit scan https://my-app.vercel.app" },
    { c: "text-ink-secondary", t: "→ Detecting framework: Next.js 14 + Supabase + Stripe" },
    { c: "text-ink-secondary", t: "→ Scanning JS bundles for secrets…" },
    { c: "text-warn", t: "  CRITICAL  Stripe secret key in client bundle" },
    { c: "text-[#E2B341]", t: "  HIGH      No Content-Security-Policy header" },
    { c: "text-ink-secondary", t: "  MEDIUM    Missing OG meta tags (3 pages)" },
    { c: "text-success", t: "  PASS      HTTPS enforced" },
    { c: "text-ink-primary", t: "  Score 42 / 100 · 1 critical · 4 high · 7 medium" },
    { c: "text-accent", t: "✓ Fix prompts ready. Paste into Cursor." },
  ]
  return (
    <div className="animate-fade-up mx-auto mt-20 max-w-4xl [animation-delay:320ms]">
      <div className="overflow-hidden rounded-[10px] border border-line bg-surface shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-2 border-b border-line bg-elevated px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#3F4147]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3F4147]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3F4147]" />
          <span className="ml-2 font-mono text-[11px] text-ink-tertiary">
            ~/projects/my-app — vibeaudit
          </span>
        </div>
        <pre className="m-0 p-5 font-mono text-[12.5px] leading-[1.75]">
          {lines.map((l, i) => (
            <div key={i} className={l.c}>
              {l.t}
            </div>
          ))}
          <div className="text-ink-primary">
            $ <span className="animate-blink">▍</span>
          </div>
        </pre>
      </div>
    </div>
  )
}
