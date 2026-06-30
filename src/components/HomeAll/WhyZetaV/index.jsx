// WhyZetaV.jsx
import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  HiOutlineSparkles,
  HiOutlineCloud,
  HiOutlineCpuChip,
  HiOutlineUsers,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiArrowUpRight,
  HiOutlineArrowRight
} from 'react-icons/hi2';
import { FaRocket, FaGlobe } from 'react-icons/fa';
import './WhyZetaV.css';

const valuePropositions = [
  {
    icon: FaRocket, // Changed from HiOutlineSparkles to FaRocket
    title: 'Technology Value Orchestration',
    body: 'We integrate emerging technologies such as Generative AI, machine learning, IoT, DevOps, and data engineering to build intelligent digital ecosystems.',
    gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
    color: '#22a7f0',
    delay: 0
  },
  {
    icon: HiOutlineCloud,
    title: 'Cloud & Digital Transformation',
    body: 'We guide organizations through cloud migration, application modernization, and enterprise architecture transformation.',
    gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
    color: '#34d399',
    delay: 0.1
  },
  {
    icon: HiOutlineCpuChip,
    title: 'Proven Value Multiplier Framework',
    body: 'Our proprietary frameworks help organizations move faster from strategy to implementation with measurable results.',
    gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    color: '#f472b6',
    delay: 0.2
  },
  {
    icon: FaGlobe, // Changed from HiOutlineUsers to FaGlobe
    title: 'Global Talent Ecosystem',
    body: 'Through our IT staff augmentation model, we help organizations access specialized technology talent quickly and efficiently.',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    color: '#f59e0b',
    delay: 0.3
  },
  {
    icon: HiOutlineChartBar,
    title: 'Data-Driven Intelligence',
    body: 'Our teams deliver data analytics services and business intelligence platforms that convert raw data into strategic insights.',
    gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
    color: '#a78bfa',
    delay: 0.4
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Secure & Scalable Systems',
    body: 'We implement robust cybersecurity services and DevOps practices to ensure high-performance, secure digital infrastructure.',
    gradient: 'linear-gradient(135deg, #22a7f0, #06b6d4)',
    color: '#22a7f0',
    delay: 0.5
  },
  {
    icon: HiArrowUpRight,
    title: 'Agile Execution Model',
    body: 'Rapid deployment, flexible engagement models, and global delivery capabilities for faster time-to-market.',
    gradient: 'linear-gradient(135deg, #34d399, #22a7f0)',
    color: '#34d399',
    delay: 0.6
  }
];


export default function WhyZetaV() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="why-zeta-premium" ref={sectionRef}>
      {/* Background Decorations */}
      <div className="why-zeta-bg">
        <div className="why-zeta-blob blob-1" />
        <div className="why-zeta-blob blob-2" />
        <div className="why-zeta-blob blob-3" />
        <div className="why-zeta-blob blob-4" />
      </div>

      {/* Floating Particles */}
      <div className="why-zeta-particles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="particle-why" 
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 8}s`,
              width: `${3 + Math.random() * 6}px`,
              height: `${3 + Math.random() * 6}px`,
              background: ['#22a7f0', '#6366f1', '#a78bfa', '#34d399', '#f472b6'][Math.floor(Math.random() * 5)]
            }}
          />
        ))}
      </div>

      <div className="why-zeta-container">
        {/* Header */}
        <motion.div 
          className="why-zeta-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="why-zeta-label">
            <span className="label-line" />
            <span className="label-text" style={{color:"#ffff"}}>Why Choose Us</span>
            <span className="label-line" />
          </div>
          
          <h2 className="why-zeta-title">
            Why Businesses Choose{' '}
            {/* <span className="gradient-text-why">Zeta-V</span> */}
               <span >Zeta-V</span>
            <span className="title-icon">✦</span>
          </h2>
          
          <p className="why-zeta-subtitle">
            Delivering measurable outcomes through technology, orchestration, and value-driven execution.
          </p>
        </motion.div>

        {/* Cards Grid - Masonry Style */}
        <div className="why-zeta-grid">
          {valuePropositions.map((item, index) => {
            const Icon = item.icon;
            const isLarge = index === 0 || index === 3 || index === 6;
            
            return (
              <motion.div
                key={index}
                className={`why-zeta-card ${isLarge ? 'large' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: item.delay }}
                whileHover={{ y: -8 }}
                style={{ '--card-color': item.color }}
              >
                <div className="why-zeta-card-glow" style={{ background: item.gradient }} />
                
                <div className="why-zeta-card-header">
                  {/* <div className="why-zeta-card-number">0{index + 1}</div> */}
                  <div className="why-zeta-card-icon" style={{ background: item.gradient }}>
                    <Icon />
                  </div>
                </div>
                
                <h3 className="why-zeta-card-title">{item.title}</h3>
                
                <p className="why-zeta-card-body">{item.body}</p>
                
                <div className="why-zeta-card-footer">
                  {/* <span className="why-zeta-card-learn">Learn More</span> */}
                  {/* <div className="why-zeta-card-arrow" style={{ background: item.gradient }}>
                    <HiOutlineArrowRight />
                  </div> */}
                </div>
                
                <div className="why-zeta-card-line" style={{ background: item.gradient }} />
              </motion.div>
            );
          })}
        </div>

     <motion.div 
  className="why-zeta-cta"
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.7, delay: 0.8 }}
>
  <div className="why-zeta-cta-content">
    <HiOutlineSparkles className="cta-sparkle" />
    <span>Ready to transform your business?</span>
  </div>
  <Link 
   to="/contact"
  state={{ scrollTo: 'enquiries' }} 
    className="why-zeta-cta-btn"
    // onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    <span>Start Your Journey</span>
    <HiOutlineArrowRight />
  </Link>
</motion.div>
      </div>

      {/* Bottom Edge */}
      <div className="why-zeta-bottom" />
    </section>
  );
}