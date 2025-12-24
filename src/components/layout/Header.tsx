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
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const handleToggle = () => setOpen(prev => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container size="lg">
        <div className="flex items-center justify-between h-20 py-4">
          <Link to="/" className="flex items-center gap-3 font-display text-sm" onClick={closeMenu}>
            <span className="text-[var(--accent-green)] font-mono text-xs tracking-wider">nuViz</span>
            <span className="tracking-tight text-[var(--muted)] text-xs">/</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map(item => (
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
            aria-label="Toggle menu"
            aria-controls="mobile-nav"
            aria-expanded={open}
            onClick={handleToggle}
          >
            <span className="block w-6 h-0.5 bg-[var(--muted)] mb-1" />
            <span className="block w-6 h-0.5 bg-[var(--muted)] mb-1" />
            <span className="block w-6 h-0.5 bg-[var(--muted)]" />
          </button>
        </div>
        {open && (
  <div className="md:hidden mt-2 relative overflow-hidden rounded-subtle border border-[rgba(140,255,46,0.14)] bg-[var(--panel)]/75 backdrop-blur-xl shadow-[0_16px_45px_rgba(0,0,0,0.55),0_0_0_1px_rgba(140,255,46,0.08)]">
    {/* subtle futuristic layers */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(140,255,46,0.18),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.09] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(140,255,46,0.35)] to-transparent" />
    </div>

    <nav
      id="mobile-nav"
      className="relative flex flex-col gap-1 p-2 pt-3 pb-[calc(0.5rem+env(safe-area-inset-bottom))] text-sm font-medium"
    >
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          onClick={closeMenu}
          end={item.to === '/'}
          className={({ isActive }) =>
            classNames(
              'transition-colors duration-200 rounded-subtle px-3 py-2 min-h-[44px] inline-flex items-center justify-between border',
              isActive
                ? 'text-[var(--accent-green)] bg-[rgba(140,255,46,0.06)] border-[rgba(140,255,46,0.18)]'
                : 'text-[var(--text)] border-transparent hover:bg-[rgba(255,255,255,0.03)] hover:border-[rgba(255,255,255,0.06)]'
            )
          }
        >
          <span>{item.label}</span>
          <span className="text-[var(--muted)]">↗</span>
        </NavLink>
      ))}
    </nav>
  </div>
)}

        )}
      </Container>
    </header>
  );
};

export default Header;
