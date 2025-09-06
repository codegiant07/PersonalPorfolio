import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function Hero() {
  const reduce = useReducedMotion()
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: reduce ? 0 : 0.12 } },
  }
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }
  const downloadResume = (e) => {
    e.preventDefault()
    const content = '%PDF-1.4\n1 0 obj<<>>endobj\n2 0 obj<</Length 44>>stream\nBT /F1 24 Tf 72 712 Td (Rajesh Chouhan Resume) Tj ET\nendstream endobj\n3 0 obj<</Type /Catalog /Pages 4 0 R>>endobj\n4 0 obj<</Type /Pages /Kids [5 0 R] /Count 1>>endobj\n5 0 obj<</Type /Page /Parent 4 0 R /MediaBox [0 0 612 792] /Contents 2 0 R /Resources<</Font<</F1 6 0 R>>>>>>endobj\n6 0 obj<</Type /Font /Subtype /Type1 /BaseFont /Helvetica>>endobj\nxref\n0 7\n0000000000 65535 f \n0000000010 00000 n \n0000000043 00000 n \n0000000250 00000 n \n0000000295 00000 n \n0000000366 00000 n \n0000000588 00000 n \ntrailer<</Size 7 /Root 3 0 R>>\nstartxref\n689\n%%EOF'
    const blob = new Blob([content], { type: 'application/pdf' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'Rajesh_Chouhan_Resume.pdf'
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }
  return (
    <section id="home" className="relative pt-36">
      <motion.div variants={container} initial="hidden" animate="show" className="mx-auto max-w-6xl px-4 text-center">
        <motion.h1 variants={item} className="text-4xl font-bold sm:text-6xl">
          <span className="gradient-text">Rajesh Chouhan</span>
        </motion.h1>
        <motion.p variants={item} className="mx-auto mt-4 max-w-2xl text-white/70 text-lg">
          Full-Stack Developer | Competitive Programmer | Tech Enthusiast
        </motion.p>
        <motion.div variants={item} className="mt-8 flex items-center justify-center gap-3">
          <a href="#contact" className="btn-primary">Hire Me</a>
          <a href="/assets/Rajesh_Chouhan_Resume.pdf" onClick={downloadResume} className="btn-ghost">Download Resume</a>
        </motion.div>
      </motion.div>
    </section>
  )
}
