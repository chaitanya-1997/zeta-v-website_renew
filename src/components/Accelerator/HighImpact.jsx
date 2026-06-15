import { useState, useEffect, useRef, useCallback } from 'react'
import './HighImpact.css'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChartLine, FaBuilding, FaBolt, FaCloud } from 'react-icons/fa'

// Import card back images
import imgBusinessConsulting from '../../assets/accimg/business-tech-consulting.jpg'
import imgSpecialtySourcing from '../../assets/accimg/specialty-sourcing.jpg'
import imgProgramManagement from '../../assets/accimg/program-management.jpg'
import imgJointIP from '../../assets/accimg/joint-ip-cocreation.jpg'

// Import section background
import highImpactBg from '../../assets/accimg/high-impact-bg.jpg'

const impactData = [
  { 
    title: 'Business & Technology Consulting', 
    desc: 'Driving growth through domain expertise and strategic frameworks.',
    icon: <FaChartLine />,
    image: imgBusinessConsulting,
    details: 'We deliver growth consulting strategy by combining deep domain and technology expertise focusing on our customers\' most critical issues and opportunities. We deploy our proprietary 4D-Framework for diagnostic assessment and leverage our RE-FIVE model for articulating business plans including visioning, strategy, marketing, organization and operations. We specialize in turnaround strategies, new growth markets and portfolio consolidation.',
  },
  { 
    title: 'Specialty Sourcing & Skill Augmentation', 
    desc: 'Sourcing proven talent via experiential HEXAFIT framework.',
    icon: <FaBuilding />,
    image: imgSpecialtySourcing,
    details: 'Our team of consultants comes with techno-functional industry experience and a wide network of senior industry professionals to help our customers source role-specific talent deploying our proprietary HEXAFIT framework. The framework prioritizes direct experiential references over database searched profiles.',
  },
  { 
    title: 'Program Management & Governance', 
    desc: 'Transforming strategies into reality with PROMAF methodology.',
    icon: <FaBolt />,
    image: imgProgramManagement,
    details: 'We help our customers drive business transformation by providing industry-leading program management consulting services, methods and tools. Our in-house developed PROMAF methodology helps transform a technology strategy or program into reality.',
  },
  { 
    title: 'Joint IP Co-creation & Monetization', 
    desc: 'Partnering to create and monetize innovative intellectual assets.',
    icon: <FaCloud />,
    image: imgJointIP,
    details: 'At Zeta-V, we partner with our customers for ideation, design and co-creation of Intellectual Property and related assets. We also advise and operationalize technology platforms to monetize such IP and assets.',
  },
]

export default function HighImpact() {
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
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true) }, { threshold: 0.3 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const startAutoSlide = useCallback(() => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current)
    autoSlideRef.current = setInterval(() => setCurrentIndex(p => p >= impactData.length - 1 ? 0 : p + 1), 4000)
  }, [])

  useEffect(() => { if (!isPaused && isVisible) startAutoSlide(); return () => clearInterval(autoSlideRef.current) }, [isPaused, isVisible, startAutoSlide])
  useEffect(() => { if (carouselRef.current?.children[0]) { const w = carouselRef.current.children[0].offsetWidth; carouselRef.current.scrollTo({ left: currentIndex * (w + 24), behavior: 'smooth' }) } }, [currentIndex])

  const handleCardClick = (index) => { setFlippedCard(flippedCard === index ? null : index); setIsPaused(true); setTimeout(() => setIsPaused(false), 5000) }
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
    <section id="high-impact" className="high-impact-section" ref={sectionRef}>
      {/* Background Image with light blue gradient overlay */}
      <div className="section-bg-wrapper">
        <div className="section-bg-image" style={{ backgroundImage: `url(${highImpactBg})` }}></div>
        <div className="section-bg-overlay"></div>
      </div>

      <div className="section-container">
        <motion.div className="section-header" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="section-label">Our Services</span>
          <h2 className="section-title">High Impact <span className="grad-text">Offerings</span></h2>
          <p className="section-subtitle">Delivering measurable business transformation through proven solutions.</p>
        </motion.div>

        <div className="impact-carousel-wrapper" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className="impact-carousel-viewport">
            <motion.div className="impact-carousel" ref={carouselRef} initial={{ x: 100, opacity: 0 }} animate={isVisible ? { x: 0, opacity: 1 } : {}} transition={{ duration: 0.8 }}>
              {impactData.map((item, index) => (
                <motion.div 
                  className={`impact-card ${flippedCard === index ? 'impact-card-flipped' : ''}`}
                  key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="impact-card-front">
                    <div className="impact-icon-wrapper"><motion.div className="impact-icon" animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}>{item.icon}</motion.div></div>
                    <h3>{item.title}</h3>
                    <p className="impact-card-desc">{item.desc}</p>
                    <div className="impact-flip-hint">Click to explore →</div>
                  </div>
                  <div className="impact-card-back">
                    <div className="impact-card-back-image" style={{ backgroundImage: `url(${item.image})` }}><div className="impact-card-back-overlay"></div></div>
                    <div className="impact-card-back-content">
                      <h3>{item.title}</h3>
                      <button className="impact-read-more-btn" onClick={(e) => openModal(item, index, e)}>Read More →</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="carousel-dots">
          {impactData.map((_, i) => <button key={i} className={`carousel-dot ${currentIndex === i ? 'carousel-dot-active' : ''}`} onClick={() => { setCurrentIndex(i); setIsPaused(true); setTimeout(() => setIsPaused(false), 5000) }} />)}
        </div>

        <div className="impact-mobile-list">
          {impactData.map((item, index) => (
            <motion.div className={`impact-card-mobile ${flippedCard === index ? 'impact-card-mobile-flipped' : ''}`} key={index}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.12, duration: 0.4 }}
              onClick={() => handleCardClick(index)}>
              <div className="impact-card-mobile-front">
                <div className="impact-card-mobile-inner">
                  <div className="impact-icon-wrapper-sm"><span className="impact-icon-sm">{item.icon}</span></div>
                  <div className="impact-card-mobile-title"><h3>{item.title}</h3><p>{item.desc}</p></div>
                  <span className="impact-flip-arrow">↗</span>
                </div>
              </div>
              <div className="impact-card-mobile-back">
                <div className="impact-card-mobile-back-img" style={{ backgroundImage: `url(${item.image})` }}><div className="impact-card-mobile-back-overlay"></div></div>
                <div className="impact-card-mobile-back-info"><h3>{item.title}</h3><button className="impact-read-more-btn-mobile" onClick={(e) => openModal(item, index, e)}>Read More →</button></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && selectedItem && (
          <motion.div className="fw-modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal}>
            <motion.div className="fw-modal-popup" initial={{ scale: 0.85, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.85, opacity: 0, y: 20 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} onClick={e => e.stopPropagation()}>
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