import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function SectionWrapper({ id, className = '', children }) {
  const reduce = useReducedMotion()
  const variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }
  return (
    <section id={id} className={className} aria-labelledby={`${id}-title`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={variants}
      >
        {children}
      </motion.div>
    </section>
  )
}
