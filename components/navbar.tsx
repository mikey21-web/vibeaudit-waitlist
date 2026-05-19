"use client"

import { Logo } from "./logo"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2 text-ink-primary">
          <Logo size={22} />
        </a>

        <div className="hidden items-center gap-6 md:flex lg:gap-7">
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
              className="whitespace-nowrap text-[13px] text-ink-secondary transition-colors hover:text-ink-primary"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#waitlist"
          className="inline-flex h-8 shrink-0 items-center rounded-[6px] bg-ink-primary px-3 text-[12px] font-medium text-bg transition-colors hover:bg-ink-secondary sm:h-7 sm:px-3"
        >
          Join waitlist
        </a>
      </nav>
    </header>
  )
}
