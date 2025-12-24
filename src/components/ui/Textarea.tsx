import React from 'react'
import { cn } from '../../lib/cn'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        'w-full min-h-[140px] rounded-subtle border border-transparent bg-[rgba(255,255,255,0.02)] px-4 py-2 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-green)] focus-visible:ring-offset-0',
        className
      )}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'

export default Textarea
