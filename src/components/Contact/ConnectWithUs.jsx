import './ConnectWithUs.css'
import { motion } from 'framer-motion'
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa6'

const socialLinks = [
  { icon: <FaLinkedinIn />, name: 'LinkedIn', url: '#', color: '#0077B5' },
  { icon: <FaXTwitter />, name: 'Twitter', url: '#', color: '#000000' },
  { icon: <FaInstagram />, name: 'Instagram', url: '#', color: '#E4405F' },
  { icon: <FaYoutube />, name: 'YouTube', url: '#', color: '#FF0000' },
  { icon: <FaGithub />, name: 'GitHub', url: '#', color: '#333333' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { 
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
}

export default function ConnectWithUs() {
  return (
    <section className="connect-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
    <span className="section-label">
  <span className="label-dot"></span>
  Stay Connected
  <span className="label-line"></span>
</span>
<h2 className="section-title">
  Connect <span className="grad-text">With Us</span>
</h2>
<p className="section-subtitle">
  Follow us on social media for the latest updates and insights.
</p>
      </motion.div>

      <motion.div 
        className="social-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            className="social-card"
            variants={itemVariants}
            whileHover={{ 
              y: -8, 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            style={{ '--social-color': social.color }}
          >
            <div className="social-icon-wrapper">
              <motion.div 
                className="social-icon"
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  color: social.color
                }}
                transition={{ duration: 0.5 }}
              >
                {social.icon}
              </motion.div>
              <div className="social-icon-glow" style={{ background: social.color }}></div>
            </div>
            <span className="social-name">{social.name}</span>
            <motion.div 
              className="social-arrow"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.a>
        ))}
      </motion.div>

      <motion.div 
        className="newsletter-box"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <motion.div 
          className="newsletter-icon"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </motion.div>
        <h3>Stay Updated</h3>
        <p>Subscribe to our newsletter for the latest insights and updates.</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <motion.button 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }}
          >
            Subscribe
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}