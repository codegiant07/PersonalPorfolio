import React from 'react'

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-6xl px-4 text-center text-white/60">
        © {new Date().getFullYear()} Rajesh Chouhan
      </div>
    </footer>
  )
}
