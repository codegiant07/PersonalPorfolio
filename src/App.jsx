import React from 'react'

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="site-title">Rajesh Chouhan</h1>
        <nav className="site-nav">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  )
}

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About</h2>
        <p className="section-text">
          I build performant, accessible web apps with modern tooling. This portfolio demonstrates selected work and capabilities.
        </p>
      </div>
    </section>
  )
}

function Projects() {
  const items = [
    {
      title: 'Responsive UI System',
      desc: 'A modular design system with tokens, components, and dark-mode support.',
    },
    {
      title: 'Data Dashboard',
      desc: 'Interactive dashboard with charts, filters, and real-time updates.',
    },
    {
      title: 'E-commerce Frontend',
      desc: 'Optimized storefront with SSR-ready architecture and a11y-first patterns.',
    },
  ]
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <ul className="projects-grid">
          {items.map((p) => (
            <li key={p.title} className="project-card">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-text">
          Reach out at <a className="link" href="mailto:hello@example.com">hello@example.com</a>.
        </p>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="container">
          <p className="footer-text">© {new Date().getFullYear()} Rajesh Chouhan</p>
        </div>
      </footer>
    </>
  )
}
