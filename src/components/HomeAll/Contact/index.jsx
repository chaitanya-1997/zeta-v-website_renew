// Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlineBuildingOffice,
  HiOutlinePhone,
  HiOutlineChatBubbleLeft,
  HiOutlineCheck,
  HiOutlineArrowRight,
  HiOutlineSparkles,
  HiOutlineMapPin,
  HiOutlineClock,
  HiOutlineGlobeAlt
} from 'react-icons/hi2';
import './Contact.css';

const serviceOptions = [
  'Strategy Consulting',
  'Digital Footprint',
  'Analytics & Automation',
  'Enterprise Technologies',
  'Legacy Transformation',
  'Staff Augmentation',
  'Growth Advisory',
  'Other'
];

const steps = [
  { 
    num: 1, 
    text: 'Our representative contacts you within 24 hours',
    icon: HiOutlineClock
  },
  { 
    num: 2, 
    text: 'We collect all the necessary requirements from you',
    icon: HiOutlineChatBubbleLeft
  },
  { 
    num: 3, 
    text: 'We keep confidentiality by signing NDA',
    icon: HiOutlineCheck
  },
  { 
    num: 4, 
    text: 'The team of analysts and developers prepare estimation',
    icon: HiOutlineSparkles
  }
];

const contactInfo = [
  {
    icon: HiOutlineMapPin,
    title: 'Visit Us',
    detail: "Gera's Imperium, Hinjawadi Phase-II, Pune, Maharashtra 411057",
    color: '#22a7f0',
    type: 'address'
  },
  {
    icon: HiOutlineEnvelope,
    title: 'Email Us',
    detail: 'contactus@zeta-v.com',
    color: '#34d399',
    type: 'mail'
  },
  {
    icon: HiOutlinePhone,
    title: 'Call Us',
    detail: '+91 206-901-5402',
    color: '#f472b6',
    type: 'phone'
  }
];

// ----- API CONFIGURATION -----
const API_URL = 'https://zeta-v-invoicemanagement-ddgwdzg2dchdfaf4.centralindia-01.azurewebsites.net/api/public/contact';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user types
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage('');

    // Map form fields to API expected fields
    const payload = {
      name: formData.name,
      work_email: formData.email,
      company: formData.company,
      phone: formData.phone,
      service_interest: formData.service,
      message: formData.message
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }

      // Success
      setSubmitted(true);
      setSuccessMessage(data.message || 'Thank you for contacting us! Our team will get back to you soon.');
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
        setSuccessMessage('');
      }, 5000);

    } catch (err) {
      setError(err.message || 'Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-premium">
      {/* Background Decorations */}
      <div className="contact-premium-bg">
        <div className="contact-premium-blob cblob-1" />
        <div className="contact-premium-blob cblob-2" />
        <div className="contact-premium-blob cblob-3" />
      </div>

      <div className="contact-premium-container">
        {/* Header */}
        <motion.div 
          className="contact-premium-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="contact-premium-label">
            <span className="label-line" />
            <span className="label-text">Get in Touch</span>
            <span className="label-line" />
          </div>
          
          <h2 className="contact-premium-title">
            Let's <span>Transform</span> Your Business
            <span className="title-icon">✦</span>
          </h2>
          
          <p className="contact-premium-subtitle">
            Ready to Accelerate Your Digital Transformation? Partner with Zeta-V to unlock 
            the full potential of emerging technologies and drive sustainable business growth.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="contact-premium-layout">
          {/* Left Column - Form */}
          <motion.div 
            className="contact-premium-form-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="contact-premium-form-card">
              <div className="contact-premium-form-header">
                <h3>Send a Message</h3>
                <p>We'll get back to you within 24 hours</p>
              </div>

              {submitted ? (
                <div className="contact-premium-success">
                  <div className="contact-premium-success-icon">
                    <HiOutlineCheck />
                  </div>
                  <h4>Message Sent!</h4>
                  <p>{successMessage}</p>
                </div>
              ) : (
                <form className="contact-premium-form" onSubmit={handleSubmit}>
                  {error && (
                    <div className="contact-premium-error">
                      <span>{error}</span>
                    </div>
                  )}
                  <div className="contact-premium-form-row">
                    <div className="contact-premium-field">
                      <label>
                        <HiOutlineUser />
                        <span>Full Name</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="contact-premium-field">
                      <label>
                        <HiOutlineEnvelope />
                        <span>Work Email</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-premium-form-row">
                    <div className="contact-premium-field">
                      <label>
                        <HiOutlineBuildingOffice />
                        <span>Company</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="contact-premium-field">
                      <label>
                        <HiOutlinePhone />
                        <span>Phone</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 12345 67890"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="contact-premium-field">
                    <label>
                      <HiOutlineSparkles />
                      <span>Service Interest</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select Service Interest</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="contact-premium-field">
                    <label>
                      <HiOutlineChatBubbleLeft />
                      <span>Message</span>
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Tell us about your challenge or project..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="contact-premium-submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <HiOutlineArrowRight />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right Column - Info & Image */}
          <motion.div 
            className="contact-premium-info-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Image Section */}
            <div className="contact-premium-image">
              <img 
                src="https://images.pexels.com/photos/14314638/pexels-photo-14314638.jpeg"
                alt="Team collaboration"
                className="contact-premium-img"
              />
              <div className="contact-premium-image-overlay" />
              <div className="contact-premium-image-badge">
                <HiOutlineSparkles />
                <span>We're Here to Help</span>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="contact-premium-info-cards">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const cardClass = `contact-premium-info-card ${
                  item.type === 'address' ? 'address-card' :
                  item.type === 'mail' ? 'mail-card' :
                  'phone-card'
                }`;
                
                return (
                  <div 
                    key={index} 
                    className={cardClass}
                    style={{ '--card-color': item.color }}
                  >
                    <div className="contact-premium-info-icon" style={{ background: item.color }}>
                      <Icon />
                    </div>
                    <div className="contact-premium-info-content">
                      <span className="contact-premium-info-label">{item.title}</span>
                      <span className={`contact-premium-info-detail ${
                        item.type === 'address' ? 'address-text' :
                        item.type === 'mail' ? 'mail-text' :
                        ''
                      }`}>
                        {item.detail}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Process Steps */}
            <div className="contact-premium-steps">
              <h4 className="contact-premium-steps-title">What happens next?</h4>
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="contact-premium-step">
                    <div className="contact-premium-step-number">{step.num}</div>
                    <div className="contact-premium-step-content">
                      <Icon className="contact-premium-step-icon" />
                      <p>{step.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Edge */}
      <div className="contact-premium-bottom" />
    </section>
  );
}