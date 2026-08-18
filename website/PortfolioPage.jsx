import { useEffect } from 'react'
import { About } from './parts/About.jsx'
import { Contact } from './parts/Contact.jsx'
import { Experience } from './parts/Experience.jsx'
import { Footer } from './parts/Footer.jsx'
import { HomeIntro } from './parts/HomeIntro.jsx'
import { Menu } from './parts/Menu.jsx'
import { Projects } from './parts/Projects.jsx'
import { Skills } from './parts/Skills.jsx'

export default function PortfolioPage() {
  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll('.reveal'))

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16 },
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-shell">
      <Menu />
      <main>
        <HomeIntro />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
