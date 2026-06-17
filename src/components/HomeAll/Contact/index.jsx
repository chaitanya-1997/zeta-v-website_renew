// Contact.jsx
import { useState } from 'react'
import { useReveal } from '../../../hooks/useReveal'
import './Contact.css'

// Custom SVG Icons
const Icons = {
  user: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12Z" fill="currentColor"/>
      <path d="M5 20V19C5 15.13 8.13 12 12 12C15.87 12 19 15.13 19 19V20" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  email: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  company: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="4" y="8" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M8 8V6C8 4.9 8.9 4 10 4H14C15.1 4 16 4.9 16 6V8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 12V16" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  phone: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M22 16.92V19C22 20.1 21.1 21 20 21C10.61 21 3 13.39 3 4C3 2.9 3.9 2 5 2H7.08C8.18 2 9.08 2.78 9.17 3.88L9.43 7.02C9.51 8.02 8.93 8.92 8.01 9.22L5.96 9.96C7.18 12.83 9.66 15.31 12.53 16.53L13.27 14.48C13.57 13.56 14.47 12.98 15.47 13.06L18.61 13.32C19.71 13.41 20.5 14.31 20.5 15.41L22 16.92Z" fill="currentColor" opacity="0.9"/>
    </svg>
  ),
  service: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" fill="currentColor" opacity="0.8"/>
    </svg>
  ),
  message: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M21 15C21 15.6 20.6 16 20 16H4C3.4 16 3 15.6 3 15V9C3 8.4 3.4 8 4 8H20C20.6 8 21 8.4 21 9V15Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M3 8L12 14L21 8" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  location: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M12 2C8.13 2 5 5.13 5 9C5 13.17 12 22 12 22C12 22 19 13.17 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  check: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  send: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  call: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.24 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/>
    </svg>
  ),
  mail: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 8H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  calendar: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 2V6M16 2V6M3 10H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="15" r="1" fill="currentColor"/>
      <circle cx="16" cy="15" r="1" fill="currentColor"/>
      <circle cx="8" cy="15" r="1" fill="currentColor"/>
    </svg>
  ),
  arrowRight: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
}

const serviceOptions = [
  'Strategy Consulting', 'Digital Footprint', 'Analytics & Automation',
  'Enterprise Technologies', 'Legacy Transformation', 'Staff Augmentation',
  'Growth Advisory', 'Other',
]

