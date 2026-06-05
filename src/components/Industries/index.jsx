// import { useState, useEffect } from 'react'
// import { useReveal } from '../../hooks/useReveal'
// import './Industries.css'

// // Custom SVG Icons
// const IndustryIcons = {
//   financial: () => (
//     <svg viewBox="0 0 24 24" fill="none">
//       <path d="M3 6H21V8H3V6ZM4 9H6V17H4V9ZM9 9H11V17H9V9ZM14 9H16V17H14V9ZM19 9H21V17H19V9Z" fill="currentColor"/>
//       <path d="M2 19H22V21H2V19Z" fill="currentColor"/>
//       <rect x="6" y="3" width="12" height="2" fill="currentColor"/>
//       <path d="M12 11L8 14H16L12 11Z" fill="currentColor" opacity="0.7"/>
//     </svg>
//   ),
//   manufacturing: () => (
//     <svg viewBox="0 0 24 24" fill="none">
//       <path d="M20 9L12 3L4 9V19H20V9Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
//       <path d="M12 7V13M12 13L9 10.5M12 13L15 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//       <path d="M8 15H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//       <path d="M6 19H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//       <circle cx="12" cy="16" r="1" fill="currentColor"/>
//     </svg>
//   ),
//   healthcare: () => (
//     <svg viewBox="0 0 24 24" fill="none">
//       <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//       <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
//       <path d="M7 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//       <path d="M12 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//     </svg>
//   ),
//   government: () => (
//     <svg viewBox="0 0 24 24" fill="none">
//       <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
//       <path d="M4 10V16L12 21L20 16V10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
//       <path d="M12 12V21" stroke="currentColor" strokeWidth="1.5"/>
//       <circle cx="12" cy="15.5" r="1" fill="currentColor"/>
//     </svg>
//   ),
//   arrowRight: () => (
//     <svg viewBox="0 0 24 24" fill="none">
//       <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   ),
//   check: () => (
//     <svg viewBox="0 0 24 24" fill="none">
//       <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   ),
//   play: () => (
//     <svg viewBox="0 0 24 24" fill="none">
//       <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
//       <path d="M10 8L16 12L10 16V8Z" fill="currentColor"/>
//     </svg>
//   ),
//   pause: () => (
//     <svg viewBox="0 0 24 24" fill="none">
//       <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
//       <rect x="9" y="8" width="2" height="8" fill="currentColor"/>
//       <rect x="13" y="8" width="2" height="8" fill="currentColor"/>
//     </svg>
//   )
// }

// const industries = [
//   {
//     icon: IndustryIcons.financial,
//     title: 'Financial Services',
//     desc: 'Driving fintech innovation through secure cloud migration, advanced data analytics, AI-powered fraud detection, and cybersecurity consulting.',
//     color: '#0D47A1',
//     tag: 'Fintech & Banking',
//     gradient: 'linear-gradient(135deg, #0D47A1, #1565C0)'
//   },
//   {
//     icon: IndustryIcons.manufacturing,
//     title: 'Manufacturing',
//     desc: 'Enabling smart factories with IoT, machine learning, DevOps pipelines, cloud migration, and robotic process automation.',
//     color: '#7C3AED',
//     tag: 'Smart Factory',
//     gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)'
//   },
//   {
//     icon: IndustryIcons.healthcare,
//     title: 'Healthcare',
//     desc: 'Accelerating digital transformation in patient care through telemedicine platforms, secure patient data systems, and AI-driven healthcare analytics.',
//     color: '#DB2777',
//     tag: 'Digital Health',
//     gradient: 'linear-gradient(135deg, #DB2777, #EC4899)'
//   },
//   {
//     icon: IndustryIcons.government,
//     title: 'Government',
//     desc: 'Modernizing public services with scalable digital integration, secure cloud infrastructure, citizen-centric platforms, and cybersecurity services.',
//     color: '#EA580C',
//     tag: 'Public Sector',
//     gradient: 'linear-gradient(135deg, #EA580C, #F97316)'
//   },
// ]

// export default function IndustriesSection() {
//   const [active, setActive] = useState(0)
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true)
//   const [headRef, headVisible] = useReveal(0)

