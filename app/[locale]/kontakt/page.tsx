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
      <div className={styles.backgroundGlowA} />
      <div className={styles.backgroundGlowB} />

      <Container>
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div className={styles.mainColumn}>
              <p className={styles.eyebrow}>
                {locale === 'en' ? 'Contact' : 'Kontakt'}
              </p>

              <p className={styles.lead}>
                {locale === 'en'
                  ? 'For appointments or questions, you are welcome to get in touch by email. Initial contact is uncomplicated and personal.'
                  : 'Für Terminvereinbarungen oder Fragen können Sie sich jederzeit unkompliziert per E-Mail melden. Der Erstkontakt ist persönlich und einfach.'}
              </p>

              <div className={styles.ctaRow}>
                <a
                  href={`mailto:${kontakt.email}`}
                  className={styles.primaryCta}
                >
                  {locale === 'en' ? 'Request an appointment' : 'Termin anfragen'}
                </a>

                <a
                  href={`tel:${content.site.phoneHref}`}
                  className={styles.secondaryCta}
                >
                  {locale === 'en' ? 'Call directly' : 'Direkt anrufen'}
                </a>
              </div>
            </div>

            <aside className={styles.sideColumn}>
              <div className={styles.profileCard}>
                <div className={styles.profileAccent} />

                <div className={styles.profileHeader}>
                  <div className={styles.monogram} aria-hidden="true">
                    {kontakt.name
                      .split(' ')
                      .slice(0, 2)
                      .map((part) => part[0])
                      .join('')}
                  </div>

                  <div className={styles.profileHeaderText}>
                    <p className={styles.profileKicker}>
                      {locale === 'en' ? 'Professional profile' : 'Berufliches Profil'}
                    </p>
                    <h1 className={styles.name}>{kontakt.name}</h1>
                  </div>
                </div>

                <div className={styles.roleList}>
                  {kontakt.roles.map((role) => (
                    <p key={role} className={styles.roleItem}>
                      {role}
                    </p>
                  ))}
                </div>

   
              </div>
            </aside>
          </div>

          <div className={styles.bottomGrid}>
            <div className={styles.practiceCard}>
              <p className={styles.sectionLabel}>{kontakt.practiceLabel}</p>
              <p className={styles.practiceName}>{kontakt.practice}</p>

              <div className={styles.infoDivider} />

              <p className={styles.sectionLabel}>{kontakt.addressLabel}</p>
              <div className={styles.address}>
                {kontakt.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            <div className={styles.notePanel}>
              <p className={styles.noteKicker}>
                {locale === 'en' ? 'First contact' : 'Erstkontakt'}
              </p>

              <p className={styles.noteText}>
                {locale === 'en'
                  ? 'Appointments and initial contact can be arranged easily by email or phone. You will receive a clear and uncomplicated response.'
                  : 'Terminvereinbarungen und Erstkontakt sind unkompliziert per E-Mail oder Telefon möglich. Sie erhalten eine klare und unkomplizierte Rückmeldung.'}
              </p>

              <a
                href={`mailto:${kontakt.email}`}
                className={styles.inlineLink}
              >
                {locale === 'en' ? 'Write an email now' : 'Jetzt E-Mail schreiben'}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}