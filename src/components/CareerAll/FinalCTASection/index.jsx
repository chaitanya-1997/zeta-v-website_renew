// FinalCTASection.jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaHandshake, FaArrowRight } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi2'
import './FinalCTASection.css'
import ctaBgImage from '../../../assets/pexels/pexels-photo-3.avif';

export default function FinalCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="final-cta-premium" ref={ref}>
      {/* Background Image */}
      <div className="final-cta-premium-bg">
        <div 
          className="final-cta-premium-bg-image" 
          style={{ backgroundImage: `url(${ctaBgImage})` }}
        />
        <div className="final-cta-premium-overlay" />
        <div className="final-cta-premium-gradient" />
      </div>

      {/* Animated Orbs */}
      <div className="final-cta-premium-orbs">
        <div className="cta-orb cta-orb-1" />
        <div className="cta-orb cta-orb-2" />
        <div className="cta-orb cta-orb-3" />
      </div>

      <div className="final-cta-premium-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
        
          <div className="industry-cards-premium-label">
           <span className="label-line" />
            <span className="label-text" style={{color:'white'}}>Join Our Team</span>
                <span className="label-line" />
         </div>
          
          
         

          {/* Title */}
          <motion.h2 
            className="final-cta-premium-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Ready to 
            {/* <span className="gradient-text-final">Build Your Future</span> */}
            <span> Build Your Future</span>
            <span className="title-icon-final">✦</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            className="final-cta-premium-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Join Zeta-V and be part of something extraordinary. 
            Let's build the future together.
          </motion.p>

          {/* Actions */}
          {/* <motion.div 
            className="final-cta-premium-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a href="#open-positions" className="final-cta-premium-btn primary">
              <span>View All Jobs</span>
              <FaArrowRight />
            </a>
            <button className="final-cta-premium-btn secondary">
              <span>Upload Resume</span>
              <FiDownload />
            </button>
          </motion.div> */}

          {/* Trust Indicator */}
          <motion.div 
            className="final-cta-premium-trust"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="trust-avatars">
              <div className="trust-avatar" style={{ background: '#22a7f0' }}>Z</div>
              <div className="trust-avatar" style={{ background: '#6366f1' }}>V</div>
              <div className="trust-avatar" style={{ background: '#34d399' }}>T</div>
              <div className="trust-avatar" style={{ background: '#f472b6' }}>+</div>
            </div>
            <span className="trust-text">Trusted by 200+ professionals worldwide</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Edge */}
      <div className="final-cta-premium-bottom" />
    </section>
  )
}