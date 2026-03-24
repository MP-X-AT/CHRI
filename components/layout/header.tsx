'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/ui/container'
import LocaleSwitcher from '@/components/layout/locale-switcher'
import type { Locale, NavItem } from '@/lib/types'

export default function Header({
  locale,
  nav,
}: {
  locale: Locale
  nav: NavItem[]
}) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(60,40,20,0.06)] bg-[rgba(247,240,231,0.72)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,rgba(220,108,36,0),rgba(220,108,36,0.24),rgba(220,108,36,0))]" />

      <Container className="relative flex h-24 items-center justify-between gap-6">
        <Link
          href={`/${locale}`}
          className="group relative shrink-0"
          onClick={() => setOpen(false)}
        >
          <div className="flex flex-col">
            <span className="text-[0.78rem] uppercase tracking-[0.34em] text-[rgba(56,34,22,0.78)] transition duration-300 group-hover:text-[var(--accent)]">
              Christine Pichlhöfer
            </span>
            <span className="mt-1 text-[0.72rem] tracking-[0.16em] text-[rgba(56,34,22,0.48)] uppercase">
              {locale === 'de'
                ? 'Psychotherapie · Psychodrama'
                : 'Psychotherapy · Psychodrama'}
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          <nav className="flex items-center rounded-full border border-[rgba(60,40,20,0.08)] bg-white/42 p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-md">
            {nav.map((item) => {
              const href = item.href ? `/${locale}/${item.href}` : `/${locale}`

              return (
                <Link
                  key={`${item.label}-${item.href}`}
                  href={href}
                  className="group relative rounded-full px-4 py-2.5 text-sm tracking-[0.01em] text-[var(--muted-foreground)] transition duration-300 hover:text-[var(--foreground)]"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute inset-0 rounded-full bg-white/0 transition duration-300 group-hover:bg-white/70" />
                </Link>
              )
            })}
          </nav>

          <div className="rounded-full border border-[rgba(60,40,20,0.08)] bg-white/50 px-2 py-1.5 shadow-[0_10px_24px_rgba(0,0,0,0.035)] backdrop-blur-md">
            <LocaleSwitcher locale={locale} />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(60,40,20,0.08)] bg-white/50 shadow-[0_10px_24px_rgba(0,0,0,0.035)] backdrop-blur-md transition hover:bg-white/70 md:hidden"
        >
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-5 rounded-full bg-[var(--foreground)] transition duration-300 ${
                open ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-[var(--foreground)] transition duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-[var(--foreground)] transition duration-300 ${
                open ? '-translate-y-[7px] -rotate-45' : ''
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
            className="border-t border-[rgba(60,40,20,0.06)] bg-[rgba(247,240,231,0.96)] md:hidden"
          >
            <Container className="py-5">
              <div className="overflow-hidden rounded-[2rem] border border-[rgba(60,40,20,0.08)] bg-white/55 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.05)] backdrop-blur-md">
                <nav className="flex flex-col">
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
                          className="flex items-center justify-between rounded-[1.2rem] px-4 py-4 text-base text-[var(--foreground)] transition hover:bg-white/75"
                        >
                          <span>{item.label}</span>
                          <span className="text-[var(--accent)]">→</span>
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                <div className="mt-3 border-t border-[rgba(60,40,20,0.06)] pt-3">
                  <div className="rounded-[1.2rem] bg-[rgba(255,255,255,0.58)] px-4 py-3">
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