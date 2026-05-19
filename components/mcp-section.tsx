"use client"

import { Reveal } from "./reveal"

const examples = [
  "\"Scan https://my-app.vercel.app and fix any criticals.\"",
  "\"Replay the JWT bypass on my staging endpoint.\"",
  "\"What headers am I missing for SOC2?\"",
]

export function MCPSection() {
  return (
    <section id="mcp" className="border-b border-line/60">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal as="header" className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widemono text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(94,106,210,0.8)]" />
              MCP server · live on npm
            </div>
            <h2 className="mt-4 text-h2 text-ink-primary">
              Use it from your AI editor.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.6] text-ink-secondary">
              Add DeploySafe as an MCP server. Your AI assistant runs the scans, reads the
              findings, and applies fixes — all without leaving the chat.
            </p>
            <p className="mt-3 text-[14px] leading-[1.55] text-ink-tertiary">
              Works with Claude Code, Cursor, Windsurf, and any MCP-compatible client.
            </p>
          </Reveal>

          <Reveal delay={2} className="lg:col-span-7">
            <div className="overflow-hidden rounded-[12px] border border-line bg-surface">
              <div className="flex items-center gap-2 border-b border-line bg-elevated px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#EB5757]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#E2B341]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#4CB782]" />
                <span className="ml-2 font-mono text-[11px] text-ink-tertiary">
                  ~/my-app — claude-code
                </span>
              </div>
              <div className="px-5 py-5 font-mono text-[12.5px] leading-[1.8]">
                <div className="text-ink-tertiary">$ claude mcp add deploysafe \</div>
                <div className="text-ink-tertiary">    npx @deploysafe/mcp</div>
                <div className="mt-2 text-success">✓ deploysafe registered</div>
                <div className="mt-4 text-ink-tertiary">$ claude</div>
                <div className="mt-1 text-ink-secondary">
                  &gt; scan https://my-app.vercel.app and fix any criticals
                </div>
                <div className="mt-2 text-ink-tertiary">
                  → using tool: deploysafe.scan
                </div>
                <div className="text-warn">
                  → 2 critical, 4 high · fix prompts queued
                </div>
                <div className="mt-1 text-accent">
                  ← Applying fixes to /api/auth/jwt.ts…
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[10px] border border-line bg-surface/40 p-5">
              <div className="font-mono text-[11px] uppercase tracking-widemono text-ink-tertiary">
                What you can ask
              </div>
              <ul className="mt-3 space-y-2">
                {examples.map((ex) => (
                  <li
                    key={ex}
                    className="flex items-start gap-2 font-mono text-[13px] leading-[1.55] text-ink-secondary"
                  >
                    <span className="text-accent">›</span>
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
