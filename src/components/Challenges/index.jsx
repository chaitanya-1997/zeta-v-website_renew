// Challenges.jsx
import { useState } from 'react';
import './Challenges.css';

// Custom SVG Icons for each challenge
const Icons = {
  Legacy: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 8H21" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  Complexity: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 4L8 8M20 4L16 8M20 20L16 16M4 20L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Talent: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 20V19C5 15 8 13 12 13C16 13 19 15 19 19V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 6L18 8L22 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 4L4 6L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Data: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 8H21" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 3V21" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <path d="M16 16L19 19M16 8L19 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Security: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L4 7V12C4 16.5 7 20 12 22C17 20 20 16.5 20 12V7L12 3Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="16" r="1" fill="currentColor"/>
      <path d="M8 5L16 9" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
};

const challenges = [
  { 
    icon: Icons.Legacy, 
    title: 'Legacy Systems Slowing Innovation', 
    desc: 'Outdated legacy systems increase operational costs and limit agility, Zeta-V addresses through application modernization and scalable cloud-native solutions.' 
  },
  { 
    icon: Icons.Complexity, 
    title: 'Complexity of Digital Transformation', 
    desc: 'Disconnected tools and unclear ROI slow digital transformation initiatives, Zeta-V solves through strategic digital transformation consulting and integrated technology solutions.' 
  },
  { 
    icon: Icons.Talent, 
    title: 'Technology Talent Gap', 
    desc: 'The shortage of skilled professionals in cloud, AI, and cybersecurity delays projects, Zeta-V overcomes through IT staff augmentation and global technology talent access.' 
  },
  { 
    icon: Icons.Data, 
    title: 'Data Without Decisions', 
    desc: 'Large volumes of business data remain underutilized due to fragmented systems, Zeta-V solves through data analytics services, data engineering, and business intelligence platforms.' 
  },
  { 
    icon: Icons.Security, 
    title: 'Security & Risk in a Digital World', 
    desc: 'Growing cyber threats put enterprise infrastructure and sensitive data at risk, Zeta-V mitigates through cybersecurity consulting, risk management, and cloud security solutions.' 
  },
];

export default function ChallengesSection() {
  const [selected, setSelected] = useState([]);

  const toggle = (index) => {
    setSelected(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  return (
    <section id="challenges" className="challenges">
      {/* New Animated Background */}
      <div className="challenges__bg">
        <div className="bg-aurora"></div>
        <div className="bg-gradient-sphere"></div>
        <div className="bg-grid-overlay"></div>
        <div className="bg-noise"></div>
      </div>

      {/* Floating Tech Elements (enhanced) */}
      <div className="challenges__floating">
        <div className="float-node node-1"></div>
        <div className="float-node node-2"></div>
        <div className="float-node node-3"></div>
        <div className="float-node node-4"></div>
        <div className="float-line line-1"></div>
        <div className="float-line line-2"></div>
        <div className="float-particle particle-1"></div>
        <div className="float-particle particle-2"></div>
      </div>

      <div className="challenges__inner">
        <div className="challenges__head">
          <span className="section-label">Business Challenges</span>
          <h2 className="section-title">
            What's Holding Your <span className="grad-text">Business Back</span>?
          </h2>
          <p className="section-subtitle">
            In today's fast-moving digital economy, organizations must innovate faster while managing complex technology landscapes.
          </p>
        </div>

        <div className="challenges__grid">
          {challenges.map((challenge, index) => {
            const isActive = selected.includes(index);
            const IconComponent = challenge.icon;
            
            return (
              <button
                key={index}
                className={`challenges__card ${isActive ? 'challenges__card--active' : ''}`}
                onClick={() => toggle(index)}
              >
                {isActive && <span className="challenges__check">✓</span>}
                <div className="challenges__icon">
                  <IconComponent />
                </div>
                <h3 className="challenges__title">{challenge.title}</h3>
                <p className="challenges__desc">{challenge.desc}</p>
                <div className="card-shine"></div>
              </button>
            );
          })}
        </div>

        {selected.length > 0 && (
          <div className="challenges__cta">
            <p className="challenges__cta-text">
              You've selected <strong>{selected.length}</strong> challenge{selected.length > 1 ? 's' : ''}.
              Let's discuss how Zeta-V can help.
            </p>
            <a href="#contact" className="btn-grad">
              Schedule a Consultation →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}