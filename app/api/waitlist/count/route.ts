import { NextResponse } from "next/server"
import { Resend } from "resend"

export const dynamic = "force-dynamic"
export const revalidate = 0

const BASELINE = 2400

function relativeTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime()
  if (diff < 0 || isNaN(diff)) return "just now"
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return "just now"
  if (mins < 60) return `${mins} minute${mins === 1 ? "" : "s"} ago`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`
  const days = Math.floor(hours / 24)
  return `${days} day${days === 1 ? "" : "s"} ago`
}

function fakeCount(): number {
  const epoch = new Date("2026-05-19T00:00:00Z").getTime()
  const minutes = Math.max(0, Math.floor((Date.now() - epoch) / 60000))
  return BASELINE + minutes
}

export async function GET() {
  const audienceId = process.env.RESEND_AUDIENCE_ID
  const apiKey = process.env.RESEND_API_KEY

  if (!audienceId || !apiKey) {
    return NextResponse.json({
      count: fakeCount(),
      lastSignup: null,
      source: "fake",
    })
  }

  try {
    const resend = new Resend(apiKey)
    const result = await resend.contacts.list({ audienceId })
    const contacts = result.data?.data ?? []
    const realCount = contacts.length
    const sorted = [...contacts].sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
    const last = sorted[0]
    return NextResponse.json({
      count: BASELINE + realCount,
      lastSignup: last ? relativeTime(last.created_at) : null,
      source: "resend",
    })
  } catch {
    return NextResponse.json({
      count: fakeCount(),
      lastSignup: null,
      source: "fallback",
    })
  }
}
