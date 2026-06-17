// import { useReveal } from '../../hooks/useReveal'
// import './HowWeWork.css'

// // Custom SVG Icons
// const ProcessIcons = {
//   discover: () => (
//     <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8" fill="none"/>
//       <path d="M21 21L17 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
//       <path d="M11 8V11L13 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
//       <circle cx="11" cy="11" r="2" fill="currentColor" opacity="0.5"/>
//     </svg>
//   ),
//   design: () => (
//     <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//       <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
//       <path d="M8 8L16 16M16 8L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
//       <circle cx="12" cy="12" r="2" fill="currentColor"/>
//     </svg>
//   ),
//   build: () => (
//     <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
//       <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" fill="none"/>
//       <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" fill="none"/>
//       <circle cx="12" cy="12" r="2" fill="currentColor"/>
//     </svg>
//   ),
//   optimize: () => (
//     <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//       <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//       <path d="M19 3L13 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//       <circle cx="19" cy="3" r="2" fill="currentColor" opacity="0.5"/>
//     </svg>
//   ),
//   arrow: () => (
//     <svg viewBox="0 0 24 24" fill="none">
//       <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   ),
//   check: () => (
//     <svg viewBox="0 0 24 24" fill="none">
//       <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   ),
//   clock: () => (
//     <svg viewBox="0 0 24 24" fill="none">
//       <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" fill="none"/>
//       <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
//     </svg>
//   )
// }

// const steps = [
//   {
//     icon: ProcessIcons.discover,
//     num: '01',
//     title: 'Discover & Strategize',
//     body: 'Understanding your business challenges and identifying technology opportunities.',
//     color: 'cyan',
//     metrics: ['Discovery Sessions', 'Stakeholder Mapping', 'Technology Audit']
//   },
//   {
//     icon: ProcessIcons.design,
//     num: '02',
//     title: 'Design & Architect',
//     body: 'Create scalable technology frameworks tailored to your business goals.',
//     color: 'blue',
//     metrics: ['Architecture Design', 'Roadmap Planning', 'Technology Selection']
//   },
//   {
//     icon: ProcessIcons.build,
//     num: '03',
//     title: 'Build & Integrate',
//     body: 'Deploying solutions using modern architecture and global talent expertise.',
//     color: 'purple',
//     metrics: ['Agile Development', 'System Integration', 'Quality Assurance']
//   },
//   {
//     icon: ProcessIcons.optimize,
//     num: '04',
//     title: 'Optimize & Scale',
//     body: 'Continuous improvement through analytics, automation, and innovation.',
//     color: 'teal',
//     metrics: ['Performance Monitoring', 'Automation', 'Continuous Innovation']
//   }
// ]

// export default function HowWeWork() {
//   const [headRef, headVisible] = useReveal(0)
//   const [closingRef, closingVisible] = useReveal(0)

//   return (
//     <section id="how-we-work" className="how">
//       <div className="how__bg">
//         <div className="how__pattern"></div>
//         <div className="how__gradient-1"></div>
//         <div className="how__gradient-2"></div>
//       </div>

//       <div className="how__inner">
//         <div ref={headRef} className={`how__head reveal${headVisible ? ' visible' : ''}`}>
//           <span className="section-label">Our Process</span>
//           <h2 className="section-title">
//             Our <span className="gradient-text">Value Delivery Model</span>
//           </h2>
//           <p className="section-subtitle">
//             Connecting ideas and systems to accelerate growth and multiply business value.
//           </p>
//         </div>

//         <div className="how__steps">
//           {steps.map((step, i) => {
//             const [ref, visible] = useReveal(i * 150)
//             const IconComponent = step.icon
            
//             return (
//               <div key={i} className="how__step-wrapper">
//                 <div
//                   ref={ref}
//                   className={`how__step reveal${visible ? ' visible' : ''} ${step.color}`}
//                 >
//                   <div className="how__step-glow"></div>
                  
//                   <div className="how__step-header">
//                     <div className={`how__step-icon-wrapper ${step.color}`}>
//                       <div className="how__step-icon">
//                         <IconComponent />
//                       </div>
//                       <div className="icon-pulse-ring"></div>
//                     </div>
//                     <div className="how__step-number">
//                       <span>{step.num}</span>
//                     </div>
//                   </div>

//                   <h3 className="how__step-title">{step.title}</h3>
//                   <p className="how__step-body">{step.body}</p>

//                   <div className="how__step-metrics">
//                     {step.metrics.map((metric, idx) => (
//                       <div key={idx} className="metric">
//                         <ProcessIcons.check />
//                         <span>{metric}</span>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="how__step-progress">
//                     <div className="progress-fill"></div>
//                   </div>
//                 </div>

//                 {i < steps.length - 1 && (
//                   <div className={`how__connector${visible ? ' how__connector--active' : ''}`}>
//                     <div className="connector-line"></div>
//                     {/* <div className="connector-arrow">
//                       <ProcessIcons.arrow />
//                     </div> */}
//                     <div className="connector-dots">
//                       <span></span><span></span><span></span>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )
//           })}
//         </div>

//         {/* Closing Statement */}
//       {/* Closing Statement - Compact Design */}
// <div
//   ref={closingRef}
//   className={`how__closing reveal${closingVisible ? ' visible' : ''}`}
// >
//   <div className="closing-icon">
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//       <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke="url(#closingGrad)" strokeWidth="1.8" strokeLinecap="round"/>
//       <defs>
//         <linearGradient id="closingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//           <stop offset="0%" stopColor="#0D47A1"/>
//           <stop offset="100%" stopColor="#00B4FF"/>
//         </linearGradient>
//       </defs>
//     </svg>
//   </div>
//   <p className="closing-text">
//     Our collaborative model ensures that technology investments translate directly into measurable business outcomes.
//   </p>
// </div>
//       </div>
//     </section>
//   )
// }





