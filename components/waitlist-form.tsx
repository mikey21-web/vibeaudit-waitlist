"use client"

import { useEffect, useState } from "react"

interface Props {
  onSuccess?: () => void
  size?: "md" | "lg"
}

const PLACEHOLDERS = [
  "you@company.com",
  "name@startup.io",
  "dev@your-app.dev",
  "founder@nextbig.ai",
  "hello@yourproject.co",
]

export function WaitlistForm({ onSuccess, size = "lg" }: Props) {
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [phIdx, setPhIdx] = useState(0)
  const [phFading, setPhFading] = useState(false)
  const isLg = size === "lg"

  useEffect(() => {
    if (email.length > 0) return
    const tick = setInterval(() => {
      setPhFading(true)
      setTimeout(() => {
        setPhIdx((i) => (i + 1) % PLACEHOLDERS.length)
        setPhFading(false)
      }, 400)
    }, 2600)
    return () => clearInterval(tick)
  }, [email])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    if (!email.trim()) {
      setError("Enter your email")
      return
    }
    setLoading(true)
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), company }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? "Something went wrong")
        return
      }
      onSuccess?.()
    } catch {
      setError("Network error. Try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div aria-hidden style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor="company-website">Company website</label>
        <input
          type="text"
          id="company-website"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <div
        className={`ring-pulse input-breathe input-shine flex w-full items-stretch overflow-hidden rounded-[10px] border border-line bg-surface/90 backdrop-blur transition-colors focus-within:border-accent ${
          isLg ? "h-14" : "h-11"
        }`}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={PLACEHOLDERS[phIdx]}
          required
          autoComplete="email"
          className={`placeholder-fade ${phFading ? "placeholder-out" : ""} relative z-10 flex-1 bg-transparent text-ink-primary placeholder:text-ink-tertiary focus:outline-none ${
            isLg ? "px-5 text-[16px]" : "px-4 text-[14px]"
          }`}
        />
        <button
          type="submit"
          disabled={loading}
          className={`btn-glow relative z-10 shrink-0 rounded-[8px] bg-ink-primary font-medium text-bg disabled:cursor-not-allowed disabled:opacity-60 ${
            isLg ? "m-1 px-6 text-[14px]" : "m-[3px] px-4 text-[13px]"
          }`}
        >
          {loading ? "Joining…" : "Join waitlist →"}
        </button>
      </div>

      {error && (
        <p className="mt-3 text-[13px] text-warn animate-fade-in">{error}</p>
      )}
    </form>
  )
}