//   // Auto-rotate every 4 seconds
//   useEffect(() => {
//     if (!isAutoPlaying) return
    
//     const interval = setInterval(() => {
//       setActive((prev) => (prev + 1) % industries.length)
//     }, 4000)
    
//     return () => clearInterval(interval)
//   }, [isAutoPlaying])

//   const handleManualChange = (index) => {
//     setActive(index)
//     setIsAutoPlaying(false)
//     // Resume auto-play after 8 seconds of inactivity
//     setTimeout(() => setIsAutoPlaying(true), 8000)
//   }

//   return (
//     <section id="industries" className="industries">
//       <div className="industries__bg">
//         <div className="bg-grid"></div>
//         <div className="bg-gradient-1"></div>
//         <div className="bg-gradient-2"></div>
//       </div>

//       <div className="industries__inner">
//         <div ref={headRef} className={`industries__head reveal${headVisible ? ' visible' : ''}`}>
//           <span className="section-label">Industries We Serve</span>
          
//           <h2 className="section-title">
//             Technology Solutions Tailored for <span className="gradient-highlight">Every Industry</span>
//           </h2>
//           <p className="section-subtitle">
//             We help organizations modernize operations, enhance customer experiences, and build resilient digital infrastructure across various industries.
//           </p>
//         </div>

//         <div className="industries__layout">
//           {/* Left sticky panel */}
//           <div className="industries__panel">
//             <div className="industries__panel-icon">
//               <IndustryIcons.check />
//             </div>
//             <p className="industries__panel-desc">
//               Our consultants bring deep domain expertise to every engagement — delivering solutions that drive real business outcomes across industries.
//             </p>
            
//             {/* Auto-play controller */}
//             <div className="auto-play-control">
//               <button 
//                 className={`auto-play-btn ${isAutoPlaying ? 'playing' : ''}`}
//                 onClick={() => setIsAutoPlaying(!isAutoPlaying)}
//               >
//                 {isAutoPlaying ? <IndustryIcons.pause /> : <IndustryIcons.play />}
//                 <span>{isAutoPlaying ? 'Auto-rotate ON' : 'Auto-rotate OFF'}</span>
//               </button>
//             </div>

//             <div className="industries__list">
//               {industries.map((ind, i) => {
//                 const IconComponent = ind.icon
//                 return (
//                   <button
//                     key={i}
//                     className={`industries__list-item ${active === i ? 'active' : ''}`}
//                     onClick={() => handleManualChange(i)}
//                     style={active === i ? { borderLeftColor: ind.color } : {}}
//                   >
//                     <span className="industries__list-icon" style={{ color: ind.color }}>
//                       <IconComponent />
//                     </span>
//                     <span className="industries__list-text">{ind.title}</span>
//                     {active === i && <span className="active-dot" style={{ background: ind.color }}></span>}
//                   </button>
//                 )
//               })}
//             </div>

//             {/* Progress bar for auto-rotate */}
//             {isAutoPlaying && (
//               <div className="auto-progress">
//                 <div className="progress-bar" key={active}>
//                   <div className="progress-fill"></div>
//                 </div>
//               </div>
//             )}

//             <div className="industries__stats">
//               <div className="stat">
//                 <span className="stat-number">100+</span>
//                 <span className="stat-label">Industry Projects</span>
//               </div>
//               <div className="stat">
//                 <span className="stat-number">12+</span>
//                 <span className="stat-label">Industries Served</span>
//               </div>
//               <div className="stat">
//                 <span className="stat-number">90%+</span>
//                 <span className="stat-label">Client Retention</span>
//               </div>
//             </div>
//           </div>

//           {/* Right card grid - 4 cards visible */}
//           <div className="industries__grid">
//             {industries.map((ind, i) => {
//               const [ref, visible] = useReveal(i * 150)
//               const IconComponent = ind.icon
//               const isActive = active === i
              
