import './WorldwideOffices.css'
import { motion } from 'framer-motion'
import { FaLocationDot, FaPhone, FaEnvelope, FaBuilding } from 'react-icons/fa6'

const offices = [
  {
    city: 'New York',
    country: 'United States',
    address: '350 Fifth Avenue, Suite 4200, New York, NY 10118',
    phone: '+1 (212) 555-0198',
    email: 'ny@zeta-v.com',
    flag: 'https://flagcdn.com/64x48/us.png',
    timezone: 'EST (UTC-5)',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '71-75 Shelton Street, Covent Garden, London WC2H 9JQ',
    phone: '+44 (0)20 7123 4567',
    email: 'london@zeta-v.com',
    flag: 'https://flagcdn.com/64x48/gb.png',
    timezone: 'GMT (UTC+0)',
  },
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    address: 'Sheikh Zayed Road, Emirates Towers, Level 35, Dubai',
    phone: '+971 4 567 8901',
    email: 'dubai@zeta-v.com',
    flag: 'https://flagcdn.com/64x48/ae.png',
    timezone: 'GST (UTC+4)',
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    address: '8 Marina Boulevard, MBFC Tower 1, #25-02, Singapore 018981',
    phone: '+65 6789 0123',
    email: 'sg@zeta-v.com',
    flag: 'https://flagcdn.com/64x48/sg.png',
    timezone: 'SGT (UTC+8)',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({ 
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" }
  })
}

export default function WorldwideOffices() {
  return (
    <section className="offices-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>Worldwide Offices</h2>
        <p>Our global presence ensures we're always close to our clients.</p>
      </motion.div>

      <div className="offices-grid">
        {offices.map((office, index) => (
          <motion.div
            className="office-card"
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="office-header">
              <motion.div 
                className="office-flag"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: index * 0.3 
                }}
              >
                <img 
                  src={office.flag} 
                  alt={`${office.country} flag`} 
                  className="flag-image"
                  loading="lazy"
                />
              </motion.div>
              <div className="office-location">
                <h3>{office.city}</h3>
                <span className="office-country">{office.country}</span>
              </div>
            </div>
            
            <div className="office-details">
              <motion.div 
                className="office-detail"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FaLocationDot className="detail-icon" />
                <span>{office.address}</span>
              </motion.div>
              <motion.div 
                className="office-detail"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FaPhone className="detail-icon" />
                <span>{office.phone}</span>
              </motion.div>
              <motion.div 
                className="office-detail"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FaEnvelope className="detail-icon" />
                <span>{office.email}</span>
              </motion.div>
              <motion.div 
                className="office-detail"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FaBuilding className="detail-icon" />
                <span>{office.timezone}</span>
              </motion.div>
            </div>
            
            <div className="office-card-line"></div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}