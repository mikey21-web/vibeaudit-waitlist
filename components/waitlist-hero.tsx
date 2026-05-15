"use client"

import { useState } from "react"
import { WaitlistForm } from "./waitlist-form"

export function WaitlistHero() {
  const [joined, setJoined] = useState(false)

  return (
    <section className="relative overflow-hidden pt-16 pb-20 px-4 sm:pt-24 sm:pb-28">
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:48px_48px]" />
      {/* Glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[800px] rounded-full bg-indigo-600/10 blur-[120px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="relative mx-auto max-w-2xl text-center">
        {/* Nav */}
        <div className="mb-10 flex items-center justify-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-indigo-500">
            <span className="text-white text-sm font-bold">✦</span>
          </div>
          <span className="text-sm font-semibold text-white tracking-tight">VibeAudit</span>
        </div>

        {/* Eyebrow badge */}
        <div className="animate-fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3 py-1.5 text-xs font-medium text-indigo-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
          </span>
          Launching soon — limited early access
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up delay-100 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] leading-[1.1]">
          Is your vibe-coded app{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
            actually launch-safe?
          </span>
        </h1>

        {/* Sub */}
        <p className="animate-fade-up delay-200 mt-5 text-base text-zinc-400 leading-relaxed sm:text-lg max-w-xl mx-auto">
          VibeAudit scans apps built with Cursor, Lovable, Bolt, and v0 for exposed API keys,
          missing auth, broken payments, and 100+ other issues — then gives you paste-ready
          fix prompts for your AI coding tool.
        </p>

        {/* Form */}
        <div className="animate-fade-up delay-300 mt-8 max-w-md mx-auto">
          {joined ? (
            <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 px-6 py-5">
              <p className="text-lg font-semibold text-white">You&apos;re on the list 🎉</p>
              <p className="mt-1 text-sm text-zinc-400">
                Check your inbox — we sent a confirmation. We&apos;ll email you the moment access opens.
              </p>
            </div>
          ) : (
            <WaitlistForm onSuccess={() => setJoined(true)} />
          )}
        </div>

        {/* Trust line */}
        <p className="animate-fade-up delay-400 mt-4 text-xs text-zinc-600">
          No spam. One email when we launch. Unsubscribe any time.
        </p>

        {/* Stats */}
        <div className="animate-fade-up delay-500 mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
          {[
            { value: "11", label: "audit categories" },
            { value: "100+", label: "checks per scan" },
            { value: "30s", label: "to your score" },
            { value: "$0", label: "to start" },
          ].map((s) => (
            <div key={s.label} className="flex items-baseline gap-1.5">
              <span className="text-base font-bold text-white">{s.value}</span>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
