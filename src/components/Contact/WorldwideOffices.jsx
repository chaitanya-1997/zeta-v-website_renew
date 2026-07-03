// WorldwideOffices.jsx
import './WorldwideOffices.css'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaLocationDot, 
  FaChevronLeft, 
  FaChevronRight,
  FaGlobe,
  FaClock
} from 'react-icons/fa6'
import { HiOutlineSparkles } from 'react-icons/hi2'

// Import office images
import imgPune from '../../assets/contactimg/Pune.webp'
import imgMumbai from '../../assets/contactimg/mumbai.webp'
import imgHongKong from '../../assets/contactimg/hong-kong.webp'
import imgShanghai from '../../assets/contactimg/China.webp'
import imgOrlando from '../../assets/contactimg/Orlando.webp'

const offices = [
  {
    city: 'Pune',
    country: 'India',
    address: "Gera's Imperium, Hinjawadi Phase-II, Pune, Maharashtra 411057",
    image: imgPune,
    timezone: 'IST (UTC+5:30)',
    lat: 18.5963698,
    lng: 73.7180639,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=18.5963698,73.7180639',
    gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
    color: '#22a7f0',
    lightBg: 'rgba(34, 167, 240, 0.08)'
  },
  {
    city: 'Mumbai',
    country: 'India',
    address: 'C-701, Cosmos, Thakur Village, Kandivali East, Mumbai - 400 101 INDIA',
    image: imgMumbai,
    timezone: 'IST (UTC+5:30)',
    lat: 19.2135818,
    lng: 72.8756163,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=19.2135818,72.8756163',
    gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
    color: '#34d399',
    lightBg: 'rgba(52, 211, 153, 0.08)'
  },
  {
    city: 'Hong Kong',
    country: 'Hong Kong',
    address: '1105 11/F Solo 83 Bedford Rd. Tai Kok Tsui Kowloon Hong Kong',
    image: imgHongKong,
    timezone: 'HKT (UTC+8)',
    lat: 22.3235471,
    lng: 114.1612019,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=22.3235471,114.1612019',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    color: '#f59e0b',
    lightBg: 'rgba(245, 158, 11, 0.08)'
  },
  {
    city: 'Shanghai',
    country: 'China',
    address: 'Room 509, Block A Tohee International Mansion, No.133, Guotong Rd, Yangpu District, Shanghai China',
    image: imgShanghai,
    timezone: 'CST (UTC+8)',
    lat: 31.3050165,
    lng: 121.5164878,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=31.3050165,121.5164878',
    gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
    color: '#a78bfa',
    lightBg: 'rgba(167, 139, 250, 0.08)'
  },
  {
    city: 'Orlando',
    country: 'USA',
    address: '7947, Wandering way, Orlando, Fl 32836, USA',
    image: imgOrlando,
    timezone: 'EST (UTC-5)',
    lat: 28.4114423,
    lng: -81.4938362,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=28.4114423,-81.4938362',
    gradient: 'linear-gradient(135deg, #22a7f0, #06b6d4)',
    color: '#22a7f0',
    lightBg: 'rgba(34, 167, 240, 0.08)'
  }
]

