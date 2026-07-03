// GalleryHero.jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  HiArrowRight, 
  HiOutlineSparkles, 
  HiOutlineCamera,
  HiOutlinePlay,
  HiOutlineGlobeAlt
} from 'react-icons/hi2'
import { FaRocket } from 'react-icons/fa'
import galleryHeroBg from '../../assets/gallerym/Galleryh.webp'
import './GalleryHero.css'
import { Link } from 'react-router-dom';

export default function GalleryHero() {
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
    <section className="gallery-hero-premium" ref={ref}>
      {/* Background */}
      <div className="gallery-hero-bg">
        <div 
          className="gallery-hero-bg-image"
          style={{ backgroundImage: `url(${galleryHeroBg})` }}
        />
        <div className="gallery-hero-overlay">
          <div className="gallery-hero-gradient" />
        </div>
      </div>

      {/* Animated Orbs */}
      <div className="gallery-hero-orbs">
        <div className="orb-gallery orb-1" />
        <div className="orb-gallery orb-2" />
        <div className="orb-gallery orb-3" />
        <div className="orb-gallery orb-4" />
      </div>

      {/* Floating Particles */}
      <div className="gallery-hero-particles">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="particle-gallery" 
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
              width: `${2 + Math.random() * 5}px`,
              height: `${2 + Math.random() * 5}px`,
              background: ['#22a7f0', '#6366f1', '#a78bfa', '#34d399'][Math.floor(Math.random() * 4)]
            }}
          />
        ))}
      </div>

      <div className="gallery-hero-container">
        <motion.div
          className="gallery-hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="gallery-hero-left" variants={itemVariants}>
            {/* Badge */}
            <div className="gallery-hero-badge">
              <FaRocket className="badge-icon" />
              <span>Our Gallery</span>
              <span className="badge-pulse" />
            </div>

            {/* Title */}
            <h1 className="gallery-hero-title">
              Capturing Moments,
              <br />
              {/* <span className="gallery-hero-highlight">Creating Memories</span> */}
                            <span >Creating Memories</span>

              <span className="title-underline-gallery" />
            </h1>

            {/* Subtitle - Poppins font */}
            <p className="gallery-hero-subtitle">
              Explore our portfolio of AV installations, corporate events, retail experiences, 
              and creative projects that showcase our expertise in visual storytelling.
            </p>

            {/* CTAs */}
          <div className="gallery-hero-ctas">
  <Link 
    to="/gallery" 
    state={{ scrollTo: 'galleries' }} 
    className="btn-gallery-primary"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    <span>View Gallery</span>
    <HiArrowRight />
  </Link>
  <Link 
   to="/contact"
  state={{ scrollTo: 'enquiries' }} 
    className="btn-gallery-secondary"
    // onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    Contact Us
  </Link>
</div>

            {/* Feature Pills */}
            <div className="gallery-hero-features">
              <div className="feature-pill-gallery">
                <HiOutlineCamera />
                <span>Events</span>
              </div>
              <div className="feature-pill-gallery">
                <HiOutlinePlay />
                <span>AV Installations</span>
              </div>
              <div className="feature-pill-gallery">
                <HiOutlineGlobeAlt />
                <span>Global Projects</span>
              </div>
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div className="gallery-hero-right" variants={itemVariants}>
            <div className="gallery-hero-stats">
              <div className="stat-card-gallery">
                <div className="stat-icon-gallery">
                  <HiOutlineCamera />
                </div>
                <div className="stat-content-gallery">
                  <span className="stat-number-gallery">500+</span>
                  <span className="stat-label-gallery">Events Covered</span>
                </div>
              </div>
              <div className="stat-card-gallery">
                <div className="stat-icon-gallery">
                  <HiOutlinePlay />
                </div>
                <div className="stat-content-gallery">
                  <span className="stat-number-gallery">200+</span>
                  <span className="stat-label-gallery">AV Installations</span>
                </div>
              </div>
              <div className="stat-card-gallery">
                <div className="stat-icon-gallery">
                  <HiOutlineSparkles />
                </div>
                <div className="stat-content-gallery">
                  <span className="stat-number-gallery">50+</span>
                  <span className="stat-label-gallery">Retail Experiences</span>
                </div>
              </div>
              <div className="stat-card-gallery">
                <div className="stat-icon-gallery">
                  <HiOutlineGlobeAlt />
                </div>
                <div className="stat-content-gallery">
                  <span className="stat-number-gallery">20+</span>
                  <span className="stat-label-gallery">Countries Served</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Edge */}
      <div className="gallery-hero-bottom" />
    </section>
  )
}