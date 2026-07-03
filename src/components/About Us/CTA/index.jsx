// CTA.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Rocket, ChevronRight } from "lucide-react";
import "./CTA.css";
import { Link } from 'react-router-dom';
import ctaBg from '../../../assets/pexels/pexels-photo-1.avif';
// Import your CTA background image

export default function CTA() {
  return (
    <section className="cta-section-premium">
      {/* Background Image with Overlays */}
      <div className="cta-bg-wrapper">
        <img src={ctaBg} alt="" className="cta-bg-image" />
        <div className="cta-bg-overlay" />
        <div className="cta-bg-gradient" />
        <div className="cta-bg-pattern" />
      </div>

      {/* Floating Decorations */}
      <div className="cta-floating-elements">
        <div className="cta-float-icon float-1">
          <Sparkles size={20} />
        </div>
        <div className="cta-float-icon float-2">
          <Rocket size={20} />
        </div>
        <div className="cta-float-dot dot-1" />
        <div className="cta-float-dot dot-2" />
        <div className="cta-float-dot dot-3" />
      </div>

      <motion.div
        className="cta-container-premium"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Badge */}
        <motion.div
          className="cta-badge-premium"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Sparkles size={14} />
          <span>Let's Build Something Great</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="cta-title-premium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Ready to Multiply Your
          <br />
          {/* <span className="cta-title-highlight">Business Value?</span> */}
           <span >Business Value?</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="cta-subtitle-premium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Let's find the right solution together and transform your vision into reality.
        </motion.p>

        {/* Button Group */}
        <motion.div
          className="cta-button-group-premium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
         <Link 
 to="/contact"
  state={{ scrollTo: 'enquiries' }} 
  className="cta-btn-primary"
  // onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  <span>Get in Touch</span>
  <ArrowRight size={18} />
</Link>

<Link 
  to="/services" 
  className="cta-btn-secondary"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  <span>View Services</span>
  <ChevronRight size={18} />
</Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="cta-trust-indicators"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="trust-item">
            <span className="trust-number">98%</span>
            <span className="trust-label">Client Satisfaction</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-number">242+</span>
            <span className="trust-label">Projects Delivered</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-number">9+</span>
            <span className="trust-label">Years Excellence</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Decorative Edge */}
      <div className="cta-bottom-edge" />
    </section>
  );
}