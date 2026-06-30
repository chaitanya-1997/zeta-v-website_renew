// ServicesTestimonials.jsx
import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { HiCheck, HiOutlineSparkles } from 'react-icons/hi2'
import './ServicesTestimonials.css'

const testimonialsData = [
  {
    text: "Zeta-V's digital transformation services have been instrumental in modernizing our operations. Their AI solutions delivered measurable ROI within months.",
    author: "Sarah Johnson",
    role: "CTO, GlobalTech Industries",
    rating: 5,
  },
  {
    text: "The team at Zeta-V provided exceptional cloud migration services. Our infrastructure is now more scalable, secure, and cost-effective.",
    author: "Michael Chen",
    role: "Director of IT, FinCorp",
    rating: 5,
  },
  {
    text: "Working with Zeta-V on our IoT implementation was seamless. Their expertise and support have been outstanding throughout the journey.",
    author: "Emily Rodriguez",
    role: "VP of Operations, ManuSmart",
    rating: 5,
  },
];

export default function ServicesTestimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-premium" ref={ref}>
      {/* Background Decorations */}
      <div className="testimonials-premium-bg">
        <div className="testimonials-premium-blob tblob-1" />
        <div className="testimonials-premium-blob tblob-2" />
        <div className="testimonials-premium-blob tblob-3" />
        <div className="testimonials-premium-blob tblob-4" />
      </div>
      <div className="testimonials-premium-grid" />

      <div className="testimonials-premium-container">
        {/* Header */}
        <motion.div
          className="testimonials-premium-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="testimonials-premium-label">
            <span className="label-line" />
            <span className="label-text" style={{color:'white'}}>Testimonials</span>
            <span className="label-line" />
          </div>
          
          <h2 className="testimonials-premium-title">
            What Our 
            {/* <span className="gradient-text-testimonials">Clients Say</span> */}
            <span > Clients Say</span>
            <span className="title-icon">✦</span>
          </h2>
          
          <p className="testimonials-premium-subtitle">
            Trusted by leading enterprises worldwide
          </p>
        </motion.div>

        {/* Slider */}
        <div className="testimonials-premium-slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="testimonials-premium-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="testimonials-premium-card-glow" />
              
              <div className="testimonials-premium-quote">
                <FaQuoteLeft />
              </div>

              <div className="testimonials-premium-stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="testimonials-premium-star" />
                ))}
              </div>

              <p className="testimonials-premium-text">
                {testimonialsData[activeIndex].text}
              </p>

              <div className="testimonials-premium-author">
                <div className="testimonials-premium-avatar">
                  <span className="testimonials-premium-avatar-initial">
                    {testimonialsData[activeIndex].author.charAt(0)}
                  </span>
                  <div className="testimonials-premium-avatar-check">
                    <HiCheck />
                  </div>
                </div>
                <div className="testimonials-premium-author-info">
                  <strong>{testimonialsData[activeIndex].author}</strong>
                  <span>{testimonialsData[activeIndex].role}</span>
                </div>
              </div>

              <div className="testimonials-premium-verified">
                <span className="verified-dot" />
                <span>Verified Client</span>
                <span className="verified-dot" />
              </div>

              <div className="testimonials-premium-card-line" />
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="testimonials-premium-dots">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                className={`testimonials-premium-dot ${activeIndex === idx ? "active" : ""}`}
                onClick={() => setActiveIndex(idx)}
                style={{
                  background: activeIndex === idx 
                    ? 'linear-gradient(135deg, #22a7f0, #6366f1)' 
                    : 'rgba(255, 255, 255, 0.1)'
                }}
              >
                <span className="testimonials-premium-dot-label">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="testimonials-premium-progress">
            <motion.div
              className="testimonials-premium-progress-bar"
              key={activeIndex}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 6, ease: "linear" }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Edge */}
      <div className="testimonials-premium-bottom" />
    </section>
  )
}