// CultureSection.jsx
import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  FaUsers, 
  FaLightbulb, 
  FaBookOpen, 
  FaGlobe, 
  FaStar,
  FaQuoteLeft
} from 'react-icons/fa'
import './CultureSection.css'

// ----- IMPORT LOCAL IMAGES -----
// ✅ Verify these paths match your actual filenames and extensions
import ajayImg from '../../../assets/team/ajay.webp'
import johnsonImg from '../../../assets/team/johnson.webp'
import manavImg from '../../../assets/team/manav.webp'
import sandaliImg from '../../../assets/team/sandali.webp'
import aniketImg from '../../../assets/team/aniket.webp'
import rashmiImg from '../../../assets/team/rashmi.webp'
import anaghaImg from '../../../assets/team/angha.webp'   // ← verify filename (angha.webp or anagha.webp?)
import chaitanyaImg from '../../../assets/team/chaitanya.webp'
import ashishImg from '../../../assets/team/ashish.webp'
import catherineImg from '../../../assets/team/Catherine.webp'
import ketanImg from '../../../assets/team/Ketan.webp'

import cultureBgImage from '../../../assets/pexels/pexels-photo-2.avif';

// ----- TESTIMONIALS (8 employees) -----
const testimonials = [
  {
    text: "Every project challenges me to deliver quality work while continuously expanding my skills and knowledge.",
    author: "Ajay",
    image: ajayImg,
    rating: 5,
    role: "iOS Developer"
  },
  {
    text: "Working with the company has given me the opportunity to learn, take on meaningful challenges, and grow alongside a supportive team.",
    author: "Johnson",
    image: johnsonImg,
    rating: 5,
    role: "Research Analytics"
  },
  {
    text: "A truly supportive environment where collaboration and teamwork are highly valued. A great team makes every workday both meaningful and enjoyable.",
    author: "Manav",
    image: manavImg,
    rating: 5,
    role: "Software Trainee"
  },
  {
    text: "Working with a collaborative team has given me opportunities to contribute while continuously developing new skills.", // Sandali
    author: "Sandali",
    image: sandaliImg,
    rating: 5,
    role: "Software Trainee"
  },
  {
    text: "I've had the opportunity to work on meaningful projects that continually challenge me and help me build new skills.", // Aniket
    author: "Aniket",
    image: aniketImg,
    rating: 5,
    role: "Flutter Developer"
  },
  {
    text: "A workplace where ideas are valued and teamwork drives meaningful outcomes. Every project offers an opportunity to contribute and develop new skills.", // Rashmi
    author: "Rashmi",
    image: rashmiImg,
    rating: 5,
    role: "Software Developer"
  },
  {
    text: "A collaborative workplace that encourages continuous learning and professional growth.", // Anagha
    author: "Anagha",
    image: anaghaImg,
    rating: 5,
    role: "Accountant"
  },
  {
    text: "Working at Zeta-V has been an incredible learning journey. The collaborative culture and challenging projects have strengthened my technical skills. Supportive leadership has helped me grow both personally and professionally.", // Kept original (No change)
    author: "Chaitanya",
    image: chaitanyaImg,
    rating: 5,
    role: "Senior Software Developer"
  },
  {
    text: "A place where your ideas are heard, your contributions are valued, and your growth is genuinely encouraged.", // Ashish
    author: "Ashish Wasnik",
    image: ashishImg,
    rating: 5,
    role: "Senior Network Architech"
  },
  {
    text: "Being a team member here has been a truly rewarding journey, driven by open communication, mutual trust, and a shared passion for excellence, which has made my time here both productive and enjoyable",
    author: "Catherine Chen",
    image: catherineImg,
    rating: 5,
    role: "-"
  },
   {
    text: "  Proud to work with a team that fosters collaboration, innovation, and continuous development",
    author: "Ketan",
    image: ketanImg,
    rating: 5,
    role: "-"
  }
];

