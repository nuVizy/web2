import { Link } from 'react-router-dom'
import Container from '../ui/Container'

const linkClass =
  'inline-flex min-h-[44px] items-center text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--accent-green)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-green)]'

const Footer = () => {
  return (
    <footer className="border-t border-[var(--accent-dim)] bg-[var(--panel)]">
      <Container size="lg" className="py-8 sm:py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2 space-y-3">
            <h3 className="font-display text-2xl text-[var(--accent-green)]">nuViz Studio</h3>
            <p className="text-sm text-[var(--muted)] max-w-[55ch]">
              Crafted visuals with rhythm, patience, and sharp intuition. We chase the frame that moves people.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wide text-[var(--muted)]">Quick links</h4>
            <ul className="mt-2">
              <li>
                <Link to="/work" className={linkClass}>
                  Work
                </Link>
              </li>
              <li>
                <Link to="/about" className={linkClass}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className={linkClass}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wide text-[var(--muted)]">Social</h4>
            <ul className="mt-2">
              <li>
                <a href="#" className={linkClass}>
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className={linkClass}>
                  Vimeo
                </a>
              </li>
              <li>
                <a href="#" className={linkClass}>
                  Behance
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-[var(--accent-dim)] py-4 text-center text-xs text-[var(--muted)]">
        © {new Date().getFullYear()} nuViz Studio. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
