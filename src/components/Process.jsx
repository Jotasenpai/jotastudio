import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    num: '01',
    title: 'Descubrimiento',
    desc: 'Escucho tu idea a fondo. Entiendo el problema real, el usuario que lo va a usar y qué quieres conseguir con ello.',
  },
  {
    num: '02',
    title: 'Arquitectura',
    desc: 'Diseño la solución técnica y visual antes de escribir una sola línea. Eliges qué construimos juntos.',
  },
  {
    num: '03',
    title: 'Construcción',
    desc: 'Frontend, backend y base de datos bajo el mismo techo, con actualizaciones frecuentes para que veas el avance.',
  },
  {
    num: '04',
    title: 'Lanzamiento',
    desc: 'Deploy, pruebas exhaustivas y soporte post-lanzamiento. No desaparezco una vez que la web está live.',
  },
]

export default function Process() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.process-title',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
        }
      )
      gsap.fromTo(
        '.process-step',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.13,
          scrollTrigger: { trigger: '.process-step', start: 'top 80%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="proceso" ref={sectionRef} className="section-pad">
      <div className="container-wide">
        <div className="process-title mb-20">
          <p className="label-tag mb-4">Como trabajamos juntos</p>
          <h2 className="heading-display">
            De la idea<br />a la realidad.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`process-step py-8 pr-8
                ${i !== 0 ? 'sm:border-l border-zinc-800/50 sm:pl-8' : ''}
                ${i < STEPS.length - 1 ? 'border-b sm:border-b-0 border-zinc-800/30' : ''}
              `}
            >
              <p className="text-[3.5rem] font-extrabold text-zinc-800/70 tracking-tighter leading-none mb-6 select-none">
                {step.num}
              </p>
              <h3 className="text-base font-bold text-zinc-100 tracking-tight mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
