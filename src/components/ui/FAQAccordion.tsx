import { useState } from 'react';
import { classNames } from '../../lib/classNames';

interface Item {
  question: string;
  answer: string;
}

interface Props {
  items: Item[];
}

const FAQAccordion = ({ items }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="divide-y divide-[var(--accent-dim)] border border-[var(--accent-dim)] rounded-subtle">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question}>
            <button
              className="w-full text-left px-4 py-3 flex items-start justify-between gap-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-green)]"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
            >
              <span className="font-mono text-[var(--text)] leading-snug">{item.question}</span>
              <span className="text-[var(--muted)]">{open ? '–' : '+'}</span>
            </button>
            <div className={classNames('px-4 pb-4 text-sm text-[var(--muted)] transition-all duration-300', open ? 'block' : 'hidden')}>
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
