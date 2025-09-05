import React from 'react'
import { Menu, Github, Linkedin, Mail } from 'lucide-react'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const [active, setActive] = React.useState('home')

  React.useEffect(() => {
    const handler = () => {
      const offsets = links.map((l) => {
        const el = document.getElementById(l.id)
        if (!el) return { id: l.id, top: Infinity }
        const rect = el.getBoundingClientRect()
        return { id: l.id, top: Math.abs(rect.top) }
      })
      offsets.sort((a, b) => a.top - b.top)
      setActive(offsets[0]?.id || 'home')
    }
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const go = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto max-w-6xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 backdrop-blur-xl ring-1 ring-white/10">
          <button onClick={() => go('home')} className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-r from-brandStart via-brandMid to-brandEnd font-bold">RC</span>
            <span className="hidden text-sm text-white/80 sm:block">Rajesh Chouhan</span>
          </button>
          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <button key={l.id} onClick={() => go(l.id)} className={`px-3 py-2 text-sm text-white/80 hover:text-white transition ${active === l.id ? 'nav-active' : ''}`}>{l.label}</button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a className="p-2 rounded-lg hover:bg-white/10" href="mailto:hello@example.com" aria-label="Email"><Mail size={18} /></a>
            <a className="p-2 rounded-lg hover:bg-white/10" href="https://github.com/codegiant07" target="_blank" rel="noopener" aria-label="GitHub"><Github size={18} /></a>
            <a className="p-2 rounded-lg hover:bg-white/10" href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <button className="p-2 rounded-lg hover:bg-white/10 md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Open Menu"><Menu size={18} /></button>
          </div>
        </div>
        {open && (
          <div className="mt-2 grid gap-1 rounded-2xl bg-white/5 p-2 backdrop-blur-xl ring-1 ring-white/10 md:hidden">
            {links.map((l) => (
              <button key={l.id} onClick={() => go(l.id)} className={`w-full rounded-xl px-3 py-2 text-left text-sm text-white/80 hover:bg-white/10 ${active === l.id ? 'nav-active' : ''}`}>{l.label}</button>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
