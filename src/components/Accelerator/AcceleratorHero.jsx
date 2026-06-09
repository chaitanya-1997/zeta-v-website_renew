// src/components/AcceleratorAll/AcceleratorHero/Index.jsx
import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'


import heroSlide3 from '../../assets/images/hero-slide-3.jpg'

const slides = [
  {
    overline: 'Business Accelerator',
    h1a: 'Accelerating',
    h1b: <>Digital <span className="grad-text">Growth</span></>,
    sub: 'Enterprise-grade transformation systems designed to scale operations, optimize performance, and accelerate innovation.',
    bgImage: heroSlide3,
    techIcon: 'digital'
  },
  {
    overline: 'Strategic Frameworks',
    h1a: 'Powered by',
    h1b: <>Proven <span className="grad-text">Methodologies</span></>,
    sub: 'HexaFit, PROMAF, and RE-FIVE frameworks engineered for enterprise acceleration and measurable business outcomes.',
    bgImage: heroSlide3,
    techIcon: 'ai'
  },
  {
    overline: 'Measurable Impact',
    h1a: 'Delivering',
    h1b: <>Real <span className="grad-text">Results</span></>,
    sub: 'From digital transformation to AI enablement — our frameworks drive operational excellence and scalable growth.',
    bgImage: heroSlide3,
    techIcon: 'analytics'
  },
]

const stats = [
  { value: '4', label: 'Frameworks' },
  { value: '12+', label: 'Modules' },
  { value: '90%', label: 'Success Rate' },
  { value: '6x', label: 'Avg. ROI' },
]

// SVG Icons matching Home Hero
const Icons = {
  Lightning: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  Digital: () => (
    <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="url(#grad1)" strokeWidth="1.5" fill="none"/>
      <path d="M12 8V12L15 15" stroke="url(#grad1)" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="2" fill="url(#grad1)"/>
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00B4FF"/>
          <stop offset="100%" stopColor="#0D47A1"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  AI: () => (
    <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#grad2)" strokeWidth="1.5" fill="none"/>
      <path d="M2 17L12 22L22 17" stroke="url(#grad2)" strokeWidth="1.5" fill="none"/>
      <path d="M2 12L12 17L22 12" stroke="url(#grad2)" strokeWidth="1.5" fill="none"/>
      <circle cx="12" cy="12" r="2" fill="url(#grad2)"/>
      <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00B4FF"/>
          <stop offset="100%" stopColor="#0D47A1"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  Analytics: () => (
    <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
      <path d="M21 21H3V3" stroke="url(#grad3)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 15L10 11L13 14L20 6" stroke="url(#grad3)" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="7" cy="15" r="2" fill="#00B4FF"/>
      <circle cx="10" cy="11" r="2" fill="#1565C0"/>
      <circle cx="13" cy="14" r="2" fill="#2196F3"/>
      <circle cx="20" cy="6" r="2" fill="#0D47A1"/>
      <defs>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00B4FF"/>
          <stop offset="100%" stopColor="#0D47A1"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  Cloud: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M6 16C3.8 16 2 14.2 2 12C2 9.8 3.8 8 6 8C6.1 8 6.2 8 6.3 8C6.8 5.7 8.9 4 11.3 4C14.2 4 16.6 6.3 16.8 9.2C18.1 9.6 19.1 10.7 19.4 12.1C20.3 12.6 21 13.5 21 14.5C21 16.4 19.4 18 17.5 18H6Z" stroke="url(#grad4)" strokeWidth="1.5" fill="none"/>
      <defs>
        <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00B4FF"/>
          <stop offset="100%" stopColor="#0D47A1"/>
        </linearGradient>
      </defs>
    </svg>
  )
};

export default function AcceleratorHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const SLIDE_DURATION = 5500;

  useEffect(() => {
    let startTime = Date.now();
    let animFrame;

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(elapsed / SLIDE_DURATION, 1);
      setProgress(pct);
      if (pct >= 1) {
        startTime = Date.now();
        setAnimating(true);
        setTimeout(() => {
          setActiveSlide((s) => (s + 1) % slides.length);
          setAnimating(false);
        }, 350);
      }
      animFrame = requestAnimationFrame(tick);
    };

    animFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrame);
  }, [activeSlide]);

  const goTo = (i) => {
    if (i === activeSlide) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveSlide(i);
      setProgress(0);
      setAnimating(false);
    }, 350);
  };

  const slide = slides[activeSlide];

  return (
    <section className="hero" ref={ref}>
      <div className="hero__bg">
        <motion.div 
          className="hero__bg-image"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.1, 1] }}
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        />
        <div className="hero__bg-overlay"></div>
      </div>

      {/* Stars background */}
      <div className="hero__stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>

      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="hero__floating-icons">
        <div className="float-icon float-icon-1"><Icons.Cloud /></div>
        <div className="float-icon float-icon-2"><Icons.Digital /></div>
        <div className="float-icon float-icon-3"><Icons.AI /></div>
        <div className="float-icon float-icon-4"><Icons.Analytics /></div>
      </div>

      <div className="hero__inner">
        {/* LEFT SIDE */}
        <div className={`hero__left${animating ? ' hero__left--out' : ''}`}>
          <motion.span 
            className="hero__overline"
            style={{ y }}
          >
            {slide.overline}
          </motion.span>
          <motion.h1 
            className="hero__h1"
            style={{ y }}
          >
            <span className="hero__h1a">{slide.h1a}</span>
            <span className="hero__h1b">{slide.h1b}</span>
          </motion.h1>
          <motion.p 
            className="hero__sub"
            style={{ y }}
          >
            {slide.sub}
          </motion.p>
          
          {slide.buttons && slide.buttons.length > 0 && (
            <motion.div 
              className="hero__ctas"
              style={{ y }}
            >
              {slide.buttons.map((btn, i) => (
                <a 
                  key={i} 
                  href={`#${btn.href}`}
                  className={btn.className}
                >
                  {btn.label}
                </a>
              ))}
            </motion.div>
          )}
          
          <motion.div 
            className="hero__stats"
            style={{ y }}
          >
            {stats.map((s, i) => (
              <div className="hero__stat" key={i}>
                <span className="hero__stat-val">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

     
      </div>

      <div className="hero__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot${i === activeSlide ? ' hero__dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          >
            {i === activeSlide && (
              <span
                className="hero__dot-progress"
                style={{ transform: `scaleX(${progress})` }}
              />
            )}
          </button>
        ))}
      </div>

      <motion.div 
        className="hero__scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span>Scroll to explore</span>
        <div className="hero__scroll-dot" />
      </motion.div>
    </section>
  )
}