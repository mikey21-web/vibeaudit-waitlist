"use client"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2 text-ink-primary">
          <span className="grid h-5 w-5 place-items-center rounded-[5px] bg-ink-primary text-[11px] font-semibold text-bg">
            D
          </span>
          <span className="text-[14px] font-medium tracking-tightish">DeploySafe</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {[
            ["#catch", "What we catch"],
            ["#flow", "How it works"],
            ["#pricing", "Pricing"],
            ["#perks", "Perks"],
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
