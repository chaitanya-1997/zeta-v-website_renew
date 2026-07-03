// ContactHero.jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  FaPhone, 
  FaEnvelope, 
  FaHeadset, 
  FaMapMarkerAlt,
  FaArrowRight
} from 'react-icons/fa'
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineSparkles, HiOutlineChatBubbleLeft } from 'react-icons/hi2'
import contactHeroBg from '../../assets/images/contact-hero.webp'
import './ContactHero.css'

export default function ContactHero() {
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

  return (
    <section className="contact-hero-premium" ref={ref}>
      {/* Background */}
      <div className="contact-hero-bg">
        <div 
          className="contact-hero-bg-image" 
          style={{ backgroundImage: `url(${contactHeroBg})` }}
        />
        <div className="contact-hero-overlay">
          <div className="contact-hero-gradient" />
        </div>
      </div>

      {/* Animated Orbs */}
      <div className="contact-hero-orbs">
        <div className="orb-contact orb-1" />
        <div className="orb-contact orb-2" />
        <div className="orb-contact orb-3" />
        <div className="orb-contact orb-4" />
      </div>

      <div className="contact-hero-container">
        <motion.div
          className="contact-hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* LEFT COLUMN - Content */}
          <motion.div className="contact-hero-left" variants={itemVariants}>
            <div className="contact-hero-badge">
              <HiOutlineSparkles className="badge-icon" />
              <span>Get In Touch</span>
              <span className="badge-pulse" />
            </div>

            <h1 className="contact-hero-title">
              Let's Build Something{' '}
                <span >Amazing Together</span>
              {/* <span className="contact-hero-highlight">Amazing Together</span> */}
            </h1>

            <p className="contact-hero-description">
              Give us a call or drop by anytime, we endeavour to answer all enquiries 
              within 24 hours on business days. We will be happy to answer your questions.
            </p>

            {/* Contact Cards */}
          <div className="contact-hero-cards">
  <motion.a 
    href="tel:+912069015402" 
    className="contact-hero-card"
    whileHover={{ y: -4 }}
    variants={itemVariants}
  >
    <div className="contact-hero-card-icon" style={{ background: 'linear-gradient(135deg, #22a7f0, #6366f1)' }}>
      <FaPhoneAlt />
    </div>
    <div className="contact-hero-card-content">
      <span>Call Us</span>
      <strong>+91 206-901-5402</strong>
    </div>
  </motion.a>

  <motion.a 
    href="mailto:contactus@zeta-v.com" 
    className="contact-hero-card"
    whileHover={{ y: -4 }}
    variants={itemVariants}
  >
    <div className="contact-hero-card-icon" style={{ background: 'linear-gradient(135deg, #34d399, #06b6d4)' }}>
      <FaEnvelope />
    </div>
    <div className="contact-hero-card-content">
      <span>Email Us</span>
      <strong>contactus@zeta-v.com</strong>
    </div>
  </motion.a>

  {/* Visit Us – now a clickable link opening map in new tab */}
  <motion.a 
    href="https://www.google.com/maps/search/?api=1&query=18.5963698,73.7180639"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-hero-card"
    whileHover={{ y: -4 }}
    variants={itemVariants}
  >
    <div className="contact-hero-card-icon" style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)' }}>
      <FaMapMarkerAlt />
    </div>
    <div className="contact-hero-card-content">
      <span>Visit Us</span>
      <strong>Pune, India</strong>
    </div>
  </motion.a>
</div>
          </motion.div>

          {/* RIGHT COLUMN - Visual Element */}
          <motion.div 
            className="contact-hero-right"
            variants={itemVariants}
          >
            <div className="contact-hero-visual">
              <div className="contact-hero-visual-card">
                <div className="visual-header-contact">
                  <div className="visual-dots-contact">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="visual-title-contact">Contact Center</span>
                </div>
                <div className="visual-body-contact">
                  <div className="visual-content-contact">
                    <div className="visual-item">
                      {/* <span className="visual-icon">📞</span> */}
                      <span>Phone Support</span>
                    </div>
                    <div className="visual-item">
                      {/* <span className="visual-icon">✉️</span> */}
                      <span>Email Response</span>
                    </div>
                    <div className="visual-item">
                      {/* <span className="visual-icon">💬</span> */}
                      <span>Live Chat</span>
                    </div>
                    <div className="visual-item">
                      {/* <span className="visual-icon">📍</span> */}
                      <span>Visit Office</span>
                    </div>
                  </div>
                </div>
                <div className="visual-footer-contact">
                  <span className="visual-status">
                    <span className="status-dot" />
                    All lines open
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Edge */}
      <div className="contact-hero-bottom" />
    </section>
  )
}