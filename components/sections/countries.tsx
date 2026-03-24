import Container from '@/components/ui/container'

export default function Countries({
  content,
}: {
  content: {
    title: string
    intro: string
    listLabel: string
    countries: string[]
  }
}) {
  return (
    <section className="py-16">
      <Container>
        <div className="max-w-3xl rounded-[2rem] border border-black/5 bg-[rgba(255,255,255,0.58)] p-8 shadow-sm">
          <h2 className="text-2xl font-medium">{content.title}</h2>
          <p className="mt-4 leading-8 text-[var(--muted-foreground)]">
            {content.intro}
          </p>

          <details className="mt-6 group">
            <summary className="cursor-pointer list-none text-sm font-medium text-[var(--accent)]">
              {content.listLabel}
            </summary>

            <div className="mt-6 flex flex-wrap gap-3">
              {content.countries.map((country) => (
                <span
                  key={country}
                  className="rounded-full border border-[rgba(220,108,36,0.18)] bg-[rgba(220,108,36,0.08)] px-4 py-2 text-sm text-[var(--foreground)]"
                >
                  {country}
                </span>
              ))}
            </div>
          </details>
        </div>
      </Container>
    </section>
  )
}