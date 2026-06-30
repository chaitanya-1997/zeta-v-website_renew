// ClientLogos.jsx
import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineSparkles, HiOutlineChevronRight } from 'react-icons/hi2'
import './ClientLogos.css';

// Import client logos
import cl1 from '../../../assets/team/cl1.avif';
import cl2 from '../../../assets/team/cl2.png';
import cl3 from '../../../assets/team/cl3.png';
import cl4 from '../../../assets/team/cl4.png';
import cl5 from '../../../assets/team/cl5.png';
import cl6 from '../../../assets/team/cl6.png';

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
    <section className="clients-premium">
      {/* Background Decorations */}
      <div className="clients-premium-bg">
        <div className="clients-premium-blob blob-1" />
        <div className="clients-premium-blob blob-2" />
        <div className="clients-premium-blob blob-3" />
      </div>

      <div className="clients-premium-container">
        {/* Header */}
        <motion.div 
          className="clients-premium-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="clients-premium-label">
            <span className="label-line" />
            <span className="label-text">Trusted Partners</span>
            <span className="label-line" />
          </div>
          
          <h2 className="clients-premium-title">
            Trusted by{' '}
            {/* <span className="gradient-text-premium">Global Businesses</span> */}
               <span >Global Businesses</span>
            <span className="title-icon">✦</span>
          </h2>
          
          <p className="clients-premium-subtitle">
            Forward-thinking organizations partner with Zeta-V for Software Development Services 
            to accelerate their Digital Transformation initiatives.
          </p>
        </motion.div>

        {/* Logo Strip */}
        <motion.div 
          className="clients-premium-strip-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            ref={trackRef}
            className="clients-premium-strip"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: 'grab' }}
          >
            {allLogos.map((item, idx) => (
              <div className="clients-premium-card" key={idx}>
                <div className="clients-premium-logo">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    draggable="false"
                  />
                </div>
                <div className="clients-premium-card-glow" />
              </div>
            ))}
          </div>
          
          {/* Gradient overlays */}
          <div className="clients-premium-fade-left" />
          <div className="clients-premium-fade-right" />
        </motion.div>

        {/* Bottom Tagline with CTA */}
        <motion.div 
          className="clients-premium-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="clients-premium-divider">
            <span className="divider-line" />
            <HiOutlineSparkles className="divider-icon" />
            <span className="divider-line" />
          </div>
          
          <p className="clients-premium-tagline">
            Helping organizations across industries unlock measurable business value through technology.
          </p>
          
          <a href="/about" className="clients-premium-cta">
            <span>View All Partners</span>
            <HiOutlineChevronRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}