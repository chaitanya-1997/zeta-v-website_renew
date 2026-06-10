import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaRocket, FaUsers, FaLaptopCode, FaGlobe } from 'react-icons/fa'
import './StatsSection.css'

const stats = [
  { value: '500+', label: 'Projects Delivered', icon: <FaRocket />, color: '#00D4FF' },
  { value: '200+', label: 'Tech Experts', icon: <FaUsers />, color: '#7C5CFF' },
  { value: '20+', label: 'Technologies', icon: <FaLaptopCode />, color: '#FF4FB7' },
  { value: 'Global', label: 'Opportunities', icon: <FaGlobe />, color: '#43E97B' },
]

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="careers-stats" ref={ref}>
      <div className="careers-stats__inner">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            className="careers-stats__card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="careers-stats__icon" style={{ color: stat.color }}>{stat.icon}</div>
            <div className="careers-stats__value">{stat.value}</div>
            <div className="careers-stats__label">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}