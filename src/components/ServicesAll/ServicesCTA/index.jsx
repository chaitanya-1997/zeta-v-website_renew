// src/components/ServicesAll/ServicesCTA/Index.jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaHandshake } from 'react-icons/fa'
import './ServicesCTA.css'

export default function ServicesCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="svc-cta" ref={ref}>
      <div className="svc-cta__grid-bg" />
      <div className="svc-cta__orb svc-cta__orb--1" />
      <div className="svc-cta__orb svc-cta__orb--2" />

      <div className="svc-cta__inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="svc-cta__icon">
            <FaHandshake />
          </div>
          <h2 className="svc-cta__title">
            Ready to <span className="svc-grad-text">Transform</span> Your Business?
          </h2>
          <p className="svc-cta__sub">
            Partner with Zeta-V to accelerate your digital journey with AI-driven solutions,
            cloud transformation, and enterprise IT consulting services. Let's build scalable,
            secure, and future-ready systems for your business.
          </p>
          <div className="svc-cta__actions">
            <a href="#contact" className="svc-btn svc-btn--primary svc-btn--large">
              Schedule a Consultation
            </a>
            <a href="#contact" className="svc-btn svc-btn--outline">
              Contact Us Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}