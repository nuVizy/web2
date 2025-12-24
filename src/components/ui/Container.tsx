import * as React from 'react'
import { cn } from '../../lib/cn'

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

const sizeClass: Record<ContainerSize, string> = {
  sm: 'max-w-4xl',
  md: 'max-w-6xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[86rem]',
  full: 'max-w-none'
}

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize
  as?: React.ElementType
}

/**
 * Layout primitive: consistent max width + gutters across the site.
 * Use inside `Section` when you need a custom layout but want the same grid.
 */
export default function Container({
  as: Comp = 'div',
  size = 'lg',
  className,
  ...rest
}: ContainerProps) {
  return <Comp className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', sizeClass[size], className)} {...rest} />
}
