import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getContent } from '@/lib/get-content'
import { isLocale } from '@/lib/i18n'
import { buildPageMetadata } from '@/lib/seo'
import HomeHero from '@/components/home/home-hero'
import HomeMidStage from '@/components/home/home-mid-stage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  if (!isLocale(locale)) {
    return {}
  }

  const content = getContent(locale)

  return buildPageMetadata({
    locale,
    title: content.meta.title,
    description: content.meta.description,
    siteName: content.site.brandName,
  })
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const content = getContent(locale)

  return (
    <>
      <HomeHero
        locale={locale}
        content={content.home.hero}
        email={content.site.email}
      />
      <HomeMidStage content={content.home.midStage} />
    </>
  )
}
