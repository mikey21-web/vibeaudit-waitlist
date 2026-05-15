"use client"

export function Navbar() {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(255,255,255,0.95)",
      backdropFilter: "blur(10px)",
      borderBottom: "2px solid #e2e8f0",
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
    }}>
      <nav style={{
        maxWidth: 1280, margin: "0 auto",
        padding: "1rem 2rem",
        display: "flex", justifyContent: "space-between", alignItems: "center"
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 28, height: 28,
            background: "linear-gradient(135deg,#1e3a8a,#6366f1)",
            borderRadius: 6,
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <span style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>✦</span>
          </div>
          <span style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 700, fontSize: 18,
            background: "linear-gradient(135deg,#1e3a8a,#6366f1)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>VibeAudit</span>
        </div>

        {/* Nav links */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="hidden md:flex">
          {[["#how-it-works","How it works"],["#problems","What we catch"],["#perks","What you get"]].map(([href, label]) => (
            <a key={href} href={href} style={{
              color: "#475569", fontWeight: 600, textDecoration: "none",
              fontSize: 14, transition: "color 0.2s"
            }}
            onMouseEnter={e => (e.currentTarget.style.color="#f97316")}
            onMouseLeave={e => (e.currentTarget.style.color="#475569")}
            >{label}</a>
          ))}
        </div>

        {/* CTA */}
        <a href="#waitlist" style={{
          background: "linear-gradient(135deg,#1e3a8a,#6366f1)",
          color: "#fff", padding: "8px 20px",
          borderRadius: 8, fontWeight: 700, fontSize: 14,
          textDecoration: "none", fontFamily: "'Space Grotesk',sans-serif",
          transition: "transform 0.2s, box-shadow 0.2s",
          display: "inline-block"
        }}
        onMouseEnter={e => { e.currentTarget.style.transform="translateY(-1px)"; e.currentTarget.style.boxShadow="0 8px 20px rgba(30,58,138,0.3)" }}
        onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none" }}
        >
          Join Waitlist
        </a>
      </nav>
    </header>
  )
}
