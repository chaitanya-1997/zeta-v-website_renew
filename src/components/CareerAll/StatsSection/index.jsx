// StatsSection.jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  FaRocket, 
  FaUsers, 
  FaLaptopCode, 
  FaGlobe,
  FaArrowTrendUp
} from 'react-icons/fa6'
import { HiOutlineSparkles } from 'react-icons/hi2'
import './StatsSection.css'

const stats = [
  { 
    value: '242+', 
    label: 'Projects Delivered', 
    icon: <FaRocket />, 
    gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
    color: '#22a7f0',
    bg: 'rgba(34, 167, 240, 0.08)'
  },
  { 
    value: '50+', 
    label: 'Tech Experts', 
    icon: <FaUsers />, 
    gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
    color: '#34d399',
    bg: 'rgba(52, 211, 153, 0.08)'
  },
  { 
    value: '20+', 
    label: 'Technologies', 
    icon: <FaLaptopCode />, 
    gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    color: '#f472b6',
    bg: 'rgba(244, 114, 182, 0.08)'
  },
  { 
    value: 'Global', 
    label: 'Opportunities', 
    icon: <FaGlobe />, 
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    color: '#f59e0b',
    bg: 'rgba(245, 158, 11, 0.08)'
  },
]

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section className="stats-premium" ref={ref}>
      {/* Background Decorations */}
      <div className="stats-premium-bg">
        <div className="stats-premium-blob sblob-1" />
        <div className="stats-premium-blob sblob-2" />
        <div className="stats-premium-blob sblob-3" />
      </div>

      <div className="stats-premium-container">
        {/* Label */}
        <motion.div 
          className="stats-premium-label"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <HiOutlineSparkles className="label-icon" />
          <span>Our Impact in Numbers</span>
          
        </motion.div>

        {/* Stats Grid */}
        <div className="stats-premium-grid">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="stats-premium-card"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{ '--card-color': stat.color }}
            >
              <div className="stats-premium-card-glow" style={{ background: stat.gradient }} />
              
              <div className="stats-premium-card-icon" style={{ background: stat.bg, color: stat.color }}>
                {stat.icon}
              </div>
              
              <div className="stats-premium-card-content">
                <span className="stats-premium-card-value">{stat.value}</span>
                <span className="stats-premium-card-label">{stat.label}</span>
              </div>
              
              <div className="stats-premium-card-line" style={{ background: stat.gradient }} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <motion.div 
          className="stats-premium-divider"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="divider-line" />
          <span className="divider-icon">✦</span>
          <span className="divider-line" />
        </motion.div>
      </div>
    </section>
  )
}