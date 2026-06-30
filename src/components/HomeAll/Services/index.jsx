// Services.jsx
import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe } from 'react-icons/fa';
import {
  HiOutlineSparkles,
  HiOutlineCloud,
  HiOutlineCpuChip,
  HiOutlineUsers,
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
  HiOutlineArrowTrendingUp ,
  HiOutlineCodeBracket ,
  HiOutlineArrowRight
} from 'react-icons/hi2';
import './Services.css';

const serviceCategories = [
  {
    id: 'digital',
    icon: HiOutlineSparkles,
    title: 'Digital Acceleration',
    subServices: ['Strategy Consulting', 'Analytics & Automation', 'Digital Footprint', 'Co-creation & Monetization'],
    gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
    color: '#22a7f0'
  },
  {
    id: 'enterprise',
    icon: HiOutlineCpuChip,
    title: 'Enterprise Transformation',
    subServices: ['Strategy & Selection', 'Legacy Transformation', 'Enterprise Technologies', 'Engineering Solutions'],
    gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
    color: '#34d399'
  },
  {
    id: 'workforce',
    icon: HiOutlineUsers,
    title: 'Workforce Management',
    subServices: ['Staff Augmentation', 'Deployment Support', 'Lateral Hiring', 'Program Management'],
    gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    color: '#f472b6'
  },
  {
    id: 'shared',
    icon: HiOutlineGlobeAlt,
    title: 'Shared Services',
    subServices: ['Incorporation Services', 'Compliance & Taxation', 'Sustenance Services', 'Managed Infrastructure'],
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    color: '#f59e0b'
  }
];

const technologyServices = [
  {
    icon: HiOutlineCloud,
    title: 'Cloud Services',
    description: 'Secure and scalable Cloud Migration Services that help enterprises move legacy infrastructure to modern cloud environments.',
    features: ['Cloud Consulting', 'Infrastructure Migration', 'Hybrid Cloud Architecture'],
    gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
    color: '#22a7f0'
  },
  {
    icon: HiOutlineCodeBracket ,
    title: 'DevOps Services',
    description: 'High-performance DevOps services and consulting that accelerate software delivery through CI/CD pipelines and automation.',
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'DevOps Transformation'],
    gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
    color: '#34d399'
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Cybersecurity Services',
    description: 'Enterprise cybersecurity services designed to protect digital assets, strengthen security architecture, and reduce cyber risk.',
    features: ['Security Audits', 'Risk Management', 'Cloud Security'],
    gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    color: '#f472b6'
  },
  {
    icon: HiOutlineArrowTrendingUp ,
    title: 'Gen AI Solutions',
    description: 'Advanced Generative AI solutions and machine learning platforms that enable intelligent automation and enterprise innovation.',
    features: ['AI Copilots', 'Enterprise AI Assistants', 'Predictive Analytics'],
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    color: '#f59e0b'
  },
  {
    icon: HiOutlineCpuChip,
    title: 'Application Modernization',
    description: 'Scalable application modernization services that transform legacy systems into secure, cloud-native applications.',
    features: ['Microservices', 'Containerization', 'Enterprise Modernization'],
    gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
    color: '#a78bfa'
  },
  {
    icon: FaGlobe,
    title: 'RPA / Automation',
    description: 'Intelligent RPA and robotic process automation solutions that streamline repetitive business operations and improve productivity.',
    features: ['Process Automation', 'Intelligent Platforms', 'Bot Integration'],
    gradient: 'linear-gradient(135deg, #22a7f0, #06b6d4)',
    color: '#22a7f0'
  }
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="services-premium" ref={sectionRef}>
      {/* Background Decorations */}
      <div className="services-premium-bg">
        <div className="services-premium-blob sblob-1" />
        <div className="services-premium-blob sblob-2" />
        <div className="services-premium-blob sblob-3" />
        <div className="services-premium-blob sblob-4" />
      </div>

      <div className="services-premium-container">
        {/* Header */}
        <motion.div 
          className="services-premium-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="services-premium-label">
            <span className="label-line" />
            <span className="label-text" style={{color:"#ffff"}}>Our Services</span>
            <span className="label-line" />
          </div>
          
          <h2 className="services-premium-title">
            Comprehensive IT Consulting &{' '}
            {/* <span className="gradient-text-services">Digital Transformation</span> */}
               <span >Digital Transformation</span>
            <span className="title-icon">✦</span>
          </h2>
          
          <p className="services-premium-subtitle">
            Our services are designed to help organizations accelerate innovation while optimizing operations.
          </p>
        </motion.div>

        {/* Service Categories - Orbit Design */}
        <div className="services-premium-orbit">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                className="services-premium-orbit-item"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                style={{ '--card-color': category.color }}
              >
                <div className="orbit-item-glow" style={{ background: category.gradient }} />
                
                <div className="orbit-item-icon" style={{ background: category.gradient }}>
                  <Icon />
                </div>
                
                <h3 className="orbit-item-title">{category.title}</h3>
                
                <div className="orbit-item-services">
                  {category.subServices.map((service, i) => (
                    <span key={i} className="orbit-service-tag">
                      {service}
                    </span>
                  ))}
                </div>
                
                {/* <div className="orbit-item-number">0{index + 1}</div> */}
              </motion.div>
            );
          })}
        </div>

        {/* Technology Services - Infinity Cards */}
        <div className="services-premium-tech">
          <motion.div 
            className="services-premium-tech-header"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="tech-header-badge">
              <HiOutlineSparkles />
              <span>Technology Expertise</span>
            </div>
            <h3 className="tech-header-title">Specialized Technology Services</h3>
            <p className="tech-header-subtitle">Deep expertise in modern technology stacks and methodologies</p>
          </motion.div>

          <div className="services-premium-tech-grid">
            {technologyServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="services-premium-tech-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.08) }}
                  whileHover={{ y: -6 }}
                  style={{ '--card-color': service.color }}
                >
                  <div className="tech-card-glow" style={{ background: service.gradient }} />
                  
                  <div className="tech-card-top">
                    <div className="tech-card-icon" style={{ background: service.gradient }}>
                      <Icon />
                    </div>
                    {/* <span className="tech-card-number">0{index + 1}</span> */}
                  </div>
                  
                  <h4 className="tech-card-title">{service.title}</h4>
                  
                  <p className="tech-card-description">{service.description}</p>
                  
                  <div className="tech-card-features">
                    {service.features.map((feature, i) => (
                      <span key={i} className="tech-card-pill">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="tech-card-footer">
                    {/* <span className="tech-card-learn">Learn More</span> */}
                    <HiOutlineArrowRight className="tech-card-arrow" />
                  </div>
                  
                  <div className="tech-card-line" style={{ background: service.gradient }} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          className="services-premium-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="services-premium-cta-content">
            <HiOutlineArrowTrendingUp  className="cta-icon" />
            <span>Ready to accelerate your digital transformation?</span>
          </div>
        <Link 
  to="/services" 
  className="services-premium-cta-btn"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  <span>Discover All Services</span>
  <HiOutlineArrowRight />
</Link>
        </motion.div>
      </div>

      {/* Bottom Edge */}
      <div className="services-premium-bottom" />
    </section>
  );
}