

import { useEffect, useState } from 'react'
import { useReveal } from '../../hooks/useReveal'
import './WhyZetaV.css'

// Custom SVG Icons for Value Propositions
const Icons = {
  orchestration: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
    </svg>
  ),
  cloud: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 16C3.8 16 2 14.2 2 12C2 9.8 3.8 8 6 8C6.1 8 6.2 8 6.3 8C6.8 5.7 8.9 4 11.3 4C14.2 4 16.6 6.3 16.8 9.2C18.1 9.6 19.1 10.7 19.4 12.1C20.3 12.6 21 13.5 21 14.5C21 16.4 19.4 18 17.5 18H6Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M12 10V14M10 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  framework: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M8 7H16M8 12H16M8 17H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17 15L19 17L17 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  talent: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 20V19C5 15 8 13 12 13C16 13 19 15 19 19V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 6L18 8L22 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="18" cy="8" r="1.5" fill="currentColor"/>
    </svg>
  ),
  data: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 8H21" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 3V21" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14 3V8M18 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="14" r="2" fill="currentColor"/>
      <path d="M16 17L19 20M16 11L19 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  security: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L4 7V12C4 16.5 7 20 12 22C17 20 20 16.5 20 12V7L12 3Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 5L16 9" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  agile: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 3L3 13L11 21L21 11L13 3Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M12 12L15 9M12 12L9 15M12 12L15 15M12 12L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="1" fill="currentColor"/>
    </svg>
  ),
  sparkle: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor" opacity="0.3"/>
    </svg>
  )
}

const valuePropositions = [
  {
    icon: Icons.orchestration,
    title: 'Technology Value Orchestration',
    body: 'We integrate emerging technologies such as Generative AI, machine learning, IoT, DevOps, and data engineering to build intelligent digital ecosystems.',
    gradient: 'gradient-1'
  },
  {
    icon: Icons.cloud,
    title: 'Cloud & Digital Transformation Expertise',
    body: 'We guide organizations through cloud migration, application modernization, and enterprise architecture transformation.',
    gradient: 'gradient-2'
  },
  {
    icon: Icons.framework,
    title: 'Proven Value Multiplier Framework',
    body: 'Our proprietary frameworks help organizations move faster from strategy to implementation.',
    gradient: 'gradient-3'
  },
  {
    icon: Icons.talent,
    title: 'Global Talent Ecosystem',
    body: 'Through our IT staff augmentation model, we help organizations access specialized technology talent quickly.',
    gradient: 'gradient-1'
  },
  {
    icon: Icons.data,
    title: 'Data-Driven Decision Intelligence',
    body: 'Our teams deliver data analytics services and business intelligence platforms that help organizations convert raw data into strategic insights.',
    gradient: 'gradient-2'
  },
  {
    icon: Icons.security,
    title: 'Secure & Scalable Systems',
    body: 'We implement robust cybersecurity services and DevOps services to ensure high-performance, secure digital infrastructure.',
    gradient: 'gradient-3'
  },
  {
    icon: Icons.agile,
    title: 'Agile Execution Model',
    body: 'Rapid deployment, flexible engagement models, and global delivery capabilities.',
    gradient: 'gradient-1'
  }
]

export default function WhyZetaV() {
  const [headRef, headVisible] = useReveal(0)
  const [zoomSize, setZoomSize] = useState(100)
  const [imageOpacity, setImageOpacity] = useState(1)
  const [blurAmount, setBlurAmount] = useState(0)

  // Parallax zoom effect on scroll - covers both Why and Industries sections
  useEffect(() => {
    const handleScroll = () => {
      const whySection = document.querySelector('.why')
      const industriesSection = document.querySelector('.industries')
      if (!whySection || !industriesSection) return
      
      const whyTop = whySection.offsetTop
      const industriesBottom = industriesSection.offsetTop + industriesSection.offsetHeight
      const totalHeight = industriesBottom - whyTop
      const scrollTop = window.scrollY
      
      let progress = 0
      if (scrollTop > whyTop) {
        progress = (scrollTop - whyTop) / totalHeight
      }
      progress = Math.min(Math.max(progress, 0), 0.8)
      
      // Zoom effect: 100% to 160%
      const newZoom = 100 + (progress * 60)
      setZoomSize(newZoom)
      
      // Fade effect: 1 to 0.3
      setImageOpacity(1 - (progress * 0.7))
      
      // Blur effect: 0 to 6px
      setBlurAmount(progress * 6)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="why-zeta" className="why">
      {/* Parallax Feature Background */}
      <div className="why__feature">
        <div 
          className="why__feature-image" 
          style={{ 
            backgroundSize: `${zoomSize}%`,
            opacity: imageOpacity,
            filter: `blur(${blurAmount}px)`
          }}
        />
        <div className="why__feature-overlay"></div>
      </div>

      {/* Sparkle background */}
      <div className="why__sparkles">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="sparkle" style={{ 
            top: `${Math.random() * 100}%`, 
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}>
            <Icons.sparkle />
          </div>
        ))}
      </div>

      {/* <div className="why__watermark">ZV</div> */}

      <div className="why__inner">
        <div ref={headRef} className={`why__head reveal${headVisible ? ' visible' : ''}`}>
          <span className="section-label">
            <span className="label-dot"></span>
            Why Choose Us
            <span className="label-line"></span>
          </span>
          <h2 className="section-title">
            Why Businesses Choose <span className="grad-text">Zeta-V</span>?
          </h2>
          <p className="section-wsubtitle">
            Delivering measurable outcomes through technology, orchestration, and value-driven execution.
          </p>
          <p className="section-wsubtitle-secondary">
            We integrate Machine Learning Solutions and Gen AI Solutions to help organizations bridge the gap between idea generation and value realization. Our Data Analytics Services ensure that your data drives faster and provides smarter decision-making.
          </p>
          <div className="title-underline"></div>
        </div>

        <div className="why__blocks">
          {valuePropositions.map((item, i) => {
            const [ref, visible] = useReveal(i * 100)
            const IconComponent = item.icon
            return (
              <div
                key={i}
                ref={ref}
                className={`why__block reveal${visible ? ' visible' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="why__icon-wrap">
                  <div className={`why__icon ${item.gradient}`}>
                    <IconComponent />
                  </div>
                  <div className="icon-pulse"></div>
                </div>
                
                <h3 className="why__block-title">{item.title}</h3>
                <p className="why__block-body">{item.body}</p>
                
                <div className="why__underline" />
              </div>
            )
          })}
        </div>
      </div>

      <div className="why__rule">
        <div className="rule-progress"></div>
      </div>
    </section>
  )
}