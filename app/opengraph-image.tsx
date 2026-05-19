import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "DeploySafe — We hack you, then we patch you"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const MONO = "'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"

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
          fontFamily:
            "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
          position: "relative",
          padding: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(135deg, #0a0a0f 0%, #0f0f1a 50%, #0a0a0f 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -200,
            left: 200,
            width: 800,
            height: 400,
            display: "flex",
            background:
              "radial-gradient(ellipse at center, rgba(99,102,241,0.18), transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: -80,
            width: 400,
            height: 200,
            display: "flex",
            background:
              "radial-gradient(ellipse at center, rgba(239,68,68,0.10), transparent 60%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flex: 1,
            padding: "64px 80px 0 80px",
          }}
        >
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
                alignItems: "center",
                alignSelf: "flex-start",
                padding: "6px 14px",
                borderRadius: 999,
                border: "1px solid rgba(99,102,241,0.30)",
                background: "rgba(99,102,241,0.10)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 1,
                color: "#a5b4fc",
              }}
            >
              🟢 PRIVATE BETA · WAITLIST OPEN
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 24,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    fill="white"
                  />
                </svg>
              </div>
              <div
                style={{
                  marginLeft: 12,
                  fontSize: 28,
                  fontWeight: 700,
                  color: "white",
                  letterSpacing: -0.5,
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
                marginTop: 32,
              }}
            >
              <div
                style={{
                  fontSize: 44,
                  fontWeight: 700,
                  letterSpacing: -1.5,
                  color: "white",
                  lineHeight: 1.08,
                  display: "flex",
                }}
              >
                We don&apos;t just tell you
              </div>
              <div
                style={{
                  fontSize: 44,
                  fontWeight: 700,
                  letterSpacing: -1.5,
                  color: "white",
                  lineHeight: 1.08,
                  display: "flex",
                }}
              >
                you&apos;re vulnerable.
              </div>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 52,
                  fontWeight: 800,
                  letterSpacing: -2,
                  lineHeight: 1.05,
                  display: "flex",
                  backgroundImage:
                    "linear-gradient(90deg, #818cf8, #60a5fa)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                We hack you.
              </div>
            </div>

            <div
              style={{
                marginTop: 20,
                maxWidth: 560,
                fontSize: 17,
                color: "#a1a1aa",
                lineHeight: 1.4,
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
                gap: 8,
              }}
            >
              {[
                "🟢 LIVE — early access opening",
                "⚡ 50% OFF — first 500 only",
                "🚀 Launching soon",
              ].map((label) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    padding: "7px 12px",
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#e4e4e7",
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "flex-end",
              paddingLeft: 24,
            }}
          >
            <div
              style={{
                width: 460,
                height: 380,
                display: "flex",
                flexDirection: "column",
                borderRadius: 16,
                border: "1px solid rgba(239,68,68,0.25)",
                background: "#0d0d12",
                overflow: "hidden",
                boxShadow: "0 40px 80px -30px rgba(239,68,68,0.30)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: 36,
                  padding: "0 14px",
                  background: "rgba(255,255,255,0.02)",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
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
                    attack-replay › POST /api/webhooks/stripe
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 999,
                      background: "#ef4444",
                      display: "flex",
                    }}
                  />
                  <div
                    style={{
                      marginLeft: 6,
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: 1.5,
                      color: "#ef4444",
                      display: "flex",
                    }}
                  >
                    LIVE
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: 18,
                  fontFamily: MONO,
                  fontSize: 12.5,
                  lineHeight: 1.6,
                  flex: 1,
                }}
              >
                <div style={{ color: "#d4d4d8", display: "flex" }}>
                  $ deploysafe scan https://my-app.vercel.app
                </div>

                <div style={{ height: 12, display: "flex" }} />

                <div style={{ color: "#71717a", display: "flex" }}>
                  → Detecting framework · Next.js 14 + Supabase + Stripe
                </div>
                <div style={{ color: "#71717a", display: "flex" }}>
                  → Running 17 categories · 100+ checks
                </div>

                <div style={{ height: 12, display: "flex" }} />

                <div
                  style={{
                    color: "#fb923c",
                    fontWeight: 600,
                    display: "flex",
                  }}
                >
                  ⚠ Stripe webhook signature missing
                </div>

                <div style={{ height: 12, display: "flex" }} />

                <div style={{ color: "#fde047", display: "flex" }}>
                  ▶ Replaying attack...
                </div>
                <div style={{ color: "#fde047", display: "flex" }}>
                  → POST /api/webhooks/stripe
                </div>
                <div style={{ color: "#fde047", display: "flex" }}>
                  → x-stripe-signature: (forged)
                </div>

                <div style={{ height: 12, display: "flex" }} />

                <div style={{ color: "#34d399", display: "flex" }}>
                  ← HTTP/1.1 200 OK
                </div>
                <div style={{ color: "#34d399", display: "flex" }}>
                  ← {"{\"received\":true}"}
                </div>

                <div style={{ height: 12, display: "flex" }} />

                <div
                  style={{
                    color: "#f87171",
                    fontWeight: 700,
                    fontSize: 13.5,
                    display: "flex",
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
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 50,
            padding: "0 80px",
          }}
        >
          <div
            style={{
              fontFamily: MONO,
              fontSize: 16,
              fontWeight: 600,
              color: "#6366f1",
              display: "flex",
            }}
          >
            deploysafe.in
          </div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: "#71717a",
              display: "flex",
            }}
          >
            Launching soon · 50% off first 500
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
