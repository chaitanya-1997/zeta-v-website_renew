import './Enquiries.css'
import { motion } from 'framer-motion'
import { FaHeadset, FaClock, FaComments, FaArrowRightLong, FaEnvelope, FaPhone } from 'react-icons/fa6'

const enquiryTypes = [
  {
    icon: <FaHeadset />,
    title: 'Sales Enquiries',
    desc: 'Interested in our services? Our sales team is ready to help you find the perfect solution.',
    email: 'sales@zeta-v.com',
    phone: '+1 (800) 555-0123',
    color: '#0d47a1',
  },
  {
    icon: <FaClock />,
    title: 'Support',
    desc: 'Need technical assistance? Our support team is available 24/7 to resolve your issues.',
    email: 'support@zeta-v.com',
    phone: '+1 (800) 555-0124',
    color: '#1565c0',
  },
  {
    icon: <FaComments />,
    title: 'Partnerships',
    desc: 'Looking to partner with us? Let\'s explore how we can create value together.',
    email: 'partners@zeta-v.com',
    phone: '+1 (800) 555-0125',
    color: '#1976d2',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({ 
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" }
  })
}

export default function Enquiries() {
  return (
    <section className="enquiries-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>Enquiries</h2>
        <p>Get in touch with the right team for your needs.</p>
      </motion.div>

      <div className="enquiries-grid">
        {enquiryTypes.map((item, index) => (
          <motion.div
            className="enquiry-card"
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            style={{ '--accent-color': item.color }}
          >
            <div className="enquiry-icon-wrapper">
              <motion.div 
                className="enquiry-icon"
                animate={{ 
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
                style={{ color: item.color }}
              >
                {item.icon}
              </motion.div>
              <div className="enquiry-icon-bg" style={{ background: item.color }}></div>
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            
            <div className="enquiry-contact">
              <a href={`mailto:${item.email}`} className="enquiry-link">
                <FaEnvelope className="enquiry-contact-icon" />
                {item.email}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowRightLong className="link-arrow" />
                </motion.span>
              </a>
              <span className="enquiry-phone">
                <FaPhone className="enquiry-contact-icon" />
                {item.phone}
              </span>
            </div>
            
            <div className="enquiry-card-accent" style={{ background: item.color }}></div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}