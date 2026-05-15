"use client"

import { useState } from "react"

interface Props {
  onSuccess?: () => void
}

export function WaitlistForm({ onSuccess }: Props) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    if (!email.trim()) { setError("Enter your email to join"); return }
    setLoading(true)
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), name: name.trim() || undefined }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error ?? "Something went wrong"); return }
      onSuccess?.()
    } catch {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {/* Name */}
      <div>
        <label style={{ display: "block", fontWeight: 600, fontSize: 11, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6, color: "#0f172a" }}>
          Your Name
        </label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Alex Johnson"
          style={{
            width: "100%", padding: "12px 14px",
            border: "2px solid #e2e8f0", borderRadius: 8,
            fontSize: 15, fontFamily: "inherit", outline: "none",
            transition: "border-color 0.2s, box-shadow 0.2s",
            boxSizing: "border-box"
          }}
          onFocus={e => { e.currentTarget.style.borderColor="#f97316"; e.currentTarget.style.boxShadow="0 0 0 3px rgba(249,115,22,0.1)" }}
          onBlur={e => { e.currentTarget.style.borderColor="#e2e8f0"; e.currentTarget.style.boxShadow="none" }}
        />
      </div>

      {/* Email */}
      <div style={{ position: "relative" }}>
        <label style={{ display: "block", fontWeight: 600, fontSize: 11, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6, color: "#0f172a" }}>
          Email Address
        </label>
        <div style={{ position: "relative", overflow: "hidden", borderRadius: 8 }}>
          <div className="scan-beam" style={{ top: 0, bottom: 0, left: 0 }} />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            style={{
              width: "100%", padding: "12px 14px",
              border: "2px solid #e2e8f0", borderRadius: 8,
              fontSize: 15, fontFamily: "inherit", outline: "none",
              transition: "border-color 0.2s, box-shadow 0.2s",
              boxSizing: "border-box", position: "relative", zIndex: 1,
              background: "transparent"
            }}
            onFocus={e => { e.currentTarget.style.borderColor="#f97316"; e.currentTarget.style.boxShadow="0 0 0 3px rgba(249,115,22,0.1)" }}
            onBlur={e => { e.currentTarget.style.borderColor="#e2e8f0"; e.currentTarget.style.boxShadow="none" }}
          />
        </div>
      </div>

      {error && <p style={{ color: "#ef4444", fontSize: 13, margin: 0 }}>{error}</p>}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        style={{
          background: "linear-gradient(135deg,#1e3a8a,#6366f1)",
          color: "#fff", border: "none",
          padding: "14px", borderRadius: 8,
          fontWeight: 700, fontSize: 15,
          fontFamily: "'Space Grotesk',sans-serif",
          cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.7 : 1,
          textTransform: "uppercase", letterSpacing: 1,
          transition: "transform 0.2s, box-shadow 0.2s"
        }}
        onMouseEnter={e => { if (!loading) { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 12px 30px rgba(30,58,138,0.4)" } }}
        onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none" }}
      >
        {loading ? "Joining..." : "Get Early Access →"}
      </button>
    </form>
  )
}