export default function WorldwideOffices() {
  const [activeOffice, setActiveOffice] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setActiveOffice(prev => (prev + 1) % offices.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isPaused])

  const currentOffice = offices[activeOffice]

  const goNext = () => {
    setIsPaused(true)
    setActiveOffice(prev => (prev + 1) % offices.length)
    setTimeout(() => setIsPaused(false), 6000)
  }

  const goPrev = () => {
    setIsPaused(true)
    setActiveOffice(prev => (prev - 1 + offices.length) % offices.length)
    setTimeout(() => setIsPaused(false), 6000)
  }

  return (
    <section className="offices-premium">
      {/* Background Decorations */}
      <div className="offices-premium-bg">
        <div className="offices-premium-blob oblob-1" />
        <div className="offices-premium-blob oblob-2" />
        <div className="offices-premium-blob oblob-3" />
        <div className="offices-premium-blob oblob-4" />
      </div>
      <div className="offices-premium-grid" />

      <div className="offices-premium-container">
        {/* Header */}
        <motion.div 
          className="offices-premium-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="offices-premium-label">
            <span className="label-line" />
            <span className="label-text-location">Our Presence</span>
            <span className="label-line" />
          </div>
          
          <h2 className="offices-premium-title">
            Worldwide 
            <span> Offices</span>
            <span className="title-icon">✦</span>
          </h2>
          
          <p className="offices-premium-subtitle">
            Our global presence ensures we're always close to our clients.
          </p>
        </motion.div>

        {/* Layout */}
        <div 
          className="offices-premium-layout"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left - Office Card */}
          <div className="offices-premium-slider">
            <div className="offices-premium-viewport">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeOffice}
                  className="offices-premium-card"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ '--card-color': currentOffice.color }}
                >
                  <div className="offices-premium-card-glow" style={{ background: currentOffice.gradient }} />
                  
                  {/* Image */}
                  <div className="offices-premium-card-image">
                    <img src={currentOffice.image} alt={currentOffice.city} />
                    <div className="offices-premium-card-image-overlay" style={{ background: currentOffice.gradient }} />
                    <div className="offices-premium-card-badge" style={{ background: currentOffice.gradient }}>
                      <FaGlobe />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="offices-premium-card-content">
                    <div className="offices-premium-card-top">
                      <div>
                        <h3 className="offices-premium-card-city">{currentOffice.city}</h3>
                        <span className="offices-premium-card-country" style={{ color: currentOffice.color }}>
                          {currentOffice.country}
                        </span>
                      </div>
                      <div className="offices-premium-card-number">
                        {String(activeOffice + 1).padStart(2, '0')}
                      </div>
                    </div>

                    <div className="offices-premium-card-details">
                      <div className="offices-premium-card-detail">
                        <FaLocationDot className="detail-icon" />
                        <span>{currentOffice.address}</span>
                      </div>
                      <div className="offices-premium-card-detail">
                        <FaClock className="detail-icon" />
                        <span>{currentOffice.timezone}</span>
                      </div>
                    </div>

                    <a
                      href={currentOffice.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="offices-premium-card-btn"
                      style={{ background: currentOffice.gradient }}
                    >
                      <span>Open in Maps</span>
                      <FaLocationDot />
                    </a>
                  </div>

                  <div className="offices-premium-card-line" style={{ background: currentOffice.gradient }} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="offices-premium-nav">
              <button className="offices-premium-arrow" onClick={goPrev}>
                <FaChevronLeft />
              </button>

              <div className="offices-premium-dots">
                {offices.map((_, index) => (
                  <button
                    key={index}
                    className={`offices-premium-dot ${activeOffice === index ? 'active' : ''}`}
                    onClick={() => {
                      setActiveOffice(index)
                      setIsPaused(true)
                      setTimeout(() => setIsPaused(false), 6000)
                    }}
                    style={{
                      background: activeOffice === index ? offices[index].gradient : 'rgba(255,255,255,0.1)'
                    }}
                  />
                ))}
              </div>

              <button className="offices-premium-arrow" onClick={goNext}>
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* Right - Map */}
          <div className="offices-premium-map">
            <div className="offices-premium-map-wrapper">
              <div className="offices-premium-map-header">
                <span className="map-location" style={{ color: currentOffice.color }}>
                  <FaLocationDot />
                  {currentOffice.city}, {currentOffice.country}
                </span>
              </div>
              <iframe
                className="offices-premium-map-frame"
                title={currentOffice.city}
                src={`https://maps.google.com/maps?q=${currentOffice.lat},${currentOffice.lng}&z=16&output=embed`}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Edge */}
      <div className="offices-premium-bottom" />
    </section>
  )
}