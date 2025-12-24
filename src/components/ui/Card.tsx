import { ReactNode } from 'react'
import { classNames } from '../../lib/classNames'

type CardPad = 'sm' | 'md' | 'lg'
type CardTone = 'panel' | 'outline'

interface Props {
  children: ReactNode
  className?: string
  pad?: CardPad
  tone?: CardTone
}

const padClass: Record<CardPad, string> = {
  sm: 'p-4',
  md: 'p-5 sm:p-6',
  lg: 'p-6 sm:p-7'
}

const toneClass: Record<CardTone, string> = {
  panel: 'panel',
  outline: 'border border-[var(--accent-dim)] bg-transparent'
}

const Card = ({ children, className, pad = 'md', tone = 'panel' }: Props) => (
  <div className={classNames(toneClass[tone], 'rounded-subtle', padClass[pad], className)}>{children}</div>
)

export default Card
