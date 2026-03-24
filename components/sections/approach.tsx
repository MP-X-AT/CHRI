import Container from '@/components/ui/container'

export default function Approach({
  content,
}: {
  content: {
    eyebrow: string
    title: string
    intro: string
    psychodramaTitle: string
    psychodramaText: string
  }
}) {
  return (
    <section id="arbeitsweise" className="py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl">
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

          <div className="rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-sm">
            <h3 className="text-2xl font-medium">{content.psychodramaTitle}</h3>
            <p className="mt-4 leading-8 text-[var(--muted-foreground)]">
              {content.psychodramaText}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}