import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGraduationCap, FaLaptopCode, FaDollarSign, FaHeartbeat, FaChartLine, FaCloudUploadAlt, FaSmile, FaGlobe } from 'react-icons/fa'
import './WhyJoinSection.css'
const reasons = [
  { icon: <FaGraduationCap />, title: 'Learning & Growth', desc: 'Continuous learning with paid certifications and workshops', color: '#00D4FF' },
  { icon: <FaLaptopCode />, title: 'Hybrid Work', desc: 'Flexible remote and office options', color: '#7C5CFF' },
  { icon: <FaDollarSign />, title: 'Competitive Salary', desc: 'Industry-leading compensation with regular reviews', color: '#FF4FB7' },
  { icon: <FaHeartbeat />, title: 'Health Benefits', desc: 'Comprehensive insurance for you and family', color: '#43E97B' },
  { icon: <FaChartLine />, title: 'Career Acceleration', desc: 'Fast-track promotions and leadership programs', color: '#F59E0B' },
  { icon: <FaCloudUploadAlt />, title: 'AI & Cloud Projects', desc: 'Work on cutting-edge technologies', color: '#06B6D4' },
  { icon: <FaSmile />, title: 'Flexible Culture', desc: 'Open culture with work-life balance', color: '#EC4899' },
  { icon: <FaGlobe />, title: 'Global Exposure', desc: 'International projects and collaboration', color: '#8B5CF6' },
]

export default function WhyJoinSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="careers-why" ref={ref}>
      <div className="careers-why__bg">
        <div className="careers-why__bg-pattern" />
      </div>
      <div className="careers-why__inner">
        <motion.div
          className="careers-why__head"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Why Join Us</span>
          <h2 className="section-title">
            Why <span className="grad-text">Zeta-V</span>?
          </h2>
          <p className="section-subtitle">
            We offer an environment where you can grow, innovate, and thrive.
          </p>
        </motion.div>

        <div className="careers-why__grid">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              className="careers-why__card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <div className="careers-why__card-icon" style={{ color: reason.color }}>{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
              <div className="careers-why__card-glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}