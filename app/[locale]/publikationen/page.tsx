import { notFound } from 'next/navigation'
import { deContent } from '@/content/de'
import { enContent } from '@/content/en'
import { isLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/types'
import Container from '@/components/ui/container'

type PublicationItem = {
  title: string
  subtitle?: string
  year?: string | number
  href?: string
  summary?: string
  tags?: string[]
  featured?: boolean
  ctaLabel?: string
}

function getContent(locale: Locale) {
  return locale === 'de' ? deContent : enContent
}

export default async function PublicationsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale)) notFound()

  const content = getContent(locale)
  const items = (content.publikationen.items ?? []) as PublicationItem[]

  const featuredItem =
    items.find((item) => item.featured) ??
    (items.length > 0 ? items[0] : null)

  const remainingItems = featuredItem
    ? items.filter((item) => item !== featuredItem)
    : items

  const emptyText =
    locale === 'de'
      ? 'Publikationen werden in Kürze ergänzt.'
      : 'Publications will be added soon.'

  const openLabelDefault =
    locale === 'de' ? 'Publikation öffnen' : 'Open publication'

  return (
    <Container className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.22em] text-[var(--accent)]">
            {content.publikationen.eyebrow}
          </p>

          <h1 className="text-4xl font-light tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            {content.publikationen.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-[var(--muted-foreground)]">
            {content.publikationen.intro}
          </p>
        </div>

        {items.length === 0 ? (
          <div className="mt-12 rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-sm">
            <p className="text-[var(--muted-foreground)]">{emptyText}</p>
          </div>
        ) : (
          <>
            {featuredItem ? (
              <section className="mt-14">
                <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,255,255,0.68))] shadow-[0_20px_70px_rgba(60,70,100,0.08)]">
                  <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent)]/80">
                        {locale === 'de'
                          ? 'Hervorgehobene Publikation'
                          : 'Featured publication'}
                      </p>

                      <h2 className="mt-4 text-2xl font-medium tracking-tight text-[var(--foreground)] sm:text-3xl">
                        {featuredItem.title}
                      </h2>

                      {featuredItem.subtitle ? (
                        <p className="mt-3 text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
                          {featuredItem.subtitle}
                        </p>
                      ) : null}

                      {featuredItem.summary ? (
                        <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[var(--foreground)]/82 sm:text-base">
                          {featuredItem.summary}
                        </p>
                      ) : null}

                      {featuredItem.tags?.length ? (
                        <div className="mt-6 flex flex-wrap gap-2.5">
                          {featuredItem.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-[var(--accent)]/12 bg-[var(--accent)]/7 px-3 py-1.5 text-xs font-medium tracking-[0.02em] text-[var(--foreground)]/78"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>

                    <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-black/5 bg-white/65 p-5 sm:p-6">
                      <div>
                        {featuredItem.year ? (
                          <p className="text-sm text-[var(--foreground)]/60">
                            {featuredItem.year}
                          </p>
                        ) : null}

                        <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted-foreground)]">
                          <p>
                            {locale === 'de'
                              ? 'Ein kuratierter Einblick in einen fachlichen Schwerpunkt mit direktem Zugang zur Publikation.'
                              : 'A curated entry point into one of the key thematic areas with direct access to the publication.'}
                          </p>
                        </div>
                      </div>

                      {featuredItem.href ? (
                        <div className="mt-8">
                          <a
                            href={featuredItem.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-full border border-[var(--accent)]/20 bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition hover:translate-y-[-1px] hover:shadow-[0_12px_30px_rgba(220,108,36,0.22)]"
                          >
                            {featuredItem.ctaLabel ?? openLabelDefault}
                          </a>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </section>
            ) : null}

            {remainingItems.length > 0 ? (
              <section className="mt-12">
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {remainingItems.map((item) => (
                    <article
                      key={`${item.title}-${item.year ?? ''}`}
                      className="group flex h-full flex-col rounded-[1.75rem] border border-black/5 bg-white/72 p-6 shadow-sm transition duration-300 hover:translate-y-[-2px] hover:shadow-[0_18px_46px_rgba(70,80,110,0.10)]"
                    >
                      <div className="flex-1">
                        {item.year ? (
                          <p className="text-sm text-[var(--foreground)]/55">
                            {item.year}
                          </p>
                        ) : null}

                        <h2 className="mt-3 text-xl font-medium leading-8 tracking-tight text-[var(--foreground)]">
                          {item.title}
                        </h2>

                        {item.subtitle ? (
                          <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
                            {item.subtitle}
                          </p>
                        ) : null}

                        {item.summary ? (
                          <p className="mt-4 text-[15px] leading-7 text-[var(--foreground)]/82">
                            {item.summary}
                          </p>
                        ) : null}

                        {item.tags?.length ? (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-black/6 bg-black/[0.03] px-3 py-1.5 text-xs font-medium text-[var(--foreground)]/72"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>

                      {item.href ? (
                        <div className="mt-6 pt-2">
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center text-sm font-medium text-[var(--accent)] transition group-hover:translate-x-[2px]"
                          >
                            {item.ctaLabel ?? openLabelDefault}
                          </a>
                        </div>
                      ) : null}
                    </article>
                  ))}
                </div>
              </section>
            ) : null}
          </>
        )}
      </div>
    </Container>
  )
}