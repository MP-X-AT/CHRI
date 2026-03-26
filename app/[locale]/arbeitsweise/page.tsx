import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getContent } from '@/lib/get-content'
import { isLocale } from '@/lib/i18n'
import Container from '@/components/ui/container'
import GlobalResonanceGlobe from '@/components/sections/global-resonance-globe'
import styles from './arbeitsweise.module.css'

function Stat({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div className={styles.stat}>
      <div className={styles.statValue}>{value}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  )
}

function DetailCard({
  index,
  text,
}: {
  index: string
  text: string
}) {
  return (
    <div className={styles.detailCard}>
      <div className={styles.detailCardTopLine} />
      <div className={styles.detailCardInner}>
        <div className={styles.detailCardIndex}>{index}</div>
        <p className={styles.detailCardText}>{text}</p>
      </div>
    </div>
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

  return (
    <section className={styles.section}>
      <div className={styles.pageBackground}>
        <div className={styles.pageGlowLeft} />
        <div className={styles.pageGlowRight} />
        <div className={styles.pageGlowCenter} />
      </div>

      <Container>
        <div className={styles.heroCard}>
          <div className={styles.heroDecor}>
            <div className={styles.heroGlowTopRight} />
            <div className={styles.heroGlowBottomLeft} />
            <div className={styles.heroRingLeft} />
            <div className={styles.heroRingRight} />
            <div className={styles.heroDot} />
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>{content.arbeitsweise.eyebrow}</p>

              <h1 className={styles.title}>{content.arbeitsweise.title}</h1>

              <p className={styles.intro}>{content.arbeitsweise.intro}</p>

              <div className={styles.statsGrid}>
                {content.arbeitsweise.stats.map((stat) => (
                  <Stat key={stat.label} value={stat.value} label={stat.label} />
                ))}
              </div>
            </div>

            <div className={styles.imageWrap}>
              <div className={styles.imageCard}>
                <div className={styles.imageInner}>
                  <Image
                    src="/images/world.png"
                    alt={content.arbeitsweise.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 28rem, 28rem"
                    className={styles.image}
                    priority
                  />
                  <div className={styles.imageOverlay} />
                  <div className={styles.imageCaption}>
                    <p className={styles.imageKicker}>
                      {content.arbeitsweise.imageKicker}
                    </p>
                    <p className={styles.imageTitle}>
                      {content.arbeitsweise.imageTitle}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`${styles.badgeCard} ${styles.badgeCardLeft}`}>
                <p className={styles.badgeEyebrow}>
                  {content.arbeitsweise.badges[0]?.eyebrow}
                </p>
                <p className={styles.badgeText}>
                  {content.arbeitsweise.badges[0]?.text}
                </p>
              </div>

              <div className={`${styles.badgeCard} ${styles.badgeCardRight}`}>
                <p className={styles.badgeEyebrow}>
                  {content.arbeitsweise.badges[1]?.eyebrow}
                </p>
                <p className={styles.badgeText}>
                  {content.arbeitsweise.badges[1]?.text}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.quoteCard}>
            <div className={styles.quoteMark}>“</div>

            <p className={styles.quoteText}>
              {content.arbeitsweise.psychodramaQuote}
            </p>

            <p className={styles.quoteAuthor}>
              {content.arbeitsweise.psychodramaAuthor}
            </p>
          </div>

          <div className={styles.detailsCard}>
            <div className={styles.detailsTopLine} />

            <h2 className={styles.detailsTitle}>
              {content.arbeitsweise.psychodramaTitle}
            </h2>

            <p className={styles.detailsIntro}>
              {content.arbeitsweise.psychodramaText}
            </p>

            <div className={styles.detailsGrid}>
              {content.arbeitsweise.psychodramaDetails.map((item, index) => (
                <DetailCard
                  key={item}
                  index={String(index + 1).padStart(2, '0')}
                  text={item}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.globeWrap}>
          <GlobalResonanceGlobe content={content.arbeitsweise.globe} />
        </div>
      </Container>
    </section>
  )
}