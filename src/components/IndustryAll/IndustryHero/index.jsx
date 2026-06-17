import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import heroBg from '../../../assets/industy/heroind.png';
import './IndustryHero.css';

const IndustryHero = () => {
  const sectionRef = useRef(null);
  const trustRef = useRef(null);
  const isTrustInView = useInView(trustRef, { once: true, margin: "-100px" });
  
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 50]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.2]);
  const contentY = useTransform(scrollY, [0, 400], [0, -25]);

  // Counter animation
  const useCountUp = (end, duration = 2, startCounting = false) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!startCounting) return;
      
      let startTime = null;
      let animationFrame;
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * end));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
      
      return () => {
        if (animationFrame) cancelAnimationFrame(animationFrame);
      };
    }, [startCounting, end, duration]);
    
    return count;
  };

  const yearsCount = useCountUp(15, 2, isTrustInView);
  const projectsCount = useCountUp(200, 2.2, isTrustInView);
  const satisfactionCount = useCountUp(98, 2, isTrustInView);

  return (
    <section className="industry-hero" ref={sectionRef}>
      {/* Background Image */}
      <motion.div 
        className="industry-hero__bg"
        style={{ y: bgY }}
      >
        <img 
          src={heroBg} 
          alt="" 
          className="industry-hero__bg-image"
        />
        <div className="industry-hero__bg-overlay" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="industry-hero__inner"
        style={{ y: contentY, opacity }}
      >
        <div className="industry-hero__content">
          
          {/* Vertical accent line */}
          <div className="industry-hero__accent-line" aria-hidden="true" />

          {/* Overline */}
          <motion.span 
            className="industry-hero__overline"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Industry Solutions
          </motion.span>

          {/* Headline */}
          <h1 className="industry-hero__heading">
            <motion.span 
              className="industry-hero__heading-line hero-title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
            >
              Digital Transformation
            </motion.span>
            <motion.span 
              className="industry-hero__heading-line hero-subtitle"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.42 }}
            >
              for Modern{' '}
              <span className="industry-hero__gradient-text">
                Industries
              </span>
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p 
            className="industry-hero__description hero-description"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            Helping Financial, Healthcare, Manufacturing and Government 
            organizations scale with AI, Cloud and Data Intelligence.
          </motion.p>

          {/* CTA — Linked to industries cards section */}
          <motion.div 
            className="industry-hero__ctas"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <motion.a 
              href="#industries-cards"
              className="industry-hero__btn-primary"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore Industries</span>
              <motion.svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5"
                strokeLinecap="round" 
                strokeLinejoin="round"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </motion.svg>
            </motion.a>
          </motion.div>

          {/* Trust Bar */}
          <motion.div 
            ref={trustRef}
            className="industry-hero__trust"
            initial={{ opacity: 0, y: 15 }}
            animate={isTrustInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="industry-hero__trust-item">
              <span className="industry-hero__trust-number">{yearsCount}+</span>
              <span className="industry-hero__trust-label">Years Experience</span>
            </div>
            <motion.div 
              className="industry-hero__trust-divider"
              initial={{ scaleY: 0 }}
              animate={isTrustInView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.45 }}
            />
            <div className="industry-hero__trust-item">
              <span className="industry-hero__trust-number">{projectsCount}+</span>
              <span className="industry-hero__trust-label">Projects Delivered</span>
            </div>
            <motion.div 
              className="industry-hero__trust-divider"
              initial={{ scaleY: 0 }}
              animate={isTrustInView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.65 }}
            />
            <div className="industry-hero__trust-item">
              <span className="industry-hero__trust-number">{satisfactionCount}%</span>
              <span className="industry-hero__trust-label">Client Satisfaction</span>
            </div>
          </motion.div>

        </div>
      </motion.div>

     
    </section>
  );
};

export default IndustryHero;