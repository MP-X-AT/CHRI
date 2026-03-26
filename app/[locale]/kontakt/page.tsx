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
  const kontakt = content.kontakt

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.hero}>
          <div className={styles.mainColumn}>
            <p className={styles.eyebrow}>{kontakt.eyebrow}</p>

            <h1 className={styles.title}>{kontakt.title}</h1>

            <p className={styles.intro}>{kontakt.text}</p>

            <div className={styles.ctaRow}>
              <a
                href={`mailto:${kontakt.email}`}
                className={styles.primaryCta}
              >
                {locale === 'en' ? 'Write an email' : 'E-Mail schreiben'}
              </a>

              <a
                href={`tel:${content.site.phoneHref}`}
                className={styles.secondaryCta}
              >
                {locale === 'en' ? 'Call now' : 'Jetzt anrufen'}
              </a>
            </div>

            <div className={styles.profileCard}>
              <div className={styles.profileGlow} />

              <div className={styles.profileInner}>
                <p className={styles.profileKicker}>
                  {locale === 'en' ? 'Professional profile' : 'Berufliches Profil'}
                </p>

                <h2 className={styles.name}>{kontakt.name}</h2>

                <div className={styles.roles}>
                  {kontakt.roles.map((role) => (
                    <span key={role} className={styles.roleTag}>
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className={styles.sideColumn}>
            <div className={styles.infoCard}>
              <div className={styles.infoStack}>
                <div className={styles.infoBlock}>
                  <p className={styles.label}>{kontakt.practiceLabel}</p>
                  <p className={styles.valueLarge}>{kontakt.practice}</p>
                </div>

                <div className={styles.infoBlock}>
                  <p className={styles.label}>{kontakt.addressLabel}</p>
                  <div className={styles.address}>
                    {kontakt.address.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>

                <div className={styles.infoGrid}>
                  <div className={styles.contactTile}>
                    <p className={styles.label}>{kontakt.phoneLabel}</p>
                    <a
                      href={`tel:${content.site.phoneHref}`}
                      className={styles.contactLink}
                    >
                      {kontakt.phone}
                    </a>
                  </div>

                  <div className={styles.contactTile}>
                    <p className={styles.label}>{kontakt.emailLabel}</p>
                    <a
                      href={`mailto:${kontakt.email}`}
                      className={styles.contactLink}
                    >
                      {kontakt.email}
                    </a>
                  </div>
                </div>

                <div className={styles.noteCard}>
                  <p className={styles.noteText}>
                    {locale === 'en'
                      ? 'Appointments and first contact can be arranged easily by email or phone.'
                      : 'Terminvereinbarungen und Erstkontakt sind unkompliziert per E-Mail oder Telefon möglich.'}
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}