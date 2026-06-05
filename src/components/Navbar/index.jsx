// Navbar.jsx
import { useState, useEffect } from 'react'
import './Navbar.css'
import logoImage from './ZETAV-LOGO-zv.png'

const navLinks = [
  { name: 'About', id: 'about' },
  { name: 'Industries', id: 'industries' },
  { name: 'Services', id: 'services' },
  { name: 'Journey', id: 'how-we-work' },
  { name: 'Careers', id: 'careers' },
  { name: 'Contact', id: 'contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 70
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault()
    scrollToSection(sectionId)
    setMenuOpen(false)
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMenuOpen(false)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  return (
    <>
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          {/* Logo */}
          <a href="/" className="navbar__logo" onClick={handleLogoClick}>
            <img 
              src={logoImage} 
              alt="Zeta-V Logo" 
              className="navbar__logo-mark"
            />
            <div className="navbar__wordmark-wrapper">
              <span className="navbar__wordmark-line">Zeta-v Solutions</span>
              <span className="navbar__wordmark-line navbar__wordmark-line-small">Technologies</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="navbar__links">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={`#${link.id}`}
                className="navbar__link"
                onClick={(e) => handleLinkClick(e, link.id)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <button 
            className="navbar__cta btn-grad"
            onClick={() => scrollToSection('contact')}
          >
            Let's Talk
          </button>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <button 
          className="navbar__mobile-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        
        <div className="navbar__mobile-links">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              className="navbar__mobile-link"
              style={{ animationDelay: `${i * 80}ms` }}
              onClick={(e) => handleLinkClick(e, link.id)}
            >
              {link.name}
            </a>
          ))}
          <button 
            className="navbar__mobile-cta btn-grad"
            onClick={() => {
              scrollToSection('contact')
              setMenuOpen(false)
            }}
          >
            Let's Talk
          </button>
        </div>
      </div>
    </>
  )
}