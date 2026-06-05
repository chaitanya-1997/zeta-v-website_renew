// // Challenges.jsx
// import { useState } from 'react';
// import './Challenges.css';

// // Custom SVG Icons for each challenge
// const Icons = {
//   Legacy: () => (
//     <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
//       <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//       <path d="M3 8H21" stroke="currentColor" strokeWidth="1.5"/>
//     </svg>
//   ),
//   Complexity: () => (
//     <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/>
//       <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//       <path d="M4 4L8 8M20 4L16 8M20 20L16 16M4 20L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//     </svg>
//   ),
//   Talent: () => (
//     <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
//       <path d="M5 20V19C5 15 8 13 12 13C16 13 19 15 19 19V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//       <path d="M16 6L18 8L22 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//       <path d="M2 4L4 6L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//     </svg>
//   ),
//   Data: () => (
//     <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
//       <path d="M3 8H21" stroke="currentColor" strokeWidth="1.5"/>
//       <path d="M8 3V21" stroke="currentColor" strokeWidth="1.5"/>
//       <circle cx="12" cy="12" r="2" fill="currentColor"/>
//       <path d="M16 16L19 19M16 8L19 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//     </svg>
//   ),
//   Security: () => (
//     <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M12 3L4 7V12C4 16.5 7 20 12 22C17 20 20 16.5 20 12V7L12 3Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
//       <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//       <circle cx="12" cy="16" r="1" fill="currentColor"/>
//       <path d="M8 5L16 9" stroke="currentColor" strokeWidth="1.5"/>
//     </svg>
//   ),
// };

// const challenges = [
//   { 
//     icon: Icons.Legacy, 
//     title: 'Legacy Systems Slowing Innovation', 
//     shortTitle: 'Legacy Systems',
//     desc: 'Outdated legacy systems increase operational costs and limit agility. Zeta-V addresses this through application modernization and scalable cloud-native solutions.',
//     number: '01'
//   },
//   { 
//     icon: Icons.Complexity, 
//     title: 'Complexity of Digital Transformation', 
//     shortTitle: 'Complexity of Digital',
//     desc: 'Disconnected tools and unclear ROI slow digital transformation initiatives. Zeta-V solves this through strategic digital transformation consulting and integrated technology solutions.',
//     number: '02'
//   },
//   { 
//     icon: Icons.Talent, 
//     title: 'Technology Talent Gap', 
//     shortTitle: 'Technology Talent',
//     desc: 'Shortage of skilled professionals in cloud, AI, and cybersecurity delays projects. Zeta-V overcomes this through IT staff augmentation and global technology talent access.',
//     number: '03'
//   },
//   { 
//     icon: Icons.Data, 
//     title: 'Data Without Decisions', 
//     shortTitle: 'Data Without Decisions',
//     desc: 'Large volumes of business data remain underutilized due to fragmented systems. Zeta-V solves this through data analytics services and business intelligence platforms.',
//     number: '04'
//   },
//   { 
//     icon: Icons.Security, 
//     title: 'Security & Risk in a Digital World', 
//     shortTitle: 'Security & Risk',
//     desc: 'Growing cyber threats put enterprise infrastructure at risk. Zeta-V mitigates through cybersecurity consulting, risk management, and cloud security solutions.',
//     number: '05'
//   },
// ];

// export default function ChallengesSection() {
//   const [selected, setSelected] = useState([]);

//   const toggle = (index) => {
//     setSelected(prev => 
//       prev.includes(index) 
//         ? prev.filter(i => i !== index) 
//         : [...prev, index]
//     );
//   };

//   return (
//     <section id="challenges" className="challenges">
//       {/* Wave Header Section */}
//       <div className="challenges-wave-header">
//         <div className="wave-header-content">
//           <div className="wave-button">
//             <div className="wave-button-text">
//               <span className="icon-text">How We Solve It →</span>
//             </div>
//           </div>
//         </div>
//         <div className="challenges-wave"></div>
//       </div>

//       {/* Animated particle-chs Background */}
//       <div className="particle-chs-bg">
//         <div className="particle-ch p1"></div>
//         <div className="particle-ch p2"></div>
//         <div className="particle-ch p3"></div>
//         <div className="particle-ch p4"></div>
//         <div className="particle-ch p5"></div>
//         <div className="particle-ch p6"></div>
//         <div className="particle-ch p7"></div>
//         <div className="particle-ch p8"></div>
//         <div className="particle-ch p9"></div>
//         <div className="particle-ch p10"></div>
//         <div className="particle-ch p11"></div>
//         <div className="particle-ch p12"></div>
//         <div className="particle-ch p13"></div>
//         <div className="particle-ch p14"></div>
//         <div className="particle-ch p15"></div>
//         <div className="particle-ch p16"></div>
//         <div className="particle-ch p17"></div>
//         <div className="particle-ch p18"></div>
//         <div className="particle-ch p19"></div>
//         <div className="particle-ch p20"></div>
//       </div>

