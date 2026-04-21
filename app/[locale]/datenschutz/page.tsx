import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getContent } from '@/lib/get-content'
import { isLocale } from '@/lib/i18n'
import { buildPageMetadata } from '@/lib/seo'
import Container from '@/components/ui/container'
import styles from './datenschutz.module.css'

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
    slug: 'datenschutz',
    title: `${content.privacy.title} | ${content.site.brandName}`,
    description: content.meta.description,
    siteName: content.site.brandName,
  })
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[ä]/g, 'ae')
    .replace(/[ö]/g, 'oe')
    .replace(/[ü]/g, 'ue')
    .replace(/[ß]/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

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

  const intro =
    locale === 'de'
      ? 'Informationen darüber, welche personenbezogenen Daten beim Besuch dieser Website verarbeitet werden, zu welchem Zweck dies geschieht und welche Rechte Ihnen dabei zustehen.'
      : 'Information about which personal data may be processed when visiting this website, for what purpose this happens, and which rights you have in this context.'

  const tocLabel = locale === 'de' ? 'Inhaltsverzeichnis' : 'Contents'
  const jumpLabel = locale === 'de' ? 'Direkt zu den Abschnitten' : 'Jump to sections'
  const contactSectionTitle =
    locale === 'de' ? 'Fragen zum Datenschutz?' : 'Questions about privacy?'
  const contactSectionText =
    locale === 'de'
      ? 'Bei Fragen zur Verarbeitung Ihrer Daten oder zur Ausübung Ihrer Rechte können Sie direkt Kontakt aufnehmen.'
      : 'If you have questions about the processing of your data or about exercising your rights, you can get in touch directly.'
  const contactCta = locale === 'de' ? 'E-Mail schreiben' : 'Send email'

  const sections = page.sections.map((section) => ({
    ...section,
    id: slugify(section.title),
  }))

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <p className={styles.sidebarEyebrow}>{tocLabel}</p>
              <nav aria-label={jumpLabel} className={styles.toc}>
                {sections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={styles.tocLink}
                  >
                    <span className={styles.tocIndex}>
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span>{section.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className={styles.main}>
            <div className={styles.hero}>
              <p className={styles.eyebrow}>{page.eyebrow}</p>

              <h1 className={styles.title}>{page.title}</h1>

              <p className={styles.lead}>{intro}</p>
            </div>

            <div className={styles.quickContact}>
              <div className={styles.quickContactInner}>
                <div className={styles.quickContactText}>
                  <p className={styles.quickContactEyebrow}>
                    {contactSectionTitle}
                  </p>
                  <p className={styles.quickContactBody}>{contactSectionText}</p>
                </div>

                <a href={`mailto:${email}`} className={styles.quickContactLink}>
                  {contactCta}
                </a>
              </div>
            </div>

            <div className={styles.card}>
              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={styles.sectionBlock}
                  aria-labelledby={`${section.id}-title`}
                >
                  <div className={styles.sectionHeader}>
                    <span className={styles.sectionNumber}>
                      {(index + 1).toString().padStart(2, '0')}
                    </span>

                    <h2 id={`${section.id}-title`} className={styles.sectionTitle}>
                      {section.title}
                    </h2>
                  </div>

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
                </section>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
