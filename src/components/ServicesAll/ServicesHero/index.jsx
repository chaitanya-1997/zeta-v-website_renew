// src/components/ServicesAll/ServicesHero/Index.jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './ServicesHero.css'

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "200+", label: "Happy Clients" },
  { value: "98%", label: "Client Retention" },
  { value: "24/7", label: "Support Available" },
];

export default function ServicesHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="hero" ref={ref}>
      <div className="hero__bg">
        <motion.div
          className="hero__bg-image"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.1, 1] }}
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          }}
        />
        <div className="hero__bg-overlay"></div>
      </div>

      <div className="hero__inner">
        <div className="hero__left">
          <span className="hero__overline">Cutting-Edge Technology Solutions</span>
          <h1 className="hero__h1">
            <span className="hero__h1a">Technology Services</span>
            <span className="hero__h1b">
              that Accelerate <span className="grad-text">Digital Transformation</span>
            </span>
          </h1>
          <p className="hero__sub">
            Zeta-V is a leading provider of AI-driven digital transformation and
            IT consulting services for enterprises. We help organizations
            accelerate growth through cloud migration services, generative AI,
            data analytics, and enterprise modernization.
          </p>
          <div className="hero__ctas">
            <a href="#detailed-services" className="btn-grad">
              Explore Our Services →
            </a>
            <a href="#contact" className="btn-outline">
              Talk to an Expert
            </a>
          </div>
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