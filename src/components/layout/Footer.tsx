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
          <div className="md:col-span-5 space-y-4 min-w-0">
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

          {/* Links */}
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

          {/* Services */}
          <div className="md:col-span-2 space-y-3 min-w-0">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">Modules</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/photography" className={linkClass}>
                  <span className="font-mono text-[var(--accent-green)]">//</span>
                  Photography
                </Link>
              </li>
              <li>
                <Link to="/videography" className={linkClass}>
                  <span className="font-mono text-[var(--accent-green)]">//</span>
                  Videography
                </Link>
              </li>
              <li>
                <Link to="/music-videos" className={linkClass}>
                  <span className="font-mono text-[var(--accent-green)]">//</span>
                  Music Videos
                </Link>
              </li>
              <li>
                <Link to="/design" className={linkClass}>
                  <span className="font-mono text-[var(--accent-green)]">//</span>
                  Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Social + contact */}
          <div className="md:col-span-2 space-y-3 min-w-0">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">Connect</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className={linkClass}>
                  <span className="font-mono text-[var(--accent-green)]">&gt;</span>
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className={linkClass}>
                  <span className="font-mono text-[var(--accent-green)]">&gt;</span>
                  Vimeo
                </a>
              </li>
              <li>
                <a href="#" className={linkClass}>
                  <span className="font-mono text-[var(--accent-green)]">&gt;</span>
                  Behance
                </a>
              </li>
            </ul>

            <div className="pt-3 text-xs text-[var(--muted)] code-prefix block" data-prefix=">">
              Email:{" "}
              <a
                className="underline underline-offset-4 hover:text-[var(--accent-green)] transition-colors"
                href="mailto:studio@nuviz.studio"
              >
                studio@nuviz.studio
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-[var(--accent-dim)]">
        <Container size="lg" className="py-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-[var(--muted)]">
            <div className="font-mono">
              <span className="text-[var(--accent-green)]">//</span> © {year} nuViz Studio. All rights reserved.
            </div>

            <div className="font-mono flex items-center gap-2">
              <span className="text-[var(--accent-green)]">&gt;</span>
              Built for{" "}
              <span className="text-[var(--accent-green)]">clarity</span>
              <span className="text-[var(--accent-dim)]">/</span>
              <span className="text-[var(--accent-green)]">restraint</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
