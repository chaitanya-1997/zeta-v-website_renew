
// Hero.jsx - Updated with two-line welcome animation
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
  const [welcomePhase, setWelcomePhase] = useState('firstLine'); // 'firstLine' | 'secondLine' | 'complete'
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  // Welcome animation timing - two-line sequence
  useEffect(() => {
    // First line appears: "Welcome to" - after 0.5s
    const firstLineTimer = setTimeout(() => {
      setWelcomePhase('secondLine');
    }, 100);

    // Second line appears: "Zeta-V Technology Solutions" - after 1.5s total
    const secondLineTimer = setTimeout(() => {
      setWelcomePhase('complete');
    }, 1500);

    // Welcome stays visible for 5 seconds after complete, then fades out
    const exitTimer = setTimeout(() => {
      setShowWelcome(false);
      setIsLoaded(true);
    }, 2500); // 1500ms (animation) + 5000ms (view time) = 6500ms

    return () => {
      clearTimeout(firstLineTimer);
      clearTimeout(secondLineTimer);
      clearTimeout(exitTimer);
    };
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
        {/* WELCOME ANIMATION - Two-line sequence with 5 second view time */}
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
                <div className="hero-welcome-wrapper">
                  {/* First Line: "Welcome to" - Slides from bottom */}
                  <motion.div
                    className="welcome-line welcome-line-first"
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      type: 'spring',
                      damping: 20,
                      stiffness: 200,
                      duration: 0.8
                    }}
                  >
                    <span className="welcome-text-first">Welcome to</span>
                  </motion.div>

                  {/* Second Line: "Zeta-V Technology Solutions" - Slides from bottom with delay */}
                  <motion.div
                    className="welcome-line welcome-line-second"
                    initial={{ y: 60, opacity: 0 }}
                    animate={welcomePhase === 'secondLine' || welcomePhase === 'complete' ? { y: 0, opacity: 1 } : {}}
                    transition={{
                      type: 'spring',
                      damping: 20,
                      stiffness: 200,
                      duration: 0.8,
                      delay: 0.3
                    }}
                  >
                    <span className="welcome-text-zetav">Zeta-V</span>
                    <span className="welcome-text-solutions"> Technology Solutions</span>
                  </motion.div>

           

                  {/* Subtle glow effect when complete */}
                  {welcomePhase === 'complete' && (
                    <motion.div
                      className="welcome-glow"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                  )}
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
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Main Content */}
              <div className="hero-premium-main">
                <motion.div 
                  className="hero-premium-badge"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  <FaRocket className="badge-icon" />
                  <span>Trusted Technology Partner Since 2017</span>
                  <span className="badge-pulse" />
                </motion.div>

                <motion.h1 
                  className="hero-premium-title"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                >
                  Transform Your Business with
              Digital Innovation
                  <span className="title-underline" />
                </motion.h1>

                <motion.p 
                  className="hero-premium-description"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  We help startups and enterprises accelerate growth through AI, cloud, web,
                  mobile, and enterprise technology solutions designed for impact, built to scale.
                </motion.p>

                <motion.div 
                  className="hero-premium-ctas"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
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
                  transition={{ delay: 0.3, duration: 0.4 }}
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

    
    </section>
  );
}