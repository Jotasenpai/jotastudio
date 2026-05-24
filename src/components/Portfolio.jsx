import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    id: 1,
    name: 'PureVolley',
    tagline: 'La biblia del voleibol online',
    desc: 'Portal educativo especializado en voleibol con entrenamientos personalizados, guías técnicas, constructor de ejercicios interactivo y sistema de gamificación. Soporte multiidioma en 6 lenguas y presencia global en +220 países.',
    tags: ['Multiidioma', 'PHP', 'SEO'],
    year: '2025',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=1200&h=700&fit=crop&auto=format',
    accent: 'from-blue-900/30 to-zinc-900',
    large: true,
    url: 'https://purevolley.com/es/',
  },
  {
    id: 2,
    name: 'MediFlow',
    tagline: 'Gestión clínica sin papel',
    desc: 'Panel para consultas médicas. Historia clínica digital, citas online y facturación automática.',
    tags: ['React', 'Node.js', 'MongoDB'],
    year: '2024',
    image: 'https://picsum.photos/seed/mediflow456x/800/500',
    accent: 'from-blue-900/25 to-zinc-900',
    large: false,
  },
  {
    id: 3,
    name: 'Bitácora',
    tagline: 'Tu equipo remoto, sincronizado',
    desc: 'Herramienta de planificación para equipos distribuidos. Sprints, dailies y métricas en un solo lugar.',
    tags: ['Vue.js', 'Express', 'Redis'],
    year: '2023',
    image: 'https://picsum.photos/seed/bitacora789x/800/500',
    accent: 'from-violet-900/20 to-zinc-900',
    large: false,
  },
]

function ProjectCard({ project }) {
  const Wrapper = project.url ? 'a' : 'div'
  const wrapperProps = project.url
    ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Wrapper
      {...wrapperProps}
      className="portfolio-card group relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900 hover:border-zinc-700/60 transition-all duration-300 flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video flex-shrink-0">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] opacity-60"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${project.accent} via-transparent`} />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div>
            <p className="text-[11px] text-zinc-600 font-mono mb-1 tracking-wider">{project.year}</p>
            <h3 className="text-base font-bold text-zinc-50 tracking-tight leading-tight">{project.name}</h3>
            <p className="text-sm text-emerald-400/75 font-medium mt-0.5">{project.tagline}</p>
          </div>
          <span className="flex-shrink-0 w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 group-hover:border-emerald-500/40 group-hover:text-emerald-400 transition-all duration-200 mt-0.5">
            <ArrowUpRight size={14} strokeWidth={2} />
          </span>
        </div>
        <p className="text-sm text-zinc-500 leading-relaxed mt-3 mb-4 flex-1">{project.desc}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-[11px] text-zinc-500 font-mono px-2.5 py-1 rounded-full border border-zinc-800 bg-zinc-800/40 tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

export default function Portfolio() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.portfolio-header',
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
        }
      )
      gsap.fromTo(
        '.portfolio-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', stagger: 0.16,
          scrollTrigger: { trigger: '.portfolio-card', start: 'top 82%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const large = PROJECTS.find(p => p.large)
  const small = PROJECTS.filter(p => !p.large)

  return (
    <section id="proyectos" ref={sectionRef} className="section-pad bg-zinc-900/15">
      <div className="container-wide">
        <div className="portfolio-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="label-tag mb-4">Trabajo reciente</p>
            <h2 className="heading-display">
              Proyectos<br />que funcionan.
            </h2>
          </div>
          <p className="text-sm text-zinc-500 max-w-[34ch] md:text-right leading-relaxed pb-1">
            Cada proyecto es una colaboración. Yo pongo el código; tú pones la visión.
          </p>
        </div>

        {/* Asymmetric grid: 2fr | 1fr on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
          {large && <ProjectCard project={large} />}

          <div className="flex flex-col gap-4">
            {small.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
