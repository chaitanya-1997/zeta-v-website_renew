import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FaUsers, FaLightbulb, FaBookOpen, FaGlobe, FaStar } from 'react-icons/fa'
import './CultureSection.css'

const cultureBgImage = 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920'

const testimonials = [
  {
    text: "Working at Zeta-V has transformed my career. The learning opportunities and cutting-edge projects keep me motivated every day.",
    author: "Chaitanya Raut",
    role: "Senior React Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    text: "The culture here is amazing! Everyone is supportive, and the hybrid work model gives me the perfect work-life balance.",
    author: "Aniket Darje",
    role: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    text: "Zeta-V truly cares about employee growth. The mentorship programs and skill development initiatives are top-notch.",
    author: "Rashmi Devkar",
    role: "AI/ML Engineer",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
]

const culturePoints = [
  { icon: <FaUsers />, title: 'Team Collaboration', desc: 'Work with brilliant minds in a supportive environment' },
  { icon: <FaLightbulb />, title: 'Innovation Culture', desc: 'Ideas are valued, creativity is encouraged' },
  { icon: <FaBookOpen />, title: 'Learning Environment', desc: 'Continuous learning with paid certifications' },
  { icon: <FaGlobe />, title: 'Diversity & Inclusion', desc: 'Celebrating differences, fostering belonging' },
]

export default function CultureSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="careers-culture" ref={ref}>
      <motion.div 
        className="careers-culture__bg-image"
        initial={{ scale: 1.1 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1 }}
        style={{ backgroundImage: `url(${cultureBgImage})` }}
      />
      <div className="careers-culture__overlay" />
      
      <div className="careers-culture__inner">
        <motion.div
          className="careers-culture__head"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label section-label--light">Our Culture</span>
          <h2 className="section-title section-title--light">
            <span className="grad-text">Life at Zeta-V</span>
          </h2>
        </motion.div>

        <div className="careers-culture__grid">
          {culturePoints.map((point, idx) => (
            <motion.div
              key={point.title}
              className="careers-culture__card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="careers-culture__card-icon">{point.icon}</div>
              <h3>{point.title}</h3>
              <p>{point.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="careers-testimonials">
          <div className="careers-testimonials__header">
            <h3>What Our <span className="grad-text">Employees Say</span></h3>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              className="careers-testimonial"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <div className="careers-testimonial__avatar">
                <img src={testimonials[activeTestimonial].image} alt={testimonials[activeTestimonial].author} />
                <div className="careers-testimonial__quote-icon">“</div>
              </div>
              <div className="careers-testimonial__content">
                <p>{testimonials[activeTestimonial].text}</p>
                <div className="careers-testimonial__author">
                  <strong>{testimonials[activeTestimonial].author}</strong>
                  <span>{testimonials[activeTestimonial].role}</span>
                </div>
                <div className="careers-testimonial__stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="careers-testimonial__star" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="careers-testimonials__dots">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`careers-testimonials__dot ${activeTestimonial === idx ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}