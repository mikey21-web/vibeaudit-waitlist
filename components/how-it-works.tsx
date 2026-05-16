"use client"

const steps = [
  {
    num: "01",
    eyebrow: "Scan",
    title: "Point it at your URL.",
    desc: "Any deployed app — Vercel, Netlify, Railway. We fingerprint your stack and walk the surface like an attacker would.",
    visual: "scan",
  },
  {
    num: "02",
    eyebrow: "Score",
    title: "Get a Vibe Score in 30 seconds.",
    desc: "11 categories, 100+ checks. Each finding is severity-tagged and linked to the exact file or route it lives in.",
    visual: "score",
  },
  {
    num: "03",
    eyebrow: "Fix",
    title: "Paste the prompts into Cursor.",
    desc: "Every finding ships with a paste-ready fix for Cursor, Windsurf, and Copilot. Drop it in. Re-scan. Done.",
    visual: "prompt",
  },
] as const

export function HowItWorks() {
  return (
    <section id="flow" className="border-b border-line/60">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <header className="max-w-2xl">
          <div className="font-mono text-[11px] uppercase tracking-widemono text-accent">
            How it works
          </div>
          <h2 className="mt-4 text-h2 text-ink-primary">
            From URL to fix prompts in under a minute.
          </h2>
        </header>

        <div className="mt-16 flex flex-col gap-16">
          {steps.map((s, i) => (
            <article
              key={s.num}
              className="grid grid-cols-1 gap-10 border-t border-line pt-10 sm:grid-cols-12 sm:gap-12"
            >
              <div className="sm:col-span-5">
                <div className="font-mono text-[12px] text-ink-tertiary">{s.num}</div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-widemono text-accent">
                  {s.eyebrow}
                </div>
                <h3 className="mt-3 text-[26px] font-medium tracking-tighter2 text-ink-primary">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-[1.6] text-ink-secondary">
                  {s.desc}
                </p>
              </div>

              <div className="sm:col-span-7">
                <StepVisual kind={s.visual} reverse={i % 2 === 1} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function StepVisual({ kind }: { kind: string; reverse?: boolean }) {
  if (kind === "scan") {
    return (
      <div className="overflow-hidden rounded-[10px] border border-line bg-surface">
        <div className="flex items-center gap-2 border-b border-line bg-elevated px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#3F4147]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3F4147]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3F4147]" />
          <span className="ml-2 font-mono text-[11px] text-ink-tertiary">scan</span>
        </div>
        <pre className="m-0 p-5 font-mono text-[12.5px] leading-[1.8]">
          <div className="text-ink-tertiary">$ vibeaudit scan https://my-app.vercel.app</div>
          <div className="text-ink-secondary">→ Resolving DNS · OK</div>
          <div className="text-ink-secondary">→ Framework: Next.js 14 (App Router)</div>
          <div className="text-ink-secondary">→ Stack: Supabase · Stripe · OpenAI</div>
          <div className="text-ink-secondary">→ Crawling 24 routes…</div>
          <div className="text-ink-secondary">→ Inspecting client bundles…</div>
          <div className="text-success">✓ Surface mapped in 6.4s</div>
        </pre>
      </div>
    )
  }

  if (kind === "score") {
    const bars: [string, number, string][] = [
      ["Security", 32, "bg-warn"],
      ["Auth", 58, "bg-[#E2B341]"],
      ["Payments", 24, "bg-warn"],
      ["AI cost", 71, "bg-[#E2B341]"],
      ["Legal", 80, "bg-success"],
      ["Infra", 64, "bg-[#E2B341]"],
    ]
    return (
      <div className="rounded-[10px] border border-line bg-surface p-6">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widemono text-ink-tertiary">
              Vibe Score
            </div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-[56px] font-medium tracking-tighter2 leading-none text-ink-primary">
                42
              </span>
              <span className="text-[16px] text-ink-tertiary">/ 100</span>
            </div>
            <div className="mt-1 text-[12px] text-warn">Not launch-ready</div>
          </div>
          <div className="text-right">
            <div className="font-mono text-[11px] text-ink-tertiary">findings</div>
            <div className="mt-1 font-mono text-[13px] text-ink-secondary">
              <span className="text-warn">1 critical</span> · 4 high · 7 med
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2.5">
          {bars.map(([label, pct, color]) => (
            <div key={label} className="flex items-center gap-3">
              <span className="w-20 text-[12px] text-ink-secondary">{label}</span>
              <div className="h-[6px] flex-1 overflow-hidden rounded-full bg-elevated">
                <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
              </div>
              <span className="w-8 text-right font-mono text-[11px] text-ink-tertiary">{pct}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-[10px] border border-line bg-surface p-5">
      <div className="flex items-center gap-2">
        <span className="grid h-5 w-5 place-items-center rounded-[4px] bg-ink-primary text-[10px] font-semibold text-bg">
          C
        </span>
        <span className="text-[13px] font-medium text-ink-primary">Cursor — paste this</span>
        <span className="ml-auto font-mono text-[10px] uppercase tracking-widemono text-ink-tertiary">
          auto-generated
        </span>
      </div>
      <pre className="m-0 mt-4 rounded-[8px] border border-line bg-bg p-4 font-mono text-[12px] leading-[1.7] text-ink-primary">
        <div className="text-ink-tertiary">{`// Fix: move STRIPE_SECRET to server`}</div>
        <div>Move <span className="text-accent">STRIPE_SECRET_KEY</span> from</div>
        <div><span className="text-success">lib/stripe.ts</span> to a server-only</div>
        <div>route handler. Remove all imports</div>
        <div>from <span className="text-success">components/*</span>. Add it to</div>
        <div><span className="text-success">.env.local</span> as a server-only var.</div>
      </pre>
      <button className="mt-4 inline-flex h-8 items-center rounded-[5px] border border-line bg-elevated px-3 text-[12px] font-medium text-ink-primary transition-colors hover:border-ink-quaternary">
        Copy prompt
      </button>
    </div>
  )
}
