import type { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n'
import { buildAbsoluteUrl, buildLocalizedPath, ROUTE_SLUGS } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return locales.flatMap((locale) =>
    ROUTE_SLUGS.map((slug) => ({
      url: buildAbsoluteUrl(buildLocalizedPath(locale, slug)).toString(),
      lastModified,
    }))
  )
}
