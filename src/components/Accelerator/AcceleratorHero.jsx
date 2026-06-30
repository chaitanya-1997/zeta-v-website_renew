// AcceleratorHero.jsx
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HiArrowRight, 
  HiOutlineSparkles, 
  HiOutlineGlobeAlt,
  HiOutlineCpuChip,
  HiOutlineChartBar,
  HiOutlineArrowUpCircle  ,
  HiOutlineUsers,
  HiOutlineBriefcase
} from 'react-icons/hi2'
import { FaRocket } from 'react-icons/fa'
import heroSlide3 from '../../assets/images/hero-slide-3.jpg'
import './AcceleratorHero.css'
import { Link } from 'react-router-dom';

const slides = [
  {
    overline: 'Business Accelerator',
    title: 'Accelerating Digital Growth',
    description: 'Enterprise-grade transformation systems designed to scale operations, optimize performance, and accelerate innovation.',
    tag: 'Featured',
    gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
    icon: HiOutlineArrowUpCircle  
  },
  {
    overline: 'Strategic Frameworks',
    title: 'Powered by Proven Methodologies',
    description: 'HexaFit, PROMAF, and RE-FIVE frameworks engineered for enterprise acceleration and measurable business outcomes.',
    tag: 'Innovation',
    gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
    icon: HiOutlineCpuChip
  },
  {
    overline: 'Measurable Impact',
    title: 'Delivering Real Results',
    description: 'From digital transformation to AI enablement our frameworks drive operational excellence and scalable growth.',
    tag: 'Results',
    gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    icon: HiOutlineChartBar
  },
]

const stats = [
  { value: '4', label: 'Frameworks', icon: HiOutlineSparkles },
  { value: '12+', label: 'Modules', icon: HiOutlineCpuChip },
  { value: '90%', label: 'Success Rate', icon: HiOutlineChartBar },
  { value: '6x', label: 'Avg. ROI', icon: HiOutlineBriefcase },
]

export default function AcceleratorHero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const ref = useRef(null)

  const SLIDE_DURATION = 5000

  useEffect(() => {
    if (!isPlaying) return
    
    let startTime = Date.now()
    let animFrame

    const tick = () => {
      const elapsed = Date.now() - startTime
      const pct = Math.min(elapsed / SLIDE_DURATION, 1)
      setProgress(pct)
      
      if (pct >= 1) {
        startTime = Date.now()
        setActiveSlide((s) => (s + 1) % slides.length)
      }
      animFrame = requestAnimationFrame(tick)
    }

    animFrame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animFrame)
  }, [activeSlide, isPlaying])

  const goToSlide = (index) => {
    if (index === activeSlide) return
    setActiveSlide(index)
    setProgress(0)
  }

  const nextSlide = () => {
    setActiveSlide((s) => (s + 1) % slides.length)
    setProgress(0)
  }

  const prevSlide = () => {
    setActiveSlide((s) => (s - 1 + slides.length) % slides.length)
    setProgress(0)
  }

  const currentSlide = slides[activeSlide]
  const Icon = currentSlide.icon

  return (
    <section className="accelerator-hero-premium" ref={ref}>
      {/* Background Decorations */}
      <div className="accelerator-hero-bg">
        <div className="accelerator-hero-blob ablob-1" />
        <div className="accelerator-hero-blob ablob-2" />
        <div className="accelerator-hero-blob ablob-3" />
        <div className="accelerator-hero-blob ablob-4" />
      </div>

      <div className="accelerator-hero-container">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeSlide}
            className="accelerator-hero-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Left Column */}
            <div className="accelerator-hero-left">
              <motion.div 
                className="accelerator-hero-badge"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <FaRocket className="badge-icon" />
                <span>{currentSlide.overline}</span>
                <span className="badge-pulse" />
              </motion.div>

              <motion.h1 
                className="accelerator-hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                {currentSlide.title}
                <span className="title-underline-accelerator" style={{ background: currentSlide.gradient }} />
              </motion.h1>

              <motion.p 
                className="accelerator-hero-description"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                {currentSlide.description}
              </motion.p>

              <motion.div 
                className="accelerator-hero-ctas"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
              <Link 
 to="/contact"
  state={{ scrollTo: 'enquiries' }} 
  className="btn-accelerator-primary"
  // onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  <span>Get Started</span>
  <HiArrowRight />
</Link>
              </motion.div>

              <motion.div 
                className="accelerator-hero-stats"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {stats.map((stat, index) => {
                  const StatIcon = stat.icon
                  return (
                    <div key={index} className="accelerator-hero-stat">
                      <div className="accelerator-hero-stat-icon">
                        <StatIcon />
                      </div>
                      <div className="accelerator-hero-stat-content">
                        <span className="accelerator-hero-stat-value">{stat.value}</span>
                        <span className="accelerator-hero-stat-label">{stat.label}</span>
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            </div>

            {/* Right Column - Visual */}
            <motion.div 
              className="accelerator-hero-right"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <div className="accelerator-hero-visual">
                <div className="accelerator-hero-card" style={{ background: currentSlide.gradient }}>
                  <div className="accelerator-hero-card-glow" />
                  
                  <div className="accelerator-hero-card-icon">
                    <Icon />
                  </div>
                  
                  <div className="accelerator-hero-card-content">
                    <span className="accelerator-hero-card-tag">{currentSlide.tag}</span>
                    <h3 className="accelerator-hero-card-title">{currentSlide.title}</h3>
                    <p className="accelerator-hero-card-desc">{currentSlide.description}</p>
                  </div>
                  
                  <div className="accelerator-hero-card-image">
                    <img src={heroSlide3} alt={currentSlide.title} />
                    <div className="accelerator-hero-card-overlay" />
                  </div>
                </div>

                {/* Slide Indicators */}
                <div className="accelerator-hero-indicators">
                  <button 
                    className="accelerator-hero-arrow" 
                    onClick={prevSlide}
                    aria-label="Previous"
                  >
                    <HiArrowRight style={{ transform: 'rotate(180deg)' }} />
                  </button>

                  <div className="accelerator-hero-dots">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        className={`accelerator-hero-dot ${index === activeSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        style={{
                          background: index === activeSlide ? currentSlide.gradient : 'rgba(15, 23, 42, 0.1)'
                        }}
                      >
                        {index === activeSlide && (
                          <span 
                            className="accelerator-hero-dot-progress"
                            style={{ width: `${progress * 100}%` }}
                          />
                        )}
                      </button>
                    ))}
                  </div>

                  <button 
                    className="accelerator-hero-arrow" 
                    onClick={nextSlide}
                    aria-label="Next"
                  >
                    <HiArrowRight />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Edge */}
      <div className="accelerator-hero-bottom" />
    </section>
  )
}