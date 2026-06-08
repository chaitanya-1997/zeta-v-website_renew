import './Suggestions.css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaLightbulb, FaPaperPlane, FaCircleCheck, FaStar } from 'react-icons/fa6'

export default function Suggestions() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Suggestion submitted:', formData)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="suggestions-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>Suggestions</h2>
        <p>We value your feedback. Share your ideas to help us improve.</p>
      </motion.div>

      <div className="suggestions-container">
        <motion.div 
          className="suggestions-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="info-icon-wrapper"
            animate={{ 
              boxShadow: ['0 0 20px rgba(0,180,255,0.2)', '0 0 40px rgba(0,180,255,0.4)', '0 0 20px rgba(0,180,255,0.2)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <FaLightbulb className="info-icon" />
            </motion.div>
          </motion.div>
          <h3>Your Voice Matters</h3>
          <p>
            Whether it's a feature request, improvement idea, or general feedback — 
            we listen to every suggestion and use them to shape our services.
          </p>
          <div className="info-points">
            <motion.div 
              className="info-point"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <FaCircleCheck className="point-icon" />
              <span>All suggestions are reviewed by our team</span>
            </motion.div>
            <motion.div 
              className="info-point"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <FaCircleCheck className="point-icon" />
              <span>Response within 48 hours</span>
            </motion.div>
            <motion.div 
              className="info-point"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <FaStar className="point-icon" />
              <span>Implemented ideas get recognition</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.form 
          className="suggestions-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="form-row">
            <div className="form-group">
              <label>Your Name</label>
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
              <label>Email Address</label>
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
          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's your suggestion about?"
              required
            />
          </div>
          <div className="form-group">
            <label>Your Suggestion</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us your ideas, feedback, or suggestions..."
              rows="5"
              required
            ></textarea>
          </div>
          <motion.button 
            type="submit" 
            className="submit-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaPaperPlane style={{ marginRight: '8px' }} />
            <span>Submit Suggestion</span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}