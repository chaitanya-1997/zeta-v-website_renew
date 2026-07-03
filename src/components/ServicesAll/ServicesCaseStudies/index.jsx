// ServicesCaseStudies.jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  HiCheck, 
  HiOutlineSparkles,
  HiOutlineChartBar,
  HiOutlineLightBulb
} from 'react-icons/hi2'
import { FaArrowRight } from 'react-icons/fa'
import './ServicesCaseStudies.css'


import BgImage1 from '../../../assets/pexels/pexels-photo-14.avif';
import BgImage2 from '../../../assets/pexels/pexels-photo-9.avif';


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
    image: BgImage1,
    gradient: "linear-gradient(135deg, #22a7f0, #6366f1)",
    color: "#22a7f0",
    lightBg: "rgba(34, 167, 240, 0.08)"
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
    image: BgImage2,
    gradient: "linear-gradient(135deg, #34d399, #06b6d4)",
    color: "#34d399",
    lightBg: "rgba(52, 211, 153, 0.08)"
  },
];

export default function ServicesCaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="cases-premium" ref={ref}>
      {/* Background Decorations */}
      <div className="cases-premium-bg">
        <div className="cases-premium-blob cblob-1" />
        <div className="cases-premium-blob cblob-2" />
        <div className="cases-premium-blob cblob-3" />
      </div>
      <div className="cases-premium-pattern" />

      <div className="cases-premium-container">
        {/* Header */}
        <motion.div
          className="cases-premium-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="cases-premium-label">
            <span className="label-line" />
            <span className="label-text">Case Studies</span>
            <span className="label-line" />
          </div>
          
          <h2 className="cases-premium-title">
            Real-World 
            {/* <span className="gradient-text-cases">Results</span> */}
            <span >Results</span>
            <span className="title-icon">✦</span>
          </h2>
          
          <p className="cases-premium-subtitle">
            See how we've helped businesses transform their operations and achieve measurable success.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="cases-premium-grid">
          {caseStudiesData.map((cs, idx) => (
            <motion.div
              key={idx}
              className="cases-premium-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              style={{ '--card-color': cs.color }}
            >
              <div className="cases-premium-card-glow" style={{ background: cs.gradient }} />
              
              {/* Image */}
              <div className="cases-premium-card-image">
                <img src={cs.image} alt={cs.title} />
                <div className="cases-premium-card-overlay" style={{ background: cs.gradient }} />
                <div className="cases-premium-card-badge" style={{ background: cs.gradient }}>
                  <HiOutlineSparkles />
                  <span>{cs.industry}</span>
                </div>
              </div>

              {/* Content */}
              <div className="cases-premium-card-content">
                <h3 className="cases-premium-card-title">{cs.title}</h3>

                {/* Challenge */}
                <div className="cases-premium-card-section">
                  <div className="cases-premium-card-section-header">
                    <HiOutlineLightBulb className="section-icon" style={{ color: cs.color }} />
                    <span className="cases-premium-card-label">Challenge</span>
                  </div>
                  <p className="cases-premium-card-text">{cs.challenge}</p>
                </div>

                {/* Solutions */}
                <div className="cases-premium-card-section">
                  <div className="cases-premium-card-section-header">
                    <HiCheck className="section-icon" style={{ color: cs.color }} />
                    <span className="cases-premium-card-label">Solutions</span>
                  </div>
                  <ul className="cases-premium-card-list">
                    {cs.solutions.map((s, i) => (
                      <li key={i}>
                        <span className="cases-premium-card-bullet" style={{ background: cs.gradient }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div className="cases-premium-card-results">
                  {cs.results.map((r, i) => (
                    <div key={i} className="cases-premium-card-result" style={{ borderColor: cs.lightBg }}>
                      <div className="cases-premium-card-result-value" style={{ color: cs.color }}>
                        {r.metric}
                      </div>
                      <div className="cases-premium-card-result-label">{r.label}</div>
                    </div>
                  ))}
                </div>

                <div className="cases-premium-card-footer">
                  <span className="cases-premium-card-learn" style={{ color: cs.color }}>
                    Read Full Case Study
                  </span>
                  <FaArrowRight className="cases-premium-card-arrow" />
                </div>
              </div>

              <div className="cases-premium-card-line" style={{ background: cs.gradient }} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Edge */}
      <div className="cases-premium-bottom" />
    </section>
  )
}