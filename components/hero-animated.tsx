"use client"

import { useEffect, useState } from "react"

const variants = [
  {
    eyebrow: "Production-readiness scanner",
    title: ["Is your AI-coded app", "actually launch-safe?"],
    sub: "Scan apps built with Cursor, Lovable, Bolt, and v0 for exposed secrets, broken auth, and 100+ launch-blocking issues.",
    tab: 0,
    card: "terminal",
  },
  {
    eyebrow: "Spot leaks instantly",
    title: ["Find exposed Stripe keys", "before your users do."],
    sub: "We scan your JS bundles for Stripe, OpenAI, and Supabase secrets — readable by anyone with DevTools.",
    tab: 2,
    card: "score",
  },
  {
    eyebrow: "Paste-ready fixes",
    title: ["From URL to fix prompts", "in 30 seconds."],
    sub: "Every finding ships with a paste-ready prompt for Cursor, Windsurf, and Copilot. Drop it in. Done.",
    tab: 1,
    card: "prompt",
  },
] as const

const tabs = ["Security", "Auth", "Payments", "AI Costs", "Infra", "Legal"]

export function HeroAnimated() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % variants.length), 4200)
    return () => clearInterval(t)
  }, [])

  const v = variants[idx]

  return (
    <section style={{
      maxWidth: 1280, margin: "0 auto",
      padding: "3rem 1.5rem 4rem",
      position: "relative"
    }}>
      {/* Outer rounded hero card */}
      <div style={{
        position: "relative",
        borderRadius: 24,
        overflow: "hidden",
        background: "linear-gradient(180deg,#dbeafe 0%,#e0e7ff 45%,#f1f5f9 100%)",
        border: "1px solid #e2e8f0",
        boxShadow: "0 30px 80px rgba(30,58,138,0.10)",
        minHeight: 540
      }}>
        {/* soft mesh accents */}
        <div style={{ position: "absolute", top: -100, left: -80, width: 360, height: 360, background: "radial-gradient(circle,rgba(99,102,241,0.18),transparent 60%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -60, right: -60, width: 320, height: 320, background: "radial-gradient(circle,rgba(249,115,22,0.12),transparent 60%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, left: "30%", width: 420, height: 240, background: "radial-gradient(ellipse,rgba(34,197,94,0.10),transparent 70%)", pointerEvents: "none" }} />

        {/* In-card nav */}
        <div style={{
          position: "relative", zIndex: 2,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "20px 28px"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 800, fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, color: "#0f172a" }}>
            <span style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg,#1e3a8a,#6366f1)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 14 }}>V</span>
            VibeAudit
          </div>

          {/* center icon row */}
          <div style={{ display: "flex", gap: 6, background: "#0f172a", borderRadius: 12, padding: 4 }}>
            {["▦", "◉", "✕", "⚙"].map((g, i) => (
              <div key={i} style={{
                width: 30, height: 28,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: i === 0 ? "#0f172a" : "#94a3b8",
                background: i === 0 ? "#fff" : "transparent",
                borderRadius: 8, fontSize: 12
              }}>{g}</div>
            ))}
          </div>

          <a href="#waitlist" style={{
            background: "#fff", color: "#0f172a",
            padding: "8px 16px", borderRadius: 20,
            fontSize: 13, fontWeight: 700,
            border: "1px solid #e2e8f0",
            textDecoration: "none"
          }}>
            Join Waitlist
          </a>
        </div>

        {/* Eyebrow pill */}
        <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "center", marginTop: 12 }}>
          <div key={`eb-${idx}`} className="fade-cycle" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(8px)",
            color: "#0f172a",
            padding: "5px 14px", borderRadius: 20,
            fontSize: 12, fontWeight: 600,
            border: "1px solid rgba(15,23,42,0.08)"
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f97316", boxShadow: "0 0 8px rgba(249,115,22,0.7)", animation: "pulse-dot 2s ease-in-out infinite" }} />
            {v.eyebrow}
          </div>
        </div>

        {/* Headline — cross-fade */}
        <h1 key={`h-${idx}`} className="fade-cycle" style={{
          position: "relative", zIndex: 2,
          textAlign: "center",
          fontSize: "clamp(2rem,5.5vw,3.6rem)",
          letterSpacing: -1.5,
          margin: "20px auto 14px",
          padding: "0 1.5rem",
          color: "#0f172a",
          maxWidth: 820
        }}>
          {v.title[0]}<br />
          <span style={{
            background: "linear-gradient(135deg,#1e3a8a,#6366f1)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>{v.title[1]}</span>
        </h1>

        {/* Sub */}
        <p key={`s-${idx}`} className="fade-cycle" style={{
          position: "relative", zIndex: 2,
          textAlign: "center",
          color: "#475569",
          fontSize: "clamp(0.95rem,1.6vw,1.05rem)",
          maxWidth: 600,
          margin: "0 auto 22px",
          padding: "0 1.5rem",
          lineHeight: 1.6
        }}>
          {v.sub}
        </p>

        {/* CTA pill */}
        <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "center", marginBottom: 26 }}>
          <a href="#waitlist" style={{
            background: "#0f172a", color: "#fff",
            padding: "12px 24px", borderRadius: 24,
            fontWeight: 700, fontSize: 14,
            fontFamily: "'Space Grotesk',sans-serif",
            textDecoration: "none",
            boxShadow: "0 12px 30px rgba(15,23,42,0.25)"
          }}>
            Get Early Access →
          </a>
        </div>

        {/* Tab row */}
        <div style={{
          position: "relative", zIndex: 2,
          display: "flex", justifyContent: "center", flexWrap: "wrap",
          gap: 4,
          margin: "0 1.5rem",
          padding: "12px 0",
          borderTop: "1px solid rgba(15,23,42,0.08)",
        }}>
          {tabs.map((t, i) => {
            const active = i === v.tab
            return (
              <div key={t} style={{
                position: "relative",
                padding: "10px 18px",
                fontSize: 13, fontWeight: 600,
                color: active ? "#0f172a" : "#94a3b8",
                transition: "color 0.4s ease",
                cursor: "default"
              }}>
                {t}
                <span style={{
                  position: "absolute", left: 12, right: 12, bottom: 0,
                  height: 2, borderRadius: 2,
                  background: active ? "#0f172a" : "transparent",
                  transition: "background 0.4s ease"
                }} />
              </div>
            )
          })}
        </div>

        {/* Bento bottom — split into preview card */}
        <div style={{
          position: "relative", zIndex: 2,
          display: "grid",
          gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
          gap: 16,
          margin: "16px 24px 24px",
        }}>
          {/* left: stats summary */}
          <div className="fade-cycle" key={`lc-${idx}`} style={{
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(10px)",
            border: "1px solid #e2e8f0",
            borderRadius: 16,
            padding: "20px 22px",
            minHeight: 200
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2, color: "#94a3b8", marginBottom: 12 }}>
              {tabs[v.tab]} · Scan summary
            </div>
            <StatRow />
          </div>

          {/* right: variant card */}
          <div className="fade-cycle" key={`rc-${idx}`} style={{
            background: v.card === "terminal" ? "#0f172a" : "rgba(255,255,255,0.92)",
            border: "1px solid",
            borderColor: v.card === "terminal" ? "#1e293b" : "#e2e8f0",
            borderRadius: 16,
            overflow: "hidden",
            minHeight: 200,
            boxShadow: "0 16px 40px rgba(15,23,42,0.10)"
          }}>
            {v.card === "terminal" && <TerminalCard />}
            {v.card === "score" && <ScoreCard />}
            {v.card === "prompt" && <PromptCard />}
          </div>
        </div>
      </div>
    </section>
  )
}

