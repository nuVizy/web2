import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { Link } from 'react-router-dom'
import { classNames } from '../../lib/classNames'

type NativeButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type Props = NativeButtonProps & {
  variant?: 'solid' | 'ghost'
  to?: string
  href?: string
}

const Button = ({ variant = 'solid', className, children, to, href, ...rest }: Props) => {
  const base =
    'inline-flex items-center justify-center gap-2 min-h-[44px] px-5 text-sm font-semibold transition-colors duration-200 rounded-subtle ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-green)] focus-visible:ring-offset-0'
  const styles =
    variant === 'solid'
      ? 'bg-[var(--accent-green)] text-[var(--bg)] hover:brightness-90 shadow-[0_6px_18px_rgba(140,255,46,0.08)]'
      : 'text-[var(--accent-green)] border border-[var(--accent-dim)] hover:bg-[rgba(140,255,46,0.03)]'

  if (to) {
    return (
      <Link to={to} className={classNames(base, styles, className)}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classNames(base, styles, className)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classNames(base, styles, className)} {...rest}>
      {children}
    </button>
  )
}

export default Button
