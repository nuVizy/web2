import { useMemo, useRef, useCallback } from "react";
import { NavLink } from "react-router-dom";

type HackerNavLinkProps = {
  to: string;
  label: string;
  end?: boolean;
  className?: string;
};

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const pick = () => ALPHABET[Math.floor(Math.random() * ALPHABET.length)];

export default function HackerNavLink({ to, label, end, className }: HackerNavLinkProps) {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const reduceMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  const stop = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  }, []);

  const setText = useCallback((text: string) => {
    if (!spanRef.current) return;
    spanRef.current.textContent = text;
  }, []);

  const animate = useCallback(() => {
    if (reduceMotion) return;

    const el = spanRef.current;
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
      else setText(original);
    };

    rafRef.current = requestAnimationFrame(frame);
  }, [label, reduceMotion, setText, stop]);

  const reset = useCallback(() => {
    stop();
    setText(label);
  }, [label, setText, stop]);

  // Base link styling: underline wipe + active underline
  const base =
    "relative inline-flex items-center py-2 text-[11px] uppercase tracking-[0.35em] " +
    "text-[var(--muted)] transition-colors duration-200 hover:text-[var(--text)] " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent " +
    "after:absolute after:left-0 after:-bottom-[2px] after:h-px after:w-full after:bg-current after:origin-left after:scale-x-0 " +
    "after:transition-transform after:duration-300 motion-reduce:after:transition-none " +
    "hover:after:scale-x-100 focus-visible:after:scale-x-100";

  const active = "text-[var(--text)] after:scale-x-100";

  return (
    <NavLink
      to={to}
      end={end}
      aria-label={label}
      className={({ isActive }) => `${base} ${isActive ? active : ""} ${className ?? ""}`}
      onMouseEnter={animate}
      onMouseLeave={reset}
      onFocus={animate}
      onBlur={reset}
    >
      {/* Screen readers keep stable label; only this span scrambles visually */}
      <span ref={spanRef} aria-hidden="true">
        {label}
      </span>
    </NavLink>
  );
}
