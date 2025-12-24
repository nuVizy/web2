import { ReactNode } from 'react'
import { classNames } from '../../lib/classNames'

interface Props {
  kicker: string;
  title: string;
  description?: ReactNode;
  align?: 'start' | 'center';
  eyebrowColor?: 'default' | 'accent';
  as?: 'h1' | 'h2' | 'h3'
  size?: 'md' | 'lg'
}

const SectionHeading = ({ kicker, title, description, align = 'start', eyebrowColor = 'default', as = 'h2', size = 'md' }: Props) => {
  const Title = as
  const titleClass =
    size === 'lg'
      ? 'text-3xl sm:text-4xl lg:text-5xl'
      : 'text-2xl sm:text-3xl lg:text-4xl'
  return (
    <div className={classNames('space-y-3', align === 'center' ? 'text-center mx-auto max-w-3xl' : '')}>
      <p
        className={classNames(
          'text-xs tracking-[0.24em] uppercase font-semibold',
          eyebrowColor === 'accent' ? 'text-[var(--accent-green)]' : 'text-[var(--muted)]'
        )}
      >
        {kicker}
      </p>
      <Title className={classNames('font-mono leading-[1.08] text-[var(--text)]', titleClass)}>{title}</Title>
      {description ? (
        <div className={classNames('text-[var(--muted)] text-base leading-relaxed', align === 'center' ? 'mx-auto max-w-[65ch]' : 'max-w-[65ch]')}>
          {description}
        </div>
      ) : null}
    </div>
  )
}

export default SectionHeading
