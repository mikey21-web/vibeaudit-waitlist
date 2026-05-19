"use client"

import { useEffect, useState } from "react"

const FALLBACK_LAUNCH = "2026-06-02T16:00:00Z"

function getLaunchDate(): Date {
  const env = process.env.NEXT_PUBLIC_LAUNCH_DATE
  const parsed = env ? new Date(env) : new Date(FALLBACK_LAUNCH)
  return isNaN(parsed.getTime()) ? new Date(FALLBACK_LAUNCH) : parsed
}

interface Parts {
  d: number
  h: number
  m: number
  s: number
  over: boolean
}

function diff(target: Date): Parts {
  const ms = target.getTime() - Date.now()
  if (ms <= 0) return { d: 0, h: 0, m: 0, s: 0, over: true }
  const d = Math.floor(ms / 86400000)
  const h = Math.floor((ms % 86400000) / 3600000)
  const m = Math.floor((ms % 3600000) / 60000)
  const s = Math.floor((ms % 60000) / 1000)
  return { d, h, m, s, over: false }
}

function pad(n: number) {
  return n.toString().padStart(2, "0")
}

interface Props {
  variant?: "badge" | "block"
  className?: string
}

export function LaunchCountdown({ variant = "badge", className = "" }: Props) {
  const [mounted, setMounted] = useState(false)
  const [target] = useState(getLaunchDate)
  const [parts, setParts] = useState<Parts>(() => diff(target))

  useEffect(() => {
    setMounted(true)
    setParts(diff(target))
    const t = setInterval(() => setParts(diff(target)), 1000)
    return () => clearInterval(t)
  }, [target])

  if (!mounted) {
    return variant === "badge" ? (
      <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1 backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="font-mono text-[11px] uppercase tracking-widemono text-ink-secondary">
          Private beta · accepting waitlist
        </span>
      </div>
    ) : null
  }

  if (parts.over) {
    return (
      <a
        href="#waitlist"
        className={`inline-flex items-center gap-2 rounded-full border border-success/40 bg-success/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widemono text-success ${className}`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-success" />
        🚀 Now live — get access →
      </a>
    )
  }

  if (variant === "badge") {
    return (
      <div
        className={`inline-flex items-center gap-2 rounded-full border border-success/40 bg-success/10 px-3 py-1 backdrop-blur ${className}`}
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-widemono text-success">
          Public launch in
        </span>
        <span className="font-mono text-[11px] uppercase tracking-widemono text-ink-primary tabular-nums">
          {parts.d}d : {pad(parts.h)}h : {pad(parts.m)}m : {pad(parts.s)}s
        </span>
      </div>
    )
  }

  const cells: [string, number][] = [
    ["Days", parts.d],
    ["Hours", parts.h],
    ["Mins", parts.m],
    ["Secs", parts.s],
  ]
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {cells.map(([label, val], i) => (
        <div key={label} className="flex items-center gap-3">
          <div className="text-center">
            <div className="text-[28px] font-medium leading-none text-ink-primary tabular-nums">
              {pad(val)}
            </div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-widemono text-ink-tertiary">
              {label}
            </div>
          </div>
          {i < cells.length - 1 && (
            <span className="text-[28px] leading-none text-ink-tertiary">:</span>
          )}
        </div>
      ))}
    </div>
  )
}
