import React from 'react'
import GlassCard from './GlassCard'
import SectionWrapper from './SectionWrapper'

function useTypewriter(text, speed = 20) {
  const [value, setValue] = React.useState('')
  React.useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      setValue((v) => (i < text.length ? text.slice(0, ++i) : v))
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])
  return value
}

export default function About() {
  const text = '"Final-year CS student at LNCT Bhopal. Competitive programmer with 200+ problems solved on LeetCode & GeeksforGeeks. NPTEL Java Silver Medalist. Founder of Algonix. TCS Soft Skills certified, Cisco Networking trained."'
  const typed = useTypewriter(text, 10)
  const onImgError = (e) => {
    e.currentTarget.outerHTML = '<div class="h-40 w-40 rounded-2xl bg-gradient-to-br from-brandStart via-brandMid to-brandEnd" role="img" aria-label="Profile image placeholder"></div>'
  }
  return (
    <SectionWrapper id="about" className="pt-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="about-title" className="text-2xl font-semibold">About</h2>
        <div className="mt-6 grid items-center gap-6 sm:grid-cols-[auto,1fr]">
          <div className="justify-self-center sm:justify-self-start">
            <img src="/assets/profile.jpg" alt="Portrait of Rajesh Chouhan" loading="lazy" decoding="async" className="h-40 w-40 rounded-2xl object-cover shadow-soft ring-1 ring-white/10 hover:scale-[1.02] transition" onError={onImgError} />
          </div>
          <GlassCard className="p-6">
            <p className="leading-7 text-white/80">{typed}</p>
          </GlassCard>
        </div>
      </div>
    </SectionWrapper>
  )
}
