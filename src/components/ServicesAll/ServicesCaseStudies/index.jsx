// src/components/ServicesAll/ServicesCaseStudies/Index.jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiCheck } from 'react-icons/hi2'
import './ServicesCaseStudies.css'

// Embedded case studies data
const caseStudiesData = [
  {
    title: "AI-Driven Digital Transformation for Enterprise Operations",
    industry: "Financial Services",
    challenge: "An enterprise faced inefficiencies due to manual processes and fragmented data systems, resulting in slow decision-making and high operational costs.",
    solutions: [
      "Cloud migration services to AWS cloud infrastructure",
      "Generative AI and machine learning models for predictive analytics",
      "Data analytics dashboards for real-time decision-making",
    ],
    results: [
      { metric: "60%", label: "improvement in operational efficiency" },
      { metric: "Real-time", label: "insights for faster decision-making" },
      { metric: "Automated", label: "reduced manual workload through automation" },
    ],
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Industrial IoT Implementation for Smart Manufacturing",
    industry: "Manufacturing",
    challenge: "A manufacturing company struggled with lack of real-time visibility into operations, leading to unplanned downtime and production inefficiencies.",
    solutions: [
      "Real-time monitoring of connected devices across production lines",
      "Integration with analytics platforms for predictive insights",
      "Predictive maintenance using AI models to prevent failures",
    ],
    results: [
      { metric: "40%", label: "reduction in equipment downtime" },
      { metric: "25%", label: "improvement in production efficiency" },
      { metric: "Real-time", label: "operational insights across facilities" },
    ],
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function ServicesCaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="svc-cases" ref={ref}>
      <div className="svc-cases__inner">
        <motion.div
          className="svc-cases__head"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Case Studies</span>
          <h2 className="section-title">
            Real-World <span className="gradient-highlight">Results</span>
          </h2>
        </motion.div>

        <div className="svc-cases__grid">
          {caseStudiesData.map((cs, idx) => (
            <motion.div
              key={idx}
              className="svc-case"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="svc-case__image"
                style={{ backgroundImage: `url(${cs.image})` }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="svc-case__content">
                <div className="svc-case__gradient" />
                <div className="svc-case__badge">{cs.industry}</div>
                <h3 className="svc-case__title">{cs.title}</h3>

                <div className="svc-case__section">
                  <div className="svc-case__label">Challenge</div>
                  <p className="svc-case__text">{cs.challenge}</p>
                </div>

                <div className="svc-case__section">
                  <div className="svc-case__label">Solutions</div>
                  <ul className="svc-case__list">
                    {cs.solutions.map((s, i) => (
                      <li key={i}>
                        <HiCheck className="svc-case__bullet" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="svc-case__results">
                  {cs.results.map((r, i) => (
                    <div key={i} className="svc-case__result">
                      <div className="svc-case__result-value">{r.metric}</div>
                      <div className="svc-case__result-label">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}