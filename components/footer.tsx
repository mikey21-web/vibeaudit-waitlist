"use client"

export function Footer() {
  return (
    <footer style={{
      background: "#0f172a",
      color: "#94a3b8",
      borderTop: "2px solid #1e293b",
      padding: "3rem 2rem"
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        display: "flex", flexWrap: "wrap",
        justifyContent: "space-between", alignItems: "center", gap: 20
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 24, height: 24,
            background: "linear-gradient(135deg,#1e3a8a,#6366f1)",
            borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <span style={{ color: "#fff", fontSize: 12 }}>✦</span>
          </div>
          <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, color: "#fff", fontSize: 16 }}>
            VibeAudit
          </span>
        </div>

        <p style={{ fontSize: 13, color: "#475569", textAlign: "center" }}>
          © {new Date().getFullYear()} VibeAudit. Built for the vibe-coding era.
        </p>

        <div style={{ display: "flex", gap: 24 }}>
          {[["Privacy","#"],["Terms","#"],["Contact","#"]].map(([label, href]) => (
            <a key={label} href={href} style={{ color: "#475569", textDecoration: "none", fontSize: 13, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color="#fff")}
              onMouseLeave={e => (e.currentTarget.style.color="#475569")}
            >{label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
