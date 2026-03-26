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

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{content.erfahrungen.eyebrow}</p>

          <h1 className={styles.title}>{content.erfahrungen.title}</h1>

          <p className={styles.intro}>{content.erfahrungen.intro}</p>
        </div>

        <div className={styles.timeline}>
          {content.erfahrungen.items.map((item, index) => (
            <article key={item} className={styles.timelineItem}>
              <div className={styles.timelineIndex}>
                {String(index + 1).padStart(2, '0')}
              </div>

              <div>
                <p className={styles.timelineText}>{item}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.qualificationsCard}>
          <p className={styles.qualificationsLabel}>
            {content.erfahrungen.qualificationsTitle}
          </p>

          <div className={styles.qualificationsList}>
            {content.erfahrungen.qualifications.map((item) => (
              <span key={item} className={styles.qualificationTag}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}