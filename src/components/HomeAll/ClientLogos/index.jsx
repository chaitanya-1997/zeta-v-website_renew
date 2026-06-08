// ClientLogos.jsx
import { useEffect, useState, useRef } from 'react'
import './ClientLogos.css';

// Import client logos
import cl1 from './cl1.avif';
import cl2 from './cl2.png';
import cl3 from './cl3.png';
import cl4 from './cl4.png';
import cl5 from './cl5.png';
import cl6 from './cl6.png';

// Client logos - 6 actual images
const logoItems = [
  { id: 1, name: 'Client A', image: cl1 },
  { id: 2, name: 'Client B', image: cl2 },
  { id: 3, name: 'Client C', image: cl3 },
  { id: 4, name: 'Client D', image: cl4 },
  { id: 5, name: 'Client E', image: cl5 },
  { id: 6, name: 'Client F', image: cl6 },
];

export default function ClientLogosStrip() {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate logos for smooth infinite scroll effect
  const allLogos = [...logoItems, ...logoItems, ...logoItems];

  // Auto-scroll marquee effect
  useEffect(() => {
    let animationId;
    let lastTime = 0;
    const speed = 0.5;
    
    const autoScroll = (currentTime) => {
      if (!trackRef.current) return;
      
      if (!isHovered && !isDragging) {
        const delta = currentTime - lastTime;
        if (delta > 16) {
          trackRef.current.scrollLeft += speed;
          lastTime = currentTime;
          
          const maxScroll = trackRef.current.scrollWidth / 3;
          if (trackRef.current.scrollLeft >= maxScroll) {
            trackRef.current.scrollLeft -= maxScroll;
          } else if (trackRef.current.scrollLeft <= 0) {
            trackRef.current.scrollLeft += maxScroll;
          }
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };
    
    lastTime = performance.now();
    animationId = requestAnimationFrame(autoScroll);
    
    return () => cancelAnimationFrame(animationId);
  }, [isHovered, isDragging]);

  // Manual scroll handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
    trackRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (trackRef.current) {
      trackRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (trackRef.current) {
      trackRef.current.style.cursor = 'grab';
    }
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="clients">
      {/* Particle Background - All particles contained with cli_ prefix */}
      <div className="cli_particles-container">
        <div className="cli_particle cli_particle-1"></div>
        <div className="cli_particle cli_particle-2"></div>
        <div className="cli_particle cli_particle-3"></div>
        <div className="cli_particle cli_particle-4"></div>
        <div className="cli_particle cli_particle-5"></div>
        <div className="cli_particle cli_particle-6"></div>
        <div className="cli_particle cli_particle-7"></div>
        <div className="cli_particle cli_particle-8"></div>
        <div className="cli_particle cli_particle-9"></div>
        <div className="cli_particle cli_particle-10"></div>
        <div className="cli_particle cli_particle-11"></div>
        <div className="cli_particle cli_particle-12"></div>
        <div className="cli_particle cli_particle-13"></div>
        <div className="cli_particle cli_particle-14"></div>
        <div className="cli_particle cli_particle-15"></div>
        <div className="cli_particle cli_particle-16"></div>
        <div className="cli_particle cli_particle-17"></div>
        <div className="cli_particle cli_particle-18"></div>
        <div className="cli_particle cli_particle-19"></div>
        <div className="cli_particle cli_particle-20"></div>
      </div>

      <div className="clients__container">
        <div className="clients__header">
          <span className="section-label">Trusted Partners</span>
          <h2 className="section-title">
            Trusted by <span className="gradient-text">Global Businesses</span> <br/>
            and Growing Enterprises.
          </h2>
          <p className="section-subtitle">
            Forward-thinking organizations partner with Zeta-V for Software Development Services to accelerate their Digital Transformation initiatives.
          </p>
        </div>

        {/* Logo Strip Slider */}
        <div 
          className="clients__track-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            ref={trackRef}
            className="clients__track"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: 'grab', overflowX: 'auto', scrollBehavior: 'auto' }}
          >
            {allLogos.map((item, idx) => (
              <div className="clients__card" key={idx}>
                <div className="clients__logo-wrapper">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="clients__logo-img"
                    draggable="false"
                  />
                </div>
                <div className="clients__card-shine"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Tagline */}
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