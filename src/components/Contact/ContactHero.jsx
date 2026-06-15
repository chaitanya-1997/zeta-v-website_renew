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
        {[...Array(20)].map((_, i) => (
          <div key={i} className="star" />
        ))}
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
            Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.
            </p>
            
            {/* Contact Cards */}
            <div className="contact-cards">
              {/* Phone Card - Clickable */}
              <a href="tel:+912069015402" className="contact-card">
                <div className="contact-card-icon">
                  <FaPhone />
                </div>
                <div className="contact-card-text">
                  <span>Call Us</span>
                  <strong>+91 20 6901 5402</strong>
                </div>
              </a>

              {/* Email Card - Clickable */}
              <a href="mailto:contactus@zeta-v.com" className="contact-card">
                <div className="contact-card-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-card-text">
                  <span>Email Us</span>
                  <strong>contactus@zeta-v.com</strong>
                  <strong>careers@zeta-v.com</strong>
                </div>
              </a>

              {/* Support Card */}
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

    
    </section>
  )
}