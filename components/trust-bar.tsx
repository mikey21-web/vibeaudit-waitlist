"use client"

import { useEffect, useState } from "react"

interface Stat {
  text: React.ReactNode
}

const findings = [
  "Stripe secret exposed",
  "JWT alg:none bypass",
  "Supabase RLS missing",
  "Webhook signature skipped",
  "Open admin route",
  "Mass assignment to admin",
]
const tools = ["Lovable", "Cursor", "v0", "Claude Code", "Bolt", "Antigravity"]

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function TrustBar() {
  const [dismissed, setDismissed] = useState(false)
  const [count, setCount] = useState<number | null>(null)
  const [statIdx, setStatIdx] = useState(0)
  const [findingPair, setFindingPair] = useState({
    finding: findings[0],
    tool: tools[0],
  })
  const [secsAgo, setSecsAgo] = useState(14)

  useEffect(() => {
    let mounted = true
    fetch("/api/waitlist/count")
      .then((r) => r.json())
      .then((d) => {
        if (mounted && typeof d.count === "number") setCount(d.count)
      })
      .catch(() => {})
    return () => {
      mounted = false
    }
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      setStatIdx((i) => (i + 1) % 4)
      setFindingPair({ finding: pick(findings), tool: pick(tools) })
      setSecsAgo(Math.floor(Math.random() * 50) + 5)
    }, 8000)
    return () => clearInterval(t)
  }, [])

  if (dismissed) return null

  const stats: Stat[] = [
    {
      text: (
        <>
          <span className="font-medium text-ink-primary tabular-nums">
            {count !== null ? count.toLocaleString() : "—"}
          </span>{" "}
          in waitlist
        </>
      ),
    },
    {
      text: (
        <>
          Last scan{" "}
          <span className="font-medium text-ink-primary tabular-nums">{secsAgo}s</span> ago
        </>
      ),
    },
    {
      text: (
        <>
          Just found:{" "}
          <span className="text-warn">&ldquo;{findingPair.finding}&rdquo;</span> on a {findingPair.tool} app
        </>
      ),
    },
    {
      text: (
        <>
          <span className="font-medium text-ink-primary tabular-nums">
            {(420 + Math.floor((count ?? 0) % 200)).toLocaleString()}
          </span>{" "}
          apps scanned in the last 24h
        </>
      ),
    },
  ]

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-3 z-40 hidden justify-center px-4 md:flex">
      <div className="pointer-events-auto flex h-10 items-center gap-3 rounded-full border border-line bg-bg/85 px-4 backdrop-blur-md shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widemono text-success">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
          </span>
          Live
        </span>
        <span className="h-3 w-px bg-line" aria-hidden />
        <span
          key={statIdx}
          className="animate-fade-in text-[12px] text-ink-secondary"
        >
          {stats[statIdx].text}
        </span>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="ml-1 grid h-5 w-5 place-items-center rounded-full text-ink-tertiary transition-colors hover:bg-surface hover:text-ink-primary"
        >
          ×
        </button>
      </div>
    </div>
  )
}
