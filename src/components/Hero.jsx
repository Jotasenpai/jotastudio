import { useEffect, useRef } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import Terminal from './Terminal'

const STATS = [
  { value: '27', label: 'proyectos entregados' },
  { value: '4+',  label: 'años de experiencia' },
  { value: '19',  label: 'clientes activos' },
]

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-item',
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          stagger: 0.11,
          delay: 0.15,
        }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.028]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 -left-20 w-[480px] h-[480px] bg-emerald-500/7 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-0 w-[320px] h-[320px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 container-wide w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-16 xl:gap-24 items-center">

          {/* Left column */}
          <div className="flex flex-col gap-7">
            {/* Status badge */}
            <div className="hero-item inline-flex items-center gap-2.5 w-fit px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs text-zinc-400 font-medium tracking-wide">
                Programador Fullstack · Disponible para proyectos
              </span>
            </div>

            {/* Headline */}
            <div className="hero-item">
              <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-extrabold tracking-tighter leading-[0.9] text-zinc-50">
                Tu idea,<br />
                <span className="text-emerald-400">hecha</span><br />
                código.
              </h1>
            </div>

            {/* Description */}
            <p className="hero-item text-lg text-zinc-400 leading-relaxed max-w-[52ch]">
              Soy programador fullstack. Tomo la idea que tienes en mente
              —aunque solo sea un boceto en una servilleta— y la convierto
              en una web funcional, real y lista para crecer.
            </p>

            {/* CTAs */}
            <div className="hero-item flex flex-wrap items-center gap-4">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-zinc-950 text-sm font-semibold rounded-full hover:bg-emerald-400 transition-all duration-200 active:scale-[0.97]"
              >
                Ver proyectos
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 text-zinc-300 text-sm font-medium rounded-full hover:border-zinc-500 hover:text-zinc-50 transition-all duration-200"
              >
                Cuéntame tu idea
                <ArrowUpRight size={14} strokeWidth={2} />
              </a>
            </div>

            {/* Stats */}
            <div className="hero-item flex gap-10 pt-6 border-t border-zinc-800/50 mt-1">
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-3xl font-extrabold text-zinc-50 tracking-tight">{value}</p>
                  <p className="text-xs text-zinc-500 mt-0.5 leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: terminal — hidden on mobile */}
          <div className="hero-item hidden lg:block">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  )
}
