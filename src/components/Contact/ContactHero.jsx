// src/components/ContactAll/ContactHero/Index.jsx
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaPhone, FaEnvelope, FaHeadset, FaMapMarkerAlt } from 'react-icons/fa'
import contactHeroBg from '../../assets/images/contact-hero.jpg'
import './ContactHero.css'

export default function ContactHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section className="hero" ref={ref}>
      <div className="hero__bg">
        <motion.div 
          className="hero__bg-image"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.1, 1] }}
          style={{ backgroundImage: `url(${contactHeroBg})` }}
        />
        <div className="hero__bg-overlay"></div>
      </div>

      {/* Stars background */}
      <div className="hero__stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>

      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="hero__inner">
        {/* LEFT SIDE */}
        <div className="hero__left">
          <motion.div style={{ y }}>
            <span className="hero__overline">Get In Touch</span>
            <h1 className="hero__h1">
              <span className="hero__h1a">Let's Build Something</span>
              <span className="hero__h1b">
                <span className="grad-text">Amazing Together</span>
              </span>
            </h1>
            <p className="hero__sub">
              Have a project in mind? We'd love to hear about it. Our team is ready to help 
              you transform your ideas into reality with enterprise-grade solutions.
            </p>
            
            {/* Contact Cards */}
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-card-icon">
                  <FaPhone />
                </div>
                <div className="contact-card-text">
                  <span>Call Us</span>
                  <strong>+1 (555) 123-4567</strong>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-card-text">
                  <span>Email Us</span>
                  <strong>hello@zeta-v.com</strong>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <FaHeadset />
                </div>
                <div className="contact-card-text">
                  <span>Support</span>
                  <strong>24/7 Available</strong>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      
      </div>

      <motion.div 
        className="hero__scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span>Scroll to explore</span>
        <div className="hero__scroll-dot" />
      </motion.div>
    </section>
  )
}