//       {/* Floating Orbs */}
//       <div className="floating-orb orb-1"></div>
//       <div className="floating-orb orb-2"></div>
//       <div className="floating-orb orb-3"></div>

//       <div className="challenges__inner">
//         <div className="challenges__head">
//           <span className="section-label">
//             <span className="label-dot"></span>
//             Business Challenges
//             <span className="label-line"></span>
//           </span>
//           <h2 className="section-title">
//             What's Holding Your <span className="grad-text">Business Back</span>?
//           </h2>
//           <p className="section-subtitle">
//             In today's fast-moving digital economy, organizations must innovate faster while managing complex technology landscapes.
//           </p>
//         </div>

//         {/* Horizontal Row Layout: 3 cards top, 2 cards bottom */}
//         <div className="challenges__grid">
//           {/* Row 1 - 3 cards */}
//           <div className="cards-row row-top">
//             {challenges.slice(0, 3).map((challenge, index) => {
//               const isActive = selected.includes(index);
//               const IconComponent = challenge.icon;
              
//               return (
//                 <div
//                   key={index}
//                   className={`feature-card-wrapper ${isActive ? 'active' : ''}`}
//                   onClick={() => toggle(index)}
//                 >
//                   <div className="feature-card">
//                     <div className="feature-card-inner">
//                       <div className="feature-icon-wrapper">
//                         <div className="feature-icon-inner">
//                           <IconComponent />
//                         </div>
//                       </div>

//                       <div className="feature-content">
//                         <div className="feature-title">
//                           <span>
//                             <span>{challenge.number}</span>
//                             {challenge.shortTitle}
//                           </span>
//                         </div>
//                         <div className="feature-excerpt">
//                           {challenge.desc}
//                         </div>
//                       </div>
                      
//                       {isActive && <div className="active-check">✓</div>}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Connecting line between rows */}
//           <div className="row-connector">
//             <div className="connector-line-left"></div>
//             <div className="connector-dot"></div>
//             <div className="connector-line-right"></div>
//           </div>

//           {/* Row 2 - 2 cards centered */}
//           <div className="cards-row row-bottom">
//             {challenges.slice(3, 5).map((challenge, index) => {
//               const actualIndex = index + 3;
//               const isActive = selected.includes(actualIndex);
//               const IconComponent = challenge.icon;
              
//               return (
//                 <div
//                   key={actualIndex}
//                   className={`feature-card-wrapper ${isActive ? 'active' : ''}`}
//                   onClick={() => toggle(actualIndex)}
//                 >
//                   <div className="feature-card">
//                     <div className="feature-card-inner">
//                       <div className="feature-icon-wrapper">
//                         <div className="feature-icon-inner">
//                           <IconComponent />
//                         </div>
//                       </div>

//                       <div className="feature-content">
//                         <div className="feature-title">
//                           <span>
//                             <span>{challenge.number}</span>
//                             {challenge.shortTitle}
//                           </span>
//                         </div>
//                         <div className="feature-excerpt">
//                           {challenge.desc}
//                         </div>
//                       </div>
                      
//                       {isActive && <div className="active-check">✓</div>}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Selected Challenges CTA */}
//         {selected.length > 0 && (
//           <div className="challenges__cta">
//             <div className="cta-ripple"></div>
//             <p className="challenges__cta-text">
//               You've selected <strong>{selected.length}</strong> challenge{selected.length > 1 ? 's' : ''}.
//               Let's discuss how Zeta-V can help.
//             </p>
//             <a href="#contact" className="btn-grad">
//               Schedule a Consultation →
//               <span className="btn-arrow">→</span>
//             </a>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }




// Challenges.jsx
import { useState } from 'react';
import './Challenges.css';

