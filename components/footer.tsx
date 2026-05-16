"use client"

export function Footer() {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <span className="grid h-5 w-5 place-items-center rounded-[5px] bg-ink-primary text-[11px] font-semibold text-bg">
            V
          </span>
          <span className="text-[13px] font-medium text-ink-primary">VibeAudit</span>
          <span className="ml-2 text-[12px] text-ink-tertiary">
            © {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-6">
          {[
            ["Privacy", "#"],
            ["Terms", "#"],
            ["Contact", "mailto:hello@vibeaudit.dev"],
            ["X", "#"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-[12px] text-ink-secondary transition-colors hover:text-ink-primary"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
