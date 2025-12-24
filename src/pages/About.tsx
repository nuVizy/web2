import AbstractArt from "../components/ui/AbstractArt";
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
    <div>
      {/* Hero */}
      <Section
        bleed
        padClassName="pt-28 pb-12 md:pt-36 md:pb-16"
        className="relative overflow-hidden ctx-grid"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 hero-abstract" />
          <div className="absolute -bottom-28 -left-32 opacity-35">
            <AbstractArt className="h-[560px] w-[760px]" variant="soft" />
          </div>
          <div className="absolute inset-0 opacity-15 bg-gradient-to-b from-black/15 to-transparent" />
        </div>

        <Container size="lg" className="relative">
          <div className="grid grid-cols-12 gap-10 items-end">
            <div className="col-span-12 lg:col-span-8">
              <p
                className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] code-prefix code-prefix-sm"
                data-prefix="//"
              >
                About
              </p>
              <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl text-[var(--text)] leading-tight">
                We build visual systems — not one offs.
              </h1>
              <p className="mt-4 text-[var(--muted)] max-w-2xl">
                nuViz started in the UK and now operates from Paphos, Cyprus. We work with artists, brands, labels and stages
                to produce photography, film, music videos and design that share one consistent language.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button to="/contact">Work with us</Button>
                <Button variant="ghost" to="/work">
                  View work
                </Button>
                <TextLink to="/photography">Explore services</TextLink>
              </div>
            </div>

            <aside className="col-span-12 lg:col-span-4">
              <Card pad="lg">
                <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">Studio</p>
                <div className="mt-3 space-y-3 text-sm">
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-[var(--muted)]">Base</span>
                    <span className="text-[var(--text)]">Paphos, Cyprus</span>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-[var(--muted)]">Roots</span>
                    <span className="text-[var(--text)]">United Kingdom</span>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-[var(--muted)]">Response</span>
                    <span className="text-[var(--text)]">&lt; 1 business day</span>
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
            <Card key={item.title} pad="lg">
              <h3 className="font-mono text-xl text-[var(--text)]">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* What we do */}
      <Section size="lg" tone="borderTop">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
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
          <div className="lg:col-span-7">
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
                <Card key={row.k} tone="outline" pad="md" className="flex gap-6 items-start">
                  <div className="w-28 flex-shrink-0 font-mono text-[var(--accent-green)]">{row.k}</div>
                  <div className="text-sm text-[var(--muted)]">{row.v}</div>
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
          <div>
            <h2 className="font-mono text-xl text-[var(--text)]">Want a system built around your next release?</h2>
            <p className="text-[var(--muted)] mt-2 max-w-2xl">
              Send a brief, a reference, or even a voice note. We’ll reply within one business day.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button to="/contact">Start a project</Button>
            <Button variant="ghost" to="/work">
              View work
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
