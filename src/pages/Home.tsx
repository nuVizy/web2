// src/pages/Home.tsx

import JsonLdOrganization from "../components/JsonLdOrganization";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import FAQAccordion from "../components/ui/FAQAccordion";
import FullBleedImageSection from "../components/ui/FullBleedImageSection";
import ProcessTimeline from "../components/ui/ProcessTimeline";
import ProjectGrid from "../components/ui/ProjectGrid";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import ServicesStrip from "../components/ui/ServicesStrip";
import TestimonialBlock from "../components/ui/TestimonialBlock";
import TextLink from "../components/ui/TextLink";
import { allProjects } from "../content/portfolio";
import { usePageMeta } from "../hooks/usePageMeta";

const CREDITS = [
  "MIF | Festival",
  "Soul:r | MC DRS",
  "Royal Exchange | Theatre",
  "Trillden | Black Josh",
  "Children of Zeus",
  "Goldie",
  "Warehouse Project",
  "Hit + Run",
  "Shotty Horror",
  "Sangy",
  "Killa P",
  "Chimpo",
  "Levelz",
  "V Festival",
  "Parklife Festival",
  "Nick Shahlavi",
  "Space Cadet",
  "DJ EZ",
  "Bicep",
  "Bugsy Malone",
  "SL",
];

const HERO_IMG =
  "https://res.cloudinary.com/de8d8i155/image/upload/f_auto,q_auto,c_fill,w_2400,g_auto/v1766872540/DSC05869_February_19_2017_jen543.jpg";

const OG_IMG =
  "https://res.cloudinary.com/de8d8i155/image/upload/f_auto,q_auto,c_fill,w_1200,h_630,g_auto/v1766872540/DSC05869_February_19_2017_jen543.jpg";

const FAQ_ITEMS = [
  {
    question: "Where are you based?",
    answer:
      "nuViz is based in Paphos, Cyprus — originally built in the UK. We work locally and travel for the right project.",
  },
  {
    question: "What kinds of clients do you work with?",
    answer:
      "Artists, labels, theatres, studios and brands that want a distinct visual language — high level, alternative, not generic.",
  },
  {
    question: "What’s the usual process?",
    answer:
      "A short discovery call, a clear direction, then production and delivery. You get a focused system, not 200 random options.",
  },
  {
    question: "How fast do you reply?",
    answer: "Within one business day. We’ll respond with a proposed direction, structure, and timeline.",
  },
];

