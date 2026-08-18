import { useState } from 'react'
import { profile } from '../content/portfolioContent.js'
import { Icon } from './Icon.jsx'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="container nav-bar" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span>MJ</span>
          <strong>{profile.name}</strong>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <Icon name="menu" />
        </button>

        <div className={`nav-links ${isOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