import { useEffect, useState } from 'react'
import { useReveal } from '../../../hooks/useReveal'
import './HowWeWork.css'

// Custom SVG Icons
const ProcessIcons = {
  discover: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <path d="M21 21L17 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M11 8V11L13 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="11" cy="11" r="2" fill="currentColor" opacity="0.5"/>
    </svg>
  ),
  design: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M8 8L16 16M16 8L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
    </svg>
  ),
  build: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
    </svg>
  ),
  optimize: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19 3L13 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="19" cy="3" r="2" fill="currentColor" opacity="0.5"/>
    </svg>
  ),
  arrow: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  check: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  clock: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}

const steps = [
  {
    icon: ProcessIcons.discover,
    num: '01',
    title: 'Discover & Strategize',
    body: 'Understanding your business challenges and identifying technology opportunities.',
    color: 'cyan',
    metrics: ['Discovery Sessions', 'Stakeholder Mapping', 'Technology Audit']
  },
  {
    icon: ProcessIcons.design,
    num: '02',
    title: 'Design & Architect',
    body: 'Create scalable technology frameworks tailored to your business goals.',
    color: 'blue',
    metrics: ['Architecture Design', 'Roadmap Planning', 'Technology Selection']
  },
  {
    icon: ProcessIcons.build,
    num: '03',
    title: 'Build & Integrate',
    body: 'Deploying solutions using modern architecture and global talent expertise.',
    color: 'purple',
    metrics: ['Agile Development', 'System Integration', 'Quality Assurance']
  },
  {
    icon: ProcessIcons.optimize,
    num: '04',
    title: 'Optimize & Scale',
    body: 'Continuous improvement through analytics, automation, and innovation.',
    color: 'teal',
    metrics: ['Performance Monitoring', 'Automation', 'Continuous Innovation']
  }
]

export default function HowWeWork() {
  const [headRef, headVisible] = useReveal(0)
  const [closingRef, closingVisible] = useReveal(0)
  const [zoomSize, setZoomSize] = useState(100)
  const [imageOpacity, setImageOpacity] = useState(1)
  const [blurAmount, setBlurAmount] = useState(0)

  // Parallax zoom effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.how')
      if (!section) return
      
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      
      let progress = 0
      if (scrollTop + windowHeight > sectionTop) {
        const visibleStart = Math.max(scrollTop, sectionTop)
        const visibleEnd = Math.min(scrollTop + windowHeight, sectionTop + sectionHeight)
        const visibleHeight = Math.max(0, visibleEnd - visibleStart)
        progress = visibleHeight / sectionHeight
      }
      progress = Math.min(Math.max(progress, 0), 0.7)
      
      const newZoom = 100 + (progress * 50)
      setZoomSize(newZoom)
      setImageOpacity(1 - (progress * 0.6))
      setBlurAmount(progress * 5)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="how-we-work" className="how">
      {/* Parallax Feature Background */}
      <div className="how__feature">
        <div 
          className="how__feature-image" 
          style={{ 
            backgroundSize: `${zoomSize}%`,
            opacity: imageOpacity,
            filter: `blur(${blurAmount}px)`
          }}
        />
        <div className="how__feature-overlay"></div>
      </div>

      <div className="how__bg">
        <div className="how__pattern"></div>
        <div className="how__gradient-1"></div>
        <div className="how__gradient-2"></div>
      </div>

      <div className="how__inner">
        <div ref={headRef} className={`how__head reveal${headVisible ? ' visible' : ''}`}>
          <span className="section-label">Our Process</span>
          <h2 className="section-title">
            Our <span className="gradient-text">Value Delivery Model</span>
          </h2>
          <p className="section-subtitle">
            Connecting ideas and systems to accelerate growth and multiply business value.
          </p>
        </div>

        <div className="how__steps">
          {steps.map((step, i) => {
            const [ref, visible] = useReveal(i * 150)
            const IconComponent = step.icon
            
            return (
              <div key={i} className="how__step-wrapper">
                <div
                  ref={ref}
                  className={`how__step reveal${visible ? ' visible' : ''} ${step.color}`}
                >
                  <div className="how__step-glow"></div>
                  
                  <div className="how__step-header">
                    <div className={`how__step-icon-wrapper ${step.color}`}>
                      <div className="how__step-icon">
                        <IconComponent />
                      </div>
                      <div className="icon-pulse-ring"></div>
                    </div>
                    <div className="how__step-number">
                      <span>{step.num}</span>
                    </div>
                  </div>

                  <h3 className="how__step-title">{step.title}</h3>
                  <p className="how__step-body">{step.body}</p>

                  <div className="how__step-metrics">
                    {step.metrics.map((metric, idx) => (
                      <div key={idx} className="metric">
                        <ProcessIcons.check />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>

                  <div className="how__step-progress">
                    <div className="progress-fill"></div>
                  </div>
                </div>

                {i < steps.length - 1 && (
                  <div className={`how__connector${visible ? ' how__connector--active' : ''}`}>
                    <div className="connector-line"></div>
                    <div className="connector-dots">
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Closing Statement - Compact Design */}
        <div
          ref={closingRef}
          className={`how__closing reveal${closingVisible ? ' visible' : ''}`}
        >
          <div className="closing-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke="url(#closingGrad)" strokeWidth="1.8" strokeLinecap="round"/>
              <defs>
                <linearGradient id="closingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0D47A1"/>
                  <stop offset="100%" stopColor="#00B4FF"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="closing-text">
            Our collaborative model ensures that technology investments translate directly into measurable business outcomes.
          </p>
        </div>
      </div>
    </section>
  )
}