import { deContent } from '@/content/de'
import { enContent } from '@/content/en'
import type { Locale, SiteContent } from '@/lib/types'

export function getContent(locale: Locale): SiteContent {
  return locale === 'de' ? deContent : enContent
}