//               return (
//                 <div
//                   key={i}
//                   ref={ref}
//                   className={`industries__card reveal${visible ? ' visible' : ''} ${isActive ? 'active' : ''}`}
//                   onClick={() => handleManualChange(i)}
//                   style={{ 
//                     transitionDelay: `${i * 100}ms`,
//                     cursor: 'pointer'
//                   }}
//                 >
//                   {/* Active glow effect */}
//                   {isActive && <div className="active-glow" style={{ background: ind.color }}></div>}
                  
//                   {/* Animated border for active card */}
//                   {isActive && <div className="active-border" style={{ borderColor: ind.color }}></div>}
                  
//                   <div className="card-inner">
//                     <div className="industries__card-header">
//                       <div className="industries__icon-wrapper" style={{ background: `${ind.color}15`, color: ind.color }}>
//                         <div className="industries__icon">
//                           <IconComponent />
//                         </div>
//                       </div>
//                       <div className="industries__card-badge">
//                         <span className="badge-number">0{i + 1}</span>
//                       </div>
//                     </div>
                    
//                     <div className="card-tag" style={{ background: `${ind.color}10`, color: ind.color }}>
//                       {ind.tag}
//                     </div>
                    
//                     <h3 className="industries__card-title">{ind.title}</h3>
//                     <p className="industries__card-desc">{ind.desc}</p>
                    
//                     <div className="industries__card-footer">
//                       <a href="#industries" className="industries__card-link" style={{ color: ind.color }}>
//                         <span>Learn more</span>
//                         <span className="link-icon">
//                           <IndustryIcons.arrowRight />
//                         </span>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>

//         {/* CTA below industries */}
//         <div className="industries__cta-wrapper">
//           <a href="#contact" className="industries__cta-btn">
//             Explore Industry Solutions →
//           </a>
//         </div>

//         {/* Slider indicators */}
//         <div className="slider-indicators">
//           {industries.map((_, i) => (
//             <button
//               key={i}
//               className={`slider-dot ${active === i ? 'active' : ''}`}
//               onClick={() => handleManualChange(i)}
//               style={active === i ? { background: industries[i].color } : {}}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }



import { useState, useEffect, useRef } from 'react'
import { useReveal } from '../../hooks/useReveal'
import './Industries.css'

// Custom SVG Icons
const IndustryIcons = {
  financial: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M3 6H21V8H3V6ZM4 9H6V17H4V9ZM9 9H11V17H9V9ZM14 9H16V17H14V9ZM19 9H21V17H19V9Z" fill="currentColor"/>
      <path d="M2 19H22V21H2V19Z" fill="currentColor"/>
      <rect x="6" y="3" width="12" height="2" fill="currentColor"/>
      <path d="M12 11L8 14H16L12 11Z" fill="currentColor" opacity="0.7"/>
    </svg>
  ),
  manufacturing: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M20 9L12 3L4 9V19H20V9Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M12 7V13M12 13L9 10.5M12 13L15 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 15H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 19H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="16" r="1" fill="currentColor"/>
    </svg>
  ),
  healthcare: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M7 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  government: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M4 10V16L12 21L20 16V10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M12 12V21" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="15.5" r="1" fill="currentColor"/>
    </svg>
  ),
  arrowRight: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  arrowLeft: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  check: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const industries = [
  {
    icon: IndustryIcons.financial,
    title: 'Financial Services',
    desc: 'Driving fintech innovation through secure cloud migration, advanced data analytics, AI-powered fraud detection, and cybersecurity consulting.',
    color: '#0D47A1',
    tag: 'Fintech & Banking',
    gradient: 'linear-gradient(135deg, #0D47A1, #1565C0)'
  },
  {
    icon: IndustryIcons.manufacturing,
    title: 'Manufacturing',
    desc: 'Enabling smart factories with IoT, machine learning, DevOps pipelines, cloud migration, and robotic process automation.',
    color: '#7C3AED',
    tag: 'Smart Factory',
    gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)'
  },
  {
    icon: IndustryIcons.healthcare,
    title: 'Healthcare',
    desc: 'Accelerating digital transformation in patient care through telemedicine platforms, secure patient data systems, and AI-driven healthcare analytics.',
    color: '#DB2777',
    tag: 'Digital Health',
    gradient: 'linear-gradient(135deg, #DB2777, #EC4899)'
  },
  {
    icon: IndustryIcons.government,
    title: 'Government',
    desc: 'Modernizing public services with scalable digital integration, secure cloud infrastructure, citizen-centric platforms, and cybersecurity services.',
    color: '#EA580C',
    tag: 'Public Sector',
    gradient: 'linear-gradient(135deg, #EA580C, #F97316)'
  },
]

