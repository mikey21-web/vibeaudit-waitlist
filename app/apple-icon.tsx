import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#08090A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
        }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="apl-shield"
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
            fill="url(#apl-shield)"
          />
          <path
            d="M9 14.5 L12.5 18 L19 10.5"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  )
}
