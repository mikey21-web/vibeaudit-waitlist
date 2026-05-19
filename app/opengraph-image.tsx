import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "DeploySafe — We hack you, then we patch you"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#08090A",
          color: "#F7F8F8",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          padding: "64px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 75% 35%, rgba(94,106,210,0.20), transparent 55%), radial-gradient(circle at 20% 90%, rgba(235,87,87,0.10), transparent 55%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <svg
            width="52"
            height="52"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="og-shield"
                x1="2"
                y1="2"
                x2="26"
                y2="26"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#7170FF" />
                <stop offset="100%" stopColor="#5E6AD2" />
              </linearGradient>
            </defs>
            <path
              d="M14 2.5 L24 5.5 V13 C24 18.5 19.5 23.5 14 25.5 C8.5 23.5 4 18.5 4 13 V5.5 Z"
              fill="url(#og-shield)"
            />
            <path
              d="M9 14.5 L12.5 18 L19 10.5"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: -0.4 }}>
            DeploySafe
          </div>
        </div>

        <div
          style={{
            marginTop: 64,
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#EB5757",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#EB5757",
                display: "flex",
              }}
            />
            Live attack replay · industry first
          </div>

          <div
            style={{
              fontSize: 78,
              fontWeight: 600,
              lineHeight: 1.06,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            We hack you,
            <br />
            then we patch you.
          </div>

          <div
            style={{
              fontSize: 28,
              color: "#8A8F98",
              maxWidth: 940,
              lineHeight: 1.35,
              marginTop: 8,
            }}
          >
            Production-readiness scanner for apps shipped from Claude Code,
            Cursor, Lovable, Bolt, v0.
          </div>
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              background: "#0D0E10",
              border: "1px solid #1F2023",
              borderRadius: 14,
              padding: "16px 22px",
            }}
          >
            <div
              style={{
                fontSize: 56,
                fontWeight: 600,
                color: "#EB5757",
                lineHeight: 1,
                letterSpacing: -1.5,
              }}
            >
              42
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ fontSize: 14, color: "#62666D", letterSpacing: 1.2 }}>
                VIBE SCORE
              </div>
              <div style={{ fontSize: 18, color: "#F7F8F8" }}>
                1 critical · 4 high · 7 medium
              </div>
            </div>
          </div>

          <div
            style={{
              fontSize: 22,
              color: "#62666D",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: "#4CB782",
                display: "flex",
              }}
            />
            deploysafe.in
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