// 🔍 Debug: log total testimonials
console.log('📊 Total testimonials:', testimonials.length) // should be 8

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

  // Auto-rotate through all testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => {
        const next = (prev + 1) % testimonials.length
        // console.log(`🔄 Rotating to index ${next} (${testimonials[next].author})`) // debug
        return next
      })
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  // Generate star ratings
  const getStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar 
        key={i} 
        className={`testimonial-star ${i < rating ? 'filled' : ''}`} 
      />
    ))
  }

  return (
    <section className="culture-premium" ref={ref}>
      {/* Background Image */}
      <div className="culture-premium-bg">
        <div 
          className="culture-premium-bg-image" 
          style={{ backgroundImage: `url(${cultureBgImage})` }}
        />
        <div className="culture-premium-overlay" />
        <div className="culture-premium-gradient" />
      </div>

      {/* Animated Orbs */}
      <div className="culture-premium-orbs">
        <div className="cult-orb cult-orb-1" />
        <div className="cult-orb cult-orb-2" />
        <div className="cult-orb cult-orb-3" />
      </div>

      <div className="culture-premium-container">
        {/* Header */}
        <motion.div 
          className="culture-premium-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="industry-cards-premium-label">
            <span className="label-line" />
            <span className="label-text" style={{ color: 'white' }}>Our Culture</span>
            <span className="label-line" />
          </div>
          <h2 className="culture-premium-title">
            Life at <span>Zeta-V</span>
            <span className="title-icon-cult">✦</span>
          </h2>
        </motion.div>

        {/* Main Content - Left Right Layout */}
        <div className="culture-premium-layout">
          {/* LEFT - Culture Cards */}
          <motion.div 
            className="culture-premium-left"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="culture-premium-cards">
              {culturePoints.map((point, idx) => (
                <motion.div
                  key={point.title}
                  className="culture-premium-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + (idx * 0.08), duration: 0.5 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="culture-premium-card-icon">{point.icon}</div>
                  <div className="culture-premium-card-content">
                    <h3>{point.title}</h3>
                    <p>{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT - Testimonials Carousel */}
          <motion.div 
            className="culture-premium-right"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="culture-premium-testimonials">
              <div className="culture-premium-testimonials-header">
                <FaQuoteLeft className="quote-icon" />
                <h3>What Our <span>Employees Say</span></h3>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  className="culture-premium-testimonial"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="culture-premium-testimonial-top">
                    <div className="culture-premium-testimonial-avatar">
                      <img 
                        src={testimonials[activeTestimonial].image} 
                        alt={testimonials[activeTestimonial].author}
                        onError={(e) => {
                          // Robust fallback: generate initials on canvas
                          const name = testimonials[activeTestimonial].author
                          const initials = name.split(' ').map(n => n[0]).join('')
                          const canvas = document.createElement('canvas')
                          canvas.width = 80
                          canvas.height = 80
                          const ctx = canvas.getContext('2d')
                          ctx.fillStyle = '#0D47A1'
                          ctx.beginPath()
                          ctx.arc(40, 40, 40, 0, Math.PI * 2)
                          ctx.fill()
                          ctx.fillStyle = '#fff'
                          ctx.font = 'bold 32px Inter, sans-serif'
                          ctx.textAlign = 'center'
                          ctx.textBaseline = 'middle'
                          ctx.fillText(initials, 40, 44)
                          e.target.src = canvas.toDataURL()
                          console.warn(`⚠️ Image failed for ${name}, using fallback initials`)
                        }}
                      />
                      <div className="culture-premium-testimonial-status" />
                    </div>
                  </div>
                  <div className="culture-premium-testimonial-content">
                    <p>"{testimonials[activeTestimonial].text}"</p>
                    <div className="culture-premium-testimonial-stars">
                      {getStars(testimonials[activeTestimonial].rating)}
                    </div>
                    <div className="culture-premium-testimonial-author">
                      <strong>{testimonials[activeTestimonial].author}</strong>
                      <span>{testimonials[activeTestimonial].role}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dot indicators – all 8 testimonials */}
              <div className="culture-premium-testimonials-dots">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    className={`culture-premium-dot ${activeTestimonial === idx ? 'active' : ''}`}
                    onClick={() => {
                      setActiveTestimonial(idx)
                      console.log(`👆 Manual click to index ${idx} (${testimonials[idx].author})`)
                    }}
                    aria-label={`View testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Edge */}
      <div className="culture-premium-bottom" />
    </section>
  )
}