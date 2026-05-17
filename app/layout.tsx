import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vibeaudit.dev"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "VibeAudit — Production scanner for vibe-coded apps",
  description:
    "Catch exposed API keys, broken auth, and 100+ launch-blocking issues in apps built with Claude Code, Cursor, Antigravity, Lovable, Bolt, and v0. Join the waitlist.",
  openGraph: {
    title: "VibeAudit — Production scanner for vibe-coded apps",
    description: "Join the waitlist for early access.",
    url: SITE_URL,
    siteName: "VibeAudit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeAudit — Production scanner for vibe-coded apps",
    description: "Join the waitlist.",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="bg-bg text-ink-primary antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
