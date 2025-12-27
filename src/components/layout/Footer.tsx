import { Link } from "react-router-dom";
import Container from "../ui/Container";

const linkClass =
  "inline-flex min-h-[44px] items-center gap-2 text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--accent-green)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-green)]";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--accent-dim)] bg-[var(--panel)]">
      <Container size="lg" className="py-7 sm:py-8">
        <div className="grid gap-6 md:grid-cols-12 items-start">
          {/* Brand / statement (condensed) */}
          <div className="md:col-span-7 space-y-2 min-w-0">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]" aria-label="nuViz Studio">
              <span className="text-[var(--accent-green)]">//</span> nuViz Studio
            </p>

            <p className="font-mono text-lg sm:text-xl leading-snug text-[var(--accent-green)]">
              Visual systems for image, sound, and motion.
            </p>

            <p className="text-sm text-[var(--muted)] max-w-[62ch]">
              <span className="font-mono text-[var(--accent-green)]">&gt;</span>{" "}
              Crafted visuals with rhythm, patience, and sharp intuition.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--muted)]">
              <span className="inline-flex items-center gap-2">
                <span className="font-mono text-[var(--accent-green)]">&gt;</span>
                Paphos, Cyprus
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="font-mono text-[var(--accent-green)]">&gt;</span>
                UK roots
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="font-mono text-[var(--accent-green)]">&gt;</span>
                EU/UK
              </span>
            </div>
          </div>

          {/* Links (two compact columns) */}
          <div className="md:col-span-5 grid grid-cols-2 gap-6 min-w-0">
            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">Navigation</h4>
              <ul className="space-y-1">
                <li>
                  <Link to="/work" className={linkClass}>
                    <span className="font-mono text-[var(--accent-green)]">&gt;</span> Work
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={linkClass}>
                    <span className="font-mono text-[var(--accent-green)]">&gt;</span> About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={linkClass}>
                    <span className="font-mono text-[var(--accent-green)]">&gt;</span> Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">Modules</h4>
              <ul className="space-y-1">
                <li>
                  <Link to="/photography" className={linkClass}>
                    <span className="font-mono text-[var(--accent-green)]">&gt;</span> Photography
                  </Link>
                </li>
                <li>
                  <Link to="/videography" className={linkClass}>
                    <span className="font-mono text-[var(--accent-green)]">&gt;</span> Videography
                  </Link>
                </li>
                <li>
                  <Link to="/music-videos" className={linkClass}>
                    <span className="font-mono text-[var(--accent-green)]">&gt;</span> Music Videos
                  </Link>
                </li>
                <li>
                  <Link to="/design" className={linkClass}>
                    <span className="font-mono text-[var(--accent-green)]">&gt;</span> Design
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar (condensed) */}
      <div className="border-t border-[var(--accent-dim)]">
        <Container size="lg" className="py-3">
          <div className="text-xs text-[var(--muted)] font-mono">
            <span className="text-[var(--accent-green)]">//</span> © {year} nuViz Studio
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
