import { notFound } from 'next/navigation'
import { deContent } from '@/content/de'
import { enContent } from '@/content/en'
import { isLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/types'
import HomeHero from '@/components/home/home-hero'
import HomeMidStage from '@/components/home/home-mid-stage'

function getContent(locale: Locale) {
  return locale === 'de' ? deContent : enContent
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale)) notFound()

  const content = getContent(locale)

  return (
    <>
      <HomeHero locale={locale} content={content.home.hero} />
      <HomeMidStage locale={locale} />
    </>
  )
}