const steps = [
  { num: 1, text: <>Our representative contacts you <em>within</em> 24 hours</> },
  { num: 2, text: <>We collect all the <em>necessary</em> requirements from you</> },
  { num: 3, text: <>We keep confidentiality by <em>signing</em> NDA</> },
  { num: 4, text: <>The team of analysts and developers <em>prepare</em> estimation</> },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', service: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [headRef, headVisible] = useReveal(0)

  const handleChange = e => setFormData(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__bg-pattern"></div>

      {/* Section 1: Header + Form */}
      <div className="contact__inner">
        <div ref={headRef} className={`contact__head reveal${headVisible ? ' visible' : ''}`}>
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">
            Let's <span className="grad-text">Transform</span> Your Business.
          </h2>
          <p className="section-subtitle">
            Ready to Accelerate Your Digital Transformation? Partner with Zeta-V to unlock the full potential of emerging technologies and drive sustainable business growth.
          </p>
        </div>

        <div className="contact__layout">
          {/* Form - First on mobile */}
          <div className="contact__form-box">
            {submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">
                  <Icons.check />
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. We'll be in touch within 24 business hours.</p>
                <button className="contact__reset-btn" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__row">
                  <div className="contact__field">
                    <label><Icons.user /> Full Name</label>
                    <input type="text" name="name" placeholder="John Doe" 
                      value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="contact__field">
                    <label><Icons.email /> Work Email</label>
                    <input type="email" name="email" placeholder="john@company.com" 
                      value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="contact__row">
                  <div className="contact__field">
                    <label><Icons.company /> Company</label>
                    <input type="text" name="company" placeholder="Company Name" 
                      value={formData.company} onChange={handleChange} />
                  </div>
                  <div className="contact__field">
                    <label><Icons.phone /> Phone</label>
                    <input type="tel" name="phone" placeholder="+91 12345 67890" 
                      value={formData.phone} onChange={handleChange} />
                  </div>
                </div>
                <div className="contact__field">
                  <label><Icons.service /> Service Interest</label>
                  <select name="service" value={formData.service} onChange={handleChange}>
                    <option value="">Select Service Interest</option>
                    {serviceOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div className="contact__field">
                  <label><Icons.message /> Message</label>
                  <textarea name="message" rows={4} placeholder="Tell us about your challenge or project..."
                    value={formData.message} onChange={handleChange} />
                </div>
                <button type="submit" className="contact__submit">
                  <span>Send Message</span>
                  <Icons.send />
                </button>
              </form>
            )}
          </div>

          {/* Steps - Below form on mobile */}
          <div className="contact__steps-box">
            <div className="steps-header">
              <Icons.check />
              <h3 className="contact__steps-title">Things we do next:</h3>
            </div>
            <ol className="contact__steps">
              {steps.map(s => (
                <li key={s.num} className="contact__step">
                  <span className="contact__step-num">{s.num}</span>
                  <p className="contact__step-text">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Section 2: Connect & Collaborate */}
      {/* <div className="contact__connect-section">
        <div className="contact__connect-inner">
          <div className="contact__connect-left">
            <span className="connect-badge">Connect & Collaborate</span>
            <h3 className="contact__connect-title">Let's build something great together</h3>
            <p className="contact__connect-sub">
              Whether you have a question, want to start a project, or simply want to connect, our team is ready to assist you.
            </p>
            <div className="contact__cards">
              <div className="contact__card">
                <div className="contact__card-icon" style={{ background: 'linear-gradient(135deg, #0D47A1, #1565C0)' }}>
                  <Icons.call />
                </div>
                <div>
                  <div className="contact__card-label">Call Us</div>
                  <div className="contact__card-phone">+91 123 456 7890</div>
                </div>
              </div>
              <div className="contact__card">
                <div className="contact__card-icon" style={{ background: 'linear-gradient(135deg, #1565C0, #1E88E5)' }}>
                  <Icons.mail />
                </div>
                <div>
                  <div className="contact__card-label">Email Us</div>
                  <div className="contact__card-phone">contact@zeta-v.com</div>
                </div>
              </div>
              <div className="contact__card">
                <div className="contact__card-icon" style={{ background: 'linear-gradient(135deg, #1E88E5, #2196F3)' }}>
                  <Icons.calendar />
                </div>
                <div>
                  <div className="contact__card-label">Schedule</div>
                  <div className="contact__card-phone">Book a Meeting</div>
                </div>
              </div>
              <div className="contact__card">
                <div className="contact__card-icon" style={{ background: 'linear-gradient(135deg, #00B4FF, #42A5F5)' }}>
                  <Icons.location />
                </div>
                <div>
                  <div className="contact__card-label">Visit Us</div>
                  <div className="contact__card-phone">Find Location</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact__cta-box">
            <div className="cta-buttons">
              <a href="#book-meeting" className="cta-btn primary">
                Book a Consultation <Icons.arrowRight />
              </a>
              <a href="#brochure" className="cta-btn secondary">
                Download Brochure <Icons.arrowRight />
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* Section 3: Headquarters */}
      {/* <div className="contact__hq-section">
        <div className="contact__hq-inner">
          <div className="contact__map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.5945!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3c7d1a6e4b!2sBangalore!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Zeta-V Headquarters Location"
            />
          </div>
          <div className="contact__hq-right">
            <span className="hq-badge">
              <Icons.location />
              Headquarters
            </span>
            <h3 className="contact__hq-title">Global Headquarters</h3>
            <p className="contact__hq-sub">
              Visit our headquarters to meet our team and discuss how we can help transform your business.
            </p>
            <div className="contact__hq-address">
              <div className="hq-icon">
                <Icons.location />
              </div>
              <div>
                <div className="contact__hq-name">Zeta-V Solutions Technologies</div>
                <div className="contact__hq-loc">
                  #123, Tech Park, Electronic City,<br />
                  Bangalore - 560100, Karnataka, India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  )
}