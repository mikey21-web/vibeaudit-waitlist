import type { Metadata } from "next"
import "./globals.css"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vibeaudit.dev"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "VibeAudit — Join the Waitlist",
  description:
    "The production-readiness scanner for apps built with Cursor, Lovable, Bolt, and v0. Catch exposed API keys, missing auth, and 100+ issues before your users do. Join the waitlist for early access + 50% off.",
  openGraph: {
    title: "VibeAudit — Is your vibe-coded app actually launch-safe?",
    description: "Join the waitlist. Early access + 50% off when we launch.",
    url: SITE_URL,
    siteName: "VibeAudit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeAudit — Join the Waitlist",
    description: "Early access + 50% off for the first 500 people.",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
