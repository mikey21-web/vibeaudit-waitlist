import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        bg: "#08090A",
        surface: "#0D0E10",
        elevated: "#101113",
        line: "#1F2023",
        ink: {
          primary: "#F7F8F8",
          secondary: "#8A8F98",
          tertiary: "#62666D",
          quaternary: "#3F4147",
        },
        accent: {
          DEFAULT: "#5E6AD2",
          hover: "#7170FF",
          soft: "rgba(94,106,210,0.10)",
          ring: "rgba(94,106,210,0.35)",
        },
        warn: "#EB5757",
        success: "#4CB782",
      },
      letterSpacing: {
        tightish: "-0.011em",
        tighter2: "-0.022em",
        widemono: "0.08em",
      },
      fontSize: {
        "display": ["clamp(40px, 6vw, 64px)", { lineHeight: "1.05", letterSpacing: "-0.022em", fontWeight: "560" }],
        "display-sm": ["clamp(32px, 5vw, 44px)", { lineHeight: "1.08", letterSpacing: "-0.022em", fontWeight: "560" }],
        "h2": ["clamp(28px, 4vw, 40px)", { lineHeight: "1.15", letterSpacing: "-0.022em", fontWeight: "560" }],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
        "fade-in": "fadeIn 0.6s ease-out both",
        "blink": "blink 1s step-end infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
}

export default config