function StatRow() {
  const stats = [
    ["11", "categories"],
    ["100+", "checks"],
    ["30s", "scan time"],
    ["500", "early spots"],
  ]
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 14 }}>
      {stats.map(([val, label]) => (
        <div key={label}>
          <div style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontSize: 28, fontWeight: 800,
            background: "linear-gradient(135deg,#1e3a8a,#6366f1)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            lineHeight: 1
          }}>{val}</div>
          <div style={{ fontSize: 12, color: "#64748b", fontWeight: 600, marginTop: 4 }}>{label}</div>
        </div>
      ))}
    </div>
  )
}

function TerminalCard() {
  const lines = [
    { c: "#94a3b8", t: "$ vibeaudit scan https://my-app.vercel.app" },
    { c: "#64748b", t: "→ Detecting framework: Next.js 14 + Supabase" },
    { c: "#f87171", t: "  CRITICAL  Stripe secret in client bundle" },
    { c: "#fb923c", t: "  HIGH      No Content-Security-Policy" },
    { c: "#facc15", t: "  MEDIUM    Missing OG tags (3 pages)" },
    { c: "#4ade80", t: "  PASS      HTTPS enforced ✓" },
    { c: "#22d3ee", t: "✓ 14 findings · Fix prompts ready" },
  ]
  return (
    <>
      <div style={{ display: "flex", gap: 6, padding: "10px 14px", borderBottom: "1px solid #1e293b", background: "#1e293b" }}>
        {["#ef4444","#f59e0b","#22c55e"].map(c => (
          <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />
        ))}
        <span style={{ marginLeft: 6, fontSize: 10, color: "#64748b", fontFamily: "monospace" }}>scan · vibeaudit</span>
      </div>
      <div style={{ padding: "14px 16px", fontFamily: "'JetBrains Mono',monospace", fontSize: 11, lineHeight: 1.8 }}>
        {lines.map((l, i) => <div key={i} style={{ color: l.c }}>{l.t}</div>)}
      </div>
    </>
  )
}

