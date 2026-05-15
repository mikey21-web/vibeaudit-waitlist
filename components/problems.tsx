"use client"

const problems = [
  { icon: "🔑", category: "SECURITY", title: "Exposed API Keys", desc: "Stripe secret keys, OpenAI keys, and Supabase tokens leaking inside your JS bundles — readable by anyone." },
  { icon: "🔓", category: "AUTH", title: "Unprotected Admin Routes", desc: "/admin, /api/admin, and dashboard routes returning 200 to anonymous requests. No auth at all." },
  { icon: "💳", category: "PAYMENTS", title: "Broken Webhook Validation", desc: "Stripe webhooks not verifying signatures — anyone can forge payment events and unlock paid features for free." },
  { icon: "🧠", category: "AI COSTS", title: "OpenAI Cost Leaks", desc: "Missing rate limits on AI routes letting users make unlimited API calls, costing you $50+ per day." },
  { icon: "🏗️", category: "INFRA", title: "Supabase Tables Exposed", desc: "Missing Row-Level Security policies letting any user read or write other users' data." },
  { icon: "📋", category: "LEGAL", title: "Missing Legal Pages", desc: "No privacy policy, no terms of service, no cookie consent — putting you at legal and compliance risk." },
]

export function Problems() {
  return (
    <section id="problems" style={{
      background: "#f8fafc",
      borderTop: "2px solid #e2e8f0",
      borderBottom: "2px solid #e2e8f0",
      padding: "5rem 2rem"
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="animate-in" style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: "clamp(1.8rem,5vw,3rem)", color: "#0f172a", marginBottom: 12 }}>
            Right now, your app might have:
          </h2>
          <p style={{ color: "#64748b", fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            We scanned 2,700+ vibe-coded apps. These are the issues we find in 9 out of 10 of them.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: 20
        }}>
          {problems.map((p, i) => (
            <div
              key={p.title}
              className={`animate-in delay-${Math.min(i + 1, 6)}`}
              style={{
                background: "#fff",
                border: "2px solid #e2e8f0",
                borderRadius: 12,
                padding: "1.5rem",
                transition: "all 0.3s",
                cursor: "default"
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor="#f97316"; (e.currentTarget as HTMLElement).style.boxShadow="0 16px 40px rgba(249,115,22,0.12)"; (e.currentTarget as HTMLElement).style.transform="translateY(-4px)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor="#e2e8f0"; (e.currentTarget as HTMLElement).style.boxShadow="none"; (e.currentTarget as HTMLElement).style.transform="translateY(0)" }}
            >
              <div style={{ fontSize: 32, marginBottom: 12 }}>{p.icon}</div>
              <span style={{
                display: "inline-block",
                fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1,
                background: "rgba(249,115,22,0.1)", color: "#f97316",
                padding: "3px 10px", borderRadius: 4, marginBottom: 10
              }}>{p.category}</span>
              <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, marginBottom: 8, color: "#0f172a" }}>
                {p.title}
              </h3>
              <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="animate-in" style={{ textAlign: "center", marginTop: 40 }}>
          <a href="#waitlist" style={{
            display: "inline-block",
            background: "linear-gradient(135deg,#1e3a8a,#6366f1)",
            color: "#fff", padding: "14px 32px",
            borderRadius: 8, fontWeight: 700, fontSize: 15,
            fontFamily: "'Space Grotesk',sans-serif",
            textDecoration: "none", letterSpacing: 0.5
          }}>
            Find out if your app is affected →
          </a>
        </div>
      </div>
    </section>
  )
}
