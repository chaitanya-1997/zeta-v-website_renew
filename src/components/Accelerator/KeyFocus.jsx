// KeyFocus.jsx
import { useState, useEffect, useRef, useCallback } from 'react'
import './KeyFocus.css'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaSyncAlt, 
  FaBolt, 
  FaBrain, 
  FaMagic,
  FaArrowRight,
  FaTimes
} from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi2'

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
    gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
    color: '#22a7f0',
    lightBg: 'rgba(34, 168, 240, 0)',
    details: 'The past few years have witnessed far reaching and wide impact of digitalization. However, deployment of digital forces remains isolated, both for the customer as well as the provider. At Zeta-V, we endeavor to provide a holistic approach of digitalization by reimagining the business processes and integrating diverse technologies to multiply the aggregate value and maximize end user benefits.',
  },
  { 
    title: 'Continuity & Compliance', 
    desc: 'Ensuring resilience with built-in compliance standards.',
    icon: <FaBolt />,
    image: imgContinuity,
    gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
    color: '#34d399',
    lightBg: 'rgba(52, 211, 153, 0)',
    details: 'Increasing vulnerabilities in business and technology has spiraled the need for effective business continuity plans and adherence to more exacting standards of compliance. Our team of deep domain and technology consultants continually strives to provide a balanced approach to our customers driving business excellence through continuity and compliance by integrating them as part of natural business process.',
  },
  { 
    title: 'Enterprise Transformation', 
    desc: 'Driving continuous growth via enterprise evolution.',
    icon: <FaBrain />,
    image: imgTransformation,
    gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    color: '#f472b6',
    lightBg: 'rgba(244, 114, 181, 0.02)',
    details: 'While keeping pace with competitive pressures and technological advancements, and striving for growth at the same time, requires a continuous process of business transformation. At Zeta-V, we help our customers ride this wave of ongoing transformation through integrated program management and complex technology implementations, digitizing e2e services across traditional ERPs and legacy systems.',
  },
  { 
    title: 'Productivity Platforms', 
    desc: 'Building collaborative ecosystems for productivity gains.',
    icon: <FaMagic />,
    image: imgProductivity,
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    color: '#f59e0b',
    lightBg: 'rgba(245, 159, 11, 0.02)',
    details: 'Zeta-V\'s core competence is to ideate, design, build and operate platforms that integrate collaboration, transparency and accessibility to deliver productivity solutions. We specialize in designing consumer-provider ecosystem marketplaces, both in B2B and in B2C modes. Zeta-V supports the online deployment with offline services supported through a Shared Services Command Center.',
  },
]

export default function KeyFocus() {
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

  // Direct open modal without flip
  const openModal = (item, e) => {
    e?.stopPropagation?.()
    setSelectedItem(item)
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedItem(null)
    document.body.style.overflow = ''
  }

  return (
    <section className="keyfocus-premium-light" ref={sectionRef}>
      {/* Background Decorations */}
      <div className="keyfocus-premium-light-bg">
        <div className="keyfocus-premium-light-blob klblob-1" />
        <div className="keyfocus-premium-light-blob klblob-2" />
        <div className="keyfocus-premium-light-blob klblob-3" />
        <div className="keyfocus-premium-light-blob klblob-4" />
      </div>
      <div className="keyfocus-premium-light-grid" />

      <div className="keyfocus-premium-light-container">
        {/* Header */}
        <motion.div 
          className="keyfocus-premium-light-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="keyfocus-premium-light-label">
            <span className="label-line-light" />
            <span className="label-text-light">Strategic Domains</span>
            <span className="label-line-light" />
          </div>
          
          <h2 className="keyfocus-premium-light-title">
            Key Focus Areas
            <span className="title-icon-light">✦</span>
          </h2>
          
          <p className="keyfocus-premium-light-subtitle">
            Strategic domains driving enterprise acceleration and digital transformation.
          </p>
        </motion.div>

        {/* Desktop Carousel */}
        <div className="keyfocus-premium-light-carousel" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className="keyfocus-premium-light-viewport">
            <div className="keyfocus-premium-light-track" ref={carouselRef}>
              {focusAreas.map((item, index) => (
                <motion.div 
                  key={index}
                  className="keyfocus-premium-light-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.5 }}
                  onClick={(e) => openModal(item, e)}
                  style={{ '--card-color': item.color }}
                >
                  <div className="keyfocus-premium-light-card-inner">
                    <div className="keyfocus-premium-light-card-front">
                      <div className="keyfocus-premium-light-card-glow" style={{ background: item.gradient }} />
                      <div className="keyfocus-premium-light-card-icon" style={{ background: item.lightBg, color: item.color }}>
                        {item.icon}
                      </div>
                      <h3 className="keyfocus-premium-light-card-title">{item.title}</h3>
                      <p className="keyfocus-premium-light-card-desc">{item.desc}</p>
                      <div className="keyfocus-premium-light-card-hint">
                        <span>Click to explore</span>
                        <FaArrowRight />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="keyfocus-premium-light-dots">
          {focusAreas.map((_, index) => (
            <button
              key={index}
              className={`keyfocus-premium-light-dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => { setCurrentIndex(index); setIsPaused(true); setTimeout(() => setIsPaused(false), 5000) }}
              style={{
                background: currentIndex === index ? focusAreas[index].gradient : 'rgba(15, 23, 42, 0.1)'
              }}
            />
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="keyfocus-premium-light-mobile">
          {focusAreas.map((item, index) => (
            <motion.div 
              key={index}
              className="keyfocus-premium-light-mobile-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              onClick={(e) => openModal(item, e)}
              style={{ '--card-color': item.color }}
            >
              <div className="keyfocus-premium-light-mobile-inner">
                <div className="keyfocus-premium-light-mobile-front">
                  <div className="mobile-front-content-light">
                    <div className="mobile-icon-light" style={{ background: item.lightBg, color: item.color }}>
                      {item.icon}
                    </div>
                    <div className="mobile-text-light">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                    <span className="mobile-arrow-light">↗</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal with Image Background */}
      <AnimatePresence>
        {modalOpen && selectedItem && (
          <motion.div 
            className="keyfocus-premium-light-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="keyfocus-premium-light-modal-content"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              style={{ 
                backgroundImage: `url(${selectedItem.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay for readability */}
              <div className="modal-overlay-light" style={{ background: selectedItem.gradient }} />
              
              <button className="modal-close-light" onClick={closeModal}>
                <FaTimes />
              </button>
              <div className="modal-content-wrapper">
                <div className="modal-header-light">
                  <div className="modal-icon-light" style={{ background: selectedItem.lightBg }}>
                    {selectedItem.icon}
                  </div>
                  <h2>{selectedItem.title}</h2>
                </div>
                <div className="modal-body-light">
                  <p>{selectedItem.details}</p>
                </div>
                {/* <div className="modal-footer-light">
                  <span className="modal-tag-light" style={{ color: selectedItem.color }}>Learn More</span>
                </div> */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Edge */}
      <div className="keyfocus-premium-light-bottom" />
    </section>
  )
}