import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'
import logoImage from './ZETAV-LOGO-zv.png'

const navLinks = [
  { name: 'Industries', type: 'route', path: '/industries' },
  { name: 'Services', type: 'route', path: '/services' },
  { name: 'Expertise', type: 'route', path: '/expertise' },
  { name: 'Romicons', type: 'route', path: '/romicons' },
  { name: 'Careers', type: 'route', path: '/careers' },
  { name: 'Contact', type: 'route', path: '/contact' }
]

// Dropdown items for Discover Zeta-V
const discoverItems = [
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Accelerator', path: '/accelerator' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
      }
      if (e.key === 'Escape' && dropdownOpen) {
        setDropdownOpen(false)
      }
      if (e.key === 'Escape' && mobileDropdownOpen) {
        setMobileDropdownOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen, dropdownOpen, mobileDropdownOpen])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.navbar__dropdown') && dropdownOpen) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [dropdownOpen])

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setDropdownOpen(false)
    setMobileDropdownOpen(false)
  }, [location.pathname])

  const handleNavigation = (path) => {
    // First navigate to the path
    navigate(path)
    // Then scroll to top (navigate already triggers the useEffect, but this ensures it)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
    setMenuOpen(false)
    setDropdownOpen(false)
    setMobileDropdownOpen(false)
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setMenuOpen(false)
    setDropdownOpen(false)
    setMobileDropdownOpen(false)
  }

  // Handle Discover Zeta-V click - navigates to Home
  const handleDiscoverClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setMenuOpen(false)
    setDropdownOpen(false)
    setMobileDropdownOpen(false)
  }

  // Toggle desktop dropdown on click (not hover)
  const toggleDropdown = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDropdownOpen(!dropdownOpen)
  }

  // Toggle mobile dropdown on click
  const toggleMobileDropdown = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setMobileDropdownOpen(!mobileDropdownOpen)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    setDropdownOpen(false)
    setMobileDropdownOpen(false)
  }

  // Check if a link is active
  const isLinkActive = (path) => {
    return location.pathname === path
  }

  // Check if Home is active (for Discover Zeta-V main button)
  const isHomeActive = () => {
    return location.pathname === '/'
  }

  // Check if any dropdown item is active
  const isDropdownActive = () => {
    return ['/about', '/gallery', '/accelerator'].includes(location.pathname)
  }

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
          <Link to="/" className="navbar__logo" onClick={handleLogoClick}>
            <img 
              src={logoImage} 
              alt="Zeta-V Logo" 
              className="navbar__logo-mark"
            />
            <div className="navbar__wordmark-wrapper">
              <span className="navbar__wordmark-line">Zeta-V Technology Solutions</span>
            </div>
          </Link>

          <nav className="navbar__links">
            {/* Discover Zeta-V - Click to open dropdown (not hover) */}
            <div 
              className={`navbar__dropdown ${dropdownOpen ? 'open' : ''} ${isHomeActive() || isDropdownActive() ? 'active' : ''}`}
            >
              <div className="navbar__dropdown-trigger-wrapper">
                <button 
                  className="navbar__dropdown-trigger"
                  onClick={handleDiscoverClick}
                >
                  Discover Zeta-V
                </button>
                <button 
                  className="navbar__dropdown-arrow-btn"
                  onClick={toggleDropdown}
                  aria-label="Toggle dropdown"
                >
                  <svg className="navbar__dropdown-arrow" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              <div className="navbar__dropdown-menu">
                {discoverItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`navbar__dropdown-item ${isLinkActive(item.path) ? 'active' : ''}`}
                    onClick={() => handleNavigation(item.path)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Regular Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`navbar__link ${isLinkActive(link.path) ? 'active' : ''}`}
                onClick={() => handleNavigation(link.path)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

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
          {/* Discover Zeta-V - Mobile Dropdown (Click to open/close) */}
          <div className="navbar__mobile-dropdown-item">
            <button 
              className={`navbar__mobile-dropdown-trigger ${mobileDropdownOpen ? 'open' : ''}`}
              onClick={toggleMobileDropdown}
            >
              <span>Discover Zeta-V</span>
              <svg className="navbar__mobile-dropdown-arrow" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className={`navbar__mobile-dropdown-menu ${mobileDropdownOpen ? 'open' : ''}`}>
              <Link
                to="/"
                className={`navbar__mobile-dropdown-link ${isHomeActive() ? 'active' : ''}`}
                onClick={() => handleNavigation('/')}
              >
                Home
              </Link>
              {discoverItems.map((item, idx) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`navbar__mobile-dropdown-link ${isLinkActive(item.path) ? 'active' : ''}`}
                  style={{ animationDelay: `${idx * 80}ms` }}
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Separator line */}
          <div className="navbar__mobile-separator"></div>

          {/* Regular Mobile Links */}
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.path}
              className={`navbar__mobile-link ${isLinkActive(link.path) ? 'active' : ''}`}
              style={{ animationDelay: `${i * 80}ms` }}
              onClick={() => handleNavigation(link.path)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}