import { useState, useEffect } from 'react'
import './GalleryHero.css'

const slides = [
  {
    overline: 'Our Gallery',
    h1a: 'Capturing',
    h1b: (
      <>Innovation <span className="grad-text">In Action</span></>
    ),
    sub: 'Explore moments from our projects, collaborations, enterprise solutions, and digital transformation journeys.',
  },
  {
    overline: 'Visual Stories',
    h1a: 'Where',
    h1b: (
      <>Creativity <span className="grad-text">Meets Tech</span></>
    ),
    sub: 'A curated collection of our finest work showcasing innovation, design excellence, and technological prowess.',
  },
  {
    overline: 'Our Portfolio',
    h1a: 'Showcasing',
    h1b: (
      <>Digital <span className="grad-text">Excellence</span></>
    ),
    sub: 'From concept to deployment — witness the journey of transformative digital solutions across industries.',
  },
]

export default function GalleryHero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [progress, setProgress] = useState(0)

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

  const goTo = (i) => {
    if (i === activeSlide) return
    setAnimating(true)
    setTimeout(() => {
      setActiveSlide(i)
      setProgress(0)
      setAnimating(false)
    }, 350)
  }

  const slide = slides[activeSlide]

  return (
    <section className="gallery-hero">
      {/* Animated orbs */}
      <div className="gallery-hero__orb gallery-hero__orb--1" />
      <div className="gallery-hero__orb gallery-hero__orb--2" />
      <div className="gallery-hero__orb gallery-hero__orb--3" />

      {/* Grid overlay */}
      <div className="gallery-hero__grid" />

      <div className="gallery-hero__inner">
        {/* LEFT */}
        <div className={`gallery-hero__left${animating ? ' gallery-hero__left--out' : ''}`}>
          <span className="gallery-hero__overline">{slide.overline}</span>
          <h1 className="gallery-hero__h1">
            <span className="gallery-hero__h1a">{slide.h1a}</span>
            <span className="gallery-hero__h1b">{slide.h1b}</span>
          </h1>
          <p className="gallery-hero__sub">{slide.sub}</p>
          <div className="gallery-hero__ctas">
            <a href="#gallery-grid" className="btn-grad">View Gallery →</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </div>
        </div>

        {/* RIGHT — Floating visual */}
        <div className="gallery-hero__right">
          <div className="gallery-visual">
            <div className="gallery-visual__card gallery-visual__card--1">
              <div className="gallery-visual__img-placeholder"></div>
            </div>
            <div className="gallery-visual__card gallery-visual__card--2">
              <div className="gallery-visual__img-placeholder small"></div>
            </div>
            <div className="gallery-visual__card gallery-visual__card--3">
              <div className="gallery-visual__img-placeholder tiny"></div>
            </div>
            <div className="gallery-visual__sphere" />
            <div className="gallery-visual__ring" />
            <div className="gallery-visual__glyph">GLR</div>
          </div>
        </div>
      </div>

      {/* Slide controls */}
      <div className="gallery-hero__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`gallery-hero__dot${i === activeSlide ? ' gallery-hero__dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          >
            {i === activeSlide && (
              <span
                className="gallery-hero__dot-progress"
                style={{ transform: `scaleX(${progress})` }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  )
}