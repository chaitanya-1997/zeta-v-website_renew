import { useState, useEffect, useRef, useCallback } from 'react'
import './KeyFocus.css'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSyncAlt, FaBolt, FaBrain, FaMagic } from 'react-icons/fa'

// Import card back images
import imgDigitalization from '../../assets/accimg/intelligent-digitalization.jpg'
import imgContinuity from '../../assets/accimg/continuity-compliance.jpg'
import imgTransformation from '../../assets/accimg/enterprise-transformation.jpg'
import imgProductivity from '../../assets/accimg/productivity-platforms.jpg'

const focusAreas = [
  { 
    title: 'Intelligent Digitalization', 
    desc: 'Reimagining processes through holistic digital integration.',
    icon: <FaSyncAlt />,
    image: imgDigitalization,
    details: 'The past few years have witnessed far reaching and wide impact of digitalization. However, deployment of digital forces remains isolated, both for the customer as well as the provider. At Zeta-V, we endeavor to provide a holistic approach of digitalization by reimagining the business processes and integrating diverse technologies to multiply the aggregate value and maximize end user benefits.',
  },
  { 
    title: 'Continuity & Compliance', 
    desc: 'Ensuring resilience with built-in compliance standards.',
    icon: <FaBolt />,
    image: imgContinuity,
    details: 'Increasing vulnerabilities in business and technology has spiraled the need for effective business continuity plans and adherence to more exacting standards of compliance. Our team of deep domain and technology consultants continually strives to provide a balanced approach to our customers driving business excellence through continuity and compliance by integrating them as part of natural business process.',
  },
  { 
    title: 'Enterprise Transformation', 
    desc: 'Driving continuous growth via enterprise evolution.',
    icon: <FaBrain />,
    image: imgTransformation,
    details: 'While keeping pace with competitive pressures and technological advancements, and striving for growth at the same time, requires a continuous process of business transformation. At Zeta-V, we help our customers ride this wave of ongoing transformation through integrated program management and complex technology implementations, digitizing e2e services across traditional ERPs and legacy systems.',
  },
  { 
    title: 'Productivity Platforms', 
    desc: 'Building collaborative ecosystems for productivity gains.',
    icon: <FaMagic />,
    image: imgProductivity,
    details: 'Zeta-V\'s core competence is to ideate, design, build and operate platforms that integrate collaboration, transparency and accessibility to deliver productivity solutions. We specialize in designing consumer-provider ecosystem marketplaces, both in B2B and in B2C modes. Zeta-V supports the online deployment with offline services supported through a Shared Services Command Center.',
  },
]

export default function KeyFocus() {
  const [flippedCard, setFlippedCard] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const carouselRef = useRef(null)
  const sectionRef = useRef(null)
  const autoSlideRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const startAutoSlide = useCallback(() => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current)
    autoSlideRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= focusAreas.length - 1 ? 0 : prev + 1))
    }, 4000)
  }, [])

  useEffect(() => {
    if (!isPaused && isVisible) startAutoSlide()
    return () => clearInterval(autoSlideRef.current)
  }, [isPaused, isVisible, startAutoSlide])

  useEffect(() => {
    if (carouselRef.current && carouselRef.current.children[0]) {
      const cardWidth = carouselRef.current.children[0].offsetWidth
      const gap = 24
      carouselRef.current.scrollTo({ left: currentIndex * (cardWidth + gap), behavior: 'smooth' })
    }
  }, [currentIndex])

  const handleCardClick = (index) => {
    setFlippedCard(flippedCard === index ? null : index)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 5000)
  }

 const openModal = (item, index, e) => {
  e.stopPropagation()
  setSelectedItem({ ...item, index })
  setModalOpen(true)
  document.body.style.overflow = 'hidden'  // ← ADD THIS
}

const closeModal = () => {
  setModalOpen(false)
  setSelectedItem(null)
  document.body.style.overflow = ''  // ← ADD THIS
}
  return (
    <section className="focus-section" ref={sectionRef}>
      <div className="section-container">
        {/* Updated with global CSS classes */}
        <motion.div className="section-header" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="section-label">Strategic Domains</span>
          <h2 className="section-title">Key Focus <span className="grad-text">Areas</span></h2>
          <p className="section-subtitle">Strategic domains driving enterprise acceleration and digital transformation.</p>
        </motion.div>

        {/* DESKTOP CAROUSEL */}
        <div className="focus-carousel-wrapper" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className="focus-carousel-viewport">
            <motion.div className="focus-carousel" ref={carouselRef} initial={{ x: 100, opacity: 0 }} animate={isVisible ? { x: 0, opacity: 1 } : {}} transition={{ duration: 0.8, ease: "easeOut" }}>
              {focusAreas.map((item, index) => (
                <motion.div 
                  className={`focus-card ${flippedCard === index ? 'focus-card-flipped' : ''}`}
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="focus-card-front">
                    <div className="focus-icon-wrapper">
                      <motion.div className="focus-icon" animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>{item.icon}</motion.div>
                    </div>
                    <h3>{item.title}</h3>
                    <p className="focus-card-desc">{item.desc}</p>
                    <div className="focus-flip-hint">Click to explore →</div>
                  </div>
                  <div className="focus-card-back">
                    <div className="focus-card-back-image" style={{ backgroundImage: `url(${item.image})` }}>
                      <div className="focus-card-back-overlay"></div>
                    </div>
                    <div className="focus-card-back-content">
                      <h3>{item.title}</h3>
                      <button className="focus-read-more-btn" onClick={(e) => openModal(item, index, e)}>Read More →</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="carousel-dots">
          {focusAreas.map((_, index) => (
            <button key={index} className={`carousel-dot ${currentIndex === index ? 'carousel-dot-active' : ''}`} onClick={() => { setCurrentIndex(index); setIsPaused(true); setTimeout(() => setIsPaused(false), 5000) }} />
          ))}
        </div>

        {/* MOBILE */}
        <div className="focus-mobile-list">
          {focusAreas.map((item, index) => (
            <motion.div 
              className={`focus-card-mobile ${flippedCard === index ? 'focus-card-mobile-flipped' : ''}`}
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.4 }}
              onClick={() => handleCardClick(index)}
            >
              <div className="focus-card-mobile-front">
                <div className="focus-card-mobile-inner">
                  <div className="focus-icon-wrapper-sm"><span className="focus-icon-sm">{item.icon}</span></div>
                  <div className="focus-card-mobile-title"><h3>{item.title}</h3><p>{item.desc}</p></div>
                  <span className="focus-flip-arrow">↗</span>
                </div>
              </div>
              <div className="focus-card-mobile-back">
                <div className="focus-card-mobile-back-img" style={{ backgroundImage: `url(${item.image})` }}>
                  <div className="focus-card-mobile-back-overlay"></div>
                </div>
                <div className="focus-card-mobile-back-info">
                  <h3>{item.title}</h3>
                  <button className="focus-read-more-btn-mobile" onClick={(e) => openModal(item, index, e)}>Read More →</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {modalOpen && selectedItem && (
          <motion.div className="fw-modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal}>
            <motion.div className="fw-modal-popup" initial={{ scale: 0.85, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.85, opacity: 0, y: 20 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} onClick={(e) => e.stopPropagation()}>
              <div className="fw-modal-popup-header"><div className="fw-modal-popup-icon"><span>{selectedItem.icon}</span></div><h2>{selectedItem.title}</h2></div>
              <div className="fw-modal-popup-body"><p>{selectedItem.details}</p></div>
              <div className="fw-modal-popup-footer"><button className="fw-modal-close-btn" onClick={closeModal}>Close</button></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}