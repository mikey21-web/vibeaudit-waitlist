"use client"

import { Reveal } from "./reveal"

type Cell =
  | { kind: "yes"; note?: string }
  | { kind: "no" }
  | { kind: "partial"; note: string }
  | { kind: "text"; value: string }

interface Row {
  feature: string
  deploysafe: Cell
  snyk: Cell
  checkvibe: Cell
}

const rows: Row[] = [
  {
    feature: "Live attack replay (working curl)",
    deploysafe: { kind: "yes" },
    snyk: { kind: "no" },
    checkvibe: { kind: "no" },
  },
  {
    feature: "AI fix prompts for Cursor / Claude Code",
    deploysafe: { kind: "yes" },
    snyk: { kind: "no" },
    checkvibe: { kind: "partial", note: "Generic" },
  },
  {
    feature: "Active pentest probes (JWT, mass-assign, BOLA)",
    deploysafe: { kind: "yes" },
    snyk: { kind: "partial", note: "Enterprise tier" },
    checkvibe: { kind: "no" },
  },
  {
    feature: "MCP server for AI editors",
    deploysafe: { kind: "yes" },
    snyk: { kind: "no" },
    checkvibe: { kind: "no" },
  },
  {
    feature: "Built for vibe-coded apps (Lovable, Bolt, v0)",
    deploysafe: { kind: "yes" },
    snyk: { kind: "no" },
    checkvibe: { kind: "yes" },
  },
  {
    feature: "Starts at",
    deploysafe: { kind: "text", value: "$9 / mo" },
    snyk: { kind: "text", value: "$25 / mo" },
    checkvibe: { kind: "text", value: "$12 / mo" },
  },
]

function CellView({ cell }: { cell: Cell }) {
  if (cell.kind === "yes") {
    return (
      <span className="inline-flex items-center justify-center">
        <span className="grid h-5 w-5 place-items-center rounded-full bg-accent/15 text-[11px] text-accent">
          ✓
        </span>
      </span>
    )
  }
  if (cell.kind === "no") {
    return (
      <span className="inline-flex items-center justify-center">
        <span className="grid h-5 w-5 place-items-center rounded-full bg-warn/15 text-[11px] text-warn">
          ✕
        </span>
      </span>
    )
  }
  if (cell.kind === "partial") {
    return (
      <span className="inline-flex flex-col items-center justify-center gap-1">
        <span className="grid h-5 w-5 place-items-center rounded-full bg-[#E2B341]/15 text-[11px] text-[#E2B341]">
          ~
        </span>
        <span className="text-[10px] text-ink-tertiary">{cell.note}</span>
      </span>
    )
  }
  return (
    <span className="font-medium text-ink-primary tabular-nums">{cell.value}</span>
  )
}

export function Comparison() {
  return (
    <section id="vs" className="border-b border-line/60">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <Reveal as="header" className="mx-auto max-w-2xl text-center">
          <div className="font-mono text-[11px] uppercase tracking-widemono text-accent">
            We replay. They list.
          </div>
          <h2 className="mt-4 text-h2 text-ink-primary">
            How we compare.
          </h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-ink-secondary">
            Most scanners hand you a CVE list and call it a day. Here&apos;s what changes when
            every finding ships with a working exploit.
          </p>
        </Reveal>

        <Reveal delay={1} className="mt-12 overflow-hidden rounded-[14px] border border-line bg-surface/40">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-[14px]">
              <thead>
                <tr className="border-b border-line bg-elevated/50">
                  <th className="w-[42%] px-5 py-4 text-left font-mono text-[11px] uppercase tracking-widemono text-ink-tertiary">
                    Feature
                  </th>
                  <th className="px-3 py-4 text-center">
                    <div className="font-medium tracking-tightish text-ink-primary">
                      DeploySafe
                    </div>
                    <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widemono text-accent">
                      You are here
                    </div>
                  </th>
                  <th className="px-3 py-4 text-center font-medium tracking-tightish text-ink-secondary">
                    Snyk
                  </th>
                  <th className="px-3 py-4 text-center font-medium tracking-tightish text-ink-secondary">
                    CheckVibe
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr
                    key={r.feature}
                    className={
                      i === rows.length - 1
                        ? "bg-bg/40"
                        : "border-b border-line/60"
                    }
                  >
                    <td className="px-5 py-4 text-[13.5px] text-ink-secondary">
                      {r.feature}
                    </td>
                    <td className="px-3 py-4 text-center bg-accent/[0.04]">
                      <CellView cell={r.deploysafe} />
                    </td>
                    <td className="px-3 py-4 text-center">
                      <CellView cell={r.snyk} />
                    </td>
                    <td className="px-3 py-4 text-center">
                      <CellView cell={r.checkvibe} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal className="mt-6 text-center text-[12px] text-ink-tertiary">
          Pricing and capabilities reflect public sources as of May 2026.
        </Reveal>
      </div>
    </section>
  )
}
