export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[rgba(220,108,36,0.2)] bg-[rgba(220,108,36,0.08)] px-4 py-2 text-sm transition hover:scale-105 hover:shadow-sm">
      {children}
    </span>
  )
}