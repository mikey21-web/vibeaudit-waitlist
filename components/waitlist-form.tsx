"use client"

import { useState } from "react"

interface Props {
  onSuccess?: () => void
  compact?: boolean
}

export function WaitlistForm({ onSuccess, compact = false }: Props) {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

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
        body: JSON.stringify({ email: email.trim() }),
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
      <div className="flex w-full items-stretch overflow-hidden rounded-[7px] border border-line bg-surface focus-within:border-ink-quaternary focus-within:ring-1 focus-within:ring-accent-ring">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          required
          className="h-10 flex-1 bg-transparent px-3.5 text-[14px] text-ink-primary placeholder:text-ink-tertiary focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="h-10 shrink-0 bg-ink-primary px-4 text-[13px] font-medium text-bg transition-colors hover:bg-ink-secondary disabled:opacity-60"
        >
          {loading ? "Joining…" : "Join waitlist"}
        </button>
      </div>

      {error && (
        <p className="mt-2 text-[12px] text-warn">{error}</p>
      )}
      {!error && !compact && (
        <p className="mt-2 text-[12px] text-ink-tertiary">No spam. One email when access opens.</p>
      )}
    </form>
  )
}
