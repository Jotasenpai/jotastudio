import { useEffect, useRef } from 'react'

const LINES = [
  { delay: 700,  type: 'cmd',     text: '$ jota init nuevo-proyecto' },
  { delay: 1400, type: 'muted',   text: '  Escuchando la idea...' },
  { delay: 2100, type: 'success', text: '  [ok] Requisitos definidos' },
  { delay: 2900, type: 'muted',   text: '  Diseñando la arquitectura...' },
  { delay: 3700, type: 'success', text: '  [ok] Estructura lista' },
  { delay: 4600, type: 'muted',   text: '  Construyendo frontend + backend...' },
  { delay: 5600, type: 'success', text: '  [ok] Componentes y API conectados' },
  { delay: 6500, type: 'muted',   text: '  Deploy en producción...' },
  { delay: 7500, type: 'url',     text: '  --> tu-proyecto.com  [LIVE]' },
]

export default function Terminal() {
  const lineRefs = useRef([])

  useEffect(() => {
    const timers = LINES.map(({ delay }, i) =>
      setTimeout(() => {
        const el = lineRefs.current[i]
        if (el) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }
      }, delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  const colorMap = {
    cmd:     'text-zinc-50',
    muted:   'text-zinc-500',
    success: 'text-emerald-400',
    url:     'text-cyan-400 font-medium',
  }

  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-emerald-500/6 rounded-3xl blur-3xl pointer-events-none" />

      <div className="relative bg-zinc-900 border border-zinc-800/60 rounded-2xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]">
        {/* Chrome bar */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-zinc-800/60 bg-zinc-900/80">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <span className="ml-auto text-xs text-zinc-600 font-mono tracking-wide">terminal</span>
        </div>

        {/* Lines */}
        <div className="p-5 font-mono text-[13px] leading-relaxed space-y-1.5 min-h-[280px]">
          {LINES.map(({ type, text }, i) => (
            <div
              key={i}
              ref={el => (lineRefs.current[i] = el)}
              className={colorMap[type]}
              style={{
                opacity: 0,
                transform: 'translateY(6px)',
                transition: 'opacity 0.35s ease, transform 0.35s ease',
              }}
            >
              {text}
            </div>
          ))}

          <div className="flex items-center gap-1 pt-2">
            <span className="text-zinc-600 font-mono text-[13px]">$</span>
            <span className="inline-block w-[7px] h-[14px] bg-emerald-400 cursor-blink ml-0.5" />
          </div>
        </div>
      </div>
    </div>
  )
}
