import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
  ref: z.string().max(16).optional(),
})

const FROM = process.env.RESEND_FROM ?? "VibeAudit <onboarding@resend.dev>"
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vibeaudit.dev"
const BASE_POSITION = Number(process.env.WAITLIST_BASE_POSITION ?? 2400)
const POSITION_RANGE = Number(process.env.WAITLIST_POSITION_RANGE ?? 250)

function hashEmail(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0
  return Math.abs(h)
}

function positionFor(email: string): number {
  return BASE_POSITION + (hashEmail(email.toLowerCase()) % POSITION_RANGE)
}

function referralCodeFor(email: string): string {
  return hashEmail(email.toLowerCase() + ":vibeaudit").toString(36).slice(0, 7)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = schema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors[0]?.message ?? "Invalid input" },
        { status: 400 }
      )
    }

    const { email, ref } = parsed.data
    const position = positionFor(email)
    const referralCode = referralCodeFor(email)
    const shareUrl = `${SITE_URL}?ref=${referralCode}`

    const apiKey = process.env.RESEND_API_KEY
    if (apiKey) {
      const resend = new Resend(apiKey)
      const audienceId = process.env.RESEND_AUDIENCE_ID
      if (audienceId) {
        try {
          await resend.contacts.create({
            audienceId,
            email,
            firstName: ref ?? "",
            unsubscribed: false,
          })
        } catch (err: unknown) {
          const msg = err instanceof Error ? err.message : ""
          if (!msg.includes("already exists") && !msg.includes("Contact already")) throw err
        }
      }

      try {
        await resend.emails.send({
          from: FROM,
          to: email,
          subject: `You're #${position} on the VibeAudit waitlist`,
          html: buildEmail({ position, shareUrl, siteUrl: SITE_URL }),
        })
      } catch (err) {
        console.error("Email send failed:", err)
      }
    }

    return NextResponse.json({ success: true, position, referralCode, shareUrl })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : ""
    if (msg.includes("already exists") || msg.includes("Contact already")) {
      return NextResponse.json({ success: true, alreadyJoined: true })
    }
    console.error("Waitlist error:", err)
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}

function buildEmail({
  position,
  shareUrl,
  siteUrl,
}: {
  position: number
  shareUrl: string
  siteUrl: string
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#08090A;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:48px 16px;background:#08090A;">
    <tr><td align="center">
      <table width="520" cellpadding="0" cellspacing="0" style="background:#0D0E10;border:1px solid #1F2023;border-radius:12px;overflow:hidden;max-width:520px;width:100%;">
        <tr>
          <td style="padding:24px 28px;border-bottom:1px solid #1F2023;">
            <table cellpadding="0" cellspacing="0"><tr>
              <td style="background:#F7F8F8;width:24px;height:24px;border-radius:5px;text-align:center;vertical-align:middle;color:#08090A;font-size:12px;font-weight:600;line-height:24px;">V</td>
              <td style="padding-left:10px;font-size:14px;font-weight:500;color:#F7F8F8;">VibeAudit</td>
            </tr></table>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 28px;">
            <p style="margin:0 0 6px;font-family:ui-monospace,monospace;font-size:11px;color:#5E6AD2;text-transform:uppercase;letter-spacing:0.08em;">Confirmed · spot reserved</p>
            <h1 style="margin:0 0 8px;font-size:30px;font-weight:500;color:#F7F8F8;letter-spacing:-0.022em;line-height:1.1;">
              You&rsquo;re #${position} on the list.
            </h1>
            <p style="margin:0 0 28px;font-size:15px;color:#8A8F98;line-height:1.55;">
              We&rsquo;re rolling out access in small cohorts. The further you climb, the sooner you&rsquo;re in.
            </p>

            <table width="100%" cellpadding="0" cellspacing="0" style="background:#08090A;border:1px solid #1F2023;border-radius:10px;margin-bottom:24px;">
              <tr><td style="padding:20px 22px;">
                <p style="margin:0 0 6px;font-family:ui-monospace,monospace;font-size:11px;color:#62666D;text-transform:uppercase;letter-spacing:0.08em;">Skip the line</p>
                <p style="margin:0 0 14px;font-size:14px;color:#F7F8F8;line-height:1.5;">
                  Every friend who joins through your link moves you up <strong>10 spots</strong>.
                </p>
                <p style="margin:0 0 12px;font-family:ui-monospace,monospace;font-size:12px;color:#F7F8F8;background:#0D0E10;border:1px solid #1F2023;padding:10px 12px;border-radius:6px;word-break:break-all;">
                  ${shareUrl}
                </p>
                <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  `I just joined the VibeAudit waitlist — production scanner for vibe-coded apps. ${shareUrl}`
                )}" style="display:inline-block;background:#F7F8F8;color:#08090A;font-size:13px;font-weight:500;padding:9px 16px;border-radius:6px;text-decoration:none;">
                  Share on X →
                </a>
              </td></tr>
            </table>

            <p style="margin:0;font-size:13px;color:#62666D;line-height:1.6;">
              Watch your inbox. We&rsquo;ll email the moment your cohort opens.
            </p>
            <p style="margin:16px 0 0;">
              <a href="${siteUrl}" style="font-size:13px;color:#5E6AD2;text-decoration:none;">Back to vibeaudit.dev →</a>
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:14px 28px;border-top:1px solid #1F2023;">
            <p style="margin:0;font-size:11px;color:#62666D;">
              No more emails until access opens.
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}
