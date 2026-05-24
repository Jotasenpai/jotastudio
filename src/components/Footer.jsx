export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/40 py-8">
      <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm font-extrabold tracking-tight text-zinc-50 select-none">
          Jota<span className="text-emerald-400">.</span>
        </p>
        <p className="text-xs text-zinc-700 text-center">
          &copy; 2026 JotaStudio.
        </p>
        <p className="text-xs text-zinc-800 font-mono">
          v1.0.0
        </p>
      </div>
    </footer>
  )
}