// Custom SVG Icons for each challenge
const Icons = {
  Legacy: () => (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 8H21" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  Complexity: () => (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 4L8 8M20 4L16 8M20 20L16 16M4 20L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Talent: () => (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 20V19C5 15 8 13 12 13C16 13 19 15 19 19V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 6L18 8L22 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 4L4 6L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Data: () => (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 8H21" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 3V21" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <path d="M16 16L19 19M16 8L19 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Security: () => (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    shortTitle: 'Legacy Systems',
    desc: 'Outdated legacy systems increase operational costs and limit agility. Zeta-V addresses this through application modernization and scalable cloud-native solutions.',
    number: '01'
  },
  { 
    icon: Icons.Complexity, 
    title: 'Complexity of Digital Transformation', 
    shortTitle: 'Complexity of Digital',
    desc: 'Disconnected tools and unclear ROI slow digital transformation initiatives. Zeta-V solves this through strategic digital transformation consulting and integrated technology solutions.',
    number: '02'
  },
  { 
    icon: Icons.Talent, 
    title: 'Technology Talent Gap', 
    shortTitle: 'Technology Talent',
    desc: 'Shortage of skilled professionals in cloud, AI, and cybersecurity delays projects. Zeta-V overcomes this through IT staff augmentation and global technology talent access.',
    number: '03'
  },
  { 
    icon: Icons.Data, 
    title: 'Data Without Decisions', 
    shortTitle: 'Data Without Decisions',
    desc: 'Large volumes of business data remain underutilized due to fragmented systems. Zeta-V solves this through data analytics services and business intelligence platforms.',
    number: '04'
  },
  { 
    icon: Icons.Security, 
    title: 'Security & Risk in a Digital World', 
    shortTitle: 'Security & Risk',
    desc: 'Growing cyber threats put enterprise infrastructure at risk. Zeta-V mitigates through cybersecurity consulting, risk management, and cloud security solutions.',
    number: '05'
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
      {/* Wave Header Section */}
      <div className="challenges-wave-header">
        <div className="wave-header-content">
          <div className="wave-button">
            <div className="wave-button-text">
              <span className="icon-text">How We Solve It →</span>
            </div>
          </div>
        </div>
        <div className="challenges-wave"></div>
      </div>

      {/* Animated particles Background */}
      <div className="particles-bg">
        <div className="particle-ch p1"></div>
        <div className="particle-ch p2"></div>
        <div className="particle-ch p3"></div>
        <div className="particle-ch p4"></div>
        <div className="particle-ch p5"></div>
        <div className="particle-ch p6"></div>
        <div className="particle-ch p7"></div>
        <div className="particle-ch p8"></div>
        <div className="particle-ch p9"></div>
        <div className="particle-ch p10"></div>
        <div className="particle-ch p11"></div>
        <div className="particle-ch p12"></div>
        <div className="particle-ch p13"></div>
        <div className="particle-ch p14"></div>
        <div className="particle-ch p15"></div>
        <div className="particle-ch p16"></div>
        <div className="particle-ch p17"></div>
        <div className="particle-ch p18"></div>
        <div className="particle-ch p19"></div>
        <div className="particle-ch p20"></div>
      </div>

      {/* Floating Orbs */}
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>

      <div className="challenges__inner">
        <div className="challenges__head">
          <span className="section-label">
            <span className="label-dot"></span>
            Business Challenges
            <span className="label-line"></span>
          </span>
          <h2 className="section-title">
            What's Holding Your <span className="grad-text">Business Back</span>?
          </h2>
          <p className="section-subtitle">
            In today's fast-moving digital economy, organizations must innovate faster while managing complex technology landscapes.
          </p>
        </div>

        {/* Horizontal Row Layout: 3 cards top, 2 cards bottom */}
        <div className="challenges__grid">
          {/* Row 1 - 3 cards */}
          <div className="cards-row row-top">
            {challenges.slice(0, 3).map((challenge, index) => {
              const isActive = selected.includes(index);
              const IconComponent = challenge.icon;
              
              return (
                <div
                  key={index}
                  className={`feature-card-wrapper ${isActive ? 'active' : ''}`}
                  onClick={() => toggle(index)}
                >
                  <div className="feature-card">
                    <div className="feature-card-inner">
                      <div className="feature-icon-wrapper">
                        <div className="feature-icon-inner">
                          <IconComponent />
                        </div>
                      </div>

                      <div className="feature-content">
                        <div className="feature-title">
                          <span>
                            <span>{challenge.number}</span>
                            {challenge.shortTitle}
                          </span>
                        </div>
                        <div className="feature-excerpt">
                          {challenge.desc}
                        </div>
                      </div>
                      
                      {isActive && <div className="active-check">✓</div>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Connecting line between rows */}
          <div className="row-connector">
            <div className="connector-line-left"></div>
            <div className="connector-dot"></div>
            <div className="connector-line-right"></div>
          </div>

          {/* Row 2 - 2 cards centered */}
          <div className="cards-row row-bottom">
            {challenges.slice(3, 5).map((challenge, index) => {
              const actualIndex = index + 3;
              const isActive = selected.includes(actualIndex);
              const IconComponent = challenge.icon;
              
              return (
                <div
                  key={actualIndex}
                  className={`feature-card-wrapper ${isActive ? 'active' : ''}`}
                  onClick={() => toggle(actualIndex)}
                >
                  <div className="feature-card">
                    <div className="feature-card-inner">
                      <div className="feature-icon-wrapper">
                        <div className="feature-icon-inner">
                          <IconComponent />
                        </div>
                      </div>

                      <div className="feature-content">
                        <div className="feature-title">
                          <span>
                            <span>{challenge.number}</span>
                            {challenge.shortTitle}
                          </span>
                        </div>
                        <div className="feature-excerpt">
                          {challenge.desc}
                        </div>
                      </div>
                      
                      {isActive && <div className="active-check">✓</div>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Challenges CTA */}
        {selected.length > 0 && (
          <div className="challenges__cta">
            <div className="cta-ripple"></div>
            <p className="challenges__cta-text">
              You've selected <strong>{selected.length}</strong> challenge{selected.length > 1 ? 's' : ''}.
              Let's discuss how Zeta-V can help.
            </p>
            <a href="#contact" className="btn-grad">
              Schedule a Consultation →
              <span className="btn-arrow">→</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}