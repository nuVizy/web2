import * as React from 'react'
import { cn } from '../../lib/cn'

type PillSize = 'sm' | 'md'

export interface PillProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
  size?: PillSize
  selected?: boolean
}

/**
 * Reusable tokenized "chip" / "pill" surface.
 * - Use `size="md"` for interactive filters (44px targets)
 * - Use `size="sm"` for decorative tags
 */
export default function Pill({ as: Comp = 'span', size = 'sm', selected = false, className, ...rest }: PillProps) {
  const base =
    size === 'md'
      ? 'inline-flex items-center justify-center min-h-[44px] px-4 text-sm font-semibold'
      : 'inline-flex items-center justify-center px-2.5 py-1 text-xs uppercase tracking-wide'

  const tone = selected
    ? 'bg-[var(--accent-green)] text-[var(--bg)] border-[rgba(140,255,46,0.18)]'
    : 'border-[var(--accent-dim)] text-[var(--muted)]'

  return (
    <Comp
      className={cn(
        base,
        'rounded-subtle border transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-green)] focus-visible:ring-offset-0',
        !selected && size === 'md' ? 'hover:text-[var(--text)] hover:bg-[rgba(140,255,46,0.03)]' : '',
        className
      )}
      {...rest}
    />
  )
}