export default function IndustriesSection() {
  const [headRef, headVisible] = useReveal(0)
  const [currentIndex, setCurrentIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayTimerRef = useRef(null)

  // Create extended array for infinite scroll
  const extendedItems = [...industries, ...industries, ...industries]
  const totalItems = industries.length
  const startIndex = currentIndex - 1
  const endIndex = currentIndex + 2
  const visibleCards = extendedItems.slice(startIndex, endIndex)

  // Auto-rotate every 3 seconds
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentIndex(prev => prev + 1)
      }
    }, 3000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, isTransitioning])

  // Reset auto-play after user interaction (2 seconds)
  const resetAutoPlayTimer = () => {
    setIsAutoPlaying(false)
    
    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current)
    }
    
    autoPlayTimerRef.current = setTimeout(() => {
      setIsAutoPlaying(true)
    }, 2000)
  }

  // Cleanup timers
  useEffect(() => {
    return () => {
      if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current)
    }
  }, [])

  const handlePrev = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(prev => prev - 1)
    resetAutoPlayTimer()
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const handleNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(prev => prev + 1)
    resetAutoPlayTimer()
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const handleDotClick = (idx) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(idx + 1)
    resetAutoPlayTimer()
    setTimeout(() => setIsTransitioning(false), 500)
  }

  // Reset index when reaching boundaries for seamless infinite scroll
  useEffect(() => {
    const extendedLength = extendedItems.length
    if (currentIndex >= extendedLength - 2) {
      setTimeout(() => setCurrentIndex(1), 100)
    }
    if (currentIndex <= 0) {
      setTimeout(() => setCurrentIndex(extendedLength - 3), 100)
    }
  }, [currentIndex, extendedItems.length])

  // Get card style with smooth chain transition - all cards move together
  const getCardStyle = (index) => {
    const offset = index - currentIndex
    
    if (offset === 0) {
      // Center card - largest
      return {
        transform: 'scale(1.25) translateY(-8px)',
        opacity: 1,
        zIndex: 10,
        transition: 'all 0.5s cubic-bezier(0.34, 1.2, 0.64, 1)'
      }
    } else if (offset === -1) {
      // Left card
      return {
        transform: 'scale(0.9) translateX(-10px)',
        opacity: 0.9,
        zIndex: 5,
        transition: 'all 0.5s cubic-bezier(0.34, 1.2, 0.64, 1)'
      }
    } else if (offset === 1) {
      // Right card
      return {
        transform: 'scale(0.9) translateX(10px)',
        opacity: 0.9,
        zIndex: 5,
        transition: 'all 0.5s cubic-bezier(0.34, 1.2, 0.64, 1)'
      }
    } else if (offset === -2) {
      // Far left (coming into view)
      return {
        transform: 'scale(0.7) translateX(-30px)',
        opacity: 0.5,
        zIndex: 2,
        transition: 'all 0.5s cubic-bezier(0.34, 1.2, 0.64, 1)'
      }
    } else if (offset === 2) {
      // Far right (coming into view)
      return {
        transform: 'scale(0.7) translateX(30px)',
        opacity: 0.5,
        zIndex: 2,
        transition: 'all 0.5s cubic-bezier(0.34, 1.2, 0.64, 1)'
      }
    } else {
      return {
        transform: 'scale(0.5)',
        opacity: 0,
        zIndex: 0,
        pointerEvents: 'none',
        transition: 'all 0.5s cubic-bezier(0.34, 1.2, 0.64, 1)'
      }
    }
  }

  // Industry particles
  const industryParticles = [
    { type: 'dark-blue', size: 'ind-size-sm', speed: 'ind-slow', top: '10%', left: '5%' },
    { type: 'sky-blue', size: 'ind-size-md', speed: 'ind-medium', top: '20%', left: '85%' },
    { type: 'light-blue', size: 'ind-size-xs', speed: 'ind-fast', top: '35%', left: '15%' },
    { type: 'dark-blue', size: 'ind-size-lg', speed: 'ind-medium', top: '50%', left: '75%' },
    { type: 'sky-blue', size: 'ind-size-sm', speed: 'ind-slow', top: '65%', left: '90%' },
    { type: 'white', size: 'ind-size-md', speed: 'ind-fast', top: '75%', left: '10%' },
    { type: 'light-blue', size: 'ind-size-xs', speed: 'ind-slow', top: '85%', left: '30%' },
    { type: 'dark-blue', size: 'ind-size-md', speed: 'ind-medium', top: '15%', left: '45%' },
    { type: 'sky-blue', size: 'ind-size-sm', speed: 'ind-fast', top: '45%', left: '50%' },
    { type: 'white', size: 'ind-size-lg', speed: 'ind-slow', top: '70%', left: '60%' },
  ]

  return (
    <section id="industries" className="industries">
      {/* Industry Particle Background */}
      <div className="industry-particles-container">
        {industryParticles.map((particle, index) => (
          <div
            key={index}
            className={`industry-particle industry-particle-${particle.type} ${particle.size} ${particle.speed}`}
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: `${index * 0.3}s`
            }}
          />
        ))}
      </div>

      <div className="industries__inner">
        <div ref={headRef} className={`industries__head reveal${headVisible ? ' visible' : ''}`}>
          <span className="section-label">Industries We Serve</span>
          <h2 className="section-title">
            Technology Solutions Tailored for <span className="gradient-highlight">Every Industry</span>
          </h2>
          <p className="section-subtitle">
            We help organizations modernize operations, enhance customer experiences, and build resilient digital infrastructure across various industries.
          </p>
        </div>

        {/* Carousel Container - 3 cards visible, all move in chain */}
        <div className="industries-carousel-container">
          <div className="industries-carousel-track">
            {visibleCards.map((ind, idx) => {
              const cardGlobalIndex = startIndex + idx
              const IconComponent = ind.icon
              
              return (
                <div
                  key={cardGlobalIndex}
                  className="industries-carousel-card"
                  style={getCardStyle(cardGlobalIndex)}
                >
                  <div className="industries-carousel-card-inner">
                    <div className="industries-card-header">
                      <div className="industries-icon-wrapper" style={{ background: `${ind.color}15`, color: ind.color }}>
                        <div className="industries-icon">
                          <IconComponent />
                        </div>
                      </div>
                      <div className="industries-card-badge">
                        <span className="badge-number">{String((((cardGlobalIndex) % industries.length) + 1)).padStart(2, '0')}</span>
                      </div>
                    </div>
                    
                    <div className="card-tag" style={{ background: `${ind.color}10`, color: ind.color }}>
                      {ind.tag}
                    </div>
                    
                    <h3 className="industries-card-title">{ind.title}</h3>
                    <p className="industries-card-desc">{ind.desc}</p>
                    
                    <div className="industries-card-footer">
                      <a href="#contact" className="industries-card-link" style={{ color: ind.color }}>
                        <span>Learn more</span>
                        <span className="link-icon">
                          <IndustryIcons.arrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation at Bottom */}
          <div className="industries-carousel-nav">
            <button className="industries-carousel-arrow industries-carousel-arrow-prev" onClick={handlePrev}>
              <IndustryIcons.arrowLeft />
            </button>
            <div className="industries-carousel-dots">
              {industries.map((_, idx) => (
                <button
                  key={idx}
                  className={`industries-carousel-dot ${(currentIndex % industries.length) === idx ? 'active' : ''}`}
                  onClick={() => handleDotClick(idx)}
                />
              ))}
            </div>
            <button className="industries-carousel-arrow industries-carousel-arrow-next" onClick={handleNext}>
              <IndustryIcons.arrowRight />
            </button>
          </div>
        </div>

        {/* CTA below industries */}
        <div className="industries__cta-wrapper">
          <a href="#contact" className="btn-grad">
            Explore Industry Solutions →
          </a>
        </div>
      </div>
    </section>
  )
}