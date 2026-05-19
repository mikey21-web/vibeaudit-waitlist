"use client"

export function Footer() {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-5 w-5 place-items-center rounded-[5px] bg-ink-primary text-[11px] font-semibold text-bg">
              D
            </span>
            <span className="text-[13px] font-medium text-ink-primary">DeploySafe</span>
            <span className="ml-2 text-[12px] text-ink-tertiary">
              © {new Date().getFullYear()}
            </span>
          </div>
          <p className="mt-3 max-w-xs text-[13px] leading-[1.55] text-ink-secondary">
            We hack you, then we patch you.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
          {[
            ["Privacy", "/privacy"],
            ["Terms", "/terms"],
            ["Contact", "mailto:hello@deploysafe.in"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-[13px] text-ink-secondary transition-colors hover:text-ink-primary"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
