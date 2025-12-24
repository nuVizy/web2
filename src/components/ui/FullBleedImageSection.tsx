import * as React from 'react'
import { cn } from '../../lib/cn'
import Button from './Button'
import Container from './Container'
import Section from './Section'

type CTA = { label: string; to: string }

export interface FullBleedImageSectionProps {
  image: { src: string; alt: string }
  kicker?: string
  title: string
  subtitle?: React.ReactNode
  /** Primary CTA (preferred) */
  primaryCta?: CTA
  /** @deprecated use primaryCta */
  cta?: CTA
  secondaryCta?: CTA
  className?: string
}

/**
 * Full-viewport image section with strong text overlay, aligned to the global grid.
 * Use sparingly (2–4 total across the site) for high impact moments.
 */
export default function FullBleedImageSection({
  image,
  kicker,
  title,
  subtitle,
  primaryCta,
  cta,
  secondaryCta,
  className
}: FullBleedImageSectionProps) {
  const mainCta = primaryCta ?? cta

  return (
    <Section
      bleed
      padClassName="py-0"
      className={cn('relative min-h-[100svh] overflow-hidden bg-[var(--panel)]', className)}
    >
      <div className="absolute inset-0">
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[var(--overlay-strong)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
      </div>

      <Container size="xl" className="relative safe-y">
        <div className="max-w-2xl">
          {kicker ? (
            <p className="font-mono text-xs uppercase tracking-widest text-[rgba(255,255,255,0.78)] code-prefix code-prefix-sm" data-prefix="//">
              {kicker}
            </p>
          ) : null}

          <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-white">
            {title}
          </h2>

          {subtitle ? <div className="mt-4 text-base sm:text-lg leading-relaxed text-[rgba(255,255,255,0.78)]">{subtitle}</div> : null}

          {(mainCta || secondaryCta) ? (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {mainCta ? <Button to={mainCta.to}>{mainCta.label}</Button> : null}
              {secondaryCta ? (
                <Button variant="ghost" to={secondaryCta.to} className="border-white/20 text-white hover:bg-white/10">
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  )
}
