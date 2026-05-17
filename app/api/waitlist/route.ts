import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().max(80).optional(),
  company: z.string().max(200).optional(),
})

function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

const FROM = process.env.RESEND_FROM ?? "VibeAudit <onboarding@resend.dev>"
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vibeaudit.dev"

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

    const { email, name, company } = parsed.data

    // Honeypot: real users leave this empty; bots fill it
    if (company && company.trim().length > 0) {
      return NextResponse.json({ success: true })
    }

    const resend = getResend()

    // Add to Resend Audience (free waitlist DB — no extra infra needed)
    const audienceId = process.env.RESEND_AUDIENCE_ID
    if (audienceId) {
      try {
        await resend.contacts.create({
          audienceId,
          email,
          firstName: name ?? "",
          unsubscribed: false,
        })
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : ""
        // Already in audience = fine
        if (!msg.includes("already exists") && !msg.includes("Contact already")) throw err
      }
    }

    // Send confirmation email
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: "You're on the VibeAudit waitlist 🎉",
      html: buildEmail({ name, siteUrl: SITE_URL }),
    })

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : ""
    if (msg.includes("already exists") || msg.includes("Contact already")) {
      return NextResponse.json({ success: true, alreadyJoined: true })
    }
    console.error("Waitlist error:", err)
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}

function buildEmail({ name, siteUrl }: { name?: string; siteUrl: string }) {
  const greeting = name ? `Hey ${name},` : "Hey,"
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
    <tr><td align="center">
      <table width="520" cellpadding="0" cellspacing="0" style="background:#fff;border:2px solid #e2e8f0;border-radius:16px;overflow:hidden;max-width:520px;width:100%;">
        <tr>
          <td style="padding:28px 32px 20px;border-bottom:1px solid #e2e8f0;">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:linear-gradient(135deg,#1e3a8a,#6366f1);width:28px;height:28px;border-radius:6px;text-align:center;vertical-align:middle;">
                  <span style="color:#fff;font-size:14px;line-height:28px;">✦</span>
                </td>
                <td style="padding-left:10px;font-size:16px;font-weight:700;color:#0f172a;font-family:'Space Grotesk',sans-serif;">VibeAudit</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px;">
            <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#0f172a;font-family:'Space Grotesk',sans-serif;">
              You're on the waitlist 🎉
            </h1>
            <p style="margin:0 0 20px;font-size:15px;color:#64748b;line-height:1.6;">
              ${greeting} thanks for signing up. We're putting the finishing touches on VibeAudit — the production-readiness scanner for apps built with Claude Code, Cursor, Antigravity, Lovable, Bolt, and v0.
            </p>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:2px solid #e2e8f0;border-radius:10px;margin-bottom:24px;">
              <tr><td style="padding:20px 24px;">
                <p style="margin:0 0 12px;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.06em;">What you'll get</p>
                ${[
                  "Early access before the public launch",
                  "50% discount on any paid plan (first 500 only)",
                  "One free deep scan on launch day",
                  "Founding member badge on your report",
                ].map(item => `
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
                  <tr>
                    <td width="20" style="color:#6366f1;font-size:14px;vertical-align:top;padding-top:1px;">✓</td>
                    <td style="font-size:14px;color:#374151;line-height:1.5;">${item}</td>
                  </tr>
                </table>`).join("")}
              </td></tr>
            </table>
            <p style="margin:0 0 24px;font-size:13px;color:#94a3b8;line-height:1.6;">
              We'll email you the moment access opens. No spam, ever.
            </p>
            <a href="${siteUrl}" style="display:inline-block;background:linear-gradient(135deg,#1e3a8a,#6366f1);color:#fff;font-size:14px;font-weight:700;padding:12px 24px;border-radius:8px;text-decoration:none;font-family:'Space Grotesk',sans-serif;">
              Visit VibeAudit →
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 32px;border-top:1px solid #e2e8f0;">
            <p style="margin:0;font-size:12px;color:#94a3b8;">
              You're receiving this because you signed up at vibeaudit.dev. No more emails until we launch.
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}
