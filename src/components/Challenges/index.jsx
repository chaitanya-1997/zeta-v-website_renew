// Challenges.jsx
import { useState } from 'react';
import './Challenges.css';

// Custom SVG Icons
const Icons = {
  Legacy: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 8H21" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  Data: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 8H21" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 3V21" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <circle cx="17" cy="17" r="1.5" fill="currentColor"/>
      <circle cx="7" cy="17" r="1.5" fill="currentColor"/>
    </svg>
  ),
  Security: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L4 7V12C4 16.5 7 20 12 22C17 20 20 16.5 20 12V7L12 3Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="16" r="1" fill="currentColor"/>
    </svg>
  ),
  Cloud: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 10C18 6.5 15.5 4 12 4C9 4 6.5 6 6 9C3.5 9.5 2 11.5 2 14C2 16.5 4 18 6.5 18H18C20.5 18 22 16.5 22 14C22 11.5 20.5 10 18 10Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M12 12V17M10 15L12 17L14 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  AI: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 5V2M12 22V19M19 12H22M2 12H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17.5 6.5L19.5 4.5M6.5 17.5L4.5 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17.5 17.5L19.5 19.5M6.5 6.5L4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  DigitalExperience: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 21H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 17V21" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 7H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 11H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Talent: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 20V19C5 15 8 13 12 13C16 13 19 15 19 19V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 6L18 8L22 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Growth: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17 7H21V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M21 3L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
};

const challenges = [
  { 
    icon: Icons.Legacy, 
    title: 'Legacy Modernization', 
    desc: 'Modernize outdated systems without disrupting operations.' 
  },
  { 
    icon: Icons.Data, 
    title: 'Data & Analytics Gaps', 
    desc: 'Unlock actionable insights from your enterprise data.' 
  },
  { 
    icon: Icons.Security, 
    title: 'Cybersecurity & Compliance', 
    desc: 'Protect assets and meet regulatory requirements.' 
  },
  { 
    icon: Icons.Cloud, 
    title: 'Cloud Migration', 
    desc: 'Accelerate your journey to the cloud, safely.' 
  },
  { 
    icon: Icons.AI, 
    title: 'AI & Automation', 
    desc: 'Embed intelligence into every business process.' 
  },
  { 
    icon: Icons.DigitalExperience, 
    title: 'Digital Customer Experience', 
    desc: 'Delight customers with seamless digital touchpoints.' 
  },
  { 
    icon: Icons.Talent, 
    title: 'Talent & Capability Scaling', 
    desc: 'Build teams and capabilities that grow with you.' 
  },
  { 
    icon: Icons.Growth, 
    title: 'Growth & Market Expansion', 
    desc: 'Enter new markets with confidence and clarity.' 
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
      <div className="challenges__inner">
        <div className="challenges__head reveal visible">
          <span className="section-label">Your Priorities</span>
          <h2 className="section-title">
            Which Business Challenges Are Your{' '}
            <span className="grad-text">Top Priority</span>?
          </h2>
          <p className="section-subtitle">
            Select your key focus areas and we'll design a tailored roadmap for you.
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
              </button>
            );
          })}
        </div>

        {selected.length > 0 && (
          <div className="challenges__cta">
            <p className="challenges__cta-text">
              You've selected <strong>{selected.length}</strong> challenge{selected.length > 1 ? 's' : ''}.
              Let's build your roadmap.
            </p>
            <a href="#contact" className="btn-grad">
              Get Your Custom Roadmap →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}