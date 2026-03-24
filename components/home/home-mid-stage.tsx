'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/container'
import type { Locale } from '@/lib/types'

export default function HomeMidStage({
  locale,
}: {
  locale: Locale
}) {
  const content =
    locale === 'de'
      ? {
          eyebrow: 'Fachliche Schwerpunkte',
          title: 'Psychotherapie, Psychodrama, Gruppendynamik und Supervision in einer eigenständigen, lebendigen Form.',
          
          highlights: [
            {
              title: 'Psychotherapie',
              text: 'Ein Rahmen für Reflexion, Entwicklung und professionelle Begleitung.',
            },
            {
              title: 'Psychodrama',
              text: 'Erfahrungsorientiertes Arbeiten mit Tiefe, Bewegung und Perspektivenwechsel.',
            },
            {
              title: 'Supervision',
              text: 'Für Fachkolleg:innen, Institutionen und berufliche Kontexte.',
            },
          ],
          sideNote: 'Therapie auf Deutsch und Englisch möglich.',
          bottomLeft: 'Für Klient:innen, Schüler:innen, Fachkolleg:innen und Institutionen.',
          bottomRight: 'In Wien · mit persönlicher Präsenz und fachlicher Klarheit.',
        }
      : {
          eyebrow: 'Professional focus',
          title: 'Psychotherapy, psychodrama, group dynamics and supervision in a distinct and lively form.',
          intro:
            'A visual in-between space that does not only inform, but also conveys attitude, approach and atmosphere.',
          highlights: [
            {
              title: 'Psychotherapy',
              text: 'A space for reflection, growth and professional guidance.',
            },
            {
              title: 'Psychodrama',
              text: 'Experiential work with depth, movement and changing perspectives.',
            },
            {
              title: 'Supervision',
              text: 'For colleagues, institutions and professional contexts.',
            },
          ],
          sideNote: 'Therapy available in German and English.',
          bottomLeft: 'For clients, trainees, colleagues and institutions.',
          bottomRight: 'In Vienna · with personal presence and professional clarity.',
        }

  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10rem] top-[12%] h-[28rem] w-[28rem] rounded-[42%] bg-[rgba(220,108,36,0.10)] blur-3xl" />
        <div className="absolute right-[-8rem] top-[18%] h-[24rem] w-[24rem] rounded-[38%] bg-[rgba(242,184,160,0.12)] blur-3xl" />
        <div className="absolute left-[20%] bottom-[8%] h-[18rem] w-[18rem] rounded-[44%] bg-[rgba(168,195,160,0.10)] blur-3xl" />
        <div className="absolute right-[14%] bottom-[-4rem] h-[22rem] w-[22rem] rounded-[40%] bg-[rgba(143,168,201,0.10)] blur-3xl" />

        <svg
          className="absolute inset-0 h-full w-full opacity-[0.16]"
          viewBox="0 0 1440 1000"
          fill="none"
        >
          <path
            d="M-32 252C170 151 333 172 500 233C678 299 770 372 954 353C1117 336 1243 236 1495 282"
            stroke="#DC6C24"
            strokeWidth="1.4"
          />
          <path
            d="M-20 646C201 569 363 560 536 603C700 644 850 734 1017 725C1189 716 1298 630 1490 666"
            stroke="#C8B7AB"
            strokeWidth="1.15"
          />
          <path
            d="M236 60C205 210 281 293 389 363C505 438 627 477 648 627C664 739 617 845 704 1018"
            stroke="#D9C7BB"
            strokeWidth="1"
          />
        </svg>
      </div>

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2.8rem] border border-[rgba(60,40,20,0.07)] bg-[linear-gradient(135deg,rgba(255,247,241,0.96),rgba(247,236,228,0.9))] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.05)] backdrop-blur-sm sm:p-10 lg:p-12">
              <div className="absolute right-0 top-0 h-36 w-36 rounded-bl-[2.6rem] bg-white/20" />
              <div className="absolute -left-10 bottom-10 h-28 w-28 rounded-[38%] bg-[rgba(220,108,36,0.12)] blur-2xl" />

              <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
                {content.eyebrow}
              </p>

              <h2 className="mt-5 max-w-[13ch] text-4xl font-light leading-[0.98] tracking-[-0.05em] sm:text-5xl lg:text-[3.8rem]">
                {content.title}
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
                {content.intro}
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-[rgba(60,40,20,0.06)] bg-white/56 px-5 py-4 text-sm leading-7 shadow-[0_10px_24px_rgba(0,0,0,0.03)]">
                  {content.bottomLeft}
                </div>
                <div className="rounded-[1.4rem] border border-[rgba(60,40,20,0.06)] bg-white/56 px-5 py-4 text-sm leading-7 shadow-[0_10px_24px_rgba(0,0,0,0.03)]">
                  {content.bottomRight}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative min-h-[38rem]">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="relative ml-auto max-w-[30rem]"
            >
              <div className="rounded-[2.3rem] border border-[rgba(60,40,20,0.07)] bg-white/62 p-6 shadow-[0_22px_50px_rgba(0,0,0,0.05)] backdrop-blur-md">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--accent)]">
                  01
                </p>
                <h3 className="mt-4 text-2xl tracking-[-0.03em]">
                  {content.highlights[0].title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[var(--muted-foreground)]">
                  {content.highlights[0].text}
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              className="absolute left-0 top-[9.5rem] max-w-[20rem]"
            >
              <div className="rounded-[2rem] border border-[rgba(60,40,20,0.07)] bg-[linear-gradient(135deg,rgba(242,247,241,0.94),rgba(231,238,229,0.9))] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.04)]">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--accent)]">
                  02
                </p>
                <h3 className="mt-3 text-xl tracking-[-0.03em]">
                  {content.highlights[1].title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                  {content.highlights[1].text}
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="absolute right-2 top-[20rem] max-w-[22rem]"
            >
              <div className="rounded-[2rem] border border-[rgba(60,40,20,0.07)] bg-[linear-gradient(135deg,rgba(250,244,245,0.95),rgba(242,231,234,0.9))] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.04)]">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--accent)]">
                  03
                </p>
                <h3 className="mt-3 text-xl tracking-[-0.03em]">
                  {content.highlights[2].title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                  {content.highlights[2].text}
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-4 left-8 max-w-[19rem]"
            >
              <div className="rounded-[1.8rem] border border-[rgba(60,40,20,0.06)] bg-[rgba(255,250,246,0.72)] px-5 py-4 shadow-[0_14px_30px_rgba(0,0,0,0.03)] backdrop-blur-sm">
                <p className="text-sm leading-7 text-[var(--foreground)]">
                  {content.sideNote}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}