// Challenges.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HiOutlineServer, 
  HiOutlineCpuChip, 
  HiOutlineUsers, 
  HiOutlineChartBar, 
  HiOutlineShieldCheck,
  HiOutlineArrowRight,
  HiOutlineSparkles
} from 'react-icons/hi2';
import './Challenges.css';

const challenges = [
  { 
    icon: HiOutlineServer, 
    title: 'Legacy Systems',
    description: 'Outdated legacy systems increase operational costs and limit agility. Zeta-V addresses this through application modernization.',
    number: '01',
    gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
    color: '#22a7f0',
    delay: 0
  },
  { 
    icon: HiOutlineCpuChip, 
    title: 'Digital Complexity',
    description: 'Disconnected tools and unclear ROI slow digital transformation. Zeta-V solves this through strategic consulting and integrated solutions.',
    number: '02',
    gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
    color: '#34d399',
    delay: 0.1
  },
  { 
    icon: HiOutlineUsers, 
    title: 'Talent Gap',
    description: 'Shortage of skilled professionals in cloud, AI, and cybersecurity delays projects. Zeta-V overcomes this through global talent access.',
    number: '03',
    gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    color: '#f472b6',
    delay: 0.2
  },
  { 
    icon: HiOutlineChartBar, 
    title: 'Data Silos',
    description: 'Large volumes of business data remain underutilized due to fragmented systems. Zeta-V solves this through data analytics and BI platforms.',
    number: '04',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    color: '#f59e0b',
    delay: 0.3
  },
  { 
    icon: HiOutlineShieldCheck, 
    title: 'Security Risks',
    description: 'Growing cyber threats put enterprise infrastructure at risk. Zeta-V mitigates through cybersecurity consulting and risk management.',
    number: '05',
    gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
    color: '#a78bfa',
    delay: 0.4
  },
];

export default function ChallengesSection() {
  return (
    <section className="challenges-premium">
         <div className="wave-label">
              <span className="wave-label-line" />
              <span className="wave-label-text">Business Challenges</span>
              <span className="wave-label-line" />
            </div>
      
      {/* Top Wave / Water Animation Section */}
      <div className="challenges-wave-top">
        <div className="wave-top-bg">
          <img 
            src="https://images.pexels.com/photos/6804103/pexels-photo-6804103.jpeg"
            alt=""
            className="wave-top-image"
          />
          <div className="wave-top-overlay" />
        </div>
        
        {/* Floating Water Particles */}
        <div className="wave-particles">
          <div className="wave-particle wp1" />
          <div className="wave-particle wp2" />
          <div className="wave-particle wp3" />
          <div className="wave-particle wp4" />
          <div className="wave-particle wp5" />
          <div className="wave-particle wp6" />
          <div className="wave-particle wp7" />
          <div className="wave-particle wp8" />
          <div className="wave-particle wp9" />
          <div className="wave-particle wp10" />
          <div className="wave-particle wp11" />
          <div className="wave-particle wp12" />
          <div className="wave-particle wp13" />
          <div className="wave-particle wp14" />
          <div className="wave-particle wp15" />
        </div>

        {/* Content */}
        <div className="wave-top-content">
          <motion.div 
            className="wave-top-inner"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
         
            
            <h2 className="wave-title">
              What's Holding Your{' '}
              <span>Business Back</span>
              <span className="wave-title-icon">✦</span>
            </h2>
            
            <p className="wave-subtitle">
              In today's fast-moving digital economy, organizations must innovate faster 
              while managing complex technology landscapes.
            </p>
          </motion.div>
        </div>

        {/* SVG Wave Divider */}
        <div className="wave-divider">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path 
              d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,90 1440,100 L1440,100 L0,100 Z" 
              className="wave-divider-path"
            />
          </svg>
        </div>
      </div>

      {/* Cards Section */}
      <div className="challenges-premium-container">
        {/* 3-2 Card Layout */}
        <div className="challenges-premium-layout">
          {/* Row 1 - 3 Cards */}
          <div className="challenges-premium-row row-top">
            {challenges.slice(0, 3).map((challenge, index) => {
              const Icon = challenge.icon;
              
              return (
                <motion.div
                  key={index}
                  className="challenge-card-premium"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: challenge.delay }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  style={{ '--card-color': challenge.color }}
                >
                  <div className="challenge-card-glow" style={{ background: challenge.gradient }} />
                  
                  <div className="challenge-card-top">
                    <div className="challenge-icon-wrapper" style={{ background: challenge.gradient }}>
                      <Icon />
                    </div>
                  </div>
                  
                  <h3 className="challenge-title">{challenge.title}</h3>
                  
                  <p className="challenge-description">{challenge.description}</p>
                  
                  {/* <div className="challenge-card-bottom">
                    <span className="challenge-status">Learn More</span>
                    <div className="challenge-arrow" style={{ background: challenge.gradient }}>
                      <HiOutlineArrowRight />
                    </div>
                  </div> */}
                  
                  <div className="challenge-card-line" style={{ background: challenge.gradient }} />
                </motion.div>
              );
            })}
          </div>

          {/* Connector Line */}
          <div className="challenges-premium-connector">
            <div className="connector-line" />
            <div className="connector-dot" />
            <div className="connector-line" />
          </div>

          {/* Row 2 - 2 Cards Centered */}
          <div className="challenges-premium-row row-bottom">
            {challenges.slice(3, 5).map((challenge, index) => {
              const actualIndex = index + 3;
              const Icon = challenge.icon;
              
              return (
                <motion.div
                  key={actualIndex}
                  className="challenge-card-premium"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: challenge.delay }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  style={{ '--card-color': challenge.color }}
                >
                  <div className="challenge-card-glow" style={{ background: challenge.gradient }} />
                  
                  <div className="challenge-card-top">
                    <div className="challenge-icon-wrapper" style={{ background: challenge.gradient }}>
                      <Icon />
                    </div>
                  </div>
                  
                  <h3 className="challenge-title">{challenge.title}</h3>
                  
                  <p className="challenge-description">{challenge.description}</p>
                  
                  {/* <div className="challenge-card-bottom">
                    <span className="challenge-status">Learn More</span>
                    <div className="challenge-arrow" style={{ background: challenge.gradient }}>
                      <HiOutlineArrowRight />
                    </div>
                  </div> */}
                  
                  <div className="challenge-card-line" style={{ background: challenge.gradient }} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Edge */}
      <div className="challenges-premium-bottom" />
    </section>
  );
}