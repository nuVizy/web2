import React, { useState, KeyboardEvent } from 'react'

interface TabItem {
  id: string
  title: string
  content: React.ReactNode
}

interface TabsProps {
  items: TabItem[]
  defaultIndex?: number
}

const Tabs = ({ items, defaultIndex = 0 }: TabsProps) => {
  const [active, setActive] = useState(defaultIndex)

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowRight') setActive(i => Math.min(i + 1, items.length - 1))
    if (e.key === 'ArrowLeft') setActive(i => Math.max(i - 1, 0))
  }

  return (
    <div>
      <div role="tablist" aria-label="Tabs" className="flex gap-3 mb-4">
        {items.map((it, i) => (
          <button
            key={it.id}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            onKeyDown={onKey}
            className={`px-3 py-2 text-sm font-mono ${active === i ? 'text-[var(--accent-green)] border-b-2 border-[var(--accent-green)]' : 'text-[var(--muted)]'}`}
          >
            {it.title}
          </button>
        ))}
      </div>
      <div>
        {items.map((it, i) => (
          <div key={it.id} role="tabpanel" hidden={active !== i} className="text-[var(--muted)]">
            {it.content}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tabs
