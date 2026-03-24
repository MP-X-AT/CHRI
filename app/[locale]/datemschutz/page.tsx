// app/[locale]/datenschutz/page.tsx
import { notFound } from 'next/navigation'
import { isLocale } from '@/lib/i18n'
import Container from '@/components/ui/container'

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale) || locale !== 'de') notFound()

  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
            Datenschutz
          </p>

          <h1 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
            Datenschutzerklärung
          </h1>

          <div className="mt-10 space-y-8 rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-sm">
            <div>
              <h2 className="text-lg font-medium">Verantwortliche</h2>
              <p className="mt-3 leading-8 text-[var(--muted-foreground)]">
                Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser
                Website ist DSAin Christine Pichlhöfer, MSc.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium">Erhebung und Verarbeitung von Daten</h2>
              <p className="mt-3 leading-8 text-[var(--muted-foreground)]">
                Personenbezogene Daten werden nur verarbeitet, soweit dies zur Bereitstellung
                dieser Website sowie zur Bearbeitung von Anfragen per E-Mail oder Telefon
                erforderlich ist.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium">Kontaktaufnahme</h2>
              <p className="mt-3 leading-8 text-[var(--muted-foreground)]">
                Wenn Sie per E-Mail oder Telefon Kontakt aufnehmen, werden Ihre Angaben zur
                Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen gespeichert.
                Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium">Server-Logfiles</h2>
              <p className="mt-3 leading-8 text-[var(--muted-foreground)]">
                Beim Besuch dieser Website können durch den Hosting-Anbieter automatisch
                Informationen in sogenannten Server-Logfiles erhoben und gespeichert werden.
                Dies betrifft insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs,
                Browsertyp und Betriebssystem.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium">Ihre Rechte</h2>
              <p className="mt-3 leading-8 text-[var(--muted-foreground)]">
                Sie haben grundsätzlich das Recht auf Auskunft, Berichtigung, Löschung,
                Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch. Wenn Sie
                glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht
                verstößt, können Sie sich bei der zuständigen Aufsichtsbehörde beschweren.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium">Kontakt zum Datenschutz</h2>
              <p className="mt-3 leading-8 text-[var(--muted-foreground)]">
                Bei Fragen zum Datenschutz wenden Sie sich bitte an{' '}
                <a
                  href="mailto:psychodrama@pichlhoefer.eu"
                  className="text-[var(--foreground)] transition hover:text-[var(--accent)]"
                >
                  psychodrama@pichlhoefer.eu
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}