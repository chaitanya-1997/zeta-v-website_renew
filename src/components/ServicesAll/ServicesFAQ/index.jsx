// src/components/ServicesAll/ServicesFAQ/Index.jsx
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { HiPlus, HiMinus, HiOutlineLightBulb } from 'react-icons/hi2'
import { FaHeadset, FaArrowRight, FaStar, FaRobot } from 'react-icons/fa'
import './ServicesFAQ.css'

// Embedded FAQs data
const faqsData = [
  {
    question: "What industries does Zeta-V specialize in?",
    answer: "Zeta-V serves a wide range of industries including finance, healthcare, manufacturing, retail, government, and technology. Our deep domain expertise allows us to deliver tailored solutions that address industry-specific challenges and compliance requirements.",
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
    <section className="svc-faq" ref={ref}>
      <div className="svc-faq__inner">
        <motion.div
          className="svc-faq__head"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">FAQ</span>
          <h2 className="section-title">
            Frequently Asked <span className="svc-grad-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about our services and how we can help your business grow.
          </p>
        </motion.div>

        <div className="svc-faq__two-col">
          <div className="svc-faq__accordion-col">
            <div className="svc-faq__list">
              {faqsData.map((faq, idx) => (
                <motion.div
                  key={idx}
                  className={`svc-faq__item ${openIndex === idx ? "open" : ""}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <button
                    className="svc-faq__question"
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  >
                    <div className="svc-faq__question-num">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <span>{faq.question}</span>
                    <div className="svc-faq__icon-wrapper">
                      {openIndex === idx ? <HiMinus /> : <HiPlus />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        className="svc-faq__answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="svc-faq__answer-inner">
                          <div className="svc-faq__answer-icon">
                            <HiOutlineLightBulb />
                          </div>
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="svc-faq__help"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="svc-faq__help-icon">
                <FaHeadset />
              </div>
              <div className="svc-faq__help-content">
                <h4>Still have questions?</h4>
                <p>Can't find the answer you're looking for? Please chat with our friendly team.</p>
                <a href="#contact" className="svc-faq__help-link">
                  Contact Support <FaArrowRight />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="svc-faq__image-col"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="svc-faq__image-wrapper">
              <div className="svc-faq__image">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="FAQ Support Team"
                />
                <div className="svc-faq__image-overlay" />
              </div>
              <div className="svc-faq__image-card">
                <div className="svc-faq__image-card-icon">
                  <FaStar />
                </div>
                <div className="svc-faq__image-card-content">
                  <h4>24/7 Support Available</h4>
                  <p>Our team is always here to help you</p>
                </div>
              </div>
              <div className="svc-faq__image-badge">
                <FaRobot />
                <span>AI-Powered Assistance</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}