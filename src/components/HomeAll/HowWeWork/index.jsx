// HowWeWork.jsx
import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  HiMagnifyingGlass,
  HiOutlinePencil,
  HiOutlineCodeBracket,
  HiOutlineChartBar,
  HiOutlineCheck,
  HiOutlineArrowRight,
  HiOutlineSparkles
} from 'react-icons/hi2';
import './HowWeWork.css';

const steps = [
  {
    id: '01',
    icon: HiMagnifyingGlass,
    title: 'Discover & Strategize',
    description: 'Understanding your business challenges and identifying technology opportunities that drive growth.',
    metrics: ['Discovery Sessions', 'Stakeholder Mapping', 'Technology Audit'],
    gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
    color: '#22a7f0',
    lightBg: 'rgba(34, 167, 240, 0.08)'
  },
  {
    id: '02',
    icon: HiOutlinePencil,
    title: 'Design & Architect',
    description: 'Create scalable technology frameworks tailored to your business goals and future needs.',
    metrics: ['Architecture Design', 'Roadmap Planning', 'Technology Selection'],
    gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
    color: '#34d399',
    lightBg: 'rgba(52, 211, 153, 0.08)'
  },
  {
    id: '03',
    icon: HiOutlineCodeBracket,
    title: 'Build & Integrate',
    description: 'Deploying solutions using modern architecture and global talent expertise.',
    metrics: ['Agile Development', 'System Integration', 'Quality Assurance'],
    gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    color: '#f472b6',
    lightBg: 'rgba(244, 114, 182, 0.08)'
  },
  {
    id: '04',
    icon: HiOutlineChartBar,
    title: 'Optimize & Scale',
    description: 'Continuous improvement through analytics, automation, and innovation.',
    metrics: ['Performance Monitoring', 'Automation', 'Continuous Innovation'],
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    color: '#f59e0b',
    lightBg: 'rgba(245, 158, 11, 0.08)'
  }
];

export default function HowWeWork() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="how-premium-light" ref={sectionRef}>
      {/* Background Decorations */}
      <div className="how-premium-light-bg">
        <div className="how-premium-light-blob hlblob-1" />
        <div className="how-premium-light-blob hlblob-2" />
        <div className="how-premium-light-blob hlblob-3" />
        <div className="how-premium-light-blob hlblob-4" />
      </div>

      <div className="how-premium-light-container">
        {/* Header */}
        <motion.div 
          className="how-premium-light-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="how-premium-light-label">
            <span className="label-line-light" />
            <span className="label-text-light">Our Process</span>
            <span className="label-line-light" />
          </div>
          
          <h2 className="how-premium-light-title">
            Our 
            {/* <span className="gradient-text-how-light">Value Delivery Model</span> */}
            <span > Value Delivery Model</span>
            <span className="title-icon-light">✦</span>
          </h2>
          
          <p className="how-premium-light-subtitle">
            Connecting ideas and systems to accelerate growth and multiply business value.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="how-premium-light-steps">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                className="how-premium-light-step"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                style={{ '--step-color': step.color }}
              >
                <div className="how-premium-light-step-glow" style={{ background: step.gradient }} />
                
                <div className="how-premium-light-step-top">
                  <div className="how-premium-light-step-icon" style={{ background: step.gradient }}>
                    <Icon />
                  </div>
                  {/* <span className="how-premium-light-step-number">{step.id}</span> */}
                </div>
                
                <h3 className="how-premium-light-step-title">{step.title}</h3>
                
                <p className="how-premium-light-step-description">{step.description}</p>
                
                <div className="how-premium-light-step-metrics">
                  {step.metrics.map((metric, i) => (
                    <div key={i} className="how-premium-light-step-metric">
                      <HiOutlineCheck className="metric-check-light" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
                
                <div className="how-premium-light-step-line" style={{ background: step.gradient }} />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <motion.div 
          className="how-premium-light-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="how-premium-light-cta-content">
            <HiOutlineSparkles className="cta-sparkle-light" />
            <span>Ready to start your transformation journey?</span>
          </div>
          <a href="/contact" className="how-premium-light-cta-btn">
            <span>Get Started</span>
            <HiOutlineArrowRight />
          </a>
        </motion.div> */}
      </div>

      {/* Bottom Edge */}
      <div className="how-premium-light-bottom" />
    </section>
  );
}