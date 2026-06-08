import './ContactHero.css'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaHeadset, FaMapMarkerAlt } from 'react-icons/fa'
import contactHeroBg from '../../assets/contactimg/contact-hero.jpg'

export default function ContactHero() {
  return (
    <section className="contact-hero">
      {/* Background Image */}
      <div className="contact-hero-bg">
        <div className="contact-hero-bg-image" style={{ backgroundImage: `url(${contactHeroBg})` }}></div>
        <div className="contact-hero-bg-overlay"></div>
      </div>

      <div className="contact-hero-content">
        {/* Left - Text */}
        <motion.div 
          className="contact-hero-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Get In Touch</span>
          <h1 className="contact-hero-title">
            Let's Build Something <span className="grad-text">Amazing Together</span>
          </h1>
          <p className="contact-hero-subtitle">
            Have a project in mind? We'd love to hear about it. Our team is ready to help 
            you transform your ideas into reality with enterprise-grade solutions.
          </p>
          
          {/* Quick contact cards - Light bluish, no animation */}
          <div className="contact-hero-cards">
            <div className="contact-hero-card">
              <div className="contact-hero-card-icon">
                <FaPhone />
              </div>
              <div className="contact-hero-card-text">
                <span>Call Us</span>
                <strong>+1 (555) 123-4567</strong>
              </div>
            </div>

            <div className="contact-hero-card">
              <div className="contact-hero-card-icon">
                <FaEnvelope />
              </div>
              <div className="contact-hero-card-text">
                <span>Email Us</span>
                <strong>hello@zeta-v.com</strong>
              </div>
            </div>

            <div className="contact-hero-card">
              <div className="contact-hero-card-icon">
                <FaHeadset />
              </div>
              <div className="contact-hero-card-text">
                <span>Support</span>
                <strong>24/7 Available</strong>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right - Animated Visual */}
        <motion.div 
          className="contact-hero-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="contact-hero-visual">
            <motion.div 
              className="contact-hero-circle circle-1"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div 
              className="contact-hero-circle circle-2"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            ></motion.div>
            <motion.div 
              className="contact-hero-circle circle-3"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            ></motion.div>
            <div className="contact-hero-icon-center">
              <FaMapMarkerAlt />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}