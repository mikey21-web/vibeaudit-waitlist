"use client"

import { useState } from "react"
import { WaitlistForm } from "./waitlist-form"
import { RotatingWord } from "./rotating-word"
import { LiveTicker } from "./live-ticker"
import { LaunchCountdown } from "./launch-countdown"
import { WaitlistCounter } from "./waitlist-counter"

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

      <div className="relative mx-auto max-w-3xl px-4 pt-20 pb-20 sm:px-6 sm:pt-28 sm:pb-24 md:pt-36 md:pb-32">
        <div className="reveal show flex justify-center">
          <LaunchCountdown variant="badge" />
        </div>

        <h1 className="reveal reveal-d1 show mt-6 text-center text-[34px] font-medium leading-[1.05] tracking-tighter2 text-ink-primary sm:mt-8 sm:text-[44px] md:text-[60px] lg:text-[68px]">
          Ship vibe-coded apps
          <br />
          without the{" "}
          <span className="text-accent">
            <RotatingWord
              words={["breach.", "bypass.", "leak.", "exploit.", "lawsuit."]}
            />
          </span>
        </h1>

        <p className="reveal reveal-d2 show mx-auto mt-5 max-w-xl text-center text-[14.5px] leading-[1.55] text-ink-secondary sm:mt-6 sm:text-[16px] md:text-[17px]">
          DeploySafe scans, exploits, and fixes apps shipped from Claude Code, Cursor, Antigravity,
          Lovable, Bolt, and v0. We find the vulnerabilities, replay the exploits live so you see
          them happen, then write the fix prompts for you.
        </p>

        <div className="reveal reveal-d3 show mx-auto mt-8 max-w-xl sm:mt-10">
          {joined ? (
            <SuccessCard />
          ) : (
            <>
              <WaitlistForm onSuccess={() => setJoined(true)} size="lg" />
              <p className="mt-3 text-center text-[12px] text-ink-tertiary">
                No spam. One email when access opens.
              </p>
              <p className="mt-4 text-center text-[12.5px] italic leading-[1.55] text-ink-tertiary">
                Built by Uday after watching 4 friends ship Stripe secrets in 2 weeks.
              </p>
            </>
          )}
        </div>

        <div className="reveal reveal-d4 show mt-8">
          <WaitlistCounter />
        </div>

        <div className="reveal reveal-d5 show mt-6 flex justify-center">
          <LiveTicker />
        </div>

        <div className="reveal reveal-d6 show mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-ink-tertiary">
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
