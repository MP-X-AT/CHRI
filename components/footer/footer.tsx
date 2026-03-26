import Link from 'next/link'
import type { Locale, SiteContent } from '@/lib/types'
import Container from '@/components/ui/container'
import styles from './footer.module.css'

export default function Footer({
  locale,
  footer,
  site,
}: {
  locale: Locale
  footer: SiteContent['footer']
  site: SiteContent['site']
}) {
  const imprintHref = locale === 'de' ? '/de/impressum' : '/en/imprint'
  const privacyHref = locale === 'de' ? '/de/datenschutz' : '/en/privacy'

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <p className={styles.footerName}>{footer.kicker}</p>
            <p className={styles.footerDescription}>{footer.description}</p>

            <div className={styles.footerMeta}>
              <span className={styles.footerLine} />
              <p className={styles.footerLocation}>
                {site.practice} · {site.address[1]}
              </p>
            </div>
          </div>

          <div className={styles.footerColumns}>
            <div>
              <p className={styles.footerLabel}>{footer.contactLabel}</p>

              <div className={styles.footerLinks}>
                <a href={`mailto:${site.email}`} className={styles.footerLink}>
                  {site.email}
                </a>

                <a href={`tel:${site.phoneHref}`} className={styles.footerLink}>
                  {site.phone}
                </a>

                <a
                  href={site.linkedinHref}
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.footerLink} ${styles.footerLinkMuted}`}
                >
                  {site.linkedinLabel}
                </a>
              </div>
            </div>

            <div>
              <p className={styles.footerLabel}>{footer.legalLabel}</p>

              <div className={styles.footerLinks}>
                <Link href={imprintHref} className={styles.footerLink}>
                  {footer.imprint}
                </Link>

                <Link href={privacyHref} className={styles.footerLink}>
                  {footer.privacy}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>{site.copyright}</p>

          <p>
            {footer.developerLabel}{' '}
            <a
              href={site.developerHref}
              target="_blank"
              rel="noreferrer"
              className={styles.footerLink}
            >
              {site.developerName}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}