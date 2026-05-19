import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "DeploySafe — We hack you, then we patch you"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const MONO = "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"

async function loadFont(name: string, weight: number) {
  const res = await fetch(
    `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
      name
    )}:wght@${weight}&display=swap`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
      },
    }
  )
  const css = await res.text()
  const url = css.match(/src:\s*url\(([^)]+)\)\s*format\('(?:opentype|truetype|woff2)'\)/)?.[1]
  if (!url) return null
  const fontRes = await fetch(url)
  return new Uint8Array(await fontRes.arrayBuffer())
}

export default async function OGImage() {
  const [inter600, inter700, inter800, mono500] = await Promise.all([
    loadFont("Inter", 600),
    loadFont("Inter", 700),
    loadFont("Inter", 800),
    loadFont("JetBrains+Mono", 500),
  ])

  const fonts = [
    inter600 && { name: "Inter", data: inter600, weight: 600 as const, style: "normal" as const },
    inter700 && { name: "Inter", data: inter700, weight: 700 as const, style: "normal" as const },
    inter800 && { name: "Inter", data: inter800, weight: 800 as const, style: "normal" as const },
    mono500 && { name: "JetBrains Mono", data: mono500, weight: 500 as const, style: "normal" as const },
  ].filter(Boolean) as Array<{ name: string; data: Uint8Array; weight: 600 | 700 | 800 | 500; style: "normal" }>

  const interFont = inter700 ? "Inter" : "system-ui"
  const monoFont = mono500 ? "JetBrains Mono" : MONO

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#06070A",
          color: "#ffffff",
          fontFamily: `${interFont}, system-ui, sans-serif`,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(135deg, #06070A 0%, #0B0D14 45%, #06070A 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -260,
            left: -200,
            width: 900,
            height: 700,
            display: "flex",
            background:
              "radial-gradient(circle at center, rgba(113,112,255,0.35), transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 80,
            left: 480,
            width: 600,
            height: 500,
            display: "flex",
            background:
              "radial-gradient(circle at center, rgba(94,106,210,0.25), transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            right: -150,
            width: 700,
            height: 500,
            display: "flex",
            background:
              "radial-gradient(circle at center, rgba(239,68,68,0.18), transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flex: 1,
            padding: "70px 80px 0 80px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 640,
            }}
          >
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                padding: "8px 14px 8px 12px",
                borderRadius: 999,
                border: "1px solid rgba(165,180,252,0.30)",
                background:
                  "linear-gradient(180deg, rgba(99,102,241,0.18), rgba(99,102,241,0.06))",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 1.4,
                color: "#c7d2fe",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: "#22c55e",
                  marginRight: 10,
                  boxShadow: "0 0 12px rgba(34,197,94,0.85)",
                  display: "flex",
                }}
              />
              PRIVATE BETA · WAITLIST OPEN
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: "linear-gradient(135deg, #818CF8, #5E6AD2 70%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: 30,
                  fontWeight: 800,
                  boxShadow:
                    "0 20px 40px -10px rgba(94,106,210,0.55), inset 0 1px 0 rgba(255,255,255,0.30)",
                }}
              >
                D
              </div>
              <div
                style={{
                  marginLeft: 16,
                  fontSize: 34,
                  fontWeight: 700,
                  letterSpacing: -0.6,
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
                marginTop: 38,
              }}
            >
              <div
                style={{
                  fontSize: 50,
                  fontWeight: 700,
                  letterSpacing: -2,
                  color: "#ffffff",
                  lineHeight: 1.05,
                  display: "flex",
                }}
              >
                We don&apos;t just tell you
              </div>
              <div
                style={{
                  fontSize: 50,
                  fontWeight: 700,
                  letterSpacing: -2,
                  color: "#ffffff",
                  lineHeight: 1.05,
                  display: "flex",
                }}
              >
                you&apos;re vulnerable.
              </div>
              <div
                style={{
                  marginTop: 10,
                  fontSize: 64,
                  fontWeight: 800,
                  letterSpacing: -2.6,
                  lineHeight: 1.02,
                  color: "#A5B4FC",
                  display: "flex",
                }}
              >
                We hack you.
              </div>
            </div>

            <div
              style={{
                marginTop: 26,
                fontSize: 18,
                color: "#A1A1AA",
                lineHeight: 1.45,
                maxWidth: 580,
                display: "flex",
                fontWeight: 600,
              }}
            >
              Production scanner for apps shipped from Cursor, Lovable, Bolt,
              v0, and Claude Code.
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 30,
              }}
            >
              <div
                style={{
                  display: "flex",
                  padding: "9px 14px",
                  borderRadius: 10,
                  border: "1px solid rgba(165,180,252,0.30)",
                  background: "rgba(99,102,241,0.10)",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#C7D2FE",
                  marginRight: 10,
                  letterSpacing: 0.4,
                  alignItems: "center",
                }}
              >
                50% OFF — first 500
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "9px 14px",
                  borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#E4E4E7",
                  letterSpacing: 0.4,
                  alignItems: "center",
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
              alignItems: "flex-start",
              justifyContent: "flex-end",
              marginLeft: 24,
              marginTop: 8,
            }}
          >
            <div
              style={{
                position: "relative",
                width: 440,
                height: 400,
                display: "flex",
                flexDirection: "column",
                borderRadius: 16,
                border: "1px solid rgba(239,68,68,0.35)",
                background:
                  "linear-gradient(180deg, #0E0F15 0%, #0A0B11 100%)",
                overflow: "hidden",
                boxShadow:
                  "0 50px 100px -25px rgba(239,68,68,0.45), 0 0 0 1px rgba(255,255,255,0.04) inset",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: 40,
                  padding: "0 16px",
                  background: "rgba(255,255,255,0.04)",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: 999,
                      background: "#EF4444",
                      display: "flex",
                    }}
                  />
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: 999,
                      background: "#EAB308",
                      marginLeft: 8,
                      display: "flex",
                    }}
                  />
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: 999,
                      background: "#22C55E",
                      marginLeft: 8,
                      display: "flex",
                    }}
                  />
                  <div
                    style={{
                      marginLeft: 14,
                      fontSize: 11,
                      color: "#8B8E96",
                      fontFamily: monoFont,
                      display: "flex",
                      fontWeight: 500,
                    }}
                  >
                    deploysafe ▸ attack-replay
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "3px 8px",
                    borderRadius: 999,
                    background: "rgba(239,68,68,0.15)",
                    border: "1px solid rgba(239,68,68,0.30)",
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: 999,
                      background: "#EF4444",
                      marginRight: 6,
                      display: "flex",
                      boxShadow: "0 0 8px rgba(239,68,68,0.9)",
                    }}
                  />
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: 1.5,
                      color: "#FCA5A5",
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
                  padding: "20px 18px",
                  fontFamily: monoFont,
                  fontSize: 13,
                  lineHeight: 1.65,
                  flex: 1,
                }}
              >
                <div
                  style={{
                    color: "#E4E4E7",
                    display: "flex",
                    fontWeight: 500,
                  }}
                >
                  <span style={{ color: "#71717A", marginRight: 6 }}>$</span>
                  deploysafe scan my-app.vercel.app
                </div>
                <div
                  style={{
                    color: "#71717A",
                    display: "flex",
                    marginTop: 10,
                  }}
                >
                  → Next.js 14 · Supabase · Stripe
                </div>
                <div
                  style={{
                    color: "#71717A",
                    display: "flex",
                  }}
                >
                  → 17 categories · 100+ checks
                </div>
                <div
                  style={{
                    color: "#FB923C",
                    display: "flex",
                    fontWeight: 700,
                    marginTop: 12,
                  }}
                >
                  ⚠ Stripe webhook signature missing
                </div>
                <div
                  style={{
                    color: "#FDE047",
                    display: "flex",
                    marginTop: 12,
                  }}
                >
                  ▶ Replaying attack…
                </div>
                <div style={{ color: "#FDE047", display: "flex" }}>
                  → POST /api/webhooks/stripe (forged)
                </div>
                <div
                  style={{
                    color: "#34D399",
                    display: "flex",
                    marginTop: 8,
                  }}
                >
                  ← HTTP 200 OK · plan upgraded
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: 14,
                    padding: "10px 12px",
                    borderRadius: 8,
                    background: "rgba(239,68,68,0.12)",
                    border: "1px solid rgba(239,68,68,0.35)",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      color: "#F87171",
                      fontWeight: 700,
                      fontSize: 13,
                      display: "flex",
                    }}
                  >
                    🚨 Attack succeeded — paid plan unlocked
                  </div>
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
            padding: "24px 80px 36px 80px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontFamily: monoFont,
                fontSize: 17,
                fontWeight: 700,
                color: "#A5B4FC",
                display: "flex",
                letterSpacing: -0.2,
              }}
            >
              deploysafe.in
            </div>
            <div
              style={{
                marginLeft: 16,
                width: 4,
                height: 4,
                borderRadius: 999,
                background: "#3F4147",
                display: "flex",
              }}
            />
            <div
              style={{
                marginLeft: 16,
                fontSize: 14,
                color: "#A1A1AA",
                display: "flex",
                fontWeight: 600,
              }}
            >
              We hack you, then we patch you.
            </div>
          </div>
          <div
            style={{
              fontSize: 12,
              color: "#71717A",
              display: "flex",
              fontWeight: 600,
              letterSpacing: 0.4,
            }}
          >
            30s scan · 17 categories · 100+ checks
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined }
  )
}
