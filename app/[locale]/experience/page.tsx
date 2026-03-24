// app/[locale]/experience/page.tsx
import { notFound } from 'next/navigation'
import { deContent } from '@/content/de'
import { enContent } from '@/content/en'
import { isLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/types'
import Container from '@/components/ui/container'

function getContent(locale: Locale) {
  return locale === 'de' ? deContent : enContent
}

export default async function ExperiencePage({
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
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
            {content.erfahrungen.eyebrow}
          </p>

          <h1 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
            {content.erfahrungen.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-[var(--muted-foreground)]">
            {content.erfahrungen.intro}
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {content.erfahrungen.items.map((item, index) => (
            <article
              key={item}
              className="grid gap-4 rounded-[2rem] border border-black/5 bg-white/70 p-6 shadow-sm md:grid-cols-[56px_1fr] md:p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(220,108,36,0.16)] bg-[rgba(220,108,36,0.08)] text-sm font-medium text-[var(--accent)]">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div>
                <p className="leading-8 text-[var(--foreground)]">{item}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
            {content.erfahrungen.qualificationsTitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {content.erfahrungen.qualifications.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[rgba(220,108,36,0.16)] bg-[rgba(220,108,36,0.08)] px-4 py-2 text-sm text-[var(--foreground)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}