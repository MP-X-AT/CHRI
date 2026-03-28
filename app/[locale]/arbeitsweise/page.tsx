import { notFound } from 'next/navigation'
import { getContent } from '@/lib/get-content'
import { isLocale } from '@/lib/i18n'
import Container from '@/components/ui/container'
import GlobalResonanceGlobe from '@/components/sections/global-resonance-globe'
import styles from './arbeitsweise.module.css'

function Marker({
  value,
  label,
}: {
  value?: string
  label: string
}) {
  return (
    <article className={styles.markerItem}>
      <p className={styles.markerLabel}>{label}</p>
      {value ? <p className={styles.markerMeta}>{value}</p> : null}
    </article>
  )
}

function Principle({
  index,
  text,
}: {
  index: string
  text: string
}) {
  return (
    <li className={styles.principleItem}>
      <span className={styles.principleIndex}>{index}</span>
      <p className={styles.principleText}>{text}</p>
    </li>
  )
}

export default async function ArbeitsweisePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const content = getContent(locale)
  const arbeitsweise = content.arbeitsweise as typeof content.arbeitsweise & {
    markersEyebrow?: string
    markersLead?: string
  }

  return (
    <section className={styles.section}>
      <div className={styles.background} />
      <Container>
        <div className={styles.inner}>
          <header className={styles.hero}>
            <div className={styles.heroLeft}>
              <p className={styles.eyebrow}>{arbeitsweise.eyebrow}</p>
              <h1 className={styles.title}>{arbeitsweise.title}</h1>
              <p className={styles.intro}>{arbeitsweise.intro}</p>
            </div>

            <div className={styles.heroRight}>
              <div className={styles.markersIntro}>
                <p className={styles.markersEyebrow}>
                  {arbeitsweise.markersEyebrow ?? arbeitsweise.eyebrow}
                </p>
                <p className={styles.markersLead}>
                  {arbeitsweise.markersLead ??
                    'A way of working grounded in resonance, dignity and human diversity.'}
                </p>
              </div>

              <div className={styles.markers}>
                {arbeitsweise.stats.map((stat) => (
                  <Marker key={stat.label} value={'value' in stat ? stat.value : undefined} label={stat.label} />
                ))}
              </div>
            </div>
          </header>

          <section className={styles.methodSection}>
            <aside className={styles.quoteColumn}>
              <div className={styles.quoteLine} />
              <p className={styles.quoteAuthor}>
                {arbeitsweise.psychodramaAuthor}
              </p>
              <blockquote className={styles.quoteText}>
                {arbeitsweise.psychodramaQuote}
              </blockquote>
            </aside>

            <div className={styles.methodColumn}>
              <div className={styles.methodIntro}>
                <h2 className={styles.methodTitle}>
                  {arbeitsweise.psychodramaTitle}
                </h2>
                <p className={styles.methodText}>
                  {arbeitsweise.psychodramaText}
                </p>
              </div>

              <div className={styles.principlesBlock}>
                <p className={styles.sectionLabel}>Prinzipien</p>

                <ol className={styles.principlesList}>
                  {arbeitsweise.psychodramaDetails.map((item, index) => (
                    <Principle
                      key={item}
                      index={String(index + 1).padStart(2, '0')}
                      text={item}
                    />
                  ))}
                </ol>
              </div>
            </div>
          </section>

          <section className={styles.globeSection}>
            <div className={styles.globeHeader}>
              <p className={styles.sectionLabel}>
                {arbeitsweise.globe.eyebrow}
              </p>
              <h2 className={styles.globeTitle}>{arbeitsweise.globe.title}</h2>
              <p className={styles.globeIntro}>{arbeitsweise.globe.intro}</p>
            </div>

            <div className={styles.globeFrame}>
              <GlobalResonanceGlobe content={arbeitsweise.globe} />
            </div>
          </section>
        </div>
      </Container>
    </section>
  )
}
