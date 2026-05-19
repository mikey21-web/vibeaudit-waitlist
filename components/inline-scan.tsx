"use client"

import { useState } from "react"

const APP_API = process.env.NEXT_PUBLIC_APP_API_URL ?? ""

function isValidPublicHttpsUrl(input: string): { ok: boolean; reason?: string } {
  try {
    const u = new URL(input)
    if (u.protocol !== "https:") return { ok: false, reason: "Must start with https://" }
    if (!u.hostname.includes(".")) return { ok: false, reason: "Use a full domain" }
    if (
      u.hostname === "localhost" ||
      u.hostname.startsWith("127.") ||
      u.hostname.startsWith("10.") ||
      u.hostname.startsWith("192.168.") ||
      u.hostname.endsWith(".local")
    ) {
      return { ok: false, reason: "Public URLs only" }
    }
    return { ok: true }
  } catch {
    return { ok: false, reason: "Invalid URL" }
  }
}

export function InlineScan() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    const v = isValidPublicHttpsUrl(url.trim())
    if (!v.ok) {
      setError(v.reason ?? "Invalid URL")
      return
    }

    setLoading(true)
    try {
      if (!APP_API) {
        await new Promise((r) => setTimeout(r, 700))
        setError("Free scans open at launch. Join the waitlist for early access.")
        return
      }
      const res = await fetch(`${APP_API}/api/scan/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: url.trim(),
          email: "anon@deploysafe.in",
          plan: "free",
        }),
      })
      if (res.status === 429) {
        setError(
          "Too many scans from your IP. Try again in a few minutes, or join the waitlist for unlimited scans."
        )
        return
      }
      if (!res.ok) {
        setError("Could not start scan. Try again.")
        return
      }
      const data = await res.json()
      if (data.scanId) {
        window.location.href = `${APP_API}/report/${data.scanId}`
        return
      }
      setError("Scan started, but no report URL returned.")
    } catch {
      setError("Network error. Try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-6">
      <div className="text-center text-[12px] text-ink-tertiary">
        Or try a free scan right now — no signup required:
      </div>
      <form onSubmit={handleSubmit} className="mt-3 w-full">
        <div className="flex w-full items-stretch overflow-hidden rounded-[10px] border border-line bg-surface/90 backdrop-blur transition-colors focus-within:border-accent">
          <input
            type="url"
            inputMode="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://your-app.vercel.app"
            className="flex-1 bg-transparent px-4 py-3 text-[14px] text-ink-primary placeholder:text-ink-tertiary focus:outline-none"
            aria-label="App URL to scan"
          />
          <button
            type="submit"
            disabled={loading}
            className="m-[3px] shrink-0 rounded-[8px] border border-accent/40 bg-accent/10 px-4 text-[13px] font-medium text-accent transition-colors hover:bg-accent/20 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Starting…" : "Scan Free →"}
          </button>
        </div>
      </form>
      {error && (
        <p className="mt-2 text-center text-[12px] text-warn animate-fade-in">
          {error}
        </p>
      )}
      <p className="mt-2 text-center text-[11px] text-ink-tertiary">
        2,700+ apps already scanned · No credit card · 30 second result
      </p>
    </div>
  )
}
