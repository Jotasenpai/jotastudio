import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-zinc-950 text-zinc-50 overflow-x-hidden">
      {/* Grain texture — fixed, non-interactive, zero GPU impact on scroll */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.022]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Process />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
