import React from 'react'
import { useReducedMotion } from 'framer-motion'
import { Particles } from 'tsparticles-react'
import { loadSlim } from 'tsparticles-engine'

export default function ParticlesBg() {
  const reduce = useReducedMotion()
  const init = async (engine) => {
    await loadSlim(engine)
  }
  if (reduce) return null
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-25">
      <Particles init={init} options={{
        background: { color: 'transparent' },
        fpsLimit: 30,
        particles: {
          number: { value: 30 },
          color: { value: ['#6366F1', '#8B5CF6', '#A21CAF'] },
          links: { enable: true, color: '#8B5CF6', opacity: 0.2 },
          move: { enable: true, speed: 0.6 },
          opacity: { value: 0.2 },
          size: { value: { min: 1, max: 2 } },
        },
        detectRetina: true,
      }} />
    </div>
  )
}
