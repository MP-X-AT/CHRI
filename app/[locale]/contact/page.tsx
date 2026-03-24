// app/[locale]/contact/page.tsx
import { notFound } from 'next/navigation'
import { deContent } from '@/content/de'
import { enContent } from '@/content/en'
import { isLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/types'
import Container from '@/components/ui/container'

function getContent(locale: Locale) {
  return locale === 'de' ? deContent : enContent
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale) || locale !== 'en') notFound()

  const content = getContent(locale)

  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
              {content.kontakt.eyebrow}
            </p>

            <h1 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
              {content.kontakt.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-[var(--muted-foreground)]">
              {content.kontakt.text}
            </p>

            <div className="mt-10 rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-sm">
              <h2 className="text-2xl font-medium">{content.kontakt.name}</h2>

              <div className="mt-6 flex flex-wrap gap-3">
                {content.kontakt.roles.map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-[rgba(220,108,36,0.16)] bg-[rgba(220,108,36,0.08)] px-4 py-2 text-sm text-[var(--foreground)]"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-sm">
            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
                  {content.kontakt.practiceLabel}
                </p>
                <p className="mt-3 text-lg font-medium">{content.kontakt.practice}</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
                  {content.kontakt.addressLabel}
                </p>
                <div className="mt-3 space-y-1 text-[var(--foreground)]">
                  {content.kontakt.address.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
                  {content.kontakt.phoneLabel}
                </p>
                <a
                  href="tel:+4369911014483"
                  className="mt-3 inline-block text-lg font-medium text-[var(--foreground)] transition hover:text-[var(--accent)]"
                >
                  {content.kontakt.phone}
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
                  {content.kontakt.emailLabel}
                </p>
                <a
                  href={`mailto:${content.kontakt.email}`}
                  className="mt-3 inline-block text-lg font-medium text-[var(--foreground)] transition hover:text-[var(--accent)]"
                >
                  {content.kontakt.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}