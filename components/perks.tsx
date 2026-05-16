"use client"

import { useState } from "react"
import { WaitlistForm } from "./waitlist-form"

const perks = [
  "Early access before public launch",
  "50% off for the first 500 members",
  "One free deep scan on day one",
  "Founding member badge on your report",
  "Direct line to the team",
  "Vote on the roadmap",
]

export function Perks() {
  const [joined, setJoined] = useState(false)

  return (
    <section id="pricing" className="border-b border-line/60">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="font-mono text-[11px] uppercase tracking-widemono text-accent">
              Waitlist
            </div>
            <h2 className="mt-4 text-h2 text-ink-primary">Get on the list.</h2>
            <p className="mt-4 max-w-md text-[15px] leading-[1.6] text-ink-secondary">
              We&apos;re rolling out access in small cohorts. Early members get the deepest
              discount and a direct say in what ships first.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[14px] text-ink-primary">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 lg:pl-8">
            <div className="rounded-[10px] border border-line bg-surface p-6 sm:p-8">
              <div className="font-mono text-[11px] uppercase tracking-widemono text-ink-tertiary">
                Join the waitlist
              </div>
              <h3 className="mt-2 text-[22px] font-medium tracking-tighter2 text-ink-primary">
                Be first when access opens.
              </h3>

              <div className="mt-6">
                {joined ? (
                  <div className="rounded-[8px] border border-line bg-bg p-5">
                    <div className="font-mono text-[11px] uppercase tracking-widemono text-accent">
                      Confirmed
                    </div>
                    <p className="mt-2 text-[14px] text-ink-primary">
                      You&apos;re on the list. Watch your inbox.
                    </p>
                  </div>
                ) : (
                  <WaitlistForm onSuccess={() => setJoined(true)} />
                )}
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-line pt-5">
                <div className="flex -space-x-1.5">
                  {["#3F4147", "#5E6AD2", "#4CB782"].map((c) => (
                    <span
                      key={c}
                      className="h-5 w-5 rounded-full border border-surface"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <span className="text-[12px] text-ink-tertiary">
                  2,400+ developers waiting
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
