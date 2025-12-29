import { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Container from "../ui/Container";
import { classNames } from "../../lib/classNames";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/photography", label: "Photography" },
  { to: "/videography", label: "Videography" },
  { to: "/work", label: "Work" }, // moved after videography
  { to: "/music-videos", label: "Music Videos" },
  { to: "/design", label: "Design" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const pick = () => ALPHABET[Math.floor(Math.random() * ALPHABET.length)];

type ScrambleNavLinkProps = {
  to: string;
  label: string;
  end?: boolean;
  onClick?: () => void;
  prefix?: React.ReactNode;
  labelClassName?: string;
  className: (args: { isActive: boolean }) => string;
};

const ScrambleNavLink = ({ to, label, end, onClick, prefix, labelClassName, className }: ScrambleNavLinkProps) => {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const reduceMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  const stop = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  };

  const reset = () => {
    stop();
    if (textRef.current) textRef.current.textContent = label;
  };

  useEffect(() => {
    // If label changes, ensure it displays correctly
    reset();
    return () => stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [label]);

  const animate = () => {
    if (reduceMotion) return;
    const el = textRef.current;
    if (!el) return;

    stop();

    const original = label;
    const start = performance.now();
    const duration = 520;

    const frame = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const reveal = Math.floor(t * original.length);

      const next = original
        .split("")
        .map((ch, i) => {
          if (ch === " ") return " ";
          return i < reveal ? original[i] : pick();
        })
        .join("");

      el.textContent = next;

      if (t < 1) rafRef.current = requestAnimationFrame(frame);
      else el.textContent = original;
    };

    rafRef.current = requestAnimationFrame(frame);
  };

  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      aria-label={label}
      className={className}
      onMouseEnter={animate}
      onMouseLeave={reset}
      onFocus={animate}
      onBlur={reset}
    >
      {prefix}
      {/* Keep a stable label for assistive tech; scramble only the visual span */}
      <span className="sr-only">{label}</span>
      <span ref={textRef} aria-hidden="true" className={labelClassName}>
        {label}
      </span>
    </NavLink>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when menu is open (mobile)
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const handleToggle = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container size="lg">
        <div className="flex items-center justify-between h-20 py-4">
          {/* Brand: nuViz // VISUAL SYSTEMS */}
          <Link to="/" className="flex items-center gap-3 font-display text-sm" onCl
