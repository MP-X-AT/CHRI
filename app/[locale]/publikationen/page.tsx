import { notFound } from 'next/navigation'
import { getContent } from '@/lib/get-content'
import { isLocale } from '@/lib/i18n'
import type { PublicationItem } from '@/lib/types'
import Container from '@/components/ui/container'
import styles from './publikationen.module.css'

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
      <Container>
        <div className={styles.inner}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>{content.publikationen.eyebrow}</p>

            <h1 className={styles.title}>{content.publikationen.title}</h1>

            <p className={styles.intro}>{content.publikationen.intro}</p>
          </div>

          {items.length === 0 ? (
            <div className={styles.emptyCard}>
              <p className={styles.emptyText}>{content.publikationen.emptyText}</p>
            </div>
          ) : (
            <>
              {featuredItem ? (
                <section className={styles.featuredSection}>
                  <div className={styles.featuredCard}>
                    <div className={styles.featuredGrid}>
                      <div>
                        <p className={styles.featuredLabel}>
                          {content.publikationen.featuredLabel}
                        </p>

                        <h2 className={styles.featuredTitle}>{featuredItem.title}</h2>

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
                          <div className={styles.featuredTags}>
                            {featuredItem.tags.map((tag) => (
                              <span key={tag} className={styles.featuredTag}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>

                      <div className={styles.featuredSideCard}>
                        <div>
                          {featuredItem.year ? (
                            <p className={styles.featuredYear}>{featuredItem.year}</p>
                          ) : null}

                          <div className={styles.featuredInfoWrap}>
                            <p>{content.publikationen.featuredInfo}</p>
                          </div>
                        </div>

                        {featuredItem.href ? (
                          <div className={styles.featuredCtaWrap}>
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
                      </div>
                    </div>
                  </div>
                </section>
              ) : null}

              {remainingItems.length > 0 ? (
                <section className={styles.cardsSection}>
                  <div className={styles.cardsGrid}>
                    {remainingItems.map((item) => (
                      <article
                        key={`${item.title}-${item.year ?? ''}`}
                        className={styles.card}
                      >
                        <div className={styles.cardBody}>
                          {item.year ? (
                            <p className={styles.cardYear}>{item.year}</p>
                          ) : null}

                          <h2 className={styles.cardTitle}>{item.title}</h2>

                          {item.subtitle ? (
                            <p className={styles.cardSubtitle}>{item.subtitle}</p>
                          ) : null}

                          {item.summary ? (
                            <p className={styles.cardSummary}>{item.summary}</p>
                          ) : null}

                          {item.tags?.length ? (
                            <div className={styles.cardTags}>
                              {item.tags.map((tag) => (
                                <span key={tag} className={styles.cardTag}>
                                  {tag}
                                </span>
                              ))}
                            </div>
                          ) : null}
                        </div>

                        {item.href ? (
                          <div className={styles.cardCtaWrap}>
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noreferrer"
                              className={styles.cardCta}
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