const Home = () => {
  usePageMeta({
    title: "nuViz Studio | Photography, Film & Design in Cyprus (Paphos)",
    description:
      "nuViz is a visual systems studio based in Paphos, Cyprus (built in the UK). Photography, film production, music videos and design for artists, brands and labels across Cyprus, the UK and Europe.",
    canonicalPath: "/",
    ogType: "website",
    ogImage: OG_IMG,
  });

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "nuViz Studio",
    url: "https://www.nuviz.studio",
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "nuViz Studio | Visual Systems Studio",
    url: "https://www.nuviz.studio/",
    description:
      "Visual systems studio for photography, film, music videos and design based in Paphos, Cyprus.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://www.nuviz.studio",
      name: "nuViz Studio",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden">
      <JsonLdOrganization
        name="nuViz Studio"
        url="https://www.nuviz.studio"
        description="Visual systems studio for photography, film, music videos and design."
        location="Paphos, Cyprus"
        foundedIn="United Kingdom"
        basedIn="Paphos, Cyprus"
        areaServed={["Cyprus", "United Kingdom", "Europe"]}
        services={[
          "Photography",
          "Brand photography",
          "Editorial portraiture",
          "Film production",
          "Brand films",
          "Music videos",
          "Creative direction",
          "Graphic design",
          "Visual identity systems",
        ]}
      />

      {/* Extra structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero (full screen desktop + mobile) */}
      <Section
        bleed
        padClassName="pt-28 pb-14 md:pt-36 md:pb-20"
        className="relative overflow-hidden ctx-grid min-h-[100svh] flex flex-col"
      >
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={HERO_IMG}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
          {/* Dark overlays for legibility */}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/25 to-black/45" />
        </div>

        {/* Pinned to bottom */}
        <Container size="lg" className="relative mt-auto w-full">
          <div className="grid grid-cols-12 gap-8 items-end">
            <header className="col-span-12 lg:col-span-8 min-w-0">
              <p
                className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] code-prefix code-prefix-sm"
                data-prefix="//"
              >
                Visual Systems Studio
              </p>

              <h1 className="font-mono text-[4.25rem] leading-[0.95] text-[var(--accent-green)] sm:text-[5.25rem] lg:text-[6.5rem]">
                nuViz
                <span className="sr-only">
                  {" "}
                  — Visual systems studio in Cyprus for photography, film, music videos and design
                </span>
              </h1>

              <p
                className="mt-5 text-lg text-[var(--text)] max-w-2xl code-prefix block"
                data-prefix=">"
              >
                A disciplined visual language for image, sound, and motion.
              </p>

              <p className="mt-3 text-sm text-[var(--text)] max-w-2xl">
                Photography, film and design for campaigns, releases and brands that need a consistent
                look across every output.
              </p>

              <p className="mt-3 text-sm text-[var(--muted)] max-w-2xl">
                Built in the UK and now based in Cyprus. Working across Europe with artists, brands,
                labels and stages.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button to="/contact" className="shadow-soft">
                  Check availability
                </Button>
                <Button variant="ghost" to="/work">
                  View work
                </Button>
              </div>
            </header>
          </div>
        </Container>
      </Section>

      {/* Belief */}
      <Section size="sm" padClassName="py-12 md:py-16">
        <SectionHeading
          as="h2"
          kicker="Our belief"
          title="Restraint is a competitive advantage."
          description={
            <>
              <p>We reduce until the image becomes inevitable — then we build the system around it.</p>
              <p className="mt-3">
                The result translates across mediums: stage, campaign, print, screen. One idea, carried
                cleanly from concept to final delivery.
              </p>
            </>
          }
        />
      </Section>

      {/* Services strip */}
      <Section tone="borderTop" size="lg" padClassName="py-12 md:py-16">
        <SectionHeading
          as="h2"
          kicker="Capabilities"
          title="Systems you can deploy"
          description="Not a menu — a set of modules you can reuse across campaigns, releases, tours and platforms."
        />
        <div className="mt-8">
          <ServicesStrip
            services={[
              {
                title: "Photography",
                detail: "Editorial portraits, brand stills and campaigns with controlled negative space.",
              },
              { title: "Film", detail: "Brand films and documentary sequences built around pacing, light and sound." },
              {
                title: "Music Videos",
                detail: "Performance led direction with cinematic cut — designed for rhythm, not trends.",
              },
              { title: "Design", detail: "Identity systems, artwork and layouts that stay calm under visual pressure." },
            ]}
          />
        </div>
      </Section>

      {/* SEO / relevance block (services + location) */}
      <Section size="sm" padClassName="py-12 md:py-16" tone="borderTop">
        <SectionHeading
          as="h2"
          kicker="Cyprus + UK"
          title="Photography, film & music videos — built as one system."
          description={
            <>
              <p>
                nuViz Studio is based in Paphos, Cyprus, creating photography, film and music videos for
                artists, brands and labels. We also work across the UK and Europe for the right projects.
              </p>
              <p className="mt-3">
                If you need a campaign, release or tour to look consistent across stills, motion and design,
                we define the visual language and deliver the assets as a reusable system.
              </p>
            </>
          }
        />
        <div className="mt-6 flex flex-wrap gap-4">
          <TextLink to="/work">See recent work</TextLink>
          <TextLink to="/contact">Request availability</TextLink>
        </div>
      </Section>

      <FullBleedImageSection
        className="min-h-[56svh] md:min-h-[40svh]"
        image={{
          src: "https://res.cloudinary.com/de8d8i155/image/upload/v1766935677/NVZ04332_fnji8b.jpg",
          alt: "Film crew on location in Cyprus",
        }}
        kicker="On location"
        title="Small crews. Clear direction."
        subtitle="The work is built to travel across stills, motion and design without losing its shape."
        primaryCta={{ label: "Start a project", to: "/contact" }}
        secondaryCta={{ label: "See work", to: "/work" }}
      />

      {/* Selected collaborators / credits (Ticker) */}
      <Section size="lg" padClassName="py-12 md:py-16" tone="borderTop">
        <SectionHeading
          as="h2"
          kicker="Selected collaborators"
          title="Work that lives in culture facing rooms."
        />

        <div className="mt-8 border border-[var(--accent-dim)] bg-[var(--panel)]">
          {/* Self-contained marquee CSS so it always works */}
          <style>{`
            @keyframes nuviz-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }

            .nuviz-marquee { overflow: hidden; }
            .nuviz-marquee__track {
              display: flex;
              flex-wrap: nowrap;
              align-items: center;
              width: max-content;
              white-space: nowrap;
              animation: nuviz-marquee var(--nuviz-marquee-duration, 34s) linear infinite;
              will-change: transform;
            }

            .nuviz-marquee:hover .nuviz-marquee__track,
            .nuviz-marquee:focus-within .nuviz-marquee__track {
              animation-play-state: paused;
            }

            @media (prefers-reduced-motion: reduce) {
              .nuviz-marquee { overflow-x: auto; }
              .nuviz-marquee__track { animation: none; transform: none; }
            }
          `}</style>

          <div className="flex items-center justify-between gap-4 px-4 py-3 border-b border-[var(--accent-dim)]">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
              <span className="text-[var(--accent-green)]">//</span> Selected credits
            </p>
          </div>

          {/* Screen reader friendly list (NOT duplicated) */}
          <ul className="sr-only">
            {CREDITS.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>

          <div
            className="nuviz-marquee relative"
            style={{ ["--nuviz-marquee-duration" as any]: "34s" }}
            aria-label="Selected credits ticker. Hover or focus to pause."
          >
            {/* edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-[var(--panel)] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-[var(--panel)] to-transparent" />

            <div className="nuviz-marquee__track gap-6 px-4 py-4" aria-hidden="true">
              {[...CREDITS, ...CREDITS].map((name, i) => (
                <span key={`${name}-${i}`} className="inline-flex items-center gap-3">
                  <span className="font-mono text-[var(--accent-green)] opacity-70">&gt;</span>
                  <span className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors">
                    {name}
                  </span>
                  <span className="font-mono text-[var(--accent-dim)] opacity-50">/</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-4 text-xs text-[var(--muted)]">Ask if you would like references or project examples.</p>
      </Section>

      {/* Work */}
      <Section size="xl" padClassName="py-12 md:py-16" tone="borderTop">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                Selected work
              </p>
              <h2 className="font-mono text-2xl text-[var(--text)]">Recent outputs</h2>
            </div>
            <TextLink to="/work">Browse the archive</TextLink>
          </div>

          <ProjectGrid projects={allProjects.slice(0, 6)} />
        </div>
      </Section>

      {/* NEW: Image between Work and Approach */}
      <FullBleedImageSection
        className="min-h-[44svh] md:min-h-[40svh]"
        image={{
          src: "https://res.cloudinary.com/de8d8i155/image/upload/v1766935679/NVZ04293_dbgrnc.jpg",
          alt: "nuViz — live photography frame",
        }}
        kicker="Work"
        title="Built as a system"
        subtitle="One strong idea carried through every frame — so the output feels consistent across campaigns, stages and screens."
        primaryCta={{ label: "Check availability", to: "/contact" }}
        secondaryCta={{ label: "View work", to: "/work" }}
      />

      {/* Approach (moved into its own section below) */}
      <Section size="sm" padClassName="py-12 md:py-16" tone="borderTop">
        <SectionHeading
          as="h2"
          kicker="Approach"
          title="We think in sequences, not deliverables."
          description={
            <>
              <p>Listen - define - structure - execute - refine.</p>
              <p className="mt-3">
                One strong idea, carried through every frame, cut, and output — with a delivery plan your team can reuse.
              </p>
              <p className="mt-3">
                Based in Paphos, Cyprus with UK roots — available on location across Cyprus and for projects in the UK and
                Europe.
              </p>
            </>
          }
        />
      </Section>

      {/* Process */}
      <Section size="lg" padClassName="py-12 md:py-16" tone="borderTop">
        <SectionHeading
          as="h2"
          kicker="Process"
          title="A clean path from reference to delivery"
          description="Short discovery, clear direction, then production and post — with enough structure that nothing gets noisy."
        />
        <div className="mt-8">
          <ProcessTimeline
            steps={[
              {
                title: "Discovery",
                description:
                  "References, constraints, success criteria — and a single sentence that anchors the work.",
              },
              {
                title: "System design",
                description:
                  "Tone, palette, pacing, typography, lighting language — documented and agreed.",
              },
              { title: "Production", description: "Small crew, decisive direction, clean coverage." },
              {
                title: "Post & delivery",
                description: "Cut, grade, layouts and exports packaged for every platform you need.",
              },
            ]}
          />
        </div>
      </Section>

      {/* Testimonials */}
      <Section size="lg" padClassName="py-12 md:py-16" tone="borderTop">
        <SectionHeading as="h2" kicker="Notes" title="What clients tend to say" />
        <div className="mt-8">
          <TestimonialBlock
            testimonials={[
              {
                quote: "The direction was calm, the results were sharp — everything felt intentional.",
                name: "Producer",
                role: "Brand film",
              },
              {
                quote: "They translated one reference into an entire visual language across assets.",
                name: "Marketing Lead",
                role: "Campaign",
              },
              {
                quote: "Fast replies, clean delivery, and a system we could keep using afterwards.",
                name: "Artist Manager",
                role: "Music release",
              },
            ]}
          />
        </div>
      </Section>

      {/* FAQ */}
      <Section size="lg" padClassName="py-12 md:py-16" tone="borderTop">
        <SectionHeading as="h2" kicker="FAQ" title="Quick answers" />
        <div className="mt-8">
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </Section>

      {/* Quiet CTA */}
      <Section size="lg" padClassName="py-14 md:py-16" tone="borderTop">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="min-w-0">
            <h2 className="font-mono text-xl text-[var(--text)]">Start with a reference and an intention.</h2>
            <p className="text-[var(--muted)] mt-2 max-w-2xl">
              Send links, mood, constraints, and the outcome you need. We respond within one business day
              with a proposed direction, structure, and timeline.
            </p>
          </div>
          <div className="md:mt-0 flex items-center gap-3">
            <Button to="/contact">Begin a project</Button>
            <Button variant="ghost" to="/work">
              See work
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
