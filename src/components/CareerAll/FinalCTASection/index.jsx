import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaHandshake, FaArrowRight } from 'react-icons/fa'  // Both from 'fa'
import { FiDownload } from 'react-icons/fi'  // Only FiDownload from 'fi'
import './FinalCTASection.css'

const ctaBgImage = 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1920'

export default function FinalCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="careers-cta" ref={ref}>
      <motion.div 
        className="careers-cta__bg-image"
        initial={{ scale: 1.1 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1.5 }}
        style={{ backgroundImage: `url(${ctaBgImage})` }}
      />
      <div className="careers-cta__overlay" />
      
      <div className="careers-cta__inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="careers-cta__badge">
            <FaHandshake />
            <span>Join Our Team</span>
          </div>
          <h2 className="careers-cta__title">
            Ready to <span className="grad-text">Build Your Future</span>?
          </h2>
          <p className="careers-cta__subtitle">
            Join Zeta-V and be part of something extraordinary. Let's build the future together.
          </p>
          <div className="careers-cta__actions">
            <a href="#open-positions" className="btn-primary btn-large">
              View All Jobs
              <FaArrowRight />
            </a>
            <button className="btn-outline btn-large">
              Upload Resume
              <FiDownload />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}