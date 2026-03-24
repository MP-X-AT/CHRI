import Container from '@/components/ui/container'

export default function Services({
  content,
}: {
  content: {
    eyebrow: string
    title: string
    intro: string
    items: { title: string; text: string }[]
  }
}) {
  return (
    <section id="angebot" className="py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
            {content.eyebrow}
          </p>
          <h2 className="text-4xl font-light tracking-tight sm:text-5xl">
            {content.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-[var(--muted-foreground)]">
            {content.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {content.items.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-sm"
            >
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="mt-4 leading-7 text-[var(--muted-foreground)]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}