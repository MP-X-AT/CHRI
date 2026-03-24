'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '@/components/ui/container'
import type { Locale } from '@/lib/types'

export default function HomeHero({
  locale,
  content,
}: {
  locale: Locale
  content: {
    kicker: string
    title: string
    text: string
    primaryCta: string
    secondaryCta: string
  }
}) {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-28">
      {/* Hintergrund */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-5rem] h-[24rem] w-[24rem] rounded-[42%] bg-[rgba(220,108,36,0.14)] blur-3xl" />
        <div className="absolute right-[-6rem] top-[6rem] h-[22rem] w-[22rem] rounded-[40%] bg-[rgba(242,184,160,0.16)] blur-3xl" />
        <div className="absolute left-[12%] bottom-[8%] h-[18rem] w-[18rem] rounded-[44%] bg-[rgba(168,195,160,0.12)] blur-3xl" />

        <svg
          className="absolute inset-0 h-full w-full opacity-[0.14]"
          viewBox="0 0 1440 900"
          fill="none"
        >
          <path
            d="M-40 180C140 90 300 115 455 168C620 225 734 310 902 285C1070 260 1182 150 1480 208"
            stroke="#DC6C24"
            strokeWidth="1.4"
          />
          <path
            d="M-30 560C180 470 344 446 515 486C674 523 814 618 980 608C1156 597 1272 495 1490 548"
            stroke="#C8B7AB"
            strokeWidth="1.1"
          />
        </svg>
      </div>

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* LEFT */}
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex rounded-full border border-[rgba(220,108,36,0.18)] bg-[rgba(255,248,243,0.8)] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[var(--accent)] backdrop-blur-sm"
            >
              {content.kicker}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-[11ch] text-[3.2rem] font-light leading-[0.9] tracking-[-0.06em] sm:text-[4.6rem] lg:text-[6rem]"
            >
              {locale === 'de' ? (
                <>
                  Psychotherapie
                  <br />
                  mit <span className="text-[var(--accent)]">fachlicher Tiefe</span>
                  <br />
                  und persönlicher Präsenz.
                </>
              ) : (
                <>
                  Psychotherapy
                  <br />
                  with <span className="text-[var(--accent)]">professional depth</span>
                  <br />
                  and personal presence.
                </>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 max-w-2xl text-lg leading-9 text-[var(--muted-foreground)] sm:text-xl"
            >
              {locale === 'de'
                ? 'Hier finden Sie Informationen zu meiner Arbeitsweise, zu fachlichen Schwerpunkten und zu meinem beruflichen Hintergrund in Psychotherapie, Psychodrama, Gruppendynamik und Supervision.'
                : 'Here you will find information about my therapeutic approach, professional focus areas, and background in psychotherapy, psychodrama, group dynamics and supervision.'}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="mailto:psychodrama@pichlhoefer.eu"
                className="rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-medium text-white shadow-[0_14px_30px_rgba(220,108,36,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(220,108,36,0.3)]"
              >
                {locale === 'de'
                  ? 'Per E-Mail Kontakt aufnehmen'
                  : 'Get in touch by email'}
              </a>

              <Link
                href={locale === 'de' ? '/de/arbeitsweise' : '/en/approach'}
                className="rounded-full border border-black/10 bg-white/70 px-7 py-3.5 text-sm font-medium backdrop-blur-sm transition duration-300 hover:bg-white"
              >
                {locale === 'de' ? 'Zur Arbeitsweise' : 'View approach'}
              </Link>
            </motion.div>

            {/* INFO LEISTE */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="mt-10 max-w-3xl rounded-[1.6rem] border border-[rgba(60,40,20,0.08)] bg-white/60 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm"
            >
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1rem] bg-white/60 px-4 py-3 text-sm leading-6">
                  {locale === 'de'
                    ? 'Psychodrama, Gruppendynamik und Supervision'
                    : 'Psychodrama, group dynamics and supervision'}
                </div>

                <div className="rounded-[1rem] bg-white/60 px-4 py-3 text-sm leading-6">
                  {locale === 'de'
                    ? 'Für Fachkolleg:innen, Schüler:innen und Klient:innen'
                    : 'For colleagues, trainees and clients'}
                </div>

                <div className="rounded-[1rem] bg-white/60 px-4 py-3 text-sm leading-6">
                  {locale === 'de'
                    ? 'Therapie auf Deutsch und Englisch möglich'
                    : 'Therapy available in German and English'}
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-[42rem]"
          >
            <div className="absolute -left-8 top-10 h-[70%] w-[70%] rounded-[2.8rem] bg-[linear-gradient(180deg,rgba(255,240,229,0.98),rgba(247,224,208,0.86))]" />
            <div className="absolute right-0 top-0 h-44 w-44 rounded-[38%] bg-[rgba(220,108,36,0.16)] blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.8rem] border border-[rgba(80,50,30,0.06)] bg-white/50 p-3 shadow-[0_26px_72px_rgba(0,0,0,0.1)] backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-[2.2rem]">
                <Image
                  src="/images/hero.jpg"
                  alt={locale === 'de' ? 'Praxisraum' : 'Practice room'}
                  width={900}
                  height={1100}
                  className="h-[38rem] w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,242,0.02),rgba(255,244,236,0.12))]" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}