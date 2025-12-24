import Card from './Card'

interface ServiceItem {
  title: string;
  detail: string;
}

interface Props {
  services: ServiceItem[];
}

const ServicesStrip = ({ services }: Props) => (
  <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {services.map((service, index) => (
      <Card key={service.title} pad="sm">
        <div className="text-xs uppercase tracking-wide text-[var(--muted)] mb-2">Service {index + 1}</div>
        <h3 className="font-mono text-lg mb-2 text-[var(--text)]">{service.title}</h3>
        <p className="text-sm text-[var(--muted)]">{service.detail}</p>
      </Card>
    ))}
  </div>
);

export default ServicesStrip;
