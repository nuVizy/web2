import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import FAQAccordion from '../components/ui/FAQAccordion';
import FullBleedImageSection from '../components/ui/FullBleedImageSection';
import ProjectGrid from '../components/ui/ProjectGrid';
import Section from '../components/ui/Section';
import ServicesStrip from '../components/ui/ServicesStrip';
import TextLink from '../components/ui/TextLink';
import { photographyProjects } from '../content/portfolio';
import { usePageMeta } from '../hooks/usePageMeta';

const Photography = () => {
  usePageMeta({ title: 'Photography | nuViz Studio', description: 'Editorial photography crafted by nuViz Studio.' });

  const featuredSeries = photographyProjects[0];

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      {featuredSeries ? (
        <FullBleedImageSection
          className="flex flex-col justify-end"
          image={featuredSeries.coverImage}
          kicker="Photography"
          title="Frames with calm intent"
          subtitle="We build direction into the shoot so the gallery reads as one voice. Clean selects, consistent light, and room to breathe."
          primaryCta={{ label: 'Book a shoot', to: '/contact' }}
          secondaryCta={{ label: 'Browse work', to: '/work' }}
        />
      ) : null}

      <Section size="lg" tone="borderTop" padClassName="py-12 md:py-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">
          <h2 className="font-mono text-2xl text-[var(--text)]">Featured series</h2>
          <TextLink to="/work" className="min-h-[44px]">
            See all work
          </TextLink>
        </div>
        <ProjectGrid projects={photographyProjects} />
      </Section>

      {/* SERVICES (full-width now) */}
      <Section size="lg" tone="borderTop" padClassName="py-12 md:py-16">
        <div className="max-w-3xl">
          <h3 className="font-mono text-2xl text-[var(--text)] mb-2">Services & guidance</h3>
          <p className="text-[var(--muted)] mb-6">
            We design shoots around clear tone and pacing. Expect pre production support, on set direction, and considered
            retouching.
          </p>
        </div>

        <ServicesStrip
          services={[
            { title: 'Portraits', detail: 'Artist press kits, album liners, director portraits, executive presence.' },
            { title: 'Campaigns', detail: 'Lookbooks, launch visuals, and hero imagery for product lines.' },
            { title: 'Editorial stories', detail: 'Magazine ready narratives shot on location or in studio.' },
            { title: 'Product and still life', detail: 'Tabletop sets, macro detail, and texture forward lighting.' }
          ]}
        />

        <div className="mt-8">
        </div>
      </Section>

      <Section size="lg" tone="borderTop" padClassName="py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="font-mono text-2xl text-[var(--text)] mb-3">FAQ</h3>
            <FAQAccordion
              items={[
                {
                  question: 'Turnaround times',
                  answer: 'Portrait galleries deliver within 5 business days. Campaigns land within 10–14 days including retouch rounds.'
                },
                {
                  question: 'Deliverables',
                  answer:
                    'We provide high resolution finals, web crops, and color and black and white options. Retouching notes are documented and versioned.'
                },
                {
                  question: 'Licensing',
                  answer: 'Usage is tailored to your needs—press, digital, paid, or out of home. We keep it simple and transparent.'
                }
              ]}
            />
          </div>

          <Card className="w-full">
            <h3 className="font-mono text-xl text-[var(--text)]">Ready to shoot?</h3>
            <p className="text-[var(--muted)] mt-2">
              Share your concept, reference images, or schedule. We respond within one business day.
            </p>
            <div className="mt-4">
              <Button className="w-full sm:w-auto" to="/contact">
                Start booking
              </Button>
            </div>
            <p className="text-sm text-[var(--muted)] mt-3 break-all">
              Prefer a call? Email studio@nuviz.studio and we’ll set a time.
            </p>
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default Photography;
