"use client"

import dynamic from "next/dynamic"
import { Reveal } from "./reveal"

const HeroAttackTerminal = dynamic(
  () => import("./hero-attack-terminal").then((m) => m.HeroAttackTerminal),
  {
    ssr: false,
    loading: () => (
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
        <div className="min-h-[360px]" />
      </div>
    ),
  }
)

const attacks = [
  "JWT alg:none authentication bypass",
  "Stripe webhook forgery",
  "Mass assignment to admin role",
  "GraphQL introspection in production",
  "Subdomain takeover detection",
  "CORS Origin reflection",
  "Cache poisoning of authenticated routes",
  "Login user enumeration via timing",
]

export function AttackReplay() {
  return (
    <section
      id="attack-replay"
      className="relative border-b border-line/60 bg-bg"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-warn/40 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 md:py-32">
        <Reveal as="header" className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widemono text-warn">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-warn opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-warn" />
            </span>
            Live attack replay · industry first
          </div>
          <h2 className="mt-4 text-h2 text-ink-primary">
            We don&apos;t just tell you. We show you.
          </h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-ink-secondary">
            Every critical finding ships with a working proof — the exact HTTP request that breaks
            your app. Hit replay. Watch the attack happen against your own URL. No vague warnings.
            No CVE numbers without context. Just receipts.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          <Reveal delay={1} className="flex lg:col-span-7">
            <div className="w-full">
              <HeroAttackTerminal />
            </div>
          </Reveal>

          <Reveal delay={2} className="flex lg:col-span-5">
            <div className="flex w-full flex-col rounded-[12px] border border-line bg-surface/40 p-7">
              <div className="font-mono text-[11px] uppercase tracking-widemono text-ink-tertiary">
                Real attacks we replay
              </div>
              <ul className="mt-4 flex-1 space-y-2.5">
                {attacks.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-2.5 text-[14px] leading-[1.55] text-ink-secondary"
                  >
                    <span className="mt-[3px] grid h-4 w-4 shrink-0 place-items-center rounded-full bg-warn/15 text-[10px] text-warn">
                      ✕
                    </span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-[10px] border border-warn/30 bg-warn/[0.05] p-4">
                <p className="text-[13px] leading-[1.55] text-ink-secondary">
                  <span className="font-medium text-ink-primary">
                    Read-only on the surface.
                  </span>{" "}
                  Probes fail safely — succeed (proving the bug) or get rejected. Zero
                  writes. Zero destructive ops.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 flex justify-center">
          <a
            href="#waitlist"
            className="btn-glow inline-flex h-11 items-center rounded-[8px] bg-ink-primary px-5 text-[13px] font-medium text-bg"
          >
            Replay this attack on YOUR app →
          </a>
        </Reveal>
      </div>
    </section>
  )
}
