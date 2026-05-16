"use client"

import { useEffect, useState } from "react"

interface Props {
  position?: number
  shareUrl?: string
  alreadyJoined?: boolean
}

export function SuccessCard({ position, shareUrl, alreadyJoined }: Props) {
  const [copied, setCopied] = useState(false)
  const [displayPos, setDisplayPos] = useState(0)

  useEffect(() => {
    if (!position) return
    const start = performance.now()
    const dur = 900
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplayPos(Math.round(eased * position))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [position])

  async function copy() {
    if (!shareUrl) return
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* no-op */
    }
  }

  const tweetUrl = shareUrl
    ? `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `Just joined the @vibeaudit waitlist — production scanner for vibe-coded apps. Skip the line with me: ${shareUrl}`
      )}`
    : "#"

  return (
    <div className="overflow-hidden rounded-[12px] border border-line bg-surface text-left animate-fade-up">
      <div className="border-b border-line bg-elevated px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-accent text-[11px] text-white">
            ✓
          </span>
          <span className="font-mono text-[11px] uppercase tracking-widemono text-accent">
            {alreadyJoined ? "Already on the list" : "Spot reserved"}
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        {position ? (
          <>
            <div className="font-mono text-[11px] uppercase tracking-widemono text-ink-tertiary">
              Your position
            </div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-[44px] font-medium leading-none tracking-tighter2 text-ink-primary sm:text-[56px]">
                #{displayPos.toLocaleString()}
              </span>
            </div>
            <p className="mt-3 text-[14px] leading-[1.55] text-ink-secondary">
              Every friend who joins through your link bumps you up{" "}
              <span className="font-medium text-ink-primary">10 spots</span>.
            </p>
          </>
        ) : (
          <p className="text-[15px] text-ink-primary">
            You&apos;re on the list. We&apos;ll email you when access opens.
          </p>
        )}

        {shareUrl && (
          <div className="mt-5">
            <div className="flex items-stretch overflow-hidden rounded-[8px] border border-line bg-bg">
              <input
                readOnly
                value={shareUrl}
                onFocus={(e) => e.currentTarget.select()}
                className="flex-1 bg-transparent px-3 font-mono text-[12px] text-ink-secondary focus:outline-none"
              />
              <button
                onClick={copy}
                className="shrink-0 border-l border-line bg-elevated px-3 text-[12px] font-medium text-ink-primary transition-colors hover:bg-surface"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            <a
              href={tweetUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-glow mt-3 inline-flex h-10 w-full items-center justify-center rounded-[8px] bg-ink-primary text-[13px] font-medium text-bg"
            >
              Share on X →
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
