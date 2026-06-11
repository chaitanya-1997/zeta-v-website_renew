// src/components/AdvisoryAll/AdvisoryHero/Index.jsx
import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import heroImg from "../../../assets/images/Hero3.jpg"

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

const stats = [
  { value: '50+', label: 'Advisory Projects' },
  { value: '30+', label: 'Global Clients' },
  { value: '95%', label: 'Success Rate' },
  { value: '10+', label: 'Years Experience' },
];

export default function AdvisoryHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section className="hero" ref={ref}>
      <div className="hero__bg">
        <motion.div 
          className="hero__bg-image"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.1, 1] }}
          style={{ backgroundImage: `url(${heroImg})` }}
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
        <div className="hero__left">
          <motion.div style={{ y }}>
            <span className="hero__overline">Strategic Advisory Services</span>
            <h1 className="hero__h1">
              <span className="hero__h1a">Business</span>
              <span className="hero__h1b">
                <span className="grad-text">Advisories</span> that turn Strategy Into Value.
              </span>
            </h1>
            <p className="hero__sub">
              Driving sustainable growth, market expansion,
              strategic transactions, and technology transformation
              through expert advisory and execution excellence.
            </p>
            <div className="hero__ctas">
              <a href="#advisories" className="btn-grad">
                Explore Advisories
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-outline">
                Talk to Experts
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
          </motion.div>
        </div>

        {/* RIGHT SIDE - Glassmorphic Visual Elements */}
        
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