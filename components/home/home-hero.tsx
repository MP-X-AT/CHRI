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
      </div>

      <Container className={styles.heroContainer}>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className={styles.heroKicker}
            >
              {content.kicker}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className={styles.heroTitle}
            >
              <span>{content.displayTitle.before}</span>{' '}
              <span className={styles.heroTitleHighlight}>
                {content.displayTitle.highlight}
              </span>{' '}
              <span>{content.displayTitle.after}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className={styles.heroText}
            >
              {content.text}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className={styles.heroActions}
            >
              <a href={`mailto:${email}`} className={styles.heroPrimaryCta}>
                {content.primaryCta}
              </a>

              <Link href={approachHref} className={styles.heroSecondaryCta}>
                {content.secondaryCta}
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.985, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className={styles.heroMediaWrap}
          >
            <div className={styles.heroMediaCard}>
              <div className={styles.heroImageFrame}>
                <Image
                  src="/images/hero.jpg"
                  alt={content.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 38rem"
                  className={styles.heroImage}
                />
                <div className={styles.heroImageOverlay} aria-hidden="true" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.heroProofRow}
        >
          {content.infoItems.map((item, index) => (
            <div key={item} className={styles.heroProofItem}>
              <span>{item}</span>
              {index < content.infoItems.length - 1 ? (
                <span className={styles.heroProofDot} aria-hidden="true" />
              ) : null}
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}