// Hero.jsx
import { useState, useEffect } from 'react';
import './Hero.css';

const slides = [
  {
    overline: 'Enterprise Technology Consulting',
    h1a: 'Transforming Enterprises',
    h1b: (
      <>
        for the <span className="grad-text">Digital</span> Age
      </>
    ),
    sub: 'Zeta-V delivers cutting-edge strategy, engineering, and advisory services across Financial Services, Healthcare, Manufacturing & Government.',
  },
  {
    overline: 'Strategy · Engineering · Advisory',
    h1a: 'Where Technology',
    h1b: (
      <>
        Meets <span className="grad-text">Purpose</span>
      </>
    ),
    sub: 'From boardroom strategy to deployment delivery — Zeta-V is your end-to-end transformation partner, embedded in your industry.',
  },
  {
    overline: 'Outcome-First Delivery',
    h1a: 'Powering the',
    h1b: (
      <>
        Enterprises of <span className="grad-text">Tomorrow</span>
      </>
    ),
    sub: 'We measure success by your business metrics — every engagement tied to KPIs that matter to your C-suite, delivered with precision.',
  },
];

const stats = [
  { value: '15+', label: 'Years' },
  { value: '500+', label: 'Projects' },
  { value: '40+', label: 'Clients' },
  { value: '12', label: 'Industries' },
];

// Simple icon components using SVG paths
const Icons = {
  Lightning: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

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
    <section id="about" className="hero">
      {/* Animated orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      {/* Grid overlay */}
      <div className="hero__grid" />

      <div className="hero__inner">
        {/* LEFT */}
        <div className={`hero__left${animating ? ' hero__left--out' : ''}`}>
          <span className="hero__overline">{slide.overline}</span>
          <h1 className="hero__h1">
            <span className="hero__h1a">{slide.h1a}</span>
            <span className="hero__h1b">{slide.h1b}</span>
          </h1>
          <p className="hero__sub">{slide.sub}</p>
          <div className="hero__ctas">
            <a href="#contact" className="btn-grad">
              Start Your Journey
              <span style={{ marginLeft: '8px', display: 'inline-flex', verticalAlign: 'middle' }}>
                <Icons.ArrowRight />
              </span>
            </a>
            <a href="#services" className="btn-outline">Explore Services</a>
          </div>
          <div className="hero__stats">
            {stats.map((s, i) => (
              <div className="hero__stat" key={i} style={{ animationDelay: `${750 + i * 100}ms` }}>
                <span className="hero__stat-val">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Dynamic Visual Ecosystem */}
        <div className="hero__right">
          <div className="hero__visual">
            {/* Core elements */}
            <div className="hero__core-sphere" />
            <div className="hero__core-ring" />
            
            {/* Floating cards */}
            <div className="hero__card hero__card--1">
              <div className="hero__card-line" />
              <div className="hero__card-dot" />
              <div className="hero__card-glow" />
            </div>
            <div className="hero__card hero__card--2">
              <div className="hero__card-chart" />
            </div>
            <div className="hero__card hero__card--3">
              <div className="hero__card-icon">
                <Icons.Lightning />
              </div>
            </div>
            
            {/* Ornamental elements */}
            <div className="hero__particle hero__particle--1" />
            <div className="hero__particle hero__particle--2" />
            <div className="hero__particle hero__particle--3" />
            <div className="hero__particle hero__particle--4" />
            
            {/* Central branding */}
            <div className="hero__glyph">ZV</div>
            
            {/* Tech lines */}
            <div className="hero__line hero__line--h" />
            <div className="hero__line hero__line--v" />
          </div>
        </div>
      </div>

      {/* Slide controls */}
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
    </section>
  );
}