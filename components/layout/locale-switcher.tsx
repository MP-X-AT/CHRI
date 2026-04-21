'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Locale } from '@/lib/types'

function getLocalizedPath(pathname: string, currentLocale: Locale) {
  const segments = pathname.split('/').filter(Boolean)
  const targetLocale: Locale = currentLocale === 'de' ? 'en' : 'de'

  if (segments.length === 0) {
    return `/${targetLocale}`
  }

  const detectedLocale = segments[0]

  if (detectedLocale !== 'de' && detectedLocale !== 'en') {
    return `/${targetLocale}`
  }

  const rest = segments.slice(1)

  if (rest.length === 0) {
    return `/${targetLocale}`
  }

  return `/${targetLocale}/${rest.join('/')}`
}

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const href = getLocalizedPath(pathname, locale)

  return (
    <Link
      href={href}
      className="text-sm tracking-[0.04em] text-(--foreground) transition hover:text-(--accent)"
    >
      {locale === 'de' ? 'EN' : 'DE'}
    </Link>
  )
}