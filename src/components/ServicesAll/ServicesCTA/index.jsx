// ServicesCTA.jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaHandshake, FaArrowRight } from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi2'
import './ServicesCTA.css'
import { Link } from 'react-router-dom';

export default function ServicesCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="svc-cta-premium" ref={ref}>
      {/* Background Image */}
      <div className="svc-cta-premium-bg">
        <div 
          className="svc-cta-premium-bg-image"
          style={{ 
            backgroundImage: `url(https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920)`
          }}
        />
        <div className="svc-cta-premium-overlay">
          <div className="svc-cta-premium-gradient" />
        </div>
      </div>

      {/* Animated Orbs */}
      <div className="svc-cta-premium-orbs">
        <div className="scta-orb scta-orb-1" />
        <div className="scta-orb scta-orb-2" />
        <div className="scta-orb scta-orb-3" />
      </div>

      <div className="svc-cta-premium-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <motion.div 
            className="svc-cta-premium-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <HiOutlineSparkles className="badge-icon" />
            <span>Let's Build Something Great</span>
          </motion.div>

          {/* Icon */}
          <motion.div 
            className="svc-cta-premium-icon"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <FaHandshake />
          </motion.div>

          {/* Title */}
          <motion.h2 
            className="svc-cta-premium-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Ready to  Transform Your Business?
            {/* <span className="gradient-text-scta">Transform</span>  */}
           
            <span className="title-icon">✦</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            className="svc-cta-premium-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Partner with Zeta-V to accelerate your digital journey with AI-driven solutions,
            cloud transformation, and enterprise IT consulting services. Let's build scalable,
            secure, and future-ready systems for your business.
          </motion.p>

          {/* Actions */}
     <motion.div 
  className="svc-cta-premium-actions"
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ delay: 0.6, duration: 0.6 }}
>
  <Link 
   to="/contact"
  state={{ scrollTo: 'enquiries' }} 
    className="svc-cta-premium-btn secondary"
    // onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    Contact Us Today
  </Link>
</motion.div>

         
        </motion.div>
      </div>

      {/* Bottom Edge */}
      <div className="svc-cta-premium-bottom" />
    </section>
  )
}