import { useState, useEffect, useCallback } from 'react'
import './AcceleratorHero.css'
import { motion } from 'framer-motion'

// Import images
import heroSlide1 from '../../assets/images/hero-slide-1.jpg'
import heroSlide2 from '../../assets/images/hero-slide-2.jpg'
import heroSlide3 from '../../assets/images/hero-slide-3.jpg'

const slides = [
  {
    overline: 'Business Accelerator',
    h1a: 'Accelerating',
    h1b: <>Digital <span className="grad-text">Growth</span></>,
    sub: 'Enterprise-grade transformation systems designed to scale operations, optimize performance, and accelerate innovation.',
    image: heroSlide1,
    buttons: null,
  },
  {
    overline: 'Strategic Frameworks',
    h1a: 'Powered by',
    h1b: <>Proven <span className="grad-text">Methodologies</span></>,
    sub: 'HexaFit, PROMAF, and RE-FIVE frameworks engineered for enterprise acceleration and measurable business outcomes.',
    image: heroSlide2,
    buttons: [
      { label: 'Explore Frameworks →', href: 'hexafit', className: 'btn-grad' },
    ],
  },
  {
    overline: 'Measurable Impact',
    h1a: 'Delivering',
    h1b: <>Real <span className="grad-text">Results</span></>,
    sub: 'From digital transformation to AI enablement — our frameworks drive operational excellence and scalable growth.',
    image: heroSlide3,
    buttons: [
      { label: 'High Impact Offerings →', href: 'high-impact', className: 'btn-grad' },
    ],
  },
]

const stats = [
  { value: '4', label: 'Frameworks' },
  { value: '12+', label: 'Modules' },
  { value: '90%', label: 'Success Rate' },
  { value: '6x', label: 'Avg. ROI' },
]

export default function AcceleratorHero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [bgImage, setBgImage] = useState(slides[0].image)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadedImages, setLoadedImages] = useState({})

  // Preload all images on mount
  useEffect(() => {
    let loadedCount = 0
    const totalImages = slides.length

    slides.forEach((slide, index) => {
      const img = new Image()
      img.src = slide.image
      img.onload = () => {
        loadedCount++
        setLoadedImages(prev => ({ ...prev, [index]: true }))
        if (loadedCount === totalImages) {
          setImagesLoaded(true)
        }
      }
      img.onerror = () => {
        loadedCount++
        if (loadedCount === totalImages) {
          setImagesLoaded(true)
        }
      }
    })
  }, [])

  const SLIDE_DURATION = 5500

  useEffect(() => {
    if (!imagesLoaded) return

    let startTime = Date.now()
    let animFrame

    const tick = () => {
      const elapsed = Date.now() - startTime
      const pct = Math.min(elapsed / SLIDE_DURATION, 1)
      setProgress(pct)
      if (pct >= 1) {
        startTime = Date.now()
        setAnimating(true)
        setTimeout(() => {
          const nextSlide = (activeSlide + 1) % slides.length
          setActiveSlide(nextSlide)
          setBgImage(slides[nextSlide].image)
          setAnimating(false)
        }, 350)
      }
      animFrame = requestAnimationFrame(tick)
    }

    animFrame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animFrame)
  }, [activeSlide, imagesLoaded])

  const goTo = useCallback((i) => {
    if (i === activeSlide) return
    setAnimating(true)
    setTimeout(() => {
      setActiveSlide(i)
      setBgImage(slides[i].image)
      setProgress(0)
      setAnimating(false)
    }, 350)
  }, [activeSlide])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const slide = slides[activeSlide]

  return (
    <section className="accelerator-hero">
      {/* Background Image with blue gradient overlay */}
      <div className="hero-bg-wrapper">
        {/* Show all images, only active one is visible */}
        {slides.map((s, i) => (
          <motion.div
            key={i}
            className="hero-bg-image"
            style={{ 
              backgroundImage: `url(${s.image})`,
              opacity: i === activeSlide ? 1 : 0
            }}
            animate={{ opacity: i === activeSlide ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          />
        ))}
        <div className="hero-bg-gradient"></div>
      </div>

      {/* Floating orbs */}
      <div className="accelerator-hero__orb accelerator-hero__orb--1" />
      <div className="accelerator-hero__orb accelerator-hero__orb--2" />

      <div className="accelerator-hero__inner">
        <div className={`accelerator-hero__left${animating ? ' accelerator-hero__left--out' : ''}`}>
          <motion.span 
            className="section-label"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {slide.overline}
          </motion.span>
          
          <motion.h1 
            className="accelerator-hero__h1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="accelerator-hero__h1a">{slide.h1a}</span>
            <span className="accelerator-hero__h1b">{slide.h1b}</span>
          </motion.h1>
          
          <motion.p 
            className="accelerator-hero__sub"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {slide.sub}
          </motion.p>
          
          {slide.buttons && slide.buttons.length > 0 && (
            <motion.div 
              className="accelerator-hero__ctas"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {slide.buttons.map((btn, i) => (
                <button 
                  key={i} 
                  className={btn.className}
                  onClick={() => scrollToSection(btn.href)}
                >
                  {btn.label}
                </button>
              ))}
            </motion.div>
          )}
          
          <motion.div 
            className="accelerator-hero__stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            {stats.map((s, i) => (
              <div className="accelerator-hero__stat" key={i}>
                <span className="accelerator-hero__stat-val">{s.value}</span>
                <span className="accelerator-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="accelerator-hero__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`accelerator-hero__dot${i === activeSlide ? ' accelerator-hero__dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          >
            {i === activeSlide && (
              <span className="accelerator-hero__dot-progress" style={{ transform: `scaleX(${progress})` }} />
            )}
          </button>
        ))}
      </div>
    </section>
  )
}