import { notFound } from 'next/navigation'
import { getContent } from '@/lib/get-content'
import { isLocale } from '@/lib/i18n'
import Container from '@/components/ui/container'
import styles from './kontakt.module.css'

export default async function KontaktPage({
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
        <div className={styles.grid}>
          <div className={styles.mainColumn}>
            <p className={styles.eyebrow}>{content.kontakt.eyebrow}</p>

            <h1 className={styles.title}>{content.kontakt.title}</h1>

            <p className={styles.intro}>{content.kontakt.text}</p>

            <div className={styles.profileCard}>
              <h2 className={styles.name}>{content.kontakt.name}</h2>

              <div className={styles.roles}>
                {content.kontakt.roles.map((role) => (
                  <span key={role} className={styles.roleTag}>
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoStack}>
              <div>
                <p className={styles.label}>{content.kontakt.practiceLabel}</p>
                <p className={styles.valueLarge}>{content.kontakt.practice}</p>
              </div>

              <div>
                <p className={styles.label}>{content.kontakt.addressLabel}</p>
                <div className={styles.address}>
                  {content.kontakt.address.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>

              <div>
                <p className={styles.label}>{content.kontakt.phoneLabel}</p>
                <a
                  href={`tel:${content.site.phoneHref}`}
                  className={styles.contactLink}
                >
                  {content.kontakt.phone}
                </a>
              </div>

              <div>
                <p className={styles.label}>{content.kontakt.emailLabel}</p>
                <a
                  href={`mailto:${content.kontakt.email}`}
                  className={styles.contactLink}
                >
                  {content.kontakt.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
