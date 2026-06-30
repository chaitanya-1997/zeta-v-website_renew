// WhyJoinSection.jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  FaGraduationCap, 
  FaLaptopCode, 
  FaDollarSign, 
  FaHeartbeat, 
  FaChartLine, 
  FaCloudUploadAlt, 
  FaSmile, 
  FaGlobe 
} from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi2'
import './WhyJoinSection.css'

const reasons = [
  { 
    icon: <FaGraduationCap />, 
    title: 'Learning & Growth', 
    desc: 'Continuous learning with paid certifications and workshops', 
    gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
    color: '#22a7f0',
    bg: 'rgba(34, 167, 240, 0.08)'
  },
  { 
    icon: <FaLaptopCode />, 
    title: 'On-Site Work', 
    desc: 'Flexible WFH and office options', 
    gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
    color: '#34d399',
    bg: 'rgba(52, 211, 153, 0.08)'
  },
  { 
    icon: <FaDollarSign />, 
    title: 'Competitive Salary', 
    desc: 'Industry-leading compensation with regular reviews', 
    gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    color: '#f472b6',
    bg: 'rgba(244, 114, 182, 0.08)'
  },
  { 
    icon: <FaHeartbeat />, 
    title: 'Health Benefits', 
    desc: 'Comprehensive insurance for you and family', 
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    color: '#f59e0b',
    bg: 'rgba(245, 158, 11, 0.08)'
  },
  { 
    icon: <FaChartLine />, 
    title: 'Career Acceleration', 
    desc: 'Fast-track promotions and leadership programs', 
    gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
    color: '#a78bfa',
    bg: 'rgba(167, 139, 250, 0.08)'
  },
  { 
    icon: <FaCloudUploadAlt />, 
    title: 'AI & Cloud Projects', 
    desc: 'Work on cutting-edge technologies', 
    gradient: 'linear-gradient(135deg, #22a7f0, #06b6d4)',
    color: '#22a7f0',
    bg: 'rgba(34, 167, 240, 0.08)'
  },
  { 
    icon: <FaSmile />, 
    title: 'Flexible Culture', 
    desc: 'Open culture with work-life balance', 
    gradient: 'linear-gradient(135deg, #f472b6, #f59e0b)',
    color: '#f472b6',
    bg: 'rgba(244, 114, 182, 0.08)'
  },
  { 
    icon: <FaGlobe />, 
    title: 'Global Exposure', 
    desc: 'International projects and collaboration', 
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    color: '#6366f1',
    bg: 'rgba(99, 102, 241, 0.08)'
  },
]

export default function WhyJoinSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="whyjoin-premium-light" ref={ref}>
      {/* Background Decorations */}
      <div className="whyjoin-premium-light-bg">
        <div className="whyjoin-premium-light-blob wlblob-1" />
        <div className="whyjoin-premium-light-blob wlblob-2" />
        <div className="whyjoin-premium-light-blob wlblob-3" />
        <div className="whyjoin-premium-light-blob wlblob-4" />
      </div>
      <div className="whyjoin-premium-light-pattern" />

      <div className="whyjoin-premium-light-container">
        {/* Header */}
        <motion.div 
          className="whyjoin-premium-light-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="industry-cards-premium-label">
           <span className="label-line" />
            <span className="label-text">Why Join Us</span>
                <span className="label-line" />
         </div>
          
          <h2 className="whyjoin-premium-light-title">
            Why 
            {/* <span className="gradient-text-whyjoin-light">Zeta-V</span> */}
            <span> Zeta-V</span>
            <span className="title-icon-light">✦</span>
          </h2>
          
          <p className="whyjoin-premium-light-subtitle">
            We offer an environment where you can grow, innovate, and thrive.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="whyjoin-premium-light-grid">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                className="whyjoin-premium-light-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.04, duration: 0.5 }}
                whileHover={{ y: -6 }}
                style={{ '--card-color': reason.color }}
              >
                <div className="whyjoin-premium-light-card-glow" style={{ background: reason.gradient }} />
                
                <div className="whyjoin-premium-light-card-icon" style={{ background: reason.bg, color: reason.color }}>
                  {Icon}
                </div>
                
                <h3 className="whyjoin-premium-light-card-title">{reason.title}</h3>
                <p className="whyjoin-premium-light-card-desc">{reason.desc}</p>
                
                <div className="whyjoin-premium-light-card-number">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                
                <div className="whyjoin-premium-light-card-line" style={{ background: reason.gradient }} />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Edge */}
      <div className="whyjoin-premium-light-bottom" />
    </section>
  )
}