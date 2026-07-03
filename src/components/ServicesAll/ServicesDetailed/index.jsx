// ServicesDetailed.jsx
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { 
  FaBolt, FaBuilding, FaUsers, FaShareAlt, FaArrowRight, FaRocket,
  FaCheckCircle, FaChartLine, FaCogs, FaShieldAlt, FaCloudUploadAlt,
  FaGlobe, FaBookOpen
} from 'react-icons/fa'
import { 
  HiCheck, HiOutlineExclamationTriangle, HiOutlineSparkles, 
  HiOutlineChartBar
} from 'react-icons/hi2'
import './ServicesDetailed.css'

import BgImage1 from '../../../assets/pexels/pexels-photo-3.avif';
import BgImage2 from '../../../assets/pexels/pexels-photo-9.avif';
import BgImage3 from '../../../assets/pexels/pexels-photo-8.avif';
import BgImage4 from '../../../assets/pexels/pexels-photo-2.avif';
import BgImage5 from '../../../assets/pexels/pexels-photo-10.avif';
import BgImage6 from '../../../assets/pexels/pexels-photo-11.avif';
import BgImage7 from '../../../assets/pexels/pexels-photo-12.avif';
import BgImage8 from '../../../assets/pexels/pexels-photo-13.avif';

const iconMap = {
  FaBolt: FaBolt,
  FaBuilding: FaBuilding,
  FaUsers: FaUsers,
  FaShareAlt: FaShareAlt,
}

