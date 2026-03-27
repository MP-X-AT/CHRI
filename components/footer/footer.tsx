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
  const imprintHref = `/${locale}/impressum`
  const privacyHref = `/${locale}/datenschutz`

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerTop}>
          <div className={styles.brandBlock}>
            <div className={styles.brandRow}>
              <span className={styles.brandLine} aria-hidden="true" />
              <p className={styles.brandName}>{footer.kicker}</p>
            </div>

            <p className={styles.brandClaim}>{footer.description}</p>
          </div>

          <nav className={styles.legalNav} aria-label={footer.legalLabel}>
            <Link href={imprintHref} className={styles.footerLink}>
              {footer.imprint}
            </Link>

            <span className={styles.navDot} aria-hidden="true" />

            <Link href={privacyHref} className={styles.footerLink}>
              {footer.privacy}
            </Link>
          </nav>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.bottomText}>{site.copyright}</p>

          <p className={styles.bottomText}>
            {footer.developerLabel}{' '}
            <a
              href={site.developerHref}
              target="_blank"
              rel="noreferrer"
              className={styles.footerLinkSubtle}
            >
              {site.developerName}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}