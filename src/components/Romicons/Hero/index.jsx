// AdvisoryHero.jsx
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
  HiOutlineLightBulb
} from 'react-icons/hi2'
import { FaRocket } from 'react-icons/fa'
import './AdvisoryHero.css'
import { Link } from 'react-router-dom';

// Import background image
import advisoryBg from '../../../assets/images/Hero3.webp'

const stats = [
  { value: '242+', label: 'Advisory Projects', icon: HiOutlineBriefcase },
  { value: '34+', label: 'Global Clients', icon: HiOutlineUsers },
  { value: '98%', label: 'Success Rate', icon: HiOutlineChartBar },
  { value: '9+', label: 'Years Experience', icon: HiOutlineSparkles },
];

const features = [
  { icon: HiOutlineLightBulb, label: 'Strategic Advisory' },
  { icon: HiOutlineCpuChip, label: 'Tech Transformation' },
  { icon: HiOutlineGlobeAlt, label: 'Market Expansion' },
];

export default function AdvisoryHero() {
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
    <section className="advisory-hero-premium" ref={ref}>
      {/* Background */}
      <div className="advisory-hero-bg">
        <div 
          className="advisory-hero-bg-image" 
          style={{ backgroundImage: `url(${advisoryBg})` }}
        />
        <div className="advisory-hero-overlay">
          <div className="advisory-hero-gradient" />
        </div>
      </div>

      {/* Animated Orbs */}
      <div className="advisory-hero-orbs">
        <div className="orb-advisory orb-1" />
        <div className="orb-advisory orb-2" />
        <div className="orb-advisory orb-3" />
        <div className="orb-advisory orb-4" />
      </div>

      <div className="advisory-hero-container">
        <motion.div
          className="advisory-hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* LEFT COLUMN - Content */}
          <motion.div className="advisory-hero-left" variants={itemVariants}>
            <div className="advisory-hero-badge">
              <FaRocket className="badge-icon" />
              <span>Strategic Advisory Services</span>
              <span className="badge-pulse" />
            </div>

            <h1 className="advisory-hero-title">
              Business 
              <span > Advisories</span>
              {/* <span className="advisory-hero-highlight">Advisories</span> */}
              <br />
              <span className="advisory-hero-sub"> that turn Strategy Into Value.</span>
            </h1>

            <p className="advisory-hero-description">
              Driving sustainable growth, market expansion, strategic transactions, 
              and technology transformation through expert advisory and execution excellence.
            </p>

          <div className="advisory-hero-ctas">
  <Link 
    to="/services" 
    className="btn-advisory-primary"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    <span>Explore Advisories</span>
    <HiArrowRight />
  </Link>
  <Link 
   to="/contact"
  state={{ scrollTo: 'enquiries' }} 
    className="btn-advisory-secondary"
    // onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    Talk to Experts
  </Link>
</div>

            <div className="advisory-hero-features">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="feature-pill-advisory">
                    <Icon />
                    <span>{feature.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Stats */}
          <motion.div 
            className="advisory-hero-right"
            variants={itemVariants}
          >
            <div className="advisory-hero-stats">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="stat-card-advisory"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                  >
                    <div className="stat-icon-advisory">
                      <Icon />
                    </div>
                    <div className="stat-content-advisory">
                      <span className="stat-number-advisory">{stat.value}</span>
                      <span className="stat-label-advisory">{stat.label}</span>
                    </div>
                    <div className="stat-glow-advisory" />
                  </motion.div>
                );
              })}
            </div>

            {/* Visual Element */}
            <div className="advisory-hero-visual">
              <div className="advisory-hero-visual-card">
                <div className="visual-header-advisory">
                  <div className="visual-dots-advisory">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="visual-title-advisory">Advisory Insights</span>
                </div>
                <div className="visual-body-advisory">
                  <div className="visual-content-advisory">
                    <div className="visual-item">
                      {/* <span className="visual-icon">📊</span> */}
                      <span>Strategic Planning</span>
                    </div>
                    <div className="visual-item">
                      {/* <span className="visual-icon">🌍</span> */}
                      <span>Market Expansion</span>
                    </div>
                    <div className="visual-item">
                      {/* <span className="visual-icon">🚀</span> */}
                      <span>Growth Strategy</span>
                    </div>
                    <div className="visual-item">
                      {/* <span className="visual-icon">💡</span> */}
                      <span>Innovation Advisory</span>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Edge */}
      <div className="advisory-hero-bottom" />
    </section>
  )
}