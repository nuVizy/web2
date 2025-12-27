import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import ProjectGrid from '../components/ui/ProjectGrid';
import Section from '../components/ui/Section';
import SectionHeaderRow from '../components/ui/SectionHeaderRow';
import SectionHeading from '../components/ui/SectionHeading';
import TextLink from '../components/ui/TextLink';
import { designProjects } from '../content/portfolio';
import { usePageMeta } from '../hooks/usePageMeta';

const Design = () => {
  usePageMeta({
    title: 'Design | nuViz Studio',
    description: 'Brand identity, posters, and album artwork by nuViz Studio.',
    canonicalPath: '/design'
  });

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden">
      {/* HERO (full screen image) */}
      <Section
        bleed
        padClassName="pt-20 pb-12 sm:pt-28 md:pt-36 md:pb-16"
        className="relative overflow-hidden ctx-grid min-h-[100svh] flex flex-col"
      >
        {/* Background image + overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          {/* slight dark overlay */}
          <div className="absolute inset-0 bg-black/45" />
          {/* subtle depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/40" />
        </div>

        {/* On mobile: near top. On desktop: pinned to bottom */}
        <Container size="lg" className="relative w-full mt-0 pt-4 sm:pt-6 md:pt-0 md:mt-auto">
          <div className="grid grid-cols-12 gap-8 md:gap-10 items-start md:items-end">
            <div className="col-span-12 lg:col-span-8 min-w-0">
              <SectionHeading
                kicker="Design"
                title="Identity and artwork with intent"
                description={
                  <>
                    <p>
                      Brand systems, posters, album covers, and social kits that translate across formats. Grid first, with
                      cinematic restraint.
                    </p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                      <Button className="w-full sm:w-auto" to="/contact">
                        Start a brief
                      </Button>
                      <Button className="w-full sm:w-auto" variant="ghost" to="/work">
                        See portfolio
                      </Button>
                    </div>
                  </>
                }
              />
            </div>

            <div className="col-span-12 lg:col-span-4 min-w-0">
              <Card pad="lg" className="w-full">
                <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">Outputs</p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                  <li>• Logo suite + type system</li>
                  <li>• Key art + poster runs</li>
                  <li>• Social templates + rollout packs</li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section size="lg" tone="borderTop" padClassName="py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-2 items-start">
          <div className="min-w-0">
            <h2 className="font-mono text-2xl text-[var(--text)] mb-2">What we deliver</h2>
            <ul className="list-disc list-inside text-sm text-[var(--muted)] space-y-2">
              <li>Identity systems and logo suites.</li>
              <li>Poster runs for tours, festivals, and theatre.</li>
              <li>Album artwork and vinyl packaging.</li>
              <li>Social kits with motion ready assets.</li>
            </ul>
            <p className="text-[var(--muted)] mt-4 text-sm">Need rollout support? We build templates and brand guides for your team.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 min-w-0">
            {[
              { title: 'Brand identity', text: 'Naming support, visual language, and brand manuals for launch ready teams.' },
              { title: 'Posters & key art', text: 'Layered compositions for tours and shows with print production guidance.' },
              { title: 'Social systems', text: 'Reusable templates for reels, carousels, and diaries built for speed.' },
              { title: 'Album visuals', text: 'Cover art, inner sleeves, stickers, and motion snippets aligned to your sonic palette.' }
            ].map((item) => (
              <Card key={item.title} className="min-w-0">
                <h3 className="font-mono text-lg text-[var(--text)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--muted)]">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section size="lg" tone="borderTop" padClassName="py-12 md:py-16">
        <SectionHeaderRow
          title="Case studies"
          action={
            <TextLink className="min-h-[44px]" to="/work">
              View all work
            </TextLink>
          }
        />
        <ProjectGrid projects={designProjects} />
      </Section>

      <Section size="lg" tone="borderTop" padClassName="py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="min-w-0">
            <h2 className="font-mono text-2xl text-[var(--text)] mb-3">Mini case notes</h2>
            <div className="space-y-3 text-sm text-[var(--muted)]">
              <Card pad="sm">
                <p className="font-mono text-[var(--text)]">Pulse Identity</p>
                <p className="mt-1">Monoline logotype, animated stripes, and print specs for metallic inks.</p>
              </Card>
              <Card pad="sm">
                <p className="font-mono text-[var(--text)]">Signal Posters</p>
                <p className="mt-1">Grid driven posters with foil hits and QR linked microsite.</p>
              </Card>
            </div>
          </div>

          <div className="space-y-3 min-w-0">
            <p className="text-[var(--muted)]">
              Need a deck or rollout plan? We can align on deliverables in a 20 minute call and outline a clear schedule.
            </p>
            <Button to="/contact">Request pricing</Button>
            <p className="text-sm text-[var(--muted)]">We can collaborate with in house teams as an extension unit.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Design;
