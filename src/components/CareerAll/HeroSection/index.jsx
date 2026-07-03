// CareerHero.jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  HiArrowRight, 
  HiOutlineSparkles, 
  HiOutlineGlobeAlt,
  HiOutlineCpuChip,
  HiOutlineUsers,
  HiOutlineBriefcase,
  HiOutlineChartBar,
  HiOutlineHeart
} from 'react-icons/hi2'
import { FaRocket } from 'react-icons/fa'
import './CareerHero.css'

import BgImage from '../../../assets/pexels/pexels-photo-4.webp';


const stats = [
  // { value: '10+', label: 'Open Positions', icon: HiOutlineBriefcase },
  // { value: '10+', label: 'Countries', icon: HiOutlineGlobeAlt },
  // { value: '95%', label: 'Employee Satisfaction', icon: HiOutlineHeart },
  // { value: '200+', label: 'Team Members', icon: HiOutlineUsers },
];

const features = [
  { icon: HiOutlineSparkles, label: 'AI & Innovation' },
  { icon: HiOutlineCpuChip, label: 'Cloud Technology' },
  { icon: HiOutlineGlobeAlt, label: 'Global Impact' },
];

export default function CareerHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  // Function to scroll to Open Positions section
  const scrollToOpenPositions = () => {
    const section = document.getElementById('zv-open-positions')
    if (section) {
      const headerOffset = 80
      const elementPosition = section.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="career-hero-premium" ref={ref}>
      {/* Background */}
      <div className="career-hero-bg">
        <div 
          className="career-hero-bg-image" 
          style={{ backgroundImage: `url(${BgImage})` }}
        />
        <div className="career-hero-overlay">
          <div className="career-hero-gradient" />
        </div>
      </div>

      {/* Animated Orbs */}
      <div className="career-hero-orbs">
        <div className="orb-career orb-1" />
        <div className="orb-career orb-2" />
        <div className="orb-career orb-3" />
        <div className="orb-career orb-4" />
      </div>

      <div className="career-hero-container">
        <motion.div
          className="career-hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* LEFT COLUMN - Content */}
          <motion.div className="career-hero-left" variants={itemVariants}>
            <div className="career-hero-badge">
              <FaRocket className="badge-icon" />
              <span>We're Hiring!</span>
              <span className="badge-pulse" />
            </div>

            <h1 className="career-hero-title">
              Build Your Future{' '}
                <span >With Zeta-V</span>
              {/* <span className="career-hero-highlight">With Zeta-V</span> */}
            </h1>

            <p className="career-hero-description">
              Join a team of innovators working on cutting-edge AI, cloud, and digital transformation projects.
              Accelerate your career growth with Zeta-V.
            </p>

            <div className="career-hero-ctas">
             <a 
  onClick={(e) => {
    e.preventDefault();
    scrollToOpenPositions();
  }} 
  className="btn-career-primary"
  href="#open-positions"
>
  <span>View Open Positions</span>
  <HiArrowRight />
</a>
           
            </div>

            <div className="career-hero-features">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="feature-pill-career">
                    <Icon />
                    <span>{feature.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Stats */}
          <motion.div 
            className="career-hero-right"
            variants={itemVariants}
          >
            <div className="career-hero-stats">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="stat-card-career"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                  >
                    <div className="stat-icon-career">
                      <Icon />
                    </div>
                    <div className="stat-content-career">
                      <span className="stat-number-career">{stat.value}</span>
                      <span className="stat-label-career">{stat.label}</span>
                    </div>
                    <div className="stat-glow-career" />
                  </motion.div>
                );
              })}
            </div>

            {/* Visual Element */}
            <div className="career-hero-visual">
              <div className="career-hero-visual-card">
                <div className="visual-header-career">
                  <div className="visual-dots-career">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="visual-title-career">Join Zeta-V</span>
                </div>
                <div className="visual-body-career">
                  <div className="visual-content-career">
                    <div className="visual-item">
                      {/* <span className="visual-icon">💼</span> */}
                      <span>50+ Open Roles</span>
                    </div>
                    {/* <div className="visual-item">
                      <span className="visual-icon">🌍</span>
                      <span>10+ Countries</span>
                    </div> */}
                    <div className="visual-item">
                      {/* <span className="visual-icon">🚀</span> */}
                      <span>AI & Cloud Projects</span>
                    </div>
                    <div className="visual-item">
                      {/* <span className="visual-icon">❤️</span> */}
                      <span>95% Satisfaction</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Edge */}
      <div className="career-hero-bottom" />
    </section>
  )
}