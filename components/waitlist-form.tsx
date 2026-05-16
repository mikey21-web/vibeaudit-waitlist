"use client"

import { useEffect, useState } from "react"

export interface WaitlistResult {
  position?: number
  referralCode?: string
  shareUrl?: string
  alreadyJoined?: boolean
}

interface Props {
  onSuccess?: (result: WaitlistResult) => void
  size?: "md" | "lg"
}

export function WaitlistForm({ onSuccess, size = "lg" }: Props) {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [ref, setRef] = useState<string | undefined>()
  const isLg = size === "lg"

  useEffect(() => {
    if (typeof window === "undefined") return
    const p = new URLSearchParams(window.location.search).get("ref")
    if (p) setRef(p)
  }, [])

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
        body: JSON.stringify({ email: email.trim(), ref }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? "Something went wrong")
        return
      }
      onSuccess?.({
        position: data.position,
        referralCode: data.referralCode,
        shareUrl: data.shareUrl,
        alreadyJoined: data.alreadyJoined,
      })
    } catch {
      setError("Network error. Try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={`ring-pulse flex w-full items-stretch overflow-hidden rounded-[10px] border border-line bg-surface/90 backdrop-blur transition-colors focus-within:border-accent ${
          isLg ? "h-12 sm:h-14" : "h-11"
        }`}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          required
          autoComplete="email"
          aria-label="Email"
          className={`flex-1 bg-transparent text-ink-primary placeholder:text-ink-tertiary focus:outline-none ${
            isLg ? "px-4 text-[15px] sm:px-5 sm:text-[16px]" : "px-4 text-[14px]"
          }`}
        />
        <button
          type="submit"
          disabled={loading}
          className={`btn-glow shrink-0 rounded-[8px] bg-ink-primary font-medium text-bg disabled:cursor-not-allowed disabled:opacity-60 ${
            isLg ? "m-1 px-4 text-[13px] sm:px-6 sm:text-[14px]" : "m-[3px] px-4 text-[13px]"
          }`}
        >
          {loading ? "Joining…" : "Join waitlist"}
        </button>
      </div>

      {error && <p className="mt-3 text-[13px] text-warn animate-fade-in">{error}</p>}
    </form>
  )
}
