"use client"

const items = [
  {
    cat: "Security",
    title: "Exposed API keys",
    desc: "Stripe secrets, OpenAI keys, and Supabase tokens shipped inside client bundles — readable from DevTools.",
  },
  {
    cat: "Auth",
    title: "Unprotected admin routes",
    desc: "/admin, /api/admin, dashboard routes returning 200 to anonymous requests. No middleware in front.",
  },
  {
    cat: "Payments",
    title: "Unverified Stripe webhooks",
    desc: "Webhook handlers skipping signature checks — anyone can forge events and unlock paid features.",
  },
  {
    cat: "AI cost",
    title: "Unbounded model calls",
    desc: "Public AI routes with no rate limits, no auth. One bored visitor drains $50/day in OpenAI usage.",
  },
  {
    cat: "Infra",
    title: "Supabase tables wide open",
    desc: "Missing or permissive RLS policies — any signed-in user can read or mutate other users' rows.",
  },
  {
    cat: "Legal",
    title: "No privacy policy",
    desc: "Missing privacy, terms, cookie banner — blocks Stripe verification and breaks GDPR/DPDP.",
  },
]

export function Problems() {
  return (
    <section id="catch" className="border-b border-line/60">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <header className="max-w-2xl">
          <div className="font-mono text-[11px] uppercase tracking-widemono text-accent">
            What we catch
          </div>
          <h2 className="mt-4 text-h2 text-ink-primary">
            Issues we find in 9 out of 10 vibe-coded apps.
          </h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-ink-secondary">
            We scanned 2,700+ apps shipped from Cursor, Lovable, Bolt, and v0. These show up over
            and over.
          </p>
        </header>

        <div className="mt-14 grid grid-cols-1 divide-y divide-line border-t border-line sm:grid-cols-2 sm:divide-y-0 sm:border-b sm:[&>*:nth-child(odd)]:border-r sm:[&>*]:border-line sm:[&>*]:border-b">
          {items.map((it) => (
            <div
              key={it.title}
              className="group flex items-start gap-6 px-2 py-7 transition-colors sm:px-6"
            >
              <div className="w-20 shrink-0 pt-1 font-mono text-[11px] uppercase tracking-widemono text-ink-tertiary">
                {it.cat}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-[16px] font-medium tracking-tightish text-ink-primary">
                  {it.title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-[1.6] text-ink-secondary">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
