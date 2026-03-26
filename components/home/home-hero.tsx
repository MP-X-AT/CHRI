'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '@/components/ui/container'
import type { Locale, SiteContent } from '@/lib/types'
import styles from './home.module.css'

export default function HomeHero({
  locale,
  content,
  email,
}: {
  locale: Locale
  content: SiteContent['home']['hero']
  email: string
}) {
  const approachHref = `/${locale}/arbeitsweise`

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground} aria-hidden="true">
        <div className={styles.heroGlowLeft} />
        <div className={styles.heroGlowRight} />
        <div className={styles.heroGlowBottom} />

        <svg className={styles.heroLines} viewBox="0 0 1440 900" fill="none">
          <path
            d="M-40 180C140 90 300 115 455 168C620 225 734 310 902 285C1070 260 1182 150 1480 208"
            stroke="#DC6C24"
            strokeWidth="1.4"
          />
          <path
            d="M-30 560C180 470 344 446 515 486C674 523 814 618 980 608C1156 597 1272 495 1490 548"
            stroke="#C8B7AB"
            strokeWidth="1.1"
          />
        </svg>
      </div>

      <Container className={styles.heroContainer}>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.heroKicker}
            >
              {content.kicker}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className={styles.heroTitle}
            >
              {content.displayTitle.before}
              <br />
              <span className={styles.heroTitleHighlight}>
                {content.displayTitle.highlight}
              </span>
              <br />
              {content.displayTitle.after}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={styles.heroText}
            >
              {content.text}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className={styles.heroActions}
            >
              <a href={`mailto:${email}`} className={styles.heroPrimaryCta}>
                {content.primaryCta}
              </a>

              <Link href={approachHref} className={styles.heroSecondaryCta}>
                {content.secondaryCta}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className={styles.heroInfoCard}
            >
              <div className={styles.heroInfoGrid}>
                {content.infoItems.map((item) => (
                  <div key={item} className={styles.heroInfoItem}>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroMediaWrap}
          >
            <div className={styles.heroMediaBackdrop} aria-hidden="true" />
            <div className={styles.heroMediaGlow} aria-hidden="true" />

            <div className={styles.heroMediaCard}>
              <div className={styles.heroImageFrame}>
                <Image
                  src="/images/hero.jpg"
                  alt={content.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42rem"
                  className={styles.heroImage}
                />
                <div className={styles.heroImageOverlay} aria-hidden="true" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}