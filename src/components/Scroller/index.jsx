// components/ScrollNav.jsx
import { useState, useEffect } from 'react'
import './ScrollNav.css'

const sections = [
  // { id: 'about', name: 'Hero', label: 'Home' },  // Removed - Hero not included
  { id: 'clients', name: 'Clients', label: 'Clients' },
  { id: 'challenges', name: 'Challenges', label: 'Challenges' },
  { id: 'why-zeta', name: 'Why Zeta', label: 'Why Us' },
  { id: 'industries', name: 'Industries', label: 'Industries' },
  { id: 'services', name: 'Services', label: 'Services' },
  { id: 'how-we-work', name: 'How We Work', label: 'Process' },
  { id: 'stories', name: 'Stories', label: 'Stories' },
  { id: 'team-stats', name: 'Team Stats', label: 'Impact' },
  { id: 'awards', name: 'Awards', label: 'Partners' },
  // { id: 'contact', name: 'Contact', label: 'Contact' },  // Removed - Contact not included
]

export default function ScrollNav() {
  const [activeSection, setActiveSection] = useState('clients')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide back to top button
      setShowBackToTop(window.scrollY > 500)

      // Get the clients section position
      const clientsSection = document.getElementById('clients')
      const awardsSection = document.getElementById('awards')
      
      // Show navigation only when between clients and awards sections
      if (clientsSection && awardsSection) {
        const clientsTop = clientsSection.offsetTop - 100
        const awardsBottom = awardsSection.offsetTop + awardsSection.offsetHeight
        
        if (window.scrollY >= clientsTop && window.scrollY <= awardsBottom) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }

      // Find active section
      const scrollPosition = window.scrollY + 150
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(sectionId)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Left Side Navigation Tabs - Only visible between Clients and Awards */}
      {/* <div className={`scroll-nav ${isVisible ? 'visible' : 'hidden'}`}>
        {sections.map((section) => (
          <button
            key={section.id}
            className={`scroll-nav__item ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => scrollToSection(section.id)}
            title={section.name}
          >
            <span className="scroll-nav__label">{section.label}</span>
          </button>
        ))}
      </div> */}

      {/* Back to Top Button */}
      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 4L12 20M12 4L18 10M12 4L6 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </>
  )
}