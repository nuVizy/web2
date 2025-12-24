import * as React from 'react'
import { cn } from '../../lib/cn'

type StackGap = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const gapClass: Record<StackGap, string> = {
  xs: 'gap-2',
  sm: 'gap-3',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8'
}

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  gap?: StackGap
}

/**
 * Layout primitive: vertical rhythm without ad-hoc margins.
 */
export default function Stack({ as: Comp = 'div', gap = 'md', className, ...rest }: StackProps) {
  return <Comp className={cn('flex flex-col', gapClass[gap], className)} {...rest} />
}
