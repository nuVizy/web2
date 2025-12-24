import * as React from "react";

type SectionSize = "sm" | "md" | "lg" | "xl" | "full";
type SectionTone = "default" | "borderTop" | "borderBottom" | "panel";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
  /** controls the inner max-width */
  size?: SectionSize;
  /** quick structural tones without redesigning */
  tone?: SectionTone;
  /** if true, skips the inner max-width container */
  bleed?: boolean;
  /** extra classes for the inner container */
  containerClassName?: string;
  /** extra classes for vertical padding defaults */
  padClassName?: string;
};

const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

const sizeClass: Record<SectionSize, string> = {
  sm: "max-w-4xl",
  md: "max-w-6xl",
  lg: "max-w-7xl",
  xl: "max-w-[86rem]",
  full: "max-w-none",
};

const toneClass: Record<SectionTone, string> = {
  default: "",
  borderTop: "border-t border-[var(--accent-dim)]",
  borderBottom: "border-b border-[var(--accent-dim)]",
  panel: "panel rounded-subtle",
};

export default function Section({
  as: Comp = "section",
  size = "md",
  tone = "default",
  bleed = false,
  className,
  containerClassName,
  padClassName,
  children,
  ...rest
}: SectionProps) {
  // Mobile-first rhythm: tighter on small screens, consistent step-up on larger.
  const padding = padClassName ?? "py-10 sm:py-12 md:py-16";
  const outer = cx("w-full", padding, toneClass[tone], className);

  if (bleed) {
    return (
      <Comp className={outer} {...rest}>
        {children}
      </Comp>
    );
  }

  return (
    <Comp className={outer} {...rest}>
      <div
        className={cx(
          "mx-auto w-full px-4 sm:px-6 lg:px-8",
          sizeClass[size],
          containerClassName
        )}
      >
        {children}
      </div>
    </Comp>
  );
}
