import React from 'react'
import SectionWrapper from './SectionWrapper'
import GlassCard from './GlassCard'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  const [loading, setLoading] = React.useState(false)
  const [toast, setToast] = React.useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    if (!data.name || !data.email || !data.message) {
      setToast('Please fill in all fields.')
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setToast('Thanks! Your message has been queued. (Demo)')
      form.reset()
      console.log('Contact form submitted', data)
    }, 800)
  }

  return (
    <SectionWrapper id="contact" className="pt-24 pb-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="contact-title" className="text-2xl font-semibold">Contact</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <GlassCard as="form" onSubmit={onSubmit} className="p-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-white/70">Name</label>
              <input id="name" name="name" className="mt-1 w-full rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-brandMid" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-white/70">Email</label>
              <input id="email" name="email" type="email" className="mt-1 w-full rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-brandMid" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-white/70">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 w-full rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-brandMid" />
            </div>
            <div className="flex items-center gap-3">
              <button disabled={loading} className="btn-primary disabled:opacity-50">{loading ? 'Sending…' : 'Send Message'}</button>
            </div>
          </GlassCard>
          <div className="space-y-4">
            <GlassCard className="p-6">
              <p className="text-white/80">Reach out directly:</p>
              <div className="mt-4 flex items-center gap-3">
                <a className="btn-ghost" href="mailto:hello@example.com"><Mail className="mr-2" size={16}/> Email</a>
                <a className="btn-ghost" href="https://github.com/codegiant07" target="_blank" rel="noopener"><Github className="mr-2" size={16}/> GitHub</a>
                <a className="btn-ghost" href="https://linkedin.com" target="_blank" rel="noopener"><Linkedin className="mr-2" size={16}/> LinkedIn</a>
              </div>
            </GlassCard>
          </div>
        </div>
        {toast && (
          <div role="status" aria-live="polite" className="fixed inset-x-0 bottom-6 mx-auto w-fit rounded-xl bg-white/10 px-4 py-2 backdrop-blur-xl ring-1 ring-white/20">{toast}</div>
        )}
      </div>
    </SectionWrapper>
  )
}
