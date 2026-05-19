"use client"

import { useEffect, useState } from "react"
import { WaitlistForm } from "./waitlist-form"

const STORAGE_KEY = "deploysafe.exitIntentShown"

export function ExitIntent() {
  const [open, setOpen] = useState(false)
  const [joined, setJoined] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return

    let armed = false
    const armTimer = setTimeout(() => {
      armed = true
    }, 8000)

    function handleLeave(e: MouseEvent) {
      if (!armed) return
      if (e.relatedTarget) return
      if (e.clientY > 5) return
      try {
        sessionStorage.setItem(STORAGE_KEY, "1")
      } catch {}
      setOpen(true)
      document.removeEventListener("mouseout", handleLeave)
    }

    document.addEventListener("mouseout", handleLeave)
    return () => {
      clearTimeout(armTimer)
      document.removeEventListener("mouseout", handleLeave)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
    >
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Close"
        className="absolute inset-0 bg-bg/80 backdrop-blur-sm animate-fade-in"
      />

      <div className="relative w-full max-w-md animate-fade-up rounded-[16px] border border-accent/40 bg-surface p-7 shadow-[0_60px_120px_-30px_rgba(94,106,210,0.55)]">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-7 w-7 place-items-center rounded-full text-ink-tertiary transition-colors hover:bg-elevated hover:text-ink-primary"
        >
          ×
        </button>

        <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widemono text-warn">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-warn opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-warn" />
          </span>
          Hold on
        </div>

        <h2
          id="exit-intent-title"
          className="mt-3 text-[26px] font-medium leading-[1.15] tracking-tighter2 text-ink-primary"
        >
          Wait — save $5K at 3am.
        </h2>
        <p className="mt-3 text-[14px] leading-[1.55] text-ink-secondary">
          One leaked Stripe key drains accounts faster than you can refresh. Join
          the waitlist — lock in 50% off, scan on day one.
        </p>

        {joined ? (
          <div className="mt-5 rounded-[10px] border border-accent/40 bg-accent/10 p-4 text-[14px] text-ink-primary">
            You&apos;re on the list. Check your inbox.
          </div>
        ) : (
          <div className="mt-5">
            <WaitlistForm onSuccess={() => setJoined(true)} size="md" />
            <p className="mt-2 text-center text-[11px] text-ink-tertiary">
              No card. One email when access opens.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
