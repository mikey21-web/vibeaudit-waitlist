"use client"

import { useEffect, useRef, useState } from "react"

interface Bar {
  label: string
  pct: number
  color: string
}

const BARS: Bar[] = [
  { label: "Security", pct: 32, color: "bg-warn" },
  { label: "Auth", pct: 58, color: "bg-[#E2B341]" },
  { label: "Payments", pct: 24, color: "bg-warn" },
  { label: "AI cost", pct: 71, color: "bg-[#E2B341]" },
  { label: "Legal", pct: 80, color: "bg-success" },
  { label: "Infra", pct: 64, color: "bg-[#E2B341]" },
]

const CYCLE_PAUSE = 4200
const SCORE_DURATION = 1400

export function AnimatedScore() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)
  const [cycle, setCycle] = useState(0)
  const [score, setScore] = useState(0)
  const [barWidths, setBarWidths] = useState<number[]>(BARS.map(() => 0))

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) setInView(e.isIntersecting)
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return

    setScore(0)
    setBarWidths(BARS.map(() => 0))

    const scoreStart = performance.now()
    let raf = 0
    const animScore = (now: number) => {
      const t = Math.min(1, (now - scoreStart) / SCORE_DURATION)
      const eased = 1 - Math.pow(1 - t, 3)
      setScore(Math.round(eased * 42))
      if (t < 1) raf = requestAnimationFrame(animScore)
    }
    raf = requestAnimationFrame(animScore)

    const barTimer = setTimeout(() => {
      setBarWidths(BARS.map((b) => b.pct))
    }, 200)

    const cycleTimer = setTimeout(() => {
      setCycle((c) => c + 1)
    }, CYCLE_PAUSE)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(barTimer)
      clearTimeout(cycleTimer)
    }
  }, [inView, cycle])

  return (
    <div
      ref={ref}
      className="rounded-[10px] border border-line bg-surface p-6 transition-transform duration-500 hover:translate-y-[-2px]"
    >
      <div className="flex items-baseline justify-between">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-widemono text-ink-tertiary">
            Vibe Score
          </div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-[56px] font-medium tracking-tighter2 leading-none text-ink-primary tabular-nums">
              {score}
            </span>
            <span className="text-[16px] text-ink-tertiary">/ 100</span>
          </div>
          <div className="mt-1 text-[12px] text-warn">Not launch-ready</div>
        </div>
        <div className="text-right">
          <div className="font-mono text-[11px] text-ink-tertiary">findings</div>
          <div className="mt-1 font-mono text-[13px] text-ink-secondary">
            <span className="text-warn">1 critical</span> · 4 high · 7 med
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2.5">
        {BARS.map((b, i) => (
          <div key={b.label} className="flex items-center gap-3">
            <span className="w-20 text-[12px] text-ink-secondary">{b.label}</span>
            <div className="h-[6px] flex-1 overflow-hidden rounded-full bg-elevated">
              <div
                className={`h-full ${b.color} rounded-full`}
                style={{
                  width: `${barWidths[i]}%`,
                  transition: "width 1.1s cubic-bezier(0.22,1,0.36,1)",
                  transitionDelay: `${i * 90}ms`,
                }}
              />
            </div>
            <span className="w-8 text-right font-mono text-[11px] text-ink-tertiary tabular-nums">
              {Math.round(barWidths[i])}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
