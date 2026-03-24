// app/[locale]/arbeitsweise/page.tsx
import { notFound } from 'next/navigation'
import { deContent } from '@/content/de'
import { enContent } from '@/content/en'
import { isLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/types'
import Container from '@/components/ui/container'
import CountryCloud from '@/components/sections/country-cloud'

function getContent(locale: Locale) {
  return locale === 'de' ? deContent : enContent
}

const countries = [
  'Österreich',
  'Norwegen',
  'Serbien',
  'Italien',
  'Polen',
  'Philippinen',
  'Türkei',
  'Frankreich',
  'Syrien',
  'Nigeria',
  'Kanada',
  'Ägypten',
  'Kolumbien',
  'Irak',
  'Spanien',
  'Finnland',
  'DR Kongo',
  'Bosnien',
  'Mexiko',
  'Griechenland',
  'Ukraine',
  'Pakistan',
  'Belgien',
  'Venezuela',
  'Schweden',
  'Kenia',
  'Slowakei',
  'Kroatien',
  'VR China',
  'Irland',
  'Slowenien',
  'Afghanistan',
  'Rumänien',
  'Estland',
  'Libanon',
  'Portugal',
  'Ungarn',
  'Dominikanische Republik',
  'Russland',
  'Niederlande',
  'Ghana',
  'Bulgarien',
  'USA',
  'Iran',
  'Luxemburg',
  'Indien',
  'Großbritannien',
  'Israel',
  'Vietnam',
  'Schweiz',
  'Elfenbeinküste',
  'Argentinien',
  'Nordmazedonien',
  'Senegal',
  'Deutschland',
  'Georgien',
  'Palästina',
  'Thailand',
  'Tunesien',
]

export default async function ArbeitsweisePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale) || locale !== 'de') notFound()

  const content = getContent(locale)

  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
            {content.arbeitsweise.eyebrow}
          </p>

          <h1 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
            {content.arbeitsweise.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-[var(--muted-foreground)]">
            {content.arbeitsweise.intro}
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[rgba(220,108,36,0.14)] bg-[rgba(220,108,36,0.08)] p-8 shadow-sm">
            <p className="text-2xl font-light leading-10 text-[var(--foreground)] sm:text-3xl">
              {content.arbeitsweise.psychodramaQuote}
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
              {content.arbeitsweise.psychodramaAuthor}
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-sm">
            <h2 className="text-2xl font-medium">
              {content.arbeitsweise.psychodramaTitle}
            </h2>

            <p className="mt-4 leading-8 text-[var(--muted-foreground)]">
              {content.arbeitsweise.psychodramaText}
            </p>

            <div className="mt-6 space-y-4">
              {content.arbeitsweise.psychodramaDetails.map((item) => (
                <p
                  key={item}
                  className="leading-8 text-[var(--muted-foreground)]"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-sm">
          <p className="leading-8 text-[var(--muted-foreground)]">
            {content.arbeitsweise.methodInfo}
          </p>

          <a
            href="https://www.psychodrama-austria.at/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block text-sm font-medium text-[var(--accent)]"
          >
            {content.arbeitsweise.externalLinkLabel}
          </a>
        </div>

        <div className="mt-16">
         <CountryCloud
  title="Diverse life paths"
  intro="I deeply value working with people whose life paths and family roots connect to different countries."
  buttonLabel="Show more countries"
  collapseLabel="Show fewer countries"
  countries={countries}
/>
        </div>
      </Container>
    </section>
  )
}