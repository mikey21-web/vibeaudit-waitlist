"use client"

import { Reveal } from "./reveal"
import { TypingTerminal, TermLine } from "./typing-terminal"

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
  const lines: TermLine[] = [
    { c: "text-ink-tertiary", t: "$ curl -X POST https://my-app.vercel.app/api/admin \\", pause: 220 },
    { c: "text-ink-tertiary", t: "    -H 'Authorization: Bearer <forged-jwt-alg-none>'", pause: 260 },
    { c: "text-ink-secondary", t: "→ JWT.header.alg = \"none\"", pause: 220 },
    { c: "text-ink-secondary", t: "→ Signature verification: skipped by server", pause: 320 },
    { c: "text-success", t: "← HTTP 200 OK", pause: 280 },
    { c: "text-ink-secondary", t: "← Body: { user: { id: 1, role: \"admin\" } }", pause: 360 },
    { c: "text-warn", t: "🚨 Attack succeeded — JWT alg:none bypass confirmed.", pause: 800 },
  ]

  return (
    <section
      id="attack-replay"
      className="relative border-b border-line/60 bg-bg"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-warn/40 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
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

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal delay={1} className="lg:col-span-7">
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-4 rounded-[24px] bg-warn/10 blur-2xl"
                aria-hidden
              />
              <div className="relative">
                <TypingTerminal
                  title="attack-replay ▸ jwt-none-bypass"
                  lines={lines}
                  loop
                  restartDelay={2600}
                  shadow
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={2} className="lg:col-span-5">
            <div className="font-mono text-[11px] uppercase tracking-widemono text-ink-tertiary">
              Real attacks we replay
            </div>
            <ul className="mt-4 grid grid-cols-1 gap-x-4 gap-y-2">
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

            <div className="mt-8 rounded-[10px] border border-warn/30 bg-warn/[0.05] p-5">
              <p className="text-[13px] leading-[1.55] text-ink-secondary">
                <span className="font-medium text-ink-primary">Read-only on the surface.</span>{" "}
                Probes are crafted to fail safely — they either succeed (proving the bug) or get
                rejected. Zero writes. Zero destructive ops.
              </p>
            </div>

            <a
              href="#waitlist"
              className="btn-glow mt-6 inline-flex h-11 items-center rounded-[8px] bg-ink-primary px-5 text-[13px] font-medium text-bg"
            >
              Replay this attack on YOUR app →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
