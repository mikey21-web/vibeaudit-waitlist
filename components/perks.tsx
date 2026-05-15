"use client"

import { useState } from "react"
import { WaitlistForm } from "./waitlist-form"

const perks = [
  { icon: "⚡", title: "Early access", desc: "Get in before the public launch" },
  { icon: "🎁", title: "50% launch discount", desc: "First 500 members only" },
  { icon: "🔍", title: "Free deep scan", desc: "On day one, on us" },
  { icon: "🏅", title: "Founding member badge", desc: "Shown on your report forever" },
  { icon: "🗺️", title: "Shape the roadmap", desc: "Direct input on what we build next" },
  { icon: "💬", title: "Founder access", desc: "Direct line to the team via email" },
]

export function Perks() {
  const [joined, setJoined] = useState(false)

  return (
    <section id="perks" style={{
      background: "linear-gradient(135deg,rgba(30,58,138,0.04),rgba(99,102,241,0.04))",
      borderTop: "2px solid #e2e8f0",
      padding: "5rem 2rem"
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="animate-in" style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: "clamp(1.8rem,5vw,3rem)", color: "#0f172a", marginBottom: 12 }}>
            What waitlist members get
          </h2>
          <p style={{ color: "#64748b", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
            We&apos;re rolling out access in small cohorts. Join early and lock in these perks.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20, marginBottom: 48 }}>
          {perks.map((perk, i) => (
            <div
              key={perk.title}
              className={`animate-in delay-${Math.min(i + 1, 6)}`}
              style={{
                background: "#fff",
                border: "2px solid #e2e8f0",
                borderRadius: 12,
                padding: "1.5rem",
                display: "flex", gap: 16, alignItems: "flex-start",
                transition: "all 0.3s"
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor="#6366f1"; (e.currentTarget as HTMLElement).style.transform="translateY(-3px)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor="#e2e8f0"; (e.currentTarget as HTMLElement).style.transform="translateY(0)" }}
            >
              <span style={{ fontSize: 24, lineHeight: 1 }}>{perk.icon}</span>
              <div>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 16, color: "#0f172a", marginBottom: 4 }}>{perk.title}</h3>
                <p style={{ color: "#64748b", fontSize: 13, margin: 0 }}>{perk.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA card */}
        <div className="animate-in" style={{
          maxWidth: 520, margin: "0 auto",
          background: "#fff",
          border: "2px solid #e2e8f0",
          borderRadius: 16,
          padding: "2rem",
          boxShadow: "0 20px 50px rgba(0,0,0,0.06)"
        }}>
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 20, color: "#0f172a", marginBottom: 6, textAlign: "center" }}>
            Secure your spot
          </h3>
          <p style={{ color: "#64748b", fontSize: 14, textAlign: "center", marginBottom: 20 }}>
            Join 2,400+ developers already waiting.
          </p>
          {joined ? (
            <div style={{ textAlign: "center", padding: "1rem 0" }}>
              <div style={{ fontSize: 36, marginBottom: 8 }}>🎉</div>
              <p style={{ color: "#0f172a", fontWeight: 600 }}>You&apos;re on the list!</p>
              <p style={{ color: "#64748b", fontSize: 13, marginTop: 4 }}>Check your inbox for confirmation.</p>
            </div>
          ) : (
            <>
              <WaitlistForm onSuccess={() => setJoined(true)} />
              <p style={{ marginTop: 12, fontSize: 12, color: "#94a3b8", textAlign: "center" }}>
                No spam. One email when we launch. Unsubscribe any time.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
