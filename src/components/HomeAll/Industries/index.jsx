// Industries.jsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiOutlineArrowRight,
  HiOutlineArrowLeft,
  HiOutlineSparkles
} from 'react-icons/hi2';
import { useLocation, useNavigate } from 'react-router-dom';
import './Industries.css';

const industries = [
  {
    id: 'financial',
    title: 'Financial Services',
    desc: 'Driving fintech innovation through secure cloud migration, advanced data analytics, AI-powered fraud detection, and cybersecurity consulting.',
    tag: 'Fintech & Banking',
    color: '#22a7f0',
    gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
    lightGradient: 'rgba(34, 167, 240, 0.08)',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
    detailPath: '/industries/financial'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    desc: 'Enabling smart factories with IoT, machine learning, DevOps pipelines, cloud migration, and robotic process automation.',
    tag: 'Smart Factory',
    color: '#34d399',
    gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
    lightGradient: 'rgba(52, 211, 153, 0.08)',
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80',
    detailPath: '/industries/manufacturing'
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    desc: 'Accelerating digital transformation in patient care through telemedicine platforms, secure patient data systems, and AI-driven healthcare analytics.',
    tag: 'Digital Health',
    color: '#f472b6',
    gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    lightGradient: 'rgba(244, 114, 182, 0.08)',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    detailPath: '/industries/healthcare'
  },
  {
    id: 'retail',
    title: 'Retail & E-commerce',
    desc: 'Transforming retail with omnichannel solutions, AI-powered personalization, inventory optimization, and seamless payment integrations.',
    tag: 'Retail Tech',
    color: '#a78bfa',
    gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
    lightGradient: 'rgba(167, 139, 250, 0.08)',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
    detailPath: '/industries/retail'
  }
];

