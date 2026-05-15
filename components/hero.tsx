"use client"

import { useState } from "react"
import { WaitlistForm } from "./waitlist-form"

export function Hero() {
  const [joined, setJoined] = useState(false)

  return (
    <section id="waitlist" style={{
      maxWidth: 1280, margin: "0 auto",
      padding: "5rem 2rem",
      position: "relative", overflow: "hidden"
    }}>
      {/* BG blobs */}
      <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, background: "radial-gradient(circle,rgba(249,115,22,0.08),transparent)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -80, left: -80, width: 400, height: 400, background: "radial-gradient(circle,rgba(30,58,138,0.05),transparent)", borderRadius: "50%", pointerEvents: "none" }} />

      <div style={{ textAlign: "center" }} className="animate-in">
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "linear-gradient(135deg,#fef08a,#fed7aa)",
          color: "#92400e", padding: "6px 16px",
          borderRadius: 20, fontSize: 13, fontWeight: 700,
          marginBottom: 24
        }}>
          <span style={{
            width: 8, height: 8, borderRadius: "50%",
            background: "#f97316",
            boxShadow: "0 0 8px rgba(249,115,22,0.7)",
            display: "inline-block",
            animation: "pulse-dot 2s ease-in-out infinite"
          }} />
          Now accepting early access — limited spots
        </div>

        {/* Headline */}
        <h1 className="animate-in delay-1" style={{
          fontSize: "clamp(2.5rem,7vw,4.5rem)",
          fontFamily: "'Space Grotesk',sans-serif",
          letterSpacing: -2, marginBottom: 24, color: "#0f172a"
        }}>
          Is your vibe-coded app<br />
          <span style={{
            background: "linear-gradient(135deg,#f97316,#6366f1)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>actually launch-safe?</span>
        </h1>

        {/* Sub */}
        <p className="animate-in delay-2" style={{
          fontSize: "clamp(1rem,2.5vw,1.2rem)",
          color: "#64748b", maxWidth: 640,
          margin: "0 auto 2.5rem",
          lineHeight: 1.7
        }}>
          VibeAudit scans apps built with Cursor, Lovable, Bolt, and v0 for exposed API keys,
          missing auth, broken payments, and 100+ other issues — then gives you paste-ready
          fix prompts for your AI coding tool.
        </p>

        {/* Card */}
        <div className="animate-in delay-3" style={{
          maxWidth: 460, margin: "0 auto",
          background: "#fff",
          border: "2px solid #e2e8f0",
          borderRadius: 16,
          padding: "2rem",
          boxShadow: "0 20px 50px rgba(0,0,0,0.08)"
        }}>
          {joined ? (
            <div style={{ textAlign: "center", padding: "1rem 0" }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>🎉</div>
              <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", color: "#0f172a", marginBottom: 8 }}>
                You&apos;re on the list!
              </h3>
              <p style={{ color: "#64748b", fontSize: 14 }}>
                Check your inbox — we sent a confirmation. We&apos;ll email you the moment access opens.
              </p>
            </div>
          ) : (
            <>
              <WaitlistForm onSuccess={() => setJoined(true)} />
              <p style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #e2e8f0", fontSize: 13, color: "#94a3b8", textAlign: "center" }}>
                No spam. One email when we launch.
              </p>
            </>
          )}
        </div>

        {/* Stats */}
        <div className="animate-in delay-4" style={{
          marginTop: 40,
          display: "flex", flexWrap: "wrap",
          justifyContent: "center", gap: 32
        }}>
          {[
            ["11", "audit categories"],
            ["100+", "checks per scan"],
            ["30s", "to your score"],
            ["500", "early access spots"],
          ].map(([val, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontSize: 24, fontWeight: 800,
                background: "linear-gradient(135deg,#f97316,#6366f1)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
              }}>{val}</div>
              <div style={{ fontSize: 13, color: "#64748b", fontWeight: 600 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
