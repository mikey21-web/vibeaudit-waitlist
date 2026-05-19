import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "DeploySafe — We hack you, then we patch you"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const MONO = "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0a0a0f",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: "64px 80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            left: -150,
            width: 800,
            height: 600,
            display: "flex",
            background:
              "radial-gradient(circle at center, rgba(99,102,241,0.22), transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -150,
            right: -150,
            width: 600,
            height: 400,
            display: "flex",
            background:
              "radial-gradient(circle at center, rgba(239,68,68,0.12), transparent 60%)",
          }}
        />

        <div style={{ display: "flex", flex: 1 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 620,
            }}
          >
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                padding: "6px 14px",
                borderRadius: 999,
                border: "1px solid rgba(99,102,241,0.35)",
                background: "rgba(99,102,241,0.12)",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1.2,
                color: "#a5b4fc",
              }}
            >
              PRIVATE BETA · WAITLIST OPEN
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 28,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #7170FF, #5E6AD2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: 26,
                  fontWeight: 800,
                }}
              >
                D
              </div>
              <div
                style={{
                  marginLeft: 14,
                  fontSize: 30,
                  fontWeight: 700,
                  letterSpacing: -0.4,
                  display: "flex",
                }}
              >
                DeploySafe
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 36,
              }}
            >
              <div
                style={{
                  fontSize: 46,
                  fontWeight: 700,
                  letterSpacing: -1.5,
                  color: "#ffffff",
                  lineHeight: 1.08,
                  display: "flex",
                }}
              >
                We don&apos;t just tell you
              </div>
              <div
                style={{
                  fontSize: 46,
                  fontWeight: 700,
                  letterSpacing: -1.5,
                  color: "#ffffff",
                  lineHeight: 1.08,
                  display: "flex",
                }}
              >
                you&apos;re vulnerable.
              </div>
              <div
                style={{
                  marginTop: 6,
                  fontSize: 56,
                  fontWeight: 800,
                  letterSpacing: -2,
                  lineHeight: 1.05,
                  color: "#818cf8",
                  display: "flex",
                }}
              >
                We hack you.
              </div>
            </div>

            <div
              style={{
                marginTop: 22,
                fontSize: 17,
                color: "#a1a1aa",
                lineHeight: 1.4,
                maxWidth: 560,
                display: "flex",
              }}
            >
              Production-readiness scanner for apps shipped from Cursor,
              Lovable, Bolt, v0, and Claude Code.
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 28,
              }}
            >
              <div
                style={{
                  display: "flex",
                  padding: "7px 12px",
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.10)",
                  background: "rgba(255,255,255,0.04)",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#e4e4e7",
                  marginRight: 8,
                }}
              >
                50% OFF — first 500 only
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "7px 12px",
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.10)",
                  background: "rgba(255,255,255,0.04)",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#e4e4e7",
                }}
              >
                Launching soon
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "flex-end",
              marginLeft: 24,
            }}
          >
            <div
              style={{
                width: 440,
                height: 380,
                display: "flex",
                flexDirection: "column",
                borderRadius: 16,
                border: "1px solid rgba(239,68,68,0.30)",
                background: "#0d0d12",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: 38,
                  padding: "0 14px",
                  background: "rgba(255,255,255,0.03)",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: 999,
                      background: "#ef4444",
                      display: "flex",
                    }}
                  />
                  <div
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: 999,
                      background: "#eab308",
                      marginLeft: 8,
                      display: "flex",
                    }}
                  />
                  <div
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: 999,
                      background: "#22c55e",
                      marginLeft: 8,
                      display: "flex",
                    }}
                  />
                  <div
                    style={{
                      marginLeft: 12,
                      fontSize: 11,
                      color: "#71717a",
                      fontFamily: MONO,
                      display: "flex",
                    }}
                  >
                    deploysafe ▸ attack-replay
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    color: "#ef4444",
                    display: "flex",
                  }}
                >
                  ● LIVE
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: 18,
                  fontFamily: MONO,
                  fontSize: 12.5,
                  lineHeight: 1.7,
                  flex: 1,
                }}
              >
                <div style={{ color: "#d4d4d8", display: "flex" }}>
                  $ deploysafe scan https://my-app.vercel.app
                </div>
                <div
                  style={{
                    color: "#71717a",
                    display: "flex",
                    marginTop: 10,
                  }}
                >
                  → Stack: Next.js 14 · Supabase · Stripe
                </div>
                <div style={{ color: "#71717a", display: "flex" }}>
                  → 17 categories · 100+ checks
                </div>
                <div
                  style={{
                    color: "#fb923c",
                    display: "flex",
                    fontWeight: 600,
                    marginTop: 12,
                  }}
                >
                  ⚠ Stripe webhook signature missing
                </div>
                <div
                  style={{
                    color: "#fde047",
                    display: "flex",
                    marginTop: 12,
                  }}
                >
                  ▶ Replaying attack…
                </div>
                <div style={{ color: "#fde047", display: "flex" }}>
                  → POST /api/webhooks/stripe (forged)
                </div>
                <div
                  style={{
                    color: "#34d399",
                    display: "flex",
                    marginTop: 10,
                  }}
                >
                  ← HTTP 200 OK
                </div>
                <div
                  style={{
                    color: "#f87171",
                    display: "flex",
                    fontWeight: 700,
                    fontSize: 13,
                    marginTop: 12,
                  }}
                >
                  🚨 Attack succeeded — plan unlocked without payment
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 24,
          }}
        >
          <div
            style={{
              fontFamily: MONO,
              fontSize: 16,
              fontWeight: 600,
              color: "#818cf8",
              display: "flex",
            }}
          >
            deploysafe.in
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#71717a",
              display: "flex",
            }}
          >
            We hack you, then we patch you.
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
