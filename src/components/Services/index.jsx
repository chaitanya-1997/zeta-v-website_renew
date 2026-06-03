import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'
import './Services.css'

// Modern gradient icons for service categories
const ServiceIcons = {
  digital: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="url(#digitalGrad)" stroke="none" opacity="0.9"/>
      <path d="M12 6V12L15 15" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="2" fill="white" opacity="0.8"/>
      <defs>
        <linearGradient id="digitalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0D47A1"/>
          <stop offset="100%" stopColor="#00B4FF"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  enterprise: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="4" y="8" width="16" height="12" rx="2" fill="url(#enterpriseGrad)" stroke="none" opacity="0.9"/>
      <path d="M8 8V6C8 4.9 8.9 4 10 4H14C15.1 4 16 4.9 16 6V8" stroke="white" strokeWidth="1.5" fill="none"/>
      <path d="M12 12V16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="14" r="1" fill="white"/>
      <defs>
        <linearGradient id="enterpriseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0D47A1"/>
          <stop offset="100%" stopColor="#00B4FF"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  workforce: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="8" r="4" fill="url(#workforceGrad)" stroke="none" opacity="0.9"/>
      <path d="M3 18V17C3 14.8 4.8 13 7 13H11C13.2 13 15 14.8 15 17V18" stroke="#00B4FF" strokeWidth="1.8" fill="none"/>
      <circle cx="17" cy="10" r="3" fill="#2196F3" opacity="0.8"/>
      <defs>
        <linearGradient id="workforceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0D47A1"/>
          <stop offset="100%" stopColor="#42A5F5"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  shared: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M3 9L12 3L21 9L12 15L3 9Z" fill="url(#sharedGrad)" stroke="none" opacity="0.9"/>
      <path d="M5 13V19L12 22L19 19V13" stroke="#00B4FF" strokeWidth="1.5" fill="none"/>
      <path d="M12 15V22" stroke="white" strokeWidth="1.5"/>
      <defs>
        <linearGradient id="sharedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0D47A1"/>
          <stop offset="100%" stopColor="#00B4FF"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  cloud: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M6 16C3.8 16 2 14.2 2 12C2 9.8 3.8 8 6 8C6.1 8 6.2 8 6.3 8C6.8 5.7 8.9 4 11.3 4C14.2 4 16.6 6.3 16.8 9.2C18.1 9.6 19.1 10.7 19.4 12.1C20.3 12.6 21 13.5 21 14.5C21 16.4 19.4 18 17.5 18H6Z" stroke="#0D47A1" strokeWidth="1.5" fill="url(#cloudGrad)" opacity="0.9"/>
      <defs>
        <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e3f2fd"/>
          <stop offset="100%" stopColor="#bbdefb"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  devops: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" fill="url(#devopsGrad)" stroke="none" opacity="0.9"/>
      <path d="M12 8L12 12L15 15" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M8 8L10 10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <defs>
        <linearGradient id="devopsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1565C0"/>
          <stop offset="100%" stopColor="#00B4FF"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  cybersecurity: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M12 3L4 7V12C4 16.5 7 20 12 22C17 20 20 16.5 20 12V7L12 3Z" fill="url(#cyberGrad)" stroke="none" opacity="0.9"/>
      <path d="M12 8V12M12 16H12.01" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <defs>
        <linearGradient id="cyberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0D47A1"/>
          <stop offset="100%" stopColor="#2196F3"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  genai: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="url(#genaiGrad)" stroke="none" opacity="0.9"/>
      <path d="M12 6V12L14 14" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M8 10L10 12L8 14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="16" cy="10" r="1.5" fill="white" opacity="0.8"/>
      <defs>
        <linearGradient id="genaiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0D47A1"/>
          <stop offset="100%" stopColor="#00B4FF"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  appmodern: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="4" y="6" width="16" height="12" rx="2" fill="url(#appGrad)" stroke="none" opacity="0.9"/>
      <path d="M9 6V4H15V6" stroke="#00B4FF" strokeWidth="1.5" fill="none"/>
      <path d="M12 10V14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="16" r="1" fill="white"/>
      <defs>
        <linearGradient id="appGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0D47A1"/>
          <stop offset="100%" stopColor="#42A5F5"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  rpa: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M4 12H20" stroke="#0D47A1" strokeWidth="2"/>
      <circle cx="6" cy="12" r="3" fill="url(#rpaGrad)" stroke="none"/>
      <circle cx="18" cy="12" r="3" fill="url(#rpaGrad)" stroke="none"/>
      <path d="M9 12L15 12" stroke="white" strokeWidth="1.5"/>
      <defs>
        <linearGradient id="rpaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0D47A1"/>
          <stop offset="100%" stopColor="#00B4FF"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

// Main Service Categories with sub-services
const serviceCategories = [
  {
    id: 'digital',
    icon: ServiceIcons.digital,
    title: 'Digital Acceleration',
    subServices: ['Strategy Consulting', 'Analytics and automation', 'Digital Footprint', 'Co-creation and Monetization']
  },
  {
    id: 'enterprise',
    icon: ServiceIcons.enterprise,
    title: 'Enterprise Transformation',
    subServices: ['Strategy and Selection', 'Legacy Transformation', 'Enterprise Technologies', 'Engineering Solutions']
  },
  {
    id: 'workforce',
    icon: ServiceIcons.workforce,
    title: 'Workforce Management',
    subServices: ['Staff Augmentation', 'Deployment Support', 'Lateral Hiring', 'Program Management']
  },
  {
    id: 'shared',
    icon: ServiceIcons.shared,
    title: 'Shared Services',
    subServices: ['Incorporation Services', 'Compliance and Taxation', 'Sustenance Services', 'Managed Infrastructure']
  }
]

// Detailed Technology Services
const technologyServices = [
  {
    icon: ServiceIcons.cloud,
    title: 'Cloud Services',
    description: 'Secure and scalable Cloud Migration Services that help enterprises move legacy infrastructure to modern cloud environments with optimized performance and security.',
    features: ['Cloud consulting services', 'Infrastructure migration', 'Hybrid cloud architecture', 'Cloud security optimization']
  },
  {
    icon: ServiceIcons.devops,
    title: 'DevOps Services',
    description: 'High-performance DevOps services and consulting that accelerate software delivery through CI/CD pipelines, automation, and agile development practices.',
    features: ['CI/CD pipelines', 'Infrastructure as code', 'DevOps transformation consulting']
  },
  {
    icon: ServiceIcons.cybersecurity,
    title: 'Cybersecurity Services',
    description: 'Enterprise cybersecurity services designed to protect digital assets, strengthen security architecture, and reduce cyber risk across modern IT environments.',
    features: ['Security audits', 'Risk management', 'Cloud security solutions']
  },
  {
    icon: ServiceIcons.genai,
    title: 'Gen AI Solutions',
    description: 'Advanced Generative AI solutions and machine learning platforms that enable intelligent automation, predictive insights, and enterprise innovation.',
    features: ['AI copilots', 'Enterprise AI assistants', 'Predictive analytics']
  },
  {
    icon: ServiceIcons.appmodern,
    title: 'Application Modernization',
    description: 'Scalable application modernization services that transform legacy systems into secure, cloud-native applications for improved performance and agility.',
    features: ['Microservices architecture', 'Containerization', 'Enterprise application modernization']
  },
  {
    icon: ServiceIcons.rpa,
    title: 'RPA / Robotic Process Automation',
    description: 'Intelligent RPA and robotic process automation solutions that streamline repetitive business operations and improve productivity through automation.',
    features: ['Business process automation', 'Intelligent automation platforms', 'Bot integration']
  }
]

export default function ServicesSection() {
  const [headRef, headVisible] = useReveal(0)

  return (
    <section id="services" className="services">
      {/* Ripple Background Animation */}
      <div className="ripple-background">
        <div className="circle xxlarge shade1"></div>
        <div className="circle xlarge shade2"></div>
        <div className="circle large shade3"></div>
        <div className="circle medium shade4"></div>
        <div className="circle small shade5"></div>
        <div className="circle-extra extra-1"></div>
        <div className="circle-extra extra-2"></div>
        <div className="circle-extra extra-3"></div>
      </div>
      
      <div className="services__pattern"></div>
      
      <div className="services__inner">
        <div ref={headRef} className={`services__head reveal${headVisible ? ' visible' : ''}`}>
          <span className="section-label">Our Services</span>
          <h2 className="section-title">
            Comprehensive IT Consulting & <span className="gradient-highlight">Digital Transformation Services</span>
          </h2>
          <p className="section-subtitle">
            Our services are designed to help organizations accelerate innovation while optimizing operations.
          </p>
        </div>

        {/* Service Categories - Horizontal Scrolling / Carousel Style Design */}
        <div className="services__categories">
          {serviceCategories.map((category, idx) => {
            const [ref, visible] = useReveal(idx * 100)
            const IconComponent = category.icon
            return (
              <div 
                key={category.id}
                ref={ref}
                className={`service-category-card reveal${visible ? ' visible' : ''}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="service-category-inner">
                  <div className="category-front">
                    <div className="category-icon-ring">
                      <div className="category-icon">
                        <IconComponent />
                      </div>
                    </div>
                    <h3 className="category-title">{category.title}</h3>
                    {/* <div className="category-arrow">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div> */}
                  </div>
                  <div className="category-back">
                    <ul className="category-services-list">
                      {category.subServices.map((service, i) => (
                        <li key={i}>
                          <span className="service-marker"></span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Technology Services - Modern Glassmorphism Cards with Animated Borders */}
        <div className="services__tech">
          <div className="tech-header">
            <span className="tech-badge">Technology Expertise</span>
            <h3 className="tech-title">Specialized Technology Services</h3>
            <p className="tech-subtitle">Deep expertise in modern technology stacks and methodologies</p>
          </div>

          <div className="tech-grid">
            {technologyServices.map((service, idx) => {
              const [ref, visible] = useReveal(idx * 80)
              const IconComponent = service.icon
              return (
                <div 
                  key={idx}
                  ref={ref}
                  className={`tech-glass-card reveal${visible ? ' visible' : ''}`}
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <div className="glass-card-glow"></div>
                  <div className="glass-card-content">
                    <div className="tech-icon-wrapper">
                      <IconComponent />
                    </div>
                    <h4 className="tech-card-title">{service.title}</h4>
                    <p className="tech-card-desc">{service.description}</p>
                    <div className="tech-features-pills">
                      {service.features.map((feature, i) => (
                        <span key={i} className="tech-pill">{feature}</span>
                      ))}
                    </div>
                  </div>
                  <div className="glass-card-footer">
                    <span className="learn-more">Explore Service →</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="services__cta">
          <a href="#contact" className="services-cta-btn">
            Discover All Services →
          </a>
        </div>
      </div>
    </section>
  )
}