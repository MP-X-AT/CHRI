'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/ui/container'
import LocaleSwitcher from '@/components/layout/locale-switcher'
import type { Locale, NavItem, SiteContent } from '@/lib/types'
import styles from './header.module.css'

export default function Header({
  locale,
  nav,
  site,
  labels,
}: {
  locale: Locale
  nav: NavItem[]
  site: SiteContent['site']
  labels: SiteContent['header']
}) {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.headerGlow} />

      <Container className={styles.headerInner}>
        <Link
          href={`/${locale}`}
          className={styles.brand}
          onClick={() => setOpen(false)}
        >
          <div className={styles.brandText}>
            <span className={styles.brandName}>{site.brandName}</span>
            <span className={styles.brandSubtitle}>{site.brandSubtitle}</span>
          </div>
        </Link>

        <div className={styles.desktopControls}>
          <nav className={styles.desktopNav}>
            {nav.map((item) => {
              const href = item.href ? `/${locale}/${item.href}` : `/${locale}`

              return (
                <Link
                  key={`${item.label}-${item.href}`}
                  href={href}
                  className={styles.desktopNavLink}
                >
                  <span className={styles.desktopNavLinkLabel}>{item.label}</span>
                  <span className={styles.desktopNavLinkBg} />
                </Link>
              )
            })}
          </nav>

          <div className={styles.localeWrap}>
            <LocaleSwitcher locale={locale} />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? labels.closeMenuLabel : labels.openMenuLabel}
          aria-expanded={open}
          className={styles.mobileToggle}
        >
          <div className={styles.burger}>
            <span
              className={`${styles.burgerLine} ${styles.burgerLineTop} ${
                open ? styles.burgerLineTopOpen : ''
              }`}
            />
            <span
              className={`${styles.burgerLine} ${styles.burgerLineMiddle} ${
                open ? styles.burgerLineMiddleOpen : ''
              }`}
            />
            <span
              className={`${styles.burgerLine} ${styles.burgerLineBottom} ${
                open ? styles.burgerLineBottomOpen : ''
              }`}
            />
          </div>
        </button>
      </Container>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className={styles.mobilePanel}
          >
            <Container className={styles.mobilePanelInner}>
              <div className={styles.mobileCard}>
                <nav className={styles.mobileNav}>
                  {nav.map((item, index) => {
                    const href = item.href ? `/${locale}/${item.href}` : `/${locale}`

                    return (
                      <motion.div
                        key={`${item.label}-${item.href}-mobile`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.04 }}
                      >
                        <Link
                          href={href}
                          onClick={() => setOpen(false)}
                          className={styles.mobileNavLink}
                        >
                          <span>{item.label}</span>
                          <span className={styles.mobileNavArrow}>→</span>
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                <div className={styles.mobileLocaleSection}>
                  <div className={styles.mobileLocaleCard}>
                    <LocaleSwitcher locale={locale} />
                  </div>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}