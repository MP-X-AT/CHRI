'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/ui/container'
import LocaleSwitcher from '@/components/layout/locale-switcher'
import type { Locale, NavItem, SiteContent } from '@/lib/types'
import styles from './header.module.css'

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }

  return pathname
}

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
  const pathname = usePathname()
  const normalizedPathname = normalizePath(pathname)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const getHref = (item: NavItem) =>
    item.href ? `/${locale}/${item.href}` : `/${locale}`

  const isActive = (href: string) => normalizePath(href) === normalizedPathname

  const closeMenu = () => setOpen(false)

  return (
    <header className={styles.header}>
      <div className={styles.headerGlow} />
      <div className={styles.headerAura} />

      <Container className={styles.headerInner}>
        <Link href={`/${locale}`} className={styles.brand} onClick={closeMenu}>
          <div className={styles.brandMark} />
          <div className={styles.brandText}>
            <span className={styles.brandName}>{site.brandName}</span>
            <span className={styles.brandSubtitle}>{site.brandSubtitle}</span>
          </div>
        </Link>

        <div className={styles.desktopControls}>
          <nav className={styles.desktopNav} aria-label="Primary navigation">
            {nav.map((item) => {
              const href = getHref(item)
              const active = isActive(href)

              return (
                <Link
                  key={`${item.label}-${item.href}`}
                  href={href}
                  onClick={closeMenu}
                  className={`${styles.desktopNavLink} ${
                    active ? styles.desktopNavLinkActive : ''
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  <span className={styles.desktopNavLinkLabel}>{item.label}</span>
                  <span className={styles.desktopNavLinkBg} />
                  {active ? <span className={styles.desktopNavActiveGlow} /> : null}
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
          aria-controls="mobile-navigation"
          className={`${styles.mobileToggle} ${open ? styles.mobileToggleOpen : ''}`}
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
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className={styles.mobilePanel}
          >
            <Container className={styles.mobilePanelInner}>
              <div className={styles.mobileCard}>
                <nav className={styles.mobileNav} aria-label="Mobile navigation">
                  {nav.map((item, index) => {
                    const href = getHref(item)
                    const active = isActive(href)

                    return (
                      <motion.div
                        key={`${item.label}-${item.href}-mobile`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.04 }}
                      >
                        <Link
                          href={href}
                          onClick={closeMenu}
                          className={`${styles.mobileNavLink} ${
                            active ? styles.mobileNavLinkActive : ''
                          }`}
                          aria-current={active ? 'page' : undefined}
                        >
                          <span className={styles.mobileNavLabel}>{item.label}</span>
                          <span className={styles.mobileNavArrow}>{active ? '●' : '→'}</span>
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
