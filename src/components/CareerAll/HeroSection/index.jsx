// CareerHero.jsx
import { useRef, useState, useEffect } from 'react'
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


const features = [
  { icon: HiOutlineSparkles, label: 'AI & Innovation' },
  { icon: HiOutlineCpuChip, label: 'Cloud Technology' },
  { icon: HiOutlineGlobeAlt, label: 'Global Impact' },
];

// ─── NEW API ENDPOINT ───
// Returns an array of all jobs → we use the array length
const API_URL = 'https://zeta-v-invoicemanagement-ddgwdzg2dchdfaf4.centralindia-01.azurewebsites.net/api/public/jobs';

export default function CareerHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // ─── State for total jobs count ───
  const [totalJobs, setTotalJobs] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // ─── Fetch all jobs and count them ───
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(API_URL)
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        
        // Check if data.data is an array and get its length
        if (data.success && Array.isArray(data.data)) {
          setTotalJobs(data.data.length)
        } else {
          throw new Error('Invalid response structure – expected an array')
        }
      } catch (err) {
        console.error('Failed to fetch jobs:', err)
        setError(err.message)
        // Fallback to a default value so UI still looks good
        setTotalJobs(0)
      } finally {
        setIsLoading(false)
      }
    }

    fetchJobs()
  }, [])



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
                      <span>{isLoading ? 'Loading...' : `${totalJobs || 0}+ Open Roles`}</span>
                    </div>
                    <div className="visual-item">
                      <span>AI & Cloud Projects</span>
                    </div>
                    <div className="visual-item">
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