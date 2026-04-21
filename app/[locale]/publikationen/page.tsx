import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getContent } from '@/lib/get-content'
import { isLocale } from '@/lib/i18n'
import { buildPageMetadata } from '@/lib/seo'
import type { PublicationItem } from '@/lib/types'
import Container from '@/components/ui/container'
import styles from './publikationen.module.css'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  if (!isLocale(locale)) {
    return {}
  }

  const content = getContent(locale)

  return buildPageMetadata({
    locale,
    slug: 'publikationen',
    title: `${content.publikationen.title} | ${content.site.brandName}`,
    description: content.publikationen.intro,
    siteName: content.site.brandName,
  })
}

export default async function PublicationsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const content = getContent(locale)
  const items = (content.publikationen.items ?? []) as PublicationItem[]

  const featuredItem =
    items.find((item) => item.featured) ??
    (items.length > 0 ? items[0] : null)

  const remainingItems = featuredItem
    ? items.filter((item) => item !== featuredItem)
    : items

  return (
    <section className={styles.section}>
      <div className={styles.backgroundGlowA} />
      <div className={styles.backgroundGlowB} />

      <Container>
        <div className={styles.inner}>
          <header className={styles.header}>
            <p className={styles.eyebrow}>{content.publikationen.eyebrow}</p>
            <p className={styles.intro}>{content.publikationen.intro}</p>
          </header>

          {items.length === 0 ? (
            <div className={styles.emptyState}>
              <p className={styles.emptyText}>{content.publikationen.emptyText}</p>
            </div>
          ) : (
            <>
              {featuredItem ? (
                <section className={styles.featuredSection}>
                  <div className={styles.featuredFrame}>
                    <div className={styles.featuredWrap}>
                      <div className={styles.featuredMain}>
                        <p className={styles.featuredLabel}>
                          {content.publikationen.featuredLabel}
                        </p>

                        {featuredItem.year ? (
                          <p className={styles.featuredYear}>{featuredItem.year}</p>
                        ) : null}

                        <h1 className={styles.featuredTitle}>{featuredItem.title}</h1>

                        {featuredItem.subtitle ? (
                          <p className={styles.featuredSubtitle}>
                            {featuredItem.subtitle}
                          </p>
                        ) : null}

                        {featuredItem.summary ? (
                          <p className={styles.featuredSummary}>
                            {featuredItem.summary}
                          </p>
                        ) : null}

                        {featuredItem.tags?.length ? (
                          <p className={styles.featuredMeta}>
                            {featuredItem.tags.join(' · ')}
                          </p>
                        ) : null}
                      </div>

                      <aside className={styles.featuredAside}>
                        <p className={styles.featuredInfoText}>
                          {content.publikationen.featuredInfo}
                        </p>

                        {featuredItem.href ? (
                          <div className={styles.featuredActionWrap}>
                            <a
                              href={featuredItem.href}
                              target="_blank"
                              rel="noreferrer"
                              className={styles.featuredCta}
                            >
                              {featuredItem.ctaLabel ??
                                content.publikationen.openLabelDefault}
                            </a>
                          </div>
                        ) : null}
                      </aside>
                    </div>
                  </div>
                </section>
              ) : null}

              {remainingItems.length > 0 ? (
                <section className={styles.listSection}>
                  <div className={styles.listHeader}>
                    <p className={styles.listKicker}>
                      {locale === 'en' ? 'Further publications' : 'Weitere Publikationen'}
                    </p>
                  </div>

                  <div className={styles.publicationList}>
                    {remainingItems.map((item) => (
                      <article
                        key={`${item.title}-${item.year ?? ''}`}
                        className={styles.publicationItem}
                      >
                        <div className={styles.publicationContent}>
                          <div className={styles.publicationTopLine}>
                            {item.year ? (
                              <p className={styles.publicationYear}>{item.year}</p>
                            ) : null}

                            {item.tags?.length ? (
                              <p className={styles.publicationMeta}>
                                {item.tags.join(' · ')}
                              </p>
                            ) : null}
                          </div>

                          <h2 className={styles.publicationTitle}>{item.title}</h2>

                          {item.subtitle ? (
                            <p className={styles.publicationSubtitle}>
                              {item.subtitle}
                            </p>
                          ) : null}

                          {item.summary ? (
                            <p className={styles.publicationSummary}>
                              {item.summary}
                            </p>
                          ) : null}
                        </div>

                        {item.href ? (
                          <div className={styles.publicationAction}>
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noreferrer"
                              className={styles.publicationLink}
                            >
                              {item.ctaLabel ?? content.publikationen.openLabelDefault}
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
    </section>
  )
}
