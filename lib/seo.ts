import type { Metadata } from 'next'
import { defaultLocale, locales, type Locale } from '@/lib/i18n'

export const SITE_URL = 'https://pichlhoefer.eu'

export const ROUTE_SLUGS = [
  '',
  'angebot',
  'arbeitsweise',
  'erfahrungen',
  'publikationen',
  'kontakt',
  'impressum',
  'datenschutz',
] as const

type RouteSlug = (typeof ROUTE_SLUGS)[number]

type BuildPageMetadataOptions = {
  locale: Locale
  slug?: RouteSlug
  title: string
  description: string
  siteName: string
}

export function buildLocalizedPath(locale: Locale, slug: RouteSlug = '') {
  return slug ? `/${locale}/${slug}` : `/${locale}`
}

export function buildAbsoluteUrl(path: string) {
  return new URL(path, SITE_URL)
}

export function buildLanguageAlternates(slug: RouteSlug = '') {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, buildAbsoluteUrl(buildLocalizedPath(locale, slug)).toString()])
  ) as Record<Locale, string>

  return {
    ...languages,
    'x-default': buildAbsoluteUrl(buildLocalizedPath(defaultLocale, slug)).toString(),
  }
}

export function buildPageMetadata({
  locale,
  slug = '',
  title,
  description,
  siteName,
}: BuildPageMetadataOptions): Metadata {
  const path = buildLocalizedPath(locale, slug)
  const url = buildAbsoluteUrl(path)

  return {
    metadataBase: buildAbsoluteUrl('/'),
    title,
    description,
    alternates: {
      canonical: url,
      languages: buildLanguageAlternates(slug),
    },
    openGraph: {
      type: 'website',
      locale,
      url,
      title,
      description,
      siteName,
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  }
}
