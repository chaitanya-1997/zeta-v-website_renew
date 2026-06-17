import './ContactForm.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaMessage, FaPaperPlane } from 'react-icons/fa6'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <section className="contact-form-section" id="contact-form">
      <div className="contact-form-container">
        <motion.div 
          className="contact-form-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="form-badge">Contact Us</span>
          <h2>Send Us a Message</h2>
          <p>
            Fill out the form and our team will get back to you within 24 hours. 
            We're excited to hear about your project.
          </p>
          
          <div className="form-contact-details">
            <div className="form-contact-item">
              <div className="form-contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <span>Email</span>
                <strong>hello@zeta-v.com</strong>
              </div>
            </div>
            <div className="form-contact-item">
              <div className="form-contact-icon">
                <FaPhone />
              </div>
              <div>
                <span>Phone</span>
                <strong>+1 (555) 123-4567</strong>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form 
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="form-row">
            <div className="form-group">
              <label>
                <FaUser className="input-icon" />
                Full Name
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
            <div className="form-group">
              <label>
                <FaEnvelope className="input-icon" />
                Email Address
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>
                <FaPhone className="input-icon" />
                Phone Number
              </label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div className="form-group">
              <label>
                <FaBuilding className="input-icon" />
                Company
              </label>
              <input 
                type="text" 
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label>
              <FaMessage className="input-icon" />
              Subject
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

          <div className="form-group full-width">
            <label>
              <FaMessage className="input-icon" />
              Message
            </label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows="5"
              required
            ></textarea>
          </div>

          <motion.button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <>Sending... <span className="spinner"></span></>
            ) : isSubmitted ? (
              <>✓ Message Sent!</>
            ) : (
              <>Send Message <FaPaperPlane /></>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}