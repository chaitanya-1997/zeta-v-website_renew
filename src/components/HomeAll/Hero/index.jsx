// Hero.jsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiOutlineSparkles, 
  HiOutlineGlobeAlt,
  HiOutlineCpuChip,
  HiOutlineUsers,
  HiOutlineBriefcase,
  HiOutlineChartBar,
  HiOutlinePlay,
  HiOutlinePause
} from 'react-icons/hi2';
import { FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import './Hero.css';

// Video URL (you can replace with your own)
const HERO_VIDEO = 'https://www.pexels.com/download/video/3125427/';

// Stats – kept but currently commented out in the JSX
const stats = [
  { value: '34+', label: 'Global Clients', icon: HiOutlineUsers },
  { value: '50+', label: 'Expert Consultants', icon: HiOutlineBriefcase },
  { value: '242+', label: 'Projects Delivered', icon: HiOutlineChartBar },
  { value: '98%+', label: 'Client Retention', icon: HiOutlineSparkles },
];

const features = [
  { icon: HiOutlineSparkles, label: 'AI-Powered Solutions' },
  { icon: HiOutlineCpuChip, label: 'Cloud Native' },
  { icon: HiOutlineGlobeAlt, label: 'Global Scale' },
];

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const welcomeText = "Welcome to Zeta-V Technology Solutions";

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const typingSpeed = 80;
    
    const typeInterval = setInterval(() => {
      if (index < welcomeText.length) {
        setDisplayText(welcomeText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTypingComplete(true);
        setTimeout(() => {
          setShowWelcome(false);
          setIsLoaded(true);
        }, 1500);
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval);
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const renderTypedText = () => {
    const words = displayText.split(' ');
    return words.map((word, index) => {
      const isZetaV = word === 'Zeta-V';
      const containsZetaV = word.includes('Zeta-V');
      
      return (
        <span
          key={index}
          style={{
            display: 'inline-block',
            marginRight: '8px',
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            color: isZetaV || containsZetaV ? 'transparent' : '#ffffff',
            background: isZetaV || containsZetaV 
              ? 'linear-gradient(135deg, #22a7f0 0%, #6366f1 50%, #a78bfa 100%)' 
              : 'none',
            WebkitBackgroundClip: isZetaV || containsZetaV ? 'text' : 'none',
            WebkitTextFillColor: isZetaV || containsZetaV ? 'transparent' : '#ffffff',
            backgroundClip: isZetaV || containsZetaV ? 'text' : 'none',
          }}
        >
          {word}
        </span>
      );
    });
  };

  return (
    <section className="hero-premium-video">
      {/* Video Background - Clear */}
      <div className="hero-premium-video-bg">
        <video
          ref={videoRef}
          className="hero-premium-video-element"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={HERO_VIDEO} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-premium-video-overlay">
          <div className="hero-premium-video-gradient-clear" />
        </div>
        
        {/* Video Control Button */}
        <button className="hero-premium-video-control" onClick={toggleVideo}>
          {isPlaying ? <HiOutlinePause /> : <HiOutlinePlay />}
        </button>
      </div>

      {/* Animated Orbs - Subtle */}
      <div className="hero-premium-orbs">
        <div className="orb-premium orb-1" />
        <div className="orb-premium orb-2" />
        <div className="orb-premium orb-3" />
        <div className="orb-premium orb-4" />
      </div>

      {/* Floating Particles - Subtle */}
      <div className="hero-premium-particles">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="particle-hero" 
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: ['#22a7f0', '#6366f1', '#a78bfa', '#34d399'][Math.floor(Math.random() * 4)]
            }}
          />
        ))}
      </div>

      <div className="hero-premium-container">
        {/* WELCOME ANIMATION - Typewriter Effect */}
        <AnimatePresence>
          {showWelcome && (
            <motion.div 
              className="hero-welcome-overlay-clear"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="hero-welcome-content">
                <div className="hero-welcome-text-wrapper">
                  <span className="hero-welcome-text">
                    {renderTypedText()}
                  </span>
                  <span 
                    className={`hero-welcome-cursor ${isTypingComplete ? 'blink-fast' : ''}`}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MAIN CONTENT - Appears after welcome */}
        <AnimatePresence>
          {isLoaded && !showWelcome && (
            <motion.div 
              className="hero-premium-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Content */}
              <div className="hero-premium-main">
                <motion.div 
                  className="hero-premium-badge"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <FaRocket className="badge-icon" />
                  <span>Trusted Technology Partner Since 2017</span>
                  <span className="badge-pulse" />
                </motion.div>

                <motion.h1 
                  className="hero-premium-title"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  Transform Your Business with
                
                  <span> Digital Innovation</span>
                  <span className="title-underline" />
                </motion.h1>

                <motion.p 
                  className="hero-premium-description"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                >
                  We help startups and enterprises accelerate growth through AI, cloud, web,
                  mobile, and enterprise technology solutions designed for impact, built to scale.
                </motion.p>

                <motion.div 
                  className="hero-premium-ctas"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                >
                  <Link 
                    to="/contact"
                    state={{ scrollTo: 'enquiries' }} 
                    className="btn-premium-primary"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <span>Start Your Journey</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <HiArrowRight />
                    </motion.span>
                  </Link>

                  <Link 
                    to="/services" 
                    className="btn-premium-secondary"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Explore Services
                  </Link>
                </motion.div>

                <motion.div 
                  className="hero-premium-features"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div 
                        key={index} 
                        className="feature-pill-premium"
                        whileHover={{ y: -4, scale: 1.02 }}
                      >
                        <Icon />
                        <span>{feature.label}</span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Stats Grid – currently commented out */}
              {/* <motion.div 
                className="hero-premium-stats"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div 
                      key={index} 
                      className="stat-card-premium"
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.7 + (index * 0.1), duration: 0.5 }}
                      whileHover={{ y: -6, scale: 1.02 }}
                    >
                      <div className="stat-icon-premium">
                        <Icon />
                      </div>
                      <div className="stat-content-premium">
                        <span className="stat-number-premium">{stat.value}</span>
                        <span className="stat-label-premium">{stat.label}</span>
                      </div>
                      <div className="stat-glow" />
                    </motion.div>
                  );
                })}
              </motion.div> */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="hero-premium-scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>Scroll</span>
        <div className="scroll-line" />
      </motion.div>

      {/* Bottom Edge – now smoothly dissolves into the next section */}
      {/* <div className="hero-premium-bottom" /> */}
    </section>
  );
}