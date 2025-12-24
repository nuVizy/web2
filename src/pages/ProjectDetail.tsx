import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../components/ui/Card';
import Container from '../components/ui/Container';
import Lightbox from '../components/ui/Lightbox';
import Pill from '../components/ui/Pill';
import Section from '../components/ui/Section';
import TagList from '../components/ui/TagList';
import { allProjects } from '../content/portfolio';
import { usePageMeta } from '../hooks/usePageMeta';
import Button from '../components/ui/Button';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = useMemo(() => allProjects.find(item => item.slug === slug), [slug]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  usePageMeta({
    title: project ? `${project.title} | nuViz Work` : 'Project | nuViz',
    description: project ? project.description : 'nuViz project detail.'
  });

  if (!project) {
    return (
      <Section size="lg" padClassName="pt-28 pb-12 md:pt-32 md:pb-16" className="ctx-grid">
        <h1 className="font-mono text-3xl text-[var(--text)]">Project not found</h1>
        <p className="text-[var(--muted)] mt-2">This project has moved. Explore our work index instead.</p>
        <div className="mt-6">
          <Button to="/work">Back to work</Button>
        </div>
      </Section>
    );
  }

  const currentIndex = allProjects.findIndex(p => p.slug === project.slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div>
      <Section size="lg" padClassName="pt-28 pb-10 md:pt-32 md:pb-12" className="ctx-grid">
        <header className="max-w-4xl space-y-4">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">{project.category}</p>
          <h1 className="font-mono text-4xl md:text-5xl text-[var(--text)] leading-tight">{project.title}</h1>
          <p className="text-[var(--muted)] max-w-3xl">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            <Pill>Year: {project.year}</Pill>
            <Pill>Role: {project.role}</Pill>
            {project.location ? <Pill>Location: {project.location}</Pill> : null}
          </div>

          <TagList tags={project.tags} />

          <Card pad="lg">
            <p className="font-mono text-sm text-[var(--text)] mb-3">Credits</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-[var(--muted)]">
              {project.credits.map((credit) => (
                <li key={credit}>{credit}</li>
              ))}
            </ul>
          </Card>
        </header>
      </Section>

      <Container size="md">
        <div className="aspect-video rounded-subtle overflow-hidden border border-[var(--accent-dim)] mb-6">
          <img src={project.coverImage.src} alt={project.coverImage.alt} className="w-full h-full object-cover" />
        </div>
      </Container>

      <Section size="lg" tone="borderTop" padClassName="py-12 md:py-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {project.galleryImages.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setLightboxIndex(index)}
              className="relative group overflow-hidden rounded-subtle border border-[var(--accent-dim)]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </Section>

      <Section size="lg" tone="borderTop" padClassName="py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-mono text-2xl text-[var(--text)]">Next project</h2>
            <p className="text-[var(--muted)] mt-2">Up next in the sequence.</p>
          </div>
          <Button onClick={() => navigate(`/work/${nextProject.slug}`)}>Open {nextProject.title}</Button>
        </div>
      </Section>

      {lightboxIndex !== null && (
        <Lightbox images={project.galleryImages} activeIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </div>
  );
};

export default ProjectDetail;