export default function IndustriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [initialLoadDone, setInitialLoadDone] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  // Handle navigation from navbar via state
  useEffect(() => {
    if (location.state?.activeSection) {
      const targetIndustry = location.state.activeSection;
      const industryIndex = industries.findIndex(ind => ind.id === targetIndustry);
      
      if (industryIndex !== -1 && industryIndex !== currentIndex) {
        setCurrentIndex(industryIndex);
        setTimeout(() => {
          if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        }, 300);
      }
    }
    
    // Listen for custom scroll event from navbar
    const handleScrollToSection = (event) => {
      const { hash } = event.detail;
      const industryIndex = industries.findIndex(ind => ind.id === hash);
      
      if (industryIndex !== -1 && industryIndex !== currentIndex) {
        setCurrentIndex(industryIndex);
        if (sectionRef.current) {
          setTimeout(() => {
            sectionRef.current.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }, 200);
        }
      }
    };

    window.addEventListener('navbar:scrollToSection', handleScrollToSection);
    
    return () => {
      window.removeEventListener('navbar:scrollToSection', handleScrollToSection);
      if (location.state?.activeSection) {
        window.history.replaceState({}, document.title);
      }
    };
  }, [location.state, currentIndex]);

  // Handle hash in URL on initial load
  useEffect(() => {
    if (!initialLoadDone && location.hash) {
      const hash = location.hash.replace('#', '');
      const industryIndex = industries.findIndex(ind => ind.id === hash);
      
      if (industryIndex !== -1) {
        setCurrentIndex(industryIndex);
        setTimeout(() => {
          if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        }, 400);
      }
      setInitialLoadDone(true);
    }
  }, [location.hash, initialLoadDone]);

  // Auto-rotate carousel
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleNext();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isHovered, isTransitioning]);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev === 0 ? industries.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev === industries.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleDotClick = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Navigate to industry detail page - THIS IS THE KEY FUNCTION
  const handleIndustryNavigate = (industryId) => {
    const industry = industries.find(ind => ind.id === industryId);
    if (industry && industry.detailPath) {
      // Navigate to the industry detail page
      navigate(industry.detailPath, {
        state: {
          activeIndustry: industryId,
          scrollToTop: true
        }
      });
      // Scroll to top of the page
      //window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Navigate to "All Industries" page
  const handleAllIndustriesClick = () => {
    navigate('/industries', {
      state: { scrollToTop: true }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  const currentIndustry = industries[currentIndex];

  return (
    <section 
      ref={sectionRef}
      className="industries-premium-v2"
      id="industries-section"
    >
      {/* Background Decorations */}
      <div className="industries-premium-v2-bg">
        <div className="industries-premium-v2-blob ib2-1" />
        <div className="industries-premium-v2-blob ib2-2" />
        <div className="industries-premium-v2-blob ib2-3" />
      </div>

      <div className="industries-premium-v2-container">
        {/* Header */}
        <motion.div 
          className="industries-premium-v2-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="industries-premium-v2-label">
            <span className="label-line-v2" />
            <span className="label-text-v2">Industries We Serve</span>
            <span className="label-line-v2" />
          </div>
          
          <h2 className="industries-premium-v2-title">
            Technology Solutions Tailored for{' '}
            <span>Every Industry</span>
            <span className="title-icon-v2">✦</span>
          </h2>
          
          <p className="industries-premium-v2-subtitle">
            We help organizations modernize operations, enhance customer experiences, 
            and build resilient digital infrastructure across various industries.
          </p>
        </motion.div>

        {/* Main Carousel with Arrows */}
        <div className="industries-premium-v2-carousel-wrapper">
          <button 
            className="industries-premium-v2-arrow industries-premium-v2-arrow--prev"
            onClick={handlePrev}
            aria-label="Previous"
          >
            <HiOutlineArrowLeft />
          </button>

          <div 
            className="industries-premium-v2-carousel"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                className="industries-premium-v2-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ '--card-color': currentIndustry.color }}
              >
                {/* Image Section */}
                <div className="industries-premium-v2-image">
                  <img 
                    src={currentIndustry.image} 
                    alt={currentIndustry.title}
                    className="industries-premium-v2-img"
                  />
                  <div className="industries-premium-v2-image-overlay" style={{ background: currentIndustry.gradient }} />
                  <div className="industries-premium-v2-image-shine" />
                </div>

                {/* Content Section */}
                <div className="industries-premium-v2-content">
                  <div className="industries-premium-v2-card-top">
                    <span className="industries-premium-v2-tag" style={{ 
                      background: currentIndustry.lightGradient,
                      color: currentIndustry.color 
                    }}>
                      {currentIndustry.tag}
                    </span>
                  </div>

                  <h3 className="industries-premium-v2-title-card">
                    {currentIndustry.title}
                  </h3>

                  <p className="industries-premium-v2-desc">
                    {currentIndustry.desc}
                  </p>

                  <div className="industries-premium-v2-footer">
                    <button 
                      className="industries-premium-v2-link" 
                      style={{ color: currentIndustry.color }}
                      onClick={() => handleIndustryNavigate(currentIndustry.id)}
                      aria-label={`Learn more about ${currentIndustry.title}`}
                    > Details
                      <HiOutlineArrowRight />
                    </button>
                  </div>
                </div>

                {/* Decorative Line */}
                <div className="industries-premium-v2-line" style={{ background: currentIndustry.gradient }} />
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            className="industries-premium-v2-arrow industries-premium-v2-arrow--next"
            onClick={handleNext}
            aria-label="Next"
          >
            <HiOutlineArrowRight />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="industries-premium-v2-thumbnails">
          {industries.map((industry, index) => (
            <button
              key={index}
              className={`industries-premium-v2-thumb ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              style={{ 
                borderColor: index === currentIndex ? industry.color : 'rgba(15, 23, 42, 0.06)'
              }}
            >
              <div className="industries-premium-v2-thumb-image">
                <img src={industry.image} alt={industry.title} />
                <div className="industries-premium-v2-thumb-overlay" style={{ 
                  background: index === currentIndex ? industry.gradient : 'rgba(15, 23, 42, 0.6)'
                }} />
              </div>
              <span className="industries-premium-v2-thumb-label">{industry.title}</span>
            </button>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="industries-premium-v2-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="industries-premium-v2-cta-content">
            <HiOutlineSparkles className="cta-sparkle-v2" />
            <span>Ready to transform your industry?</span>
          </div>
          <button 
            className="industries-premium-v2-cta-btn"
            onClick={handleAllIndustriesClick}
          >
            <span>Explore All Industries</span>
            <HiOutlineArrowRight />
          </button>
        </motion.div>
      </div>

      {/* Bottom Edge */}
      <div className="industries-premium-v2-bottom" />
    </section>
  );
}