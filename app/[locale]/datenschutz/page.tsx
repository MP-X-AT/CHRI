import { notFound } from 'next/navigation'
import { getContent } from '@/lib/get-content'
import { isLocale } from '@/lib/i18n'
import Container from '@/components/ui/container'
import styles from './datenschutz.module.css'

function ParagraphWithEmail({
  paragraph,
  email,
  sectionTitle,
}: {
  paragraph: string
  email: string
  sectionTitle: string
}) {
  if (!paragraph.includes(email)) {
    return <p>{paragraph}</p>
  }

  const parts = paragraph.split(email)

  return (
    <p>
      {parts.map((part, index) => (
        <span key={`${sectionTitle}-${index}`}>
          {part}
          {index < parts.length - 1 ? (
            <a href={`mailto:${email}`} className={styles.emailLink}>
              {email}
            </a>
          ) : null}
        </span>
      ))}
    </p>
  )
}

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const content = getContent(locale)
  const page = content.privacy
  const email = content.site.email

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>{page.eyebrow}</p>

          <h1 className={styles.title}>{page.title}</h1>

          <div className={styles.card}>
            {page.sections.map((section) => (
              <div key={section.title} className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>

                <div className={styles.sectionBody}>
                  {section.body.map((paragraph) => (
                    <ParagraphWithEmail
                      key={paragraph}
                      paragraph={paragraph}
                      email={email}
                      sectionTitle={section.title}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
