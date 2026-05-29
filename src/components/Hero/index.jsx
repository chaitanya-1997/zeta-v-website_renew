// Hero.jsx
import { useState, useEffect } from 'react';
import './Hero.css';

const slides = [
  {
    overline: 'IT Consulting & Digital Transformation',
    h1a: 'Zeta-V',
    h1b: (
      <>
        IT Consulting & Digital <span className="grad-text">Transformation</span>
      </>
    ),
    sub: 'Simplifying digital transformation across India and globally with scalable, enterprise-ready technology.',
    bgImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format")',
    techIcon: 'digital'
  },
  {
    overline: 'Transforming Ideas into Value',
    h1a: 'Zeta-V',
    h1b: (
      <>
        Transforming <span className="grad-text">Ideas into Value</span>
      </>
    ),
    sub: 'Cloud modernization, AI innovation & scalable tech ecosystems for enterprises.',
    bgImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format")',
    techIcon: 'ai'
  },
  {
    overline: 'Empowering Global Businesses',
    h1a: 'Zeta-V',
    h1b: (
      <>
        Software Development & <span className="grad-text">Strategic IT Outsourcing</span>
      </>
    ),
    sub: 'Global workforce & scalable tech to lead in the AI-driven economy.',
    bgImage: 'url("https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2074&auto=format")',
    techIcon: 'analytics'
  },
];

const stats = [
  { value: '100+', label: 'Global Clients' },
  { value: '200+', label: 'Consultants' },
  { value: '100+', label: 'Projects' },
  { value: '90%+', label: 'Retention' },
];

// Enhanced SVG Icons
const Icons = {
  Lightning: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Digital: () => (
    <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="url(#grad1)" strokeWidth="1.5" fill="none"/>
      <path d="M12 8V12L15 15" stroke="url(#grad1)" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="2" fill="url(#grad1)"/>
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0D47A1"/>
          <stop offset="100%" stopColor="#00B4FF"/>
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
          <stop offset="0%" stopColor="#0D47A1"/>
          <stop offset="100%" stopColor="#00B4FF"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  Analytics: () => (
    <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
      <path d="M21 21H3V3" stroke="url(#grad3)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 15L10 11L13 14L20 6" stroke="url(#grad3)" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="7" cy="15" r="2" fill="#0D47A1"/>
      <circle cx="10" cy="11" r="2" fill="#1565C0"/>
      <circle cx="13" cy="14" r="2" fill="#2196F3"/>
      <circle cx="20" cy="6" r="2" fill="#00B4FF"/>
      <defs>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0D47A1"/>
          <stop offset="100%" stopColor="#00B4FF"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  Cloud: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M6 16C3.8 16 2 14.2 2 12C2 9.8 3.8 8 6 8C6.1 8 6.2 8 6.3 8C6.8 5.7 8.9 4 11.3 4C14.2 4 16.6 6.3 16.8 9.2C18.1 9.6 19.1 10.7 19.4 12.1C20.3 12.6 21 13.5 21 14.5C21 16.4 19.4 18 17.5 18H6Z" stroke="url(#grad4)" strokeWidth="1.5" fill="none"/>
      <defs>
        <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0D47A1"/>
          <stop offset="100%" stopColor="#00B4FF"/>
        </linearGradient>
      </defs>
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
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__bg-image" style={{ backgroundImage: slide.bgImage }}></div>
        <div className="hero__bg-overlay"></div>
      </div>

      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="hero__grid" />

      <div className="hero__floating-icons">
        <div className="float-icon float-icon-1"><Icons.Cloud /></div>
        <div className="float-icon float-icon-2"><Icons.Digital /></div>
        <div className="float-icon float-icon-3"><Icons.AI /></div>
        <div className="float-icon float-icon-4"><Icons.Analytics /></div>
      </div>

      <div className="hero__inner">
        {/* LEFT SIDE */}
        <div className={`hero__left${animating ? ' hero__left--out' : ''}`}>
          <span className="hero__overline">{slide.overline}</span>
          <h1 className="hero__h1">
            <span className="hero__h1a">{slide.h1a}</span>
            <span className="hero__h1b">{slide.h1b}</span>
          </h1>
          <p className="hero__sub">{slide.sub}</p>
          <div className="hero__ctas">
            <a href="#services" className="btn-grad">
              Explore Our Services →
            </a>
            <a href="#contact" className="btn-outline">
              Start Your Digital Transformation →
            </a>
          </div>
          <div className="hero__stats">
            {stats.map((s, i) => (
              <div className="hero__stat" key={i}>
                <span className="hero__stat-val">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - Visual Only (No Supporting Text) */}
        <div className="hero__right">
          <div className="hero__visual">
            <div className="hero__tech-illustration">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
                alt="Tech"
                className="tech-img tech-img-1"
              />
              <img 
                src="https://cdn-icons-png.flaticon.com/512/2111/2111612.png"
                alt="AI"
                className="tech-img tech-img-2"
              />
              <img 
                src="https://cdn-icons-png.flaticon.com/512/1907/1907594.png"
                alt="Analytics"
                className="tech-img tech-img-3"
              />
            </div>

            <div className="hero__core-sphere" />
            <div className="hero__core-ring" />
            
            <div className="hero__card hero__card--1">
              <div className="hero__card-line" />
              <div className="hero__card-dot" />
              <div className="hero__card-glow" />
              <div className="hero__card-icon-small">
                <Icons.Lightning />
              </div>
            </div>
            
            <div className="hero__card hero__card--2">
              <div className="hero__card-chart" />
            </div>
            
            <div className="hero__card hero__card--3">
              <div className="hero__card-icon">
                {slide.techIcon === 'digital' && <Icons.Digital />}
                {slide.techIcon === 'ai' && <Icons.AI />}
                {slide.techIcon === 'analytics' && <Icons.Analytics />}
              </div>
            </div>
            
            <div className="hero__particle hero__particle--1" />
            <div className="hero__particle hero__particle--2" />
            <div className="hero__particle hero__particle--3" />
            <div className="hero__particle hero__particle--4" />
            
            <div className="hero__glyph">ZV</div>
            
            <div className="hero__line hero__line--h" />
            <div className="hero__line hero__line--v" />
          </div>
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
    </section>
  );
}