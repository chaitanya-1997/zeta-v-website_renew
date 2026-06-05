import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './PageBackground.css'

export default function PageBackground() {
  const scrollPathRef = useRef(null)

  // Scroll-based SVG path reveal
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const docHeight = document.body.scrollHeight - window.innerHeight
      const scrollPercent = Math.min(scrollTop / docHeight, 1)
      document.documentElement.style.setProperty('--scroll-progress', scrollPercent)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="page-bg">
      {/* Layer 2: Blueprint Grid */}
      <div className="page-bg__grid" />

      {/* Layer 3: Animated Mesh Gradients using Framer Motion */}
      <motion.div
        className="page-bg__mesh page-bg__mesh--1"
        animate={{
          x: [0, 60, -30, 20, 0],
          y: [0, -40, -70, -20, 0],
          scale: [1, 1.12, 0.92, 1.06, 1],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="page-bg__mesh page-bg__mesh--2"
        animate={{
          x: [0, -50, 30, -15, 0],
          y: [0, 30, -20, -50, 0],
          scale: [1, 0.9, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 65,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="page-bg__mesh page-bg__mesh--3"
        animate={{
          x: [0, 40, -25, -45, 0],
          y: [0, -25, 35, -15, 0],
          scale: [1, 1.05, 0.88, 1.1, 1],
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Technology Pathway SVG - Reveals on scroll */}
      <svg className="page-bg__pathway" viewBox="0 0 4 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="pathGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(32,184,255,0.15)" />
            <stop offset="50%" stopColor="rgba(11,111,232,0.1)" />
            <stop offset="100%" stopColor="rgba(32,184,255,0.05)" />
          </linearGradient>
        </defs>
        <line
          x1="2" y1="0" x2="2" y2="100"
          stroke="url(#pathGlow)"
          strokeWidth="2"
          strokeLinecap="round"
          className="pathway-line"
        />
        <line
          x1="2" y1="0" x2="2" y2="100"
          stroke="rgba(11,111,232,0.08)"
          strokeWidth="0.8"
          strokeLinecap="round"
          className="pathway-line-core"
        />
      </svg>
    </div>
  )
}