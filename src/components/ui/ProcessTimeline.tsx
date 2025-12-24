interface Step {
  title: string;
  description: string;
}

interface Props {
  steps: Step[];
}

const ProcessTimeline = ({ steps }: Props) => (
  <div className="space-y-6">
    {steps.map((step, index) => (
      <div key={step.title} className="flex gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--accent-green)] text-[var(--bg)] flex items-center justify-center font-semibold">
          {index + 1}
        </div>
        <div className="border-b border-[var(--accent-dim)] pb-4 flex-1">
          <h3 className="font-mono text-xl mb-1 text-[var(--text)]">{step.title}</h3>
          <p className="text-sm text-[var(--muted)]">{step.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default ProcessTimeline;
