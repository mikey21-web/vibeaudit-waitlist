"use client"

import { useState } from "react"
import { WaitlistForm, WaitlistResult } from "./waitlist-form"
import { SuccessCard } from "./success-card"

export function Hero() {
  const [result, setResult] = useState<WaitlistResult | null>(null)

  return (
    <section id="waitlist" className="relative overflow-hidden border-b border-line/60">
      <div className="absolute inset-0 hairline-grid" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-[-40px] h-[460px] w-[860px] accent-glow"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[260px] h-[520px] w-[1000px] accent-glow-2"
        aria-hidden
      />

      <div className="relative mx-auto max-w-2xl px-6 pb-20 pt-20 sm:pb-28 sm:pt-28">
        <div className="reveal show flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(94,106,210,0.8)]" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widemono text-ink-secondary">
              Private beta
            </span>
          </div>
        </div>

        <h1 className="reveal reveal-d1 show mt-6 text-center text-[36px] font-medium leading-[1.05] tracking-tighter2 text-ink-primary sm:mt-7 sm:text-[56px]">
          Your Cursor app is leaking.
          <br />
          <span className="text-ink-secondary">Find out where.</span>
        </h1>

        <p className="reveal reveal-d2 show mx-auto mt-5 max-w-lg text-center text-[15px] leading-[1.55] text-ink-secondary sm:text-[16px]">
          VibeAudit scans apps built with Cursor, Lovable, Bolt, and v0 for exposed keys, broken
          auth, and 100+ launch-blocking issues — and writes the fix prompts.
        </p>

        <div className="reveal reveal-d3 show mx-auto mt-8 max-w-md">
          {result ? (
            <SuccessCard
              position={result.position}
              shareUrl={result.shareUrl}
              alreadyJoined={result.alreadyJoined}
            />
          ) : (
            <>
              <WaitlistForm onSuccess={(r) => setResult(r)} size="lg" />
              <p className="mt-3 text-center text-[12px] text-ink-tertiary">
                No spam. One email when access opens. First 500 lock in 50% off.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
