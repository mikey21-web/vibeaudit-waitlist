"use client"

import dynamic from "next/dynamic"
import { useState } from "react"
import { WaitlistForm } from "./waitlist-form"
import { RotatingWord } from "./rotating-word"
import { LaunchCountdown } from "./launch-countdown"
import { WaitlistCounter } from "./waitlist-counter"
import { InlineScan } from "./inline-scan"

const HeroAttackTerminal = dynamic(
  () => import("./hero-attack-terminal").then((m) => m.HeroAttackTerminal),
  {
    ssr: false,
    loading: () => (
      <div className="relative">
        <div className="mb-3 h-3 w-44 rounded bg-surface" />
        <div className="overflow-hidden rounded-[12px] border border-warn/20 bg-surface">
          <div className="border-b border-line bg-elevated px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#EB5757]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#E2B341]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#4CB782]" />
              <span className="ml-2 font-mono text-[11px] text-ink-tertiary">
                deploysafe ▸ live attack
              </span>
            </div>
          </div>
          <div className="min-h-[280px]" />
        </div>
      </div>
    ),
  }
)

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

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="reveal show">
              <LaunchCountdown variant="badge" />
            </div>

            <h1 className="reveal reveal-d1 show mt-7 text-[40px] font-medium leading-[1.04] tracking-tighter2 text-ink-primary sm:text-[60px] lg:text-[64px]">
              Ship vibe-coded apps
              <br />
              without the{" "}
              <span className="text-accent">
                <RotatingWord
                  words={["breach.", "bypass.", "leak.", "exploit.", "lawsuit."]}
                />
              </span>
            </h1>

            <p className="reveal reveal-d2 show mt-5 max-w-xl text-[15px] leading-[1.55] text-ink-secondary sm:text-[16px]">
              DeploySafe scans, exploits, and fixes apps shipped from Claude Code, Cursor,
              Antigravity, Lovable, Bolt, and v0. We find the vulnerabilities, replay the exploits
              live so you see them happen, then write the fix prompts for you.
            </p>

            <div className="reveal reveal-d3 show mt-8 max-w-xl">
              {joined ? (
                <SuccessCard />
              ) : (
                <>
                  <WaitlistForm onSuccess={() => setJoined(true)} size="lg" />
                  <p className="mt-3 text-[12px] text-ink-tertiary">
                    No spam. One email when access opens.
                  </p>
                  <InlineScan />
                </>
              )}
            </div>

            <div className="reveal reveal-d4 show mt-7 max-w-xl">
              <WaitlistCounter className="text-left" showLast />
            </div>

            <div className="reveal reveal-d5 show mt-5 flex max-w-xl flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-ink-tertiary">
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

          <div className="reveal reveal-d6 show lg:col-span-5">
            <HeroAttackTerminal />
          </div>
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
