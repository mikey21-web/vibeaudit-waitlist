"use client"

import { useState } from "react"
import { Reveal } from "./reveal"

interface Item {
  q: string
  a: React.ReactNode
}

const items: Item[] = [
  {
    q: "Is this just another security scanner?",
    a: (
      <>
        No. Other tools tell you what <em>could</em> be wrong — CVEs, missing headers. We replay
        the actual attack against your URL so you watch it succeed. Then we write the fix. The
        hero terminal above isn&apos;t a mockup — that&apos;s literally what every paid scan
        delivers.
      </>
    ),
  },
  {
    q: "Will scanning break my app?",
    a: (
      <>
        No. We&apos;re read-only on the surface — HTTP requests, DNS lookups, bundle analysis. The
        handful of &ldquo;active&rdquo; probes (JWT bypass, CORS reflection, webhook forgery) are
        crafted to fail safely — they either succeed (proving the bug) or get rejected. Zero
        writes. Zero destructive ops. Same risk as someone curling your site.
      </>
    ),
  },
  {
    q: "What about false positives?",
    a: (
      <>
        Every critical or high finding has a working <code className="rounded bg-elevated px-1 py-[1px] font-mono text-[12px] text-ink-primary">proof_of_exploit</code>. If
        we can&apos;t generate a real curl request that reproduces the issue, we don&apos;t ship
        the finding. You can hit &ldquo;Replay&rdquo; on any of them and watch it run. No
        theoretical &ldquo;this could happen if…&rdquo; nonsense.
      </>
    ),
  },
  {
    q: "I'm just a solo dev. Is this overkill?",
    a: (
      <>
        Solo devs are exactly who we built this for. The biggest leaks we see are Stripe secrets
        and Supabase service keys exposed in client bundles by people shipping fast with Cursor or
        Lovable. One leaked key = $5K OpenAI bill at 3am. The Starter plan is $9/mo. Math is
        simple.
      </>
    ),
  },
  {
    q: "Can I cancel?",
    a: (
      <>
        Yes, anytime, from your dashboard. No credit card to join the waitlist. We charge nothing
        until launch + your free deep scan.
      </>
    ),
  },
]

export function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="faq" className="border-b border-line/60">
      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
        <Reveal as="header" className="text-center">
          <div className="font-mono text-[11px] uppercase tracking-widemono text-accent">
            Questions we get a lot
          </div>
          <h2 className="mt-4 text-h2 text-ink-primary">FAQ</h2>
        </Reveal>

        <div className="mt-12 divide-y divide-line border-t border-line">
          {items.map((it, i) => {
            const open = openIdx === i
            return (
              <Reveal key={it.q} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? -1 : i)}
                  aria-expanded={open}
                  className="group flex w-full items-start gap-4 px-2 py-5 text-left transition-colors hover:bg-surface/40 sm:px-4"
                >
                  <span
                    className={`mt-1 inline-block h-3 w-3 shrink-0 text-accent transition-transform duration-300 ${
                      open ? "rotate-90" : ""
                    }`}
                    aria-hidden
                  >
                    ▸
                  </span>
                  <span className="flex-1 text-[16px] font-medium tracking-tightish text-ink-primary">
                    {it.q}
                  </span>
                </button>
                <div
                  className={`grid px-2 transition-all duration-300 ease-out sm:px-4 ${
                    open
                      ? "grid-rows-[1fr] pb-6 opacity-100"
                      : "grid-rows-[0fr] pb-0 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pl-7 pr-2 text-[14.5px] leading-[1.7] text-ink-secondary">
                      {it.a}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
