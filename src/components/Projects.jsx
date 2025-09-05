import React from 'react'
import SectionWrapper from './SectionWrapper'
import GlassCard from './GlassCard'

const projects = [
  {
    title: 'Nearby EV Charging Suggestion',
    tool: 'HTML, CSS, JavaScript, VS Code',
    desc: 'Designed and developed to help users find the nearest charging booth. Users can also see the status of each booth.',
  },
  {
    title: 'Smart Word Converter',
    tool: 'ReactJS, VS Code, GitHub',
    desc: 'Single-page app that allows users to perform multiple operations on words. Built with ReactJS components.',
  },
  {
    title: 'Roll Dice App (Ongoing)',
    tool: 'Flutter, Dart, VS Code',
    desc: 'Cross-platform dice app with user-friendly UI, multiple dice options, animations, and sound effects.',
  },
]

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="pt-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="projects-title" className="text-2xl font-semibold">Projects</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.title}>
              <GlassCard className="h-full p-5 transition [transform-style:preserve-3d] hover:[transform:rotateX(2deg)_rotateY(-2deg)]">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-1 text-xs text-white/50">{p.tool}</p>
                <p className="mt-3 text-white/80">{p.desc}</p>
              </GlassCard>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}
