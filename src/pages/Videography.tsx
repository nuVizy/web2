import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import FAQAccordion from '../components/ui/FAQAccordion';
import FullBleedImageSection from '../components/ui/FullBleedImageSection';
import ProjectGrid from '../components/ui/ProjectGrid';
import Section from '../components/ui/Section';
import SectionHeaderRow from '../components/ui/SectionHeaderRow';
import TextLink from '../components/ui/TextLink';
import { videographyProjects } from '../content/portfolio';
import { usePageMeta } from '../hooks/usePageMeta';

const Videography = () => {
  usePageMeta({
    title: 'Videography | nuViz Studio',
    description: 'Film direction and cinematography by nuViz Studio.'
  });

  const featuredFilm = videographyProjects?.[0];

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden">
      {/* HERO (match Photography style) */}
      {featuredFilm ? (
        <FullBleedImageSection
          className="min-h-[44svh] md:min-h-[40svh] flex flex-col justify-end"
          image={featuredFilm.coverImage}
          kicker="Videography"
          title="Films that breathe, with crisp pacing"
          subtitle="Brand films, documentaries, and event coverage crafted with steady direction and polished post. We keep stories human while keeping crews nimble."
          primaryCta={{ label: 'Start a project', to: '/contact' }}
          secondaryCta={{ label: 'See music videos', to: '/music-videos' }}
        />
      ) : (
        <FullBleedImageSection
          className="min-h-[44svh] md:min-h-[40svh] flex flex-col justify-end"
          image={{
            src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766877504/29b1f1af-d0a3-48de-8824-c759aac8616a.png',
            alt: 'nuViz — videography frame'
          }}
          kicker="Videography"
          title="Films that breathe, with crisp pacing"
          subtitle="Brand films, documentaries, and event coverage crafted with steady direction and polished post. We keep stories human while keeping crews nimble."
          primaryCta={{ label: 'Start a project', to: '/contact' }}
          secondaryCta={{ label: 'See music videos', to: '/music-videos' }}
        />
      )}

      <Section size="lg" tone="borderTop" padClassName="py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-2 items-start min-w-0">
          <div className="min-w-0">
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
            <p className="text-sm text-[var(--muted)]">
              Production in 1–3 days, first edit in 7 days, final masters in 12–18 days.
            </p>
          </Card>
        </div>
      </Section>

      <Section size="lg" tone="borderTop" padClassName="py-12 md:py-16">
        <SectionHeaderRow
          title="Selected films"
          action={
            <TextLink className="min-h-[44px]" to="/work">
              View all work
            </TextLink>
          }
        />
        <div className="min-w-0">
          <ProjectGrid projects={videographyProjects} />
        </div>
      </Section>

      <Section size="lg" tone="borderTop" padClassName="py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-2 items-center min-w-0">
          <div className="min-w-0">
            <h2 className="font-mono text-2xl text-[var(--text)] mb-3">Process clarity</h2>
            <FAQAccordion
              items={[
                {
                  question: 'Crew size',
                  answer:
                    'We scale between a two person mobile unit and a full crew with G&E. We keep communication crisp either way.'
                },
                {
                  question: 'Revisions',
                  answer: 'Two edit rounds are standard. We welcome early feedback to keep the cut aligned.'
                },
                {
                  question: 'Sound & music',
                  answer: 'We shape bespoke soundbeds, capture nat sound, and clear music with your team or ours.'
                }
              ]}
            />
          </div>

          <div className="space-y-3 min-w-0">
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
