import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../../lib/cn'

interface DialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
  title?: string
}

const Dialog = ({ open, onOpenChange, children, title }: DialogProps) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onOpenChange(false)
    }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onOpenChange])

  if (typeof document === 'undefined') return null

  return createPortal(
    open ? (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        aria-modal="true"
        role="dialog"
        aria-label={title || 'Dialog'}
      >
        <div className="fixed inset-0 bg-black/60" onClick={() => onOpenChange(false)} />
        <div className={cn('relative z-10 w-full max-w-2xl p-6 rounded-subtle panel')}>{children}</div>
      </div>
    ) : null,
    document.body
  )
}

export default Dialog
