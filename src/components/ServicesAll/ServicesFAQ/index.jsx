// ServicesFAQ.jsx
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  HiPlus, 
  HiMinus, 
  HiOutlineLightBulb,
  HiOutlineSparkles
} from 'react-icons/hi2'
import { 
  FaHeadset, 
  FaArrowRight, 
  FaStar, 
  FaRobot,
  FaHandsHelping
} from 'react-icons/fa'
import './ServicesFAQ.css'

const faqsData = [
  {
    question: "What industries does Zeta-V specialize in?",
    answer: "Zeta-V serves a wide range of industries including finance, healthcare, manufacturing, retail, retail & distribution, and technology. Our deep domain expertise allows us to deliver tailored solutions that address industry-specific challenges and compliance requirements.",
  },
  {
    question: "How long does a typical digital transformation project take?",
    answer: "Project timelines vary based on scope and complexity. Our agile methodology enables rapid delivery, with initial results often visible within 8-12 weeks. We work with clients to establish realistic milestones and deliver incremental value throughout the engagement.",
  },
  {
    question: "Does Zeta-V offer ongoing support after deployment?",
    answer: "Yes, we provide comprehensive post-deployment support including managed IT services, 24/7 monitoring, regular maintenance, and continuous optimization. Our support models are flexible and can be tailored to your specific needs.",
  },
  {
    question: "How does Zeta-V ensure data security and compliance?",
    answer: "We implement enterprise-grade security measures including encryption, access controls, regular audits, and compliance frameworks aligned with industry standards like GDPR, HIPAA, SOC 2, and ISO 27001. Security is embedded throughout our development lifecycle.",
  },
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="faq-premium" ref={ref}>
      {/* Background Decorations */}
      <div className="faq-premium-bg">
        <div className="faq-premium-blob fblob-1" />
        <div className="faq-premium-blob fblob-2" />
        <div className="faq-premium-blob fblob-3" />
      </div>
      <div className="faq-premium-pattern" />

      <div className="faq-premium-container">
        {/* Header */}
        <motion.div
          className="faq-premium-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="faq-premium-label">
            <span className="label-line" />
            <span className="label-text">FAQ</span>
            <span className="label-line" />
          </div>
          
          <h2 className="faq-premium-title">
            Frequently Asked 
            {/* <span className="gradient-text-faq">Questions</span> */}
            <span > Questions</span>
            <span className="title-icon">✦</span>
          </h2>
          
          <p className="faq-premium-subtitle">
            Everything you need to know about our services and how we can help your business grow.
          </p>
        </motion.div>

        {/* Content */}
        <div className="faq-premium-content">
          {/* Left - FAQ List */}
          <motion.div 
            className="faq-premium-list"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {faqsData.map((faq, idx) => (
              <motion.div
                key={idx}
                className={`faq-premium-item ${openIndex === idx ? "open" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + idx * 0.08, duration: 0.4 }}
              >
                <button
                  className="faq-premium-question"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <div className="faq-premium-question-left">
                    <span className="faq-premium-number">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="faq-premium-question-text">{faq.question}</span>
                  </div>
                  <div className="faq-premium-icon">
                    {openIndex === idx ? <HiMinus /> : <HiPlus />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      className="faq-premium-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="faq-premium-answer-inner">
                        <HiOutlineLightBulb className="answer-icon" />
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            {/* Help Card */}
            <motion.div
              className="faq-premium-help"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="faq-premium-help-icon">
                <FaHandsHelping />
              </div>
              <div className="faq-premium-help-content">
                <h4>Still have questions?</h4>
                <p>Can't find the answer you're looking for? Please chat with our friendly team.</p>
                <a href="#contact" className="faq-premium-help-link">
                  <span>Contact Support</span>
                  <FaArrowRight />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div 
            className="faq-premium-image"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="faq-premium-image-wrapper">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="FAQ Support Team"
              />
              <div className="faq-premium-image-overlay" />
              
              <div className="faq-premium-image-badge">
                <FaRobot />
                <span>AI-Powered Support</span>
              </div>
              
              <div className="faq-premium-image-card">
                <div className="faq-premium-image-card-icon">
                  <FaStar />
                </div>
                <div className="faq-premium-image-card-content">
                  <h4>24/7 Support Available</h4>
                  <p>Our team is always here to help</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Edge */}
      <div className="faq-premium-bottom" />
    </section>
  )
}