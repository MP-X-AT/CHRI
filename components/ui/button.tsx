import { cn } from '@/lib/utils'

export default function Button({
  children,
  variant = 'primary',
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
}) {
  return (
    <button
      className={cn(
        'rounded-full px-6 py-3 text-sm font-medium transition-all duration-300',
        variant === 'primary' &&
          'bg-[var(--accent)] text-white hover:opacity-90',
        variant === 'ghost' &&
          'border border-black/10 hover:bg-white/60',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}