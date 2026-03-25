'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Locale } from '@/lib/types'

const deToEnPathMap: Record<string, string> = {
  angebot: 'services',
  arbeitsweise: 'approach',
  erfahrungen: 'experience',
  publikationen: 'publications',
  kontakt: 'contact',
}

const enToDePathMap: Record<string, string> = {
  services: 'angebot',
  approach: 'arbeitsweise',
  experience: 'erfahrungen',
  publications: 'publikationen',
  contact: 'kontakt',
}

function getLocalizedPath(pathname: string, locale: Locale) {
  const segments = pathname.split('/').filter(Boolean)

  if (segments.length === 0) {
    return locale === 'de' ? '/en' : '/de'
  }

  const currentLocale = segments[0]

  if (currentLocale !== 'de' && currentLocale !== 'en') {
    return locale === 'de' ? '/en' : '/de'
  }

  const targetLocale: Locale = locale === 'de' ? 'en' : 'de'
  const rest = segments.slice(1)

  if (rest.length === 0) {
    return `/${targetLocale}`
  }

  const translatedRest = rest.map((segment, index) => {
    if (index !== 0) return segment

    if (locale === 'de') {
      return deToEnPathMap[segment] ?? segment
    }

    return enToDePathMap[segment] ?? segment
  })

  return `/${targetLocale}/${translatedRest.join('/')}`
}

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const href = getLocalizedPath(pathname, locale)

  return (
    <Link
      href={href}
      className="text-sm tracking-[0.04em] text-[var(--foreground)] transition hover:text-[var(--accent)]"
    >
      {locale === 'de' ? 'EN' : 'DE'}
    </Link>
  )
}