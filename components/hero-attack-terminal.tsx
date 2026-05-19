"use client"

import { useEffect, useRef, useState } from "react"

interface Line {
  c: string
  t: string
}

interface Attack {
  label: string
  lines: Line[]
  succeed: string
}

const attacks: Attack[] = [
  {
    label: "jwt-none-bypass",
    succeed: "JWT alg:none bypass confirmed",
    lines: [
      { c: "text-ink-tertiary", t: "$ curl -X POST https://app.example.com/api/admin \\" },
      { c: "text-ink-tertiary", t: "    -H 'Authorization: Bearer <forged-jwt-alg-none>'" },
      { c: "text-ink-secondary", t: "→ JWT.header.alg = \"none\"" },
      { c: "text-ink-secondary", t: "→ Signature verification: skipped by server" },
      { c: "text-success", t: "← HTTP 200 OK" },
      { c: "text-ink-secondary", t: "← Body: { user: { role: \"admin\" } }" },
    ],
  },
  {
    label: "stripe-webhook-forgery",
    succeed: "Stripe webhook signature missing",
    lines: [
      { c: "text-ink-tertiary", t: "$ curl -X POST https://app.example.com/api/webhooks/stripe \\" },
      { c: "text-ink-tertiary", t: "    -d '{\"type\":\"checkout.session.completed\"}'" },
      { c: "text-ink-secondary", t: "→ Body: forged checkout.session.completed" },
      { c: "text-ink-secondary", t: "→ Header: stripe-signature: <missing>" },
      { c: "text-success", t: "← HTTP 200 OK" },
      { c: "text-ink-secondary", t: "← Body: { plan: \"pro\", status: \"active\" }" },
    ],
  },
  {
    label: "mass-assignment",
    succeed: "Mass assignment to admin role accepted",
    lines: [
      { c: "text-ink-tertiary", t: "$ curl -X PATCH https://app.example.com/api/users/me \\" },
      { c: "text-ink-tertiary", t: "    -d '{\"name\":\"u\",\"role\":\"admin\"}'" },
      { c: "text-ink-secondary", t: "→ Field whitelist: not enforced" },
      { c: "text-success", t: "← HTTP 200 OK" },
      { c: "text-ink-secondary", t: "← Body: { id: 42, role: \"admin\" }" },
    ],
  },
  {
    label: "graphql-introspection",
    succeed: "GraphQL introspection exposed in production",
    lines: [
      { c: "text-ink-tertiary", t: "$ curl -X POST https://app.example.com/graphql \\" },
      { c: "text-ink-tertiary", t: "    -d '{\"query\":\"{ __schema { types { name } } }\"}'" },
      { c: "text-ink-secondary", t: "→ Introspection: enabled" },
      { c: "text-success", t: "← HTTP 200 OK" },
      { c: "text-ink-secondary", t: "← 142 types · 38 mutations · 24 internal" },
    ],
  },
  {
    label: "subdomain-takeover",
    succeed: "Dangling CNAME — subdomain takeover possible",
    lines: [
      { c: "text-ink-tertiary", t: "$ dig blog.example.com" },
      { c: "text-ink-secondary", t: "→ CNAME blog.example.com → app-old.herokuapp.com" },
      { c: "text-ink-tertiary", t: "$ curl https://app-old.herokuapp.com" },
      { c: "text-warn", t: "← HTTP 404 — app deleted, name claimable" },
    ],
  },
]

const CHAR_DELAY = 18
const LINE_PAUSE = 180
const ATTACK_PAUSE = 1500
const FADE_MS = 320

export function HeroAttackTerminal() {
  const [attackIdx, setAttackIdx] = useState(0)
  const [rendered, setRendered] = useState<Line[]>([])
  const [partial, setPartial] = useState("")
  const [lineIdx, setLineIdx] = useState(0)
  const [succeeded, setSucceeded] = useState(false)
  const [visible, setVisible] = useState(true)
  const reducedRef = useRef(false)

  useEffect(() => {
    reducedRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  }, [])

  useEffect(() => {
    const attack = attacks[attackIdx]
    let timer: ReturnType<typeof setTimeout>

    if (lineIdx >= attack.lines.length) {
      timer = setTimeout(() => setSucceeded(true), 200)
      return () => clearTimeout(timer)
    }

    const line = attack.lines[lineIdx]
    if (partial.length < line.t.length) {
      const delay = reducedRef.current
        ? 0
        : CHAR_DELAY + Math.random() * CHAR_DELAY
      timer = setTimeout(() => {
        setPartial(line.t.slice(0, partial.length + 1))
      }, delay)
    } else {
      timer = setTimeout(() => {
        setRendered((prev) => [...prev, line])
        setPartial("")
        setLineIdx((i) => i + 1)
      }, LINE_PAUSE)
    }

    return () => clearTimeout(timer)
  }, [attackIdx, lineIdx, partial])

  useEffect(() => {
    if (!succeeded) return
    const t1 = setTimeout(() => setVisible(false), ATTACK_PAUSE)
    const t2 = setTimeout(() => {
      setRendered([])
      setPartial("")
      setLineIdx(0)
      setSucceeded(false)
      setAttackIdx((i) => (i + 1) % attacks.length)
      setVisible(true)
    }, ATTACK_PAUSE + FADE_MS)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [succeeded])

  const attack = attacks[attackIdx]

  return (
    <div className="relative h-full w-full">
      <div
        className="pointer-events-none absolute -inset-4 rounded-[24px] bg-warn/10 blur-2xl"
        aria-hidden
      />

      <div className="relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-[12px] border border-warn/20 bg-surface shadow-[0_40px_120px_-30px_rgba(235,87,87,0.35)] sm:min-h-[480px]">
        <div className="flex items-center justify-between border-b border-line bg-elevated px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#EB5757]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E2B341]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#4CB782]" />
            <span className="ml-2 font-mono text-[11px] text-ink-tertiary">
              deploysafe ▸ {attack.label}
            </span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widemono text-warn">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-warn" />
            live
          </div>
        </div>

        <pre
          className="m-0 flex-1 overflow-x-auto overscroll-contain p-3.5 font-mono text-[10.5px] leading-[1.65] transition-opacity sm:p-5 sm:text-[12.5px] sm:leading-[1.8]"
          style={{
            opacity: visible ? 1 : 0,
            transitionDuration: `${FADE_MS}ms`,
          }}
        >
          {rendered.map((l, i) => (
            <div key={`${attackIdx}-${i}`} className={l.c}>
              {l.t}
            </div>
          ))}
          {lineIdx < attack.lines.length && (
            <div className={attack.lines[lineIdx].c}>
              {partial}
              <span className="animate-blink text-ink-primary">▍</span>
            </div>
          )}
          {succeeded && (
            <div className="mt-1 font-medium text-warn">
              🚨 Attack succeeded — {attack.succeed}.
            </div>
          )}
        </pre>
      </div>
    </div>
  )
}