const detailedServicesData = [
  {
    id: "digital-acceleration",
    title: "Digital Acceleration",
    icon: "FaBolt",
    gradient: "linear-gradient(135deg, #22a7f0, #6366f1)",
    color: "#22a7f0",
    lightBg: "rgba(34, 167, 240, 0.08)",
    subText: [
      `Zeta-V's Digital Acceleration Services enable organizations to modernize their operations and stay competitive in a rapidly evolving digital landscape. We combine digital transformation consulting, enterprise cloud migration, generative AI consulting, and data analytics to help businesses unlock new growth opportunities and improve decision-making.`,
      `We work closely with enterprises to design scalable, secure, and future-ready digital ecosystems. From migrating legacy systems to the cloud to implementing intelligent automation and advanced analytics, our solutions are tailored to meet unique business needs.`,
      `By aligning technology with business goals, we help organizations enhance customer experiences, reduce operational costs, and accelerate innovation. Zeta-V empowers businesses to move beyond traditional models and embrace a fully digital, data-driven future.`,
    ],
    offerings: [
      "Cloud Migration Services",
      "Generative AI Consulting",
      "AI Automation for Business Processes",
      "Data Analytics Consulting",
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
     demoImage: BgImage1,
     coverImage: BgImage2,
    iconBg: "rgba(34, 167, 240, 0.08)",
    featureIcon: <FaCloudUploadAlt />
  },
  {
    id: "enterprise-transformation",
    title: "Enterprise Transformation",
    icon: "FaBuilding",
    gradient: "linear-gradient(135deg, #34d399, #06b6d4)",
    color: "#34d399",
    lightBg: "rgba(52, 211, 153, 0.08)",
    subText: [
      `Zeta-V's Enterprise Transformation Services are designed to help organizations modernize their core systems and achieve operational excellence through advanced technologies. We provide end-to-end solutions including IoT implementation, SAP integration, application development, and DevOps services.`,
      `With our SAP implementation services, we support organizations in streamlining their enterprise resource planning systems, ensuring seamless integration across departments. Our IoT solutions enable real-time monitoring and intelligent decision-making.`,
      `By combining innovation with deep industry expertise, Zeta-V helps organizations build resilient and future-ready enterprises. Our solutions empower businesses to optimize operations, improve productivity, and respond quickly to changing market demands.`,
    ],
    offerings: [
      "IoT (Internet of Things) Solutions",
      "SAP Implementation Partner Services",
      "Custom Application Development",
      "DevOps Services",
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
    demoImage: BgImage3,
    coverImage: BgImage4,
    iconBg: "rgba(52, 211, 153, 0.08)",
    featureIcon: <FaCogs />
  },
  {
    id: "workforce-management",
    title: "Workforce Management",
    icon: "FaUsers",
    gradient: "linear-gradient(135deg, #f472b6, #ec4899)",
    color: "#f472b6",
    lightBg: "rgba(244, 114, 182, 0.08)",
    subText: [
      `Zeta-V's Workforce Management Services are designed to help organizations build, scale, and manage high-performing teams with ease. We provide flexible and efficient talent solutions, including IT staff augmentation, lateral hiring, and deployment services.`,
      `Our IT staff augmentation services allow organizations to quickly scale their teams with skilled professionals across various technologies, ensuring project continuity and faster execution. Through our lateral hiring solutions, we help businesses acquire experienced talent that align with their technical requirements.`,
      `We understand the challenges of talent acquisition in a competitive market, and our approach focuses on delivering reduced hiring costs, improved workforce efficiency, and enhance overall performance.`,
    ],
    offerings: [
      "IT Staff Augmentation",
      "Lateral Hiring Services",
      "Deployment Services",
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
    demoImage: BgImage5,
    coverImage: BgImage6,
    iconBg: "rgba(244, 114, 182, 0.08)",
    featureIcon: <FaUsers />
  },
  {
    id: "shared-services",
    title: "Shared Services",
    icon: "FaShareAlt",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    color: "#f59e0b",
    lightBg: "rgba(245, 158, 11, 0.08)",
    subText: [
      `Zeta-V's Shared Services are designed to simplify and optimize IT operations by providing centralized, reliable, and cost-effective support solutions. We offer comprehensive services including managed IT services, IT infrastructure support, and compliance & governance services.`,
      `Our managed IT services provide end-to-end management of IT environments, allowing businesses to focus on their core objectives while we handle infrastructure, maintenance, and support. With our IT infrastructure support services, we ensure high system availability and performance optimization.`,
      `We also help organizations maintain regulatory compliance through robust governance frameworks and security practices. Our compliance and governance services ensure that businesses meet industry standards while safeguarding sensitive data and systems.`,
    ],
    offerings: [
      "Managed IT Services",
      "IT Infrastructure Support Services",
      "Compliance & Governance Services",
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
    demoImage: BgImage7,
    coverImage: BgImage8,
    iconBg: "rgba(10, 9, 7, 0.08)",
    featureIcon: <FaShieldAlt />,
    subServices: [
      { name: 'Digital Footprint', path: '/digitalfootprint', icon: FaGlobe },
      { name: 'Book Keeping', path: '/bookkeeping', icon: FaBookOpen }
    ]
  },
];

export default function ServicesDetailed({ activeService, setActiveService, shouldAutoScroll = false }) {
  const navigate = useNavigate()
  const findIndex = (id) => detailedServicesData.findIndex(s => s.id === id)

  const [active, setActive] = useState(() => {
    const initial = activeService ? findIndex(activeService) : 0
    return initial !== -1 ? initial : 0
  })
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const svc = detailedServicesData[active]
  const hasScrolledRef = useRef(false)

  useEffect(() => {
    if (activeService) {
      const newIndex = findIndex(activeService)
      if (newIndex !== -1 && newIndex !== active) setActive(newIndex)
    }
  }, [activeService])

  useEffect(() => {
    if (shouldAutoScroll && ref.current && !hasScrolledRef.current) {
      const headerOffset = 80
      const elementPosition = ref.current.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      setTimeout(() => {
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
        hasScrolledRef.current = true
      }, 400)
    }
  }, [shouldAutoScroll])

  useEffect(() => {
    hasScrolledRef.current = false
  }, [active])

  const getIcon = (iconName) => iconMap[iconName] || FaBolt

  // ------ FIX: removed hash-setting, only update state and scroll ------
  const handleTabClick = (index) => {
    setActive(index)
    const serviceId = detailedServicesData[index].id
    if (setActiveService) setActiveService(serviceId)
    // Scroll to the section manually
    setTimeout(() => {
      if (ref.current) {
        const headerOffset = 80
        const elementPosition = ref.current.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      }
    }, 100)
  }

  const handleSubServiceClick = (path) => {
    navigate(path)
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
  }

  const hasSubServices = svc.subServices && svc.subServices.length > 0

  // Build combined list: first 3 offerings + first 3 impact items as cards
  const combinedItems = [
    ...svc.offerings.slice(0, 3).map((text, i) => ({
      type: 'offering',
      text,
      icon: <HiOutlineSparkles />,
      color: svc.color,
      bg: svc.lightBg
    })),
    ...svc.impact.slice(0, 3).map((text, i) => ({
      type: 'impact',
      text,
      icon: <HiOutlineChartBar />,
      color: '#34d399',
      bg: 'rgba(52, 211, 153, 0.08)'
    }))
  ]

  return (
    <section className="services-premium-detail" id="services-premium-detail" ref={ref}>
      <div className="services-premium-detail-bg">
        <div className="services-premium-detail-blob sdblob-1" />
        <div className="services-premium-detail-blob sdblob-2" />
        <div className="services-premium-detail-blob sdblob-3" />
      </div>
      <div className="services-premium-detail-pattern" />

      <div className="services-premium-detail-container">
        {/* Header */}
        <motion.div
          className="services-premium-detail-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="services-premium-detail-label">
            <span className="label-line" />
            <span className="label-text">Service Details</span>
            <span className="label-line" />
          </div>
          <h2 className="services-premium-detail-title">
            Explore Our <span>Solutions</span>
            <span className="title-icon">✦</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="services-premium-detail-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {detailedServicesData.map((s, i) => {
            const Icon = getIcon(s.icon)
            return (
              <button
                key={s.id}
                className={`services-premium-detail-tab ${active === i ? 'active' : ''}`}
                onClick={() => handleTabClick(i)}
                style={{
                  borderColor: active === i ? s.color : 'rgba(15, 23, 42, 0.06)',
                  background: active === i ? s.lightBg : 'rgba(255, 255, 255, 0.8)',
                }}
              >
                <span className="services-premium-detail-tab-icon" style={{ color: active === i ? s.color : 'rgba(15, 23, 42, 0.3)' }}>
                  <Icon />
                </span>
                <span className="services-premium-detail-tab-text">{s.title}</span>
                {active === i && (
                  <motion.div
                    className="services-premium-detail-tab-indicator"
                    layoutId="tabIndicatorSD"
                    style={{ background: s.gradient }}
                  />
                )}
              </button>
            )
          })}
        </motion.div>

        {/* Sub-Service Quick Links (only for Shared Services) */}
        {hasSubServices && (
          <motion.div
            className="services-premium-detail-sub-links"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="services-premium-detail-sub-label">Explore Sub‑Services</span>
            <div className="services-premium-detail-sub-buttons">
              {svc.subServices.map((sub) => {
                const SubIcon = sub.icon
                return (
                  <button
                    key={sub.name}
                    className="services-premium-detail-sub-btn"
                    onClick={() => handleSubServiceClick(sub.path)}
                    style={{
                      background: svc.lightBg,
                      borderColor: svc.color,
                      color: svc.color
                    }}
                  >
                    <SubIcon className="sub-btn-icon" />
                    {sub.name}
                    <FaArrowRight className="sub-btn-arrow" />
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={svc.id}
            className="services-premium-detail-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            {/* Cover Image (without action buttons) */}
            <div className="services-premium-detail-cover">
              <img src={svc.coverImage} alt={svc.title} />
              <div className="services-premium-detail-cover-overlay" style={{ background: svc.gradient }} />
              <div className="services-premium-detail-cover-content">
                <div className="services-premium-detail-cover-icon" style={{ background: svc.lightBg, color: svc.color }}>
                  {svc.featureIcon}
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.subText[0].substring(0, 120)}...</p>
              </div>
            </div>

            {/* Description */}
            <div className="services-premium-detail-description">
              {svc.subText.map((p, i) => (
                <p key={i} className="services-premium-detail-para">{p}</p>
              ))}
            </div>

            {/* Challenges */}
            <div className="services-premium-detail-challenges">
              <div className="services-premium-detail-challenges-header">
                <HiOutlineExclamationTriangle className="challenges-icon" style={{ color: svc.color }} />
                <h3>Challenges We Solve</h3>
              </div>
              <div className="services-premium-detail-challenges-grid">
                {svc.challenges.map((challenge, i) => (
                  <div key={i} className="services-premium-detail-challenge" style={{ borderColor: svc.lightBg }}>
                    <h4>{challenge.title}</h4>
                    <p>{challenge.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Combined Grid: 6 cards (3 offerings + 3 impacts) in 3 columns */}
            <div className="services-premium-detail-grid">
              {combinedItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="services-premium-detail-grid-card"
                  style={{ borderColor: item.bg, background: item.bg }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <div className="grid-card-icon" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Demo Image */}
            <div className="services-premium-detail-demo">
              <img src={svc.demoImage} alt={`${svc.title} Demo`} />
              <div className="services-premium-detail-demo-overlay" style={{ background: svc.gradient }} />
              <div className="services-premium-detail-demo-badge" style={{ background: svc.gradient }}>
                <FaRocket />
                <span>{svc.title} in Action</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="services-premium-detail-bottom" />
    </section>
  )
}