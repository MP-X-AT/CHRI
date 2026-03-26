import { notFound } from 'next/navigation'
import { getContent } from '@/lib/get-content'
import { isLocale } from '@/lib/i18n'
import Container from '@/components/ui/container'
import styles from './erfahrungen.module.css'

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

  const stats =
    locale === 'en'
      ? [
          {
            value: `${statYearsSupport}+`,
            label: 'years of psychosocial support',
          },
          {
            value: `${statYearsPractice}+`,
            label: 'years in private practice',
          },
          {
            value: 'International',
            label: 'lectures, workshops and seminars',
          },
        ]
      : [
          {
            value: `${statYearsSupport}+`,
            label: 'Jahre psychosoziale Unterstützung',
          },
          {
            value: `${statYearsPractice}+`,
            label: 'Jahre freie Praxis',
          },
          {
            value: 'International',
            label: 'Vorträge, Workshops und Seminare',
          },
        ]

  const hasQualifications =
    Array.isArray(erfahrungen.qualifications) &&
    erfahrungen.qualifications.length > 0 &&
    Boolean(erfahrungen.qualificationsTitle)

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{erfahrungen.eyebrow}</p>

            <h1 className={styles.title}>{erfahrungen.title}</h1>

            <p className={styles.intro}>{erfahrungen.intro}</p>
          </div>

          <aside className={styles.heroPanel} aria-label="Experience highlights">
            <div className={styles.panelGlow} />

            <div className={styles.panelInner}>
              <div className={styles.panelBadge}>
                {locale === 'en' ? 'Professional profile' : 'Berufliches Profil'}
              </div>

              <div className={styles.stats}>
                {stats.map((stat) => (
                  <div key={stat.label} className={styles.statCard}>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.sectionLead}>
            <p className={styles.sectionKicker}>
              {locale === 'en' ? 'Professional experience' : 'Berufliche Erfahrung'}
            </p>

            <h2 className={styles.sectionTitle}>
              {locale === 'en'
                ? 'Focus areas, leadership and international teaching'
                : 'Schwerpunkte, Leitungserfahrung und internationale Lehrtätigkeit'}
            </h2>
          </div>

          <div className={styles.experienceGrid}>
            {erfahrungen.items.map((item, index) => (
              <article key={item} className={styles.experienceCard}>
                <div className={styles.cardTop}>
                  <span className={styles.cardIndex}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <p className={styles.experienceText}>{item}</p>
              </article>
            ))}
          </div>
        </div>

        {hasQualifications ? (
          <div className={styles.qualificationsSection}>
            <div className={styles.qualificationsHeader}>
              <p className={styles.sectionKicker}>
                {locale === 'en' ? 'Qualifications' : 'Qualifikationen'}
              </p>

              <h2 className={styles.sectionTitle}>
                {erfahrungen.qualificationsTitle}
              </h2>
            </div>

            <div className={styles.qualificationsWrap}>
              {erfahrungen.qualifications.map((item) => (
                <span key={item} className={styles.qualificationTag}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  )
}