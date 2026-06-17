import './WorldwideOffices.css'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLocationDot, FaPhone, FaEnvelope, FaBuilding, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

// Import office images
import imgPune from '../../assets/contactimg/Pune.jpg'
import imgMumbai from '../../assets/contactimg/mumbai.jpg'
import imgDelhi from '../../assets/contactimg/Delhi.jpg'
import imgHongKong from '../../assets/contactimg/hong-kong.jpg'
import imgShanghai from '../../assets/contactimg/China.jpg'
import imgOrlando from '../../assets/contactimg/Orlando.jpg'

const offices = [
  {
    city: 'Pune',
    country: 'India',
    address: "Office no. 1220, Gera's Imperium, Hinjawadi Phase-II, Pune, Maharashtra 411057",
    phone: '+91 20 1234 5678',
    email: 'pune@zeta-v.com',
    image: imgPune,
    timezone: 'IST (UTC+5:30)',
    lat: 18.5963698,
    lng: 73.7180639,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=18.5963698,73.7180639',
  },
  {
    city: 'Mumbai',
    country: 'India',
    address: 'C-701, Cosmos, Thakur Village, Kandivali East, Mumbai - 400 101 INDIA',
    phone: '+91 22 8765 4321',
    email: 'mumbai@zeta-v.com',
    image: imgMumbai,
    timezone: 'IST (UTC+5:30)',
    lat: 19.2135818,
    lng: 72.8756163,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=19.2135818,72.8756163',
  },
  {
    city: 'Delhi',
    country: 'India',
    address: 'Delhi, India',
    phone: '+91 11 3456 7890',
    email: 'delhi@zeta-v.com',
    image: imgDelhi,
    timezone: 'IST (UTC+5:30)',
    lat: 28.6139,
    lng: 77.2090,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=28.6139,77.2090',
  },
 {
    city: 'Hong Kong',
    country: 'China',
    address: '1105 11/F Solo 83 Bedford Rd. Tai Kok Tsui Kowloon Hong Kong',
    phone: '+852 2345 6789',
    email: 'hongkong@zeta-v.com',
    image: imgHongKong,
    timezone: 'HKT (UTC+8)',
    lat: 22.3235471,
    lng: 114.1612019,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=22.3235471,114.1612019'
  },
  {
    city: 'Shanghai',
    country: 'China',
    address: 'Room 509, Block A Tohee International Mansion, No.133, Guotong Rd, Yangpu District, Shanghai China',
    phone: '+86 21 3456 7890',
    email: 'shanghai@zeta-v.com',
    image: imgShanghai,
    timezone: 'CST (UTC+8)',
    lat: 31.3050165,
    lng: 121.5164878,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=31.3050165,121.5164878'
  },
  {
    city: 'Orlando',
    country: 'USA',
    address: '7947, Wandering way, Orlando, Fl 32836, USA',
    phone: '+1 407 123 4567',
    email: 'orlando@zeta-v.com',
    image: imgOrlando,
    timezone: 'EST (UTC-5)',
    lat: 28.4114423,
    lng: -81.4938362,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=28.4114423,-81.4938362'
  }
]
export default function WorldwideOffices() {
  const [activeOffice, setActiveOffice] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setActiveOffice(prev => (prev + 1) % offices.length)
    }, 4000)
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
    <section className="offices-section">
      {/* Floating dots background */}
      <div className="offices-bg-dots"></div>

      <motion.div 
        className="ww-section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="ww-section-label">
          <span className="ww-label-dot"></span>
          Our Presence
          <span className="ww-label-line"></span>
        </span>
        <h2 className="ww-section-title">
          Worldwide <span className="grad-text">Offices</span>
        </h2>
        <p className="ww-section-subtitle">
          Our global presence ensures we're always close to our clients.
        </p>
      </motion.div>

      <div 
        className="ww-office-layout"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left - Office Card Slider */}
        <div className="ww-office-slider">
          <button className="ww-slider-arrow ww-slider-prev" onClick={goPrev}>
            <FaChevronLeft />
          </button>

          <div className="ww-slider-viewport">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOffice}
                className="ww-office-card"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* Office Image */}
                <div className="ww-office-image">
                  <img src={currentOffice.image} alt={currentOffice.city} />
                </div>

                {/* Office Content */}
                <div className="ww-office-content">
                  <h3 className="ww-office-city">{currentOffice.city}</h3>
                  <span className="ww-office-country">{currentOffice.country}</span>

                  <div className="ww-office-details">
                    <div className="ww-office-detail">
                      <FaLocationDot className="ww-detail-icon" />
                      <span>{currentOffice.address}</span>
                    </div>
                    <div className="ww-office-detail">
                      <FaPhone className="ww-detail-icon" />
                      <span>{currentOffice.phone}</span>
                    </div>
                    <div className="ww-office-detail">
                      <FaEnvelope className="ww-detail-icon" />
                      <span>{currentOffice.email}</span>
                    </div>
                    <div className="ww-office-detail">
                      <FaBuilding className="ww-detail-icon" />
                      <span>{currentOffice.timezone}</span>
                    </div>
                  </div>

                  <a
                    href={currentOffice.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-grad ww-open-map-btn"
                  >
                    Open in Maps
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="ww-slider-arrow ww-slider-next" onClick={goNext}>
            <FaChevronRight />
          </button>

          {/* Navigation Dots */}
          <div className="ww-office-nav">
            {offices.map((_, index) => (
              <button
                key={index}
                className={`ww-office-dot ${activeOffice === index ? 'active' : ''}`}
                onClick={() => {
                  setActiveOffice(index)
                  setIsPaused(true)
                  setTimeout(() => setIsPaused(false), 6000)
                }}
                aria-label={`Office ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right - Google Map with precise lat/lng */}
        <div className="ww-office-map">
          <iframe
            className="ww-office-map-frame"
            title={currentOffice.city}
            src={`https://maps.google.com/maps?q=${currentOffice.lat},${currentOffice.lng}&z=16&output=embed`}
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}