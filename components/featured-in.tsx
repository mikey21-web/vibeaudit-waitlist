"use client"

const placements = [
  { name: "Product Hunt", tooltip: "Launching here on launch day" },
  { name: "Hacker News", tooltip: "Show HN: planned for launch week" },
  { name: "Indie Hackers", tooltip: "Founder story planned" },
  { name: "DEV.to", tooltip: "Technical post on launch" },
]

export function FeaturedIn() {
  return (
    <section className="border-b border-line/60 bg-bg/50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center gap-4">
          <div className="font-mono text-[10px] uppercase tracking-widemono text-ink-tertiary">
            Launching on
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {placements.map((p) => (
              <span
                key={p.name}
                title={p.tooltip}
                className="text-[15px] font-medium tracking-tightish text-ink-tertiary opacity-60 transition-opacity hover:opacity-100"
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
