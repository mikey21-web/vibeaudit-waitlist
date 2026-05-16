"use client"

import { useEffect, useState } from "react"

interface Event {
  pos: number
  at: number
}

const START_POS = 2412
const TICK_MIN = 7000
const TICK_MAX = 14000

function relTime(ms: number): string {
  const s = Math.max(1, Math.floor((Date.now() - ms) / 1000))
  if (s < 5) return "just now"
  if (s < 60) return `${s}s ago`
  const m = Math.floor(s / 60)
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  return `${h}h ago`
}

export function LiveTicker() {
  const [latest, setLatest] = useState<Event | null>(null)
  const [, force] = useState(0)

  useEffect(() => {
    const now = Date.now()
    setLatest({ pos: START_POS + 2, at: now - 4_000 })

    let timer: ReturnType<typeof setTimeout>
    const schedule = () => {
      const delay = TICK_MIN + Math.random() * (TICK_MAX - TICK_MIN)
      timer = setTimeout(() => {
        setLatest((prev) => ({
          pos: (prev?.pos ?? START_POS) + 1,
          at: Date.now(),
        }))
        schedule()
      }, delay)
    }
    schedule()

    const tick = setInterval(() => force((n) => n + 1), 5000)

    return () => {
      clearTimeout(timer)
      clearInterval(tick)
    }
  }, [])

  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 backdrop-blur">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
      </span>
      <div className="font-mono text-[12px] leading-tight text-ink-secondary">
        {latest ? (
          <>
            <span key={latest.pos} className="text-ink-primary animate-fade-in">
              Spot #{latest.pos.toLocaleString()}
            </span>{" "}
            <span>reserved</span>{" "}
            <span className="text-ink-tertiary">· {relTime(latest.at)}</span>
          </>
        ) : (
          <span className="text-ink-tertiary">connecting…</span>
        )}
      </div>
    </div>
  )
}
