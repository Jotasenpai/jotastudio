import { useEffect, useRef } from 'react'
import { Send, Linkedin, Github } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-item',
        { opacity: 0, y: 36 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="contacto" ref={sectionRef} className="section-pad bg-zinc-900/15">
      <div className="container-wide">
        <div className="max-w-4xl">
          <p className="contact-item label-tag mb-6">Empecemos</p>

          <h2 className="contact-item text-[clamp(2.8rem,7vw,5rem)] font-extrabold tracking-tighter text-zinc-50 leading-[0.91] mb-10">
            Tienes una idea.<br />
            Yo tengo el código.
          </h2>

          <p className="contact-item text-lg text-zinc-400 leading-relaxed max-w-[50ch] mb-12">
            Cuéntame de qué va tu proyecto. Sin compromisos, sin formularios largos.
            Un mensaje es suficiente para ver si encajamos.
          </p>

          <div className="contact-item flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <a
              href="mailto:jota.studioweb@gmail.com"
              className="inline-flex items-center gap-3 px-7 py-4 bg-emerald-500 text-zinc-950 text-sm font-semibold rounded-full hover:bg-emerald-400 transition-all duration-200 active:scale-[0.97]"
            >
              <Send size={15} strokeWidth={2.5} />
              Escribir un email
            </a>

            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:border-zinc-600 hover:text-zinc-300 transition-all duration-200"
              >
                <Linkedin size={16} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="w-11 h-11 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:border-zinc-600 hover:text-zinc-300 transition-all duration-200"
              >
                <Github size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="contact-item mt-16 pt-8 border-t border-zinc-800/40">
            <p className="text-xs text-zinc-700 mb-1.5 tracking-wide">Email directo</p>
            <a
              href="mailto:jota.studioweb@gmail.com"
              className="text-sm font-mono text-zinc-600 hover:text-zinc-300 transition-colors duration-200"
            >
              jota.studioweb@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
