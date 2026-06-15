import { useState, useEffect } from 'react'
import './HeroSection.css'
import { FaBrain, FaChartBar, FaCloud, FaCogs, FaRobot, FaDatabase } from 'react-icons/fa'

const slides = [
  {
    overline: 'Our Expertise',
    h1a: 'Building Digital',
    h1b: <>for the <span className="grad-text">Modern</span> World</>,
    sub: 'From scalable web applications to enterprise systems, we deliver high-performance digital solutions with innovation, creativity, and modern architecture.',
    buttons: null,
  },
  {
    overline: 'Technology Stack',
    h1a: 'Powered by',
    h1b: <>Cutting-<span className="grad-text">Edge</span> Tech</>,
    sub: 'React, Node.js, Python, AWS, Docker — modern technologies powering scalable digital products with enterprise-grade performance.',
    buttons: [
      { label: 'Explore Tech Stack →', href: 'tech-stack', className: 'btn-grad' },
    ],
  },
  {
    overline: 'Proven Results',
    h1a: 'Delivering',
    h1b: <>Exceptional <span className="grad-text">Outcomes</span></>,
    sub: '120+ projects delivered, 40+ enterprise clients, 98% satisfaction rate — our track record speaks for itself across 15+ industries.',
    buttons: [
      { label: 'Projects Delivered →', href: 'projects', className: 'btn-grad' },
    ],
  },
]

const stats = [
  { value: '120+', label: 'Projects' },
  { value: '40+', label: 'Clients' },
  { value: '15+', label: 'Industries' },
  { value: '98%', label: 'Satisfaction' },
]

const ecosystemNodes = [
  { icon: <FaBrain />, label: 'AI', color: '#00b4ff', angle: -90, delay: 0.2 },
  { icon: <FaChartBar />, label: 'Analytics', color: '#00b4ff', angle: -30, delay: 0.4 },
  { icon: <FaCloud />, label: 'Cloud', color: '#00b4ff', angle: 30, delay: 0.6 },
  { icon: <FaCogs />, label: 'DevOps', color: '#00b4ff', angle: 90, delay: 0.8 },
  { icon: <FaRobot />, label: 'Automation', color: '#00b4ff', angle: 150, delay: 1.0 },
  { icon: <FaDatabase />, label: 'Data', color: '#00b4ff', angle: 210, delay: 1.2 },
]

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [ecosystemVisible, setEcosystemVisible] = useState(false)

  const SLIDE_DURATION = 5500

  useEffect(() => {
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
          setActiveSlide(s => (s + 1) % slides.length)
          setAnimating(false)
        }, 350)
      }
      animFrame = requestAnimationFrame(tick)
    }

    animFrame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animFrame)
  }, [activeSlide])

  useEffect(() => {
    const timer = setTimeout(() => {
      setEcosystemVisible(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  const goTo = (i) => {
    if (i === activeSlide) return
    setAnimating(true)
    setTimeout(() => {
      setActiveSlide(i)
      setProgress(0)
      setAnimating(false)
    }, 350)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const slide = slides[activeSlide]

  const getLineEndPosition = (angle, radius = 110) => {
    const radian = (angle * Math.PI) / 180
    const x = 250 + radius * Math.cos(radian)
    const y = 250 + radius * Math.sin(radian)
    return { x, y }
  }

  const getNodePosition = (angle, radius = 140) => {
    const radian = (angle * Math.PI) / 180
    const x = 250 + radius * Math.cos(radian)
    const y = 250 + radius * Math.sin(radian)
    return { x, y }
  }

  return (
    <section className="expertise-hero">
      <div className="expertise-hero__inner">
        <div className={`expertise-hero__left${animating ? ' expertise-hero__left--out' : ''}`}>
          <span className="expertise-hero__overline">{slide.overline}</span>
          <h1 className="expertise-hero__h1">
            <span className="expertise-hero__h1a">{slide.h1a}</span>
            <span className="expertise-hero__h1b">{slide.h1b}</span>
          </h1>
          <p className="expertise-hero__sub">{slide.sub}</p>
          
          {slide.buttons && slide.buttons.length > 0 && (
            <div className="expertise-hero__ctas">
              {slide.buttons.map((btn, i) => (
                <button 
                  key={i} 
                  className={btn.className}
                  onClick={() => scrollToSection(btn.href)}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          )}
          
          <div className="expertise-hero__stats">
            {stats.map((s, i) => (
              <div className="expertise-hero__stat" key={i} style={{ animationDelay: `${750 + i * 100}ms` }}>
                <span className="expertise-hero__stat-val">{s.value}</span>
                <span className="expertise-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="expertise-hero__right">
          <div className={`ecosystem ${ecosystemVisible ? 'ecosystem--visible' : ''}`}>
            <svg className="ecosystem__lines" viewBox="0 0 500 500">
              {ecosystemNodes.map((node, i) => {
                const endPos = getLineEndPosition(node.angle)
                return (
                  <line
                    key={i}
                    x1="250"
                    y1="250"
                    x2={endPos.x}
                    y2={endPos.y}
                    stroke="rgba(0, 150, 255, 0.2)"
                    strokeWidth="1.5"
                    className="ecosystem__line"
                    style={{ animationDelay: `${node.delay}s` }}
                  />
                )
              })}
              <circle
                cx="250"
                cy="250"
                r="140"
                fill="none"
                stroke="rgba(0, 150, 255, 0.08)"
                strokeWidth="1"
                strokeDasharray="6,6"
                className="ecosystem__outer-ring"
              />
            </svg>

            <div className="ecosystem__center">
              <div className="ecosystem__center-pulse"></div>
              <div className="ecosystem__center-inner">
                <span className="ecosystem__center-text">EXP</span>
              </div>
            </div>

            {ecosystemNodes.map((node, i) => {
              const pos = getNodePosition(node.angle)
              return (
                <div
                  key={i}
                  className="ecosystem__node"
                  style={{
                    left: `${pos.x}px`,
                    top: `${pos.y}px`,
                    animationDelay: `${node.delay}s`,
                    '--node-color': node.color,
                    '--node-delay': `${node.delay}s`,
                  }}
                >
                  <div className="ecosystem__node-icon-bg" style={{ backgroundColor: `${node.color}15` }}>
                    <span className="ecosystem__node-icon" style={{ color: node.color }}>
                      {node.icon}
                    </span>
                  </div>
                  <span className="ecosystem__node-label">{node.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="expertise-hero__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`expertise-hero__dot${i === activeSlide ? ' expertise-hero__dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          >
            {i === activeSlide && (
              <span className="expertise-hero__dot-progress" style={{ transform: `scaleX(${progress})` }} />
            )}
          </button>
        ))}
      </div>
    </section>
  )
}