import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import FAQAccordion from '../components/ui/FAQAccordion';
import ProjectGrid from '../components/ui/ProjectGrid';
import Section from '../components/ui/Section';
import SectionHeaderRow from '../components/ui/SectionHeaderRow';
import SectionHeading from '../components/ui/SectionHeading';
import TextLink from '../components/ui/TextLink';
import { musicVideoProjects } from '../content/portfolio';
import { usePageMeta } from '../hooks/usePageMeta';

const MusicVideos = () => {
  usePageMeta({
    title: 'Music Videos | nuViz Studio',
    description: 'Music video direction and production by nuViz Studio.',
    canonicalPath: '/music-videos'
  });

  return (
    <div>
      {/* HERO */}
      <Section
        bleed
        padClassName="pt-28 pb-12 md:pt-36 md:pb-16"
        className="relative min-h-screen overflow-hidden ctx-grid"
      >
        {/* Fullscreen background image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://res.cloudinary.com/de8d8i155/image/upload/v1766869984/1a22fd29-d15c-4a20-aa67-fd070a34a692.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
            loading="eager"
            decoding="async"
          />

          {/* optional: subtle darkening so white text pops */}
          <div className="absolute inset-0 bg-black/25" />

          {/* optional: gradient for nicer depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/35" />
        </div>

        <Container size="lg" className="relative">
          <div className="grid grid-cols-12 gap-10 items-end min-h-[calc(100vh-8rem)]">
            <div className="col-span-12 lg:col-span-8">
              <SectionHeading
                kicker="Music Videos"
                title="Visual rhythm that honors the track"
                description={
                  <>
                    <p>
                      We design shotlists, choreography, and lighting around the beat. Expect intentional pacing,
                      performance guidance, and edits that hit on the one.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <Button to="/contact">Book a video</Button>
                      <Button variant="ghost" to="/videography">
                        See brand films
                      </Button>
                    </div>
                  </>
                }
              />
            </div>

            <div className="col-span-12 lg:col-span-4">
              <Card pad="lg">
                <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">On the day</p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                  <li>• Performance direction + blocking</li>
                  <li>• Lighting plan that matches the mix</li>
                  <li>• Crew scaled to budget (lean → full)</li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* PACKAGES */}
      <Section size="lg" tone="borderTop" padClassName="py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-2 items-start">
          <div>
            <h2 className="font-mono text-2xl text-[var(--text)] mb-2">Packages</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { title: 'Starter', detail: 'One location, lean crew, performance focused edit.' },
                { title: 'Standard', detail: 'Two locations, mood lighting plan, stylized grade.' },
                { title: 'Premium', detail: 'Narrative arcs, choreography, art direction, BTS stills.' }
              ].map((pkg) => (
                <Card key={pkg.title} pad="md">
                  <h3 className="font-mono text-lg text-[var(--text)] mb-2">{pkg.title}</h3>
                  <p className="text-sm text-[var(--muted)]">{pkg.detail}</p>
                </Card>
              ))}
            </div>
            <p className="text-[var(--muted)] mt-4 text-sm">
              If you already have a concept and timeline, we can quote directly from a treatment.
            </p>
          </div>

          <Card>
            <h3 className="font-mono text-xl text-[var(--text)] mb-2">Credits & collaboration</h3>
            <p className="text-[var(--muted)] text-sm mb-3">
              We welcome label creatives, choreographers, and stylists into the process. Credits stay transparent and we share
              BTS assets for your rollout.
            </p>
            <ul className="list-disc list-inside text-sm text-[var(--muted)] space-y-2">
              <li>Pre production: treatments, casting support, and budget clarity.</li>
              <li>Performance coverage with multi camera options.</li>
              <li>Color grade and sound design tuned to the mix.</li>
            </ul>
            <Button className="mt-4" to="/contact">
              Start a brief
            </Button>
          </Card>
        </div>
      </Section>

      {/* SELECTED VIDEOS */}
      <Section size="lg" tone="borderTop" padClassName="py-12 md:py-16">
        <SectionHeaderRow
          title="Selected videos"
          action={<TextLink className="min-h-[44px]" to="/work">View all work</TextLink>}
        />
        <ProjectGrid projects={musicVideoProjects} />
      </Section>

      {/* FAQ */}
      <Section size="lg" tone="borderTop" padClassName="py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-mono text-2xl text-[var(--text)] mb-3">FAQs</h2>
            <FAQAccordion
              items={[
                {
                  question: 'Creative direction',
                  answer:
                    'We align on blocking, wardrobe, lighting and tone before shoot day. If movement is key, we can include a movement coach.'
                },
                {
                  question: 'Timelines',
                  answer:
                    'Typical timeline: 1 week pre production, 1–2 shoot days, first edit in 7 days, final delivery in 12–15 days.'
                },
                {
                  question: 'Delivery formats',
                  answer: 'We master for YouTube, broadcast, and socials, with clean and texted versions.'
                }
              ]}
            />
          </div>

          <div className="space-y-3">
            <p className="text-[var(--muted)]">
              Want to riff on a treatment? Send your track and references. We’ll pitch visual rhythm and a production approach
              that respects budget and story.
            </p>
            <Button to="/contact">Plan a shoot</Button>
            <p className="text-sm text-[var(--muted)]">Need artwork too? Visit our design services.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default MusicVideos;
