import { Link } from "react-router-dom";
import Container from "../ui/Container";

const linkClass =
  "inline-flex min-h-[44px] items-center gap-2 text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--accent-green)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-green)]";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--accent-dim)] bg-[var(--panel)]">
      <Container size="lg" className="py-10 sm:py-12">
        <div className="grid gap-10 md:grid-cols-12 items-start">
          {/* Brand / statement */}
          <div className="md:col-span-6 space-y-4 min-w-0">
            <p
              className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] code-prefix code-prefix-sm"
              data-prefix="//"
            >
              nuViz Studio
            </p>

            <h3 className="font-mono text-2xl sm:text-3xl leading-tight text-[var(--accent-green)]">
              Visual systems for image, sound, and motion.
            </h3>

            <p className="text-sm text-[var(--muted)] max-w-[58ch] code-prefix block" data-prefix=">">
              Crafted visuals with rhythm, patience, and sharp intuition — built to hold up across campaigns, releases, and
              stages.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[var(--muted)]">
              <span className="inline-flex items-center gap-2">
                <span className="font-mono text-[var(--accent-green)]">//</span>
                Paphos, Cyprus
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="font-mono text-[var(--accent-green)]">//</span>
                UK roots
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="font-mono text-[var(--accent-green)]">//</span>
                Available EU/UK
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-3 min-w-0">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">Navigation</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/work" className={linkClass}>
                  <span className="font-mono text-[var(--accent-green)]">&gt;</span>
                  Work
                </Link>
              </li>
              <li>
                <Link to="/about" className={linkClass}>
                  <span className="font-mono text-[var(--accent-green)]">&gt;</span>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className={linkClass}>
                  <span className="font-mono text-[var(--accent-green)]">&gt;</span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Modules */}
          <div className="md:col-span-3 space-y-3 min-w-0">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">Modules</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/photography" className={linkClass}>
                  <span className="font-mono text-[var(--accent-green)]">&gt;</span>
                  Photography
                </Link>
              </li>
              <li>
                <Link to="/videography" className={linkClass}>
                  <span className="font-mono text-[var(--accent-green)]">&gt;</span>
                  Videography
                </Link>
              </li>
              <li>
                <Link to="/music-videos" className={linkClass}>
                  <span className="font-mono text-[var(--accent-green)]">&gt;</span>
                  Music Videos
                </Link>
              </li>
              <li>
                <Link to="/design" className={linkClass}>
                  <span className="font-mono text-[var(--accent-green)]">&gt;</span>
                  Design
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-[var(--accent-dim)]">
        <Container size="lg" className="py-4">
          <div className="text-xs text-[var(--muted)] font-mono">
            <span className="text-[var(--accent-green)]">//</span> © {year} nuViz Studio. All rights reserved.
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
