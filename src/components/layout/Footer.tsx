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
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
              <span className="font-mono text-[var(--accent-green)]">&gt;</span> nuViz Studio
            </p>

            <p className="font-mono text-lg sm:text-xl leading-snug text-[var(--accent-green)]">
              Visual systems for image, sound, and motion.
            </p>

            <p className="text-sm text-[var(--muted)] max-w-[62ch]">
              Crafted visuals with rhythm, patience, and sharp intuition.
            </p>

            {/* Meta box */}
            <div className="pt-2">
              <div className="inline-block border border-[var(--accent-dim)] bg-black/10 px-3 py-2">
                <div className="grid grid-cols-3 gap-4 text-xs text-[var(--muted)]">
                  {["Paphos, Cyprus", "UK roots", "Worldwide"].map((item) => (
                    <div key={item} className="flex items-center justify-center gap-2 whitespace-nowrap">
                      <span className="font-mono text-[var(--accent-green)]">&gt;</span>
                      <span className="text-center">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Links (two compact columns) */}
          <div className="md:col-span-5 grid grid-cols-2 gap-6 min-w-0">
            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">Navigation</h4>
              <ul className="space-y-1">
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

            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">Modules</h4>
              <ul className="space-y-1">
                <li>
                  <Link to="/photography" className={linkClass}>
                    Photography
                  </Link>
                </li>
                <li>
                  <Link to="/videography" className={linkClass}>
                    Videography
                  </Link>
                </li>
                <li>
                  <Link to="/music-videos" className={linkClass}>
                    Music Videos
                  </Link>
                </li>
                <li>
                  <Link to="/design" className={linkClass}>
                    Design
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
