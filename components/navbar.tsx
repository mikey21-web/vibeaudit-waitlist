"use client"

import { Logo } from "./logo"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2 text-ink-primary">
          <Logo size={22} />
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {[
            ["#attack-replay", "Live attack"],
            ["#catch", "What we catch"],
            ["#flow", "How it works"],
            ["#vs", "vs Snyk"],
            ["#pricing", "Pricing"],
            ["#faq", "FAQ"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-[13px] text-ink-secondary transition-colors hover:text-ink-primary"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#waitlist"
          className="inline-flex h-7 items-center rounded-[5px] bg-ink-primary px-3 text-[12px] font-medium text-bg transition-colors hover:bg-ink-secondary"
        >
          Join waitlist
        </a>
      </nav>
    </header>
  )
}
