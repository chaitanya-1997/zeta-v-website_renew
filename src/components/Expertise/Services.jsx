import './Services.css'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { FaRocket, FaBuilding, FaUsers, FaShareAlt } from 'react-icons/fa'

const services = [
  { 
    title: 'Digital Acceleration', 
    desc: 'Rapid adoption of digital technologies driving growth, innovation and efficiency in a digital-first world. We focus on cloud adoption, AI driven automation, IoT enablement and Cybersecurity.',
    icon: <FaRocket />, 
    color: '#0d47a1', 
    features: ['Strategy Consulting', 'Digital Footprint', 'Analytics & Automation', 'Co-creation & Monetization'] 
  },
  { 
    title: 'Enterprise Transformation', 
    desc: 'Bridging the gap between business goals and IT capabilities, ensuring technology investments support long-term strategic objectives. We focus on SaaS enterprise solutions in Microsoft.',
    icon: <FaBuilding />, 
    color: '#1565c0', 
    features: ['Strategy & Selection', 'Enterprise Technologies', 'Legacy Transformation', 'Engineering Solutions'] 
  },
  { 
    title: 'Workforce Management', 
    desc: 'Specialised team of consultants providing full range of services including managed talent acquisition, staff augmentation, training & skilling, deployment support and program management.',
    icon: <FaUsers />, 
    color: '#1976d2', 
    features: ['Staff Augmentation', 'Lateral Hiring', 'Deployment Support', 'Program Management'] 
  },
  { 
    title: 'Shared Services', 
    desc: 'Dedicated business unit focused on providing shared services in India and China on-demand basis for entity incorporation & sustenance; Accounts, HR, Admin & Procurement; Compliance.',
    icon: <FaShareAlt />, 
    color: '#00b4ff', 
    features: ['Incorporation Services', 'Sustenance Services', 'Compliance & Taxation', 'Managed Infrastructure'] 
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateY: 10 },
  show: { opacity: 1, y: 0, rotateY: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
}

const featureContainerVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.08, 
      delayChildren: 0.3 
    } 
  }
}

const featureVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.9 },
  show: { 
    opacity: 1, y: 0, scale: 1, 
    transition: { duration: 0.4, ease: "easeOut" } 
  }
}

export default function Services() {
  useEffect(() => {
    const cards = document.querySelectorAll('.service-card')
    const handleMouseMove = (e) => {
      cards.forEach(card => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`)
        card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`)
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="services-section">
      <div className="services-bg-animation">
        <div className="bg-ring ring-1"></div>
        <div className="bg-ring ring-2"></div>
      </div>

      <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
       <span className="section-label">
  <span className="label-dot"></span>
  What We Offer
  <span className="label-line"></span>
</span>
<h2 className="section-title">
  Our <span className="grad-text">Services</span>
</h2>
<p className="section-subtitle">
  Delivering innovative digital services for modern enterprises.
</p>
      </motion.div>

      <motion.div className="services-grid" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {services.map((service, index) => (
          <motion.div className="service-card" key={index} variants={cardVariants} whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}>
            <div className="service-card-inner">
              <div className="service-icon-wrapper">
                <motion.div 
                  className="service-icon-container"
                  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1.1, 1] }} 
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <div className="service-icon-bg-new" style={{ backgroundColor: `${service.color}15` }}>
                    <span className="service-icon" style={{ color: service.color }}>{service.icon}</span>
                  </div>
                </motion.div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <motion.div 
                className="service-features-grid" 
                variants={featureContainerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {service.features.map((feature, idx) => (
                  <motion.div 
                    key={idx} 
                    className="feature-item"
                    variants={featureVariants}
                    whileHover={{ scale: 1.05, backgroundColor: `${service.color}15`, borderColor: service.color }}
                  >
                    <span className="feature-dot" style={{ backgroundColor: service.color }}></span>
                    <span className="feature-text">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}