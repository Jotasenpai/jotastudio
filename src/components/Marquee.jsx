const TECH = [
  'React', 'Next.js', 'Node.js', 'PostgreSQL', 'TypeScript',
  'Tailwind CSS', 'MongoDB', 'Docker', 'AWS', 'Prisma',
  'Express', 'Redis', 'GraphQL', 'Supabase', 'Vercel',
]

const items = [...TECH, ...TECH]

export default function Marquee() {
  return (
    <div className="border-y border-zinc-800/40 bg-zinc-900/25 overflow-hidden py-3.5">
      <div className="marquee-track flex gap-14 whitespace-nowrap w-max">
        {items.map((tech, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-emerald-500 flex-shrink-0" />
            <span className="text-xs text-zinc-500 font-medium tracking-widest uppercase">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
