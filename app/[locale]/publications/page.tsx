import { notFound } from 'next/navigation'
import { deContent } from '@/content/de'
import { enContent } from '@/content/en'
import { isLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/types'
import Container from '@/components/ui/container'

function getContent(locale: Locale) {
  return locale === 'de' ? deContent : enContent
}

export default async function PublicationsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale) || locale !== 'en') notFound()

  const content = getContent(locale)

  return (
    <Container className="py-24">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
          {content.publikationen.eyebrow}
        </p>
        <h1 className="text-4xl font-light tracking-tight sm:text-5xl">
          {content.publikationen.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-[var(--muted-foreground)]">
          {content.publikationen.intro}
        </p>

        <div className="mt-12 space-y-6">
          {content.publikationen.items.length === 0 ? (
            <p className="text-[var(--muted-foreground)]">
              Publications will be added soon.
            </p>
          ) : (
            content.publikationen.items.map((item) => (
              <article
                key={`${item.title}-${item.year ?? ''}`}
                className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm"
              >
                <h2 className="text-xl font-medium">{item.title}</h2>
                {item.subtitle ? (
                  <p className="mt-2 text-[var(--muted-foreground)]">
                    {item.subtitle}
                  </p>
                ) : null}
                {item.year ? <p className="mt-3 text-sm">{item.year}</p> : null}
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm font-medium text-[var(--accent)]"
                  >
                    Open publication
                  </a>
                ) : null}
              </article>
            ))
          )}
        </div>
      </div>
    </Container>
  )
}