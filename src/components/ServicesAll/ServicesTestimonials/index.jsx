// src/components/ServicesAll/ServicesTestimonials/Index.jsx
import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import { HiCheck } from 'react-icons/hi2'
import './ServicesTestimonials.css'

// Embedded testimonials data
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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="svc-testimonials" ref={ref}>
      <div className="svc-testimonials__bg">
        <div className="svc-testimonials__bg-orb-1" />
        <div className="svc-testimonials__bg-orb-2" />
      </div>
     <motion.div
          className="svc-testimonials__head"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">
            What Our <span className="svc-grad-text">Clients Say</span>
          </h2>
          <p className="section-subtitle">Trusted by leading enterprises worldwide</p>
        </motion.div>
      <div className="svc-testimonials__inner">
   

        <div className="svc-testimonials__slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="svc-testimonial"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="svc-testimonial__quote-icon">
                <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
                  <path
                    d="M0 32L8 0H16L12 32H0ZM24 32L32 0H40L36 32H24Z"
                    fill="currentColor"
                    opacity="0.15"
                  />
                </svg>
              </div>

              <div className="svc-testimonial__stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="svc-testimonial__star" />
                ))}
              </div>

              <p className="svc-testimonial__text">{testimonialsData[activeIndex].text}</p>

              <div className="svc-testimonial__author">
                <div className="svc-testimonial__author-avatar">
                  <div className="svc-testimonial__author-initial">
                    {testimonialsData[activeIndex].author.charAt(0)}
                  </div>
                  <div className="svc-testimonial__author-check">
                    <HiCheck />
                  </div>
                </div>
                <div className="svc-testimonial__author-info">
                  <strong>{testimonialsData[activeIndex].author}</strong>
                  <span>{testimonialsData[activeIndex].role}</span>
                </div>
              </div>

              <div className="svc-testimonial__company">
                <div className="svc-testimonial__company-dot" />
                <span>Verified Client</span>
                <div className="svc-testimonial__company-dot" />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="svc-testimonials__dots">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                className={`svc-testimonials__dot ${activeIndex === idx ? "active" : ""}`}
                onClick={() => setActiveIndex(idx)}
              >
                <span className="svc-testimonials__dot-label">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>

          <div className="svc-testimonials__progress">
            <motion.div
              className="svc-testimonials__progress-bar"
              key={activeIndex}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              onAnimationComplete={() => {
                setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}