// IndustryHero.jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  HiArrowRight, 
  HiOutlineSparkles, 
  HiOutlineGlobeAlt,
  HiOutlineCpuChip,
  HiOutlineBuildingOffice,
  HiOutlineBanknotes,
  HiOutlineHeart,
  HiArrowUpRight 
} from 'react-icons/hi2'
import { FaRocket } from 'react-icons/fa'
import './IndustryHero.css'
import { Link } from 'react-router-dom';
import BgImage1 from '../../../assets/pexels/pexels-photo-23.webp';




const stats = [
  { value: '34+', label: 'Enterprise Clients', icon: HiOutlineGlobeAlt },
  { value: '242+', label: 'Projects Delivered', icon: HiArrowUpRight  },
  { value: '98%', label: 'Client Retention', icon: HiOutlineSparkles },
  { value: '4+', label: 'Industries Served', icon: HiOutlineBuildingOffice },
];

const features = [
  { icon: HiOutlineBanknotes, label: 'Financial Services' },
  { icon: HiOutlineBuildingOffice, label: 'Manufacturing' },
  { icon: HiOutlineHeart, label: 'Healthcare' },
  { icon: HiOutlineGlobeAlt, label: 'Retail & Distribution' },
];

export default function IndustryHero() {
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

  return (
    <section className="industry-hero-premium" ref={ref}>
      {/* Background */}
      <div className="industry-hero-bg">
        <div 
          className="industry-hero-bg-image" 
          style={{ backgroundImage: `url(${BgImage1})` }}
        />
        <div className="industry-hero-overlay">
          <div className="industry-hero-gradient" />
        </div>
      </div>

      {/* Animated Orbs */}
      <div className="industry-hero-orbs">
        <div className="orb-industry orb-1" />
        <div className="orb-industry orb-2" />
        <div className="orb-industry orb-3" />
        <div className="orb-industry orb-4" />
      </div>

      {/* Floating Particles */}
      <div className="industry-hero-particles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="particle-industry" 
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
              width: `${2 + Math.random() * 6}px`,
              height: `${2 + Math.random() * 6}px`,
              background: ['#22a7f0', '#6366f1', '#a78bfa', '#34d399'][Math.floor(Math.random() * 4)]
            }}
          />
        ))}
      </div>

      <div className="industry-hero-container">
        <motion.div
          className="industry-hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* LEFT COLUMN - Content */}
          <motion.div className="industry-hero-left" variants={itemVariants}>
            <div className="industry-hero-badge">
              <FaRocket className="badge-icon" />
              <span>Industry Solutions</span>
              <span className="badge-pulse" />
            </div>

            <h1 className="industry-hero-title">
              Digital Transformation{' '}
              <span >for Every Industry</span>
              {/* <span className="industry-hero-highlight">for Every Industry</span> */}
            </h1>

            <p className="industry-hero-description">
              Zeta-V delivers IT consulting services across financial services, manufacturing,
              healthcare, and retail & distribution solving complex challenges with AI, cloud, data
              analytics, and intelligent automation.
            </p>

            <div className="industry-hero-ctas">
              <a href="#industries-cards" className="btn-industry-primary">
                <span>Explore Industries</span>
                <HiArrowRight />
              </a>
        <Link 
 to="/contact"
  state={{ scrollTo: 'enquiries' }} 
  className="btn-industry-secondary"
  // onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  Talk to Our Experts
</Link>
            </div>

            <div className="industry-hero-features">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="feature-pill-industry">
                    <Icon />
                    <span>{feature.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Stats */}
          <motion.div 
            className="industry-hero-right"
            variants={itemVariants}
          >
            <div className="industry-hero-stats">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="stat-card-industry"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                  >
                    <div className="stat-icon-industry">
                      <Icon />
                    </div>
                    <div className="stat-content-industry">
                      <span className="stat-number-industry">{stat.value}</span>
                      <span className="stat-label-industry">{stat.label}</span>
                    </div>
                    <div className="stat-glow-industry" />
                  </motion.div>
                );
              })}
            </div>

            {/* Visual Element */}
            <div className="industry-hero-visual">
              <div className="industry-hero-visual-card">
                <div className="visual-header-industry">
                  <div className="visual-dots-industry">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="visual-title-industry">Industry Portfolio</span>
                </div>
                <div className="visual-body-industry">
                  <div className="visual-content-industry">
                    <div className="visual-item">
                      {/* <span className="visual-icon">🏦</span> */}
                      <span>Financial Services</span>
                    </div>
                    <div className="visual-item">
                      {/* <span className="visual-icon">🏭</span> */}
                      <span>Manufacturing</span>
                    </div>
                    <div className="visual-item">
                      {/* <span className="visual-icon">🏥</span> */}
                      <span>Healthcare</span>
                    </div>
                    <div className="visual-item">
                      {/* <span className="visual-icon">🏛️</span> */}
                      <span>Retail & Distribution</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Edge */}
      <div className="industry-hero-bottom" />
    </section>
  )
}