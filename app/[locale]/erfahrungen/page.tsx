import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getContent } from '@/lib/get-content'
import { isLocale } from '@/lib/i18n'
import { buildPageMetadata } from '@/lib/seo'
import Container from '@/components/ui/container'
import styles from './erfahrungen.module.css'

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
    slug: 'erfahrungen',
    title: `${content.erfahrungen.title} | ${content.site.brandName}`,
    description: content.erfahrungen.intro,
    siteName: content.site.brandName,
  })
}

export default async function ErfahrungenPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const content = getContent(locale)
  const erfahrungen = content.erfahrungen

  const statYearsSupport = new Date().getFullYear() - 1990
  const statYearsPractice = new Date().getFullYear() - 2003

  const profileHighlights =
    locale === 'en'
      ? [
          `${statYearsSupport}+ years of psychosocial work`,
          `${statYearsPractice}+ years in private practice`,
          'International lectures, workshops and seminars',
        ]
      : [
          `${statYearsSupport}+ Jahre psychosoziale Arbeit`,
          `${statYearsPractice}+ Jahre freie Praxis`,
          'Internationale Vorträge, Workshops und Seminare',
        ]

  const hasQualifications =
    Array.isArray(erfahrungen.qualifications) &&
    erfahrungen.qualifications.length > 0 &&
    Boolean(erfahrungen.qualificationsTitle)

  return (
    <section className={styles.section}>
      <div className={styles.backgroundGlowA} />
      <div className={styles.backgroundGlowB} />

      <Container>
        <div className={styles.shell}>
          <div className={styles.hero}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{erfahrungen.eyebrow}</p>
              <p className={styles.lead}>{erfahrungen.intro}</p>
            </div>

            <aside
              className={styles.profilePanel}
              aria-label={locale === 'en' ? 'Professional profile' : 'Berufliches Profil'}
            >
              <div className={styles.profileInner}>
                <p className={styles.profileKicker}>
                  {locale === 'en' ? 'Professional profile' : 'Berufliches Profil'}
                </p>

                <div className={styles.profileStatement}>
                  {profileHighlights.map((item) => (
                    <p key={item} className={styles.profileLine}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <section className={styles.sectionBlock}>
            <div className={styles.sectionLead}>
              <p className={styles.sectionKicker}>
                {locale === 'en' ? 'Professional experience' : 'Berufliche Erfahrung'}
              </p>

              <h2 className={styles.sectionTitle}>
                {locale === 'en'
                  ? 'Practice, teaching and professional leadership'
                  : 'Praxis, Lehre und fachliche Leitung'}
              </h2>
            </div>

            <div className={styles.experienceList}>
              {erfahrungen.items.map((item) => (
                <article key={item} className={styles.experienceItem}>
                  <p className={styles.experienceText}>{item}</p>
                </article>
              ))}
            </div>
          </section>

          {hasQualifications ? (
            <section className={styles.sectionBlock}>
              <div className={styles.sectionLead}>
                <p className={styles.sectionKicker}>
                  {locale === 'en' ? 'Qualifications' : 'Qualifikationen'}
                </p>

                <h2 className={styles.sectionTitle}>
                  {erfahrungen.qualificationsTitle}
                </h2>
              </div>

              <div className={styles.qualificationsList}>
                {erfahrungen.qualifications.map((item) => (
                  <div key={item} className={styles.qualificationItem}>
                    <p className={styles.qualificationText}>{item}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
