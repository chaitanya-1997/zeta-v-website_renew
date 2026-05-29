import { useEffect, useState } from 'react'
import './ClientLogos.css';

// Icons for expertise areas
const ExpertiseIcon = ({ type }) => {
  const icons = {
    cloud: () => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M6 16C3.8 16 2 14.2 2 12C2 9.8 3.8 8 6 8C6.1 8 6.2 8 6.3 8C6.8 5.7 8.9 4 11.3 4C14.2 4 16.6 6.3 16.8 9.2C18.1 9.6 19.1 10.7 19.4 12.1C20.3 12.6 21 13.5 21 14.5C21 16.4 19.4 18 17.5 18H6Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M12 11V13M12 15H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    devops: () => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 8L12 12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    data: () => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 9H21" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 3V21" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="14" r="2" fill="currentColor" opacity="0.7"/>
        <path d="M16 7L18 9L16 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    cybersecurity: () => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L4 7V12C4 16.5 7 20 12 22C17 20 20 16.5 20 12V7L12 3Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 5L16 9" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  };
  return <div className="expertise__icon">{icons[type]()}</div>;
};

// Client logos for slider - 8 items
const logoItems = [
  { id: 1, name: 'Client A' },
  { id: 2, name: 'Client B' },
  { id: 3, name: 'Client C' },
  { id: 4, name: 'Client D' },
  { id: 5, name: 'Client E' },
  { id: 6, name: 'Client F' },
  { id: 7, name: 'Client G' },
  { id: 8, name: 'Client H' },
];

export default function ClientLogosStrip() {
  const allLogos = [...logoItems, ...logoItems];
  
  const expertiseAreas = [
    { icon: 'cloud', text: 'Cloud migration and modernization', color: '#0D47A1' },
    { icon: 'devops', text: 'DevOps services and software development', color: '#1565C0' },
    { icon: 'data', text: 'Data engineering and machine learning solutions', color: '#1E88E5' },
    { icon: 'cybersecurity', text: 'Cybersecurity services and IT outsourcing', color: '#42A5F5' },
  ];

  // Client particles for background
  const clientParticles = [
    { type: 'dark-blue', size: 'sm', speed: 'slow', top: '10%', left: '5%' },
    { type: 'sky-blue', size: 'md', speed: 'medium', top: '20%', left: '85%' },
    { type: 'light-blue', size: 'sm', speed: 'fast', top: '30%', left: '15%' },
    { type: 'dark-blue', size: 'lg', speed: 'medium', top: '45%', left: '70%' },
    { type: 'sky-blue', size: 'sm', speed: 'slow', top: '55%', left: '90%' },
    { type: 'white', size: 'md', speed: 'fast', top: '65%', left: '10%' },
    { type: 'light-blue', size: 'sm', speed: 'slow', top: '75%', left: '80%' },
    { type: 'dark-blue', size: 'md', speed: 'medium', top: '85%', left: '25%' },
    { type: 'sky-blue', size: 'lg', speed: 'slow', top: '15%', left: '45%' },
    { type: 'white', size: 'sm', speed: 'fast', top: '40%', left: '50%' },
    { type: 'light-blue', size: 'md', speed: 'slow', top: '60%', left: '35%' },
    { type: 'dark-blue', size: 'sm', speed: 'medium', top: '80%', left: '60%' },
  ];

  return (
    <section className="clients">
      {/* Client Particle Background */}
      <div className="client-particles-container">
        {clientParticles.map((particle, index) => (
          <div
            key={index}
            className={`client-particle client-particle-${particle.type} size-${particle.size} ${particle.speed}`}
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: `${index * 0.3}s`
            }}
          />
        ))}
      </div>
      
      <div className="clients__bg">
        <div className="clients__gradient"></div>
        <div className="clients__pattern"></div>
      </div>

      <div className="clients__particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>

      <div className="clients__container">
        <div className="clients__header">
          <span className="section-label">Trusted Partners</span>
          <h2 className="section-title">
            Trusted by <span className="gradient-text">Global Businesses</span> <br/>
            and Growing Enterprises.
          </h2>
          <p className="clients__subtitle">
            Forward-thinking organizations partner with Zeta-V for Software Development Services to accelerate their Digital Transformation initiatives.
          </p>
        </div>

        {/* Logo Strip Slider */}
        <div className="clients__track-wrapper">
          <div className="clients__track">
            {allLogos.map((item, idx) => (
              <div className="clients__card" key={idx}>
                <div className="clients__logo-placeholder">
                  <div className="logo-badge">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.2"/>
                      <path d="M8 12H16M12 8V16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <span className="clients__name">{item.name}</span>
                <div className="clients__card-shine"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Section - Hexagon Network */}
        <div className="clients__expertise">
          <div className="expertise__header">
            <h3 className="expertise__title">Our clients rely on us for expertise in</h3>
          </div>
          
          <div className="expertise__network">
            <div className="expertise__hexagon-grid">
              {expertiseAreas.map((area, idx) => (
                <div key={idx} className="hexagon-wrapper" style={{ animationDelay: `${idx * 0.15}s` }}>
                  <div className="hexagon">
                    <div className="hexagon-inner">
                      <div className="hexagon-icon" style={{ color: area.color }}>
                        <ExpertiseIcon type={area.icon} />
                      </div>
                      <div className="hexagon-text">{area.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tagline below logos */}
        <div className="clients__tagline">
          <div className="tagline-line"></div>
          <p className="tagline-text">
            Helping organizations across industries unlock measurable business value through technology.
          </p>
          <div className="tagline-line"></div>
        </div>
      </div>
    </section>
  );
}