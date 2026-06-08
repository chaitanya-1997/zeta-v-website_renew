// src/components/ServicesAll/ServicesDetailed/Index.jsx
import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { FaBolt, FaBuilding, FaUsers, FaShareAlt, FaArrowRight, FaRocket } from 'react-icons/fa'
import { HiCheck, HiOutlineExclamationTriangle, HiOutlineSparkles, HiOutlineChartBar, HiArrowLongRight } from 'react-icons/hi2'
import './ServicesDetailed.css'

const iconMap = {
  FaBolt: FaBolt,
  FaBuilding: FaBuilding,
  FaUsers: FaUsers,
  FaShareAlt: FaShareAlt,
}

// Embedded detailed services data
const detailedServicesData = [
  {
    id: "digital-acceleration",
    title: "Digital Acceleration",
    icon: "FaBolt",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    subText: [
      `Zeta-V's Digital Acceleration Services enable organizations to modernize their operations and stay competitive in a rapidly evolving digital landscape. We combine digital transformation consulting, enterprise cloud migration, generative AI consulting, and data analytics to help businesses unlock new growth opportunities and improve decision-making.`,
      `We work closely with enterprises to design scalable, secure, and future-ready digital ecosystems. From migrating legacy systems to the cloud to implementing intelligent automation and advanced analytics, our solutions are tailored to meet unique business needs.`,
      `By aligning technology with business goals, we help organizations enhance customer experiences, reduce operational costs, and accelerate innovation. Zeta-V empowers businesses to move beyond traditional models and embrace a fully digital, data-driven future.`,
    ],
    offerings: [
      "Cloud Migration Services for scalable and secure infrastructure",
      "Generative AI Consulting & Machine Learning Solutions",
      "AI Automation for Business Processes",
      "Data Analytics Consulting Firm Expertise",
      "Cybersecurity Consulting Services",
    ],
    impact: [
      "Faster decision-making with real-time insights",
      "Reduced operational costs through automation",
      "Enhanced customer experiences",
    ],
    challenges: [
      {
        title: "Legacy System Modernization",
        desc: "Outdated infrastructure limiting business agility and innovation capabilities.",
      },
      {
        title: "Data Fragmentation",
        desc: "Siloed data sources preventing unified analytics and insights.",
      },
    ],
    demoImage: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "enterprise-transformation",
    title: "Enterprise Transformation",
    icon: "FaBuilding",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    subText: [
      `Zeta-V's Enterprise Transformation Services are designed to help organizations modernize their core systems and achieve operational excellence through advanced technologies. We provide end-to-end solutions including IoT implementation, SAP integration, application development, and DevOps services.`,
      `With our SAP implementation services, we support organizations in streamlining their enterprise resource planning systems, ensuring seamless integration across departments. Our IoT solutions enable real-time monitoring and intelligent decision-making.`,
      `By combining innovation with deep industry expertise, Zeta-V helps organizations build resilient and future-ready enterprises. Our solutions empower businesses to optimize operations, improve productivity, and respond quickly to changing market demands.`,
    ],
    offerings: [
      "IoT (Internet of Things) Solutions for connected operations",
      "SAP Implementation Partner Services for enterprise systems",
      "Custom Application Development & Modernization",
      "DevOps Services for faster deployment and scalability",
    ],
    impact: [
      "Improved operational efficiency",
      "Seamless system integration",
      "Faster time-to-market",
    ],
    challenges: [
      {
        title: "Operational Silos",
        desc: "Disconnected systems leading to inefficient workflows and data duplication.",
      },
      {
        title: "Slow Time-to-Market",
        desc: "Lengthy development cycles preventing rapid response to market changes.",
      },
    ],
    demoImage: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "workforce-management",
    title: "Workforce Management",
    icon: "FaUsers",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    subText: [
      `Zeta-V's Workforce Management Services are designed to help organizations build, scale, and manage high-performing teams with ease. We provide flexible and efficient talent solutions, including IT staff augmentation, lateral hiring, and deployment services.`,
      `Our IT staff augmentation services allow organizations to quickly scale their teams with skilled professionals across various technologies, ensuring project continuity and faster execution. Through our lateral hiring solutions, we help businesses acquire experienced talent that align with their technical requirements.`,
      `We understand the challenges of talent acquisition in a competitive market, and our approach focuses on delivering reduced hiring costs, improved workforce efficiency, and enhance overall performance.`,
    ],
    offerings: [
      "IT Staff Augmentation for flexible team scaling",
      "Lateral Hiring Services for experienced professionals",
      "Deployment Services for rapid onboarding",
    ],
    impact: [
      "Reduced hiring time and costs",
      "Access to skilled IT professionals",
      "Increased productivity and project efficiency",
    ],
    challenges: [
      {
        title: "Talent Shortage",
        desc: "Difficulty finding qualified professionals with specialized skills.",
      },
      {
        title: "High Turnover Rates",
        desc: "Employee retention challenges impacting project continuity.",
      },
    ],
    demoImage: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "shared-services",
    title: "Shared Services",
    icon: "FaShareAlt",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    subText: [
      `Zeta-V's Shared Services are designed to simplify and optimize IT operations by providing centralized, reliable, and cost-effective support solutions. We offer comprehensive services including managed IT services, IT infrastructure support, and compliance & governance services.`,
      `Our managed IT services provide end-to-end management of IT environments, allowing businesses to focus on their core objectives while we handle infrastructure, maintenance, and support. With our IT infrastructure support services, we ensure high system availability and performance optimization.`,
      `We also help organizations maintain regulatory compliance through robust governance frameworks and security practices. Our compliance and governance services ensure that businesses meet industry standards while safeguarding sensitive data and systems.`,
    ],
    offerings: [
      "Managed IT Services for end-to-end IT operations",
      "IT Infrastructure Support Services",
      "Compliance & Governance Services for regulatory adherence",
    ],
    impact: [
      "Improved system reliability and uptime",
      "Stronger security and compliance posture",
      "Reduced IT operational complexity",
    ],
    challenges: [
      {
        title: "Operational Complexity",
        desc: "Managing diverse IT systems with limited internal resources.",
      },
      {
        title: "Compliance Risks",
        desc: "Keeping up with evolving regulatory requirements and security standards.",
      },
    ],
    demoImage: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function ServicesDetailed() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const svc = detailedServicesData[active]

  const getIcon = (iconName) => {
    return iconMap[iconName] || FaBolt
  }

  return (
    <section id="detailed-services" className="svc-detail" ref={ref}>
      <div className="svc-detail__inner">
        <motion.div
          className="svc-detail__head"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Service Details</span>
          <h2 className="section-title">
            Explore Our <span className="svc-grad-text">Solutions</span>
          </h2>
        </motion.div>

        <motion.div
          className="svc-detail__tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {detailedServicesData.map((s, i) => {
            const Icon = getIcon(s.icon)
            return (
              <button
                key={s.id}
                className={`svc-detail__tab ${active === i ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="svc-detail__tab-icon"><Icon /></span>
                {s.title}
                {active === i && (
                  <motion.div
                    className="svc-detail__tab-indicator"
                    layoutId="tabIndicator"
                  />
                )}
              </button>
            )
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={svc.id}
            className="svc-detail__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            <div className="svc-detail__two-col">
              <div className="svc-detail__info-col">
                <div className="svc-detail__overview">
                  {svc.subText.map((p, i) => (
                    <p key={i} className="svc-detail__para">{p}</p>
                  ))}
                </div>

                <div className="svc-detail__section">
                  <div className="svc-detail__section-title">
                    <div className="svc-detail__section-icon">
                      <HiOutlineExclamationTriangle />
                    </div>
                    <h3>Challenges We Solve</h3>
                  </div>
                  <div className="svc-grid-2">
                    {svc.challenges.map((challenge, i) => (
                      <div key={i} className="svc-challenge">
                        <div className="svc-challenge__num">CHALLENGE 0{i + 1}</div>
                        <h4>{challenge.title}</h4>
                        <p>{challenge.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="svc-detail__cards-row">
                  <motion.div
                    className="svc-detail__info-card"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="svc-detail__info-header">
                      <div
                        className="svc-detail__info-icon"
                        style={{ background: svc.gradient }}
                      >
                        <HiOutlineSparkles />
                      </div>
                      <h4>Key Offerings</h4>
                    </div>
                    <ul className="svc-detail__list">
                      {svc.offerings.map((o, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.05 }}
                        >
                          <HiCheck className="svc-detail__check" />
                          <span>{o}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    className="svc-detail__info-card svc-detail__info-card--impact"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="svc-detail__info-header">
                      <div
                        className="svc-detail__info-icon"
                        style={{
                          background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
                        }}
                      >
                        <HiOutlineChartBar />
                      </div>
                      <h4>Business Impact</h4>
                    </div>
                    <ul className="svc-detail__list">
                      {svc.impact.map((imp, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + i * 0.05 }}
                        >
                          <HiArrowLongRight className="svc-detail__check svc-detail__check--impact" />
                          <span>{imp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>

              <div className="svc-detail__image-col">
                <motion.div
                  className="svc-detail__image-wrapper"
                  initial={{ opacity: 0, scale: 0.95, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <motion.div
                    className="svc-detail__image"
                    style={{ backgroundImage: `url(${svc.demoImage})` }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="svc-detail__image-overlay" />
                  </motion.div>
                  <motion.div
                    className="svc-detail__image-badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <FaRocket />
                    <span>{svc.title} in Action</span>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}