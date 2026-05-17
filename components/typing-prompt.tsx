"use client"

import { useEffect, useState } from "react"

interface PromptLine {
  c: string
  t: string
}

interface PromptScript {
  comment: string
  app: string
  lines: PromptLine[]
}

const SCRIPTS: PromptScript[] = [
  {
    comment: "// Fix: move STRIPE_SECRET to server",
    app: "Cursor",
    lines: [
      { c: "text-ink-primary", t: "Move " },
      { c: "text-accent", t: "STRIPE_SECRET_KEY" },
      { c: "text-ink-primary", t: " from " },
      { c: "text-success", t: "lib/stripe.ts" },
      { c: "text-ink-primary", t: " to a server-only route. Remove all imports from " },
      { c: "text-success", t: "components/*" },
      { c: "text-ink-primary", t: ". Add it to " },
      { c: "text-success", t: ".env.local" },
      { c: "text-ink-primary", t: " as server-only." },
    ],
  },
  {
    comment: "// Fix: verify Stripe webhook signatures",
    app: "Cursor",
    lines: [
      { c: "text-ink-primary", t: "In " },
      { c: "text-success", t: "app/api/webhooks/stripe/route.ts" },
      { c: "text-ink-primary", t: ", verify the " },
      { c: "text-accent", t: "stripe-signature" },
      { c: "text-ink-primary", t: " header with " },
      { c: "text-accent", t: "stripe.webhooks.constructEvent()" },
      { c: "text-ink-primary", t: ". Reject with 400 on failure." },
    ],
  },
  {
    comment: "// Fix: enable Supabase RLS on profiles",
    app: "Cursor",
    lines: [
      { c: "text-ink-primary", t: "Run migration: " },
      { c: "text-accent", t: "ALTER TABLE profiles ENABLE ROW LEVEL SECURITY" },
      { c: "text-ink-primary", t: ". Add policy: users can " },
      { c: "text-success", t: "SELECT" },
      { c: "text-ink-primary", t: " and " },
      { c: "text-success", t: "UPDATE" },
      { c: "text-ink-primary", t: " only where " },
      { c: "text-accent", t: "auth.uid() = user_id" },
      { c: "text-ink-primary", t: "." },
    ],
  },
]

const TYPING_SPEED = 8
const HOLD_AFTER = 2800
const RESTART_GAP = 600

export function TypingPrompt() {
  const [scriptIdx, setScriptIdx] = useState(0)
  const [revealed, setRevealed] = useState(0)
  const [copied, setCopied] = useState(false)

  const script = SCRIPTS[scriptIdx]
  const fullText = script.lines.map((l) => l.t).join("")

  useEffect(() => {
    setRevealed(0)
    setCopied(false)
    let cancelled = false
    let timer: ReturnType<typeof setTimeout>

    const step = (n: number) => {
      if (cancelled) return
      if (n > fullText.length) {
        timer = setTimeout(() => {
          if (cancelled) return
          setCopied(true)
          timer = setTimeout(() => {
            if (cancelled) return
            setScriptIdx((i) => (i + 1) % SCRIPTS.length)
          }, HOLD_AFTER)
        }, RESTART_GAP)
        return
      }
      setRevealed(n)
      timer = setTimeout(() => step(n + 1), TYPING_SPEED + Math.random() * TYPING_SPEED)
    }

    timer = setTimeout(() => step(0), 240)
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [scriptIdx, fullText])

  const segments: { c: string; t: string }[] = []
  let cursor = 0
  for (const l of script.lines) {
    if (cursor >= revealed) break
    const take = Math.min(l.t.length, revealed - cursor)
    segments.push({ c: l.c, t: l.t.slice(0, take) })
    cursor += l.t.length
  }
  const isTyping = revealed <= fullText.length

  return (
    <div className="rounded-[10px] border border-line bg-surface p-5 transition-transform duration-500 hover:translate-y-[-2px]">
      <div className="flex items-center gap-2">
        <span className="grid h-5 w-5 place-items-center rounded-[4px] bg-ink-primary text-[10px] font-semibold text-bg">
          C
        </span>
        <span className="text-[13px] font-medium text-ink-primary">{script.app} — paste this</span>
        <span className="ml-auto font-mono text-[10px] uppercase tracking-widemono text-ink-tertiary">
          auto-generated
        </span>
      </div>
      <pre className="m-0 mt-4 min-h-[140px] rounded-[8px] border border-line bg-bg p-4 font-mono text-[12px] leading-[1.7] whitespace-pre-wrap break-words">
        <div className="text-ink-tertiary">{script.comment}</div>
        <div>
          {segments.map((s, i) => (
            <span key={i} className={s.c}>
              {s.t}
            </span>
          ))}
          {isTyping && <span className="animate-blink text-ink-primary">▍</span>}
        </div>
      </pre>
      <button
        className={`btn-glow mt-4 inline-flex h-8 items-center rounded-[5px] border px-3 text-[12px] font-medium transition-colors ${
          copied
            ? "border-accent bg-accent text-white"
            : "border-line bg-elevated text-ink-primary"
        }`}
      >
        {copied ? "Copied ✓" : "Copy prompt"}
      </button>
    </div>
  )
}
