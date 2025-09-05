import React from 'react'
import SectionWrapper from './SectionWrapper'
import GlassCard from './GlassCard'
import { SiCplusplus, SiC, SiJavascript, SiHtml5, SiCss3, SiReact, SiFlutter, SiNodedotjs, SiGithub, SiMysql, SiDart, SiWindows } from 'simple-icons-react'

const items = [
  { name: 'C++', Icon: SiCplusplus },
  { name: 'C', Icon: SiC },
  { name: 'SQL', text: 'SQL' },
  { name: 'HTML', Icon: SiHtml5 },
  { name: 'CSS', Icon: SiCss3 },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'Dart', Icon: SiDart },
  { name: 'ReactJS', Icon: SiReact },
  { name: 'Flutter', Icon: SiFlutter },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'GitHub', Icon: SiGithub },
  { name: 'MySQL', Icon: SiMysql },
  { name: 'Windows', Icon: SiWindows },
  { name: 'MS Word', text: 'Word' },
  { name: 'MS PowerPoint', text: 'PowerPoint' },
  { name: 'Touch Typing', text: 'Typing' },
  { name: 'OOPs', text: 'OOP' },
  { name: 'DBMS', text: 'DBMS' },
  { name: 'Computer Networking', text: 'Networking' },
]

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="pt-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="skills-title" className="text-2xl font-semibold">Skills</h2>
        <div className="mt-6 grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))' }}>
          {items.map(({ name, Icon, text }) => (
            <GlassCard key={name} className="group grid place-items-center p-4 text-center transition hover:scale-[1.02]">
              {Icon ? (
                <Icon title={name} className="h-8 w-8" color="#e5e7eb" />
              ) : (
                <span className="text-sm text-white/80" title={name}>{text}</span>
              )}
              <span className="mt-2 text-xs text-white/60" aria-hidden>{name}</span>
            </GlassCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
