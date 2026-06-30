// ConnectWithUs.jsx
import './ConnectWithUs.css'
import { motion } from 'framer-motion'
import { 
  FaLinkedinIn, 
  FaXTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaFacebookF, 
  FaGithub,
  FaWhatsapp,
  FaArrowRight
} from 'react-icons/fa6'
import { HiOutlineSparkles } from 'react-icons/hi2'

const socialLinks = [
  { icon: <FaLinkedinIn />, name: 'LinkedIn', url: 'https://www.linkedin.com/company/zeta-v-technology-solutions-ltd/', color: '#0077B5', lightBg: 'rgba(0, 119, 181, 0.08)' },
  { icon: <FaXTwitter />, name: 'Twitter', url: 'https://x.com/ZetaV2024', color: '#000000', lightBg: 'rgba(0, 0, 0, 0.06)' },
  { icon: <FaInstagram />, name: 'Instagram', url: 'https://www.instagram.com/zetav24/', color: '#E4405F', lightBg: 'rgba(228, 64, 95, 0.08)' },
  { icon: <FaYoutube />, name: 'YouTube', url: 'https://www.youtube.com/@zeta-v-2024', color: '#FF0000', lightBg: 'rgba(255, 0, 0, 0.08)' },
  { icon: <FaFacebookF />, name: 'Facebook', url: 'https://www.facebook.com/people/Zeta-V-Technology-Solutions/61571634543628/', color: '#1877F2', lightBg: 'rgba(24, 119, 242, 0.08)' },
  { icon: <FaWhatsapp />, name: 'WhatsApp',url: 'https://wa.me/918087396605', color: '#25D366', lightBg: 'rgba(37, 211, 102, 0.08)' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { 
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export default function ConnectWithUs() {
  return (
    <section className="connect-premium">
      {/* Background Decorations */}
      <div className="connect-premium-bg">
        <div className="connect-premium-blob cblob-1" />
        <div className="connect-premium-blob cblob-2" />
        <div className="connect-premium-blob cblob-3" />
      </div>
      <div className="connect-premium-pattern" />

      <div className="connect-premium-container">
        {/* Header */}
        <motion.div 
          className="connect-premium-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="connect-premium-label">
            <span className="label-line" />
            <span className="label-text">Stay Connected</span>
            <span className="label-line" />
          </div>
          
          <h2 className="connect-premium-title">
            Connect 
            {/* <span className="gradient-text-connect">With Us</span> */}
            <span > With Us</span>
            <span className="title-icon">✦</span>
          </h2>
          
          <p className="connect-premium-subtitle">
            Follow us on social media for the latest updates and insights.
          </p>
        </motion.div>

        {/* Social Grid */}
        <motion.div 
          className="connect-premium-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="connect-premium-card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              style={{ '--social-color': social.color }}
            >
              <div className="connect-premium-card-glow" style={{ background: social.color }} />
              
              <div className="connect-premium-card-icon" style={{ background: social.lightBg, color: social.color }}>
                {social.icon}
              </div>
              
              <h3 className="connect-premium-card-name">{social.name}</h3>
              
              <div className="connect-premium-card-arrow" style={{ color: social.color }}>
                <FaArrowRight />
              </div>
              
              <div className="connect-premium-card-line" style={{ background: social.color }} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Bottom Edge */}
      <div className="connect-premium-bottom" />
    </section>
  )
}