function ScoreCard() {
  return (
    <div style={{ padding: "18px 20px" }}>
      <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2, color: "#94a3b8" }}>
        Vibe Score
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8, margin: "8px 0 4px" }}>
        <span style={{
          fontFamily: "'Space Grotesk',sans-serif",
          fontSize: 56, fontWeight: 800,
          background: "linear-gradient(135deg,#f97316,#ef4444)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          lineHeight: 1
        }}>42</span>
        <span style={{ color: "#94a3b8", fontWeight: 600 }}>/ 100</span>
      </div>
      <div style={{ fontSize: 12, color: "#ef4444", fontWeight: 600, marginBottom: 12 }}>Not launch-ready</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {[
          ["Security", 30, "#ef4444"],
          ["Auth", 55, "#f59e0b"],
          ["Payments", 25, "#ef4444"],
          ["Legal", 70, "#facc15"],
        ].map(([label, pct, color]) => (
          <div key={String(label)} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 11, color: "#475569", fontWeight: 600, width: 70 }}>{label}</span>
            <div style={{ flex: 1, height: 5, background: "#f1f5f9", borderRadius: 999, overflow: "hidden" }}>
              <div style={{ width: `${pct}%`, height: "100%", background: color as string, borderRadius: 999 }} />
            </div>
            <span style={{ fontSize: 11, color: "#64748b", fontWeight: 700, width: 28, textAlign: "right" }}>{String(pct)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function PromptCard() {
  return (
    <div style={{ padding: "16px 18px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
        <span style={{ width: 22, height: 22, borderRadius: 6, background: "#0f172a", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700 }}>C</span>
        <span style={{ fontSize: 12, fontWeight: 700, color: "#0f172a" }}>Cursor — paste this</span>
        <span style={{ marginLeft: "auto", fontSize: 10, color: "#94a3b8" }}>auto-generated</span>
      </div>
      <div style={{
        background: "#0f172a", color: "#e2e8f0",
        borderRadius: 10, padding: "12px 14px",
        fontFamily: "'JetBrains Mono',monospace", fontSize: 11,
        lineHeight: 1.7,
        border: "1px solid #1e293b"
      }}>
        <div style={{ color: "#94a3b8" }}>{`// Fix: move STRIPE_SECRET to server`}</div>
        <div>Move <span style={{ color: "#fb923c" }}>STRIPE_SECRET_KEY</span> from</div>
        <div><span style={{ color: "#22d3ee" }}>lib/stripe.ts</span> to a server-only</div>
        <div>route handler. Remove all imports</div>
        <div>from <span style={{ color: "#22d3ee" }}>components/*</span>. Add it to</div>
        <div><span style={{ color: "#22d3ee" }}>.env.local</span> as a server-only var.</div>
      </div>
      <button style={{
        marginTop: 10, width: "100%",
        background: "#0f172a", color: "#fff",
        border: "none", padding: "8px 12px",
        borderRadius: 8, fontSize: 12, fontWeight: 700,
        fontFamily: "'Space Grotesk',sans-serif",
        cursor: "pointer"
      }}>
        Copy prompt
      </button>
    </div>
  )
}
