// Enquiries.jsx
import './Enquiries.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaUser, 
  FaPaperPlane, 
  FaCheckCircle,
  FaBuilding,
  FaClock
} from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi2'


// ----- API CONFIGURATION -----
const API_URL = 'https://zeta-v-invoicemanagement-ddgwdzg2dchdfaf4.centralindia-01.azurewebsites.net/api/public/enquiries';

export default function Enquiries() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // Clear error when user types
    if (error) setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setSuccessMessage('')

    // Map to API expected fields
    const payload = {
      full_name: formData.name,
      work_email: formData.email,
      company: formData.company,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.')
      }

      // Success
      setIsSubmitted(true)
      setSuccessMessage(data.message || 'Thank you for contacting us! Our team will get back to you soon.')
      
      // Reset form after 5 seconds (but keep success visible)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' })
        setSuccessMessage('')
      }, 5000)

    } catch (err) {
      setError(err.message || 'Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const closePopup = () => {
    setIsSubmitted(false)
    setError(null)
  }

  return (
    <section className="enq-premium" id="enquiries">
      {/* Background Decorations */}
      <div className="enq-premium-bg">
        <div className="enq-premium-blob eblob-1" />
        <div className="enq-premium-blob eblob-2" />
        <div className="enq-premium-blob eblob-3" />
      </div>
      <div className="enq-premium-pattern" />

      <div className="enq-premium-container">
        {/* Header */}
        <motion.div 
          className="enq-premium-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="enq-premium-label">
            <span className="label-line" />
            <span className="label-text">Have Questions?</span>
            <span className="label-line" />
          </div>
          
          <h2 className="enq-premium-title">
            Send Us Your <span>Enquiries</span>
            <span className="title-icon">✦</span>
          </h2>
          
          <p className="enq-premium-subtitle">
            Get in touch with the right team for your needs.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="enq-premium-layout">
          {/* Left - Contact Cards */}
          <motion.div 
            className="enq-premium-contact"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="enq-premium-contact-cards">
              <motion.div 
                className="enq-premium-contact-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                style={{ '--card-color': '#22a7f0' }}
              >
                <div className="enq-premium-contact-icon" style={{ background: 'linear-gradient(135deg, #22a7f0, #6366f1)' }}>
                  <FaMapMarkerAlt />
                </div>
                <div className="enq-premium-contact-info">
                  <span className="enq-premium-contact-label">Our Address</span>
                  <p className="enq-premium-contact-text">Gera's Imperium, Hinjawadi Phase-II, Pune, Maharashtra 411057</p>
                </div>
              </motion.div>

              <motion.div 
                className="enq-premium-contact-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                style={{ '--card-color': '#34d399' }}
              >
                <div className="enq-premium-contact-icon" style={{ background: 'linear-gradient(135deg, #34d399, #06b6d4)' }}>
                  <FaEnvelope />
                </div>
                <div className="enq-premium-contact-info">
                  <span className="enq-premium-contact-label">Our Mailbox</span>
                  <p className="enq-premium-contact-text">
                    <a href="mailto:contactus@zeta-v.com">contactus@zeta-v.com</a>
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="enq-premium-contact-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                style={{ '--card-color': '#f472b6' }}
              >
                <div className="enq-premium-contact-icon" style={{ background: 'linear-gradient(135deg, #f472b6, #ec4899)' }}>
                  <FaPhoneAlt />
                </div>
                <div className="enq-premium-contact-info">
                  <span className="enq-premium-contact-label">Our Phone</span>
                  <p className="enq-premium-contact-text">
                    <a href="tel:+912069015402">+91 206-901-5402</a>
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="enq-premium-contact-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.45 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                style={{ '--card-color': '#f59e0b' }}
              >
                <div className="enq-premium-contact-icon" style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)' }}>
                  <FaClock />
                </div>
                <div className="enq-premium-contact-info">
                  <span className="enq-premium-contact-label">Working Hours</span>
                  <p className="enq-premium-contact-text">Mon - Fri</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div 
            className="enq-premium-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="enq-premium-form-card">
              <div className="enq-premium-form-header">
                <h3 className="enq-premium-form-heading">Ready to Get Started?</h3>
                <p className="enq-premium-form-subheading">Required fields are marked <span className="enq-required-star">*</span></p>
              </div>

              {isSubmitted ? (
                <motion.div 
                  className="enq-premium-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="enq-premium-success-icon">
                    <FaCheckCircle />
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>{successMessage}</p>
                  <button className="enq-premium-reset" onClick={closePopup}>
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form className="enq-premium-form" onSubmit={handleSubmit}>
                  {error && (
                    <div className="enq-premium-error">
                      <span>{error}</span>
                    </div>
                  )}
                  <div className="enq-premium-form-row">
                    <div className="enq-premium-form-group">
                      <label>
                        <FaUser className="form-icon" />
                        Full Name <span className="enq-required-star">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="enq-premium-form-group">
                      <label>
                        <FaEnvelope className="form-icon" />
                        Work Email <span className="enq-required-star">*</span>
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="enq-premium-form-row">
                    <div className="enq-premium-form-group">
                      <label>
                        <FaBuilding className="form-icon" />
                        Company
                      </label>
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="enq-premium-form-group">
                      <label>
                        <FaPhoneAlt className="form-icon" />
                        Phone
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 12345 67890"
                      />
                    </div>
                  </div>

                  <div className="enq-premium-form-group">
                    <label>
                      <FaPaperPlane className="form-icon" />
                      Subject <span className="enq-required-star">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>

                  <div className="enq-premium-form-group">
                    <label>Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your challenge or project..."
                      rows={4}
                    />
                  </div>

                  <motion.button 
                    type="submit" 
                    className="enq-premium-submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {isSubmitting ? (
                      <span>Processing...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FaPaperPlane />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Edge */}
      <div className="enq-premium-bottom" />
    </section>
  )
}