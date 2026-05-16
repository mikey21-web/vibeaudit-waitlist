"use client"

import { useEffect, useState } from "react"

interface Props {
  words: string[]
  interval?: number
  className?: string
}

export function RotatingWord({ words, interval = 2200, className = "" }: Props) {
  const [idx, setIdx] = useState(0)
  const [phase, setPhase] = useState<"in" | "out">("in")

  useEffect(() => {
    const t = setTimeout(() => {
      if (phase === "in") {
        setPhase("out")
      } else {
        setIdx((i) => (i + 1) % words.length)
        setPhase("in")
      }
    }, phase === "in" ? interval : 380)
    return () => clearTimeout(t)
  }, [phase, interval, words.length])

  const longest = words.reduce((a, b) => (a.length > b.length ? a : b), "")

  return (
    <span
      className={`word-slot relative align-baseline ${className}`}
      style={{ minWidth: `${longest.length * 0.55}em` }}
    >
      <span key={`${idx}-${phase}`} className={phase === "out" ? "out" : ""}>
        {words[idx]}
      </span>
    </span>
  )
}
