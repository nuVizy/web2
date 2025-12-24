import { ReactNode } from 'react';
import { classNames } from '../../lib/classNames';

interface Props {
  title: string;
  action?: ReactNode;
  as?: 'h2' | 'h3';
  className?: string;
  titleClassName?: string;
}

/**
 * Small section header row: consistent title + optional action alignment.
 * Mobile-first: stacks, then aligns side-by-side on larger screens.
 */
const SectionHeaderRow = ({
  title,
  action,
  as: Title = 'h2',
  className,
  titleClassName,
}: Props) => {
  return (
    <div
      className={classNames(
        'flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-6',
        className
      )}
    >
      <Title className={classNames('font-mono text-2xl text-[var(--text)]', titleClassName)}>{title}</Title>
      {action ? <div className="min-h-[44px] inline-flex items-end">{action}</div> : null}
    </div>
  );
};

export default SectionHeaderRow;
