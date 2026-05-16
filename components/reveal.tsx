"use client"

import { useEffect, useRef, useState } from "react"

interface Props {
  children: React.ReactNode
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === "undefined") {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true)
            io.disconnect()
            break
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const cls = `reveal ${delay ? `reveal-d${delay}` : ""} ${shown ? "show" : ""} ${className}`.trim()

  return (
    // @ts-expect-error generic tag
    <Tag ref={ref} className={cls}>
      {children}
    </Tag>
  )
}
