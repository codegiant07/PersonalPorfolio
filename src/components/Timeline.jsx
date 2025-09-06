import React from 'react'
import SectionWrapper from './SectionWrapper'
import GlassCard from './GlassCard'

const experience = [
  {
    title: 'Computer Programming Tutor',
    org: 'Dept. of CSE, GGCT Jabalpur',
    date: 'Oct 2022',
    desc: 'Carried out programming sessions and guided students.',
  },
]

const achievements = [
  'Solved 200+ problems on LeetCode & GeeksforGeeks.',
  'NPTEL Java Silver Medalist.',
  'Guided 300+ coders through workshops.',
  'AWS Certified (placeholder).',
  'Central sector scholarship for top 10% students in CSE batch.',
  'Scored 75% in IIT-JEE Mains 2020.',
  '5★ in C++ at HackerRank, 2★ in MySQL.',
  'Secured 3rd Rank at District level in 10th Class Board Exam.',
]

export default function Timeline() {
  return (
    <SectionWrapper id="experience" className="pt-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="experience-title" className="text-2xl font-semibold">Experience & Achievements</h2>
        <div className="relative mt-8 grid gap-8 lg:grid-cols-[1fr,1fr]">
          <div>
            <h3 className="text-lg font-medium">Experience</h3>
            <div className="relative mt-4">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-brandStart via-brandMid to-brandEnd"></div>
              <ul className="space-y-6">
                {experience.map((e, i) => (
                  <li key={i} className="relative pl-8">
                    <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-gradient-to-r from-brandStart via-brandMid to-brandEnd"></div>
                    <GlassCard className="p-4">
                      <p className="text-sm text-white/60">{e.date}</p>
                      <p className="font-medium">{e.title}</p>
                      <p className="text-white/80">{e.org}</p>
                      <p className="mt-2 text-white/80">{e.desc}</p>
                    </GlassCard>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Achievements</h3>
            <ul className="mt-4 space-y-3">
              {achievements.map((a, i) => (
                <li key={i}>
                  <GlassCard className="p-4">{a}</GlassCard>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
