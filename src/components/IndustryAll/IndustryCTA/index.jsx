import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './IndustryCTA.css';

const IndustryCTA = () => {
  return (
    <section className="industry-cta">
      <div className="industry-cta__glow" />

      <motion.div 
        className="industry-cta__inner"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Left: Label + Heading + Description */}
        <div className="industry-cta__content">
          <motion.span 
            className="industry-cta__label"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Let's Build Together
          </motion.span>
          
          <motion.h2 
            className="industry-cta__heading"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Your Industry. Your Challenges.{' '}
            <span className="industry-cta__heading-gradient">Our Expertise.</span>
          </motion.h2>

          <motion.p 
            className="industry-cta__description"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Tell us your industry and what you're trying to solve. 
            We'll connect you with the right specialist within 24 hours.
          </motion.p>
        </div>

        {/* Right: Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.a 
            href="/contact" 
            className="industry-cta__button"
            whileHover={{ 
              y: -4, 
              scale: 1.03,
              boxShadow: '0 20px 44px rgba(37, 99, 235, 0.40)',
              background: 'linear-gradient(135deg, #1d4ed8, #0284c7)'
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <span>Contact Us</span>
            <motion.span
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight size={17} />
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default IndustryCTA;