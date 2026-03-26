import { notFound } from 'next/navigation'
import { getContent } from '@/lib/get-content'
import { isLocale } from '@/lib/i18n'
import Container from '@/components/ui/container'
import styles from './angebot.module.css'

function TopicList({ items }: { items: string[] }) {
  return (
    <ul className={styles.topicList}>
      {items.map((item) => (
        <li key={item} className={styles.topicItem}>
          <span className={styles.topicDot} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function CompactPanel({
  eyebrow,
  title,
  text,
  items,
  warm = false,
}: {
  eyebrow: string
  title: string
  text: string
  items: string[]
  warm?: boolean
}) {
  return (
    <article
      className={`${styles.panel} ${warm ? styles.panelWarm : styles.panelNeutral}`}
    >
      <div className={styles.panelGlow}>
        <div className={styles.panelGlowTop} />
        <div className={styles.panelGlowBottom} />
      </div>

      <div className={styles.panelInner}>
        <p className={styles.panelEyebrow}>{eyebrow}</p>

        <h2 className={styles.panelTitle}>{title}</h2>

        <p className={styles.panelText}>{text}</p>

        <div className={styles.panelTopics}>
          <TopicList items={items} />
        </div>
      </div>
    </article>
  )
}

export default async function AngebotPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const content = getContent(locale)
  const itemMap = Object.fromEntries(
    content.angebot.items.map((item) => [item.id, item.label]),
  )

  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <div className={styles.backgroundGlowLeft} />
        <div className={styles.backgroundGlowRight} />
      </div>

      <Container>
        <div className={styles.inner}>
          <header className={styles.header}>
            <p className={styles.eyebrow}>{content.angebot.eyebrow}</p>

            <h1 className={styles.title}>{content.angebot.heroTitle}</h1>

            <p className={styles.intro}>{content.angebot.intro}</p>
          </header>

          <div className={styles.panelGrid}>
            {content.angebot.panels.map((panel) => (
              <CompactPanel
                key={panel.title}
                eyebrow={panel.eyebrow}
                title={panel.title}
                text={panel.text}
                warm={panel.warm}
                items={panel.itemIds.map((id) => itemMap[id]).filter(Boolean)}
              />
            ))}
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.settingCard}>
              <p className={styles.infoLabel}>{content.angebot.settingTitle}</p>
              <p className={styles.settingText}>{content.angebot.settingText}</p>
            </div>

            <div className={styles.noteCard}>
              <p className={styles.infoLabel}>{content.angebot.noteTitle}</p>
              <p className={styles.noteText}>{content.angebot.refundText}</p>
            </div>
          </div>

          <div className={styles.closingWrap}>
            <p className={styles.closingText}>{content.angebot.closingText}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}