import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "VibeAudit — Production scanner for vibe-coded apps"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#08090A",
          display: "flex",
          flexDirection: "column",
          padding: 72,
          position: "relative",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            left: 360,
            width: 720,
            height: 480,
            background:
              "radial-gradient(circle at center, rgba(94,106,210,0.35), transparent 60%)",
            filter: "blur(40px)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 7,
              background: "#F7F8F8",
              color: "#08090A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            V
          </div>
          <div style={{ fontSize: 22, fontWeight: 500, color: "#F7F8F8" }}>VibeAudit</div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "ui-monospace, monospace",
              fontSize: 18,
              color: "#5E6AD2",
              letterSpacing: 1.4,
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 8,
                background: "#5E6AD2",
              }}
            />
            Private beta · join the waitlist
          </div>

          <div
            style={{
              fontSize: 88,
              fontWeight: 500,
              letterSpacing: -3,
              lineHeight: 1.02,
              color: "#F7F8F8",
              maxWidth: 980,
            }}
          >
            Your Cursor app is leaking.
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 500,
              letterSpacing: -3,
              lineHeight: 1.02,
              color: "#8A8F98",
              maxWidth: 980,
            }}
          >
            Find out where.
          </div>

          <div
            style={{
              marginTop: 28,
              fontSize: 22,
              color: "#8A8F98",
              maxWidth: 820,
              lineHeight: 1.45,
            }}
          >
            Scans apps built with Cursor, Lovable, Bolt, and v0 for exposed keys, broken auth, and
            100+ launch-blocking issues — and writes the fix prompts.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontFamily: "ui-monospace, monospace",
            fontSize: 16,
            color: "#62666D",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: 6, background: "#4CB782" }} />
            30s scan
          </div>
          <div>·</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: 6, background: "#4CB782" }} />
            100+ checks
          </div>
          <div>·</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: 6, background: "#4CB782" }} />
            50% off for first 500
          </div>
          <div style={{ marginLeft: "auto", color: "#F7F8F8" }}>vibeaudit.dev</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
