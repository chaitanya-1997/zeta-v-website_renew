// HighImpact.jsx
import { useState, useEffect, useRef, useCallback } from 'react'
import './HighImpact.css'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaChartLine, 
  FaBuilding, 
  FaBolt, 
  FaCloud,
  FaArrowRight,
  FaTimes
} from 'react-icons/fa'

// Import images
import imgBusinessConsulting from '../../assets/accimg/business-tech-consulting.webp'
import imgSpecialtySourcing from '../../assets/accimg/specialty-sourcing.webp'
import imgProgramManagement from '../../assets/accimg/program-management.webp'
import imgJointIP from '../../assets/accimg/joint-ip-cocreation.webp'

const impactData = [
  { 
    title: 'Business & Technology Consulting', 
    desc: 'Driving growth through domain expertise and strategic frameworks.',
    icon: <FaChartLine />,
    image: imgBusinessConsulting,
    gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
    color: '#22a7f0',
    lightBg: 'rgba(34, 167, 240, 0.08)',
    details: 'We deliver growth consulting strategy by combining deep domain and technology expertise focusing on our customers\' most critical issues and opportunities. We deploy our proprietary 4D-Framework for diagnostic assessment and leverage our RE-FIVE model for articulating business plans including visioning, strategy, marketing, organization and operations. We specialize in turnaround strategies, new growth markets and portfolio consolidation.',
  },
  { 
    title: 'Specialty Sourcing & Skill Augmentation', 
    desc: 'Sourcing proven talent via experiential HEXAFIT framework.',
    icon: <FaBuilding />,
    image: imgSpecialtySourcing,
    gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
    color: '#34d399',
    lightBg: 'rgba(52, 211, 153, 0.08)',
    details: 'Our team of consultants comes with techno-functional industry experience and a wide network of senior industry professionals to help our customers source role-specific talent deploying our proprietary HEXAFIT framework. The framework prioritizes direct experiential references over database searched profiles.',
  },
  { 
    title: 'Program Management & Governance', 
    desc: 'Transforming strategies into reality with PROMAF methodology.',
    icon: <FaBolt />,
    image: imgProgramManagement,
    gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    color: '#f472b6',
    lightBg: 'rgba(244, 114, 182, 0.08)',
    details: 'We help our customers drive business transformation by providing industry-leading program management consulting services, methods and tools. Our in-house developed PROMAF methodology helps transform a technology strategy or program into reality.',
  },
  { 
    title: 'Joint IP Co-creation & Monetization', 
    desc: 'Partnering to create and monetize innovative intellectual assets.',
    icon: <FaCloud />,
    image: imgJointIP,
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    color: '#f59e0b',
    lightBg: 'rgba(245, 158, 11, 0.08)',
    details: 'At Zeta-V, we partner with our customers for ideation, design and co-creation of Intellectual Property and related assets. We also advise and operationalize technology platforms to monetize such IP and assets.',
  },
]

export default function HighImpact() {
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
      setCurrentIndex((prev) => (prev >= impactData.length - 1 ? 0 : prev + 1))
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
    <section className="highimpact-premium" ref={sectionRef}>
      {/* Background Decorations */}
      <div className="highimpact-premium-bg">
        <div className="highimpact-premium-blob hblob-1" />
        <div className="highimpact-premium-blob hblob-2" />
        <div className="highimpact-premium-blob hblob-3" />
        <div className="highimpact-premium-blob hblob-4" />
      </div>
      <div className="highimpact-premium-grid" />

      <div className="highimpact-premium-container">
        {/* Header */}
        <motion.div 
          className="highimpact-premium-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="highimpact-premium-label">
            <span className="label-line" />
            <span className="label-text">Our Services</span>
            <span className="label-line" />
          </div>
          
          <h2 className="highimpact-premium-title">
            High Impact Offerings
            <span className="title-icon">✦</span>
          </h2>
          
          <p className="highimpact-premium-subtitle">
            Delivering measurable business transformation through proven solutions.
          </p>
        </motion.div>

        {/* Desktop Carousel */}
        <div className="highimpact-premium-carousel" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className="highimpact-premium-viewport">
            <div className="highimpact-premium-track" ref={carouselRef}>
              {impactData.map((item, index) => (
                <motion.div 
                  key={index}
                  className="highimpact-premium-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.5 }}
                  onClick={(e) => openModal(item, e)}
                  style={{ '--card-color': item.color }}
                >
                  <div className="highimpact-premium-card-inner">
                    <div className="highimpact-premium-card-front">
                      <div className="highimpact-premium-card-glow" style={{ background: item.gradient }} />
                      <div className="highimpact-premium-card-icon" style={{ background: item.lightBg, color: item.color }}>
                        {item.icon}
                      </div>
                      <h3 className="highimpact-premium-card-title">{item.title}</h3>
                      <p className="highimpact-premium-card-desc">{item.desc}</p>
                      <div className="highimpact-premium-card-hint">
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
        <div className="highimpact-premium-dots">
          {impactData.map((_, index) => (
            <button
              key={index}
              className={`highimpact-premium-dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => { setCurrentIndex(index); setIsPaused(true); setTimeout(() => setIsPaused(false), 5000) }}
              style={{
                background: currentIndex === index ? impactData[index].gradient : 'rgba(255, 255, 255, 0.1)'
              }}
            />
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="highimpact-premium-mobile">
          {impactData.map((item, index) => (
            <motion.div 
              key={index}
              className="highimpact-premium-mobile-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              onClick={(e) => openModal(item, e)}
              style={{ '--card-color': item.color }}
            >
              <div className="highimpact-premium-mobile-inner">
                <div className="highimpact-premium-mobile-front">
                  <div className="mobile-front-content">
                    <div className="mobile-icon" style={{ background: item.lightBg, color: item.color }}>
                      {item.icon}
                    </div>
                    <div className="mobile-text">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                    <span className="mobile-arrow">↗</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal with Image Background + Color Overlay */}
      <AnimatePresence>
        {modalOpen && selectedItem && (
          <motion.div 
            className="highimpact-premium-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="highimpact-premium-modal-content"
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
              {/* Color Overlay for readability */}
              <div 
                className="modal-overlay" 
                style={{ 
                  background: selectedItem.gradient,
                  opacity: 0.65 
                }} 
              />
              
              <button className="modal-close" onClick={closeModal}>
                <FaTimes />
              </button>
              <div className="modal-content-wrapper">
                <div className="modal-header">
                  <div className="modal-icon" style={{ background: selectedItem.lightBg}}>
                    {selectedItem.icon}
                  </div>
                  <h2>{selectedItem.title}</h2>
                </div>
                <div className="modal-body">
                  <p>{selectedItem.details}</p>
                </div>
                {/* <div className="modal-footer">
                  <span className="modal-tag" style={{ color: selectedItem.color }}>Learn More</span>
                </div> */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Edge */}
      <div className="highimpact-premium-bottom" />
    </section>
  )
}