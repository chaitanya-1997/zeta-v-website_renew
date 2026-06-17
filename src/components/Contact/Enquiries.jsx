import './Enquiries.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaUser, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'
import enquiryBg from '../../assets/contactimg/enquiry.jpg'

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    console.log('Form Data:', formData)
    localStorage.setItem('enquiryFormData', JSON.stringify(formData))
    
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 4000)
    }, 1500)
  }

  const closePopup = () => {
    setIsSubmitted(false)
  }

  return (
    <section className="enq-section">
      {/* Background image - Vite import style */}
      <div 
        className="enq-bg-image" 
        style={{ backgroundImage: `url(${enquiryBg})` }}
      ></div>
      <div className="enq-bg-overlay"></div>

      {/* Slanted lines */}
      <div className="enq-bg-lines"></div>

      <motion.div 
        className="enq-section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.span 
          className="enq-section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <span className="enq-label-dot"></span>
          Have Questions?
          <span className="enq-label-line"></span>
        </motion.span>
        <h2 className="enq-section-title">
          Send Us Your <span className="grad-text">Enquiries</span>
        </h2>
        <p className="enq-section-subtitle">
          Get in touch with the right team for your needs.
        </p>
      </motion.div>

      <div className="enq-layout">
        {/* Left - Contact Cards */}
        <motion.div 
          className="enq-contact"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="enq-contact-cards">
            <motion.div 
              className="enq-contact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ y: -3 }}
            >
              <div className="enq-contact-card-icon" style={{ background: 'linear-gradient(135deg, #0D47A1, #1565C0)' }}>
                <FaMapMarkerAlt />
              </div>
              <div className="enq-contact-card-info">
                <span className="enq-contact-card-label">Our Address</span>
                <p className="enq-contact-card-text">Office no. 1220, Gera's Imperium, Hinjawadi Phase-II, Pune, Maharashtra 411057</p>
              </div>
            </motion.div>

            <motion.div 
              className="enq-contact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ y: -3 }}
            >
              <div className="enq-contact-card-icon" style={{ background: 'linear-gradient(135deg, #1565C0, #1E88E5)' }}>
                <FaEnvelope />
              </div>
              <div className="enq-contact-card-info">
                <span className="enq-contact-card-label">Our Mailbox</span>
                <p className="enq-contact-card-text">
                  <a href="mailto:contactus@zeta-v.com">contactus@zeta-v.com</a>
                  <br />
                  <a href="mailto:careers@zeta-v.com">careers@zeta-v.com</a>
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="enq-contact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={{ y: -3 }}
            >
              <div className="enq-contact-card-icon" style={{ background: 'linear-gradient(135deg, #1E88E5, #00B4FF)' }}>
                <FaPhone />
              </div>
              <div className="enq-contact-card-info">
                <span className="enq-contact-card-label">Our Phone</span>
                <p className="enq-contact-card-text">
                  <a href="tel:+912069015402">+91 20 6901 5402</a>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right - Contact Form */}
        <motion.div 
          className="enq-form-wrapper"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="enq-form-card">
            {isSubmitted ? (
              <motion.div 
                className="enq-success-state"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="enq-success-icon-box">
                  <FaCheckCircle />
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. We'll be in touch within 24 business hours.</p>
                <button className="enq-reset-btn" onClick={closePopup}>
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="enq-form-heading">Ready to Get Started?</h3>
                <p className="enq-form-subheading">Required fields are marked <span className="enq-required-star">*</span></p>

                <form className="enq-form" onSubmit={handleSubmit}>
                  <div className="enq-form-row">
                    <div className="enq-form-group">
                      <label>
                        <FaUser className="enq-form-input-icon" />
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
                    <div className="enq-form-group">
                      <label>
                        <FaEnvelope className="enq-form-input-icon" />
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

                  <div className="enq-form-row">
                    <div className="enq-form-group">
                      <label>
                        <FaUser className="enq-form-input-icon" />
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
                    <div className="enq-form-group">
                      <label>
                        <FaPhone className="enq-form-input-icon" />
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

                  <div className="enq-form-group">
                    <label>
                      <FaPaperPlane className="enq-form-input-icon" />
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

                  <div className="enq-form-group">
                    <label>Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your challenge or project..."
                      rows={3}
                    ></textarea>
                  </div>

                  <motion.button 
                    type="submit" 
                    className="enq-submit-btn"
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
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}