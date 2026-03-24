import Image from 'next/image'
import { notFound } from 'next/navigation'
import { deContent } from '@/content/de'
import { enContent } from '@/content/en'
import { isLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/types'
import Container from '@/components/ui/container'
import GlobalResonanceGlobe from '@/components/sections/global-resonance-globe'

function getContent(locale: Locale) {
  return locale === 'de' ? deContent : enContent
}


function Stat({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div className="rounded-[1.5rem] border border-black/5 bg-white/72 px-5 py-4 shadow-[0_12px_30px_rgba(20,20,20,0.05)] backdrop-blur-sm">
      <div className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
        {value}
      </div>
      <div className="mt-1 text-sm leading-6 text-[var(--muted-foreground)]">
        {label}
      </div>
    </div>
  )
}

function DetailCard({
  index,
  text,
}: {
  index: string
  text: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-[1.5rem] border border-black/5 bg-white/78 p-5 shadow-[0_14px_34px_rgba(25,25,25,0.06)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--accent)]/70 via-[var(--accent)]/20 to-transparent" />
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(220,108,36,0.1)] text-sm font-semibold text-[var(--accent)]">
          {index}
        </div>
        <p className="leading-8 text-[var(--muted-foreground)]">{text}</p>
      </div>
    </div>
  )
}

export default async function ArbeitsweisePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale) || locale !== 'de') notFound()

  const content = getContent(locale)

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-8rem] top-0 h-[22rem] w-[22rem] rounded-full bg-[rgba(220,108,36,0.10)] blur-3xl" />
        <div className="absolute right-[-6rem] top-[8rem] h-[20rem] w-[20rem] rounded-full bg-[rgba(220,108,36,0.06)] blur-3xl" />
        <div className="absolute left-1/2 top-[24rem] h-[18rem] w-[18rem] -translate-x-1/2 rounded-full bg-black/4 blur-3xl" />
      </div>

      <Container>
        <div className="relative overflow-hidden rounded-[2.75rem] border border-black/5 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(255,248,243,0.96))] px-6 py-8 shadow-[0_30px_80px_rgba(20,20,20,0.08)] sm:px-8 sm:py-10 lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-[-4rem] top-[-5rem] h-56 w-56 rounded-full bg-[rgba(220,108,36,0.10)] blur-3xl" />
            <div className="absolute bottom-[-6rem] left-[-4rem] h-56 w-56 rounded-full bg-[rgba(220,108,36,0.08)] blur-3xl" />
            <div className="absolute left-[8%] top-[18%] h-24 w-24 rounded-full border border-[rgba(220,108,36,0.16)]" />
            <div className="absolute right-[10%] top-[20%] h-14 w-14 rounded-full border border-black/6" />
            <div className="absolute bottom-[16%] right-[28%] h-10 w-10 rounded-full bg-[rgba(220,108,36,0.12)]" />
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
            <div className="relative">
              <p className="mb-4 text-sm uppercase tracking-[0.22em] text-[var(--accent)]">
                {content.arbeitsweise.eyebrow}
              </p>

              <h1 className="max-w-4xl text-4xl font-light tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
                {content.arbeitsweise.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)] sm:text-xl">
                {content.arbeitsweise.intro}
              </p>

              <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
                <Stat
                  value="60+"
                  label="Länder und familiäre Wurzeln im Resonanzraum der Arbeit"
                />
                <Stat
                  value="1"
                  label="Haltung mit viel Platz für Begegnung, Würde und Entwicklung"
                />
                <Stat
                  value="100%"
                  label="Menschenzentriert, wertschätzend und nicht polarisierend"
                />
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto max-w-[28rem] overflow-hidden rounded-[2rem] border border-black/8 bg-white/70 p-3 shadow-[0_24px_70px_rgba(20,20,20,0.12)] backdrop-blur-sm">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/images/world.png"
                    alt="Abstrakte Darstellung von Vielfalt, Begegnung und Verbundenheit"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 28rem, 28rem"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/75">
                      Psychodrama
                    </p>
                    <p className="mt-2 text-xl font-medium sm:text-2xl">
                      Begegnung in Bewegung
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-3 top-8 hidden rounded-[1.25rem] border border-[rgba(220,108,36,0.18)] bg-white/90 px-4 py-3 shadow-[0_14px_34px_rgba(20,20,20,0.08)] backdrop-blur-sm sm:block">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                  Haltung
                </p>
                <p className="mt-1 text-sm leading-6 text-[var(--foreground)]">
                  Begegnung vor Bewertung
                </p>
              </div>

              <div className="absolute -bottom-4 right-0 hidden rounded-[1.25rem] border border-black/6 bg-white/90 px-4 py-3 shadow-[0_14px_34px_rgba(20,20,20,0.08)] backdrop-blur-sm sm:block">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                  Fokus
                </p>
                <p className="mt-1 text-sm leading-6 text-[var(--foreground)]">
                  Resonanz, Perspektive, Entwicklung
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(220,108,36,0.14)] bg-[linear-gradient(180deg,rgba(220,108,36,0.10),rgba(255,255,255,0.9))] p-8 shadow-[0_20px_50px_rgba(220,108,36,0.10)]">
            <div className="pointer-events-none absolute right-[-3rem] top-[-3rem] text-[10rem] leading-none text-[rgba(220,108,36,0.10)]">
              “
            </div>

            <p className="relative z-10 text-2xl font-light leading-10 text-[var(--foreground)] sm:text-3xl sm:leading-[1.45]">
              {content.arbeitsweise.psychodramaQuote}
            </p>

            <p className="mt-8 text-sm uppercase tracking-[0.22em] text-[var(--accent)]">
              {content.arbeitsweise.psychodramaAuthor}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_20px_60px_rgba(20,20,20,0.06)] backdrop-blur-sm">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--accent)] via-[var(--accent)]/25 to-transparent" />

            <h2 className="text-2xl font-medium tracking-tight text-[var(--foreground)] sm:text-3xl">
              {content.arbeitsweise.psychodramaTitle}
            </h2>

            <p className="mt-4 leading-8 text-[var(--muted-foreground)]">
              {content.arbeitsweise.psychodramaText}
            </p>

            <div className="mt-8 grid gap-4">
              {content.arbeitsweise.psychodramaDetails.map((item, index) => (
                <DetailCard
                  key={item}
                  index={String(index + 1).padStart(2, '0')}
                  text={item}
                />
              ))}
            </div>
          </div>
        </div>

        
   <div className="mt-12 mb-20">
  <GlobalResonanceGlobe
    title="Verbunden mit vielen Teilen der Welt"
    intro="Biografien, familiäre Wurzeln und persönliche Lebenswege, verbunden mit vielen Teilen der Welt und sichtbar im Resonanzraum meiner Arbeit."
  />
</div>
      </Container>
    </section>
  )
}