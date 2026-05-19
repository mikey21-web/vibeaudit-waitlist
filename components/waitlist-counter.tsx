"use client"

import { useEffect, useRef, useState } from "react"

interface Props {
  className?: string
  showLast?: boolean
}

function useAnimatedNumber(target: number, duration = 600) {
  const [value, setValue] = useState(target)
  const startRef = useRef<number | null>(null)
  const fromRef = useRef(target)

  useEffect(() => {
    if (target === value) return
    fromRef.current = value
    startRef.current = null
    let raf: number
    function tick(ts: number) {
      if (startRef.current === null) startRef.current = ts
      const elapsed = ts - startRef.current
      const t = Math.min(1, elapsed / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      const next = Math.round(fromRef.current + (target - fromRef.current) * eased)
      setValue(next)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, value])

  return value
}

export function WaitlistCounter({ className = "", showLast = true }: Props) {
  const [count, setCount] = useState<number | null>(null)
  const [lastSignup, setLastSignup] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    async function load() {
      try {
        const res = await fetch("/api/waitlist/count", { cache: "no-store" })
        if (!res.ok) return
        const data = await res.json()
        if (!mounted) return
        if (typeof data.count === "number") setCount(data.count)
        if (typeof data.lastSignup === "string") setLastSignup(data.lastSignup)
      } catch {
        /* ignore */
      }
    }
    load()
    const t = setInterval(load, 15000)
    return () => {
      mounted = false
      clearInterval(t)
    }
  }, [])

  const animated = useAnimatedNumber(count ?? 0)

  return (
    <div className={`text-center text-[13px] text-ink-secondary ${className}`}>
      <span className="font-medium text-ink-primary tabular-nums">
        {count === null ? "—" : animated.toLocaleString()}
      </span>{" "}
      developers already in. Spots filling fast.
      {showLast && lastSignup && (
        <div className="mt-1 text-[11px] text-ink-tertiary">
          Last signup: {lastSignup}
        </div>
      )}
    </div>
  )
}
