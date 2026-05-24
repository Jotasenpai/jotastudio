import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Servicios', href: '#servicios' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-800/40'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-extrabold tracking-tight select-none">
          Jota<span className="text-emerald-400">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center px-5 py-2 text-sm font-semibold bg-emerald-500 text-zinc-950 rounded-full hover:bg-emerald-400 transition-all duration-200 active:scale-[0.97]"
        >
          Hablemos
        </a>

        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden text-zinc-400 hover:text-zinc-50 transition-colors"
          aria-label="Abrir menú"
        >
          {open ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/40 px-6 py-6 flex flex-col gap-5">
          {LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-base text-zinc-300 hover:text-zinc-50 transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="text-center px-5 py-3 text-sm font-semibold bg-emerald-500 text-zinc-950 rounded-full"
          >
            Hablemos
          </a>
        </div>
      )}
    </header>
  )
}
