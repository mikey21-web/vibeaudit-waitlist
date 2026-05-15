"use client"

const steps = [
  { num: "01", title: "Paste your URL", desc: "Drop in your deployed app's URL — any platform, any framework." },
  { num: "02", title: "We scan 100+ checks", desc: "Security, SEO, performance, AI, payments, legal, accessibility — all 11 categories in 30 seconds." },
  { num: "03", title: "Get your Vibe Score", desc: "A 0–100 score with a full breakdown of what passed, what failed, and how bad each issue is." },
  { num: "04", title: "Paste fix prompts into Cursor", desc: "Every finding comes with a paste-ready fix prompt. Drop it into Cursor, Windsurf, or Copilot and watch it fix itself." },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 2rem" }}>
      <div className="animate-in" style={{ textAlign: "center", marginBottom: 48 }}>
        <h2 style={{ fontSize: "clamp(1.8rem,5vw,3rem)", color: "#0f172a", marginBottom: 12 }}>
          How VibeAudit works
        </h2>
        <p style={{ color: "#64748b", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
          From URL to fix prompts in under a minute.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
        gap: 24
      }}>
        {steps.map((step, i) => (
          <div
            key={step.num}
            className={`animate-in delay-${i + 1}`}
            style={{
              background: "#fff",
              border: "2px solid #e2e8f0",
              borderRadius: 12,
              padding: "2rem",
              position: "relative",
              transition: "all 0.3s"
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor="#6366f1"; (e.currentTarget as HTMLElement).style.transform="translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow="0 16px 40px rgba(99,102,241,0.12)" }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor="#e2e8f0"; (e.currentTarget as HTMLElement).style.transform="translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow="none" }}
          >
            <div style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: 40, fontWeight: 800,
              background: "linear-gradient(135deg,#e2e8f0,#cbd5e1)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              marginBottom: 16, lineHeight: 1
            }}>{step.num}</div>
            <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, color: "#0f172a", marginBottom: 8 }}>
              {step.title}
            </h3>
            <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Terminal preview */}
      <div className="animate-in delay-5" style={{
        marginTop: 40,
        background: "#0f172a",
        borderRadius: 12,
        overflow: "hidden",
        border: "1px solid #1e293b",
        boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
      }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 6,
          padding: "12px 16px",
          borderBottom: "1px solid #1e293b",
          background: "#1e293b"
        }}>
          {["#ef4444","#f59e0b","#22c55e"].map(c => (
            <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
          ))}
          <span style={{ marginLeft: 8, fontSize: 11, color: "#64748b", fontFamily: "monospace" }}>terminal — vibeaudit scan</span>
        </div>
        <div style={{ padding: "20px 20px", fontFamily: "'JetBrains Mono',monospace", fontSize: 12, lineHeight: 2 }}>
          {[
            { c: "#94a3b8", t: "$ vibeaudit scan https://my-app.vercel.app" },
            { c: "#64748b", t: "→ Resolving DNS..." },
            { c: "#64748b", t: "→ Detecting framework: Next.js 14 + Supabase + Stripe" },
            { c: "#64748b", t: "→ Scanning JS bundles for secrets..." },
            { c: "#f87171", t: "  CRITICAL  Stripe secret key exposed in client bundle" },
            { c: "#fb923c", t: "  HIGH      No Content-Security-Policy header" },
            { c: "#facc15", t: "  MEDIUM    Missing OG meta tags (3 pages)" },
            { c: "#4ade80", t: "  PASS      HTTPS enforced ✓" },
            { c: "#a5b4fc", t: "→ Generating paste-ready fix prompts..." },
            { c: "#fff", t: "  Score: 42/100 · 1 critical · 4 high · 7 medium" },
            { c: "#22d3ee", t: "✓ Fix prompts ready. Paste into Cursor to resolve in minutes." },
          ].map((line, i) => (
            <div key={i} style={{ color: line.c }}>{line.t}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
