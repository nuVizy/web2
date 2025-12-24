import AbstractArt from '../components/ui/AbstractArt';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import FAQAccordion from '../components/ui/FAQAccordion';
import FullBleedImageSection from '../components/ui/FullBleedImageSection';
import ProjectGrid from '../components/ui/ProjectGrid';
import Section from '../components/ui/Section';
import SectionHeaderRow from '../components/ui/SectionHeaderRow';
import SectionHeading from '../components/ui/SectionHeading';
import TextLink from '../components/ui/TextLink';
import { videographyProjects } from '../content/portfolio';
import { usePageMeta } from '../hooks/usePageMeta';

const Videography = () => {
  usePageMeta({ title: 'Videography | nuViz Studio', description: 'Film direction and cinematography by nuViz Studio.' });

  const featuredFilm = videographyProjects[0];

  return (
    <div>
      <Section
        bleed
        padClassName="pt-28 pb-12 md:pt-36 md:pb-16"
        className="relative overflow-hidden ctx-grid"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 hero-abstract" />
          <div className="absolute -bottom-28 -right-28 opacity-35">
            <AbstractArt className="h-[560px] w-[760px]" variant="soft" />
          </div>
          <div className="absolute inset-0 opacity-15 bg-gradient-to-b from-black/20 to-transparent" />
        </div>
        <Container size="lg" className="relative">
          <div className="grid grid-cols-12 gap-10 items-end">
            <div className="col-span-12 lg:col-span-8">
              <SectionHeading
                kicker="Videography"
                title="Films that breathe, with crisp pacing"
                description={
                  <>
                    <p>
                      Brand films, documentaries, and event coverage crafted with steady direction and polished post. We keep
                      stories human while keeping crews nimble.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <Button to="/contact">Start a project</Button>
                      <Button variant="ghost" to="/music-videos">
                        See music videos
                      </Button>
                    </div>
                  </>
                }
              />
            </div>

            <div className="col-span-12 lg:col-span-4">
              <Card pad="lg">
                <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">Deliverables</p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                  <li>• Hero edit + social cutdowns</li>
                  <li>• Captions, exports, masters</li>
                  <li>• Optional stills pulled from footage</li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {featuredFilm ? (
        <FullBleedImageSection
          image={featuredFilm.coverImage}
          kicker="Videography"
          title="Cinematic coverage, calm logistics"
          subtitle="From treatment to delivery, we keep crews lean and outputs ready for web, broadcast, and socials."
          primaryCta={{ label: 'Request a quote', to: '/contact' }}
          secondaryCta={{ label: 'View work', to: '/work' }}
        />
      ) : null}

      <Section size="lg" tone="borderTop" padClassName="py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <h2 className="font-mono text-2xl text-[var(--text)] mb-2">Brand films & events</h2>
            <p className="text-[var(--muted)] mb-4">
              We choreograph camera, sound, and pacing to keep audiences close. Coverage spans keynotes, festivals, and launch
              moments.
            </p>
            <ul className="space-y-2 text-sm text-[var(--muted)] list-disc list-inside">
              <li>Shotlists built for coverage and emotion.</li>
              <li>Audio capture and layered ambience for depth.</li>
              <li>On set lighting adjustments to keep continuity.</li>
            </ul>
          </div>
          <Card>
            <h3 className="font-mono text-xl text-[var(--text)] mb-3">Deliverables</h3>
            <ul className="space-y-2 text-sm text-[var(--muted)] list-disc list-inside">
              <li>Hero edits for web and broadcast.</li>
              <li>Social cuts in 1:1, 9:16, and 16:9 ratios.</li>
              <li>Clean captions, audio stems, and ProRes masters.</li>
              <li>Color graded stills pulled from the footage.</li>
            </ul>
            <h4 className="font-semibold mt-4 text-[var(--text)]">Typical timelines</h4>
            <p className="text-sm text-[var(--muted)]">Production in 1–3 days, first edit in 7 days, final masters in 12–18 days.</p>
          </Card>
        </div>
      </Section>

      <Section size="lg" tone="borderTop" padClassName="py-12 md:py-16">
        <SectionHeaderRow title="Selected films" action={<TextLink className="min-h-[44px]" to="/work">View all work</TextLink>} />
        <ProjectGrid projects={videographyProjects} />
      </Section>

      <Section size="lg" tone="borderTop" padClassName="py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-mono text-2xl text-[var(--text)] mb-3">Process clarity</h2>
            <FAQAccordion
              items={[
                { question: 'Crew size', answer: 'We scale between a two person mobile unit and a full crew with G&E. We keep communication crisp either way.' },
                { question: 'Revisions', answer: 'Two edit rounds are standard. We welcome early feedback to keep the cut aligned.' },
                { question: 'Sound & music', answer: 'We shape bespoke soundbeds, capture nat sound, and clear music with your team or ours.' }
              ]}
            />
          </div>
          <div className="space-y-3">
            <p className="text-[var(--muted)]">
              Ready for cameras to roll? Share your script, brief, or treatment. We will respond with crew, gear list, and a
              realistic schedule.
            </p>
            <Button to="/contact">Request a quote</Button>
            <p className="text-sm text-[var(--muted)]">Prefer a walkthrough? We can join your production meeting to align.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Videography;
