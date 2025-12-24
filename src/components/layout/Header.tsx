import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Container from '../ui/Container'
import { classNames } from '../../lib/classNames'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/photography', label: 'Photography' },
  { to: '/videography', label: 'Videography' },
  { to: '/music-videos', label: 'Music Videos' },
  { to: '/design', label: 'Design' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' }
]

const Header = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Prevent background scroll when menu is open (mobile)
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  const handleToggle = () => setOpen((prev) => !prev)
  const closeMenu = () => setOpen(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container size="lg">
        <div className="flex items-center justify-between h-20 py-4">
          <Link to="/" className="flex items-center gap-3 font-display text-sm" onClick={closeMenu}>
            <span className="text-[var(--accent-green)] font-mono text-xs tracking-wider">nuViz</span>
            <span className="tracking-tight text-[var(--muted)] text-xs">/</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  classNames(
                    'transition-colors duration-200 border-b border-transparent',
                    'hover:text-[var(--accent-green)] hover:border-[rgba(140,255,46,0.18)]',
                    isActive ? 'text-[var(--accent-green)] border-[var(--accent-dim)]' : 'text-[var(--muted)]'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden h-11 w-11 inline-flex items-center justify-center rounded-subtle border border-[rgba(140,255,46,0.10)] text-[var(--muted)]"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-nav"
            aria-expanded={open}
            onClick={handleToggle}
          >
            <span className="block w-6 h-0.5 bg-[var(--muted)] mb-1" />
            <span className="block w-6 h-0.5 bg-[var(--muted)] mb-1" />
            <span className="block w-6 h-0.5 bg-[var(--muted)]" />
          </button>
        </div>
      </Container>

      {/* Fullscreen mobile menu */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-[60] bg-black text-[var(--accent-green)]"
          role="dialog"
          aria-modal="true"
        >
          {/* Top bar (keeps brand + close) */}
          <div className="absolute inset-x-0 top-0">
            <Container size="lg">
              <div className="flex items-center justify-between h-20 py-4">
                <Link to="/" className="flex items-center gap-3 font-display text-sm" onClick={closeMenu}>
                  <span className="text-[var(--accent-green)] font-mono text-xs tracking-wider">nuViz</span>
                  <span className="tracking-tight text-white/40 text-xs">/</span>
                </Link>

                <button
                  type="button"
                  className="h-11 w-11 inline-flex items-center justify-center rounded-subtle border border-[rgba(140,255,46,0.18)] text-[var(--accent-green)]"
                  aria-label="Close menu"
                  onClick={closeMenu}
                >
                  <span className="font-mono text-lg leading-none">×</span>
                </button>
              </div>
            </Container>
          </div>

          {/* Centered menu */}
          <nav
            id="mobile-nav"
            className="h-full flex items-center justify-center px-6 pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)]"
          >
            <ul className="w-full max-w-sm flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={closeMenu}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      classNames(
                        'min-h-[44px] inline-flex items-center gap-3 w-full font-mono text-2xl tracking-tight',
                        'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-black',
                        isActive ? 'text-[var(--accent-green)]' : 'text-[rgba(140,255,46,0.85)] hover:text-[var(--accent-green)]'
                      )
                    }
                  >
                    <span aria-hidden="true" className="text-[rgba(140,255,46,0.65)]">
                      &gt;
                    </span>
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
