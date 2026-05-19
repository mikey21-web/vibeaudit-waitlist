import type { Metadata, Viewport } from "next"
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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://deploysafe.in"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "DeploySafe — Production-readiness scanner for vibe-coded apps",
  description:
    "Scan apps shipped from Cursor, Claude Code, Lovable, Bolt, v0. We find vulnerabilities, replay the attacks live, and write the fix prompts. Free scan, paid fixes.",
  keywords: [
    "vibe coding security",
    "ai code audit",
    "claude code scanner",
    "cursor security",
    "supabase rls audit",
    "stripe webhook security",
  ],
  openGraph: {
    title: "DeploySafe — Production-readiness scanner for vibe-coded apps",
    description:
      "We don't just tell you you're vulnerable. We hack you, then we patch you. Join the waitlist for early access.",
    url: SITE_URL,
    siteName: "DeploySafe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeploySafe — We hack you, then we patch you.",
    description:
      "Production-readiness scanner for apps from Cursor, Claude Code, Lovable, Bolt, v0.",
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#08090A",
  interactiveWidget: "resizes-content",
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
