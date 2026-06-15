// src/components/AboutAll/AboutHero.jsx
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaRocket } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import heroBg from "../../../assets/about/hero.jpg";

export default function AboutHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section ref={ref} className="hero">
      <div className="hero__bg">
        <motion.div 
          className="hero__bg-image"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.1, 1] }}
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="hero__bg-overlay"></div>
      </div>

      <div className="hero__stars">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="star"></div>
        ))}
      </div>

      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="hero__inner">
        <div className="hero__left">
          <motion.div style={{ y }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="hero__chip">
                <FaRocket className="hero__chip-icon" />
                <span className="hero__overline">Trusted Technology Partner Since 2021</span>
              </span>
            </motion.div>

            <motion.h1
              className="hero__h1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <span className="hero__h1a">Building Scalable</span>
              <span className="hero__h1b">
                <span className="grad-text">Digital Solutions</span> for Modern Businesses
              </span>
            </motion.h1>

            <motion.p
              className="hero__sub"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              We help startups and enterprises accelerate growth through AI, cloud, web, 
              mobile, and enterprise technology solutions.
            </motion.p>

            <motion.div
              className="hero__ctas"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <a href="/contact" className="btn-grad">
                Begin Your Transformation <FiArrowUpRight />
              </a>
              <a href="/services" className="btn-outline">
                Explore Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* <motion.div 
        className="hero__scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span>Discover Our Story</span>
        <div className="hero__scroll-dot" />
      </motion.div> */}
    </section>
  )
}