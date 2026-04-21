import Link from 'next/link'
import Container from '@/components/ui/container'
import type { Locale } from '@/lib/i18n'

export default function Hero({
  locale,
  content,
  email,
}: {
  locale: Locale
  content: {
    kicker: string
    title: string
    text: string
    primaryCta: string
    secondaryCta: string
  }
  email: string
}) {
  return (
    <section id="top" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,108,36,0.14),transparent_32%),radial-gradient(circle_at_right,rgba(180,120,70,0.12),transparent_24%)]" />
      <Container className="relative">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm uppercase tracking-[0.22em] text-[var(--accent)]">
            {content.kicker}
          </p>
          <h1 className="text-5xl font-light tracking-tight sm:text-6xl lg:text-7xl">
            {content.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)]">
            {content.text}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${email}`}
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              {content.primaryCta}
            </a>
            <Link
              href={`/${locale}#angebot`}
              className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium transition hover:bg-white/70"
            >
              {content.secondaryCta}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
