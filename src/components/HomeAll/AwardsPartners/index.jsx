import { useState, useEffect } from 'react'
import './AwardsPartners.css'

// Custom SVG Icons for Partners
const Icons = {
  microsoft: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="9" height="9" fill="#0D47A1" rx="1"/>
      <rect x="13" y="2" width="9" height="9" fill="#1565C0" rx="1"/>
      <rect x="2" y="13" width="9" height="9" fill="#2196F3" rx="1"/>
      <rect x="13" y="13" width="9" height="9" fill="#00B4FF" rx="1"/>
    </svg>
  ),
  aws: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M8 8H16M8 12H16M8 16H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  google: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  partner: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12Z" fill="currentColor" opacity="0.8"/>
      <path d="M5 20V19C5 15.13 8.13 12 12 12C15.87 12 19 15.13 19 19V20" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  salesforce: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M12 6L15 9L12 12M12 6L9 9L12 12M12 6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  sap: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M8 8H16M8 12H16M8 16H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
}

// Partner logos for slider
const partners = [
  { name: 'Microsoft', icon: Icons.microsoft, color: '#0D47A1' },
  { name: 'AWS', icon: Icons.aws, color: '#1565C0' },
  { name: 'Google Cloud', icon: Icons.google, color: '#2196F3' },
  { name: 'Salesforce', icon: Icons.salesforce, color: '#00B4FF' },
  { name: 'SAP', icon: Icons.sap, color: '#0D47A1' },
  { name: 'Oracle', icon: Icons.partner, color: '#1565C0' },
  { name: 'IBM', icon: Icons.partner, color: '#2196F3' },
  { name: 'Adobe', icon: Icons.partner, color: '#00B4FF' },
]

// Custom hook for reveal animations
function useReveal(defaultOffset = 0) {
  const [ref, setRef] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(ref)
        }
      },
      { threshold: 0.1, rootMargin: `${defaultOffset}px 0px 0px 0px` }
    )

    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, defaultOffset])

  return [setRef, isVisible]
}

export default function AwardsPartners() {
  const [headRef, headVisible] = useReveal(0)
  const [partnersRef, partnersVisible] = useReveal(100)
  
  // Triple the partners array for smooth looping
  const allPartners = [...partners, ...partners, ...partners]

  // Generate floating particles
  useEffect(() => {
    const container = document.querySelector('.ap__particles')
    if (!container) return

    container.innerHTML = ''

    for (let i = 0; i < 12; i++) {
      const particle = document.createElement('div')
      particle.classList.add('particle')
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.animationDelay = `${Math.random() * 8}s`
      particle.style.animationDuration = `${10 + Math.random() * 6}s`
      container.appendChild(particle)
    }
  }, [])
  return (
    <section id="awards" className="ap">
       {/* Animated Orbs */}
      <div className="ap__orb ap__orb-1"></div>
      <div className="ap__orb ap__orb-2"></div>
      <div className="ap__orb ap__orb-3"></div>
      <div className="ap__orb ap__orb-4"></div>
      
      {/* Animated Grid Pattern */}
      <div className="ap__grid-pattern"></div>
      
      {/* Animated Shimmer Lines */}
      <div className="ap__shimmer ap__shimmer-1"></div>
      <div className="ap__shimmer ap__shimmer-2"></div>
      <div className="ap__shimmer ap__shimmer-3"></div>
      
      {/* Animated Stars */}
      <div className="ap__stars">
        <div className="ap__star ap__star-1"></div>
        <div className="ap__star ap__star-2"></div>
        <div className="ap__star ap__star-3"></div>
        <div className="ap__star ap__star-4"></div>
        <div className="ap__star ap__star-5"></div>
        <div className="ap__star ap__star-6"></div>
        <div className="ap__star ap__star-7"></div>
        <div className="ap__star ap__star-8"></div>
        <div className="ap__star ap__star-9"></div>
        <div className="ap__star ap__star-10"></div>
        <div className="ap__star ap__star-11"></div>
        <div className="ap__star ap__star-12"></div>
      </div>
      
      <div className="ap__particles"></div>
      <div className="ap__particles"></div>
      <div className="ap__watermark">✦ PARTNERS ✦</div>

      <div className="ap__inner">
        <div ref={headRef} className={`ap__head reveal${headVisible ? ' visible' : ''}`}>
          <span className="section-label">Partners & Ecosystem</span>
          <h2 className="section-title">
            Our <span className="grad-text">Technology Partners</span> & Ecosystem.
          </h2>
          <p className="section-subtitle">
            We collaborate with leading technology innovators and consulting firms to deliver best-in-class digital solutions.
          </p>
        </div>

        {/* Partners Logo Slider */}
        <div ref={partnersRef} className={`ap__partners-slider reveal${partnersVisible ? ' visible' : ''}`}>
          <div className="slider-track">
            {allPartners.map((partner, idx) => {
              const IconComponent = partner.icon
              return (
                <div key={idx} className="partner-slide">
                  <div className="partner-icon-wrapper" style={{ borderColor: `${partner.color}30` }}>
                    <div className="partner-icon" style={{ color: partner.color }}>
                      <IconComponent />
                    </div>
                  </div>
                  <div className="partner-name">{partner.name}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="ap__cta">
          <a href="#contact" className="cta-btn primary">
            Schedule a Consultation →
          </a>
          <a href="#contact" className="cta-btn secondary">
            Contact Our Experts →
          </a>
        </div> */}
      </div>
    </section>
  )
}