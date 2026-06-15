import './ProjectsDelivered.css'
import { motion } from 'framer-motion'
import { useCountUp } from '../../hooks/useCountUp'
import { useEffect, useState, useRef } from 'react'
import { FaRocket, FaBuilding, FaGlobeAmericas, FaHeart } from 'react-icons/fa'

const projects = [
  { value: 120, suffix: '+', label: 'Projects Delivered', icon: <FaRocket />, color: '#00b4ff' },
  { value: 40, suffix: '+', label: 'Enterprise Clients', icon: <FaBuilding />, color: '#00b4ff' },
  { value: 15, suffix: '+', label: 'Industries Served', icon: <FaGlobeAmericas />, color: '#00b4ff' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', icon: <FaHeart />, color: '#00b4ff' },
]

function CounterCard({ value, suffix, label, icon, color, index }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)
  const [countRef, count] = useCountUp(value, 2000, isVisible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.5 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={cardRef}
      className="project-card"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] } }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
    >
      <div className="project-shine"></div>
      <motion.div 
        className="project-icon" 
        animate={{ y: [0, -4, 0] }} 
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="project-icon-bg" style={{ backgroundColor: `${color}15` }}>
          <span style={{ color: color, fontSize: '26px', display: 'flex' }}>{icon}</span>
        </div>
      </motion.div>
      <h1 ref={countRef}>{count}{suffix}</h1>
      <p>{label}</p>
      <div className="project-decoration">
        <div className="decoration-circle"></div>
        <div className="decoration-circle"></div>
        <div className="decoration-circle"></div>
      </div>
    </motion.div>
  )
}

export default function ProjectsDelivered() {
  return (
    <section id="projects" className="projects-section">
      <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2>Projects Delivered</h2>
        <p>Delivering impactful solutions across industries worldwide.</p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <CounterCard key={index} index={index} value={project.value} suffix={project.suffix} label={project.label} icon={project.icon} color={project.color} />
        ))}
      </div>
    </section>
  )
}