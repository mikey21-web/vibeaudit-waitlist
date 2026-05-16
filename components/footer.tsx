"use client"

export function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <span className="grid h-5 w-5 place-items-center rounded-[5px] bg-ink-primary text-[11px] font-semibold text-bg">
            V
          </span>
          <span className="text-[13px] font-medium text-ink-primary">VibeAudit</span>
          <span className="ml-2 text-[12px] text-ink-tertiary">
            © {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://twitter.com/vibeaudit"
            className="text-[12px] text-ink-secondary transition-colors hover:text-ink-primary"
          >
            X / Twitter
          </a>
          <a
            href="mailto:hello@vibeaudit.dev"
            className="text-[12px] text-ink-secondary transition-colors hover:text-ink-primary"
          >
            Contact
          </a>
          <a
            href="#waitlist"
            className="text-[12px] text-ink-primary transition-colors hover:text-accent"
          >
            Join waitlist →
          </a>
        </div>
      </div>
    </footer>
  )
}
