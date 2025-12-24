interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface Props {
  testimonials: Testimonial[];
}

const TestimonialBlock = ({ testimonials }: Props) => (
  <div className="grid gap-6 md:grid-cols-3">
    {testimonials.map(item => (
      <div key={item.name} className="panel rounded-subtle p-6">
        <p className="font-mono text-lg leading-relaxed mb-4 text-[var(--text)]">“{item.quote}”</p>
        <div className="text-sm font-semibold text-[var(--text)]">{item.name}</div>
        <div className="text-xs uppercase tracking-wide text-[var(--muted)]">{item.role}</div>
      </div>
    ))}
  </div>
);

export default TestimonialBlock;
