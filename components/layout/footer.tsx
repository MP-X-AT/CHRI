import Link from 'next/link'
import Container from '@/components/ui/container'
import type { Locale } from '@/lib/types'

export default function Footer({
  locale,
  footer,
}: {
  locale: Locale
  footer: {
    imprint: string
    privacy: string
  }
}) {
  const imprintHref = locale === 'de' ? '/de/impressum' : '/en/imprint'
  const privacyHref = locale === 'de' ? '/de/datenschutz' : '/en/privacy'

  return (
    <footer className="relative mt-32 overflow-hidden border-t border-[rgba(60,40,20,0.08)] bg-[linear-gradient(180deg,rgba(245,237,230,0.38),rgba(244,238,232,0.72))] py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[4%] top-10 h-40 w-40 rounded-[40%] bg-[rgba(220,108,36,0.08)] blur-3xl" />
        <div className="absolute right-[8%] top-[18%] h-44 w-44 rounded-[42%] bg-[rgba(242,184,160,0.08)] blur-3xl" />
        <div className="absolute left-[18%] bottom-[-2rem] h-36 w-36 rounded-[38%] bg-[rgba(168,195,160,0.08)] blur-3xl" />
      </div>

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* LEFT */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent)]">
              Christine Pichlhöfer
            </p>

            <h2 className="mt-5 max-w-[14ch] text-4xl font-light leading-[1.02] tracking-[-0.04em] sm:text-5xl">
              {locale === 'de'
                ? 'Psychotherapie mit fachlicher Tiefe und persönlicher Präsenz.'
                : 'Psychotherapy with professional depth and personal presence.'}
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
              {locale === 'de'
                ? 'Praxis in Wien für Psychotherapie, Psychodrama, Gruppendynamik und Supervision.'
                : 'Practice in Vienna for psychotherapy, psychodrama, group dynamics and supervision.'}
            </p>

            <div className="mt-10 inline-flex rounded-[1.6rem] border border-[rgba(60,40,20,0.08)] bg-white/58 px-5 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm">
              <div className="text-sm leading-7 text-[var(--foreground)]">
                <p>Praxisgemeinschaft Marokkanergasse</p>
                <p>Marokkanergasse 19/3</p>
                <p>{locale === 'de' ? '1030 Wien' : '1030 Vienna'}</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-between">
            <div className="rounded-[2rem] border border-[rgba(60,40,20,0.08)] bg-white/56 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.05)] backdrop-blur-sm sm:p-7">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--accent)]">
                {locale === 'de' ? 'Kontakt' : 'Contact'}
              </p>

              <div className="mt-5 space-y-4 text-base">
                <a
                  href="mailto:psychodrama@pichlhoefer.eu"
                  className="block transition hover:text-[var(--accent)]"
                >
                  psychodrama@pichlhoefer.eu
                </a>

                <a
                  href="tel:+4369911014483"
                  className="block transition hover:text-[var(--accent)]"
                >
                  +43 699 110 144 83
                </a>

                <a
                  href="https://at.linkedin.com/in/christine-pichlhöfer-87a94bb0"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition hover:text-[var(--accent)]"
                >
                  LinkedIn
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:psychodrama@pichlhoefer.eu"
                  className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white shadow-[0_12px_28px_rgba(220,108,36,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(220,108,36,0.28)]"
                >
                  {locale === 'de' ? 'E-Mail schreiben' : 'Send email'}
                </a>

                <a
                  href="tel:+4369911014483"
                  className="rounded-full border border-[rgba(60,40,20,0.08)] bg-white/68 px-5 py-3 text-sm font-medium transition duration-300 hover:bg-white"
                >
                  {locale === 'de' ? 'Anrufen' : 'Call'}
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-5 border-t border-[rgba(60,40,20,0.08)] pt-6 text-sm text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-5">
                <Link href={imprintHref} className="transition hover:text-[var(--foreground)]">
                  {footer.imprint}
                </Link>
                <Link href={privacyHref} className="transition hover:text-[var(--foreground)]">
                  {footer.privacy}
                </Link>
              </div>

              <div className="flex flex-col gap-1 text-xs sm:items-end">
                <p>© Christine Pichlhöfer</p>
                <p>
                  {locale === 'de' ? 'Design & Entwicklung:' : 'Design & development:'}{' '}
                  <a
                    href="https://mp-x.at"
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-[var(--foreground)]"
                  >
                    mp-x.at
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}