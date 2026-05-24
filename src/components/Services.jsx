import { useEffect, useRef } from 'react'
import { Globe, ShoppingCart, LayoutDashboard, Cpu } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  {
    Icon: Globe,
    title: 'Aplicaciones Web',
    desc: 'Webs a medida con React, Next.js o Vue. Desde landing pages de impacto hasta plataformas complejas con autenticación, roles y paneles de control.',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    Icon: ShoppingCart,
    title: 'E-commerce',
    desc: 'Tiendas online con pasarelas de pago, gestión de inventario en tiempo real y una experiencia de compra que convierte visitantes en clientes.',
    tags: ['Stripe', 'Shopify', 'WooCommerce'],
  },
  {
    Icon: LayoutDashboard,
    title: 'Dashboards & SaaS',
    desc: 'Paneles de control con datos en tiempo real, gráficas interactivas y flujos de usuario avanzados. Construidos para escalar.',
    tags: ['React', 'PostgreSQL', 'Redis'],
  },
  {
    Icon: Cpu,
    title: 'APIs & Backend',
    desc: 'Arquitecturas escalables con Node.js, bases de datos relacionales o NoSQL, autenticación segura y documentación clara.',
    tags: ['Node.js', 'PostgreSQL', 'Docker'],
  },
]

export default function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.services-left',
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )
      gsap.fromTo(
        '.service-row',
        { opacity: 0, x: 30 },
        {
          opacity: 1, x: 0, duration: 0.65, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: '.service-row', start: 'top 82%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="servicios" ref={sectionRef} className="section-pad">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.65fr] gap-16 xl:gap-24 items-start">

          {/* Left: sticky title */}
          <div className="services-left lg:sticky lg:top-24">
            <p className="label-tag mb-4">Qué construyo</p>
            <h2 className="heading-display mb-6">
              Lo que<br />necesitas,<br />lo que<br />construyo.
            </h2>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-[34ch]">
              No vendo paquetes genéricos. Cada proyecto parte desde cero,
              diseñado para lo que tu negocio necesita ahora y puede necesitar mañana.
            </p>
          </div>

          {/* Right: service rows */}
          <div className="flex flex-col divide-y divide-zinc-800/40">
            {SERVICES.map(({ Icon, title, desc, tags }) => (
              <div
                key={title}
                className="service-row group flex gap-5 py-8 first:pt-0 last:pb-0 cursor-default"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl border border-zinc-800 bg-zinc-900/60 flex items-center justify-center group-hover:border-emerald-500/30 transition-colors duration-200 mt-0.5">
                  <Icon size={17} className="text-emerald-400" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-zinc-100 tracking-tight mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-3">
                    {desc}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {tags.map(tag => (
                      <span key={tag} className="text-xs text-zinc-600 font-mono tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
