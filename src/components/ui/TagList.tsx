import Pill from './Pill'

interface Props {
  tags: string[]
}

export default function TagList({ tags }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Pill key={tag}>{tag}</Pill>
      ))}
    </div>
  )
}
