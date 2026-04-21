'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/container'
import type { SiteContent } from '@/lib/types'
import styles from './home.module.css'

export default function HomeMidStage({
  content,
}: {
  content: SiteContent['home']['midStage']
}) {
  return (
    <section className={styles.midSection}>
      <Container>
        <div className={styles.midWrap}>
          <div className={styles.midIntro}>
            <p className={styles.midEyebrow}>{content.eyebrow}</p>
            <h2 className={styles.midTitle}>{content.title}</h2>
            <p className={styles.midSideNote}>{content.sideNote}</p>
          </div>

          <div className={styles.midHighlights}>
            {content.highlights.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.42, delay: index * 0.05 }}
                className={styles.midHighlightCard}
              >
                <h3 className={styles.midHighlightTitle}>{item.title}</h3>
                <p className={styles.midHighlightText}>{item.text}</p>
              </motion.article>
            ))}
          </div>

          <div className={styles.midBottom}>
            <p>{content.bottomLeft}</p>
            <p className={styles.midBottomRight}>{content.bottomRight}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}