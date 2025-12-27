import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import ProcessTimeline from "../components/ui/ProcessTimeline";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import TextLink from "../components/ui/TextLink";
import { usePageMeta } from "../hooks/usePageMeta";

const About = () => {
  usePageMeta({
    title: "About | nuViz Studio",
    description:
      "Studio story, values, and working method for nuViz — a visual systems studio for photography, film, music videos and design.",
    canonicalPath: "/about",
  });

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden">
      {/* Hero */}
      <Section
        bleed
        padClassName="pt-24 pb-12 sm:pt-28 md:pt-36 md:pb-16"
        className="relative overflow-hidden ctx-grid"
      >
        {/* Background image + overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://res.cloudinary.com/de8d8i155/image/upload/v1766855976/NVZ03901_a8iebk.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          {/* slight dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
          {/* subtle depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35" />
        </div>

        <Container size="lg" className="relative w-full">
          <div className="grid grid-cols-12 gap-8 md:gap-10 items-end">
            <div className="col-span-12 lg:col-span-8 min-w-0">
              <p
                className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] code-prefix code-prefix-sm"
                data-prefix="//"
              >
                About
              </p>

              <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl text-[var(--text)] leading-tight">
                We build visual systems | not one offs.
              </h1>

              <p className="mt-4 text-[var(--muted)] max-w-2xl">
                nuViz started in the UK and now operates from Paphos, Cyprus. We work with artists, brands, labels and stages
                to produce photography, film, music videos and design that share one consistent language.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Button className="w-full sm:w-auto" to="/contact">
                  Work with us
                </Button>
                <Button className="w-full sm:w-auto" variant="ghost" to="/work">
                  View work
                </Button>
                <TextLink to="/photography" className="min-h-[44px]">
                  Explore services
                </TextLink>
              </div>
            </div>

            <aside className="col-span-12 lg:col-span-4 min-w-0">
              <Card pad="lg" className="w-full">
                <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">Studio</p>
                <div className="mt-3 space-y-3 text-sm">
                  <div className="flex items-start justify-between gap-3 min-w-0">
                    <span className="text-[var(--muted)]">Base</span>
                    <span className="text-[var(--text)] text-right">Paphos, Cyprus</span>
                  </div>
                  <div className="flex items-start justify-between gap-3 min-w-0">
                    <span className="text-[var(--muted)]">Roots</span>
                    <span className="text-[var(--text)] text-right">United Kingdom</span>
                  </div>
                  <div className="flex items-start justify-between gap-3 min-w-0">
                    <span className="text-[var(--muted)]">Response</span>
                    <span className="text-[var(--text)] text-right">&lt; 1 business day</span>
                  </div>
                </div>
                <div className="mt-5 border-t border-[var(--accent-dim)] pt-4 text-sm text-[var(--muted)]">
                  Send a reference + intention and we’ll reply with direction, structure, and a realistic timeline.
                </div>
              </Card>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Manifesto */}
      <Section size="lg" tone="borderTop">
        <SectionHeading
          kicker="Manifesto"
          title="Make it inevitable"
          description="We care about clarity, pacing, and repeatability — so the work survives outside the first post."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Restraint",
              text: "Remove noise until the frame reads. Fewer choices, stronger outcomes.",
            },
            {
              title: "Direction",
              text: "Small crews, decisive calls, calm sets. We keep everyone aligned.",
            },
            {
              title: "Systems",
              text: "Deliverables that reuse: crops, cuts, templates, exports — all in one language.",
            },
          ].map((item) => (
            <Card key={item.title} pad="lg" className="min-w-0">
              <h3 className="font-mono text-xl text-[var(--text)]">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* What we do */}
      <Section size="lg" tone="borderTop">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 min-w-0">
            <SectionHeading
              kicker="What we do"
              title="Four disciplines, one language"
              description={
                <>
                  <p>
                    The goal is consistency: your photography should feel like your film; your design should reinforce the same
                    tone.
                  </p>
                  <p className="mt-3">That’s what we mean by a visual system.</p>
                </>
              }
            />
          </div>

          <div className="lg:col-span-7 min-w-0">
            <div className="grid gap-3">
              {[
                {
                  k: "Photography",
                  v: "Portraiture, campaigns, editorial — controlled light and negative space.",
                },
                {
                  k: "Film",
                  v: "Brand films and documentary sequences with deliberate pacing.",
                },
                {
                  k: "Music Videos",
                  v: "Performance led direction and cinematic cut built around rhythm.",
                },
                {
                  k: "Design",
                  v: "Identity systems, artwork, layout, and production ready templates.",
                },
              ].map((row) => (
                <Card key={row.k} tone="outline" pad="md" className="flex gap-6 items-start min-w-0">
                  <div className="w-28 flex-shrink-0 font-mono text-[var(--accent-green)]">{row.k}</div>
                  <div className="text-sm text-[var(--muted)] min-w-0">{row.v}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Working method */}
      <Section size="lg" tone="borderTop">
        <SectionHeading
          kicker="Working method"
          title="Structure creates freedom"
          description="Enough planning to keep shoots calm — enough flexibility to catch the unexpected."
        />
        <div className="mt-8">
          <ProcessTimeline
            steps={[
              {
                title: "References + intention",
                description: "You send links, constraints, and the outcome you need. We pull a clear direction from it.",
              },
              {
                title: "System outline",
                description: "Tone, palette, pacing, and deliverables — documented before production starts.",
              },
              {
                title: "Production",
                description: "Small crew, decisive direction, clean coverage — with time protected for the hero moments.",
              },
              {
                title: "Post + packaging",
                description: "Cut, grade, layouts and exports delivered with naming, crops and versions your team can reuse.",
              },
            ]}
          />
        </div>
      </Section>

      {/* CTA */}
      <Section size="lg" tone="borderTop" padClassName="py-14 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="min-w-0">
            <h2 className="font-mono text-xl text-[var(--text)]">Want a system built around your next release?</h2>
            <p className="text-[var(--muted)] mt-2 max-w-2xl">
              Send a brief, a reference, or even a voice note. We’ll reply within one business day.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <Button className="w-full sm:w-auto" to="/contact">
              Start a project
            </Button>
            <Button className="w-full sm:w-auto" variant="ghost" to="/work">
              View work
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
