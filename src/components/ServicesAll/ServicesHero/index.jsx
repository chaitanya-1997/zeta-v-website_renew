// ServicesHero.jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  HiArrowRight, 
  HiOutlineSparkles, 
  HiOutlineGlobeAlt,
  HiOutlineCpuChip,
  HiOutlineCloud,
  HiOutlineCodeBracket,
  HiArrowUpRight 
} from 'react-icons/hi2'
import { FaRocket } from 'react-icons/fa'
import './ServicesHero.css'
import { Link } from 'react-router-dom';

const stats = [
  { value: '34+', label: 'Enterprise Clients', icon: HiOutlineGlobeAlt },
  { value: '242+', label: 'Projects Delivered', icon: HiOutlineCodeBracket },
  { value: '98%', label: 'Client Retention', icon: HiOutlineSparkles },
  { value: '9+', label: 'Years Experience', icon: HiArrowUpRight },
];

const features = [
  { icon: HiOutlineCloud, label: 'Cloud Solutions' },
  { icon: HiOutlineCpuChip, label: 'AI & Automation' },
  { icon: HiOutlineGlobeAlt, label: 'Global Impact' },
];

export default function ServicesHero() {
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

  // Function to scroll to Services Detailed section
  const scrollToDetailedServices = () => {
    const section = document.getElementById('services-premium-detail')
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
    <section className="services-hero-premium" ref={ref}>
      {/* Background */}
      <div className="services-hero-bg">
        <div 
          className="services-hero-bg-image" 
          style={{ backgroundImage: `url(https://images.pexels.com/photos/7658350/pexels-photo-7658350.jpeg)` }}
        />
        <div className="services-hero-overlay">
          <div className="services-hero-gradient" />
        </div>
      </div>

      {/* Animated Orbs */}
      <div className="services-hero-orbs">
        <div className="orb-services orb-1" />
        <div className="orb-services orb-2" />
        <div className="orb-services orb-3" />
        <div className="orb-services orb-4" />
      </div>

      <div className="services-hero-container">
        <motion.div
          className="services-hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* LEFT COLUMN - Content */}
          <motion.div className="services-hero-left" variants={itemVariants}>
            <div className="services-hero-badge">
              <FaRocket className="badge-icon" />
              <span>Cutting-Edge Technology Solutions</span>
              <span className="badge-pulse" />
            </div>

            <h1 className="services-hero-title">
              Technology Services{' '}
              <span >that Accelerate Digital Transformation</span>
              {/* <span className="services-hero-highlight">that Accelerate Digital Transformation</span> */}
            </h1>

            <p className="services-hero-description">
              Zeta-V is a leading provider of AI-driven digital transformation and
              IT consulting services for enterprises. We help organizations
              accelerate growth through cloud migration services, generative AI,
              data analytics, and enterprise modernization.
            </p>

            <div className="services-hero-ctas">
             <a 
                href="#services-premium-detail" 
                onClick={scrollToDetailedServices}
                className="btn-services-primary"
              >
                <span>Explore Our Services</span>
                <HiArrowRight />
              </a>
              <Link 
               to="/contact"
  state={{ scrollTo: 'enquiries' }} 
                className="btn-services-secondary"
                // onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Talk to an Expert
              </Link>
            </div>

            <div className="services-hero-features">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="feature-pill-services">
                    <Icon />
                    <span>{feature.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Stats */}
          <motion.div 
            className="services-hero-right"
            variants={itemVariants}
          >
            <div className="services-hero-stats">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="stat-card-services"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                  >
                    <div className="stat-icon-services">
                      <Icon />
                    </div>
                    <div className="stat-content-services">
                      <span className="stat-number-services">{stat.value}</span>
                      <span className="stat-label-services">{stat.label}</span>
                    </div>
                    <div className="stat-glow-services" />
                  </motion.div>
                );
              })}
            </div>

            {/* Visual Element */}
            <div className="services-hero-visual">
              <div className="services-hero-visual-card">
                <div className="visual-header-services">
                  <div className="visual-dots-services">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="visual-title-services">Service Portfolio</span>
                </div>
                <div className="visual-body-services">
                  <div className="visual-content-services">
                    <div className="visual-item">
                      <span>Cloud Migration</span>
                    </div>
                    <div className="visual-item">
                      <span>Generative AI</span>
                    </div>
                    <div className="visual-item">
                      <span>Data Analytics</span>
                    </div>
                    <div className="visual-item">
                      <span>Enterprise Modernization</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Edge */}
      <div className="services-hero-bottom" />
    </section>
  )
}