// import { useState, useEffect, useRef } from 'react'
// import { motion, AnimatePresence, useInView } from 'framer-motion'
// import {
//     FaUniversity, FaIndustry, FaHeartbeat, FaLandmark,
//     FaBolt, FaBuilding, FaUsers, FaShareAlt,
//     FaCloudUploadAlt, FaRobot, FaChartLine, FaShieldAlt,
//     FaMicrochip, FaDatabase, FaCodeBranch, FaServer,
//     FaLaptopCode, FaUserTie, FaPaintBrush, FaWordpress,
//     FaAws, FaDocker, FaWindows, FaStar, FaCrown, FaGem,
//     FaClock, FaRocket, FaHeadset, FaHandshake, FaGlobe,
//     FaCheckCircle, FaArrowRight
// } from 'react-icons/fa'
// import {
//     HiOutlineLightBulb, HiOutlineExclamationTriangle,
//     HiOutlineDocumentText, HiOutlineChartBar, HiOutlineQuestionMarkCircle,
//     HiOutlineSparkles, HiArrowRight, HiArrowLongRight,
//     HiOutlineCheckCircle, HiPlus, HiMinus, HiCheck,
// } from 'react-icons/hi2'
// import { FiArrowUpRight } from 'react-icons/fi'
// import Navbar from '../components/Navbar'
// import FooterSection from '../components/Footer'
// import './ServicesPage.css'

// /* ─── Data ─────────────────────────────────────────────── */

// const overviewCards = [
//     {
//         icon: <FaBolt />,
//         title: 'Digital Acceleration',
//         desc: 'Enable business agility with cloud migration services, AI automation for business, and data-driven insights.',
//         gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
//     },
//     {
//         icon: <FaBuilding />,
//         title: 'Enterprise Transformation',
//         desc: 'Modernize operations with IoT solutions, SAP implementation, DevOps services, and scalable application development.',
//         gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
//     },
//     {
//         icon: <FaUsers />,
//         title: 'Workforce Management',
//         desc: 'Build high-performing teams through IT staff augmentation, lateral hiring, and deployment services.',
//         gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
//     },
//     {
//         icon: <FaShareAlt />,
//         title: 'Shared Services',
//         desc: 'Optimize IT operations with managed IT services, infrastructure support, and compliance & governance solutions.',
//         gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
//     },
// ]

// const detailedServices = [
//     {
//         id: 'digital-acceleration',
//         title: 'Digital Acceleration',
//         icon: <FaBolt />,
//         gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//         subText: [
//             `Zeta-V's Digital Acceleration Services enable organizations to modernize their operations and stay competitive in a rapidly evolving digital landscape. We combine digital transformation consulting, enterprise cloud migration, generative AI consulting, and data analytics to help businesses unlock new growth opportunities and improve decision-making.`,
//             `We work closely with enterprises to design scalable, secure, and future-ready digital ecosystems. From migrating legacy systems to the cloud to implementing intelligent automation and advanced analytics, our solutions are tailored to meet unique business needs.`,
//             `By aligning technology with business goals, we help organizations enhance customer experiences, reduce operational costs, and accelerate innovation. Zeta-V empowers businesses to move beyond traditional models and embrace a fully digital, data-driven future.`,
//         ],
//         offerings: [
//             'Cloud Migration Services for scalable and secure infrastructure',
//             'Generative AI Consulting & Machine Learning Solutions',
//             'AI Automation for Business Processes',
//             'Data Analytics Consulting Firm Expertise',
//             'Cybersecurity Consulting Services',
//         ],
//         impact: [
//             'Faster decision-making with real-time insights',
//             'Reduced operational costs through automation',
//             'Enhanced customer experiences',
//         ],
//         challenges: [
//             { title: 'Legacy System Modernization', desc: 'Outdated infrastructure limiting business agility and innovation capabilities.' },
//             { title: 'Data Fragmentation', desc: 'Siloed data sources preventing unified analytics and insights.' },
//         ]
//     },
//     {
//         id: 'enterprise-transformation',
//         title: 'Enterprise Transformation',
//         icon: <FaBuilding />,
//         gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
//         subText: [
//             `Zeta-V's Enterprise Transformation Services are designed to help organizations modernize their core systems and achieve operational excellence through advanced technologies. We provide end-to-end solutions including IoT implementation, SAP integration, application development, and DevOps services.`,
//             `With our SAP implementation services, we support organizations in streamlining their enterprise resource planning systems, ensuring seamless integration across departments. Our IoT solutions enable real-time monitoring and intelligent decision-making.`,
//             `By combining innovation with deep industry expertise, Zeta-V helps organizations build resilient and future-ready enterprises. Our solutions empower businesses to optimize operations, improve productivity, and respond quickly to changing market demands.`,
//         ],
//         offerings: [
//             'IoT (Internet of Things) Solutions for connected operations',
//             'SAP Implementation Partner Services for enterprise systems',
//             'Custom Application Development & Modernization',
//             'DevOps Services for faster deployment and scalability',
//         ],
//         impact: [
//             'Improved operational efficiency',
//             'Seamless system integration',
//             'Faster time-to-market',
//         ],
//         challenges: [
//             { title: 'Operational Silos', desc: 'Disconnected systems leading to inefficient workflows and data duplication.' },
//             { title: 'Slow Time-to-Market', desc: 'Lengthy development cycles preventing rapid response to market changes.' },
//         ]
//     },
//     {
//         id: 'workforce-management',
//         title: 'Workforce Management',
//         icon: <FaUsers />,
//         gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
//         subText: [
//             `Zeta-V's Workforce Management Services are designed to help organizations build, scale, and manage high-performing teams with ease. We provide flexible and efficient talent solutions, including IT staff augmentation, lateral hiring, and deployment services.`,
//             `Our IT staff augmentation services allow organizations to quickly scale their teams with skilled professionals across various technologies, ensuring project continuity and faster execution. Through our lateral hiring solutions, we help businesses acquire experienced talent that align with their technical requirements.`,
//             `We understand the challenges of talent acquisition in a competitive market, and our approach focuses on delivering reduced hiring costs, improved workforce efficiency, and enhance overall performance.`,
//         ],
//         offerings: [
//             'IT Staff Augmentation for flexible team scaling',
//             'Lateral Hiring Services for experienced professionals',
//             'Deployment Services for rapid onboarding',
//         ],
//         impact: [
//             'Reduced hiring time and costs',
//             'Access to skilled IT professionals',
//             'Increased productivity and project efficiency',
//         ],
//         challenges: [
//             { title: 'Talent Shortage', desc: 'Difficulty finding qualified professionals with specialized skills.' },
//             { title: 'High Turnover Rates', desc: 'Employee retention challenges impacting project continuity.' },
//         ]
//     },
//     {
//         id: 'shared-services',
//         title: 'Shared Services',
//         icon: <FaShareAlt />,
//         gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
//         subText: [
//             `Zeta-V's Shared Services are designed to simplify and optimize IT operations by providing centralized, reliable, and cost-effective support solutions. We offer comprehensive services including managed IT services, IT infrastructure support, and compliance & governance services.`,
//             `Our managed IT services provide end-to-end management of IT environments, allowing businesses to focus on their core objectives while we handle infrastructure, maintenance, and support. With our IT infrastructure support services, we ensure high system availability and performance optimization.`,
//             `We also help organizations maintain regulatory compliance through robust governance frameworks and security practices. Our compliance and governance services ensure that businesses meet industry standards while safeguarding sensitive data and systems.`,
//         ],
//         offerings: [
//             'Managed IT Services for end-to-end IT operations',
//             'IT Infrastructure Support Services',
//             'Compliance & Governance Services for regulatory adherence',
//         ],
//         impact: [
//             'Improved system reliability and uptime',
//             'Stronger security and compliance posture',
//             'Reduced IT operational complexity',
//         ],
//         challenges: [
//             { title: 'Operational Complexity', desc: 'Managing diverse IT systems with limited internal resources.' },
//             { title: 'Compliance Risks', desc: 'Keeping up with evolving regulatory requirements and security standards.' },
//         ]
//     },
// ]

// const howWeWorkSteps = [
//     { num: '01', icon: <FaLaptopCode />, title: 'Discovery', body: 'We begin by understanding your business landscape, technology environment, and strategic objectives through deep-dive workshops and stakeholder interviews.' },
//     { num: '02', icon: <HiOutlineLightBulb />, title: 'Design', body: 'Our architects craft a tailored solution blueprint — covering technology stack, integration points, security posture, and a phased delivery roadmap.' },
//     { num: '03', icon: <FaRocket />, title: 'Deploy', body: 'We execute with agile precision — iterative sprints, continuous testing, and seamless deployment into your production environment.' },
//     { num: '04', icon: <FaHeadset />, title: 'Support', body: 'Post-launch, we provide ongoing monitoring, optimization, and managed support to ensure peak performance and continuous improvement.' },
// ]

// const caseStudies = [
//     {
//         title: 'AI-Driven Digital Transformation for Enterprise Operations',
//         industry: 'Financial Services',
//         challenge: 'An enterprise faced inefficiencies due to manual processes and fragmented data systems, resulting in slow decision-making and high operational costs.',
//         solutions: [
//             'Cloud migration services to AWS cloud infrastructure',
//             'Generative AI and machine learning models for predictive analytics',
//             'Data analytics dashboards for real-time decision-making',
//         ],
//         results: [
//             { metric: '60%', label: 'improvement in operational efficiency' },
//             { metric: 'Real-time', label: 'insights for faster decision-making' },
//             { metric: 'Automated', label: 'reduced manual workload through automation' },
//         ],
//     },
//     {
//         title: 'Industrial IoT Implementation for Smart Manufacturing',
//         industry: 'Manufacturing',
//         challenge: 'A manufacturing company struggled with lack of real-time visibility into operations, leading to unplanned downtime and production inefficiencies.',
//         solutions: [
//             'Real-time monitoring of connected devices across production lines',
//             'Integration with analytics platforms for predictive insights',
//             'Predictive maintenance using AI models to prevent failures',
//         ],
//         results: [
//             { metric: '40%', label: 'reduction in equipment downtime' },
//             { metric: '25%', label: 'improvement in production efficiency' },
//             { metric: 'Real-time', label: 'operational insights across facilities' },
//         ],
//     },
// ]

// const techStack = [
//     { name: 'HTML5', icon: '🌐', color: '#E34F26' },
//     { name: 'CSS3', icon: '🎨', color: '#1572B6' },
//     { name: 'JavaScript', icon: '⚡', color: '#F7DF1E' },
//     { name: 'React', icon: '⚛️', color: '#61DAFB' },
//     { name: 'Node.js', icon: '🟢', color: '#339933' },
//     { name: 'AWS', icon: '☁️', color: '#FF9900' },
//     { name: 'Docker', icon: '🐳', color: '#2496ED' },
//     { name: 'Azure', icon: '🔷', color: '#0089D6' },
// ]

// const stats = [
//     { value: '500+', label: 'Projects Delivered', icon: <FaStar /> },
//     { value: '200+', label: 'Happy Clients', icon: <FaCrown /> },
//     { value: '98%', label: 'Client Retention', icon: <FaGem /> },
//     { value: '24/7', label: 'Support Available', icon: <FaClock /> },
// ]

// const testimonials = [
//     {
//         text: "Zeta-V's digital transformation services have been instrumental in modernizing our operations. Their AI solutions delivered measurable ROI within months.",
//         author: "Sarah Johnson",
//         role: "CTO, GlobalTech Industries",
//         rating: 5
//     },
//     {
//         text: "The team at Zeta-V provided exceptional cloud migration services. Our infrastructure is now more scalable, secure, and cost-effective.",
//         author: "Michael Chen",
//         role: "Director of IT, FinCorp",
//         rating: 5
//     },
//     {
//         text: "Working with Zeta-V on our IoT implementation was seamless. Their expertise and support have been outstanding throughout the journey.",
//         author: "Emily Rodriguez",
//         role: "VP of Operations, ManuSmart",
//         rating: 5
//     }
// ]

// const faqs = [
//     {
//         question: "What industries does Zeta-V specialize in?",
//         answer: "Zeta-V serves a wide range of industries including finance, healthcare, manufacturing, retail, government, and technology. Our deep domain expertise allows us to deliver tailored solutions that address industry-specific challenges and compliance requirements."
//     },
//     {
//         question: "How long does a typical digital transformation project take?",
//         answer: "Project timelines vary based on scope and complexity. Our agile methodology enables rapid delivery, with initial results often visible within 8-12 weeks. We work with clients to establish realistic milestones and deliver incremental value throughout the engagement."
//     },
//     {
//         question: "Does Zeta-V offer ongoing support after deployment?",
//         answer: "Yes, we provide comprehensive post-deployment support including managed IT services, 24/7 monitoring, regular maintenance, and continuous optimization. Our support models are flexible and can be tailored to your specific needs."
//     },
//     {
//         question: "How does Zeta-V ensure data security and compliance?",
//         answer: "We implement enterprise-grade security measures including encryption, access controls, regular audits, and compliance frameworks aligned with industry standards like GDPR, HIPAA, SOC 2, and ISO 27001. Security is embedded throughout our development lifecycle."
//     }
// ]

// /* ─── Page Component ───────────────────────────────────── */

// export default function ServicesPage() {
//     return (
//         <>
//             <Navbar />
//             <main className="svc-page">
//                 <HeroSection />

//                 <OverviewSection />
//                 <DetailedSection />
//                 <HowWeWorkSection />
//                 <CaseStudiesSection />
//                 <WhyChooseSection />
//                 <TechStackSection />
//                 <TestimonialsSection />
//                 <FAQSection />
//                 <FinalCTASection />
//             </main>
//             <FooterSection />
//         </>
//     )
// }

// /* ─── 1. Hero Section ──────────────────────────────────── */

// function HeroSection() {
//     const ref = useRef(null)
//     const isInView = useInView(ref, { once: true, margin: "-100px" })

//     return (
//         <section className="svc-hero" ref={ref}>
//             <div className="svc-hero__mesh" />
//             <div className="svc-hero__grid-bg" />
//             <div className="svc-hero__orb svc-hero__orb--1" />
//             <div className="svc-hero__orb svc-hero__orb--2" />

//             <div className="svc-hero__inner">
//                 <motion.div
//                     className="svc-hero__chip"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.5 }}
//                 >
//                     <FaRocket className="svc-hero__chip-icon" />
//                     <span>Cutting-Edge Technology Solutions</span>
//                 </motion.div>

//                 <motion.h1
//                     className="svc-hero__title"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: 0.1, duration: 0.6 }}
//                 >
//                     Technology Services that Accelerate{' '}
//                     <span className="svc-grad-text">Digital Transformation</span>
//                 </motion.h1>

//                 <motion.p
//                     className="svc-hero__sub"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: 0.2, duration: 0.6 }}
//                 >
//                     Zeta-V is a leading provider of AI-driven digital transformation and IT consulting
//                     services for enterprises. We help organizations accelerate growth through cloud
//                     migration services, generative AI, data analytics, and enterprise modernization.
//                 </motion.p>

//                 <motion.div
//                     className="svc-hero__actions"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: 0.3, duration: 0.6 }}
//                 >
//                     <a href="#services-overview" className="svc-btn svc-btn--primary">
//                         <FaRocket className="svc-btn-icon" />
//                         Explore Our Services
//                     </a>
//                     <a href="#contact" className="svc-btn svc-btn--ghost">
//                         <FaHeadset className="svc-btn-icon" />
//                         Talk to an Expert
//                     </a>
//                 </motion.div>

//                 <motion.div
//                     className="svc-hero__stats"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: 0.4, duration: 0.6 }}
//                 >
//                     {stats.map((stat, idx) => (
//                         <div key={stat.label} className="svc-hero__stat">
//                             <div className="svc-hero__stat-icon">{stat.icon}</div>
//                             <div className="svc-hero__stat-value">{stat.value}</div>
//                             <div className="svc-hero__stat-label">{stat.label}</div>
//                         </div>
//                     ))}
//                 </motion.div>
//             </div>

//             <motion.div
//                 className="svc-hero__scroll"
//                 animate={{ y: [0, 10, 0] }}
//                 transition={{ repeat: Infinity, duration: 1.5 }}
//             >
//                 <span>Scroll to explore</span>
//                 <div className="svc-hero__scroll-dot" />
//             </motion.div>
//         </section>
//     )
// }

// /* ─── 2. Stats Section ─────────────────────────────────── */

// function StatsSection() {
//     const ref = useRef(null)
//     const isInView = useInView(ref, { once: true })

//     return (
//         <section className="svc-stats" ref={ref}>
//             <div className="svc-stats__inner">
//                 {stats.map((stat, idx) => (
//                     <motion.div
//                         key={stat.label}
//                         className="svc-stats__card"
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={isInView ? { opacity: 1, y: 0 } : {}}
//                         transition={{ delay: idx * 0.1, duration: 0.5 }}
//                     >
//                         <div className="svc-stats__icon" style={{ background: `linear-gradient(135deg, #667eea ${idx * 30}%, #764ba2 100%)` }}>
//                             {stat.icon}
//                         </div>
//                         <div className="svc-stats__value">{stat.value}</div>
//                         <div className="svc-stats__label">{stat.label}</div>
//                     </motion.div>
//                 ))}
//             </div>
//         </section>
//     )
// }

// /* ─── 3. Services Overview Cards ──────────────────────── */

// function OverviewSection() {
//     const ref = useRef(null)
//     const isInView = useInView(ref, { once: true, margin: "-100px" })

//     return (
//         <section id="services-overview" className="svc-cards" ref={ref}>
//             <div className="svc-cards__inner">
//                 <motion.div
//                     className="svc-cards__head"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <span className="svc-eyebrow">What We Offer</span>
//                     <h2 className="svc-h2">
//                         Our Core <span className="svc-grad-text">IT Services</span>
//                     </h2>
//                     <p className="svc-lede">
//                         At Zeta-V, we offer end-to-end technology solutions designed to drive
//                         innovation, efficiency, and scalability across industries.
//                     </p>
//                 </motion.div>

//                 <div className="svc-cards__grid">
//                     {overviewCards.map((card, i) => (
//                         <motion.div
//                             key={card.title}
//                             className="svc-card"
//                             initial={{ opacity: 0, y: 50 }}
//                             animate={isInView ? { opacity: 1, y: 0 } : {}}
//                             transition={{ delay: i * 0.1, duration: 0.6 }}
//                             whileHover={{ y: -8 }}
//                         >
//                             <div className="svc-card__glow" style={{ background: card.gradient }} />
//                             <div className="svc-card__icon-wrap" style={{ background: card.gradient }}>
//                                 {card.icon}
//                             </div>
//                             <h3 className="svc-card__title">{card.title}</h3>
//                             <p className="svc-card__desc">{card.desc}</p>
//                             <a href={`#${detailedServices[i].id}`} className="svc-card__link">
//                                 Learn More <FaArrowRight className="svc-card__link-icon" />
//                             </a>
//                             <div className="svc-card__bar" style={{ background: card.gradient }} />
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

// /* ─── 4. Detailed Services (Tabbed) ───────────────────── */

// function DetailedSection() {
//     const [active, setActive] = useState(0)
//     const ref = useRef(null)
//     const isInView = useInView(ref, { once: true, margin: "-100px" })
//     const svc = detailedServices[active]

//     return (
//         <section id="detailed-services" className="svc-detail" ref={ref}>
//             <div className="svc-detail__inner">
//                 <motion.div
//                     className="svc-detail__head"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <span className="svc-eyebrow">Service Details</span>
//                     <h2 className="svc-h2">
//                         Explore Our <span className="svc-grad-text">Solutions</span>
//                     </h2>
//                 </motion.div>

//                 <motion.div
//                     className="svc-detail__tabs"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: 0.2, duration: 0.6 }}
//                 >
//                     {detailedServices.map((s, i) => (
//                         <button
//                             key={s.id}
//                             className={`svc-detail__tab ${active === i ? 'active' : ''}`}
//                             onClick={() => setActive(i)}
//                         >
//                             <span className="svc-detail__tab-icon">{s.icon}</span>
//                             {s.title}
//                             {active === i && <motion.div className="svc-detail__tab-indicator" layoutId="tabIndicator" />}
//                         </button>
//                     ))}
//                 </motion.div>

//                 <AnimatePresence mode="wait">
//                     <motion.div
//                         key={svc.id}
//                         className="svc-detail__content"
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -30 }}
//                         transition={{ duration: 0.4 }}
//                     >
//                         <div className="svc-detail__overview">
//                             {svc.subText.map((p, i) => (
//                                 <p key={i} className="svc-detail__para">{p}</p>
//                             ))}
//                         </div>

//                         {/* Challenges Section */}
//                         <div className="svc-detail__section">
//                             <div className="svc-detail__section-title">
//                                 <div className="svc-detail__section-icon"><HiOutlineExclamationTriangle /></div>
//                                 <h3>Challenges We Solve</h3>
//                             </div>
//                             <div className="svc-grid-2">
//                                 {svc.challenges.map((challenge, i) => (
//                                     <div key={i} className="svc-challenge">
//                                         <div className="svc-challenge__num">CHALLENGE 0{i+1}</div>
//                                         <h4>{challenge.title}</h4>
//                                         <p>{challenge.desc}</p>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Offerings & Impact */}
//                         <div className="svc-detail__cards-row">
//                             <motion.div
//                                 className="svc-detail__info-card"
//                                 initial={{ opacity: 0, x: -20 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ delay: 0.2 }}
//                             >
//                                 <div className="svc-detail__info-header">
//                                     <div className="svc-detail__info-icon" style={{ background: svc.gradient }}>
//                                         <HiOutlineSparkles />
//                                     </div>
//                                     <h4>Key Offerings</h4>
//                                 </div>
//                                 <ul className="svc-detail__list">
//                                     {svc.offerings.map((o, i) => (
//                                         <motion.li
//                                             key={i}
//                                             initial={{ opacity: 0, x: -10 }}
//                                             animate={{ opacity: 1, x: 0 }}
//                                             transition={{ delay: 0.3 + i * 0.05 }}
//                                         >
//                                             <HiCheck className="svc-detail__check" />
//                                             <span>{o}</span>
//                                         </motion.li>
//                                     ))}
//                                 </ul>
//                             </motion.div>

//                             <motion.div
//                                 className="svc-detail__info-card svc-detail__info-card--impact"
//                                 initial={{ opacity: 0, x: 20 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ delay: 0.3 }}
//                             >
//                                 <div className="svc-detail__info-header">
//                                     <div className="svc-detail__info-icon" style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }}>
//                                         <HiOutlineChartBar />
//                                     </div>
//                                     <h4>Business Impact</h4>
//                                 </div>
//                                 <ul className="svc-detail__list">
//                                     {svc.impact.map((imp, i) => (
//                                         <motion.li
//                                             key={i}
//                                             initial={{ opacity: 0, x: 10 }}
//                                             animate={{ opacity: 1, x: 0 }}
//                                             transition={{ delay: 0.4 + i * 0.05 }}
//                                         >
//                                             <HiArrowLongRight className="svc-detail__check svc-detail__check--impact" />
//                                             <span>{imp}</span>
//                                         </motion.li>
//                                     ))}
//                                 </ul>
//                             </motion.div>
//                         </div>
//                     </motion.div>
//                 </AnimatePresence>
//             </div>
//         </section>
//     )
// }

// /* ─── 5. How We Work ──────────────────────────────────────── */

// function HowWeWorkSection() {
//     const ref = useRef(null)
//     const isInView = useInView(ref, { once: true, margin: "-100px" })

//     return (
//         <section className="svc-how" ref={ref}>
//             <div className="svc-how__inner">
//                 <motion.div
//                     className="svc-how__head"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <span className="svc-eyebrow">Our Process</span>
//                     <h2 className="svc-h2">
//                         How We <span className="svc-grad-text">Work</span>
//                     </h2>
//                     <p className="svc-lede">
//                         A proven 4-step methodology that delivers results from Day 1.
//                     </p>
//                 </motion.div>

//                 <div className="svc-how__timeline">
//                     {howWeWorkSteps.map((step, i) => (
//                         <motion.div
//                             key={step.num}
//                             className="svc-how__step-wrap"
//                             initial={{ opacity: 0, y: 50 }}
//                             animate={isInView ? { opacity: 1, y: 0 } : {}}
//                             transition={{ delay: i * 0.15, duration: 0.6 }}
//                         >
//                             <div className="svc-how__step">
//                                 <div className="svc-how__step-num">{step.num}</div>
//                                 <div className="svc-how__step-icon">{step.icon}</div>
//                                 <h3 className="svc-how__step-title">{step.title}</h3>
//                                 <p className="svc-how__step-body">{step.body}</p>
//                                 <div className="svc-how__step-glow" />
//                             </div>
//                             {i < howWeWorkSteps.length - 1 && (
//                                 <div className="svc-how__connector">
//                                     <motion.div
//                                         className="svc-how__connector-line"
//                                         initial={{ scaleX: 0 }}
//                                         animate={isInView ? { scaleX: 1 } : {}}
//                                         transition={{ delay: i * 0.15 + 0.3, duration: 0.8 }}
//                                     />
//                                 </div>
//                             )}
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

// /* ─── 6. Case Studies ─────────────────────────────────── */

// function CaseStudiesSection() {
//     const ref = useRef(null)
//     const isInView = useInView(ref, { once: true, margin: "-100px" })

//     return (
//         <section className="svc-cases" ref={ref}>
//             <div className="svc-cases__inner">
//                 <motion.div
//                     className="svc-cases__head"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <span className="svc-eyebrow">Case Studies</span>
//                     <h2 className="svc-h2">
//                         Real-World <span className="svc-grad-text">Results</span>
//                     </h2>
//                 </motion.div>

//                 <div className="svc-cases__grid">
//                     {caseStudies.map((cs, idx) => (
//                         <motion.div
//                             key={idx}
//                             className="svc-case"
//                             initial={{ opacity: 0, y: 50 }}
//                             animate={isInView ? { opacity: 1, y: 0 } : {}}
//                             transition={{ delay: idx * 0.2, duration: 0.6 }}
//                             whileHover={{ y: -5 }}
//                         >
//                             <div className="svc-case__gradient" />
//                             <div className="svc-case__badge">{cs.industry}</div>
//                             <h3 className="svc-case__title">{cs.title}</h3>

//                             <div className="svc-case__section">
//                                 <div className="svc-case__label">Challenge</div>
//                                 <p className="svc-case__text">{cs.challenge}</p>
//                             </div>

//                             <div className="svc-case__section">
//                                 <div className="svc-case__label">Solutions</div>
//                                 <ul className="svc-case__list">
//                                     {cs.solutions.map((s, i) => (
//                                         <li key={i}>
//                                             <HiCheck className="svc-case__bullet" />
//                                             {s}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>

//                             <div className="svc-case__results">
//                                 {cs.results.map((r, i) => (
//                                     <div key={i} className="svc-case__result">
//                                         <div className="svc-case__result-value">{r.metric}</div>
//                                         <div className="svc-case__result-label">{r.label}</div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

// /* ─── 7. Why Choose Zeta-V ────────────────────────────── */

// function WhyChooseSection() {
//     const ref = useRef(null)
//     const isInView = useInView(ref, { once: true, margin: "-100px" })

//     const benefits = [
//         { icon: <HiOutlineSparkles />, title: 'Generative AI Expertise' },
//         { icon: <FaCloudUploadAlt />, title: 'Cloud-Native Solutions' },
//         { icon: <HiOutlineChartBar />, title: 'Data-Driven Insights' },
//         { icon: <FaCodeBranch />, title: 'Agile Delivery' },
//         { icon: <FaShieldAlt />, title: 'Enterprise Security' },
//         { icon: <FaGlobe />, title: 'Industry Expertise' },
//     ]

//     return (
//         <section className="svc-why" ref={ref}>
//             <div className="svc-why__bg" />
//             <div className="svc-why__inner">
//                 <motion.div
//                     className="svc-why__head"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <span className="svc-eyebrow svc-eyebrow--light">Why Choose Us</span>
//                     <h2 className="svc-h2" style={{ color: '#fff' }}>
//                         Why <span className="svc-grad-text">Zeta-V</span>?
//                     </h2>
//                     <p className="svc-lede" style={{ color: 'rgba(255,255,255,0.7)' }}>
//                         We combine deep technical expertise with business acumen to deliver transformative results.
//                     </p>
//                 </motion.div>

//                 <div className="svc-why__benefits">
//                     {benefits.map((benefit, idx) => (
//                         <motion.div
//                             key={benefit.title}
//                             className="svc-benefit"
//                             initial={{ opacity: 0, x: -20 }}
//                             animate={isInView ? { opacity: 1, x: 0 } : {}}
//                             transition={{ delay: idx * 0.08, duration: 0.5 }}
//                         >
//                             <div className="svc-benefit__icon">{benefit.icon}</div>
//                             <span className="svc-benefit__text">{benefit.title}</span>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

// /* ─── 8. Technology Stack ─────────────────────────────── */

// function TechStackSection() {
//     const ref = useRef(null)
//     const isInView = useInView(ref, { once: true, margin: "-100px" })

//     return (
//         <section className="svc-tech" ref={ref}>
//             <div className="svc-tech__inner">
//                 <motion.div
//                     className="svc-tech__head"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <span className="svc-eyebrow">Technologies</span>
//                     <h2 className="svc-h2">
//                         Our Technology <span className="svc-grad-text">Stack</span>
//                     </h2>
//                     <p className="svc-lede">
//                         We work with leading platforms and tools to deliver robust solutions.
//                     </p>
//                 </motion.div>

//                 <div className="svc-tech__grid">
//                     {techStack.map((t, i) => (
//                         <motion.div
//                             key={t.name}
//                             className="svc-tech__item"
//                             initial={{ opacity: 0, scale: 0.8 }}
//                             animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                             transition={{ delay: i * 0.05, duration: 0.4 }}
//                             whileHover={{ y: -5 }}
//                         >
//                             <div className="svc-tech__item-icon">{t.icon}</div>
//                             <span className="svc-tech__item-name">{t.name}</span>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

// /* ─── 9. Testimonials Section ─────────────────────────── */

// function TestimonialsSection() {
//     const ref = useRef(null)
//     const isInView = useInView(ref, { once: true, margin: "-100px" })
//     const [activeIndex, setActiveIndex] = useState(0)

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setActiveIndex((prev) => (prev + 1) % testimonials.length)
//         }, 5000)
//         return () => clearInterval(interval)
//     }, [])

//     return (
//         <section className="svc-testimonials" ref={ref}>
//             <div className="svc-testimonials__inner">
//                 <motion.div
//                     className="svc-testimonials__head"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <span className="svc-eyebrow">Testimonials</span>
//                     <h2 className="svc-h2">
//                         What Our <span className="svc-grad-text">Clients Say</span>
//                     </h2>
//                 </motion.div>

//                 <AnimatePresence mode="wait">
//                     <motion.div
//                         key={activeIndex}
//                         className="svc-testimonial"
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -30 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <div className="svc-testimonial__quote">“</div>
//                         <p className="svc-testimonial__text">{testimonials[activeIndex].text}</p>
//                         <div className="svc-testimonial__author">
//                             <strong>{testimonials[activeIndex].author}</strong>
//                             <span>{testimonials[activeIndex].role}</span>
//                         </div>
//                         <div className="svc-testimonial__stars">
//                             {[...Array(5)].map((_, i) => (
//                                 <FaStar key={i} className="svc-testimonial__star" />
//                             ))}
//                         </div>
//                     </motion.div>
//                 </AnimatePresence>

//                 <div className="svc-testimonials__dots">
//                     {testimonials.map((_, idx) => (
//                         <button
//                             key={idx}
//                             className={`svc-testimonials__dot ${activeIndex === idx ? 'active' : ''}`}
//                             onClick={() => setActiveIndex(idx)}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

// /* ─── 10. FAQ Section ──────────────────────────────────── */

// function FAQSection() {
//     const [openIndex, setOpenIndex] = useState(null)
//     const ref = useRef(null)
//     const isInView = useInView(ref, { once: true, margin: "-100px" })

//     return (
//         <section className="svc-faq" ref={ref}>
//             <div className="svc-faq__inner">
//                 <motion.div
//                     className="svc-faq__head"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <span className="svc-eyebrow">FAQ</span>
//                     <h2 className="svc-h2">
//                         Frequently Asked <span className="svc-grad-text">Questions</span>
//                     </h2>
//                 </motion.div>

//                 <div className="svc-faq__list">
//                     {faqs.map((faq, idx) => (
//                         <motion.div
//                             key={idx}
//                             className={`svc-faq__item ${openIndex === idx ? 'open' : ''}`}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={isInView ? { opacity: 1, y: 0 } : {}}
//                             transition={{ delay: idx * 0.1, duration: 0.5 }}
//                         >
//                             <button
//                                 className="svc-faq__question"
//                                 onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
//                             >
//                                 <span>{faq.question}</span>
//                                 {openIndex === idx ? <HiMinus /> : <HiPlus />}
//                             </button>
//                             <AnimatePresence>
//                                 {openIndex === idx && (
//                                     <motion.div
//                                         className="svc-faq__answer"
//                                         initial={{ height: 0, opacity: 0 }}
//                                         animate={{ height: 'auto', opacity: 1 }}
//                                         exit={{ height: 0, opacity: 0 }}
//                                         transition={{ duration: 0.3 }}
//                                     >
//                                         <p>{faq.answer}</p>
//                                     </motion.div>
//                                 )}
//                             </AnimatePresence>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

// /* ─── 11. Final CTA ────────────────────────────────────── */

// function FinalCTASection() {
//     const ref = useRef(null)
//     const isInView = useInView(ref, { once: true, margin: "-100px" })

//     return (
//         <section className="svc-cta" ref={ref}>
//             <div className="svc-cta__grid-bg" />
//             <div className="svc-cta__orb svc-cta__orb--1" />
//             <div className="svc-cta__orb svc-cta__orb--2" />

//             <div className="svc-cta__inner">
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <div className="svc-cta__icon">
//                         <FaHandshake />
//                     </div>
//                     <h2 className="svc-cta__title">
//                         Ready to <span className="svc-grad-text">Transform</span> Your Business?
//                     </h2>
//                     <p className="svc-cta__sub">
//                         Partner with Zeta-V to accelerate your digital journey with AI-driven solutions,
//                         cloud transformation, and enterprise IT consulting services. Let's build scalable,
//                         secure, and future-ready systems for your business.
//                     </p>
//                     <div className="svc-cta__actions">
//                         <a href="#contact" className="svc-btn svc-btn--primary svc-btn--large">
//                             Schedule a Consultation
//                         </a>
//                         <a href="#contact" className="svc-btn svc-btn--outline">
//                             Contact Us Today
//                         </a>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     )
// }

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FaUniversity,
  FaIndustry,
  FaHeartbeat,
  FaLandmark,
  FaBolt,
  FaBuilding,
  FaUsers,
  FaShareAlt,
  FaCloudUploadAlt,
  FaRobot,
  FaChartLine,
  FaShieldAlt,
  FaMicrochip,
  FaDatabase,
  FaCodeBranch,
  FaServer,
  FaLaptopCode,
  FaUserTie,
  FaPaintBrush,
  FaWordpress,
  FaAws,
  FaDocker,
  FaWindows,
  FaStar,
  FaCrown,
  FaGem,
  FaClock,
  FaRocket,
  FaHeadset,
  FaHandshake,
  FaGlobe,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import {
  HiOutlineLightBulb,
  HiOutlineExclamationTriangle,
  HiOutlineDocumentText,
  HiOutlineChartBar,
  HiOutlineQuestionMarkCircle,
  HiOutlineSparkles,
  HiArrowRight,
  HiArrowLongRight,
  HiOutlineCheckCircle,
  HiPlus,
  HiMinus,
  HiCheck,
} from "react-icons/hi2";
import { FiArrowUpRight } from "react-icons/fi";
import Navbar from "../components/Navbar";
import FooterSection from "../components/Footer";
import "./ServicesPage.css";

import { FiArrowRight } from "react-icons/fi";

/* ─── Data ─────────────────────────────────────────────── */

const overviewCards = [
  {
    icon: <FaBolt />,
    title: "Digital Acceleration",
    desc: "Enable business agility with cloud migration services, AI automation for business, and data-driven insights.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: <FaBuilding />,
    title: "Enterprise Transformation",
    desc: "Modernize operations with IoT solutions, SAP implementation, DevOps services, and scalable application development.",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    image:
      "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: <FaUsers />,
    title: "Workforce Management",
    desc: "Build high-performing teams through IT staff augmentation, lateral hiring, and deployment services.",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: <FaShareAlt />,
    title: "Shared Services",
    desc: "Optimize IT operations with managed IT services, infrastructure support, and compliance & governance solutions.",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    image:
      "https://images.pexels.com/photos/3184451/pexels-photo-3184451.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const detailedServices = [
  {
    id: "digital-acceleration",
    title: "Digital Acceleration",
    icon: <FaBolt />,
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
    demoImage:
      "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "enterprise-transformation",
    title: "Enterprise Transformation",
    icon: <FaBuilding />,
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
    demoImage:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "workforce-management",
    title: "Workforce Management",
    icon: <FaUsers />,
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
    demoImage:
      "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "shared-services",
    title: "Shared Services",
    icon: <FaShareAlt />,
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
    demoImage:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const howWeWorkSteps = [
  {
    num: "01",
    icon: <FaLaptopCode />,
    title: "Discovery",
    body: "We begin by understanding your business landscape, technology environment, and strategic objectives through deep-dive workshops and stakeholder interviews.",
  },
  {
    num: "02",
    icon: <HiOutlineLightBulb />,
    title: "Design",
    body: "Our architects craft a tailored solution blueprint — covering technology stack, integration points, security posture, and a phased delivery roadmap.",
  },
  {
    num: "03",
    icon: <FaRocket />,
    title: "Deploy",
    body: "We execute with agile precision — iterative sprints, continuous testing, and seamless deployment into your production environment.",
  },
  {
    num: "04",
    icon: <FaHeadset />,
    title: "Support",
    body: "Post-launch, we provide ongoing monitoring, optimization, and managed support to ensure peak performance and continuous improvement.",
  },
];

const caseStudies = [
  {
    title: "AI-Driven Digital Transformation for Enterprise Operations",
    industry: "Financial Services",
    challenge:
      "An enterprise faced inefficiencies due to manual processes and fragmented data systems, resulting in slow decision-making and high operational costs.",
    solutions: [
      "Cloud migration services to AWS cloud infrastructure",
      "Generative AI and machine learning models for predictive analytics",
      "Data analytics dashboards for real-time decision-making",
    ],
    results: [
      { metric: "60%", label: "improvement in operational efficiency" },
      { metric: "Real-time", label: "insights for faster decision-making" },
      {
        metric: "Automated",
        label: "reduced manual workload through automation",
      },
    ],
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Industrial IoT Implementation for Smart Manufacturing",
    industry: "Manufacturing",
    challenge:
      "A manufacturing company struggled with lack of real-time visibility into operations, leading to unplanned downtime and production inefficiencies.",
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
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const techStack = [
  { name: "HTML5", icon: "🌐", color: "#E34F26" },
  { name: "CSS3", icon: "🎨", color: "#1572B6" },
  { name: "JavaScript", icon: "⚡", color: "#F7DF1E" },
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "Node.js", icon: "🟢", color: "#339933" },
  { name: "AWS", icon: "☁️", color: "#FF9900" },
  { name: "Docker", icon: "🐳", color: "#2496ED" },
  { name: "Azure", icon: "🔷", color: "#0089D6" },
  { name: "HTML5", icon: "🌐", color: "#E34F26" },
  { name: "CSS3", icon: "🎨", color: "#1572B6" },
  { name: "JavaScript", icon: "⚡", color: "#F7DF1E" },
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "Node.js", icon: "🟢", color: "#339933" },
  { name: "AWS", icon: "☁️", color: "#FF9900" },
  { name: "Docker", icon: "🐳", color: "#2496ED" },
  { name: "Azure", icon: "🔷", color: "#0089D6" },
];

const techStackCategories = [
  {
    category: "Frontend",
    icon: "🎨",
    technologies: [
      { name: "HTML5", icon: "🌐", color: "#E34F26" },
      { name: "CSS3", icon: "🎨", color: "#1572B6" },
      { name: "JavaScript", icon: "⚡", color: "#F7DF1E" },
      { name: "TypeScript", icon: "📘", color: "#3178C6" },
      { name: "React", icon: "⚛️", color: "#61DAFB" },
      { name: "Vue.js", icon: "💚", color: "#4FC08D" },
      { name: "Angular", icon: "🅰️", color: "#DD0031" },
      { name: "Tailwind CSS", icon: "🌊", color: "#06B6D4" },
      { name: "Sass", icon: "💗", color: "#CC6699" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    technologies: [
      { name: "Node.js", icon: "🟢", color: "#339933" },
      { name: "Python", icon: "🐍", color: "#3776AB" },
      { name: "Java", icon: "☕", color: "#007396" },
      { name: "Go", icon: "🐹", color: "#00ADD8" },
      { name: "PHP", icon: "🐘", color: "#777BB4" },
      { name: "Ruby", icon: "💎", color: "#CC342D" },
      { name: "Django", icon: "🎸", color: "#092E20" },
      { name: "Spring Boot", icon: "🌱", color: "#6DB33F" },
      { name: ".NET", icon: "🔷", color: "#512BD4" },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    technologies: [
      { name: "AWS", icon: "☁️", color: "#FF9900" },
      { name: "Azure", icon: "🔷", color: "#0089D6" },
      { name: "Google Cloud", icon: "☁️", color: "#4285F4" },
      { name: "Docker", icon: "🐳", color: "#2496ED" },
      { name: "Kubernetes", icon: "⚓", color: "#326CE5" },
      { name: "Terraform", icon: "🏗️", color: "#7B42BC" },
      { name: "Jenkins", icon: "👨‍🔧", color: "#D33833" },
      { name: "GitHub Actions", icon: "⚡", color: "#2088FF" },
      { name: "Ansible", icon: "🔧", color: "#EE0000" },
    ],
  },
  {
    category: "Databases",
    icon: "🗄️",
    technologies: [
      { name: "MongoDB", icon: "🍃", color: "#47A248" },
      { name: "PostgreSQL", icon: "🐘", color: "#4169E1" },
      { name: "MySQL", icon: "🐬", color: "#4479A1" },
      { name: "Redis", icon: "🔴", color: "#DC382D" },
      { name: "Elasticsearch", icon: "🔍", color: "#005571" },
      { name: "Firebase", icon: "🔥", color: "#FFCA28" },
      { name: "SQL Server", icon: "🗄️", color: "#CC2927" },
    ],
  },
  {
    category: "AI & ML",
    icon: "🧠",
    technologies: [
      { name: "TensorFlow", icon: "🧩", color: "#FF6F00" },
      { name: "PyTorch", icon: "🔥", color: "#EE4C2C" },
      { name: "Scikit-learn", icon: "📊", color: "#F7931E" },
      { name: "OpenAI", icon: "🤖", color: "#10A37F" },
      { name: "Hugging Face", icon: "🤗", color: "#FFD21E" },
    ],
  },
  {
    category: "Monitoring",
    icon: "📊",
    technologies: [
      { name: "Prometheus", icon: "🔥", color: "#E6522C" },
      { name: "Grafana", icon: "📈", color: "#F46800" },
      { name: "Datadog", icon: "🐕", color: "#632CA6" },
      { name: "New Relic", icon: "🔄", color: "#008C99" },
      { name: "Splunk", icon: "🔍", color: "#000000" },
    ],
  },
  {
    category: "DevOps Tools",
    icon: "🛠️",
    technologies: [
      { name: "Git", icon: "⎇", color: "#F05032" },
      { name: "GitHub", icon: "🐙", color: "#181717" },
      { name: "NPM", icon: "📦", color: "#CB3837" },
      { name: "Webpack", icon: "📦", color: "#8DD6F9" },
      { name: "Babel", icon: "🔀", color: "#F9DC3E" },
      { name: "Jest", icon: "✓", color: "#C21325" },
      { name: "Cypress", icon: "🌲", color: "#17202C" },
    ],
  },
  {
    category: "API & Integration",
    icon: "🔌",
    technologies: [
      { name: "GraphQL", icon: "📡", color: "#E10098" },
      { name: "Apollo", icon: "🚀", color: "#311C87" },
      { name: "REST API", icon: "🔗", color: "#009688" },
      { name: "Kafka", icon: "📨", color: "#231F20" },
      { name: "RabbitMQ", icon: "🐰", color: "#FF6600" },
    ],
  },
];

const stats = [
  { value: "500+", label: "Projects Delivered", icon: <FaStar /> },
  { value: "200+", label: "Happy Clients", icon: <FaCrown /> },
  { value: "98%", label: "Client Retention", icon: <FaGem /> },
  { value: "24/7", label: "Support Available", icon: <FaClock /> },
];

const testimonials = [
  {
    text: "Zeta-V's digital transformation services have been instrumental in modernizing our operations. Their AI solutions delivered measurable ROI within months.",
    author: "Sarah Johnson",
    role: "CTO, GlobalTech Industries",
    rating: 5,
  },
  {
    text: "The team at Zeta-V provided exceptional cloud migration services. Our infrastructure is now more scalable, secure, and cost-effective.",
    author: "Michael Chen",
    role: "Director of IT, FinCorp",
    rating: 5,
  },
  {
    text: "Working with Zeta-V on our IoT implementation was seamless. Their expertise and support have been outstanding throughout the journey.",
    author: "Emily Rodriguez",
    role: "VP of Operations, ManuSmart",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What industries does Zeta-V specialize in?",
    answer:
      "Zeta-V serves a wide range of industries including finance, healthcare, manufacturing, retail, government, and technology. Our deep domain expertise allows us to deliver tailored solutions that address industry-specific challenges and compliance requirements.",
  },
  {
    question: "How long does a typical digital transformation project take?",
    answer:
      "Project timelines vary based on scope and complexity. Our agile methodology enables rapid delivery, with initial results often visible within 8-12 weeks. We work with clients to establish realistic milestones and deliver incremental value throughout the engagement.",
  },
  {
    question: "Does Zeta-V offer ongoing support after deployment?",
    answer:
      "Yes, we provide comprehensive post-deployment support including managed IT services, 24/7 monitoring, regular maintenance, and continuous optimization. Our support models are flexible and can be tailored to your specific needs.",
  },
  {
    question: "How does Zeta-V ensure data security and compliance?",
    answer:
      "We implement enterprise-grade security measures including encryption, access controls, regular audits, and compliance frameworks aligned with industry standards like GDPR, HIPAA, SOC 2, and ISO 27001. Security is embedded throughout our development lifecycle.",
  },
];

/* ─── Page Component ───────────────────────────────────── */

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="svc-page">
        <HeroSection />
        {/* <StatsSection /> */}
        {/* <OverviewSection /> */}
        <DetailedSection />
        <HowWeWorkSection />
        <CaseStudiesSection />
        <WhyChooseSection />
        <TechStackSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <FooterSection />
    </>
  );
}

/* ─── 1. Hero Section with Animated Background Image ──────────────────── */

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="svc-hero" ref={ref}>
      {/* Animated Background Image */}
      <motion.div
        className="svc-hero__bg-image"
        initial={{ scale: 1.1, y: 100 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.1, 1] }}
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      />
      <div className="svc-hero__overlay" />
      <div className="svc-hero__mesh" />
      <div className="svc-hero__grid-bg" />
      <div className="svc-hero__orb svc-hero__orb--1" />
      <div className="svc-hero__orb svc-hero__orb--2" />

      <div className="svc-hero__inner">
        <motion.div
          className="svc-hero__chip"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <FaRocket className="svc-hero__chip-icon" />
          <span>Cutting-Edge Technology Solutions</span>
        </motion.div>

        <motion.h1
          className="svc-hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Technology Services that Accelerate{" "}
          <span className="svc-grad-text">Digital Transformation</span>
        </motion.h1>

        <motion.p
          className="svc-hero__sub"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Zeta-V is a leading provider of AI-driven digital transformation and
          IT consulting services for enterprises. We help organizations
          accelerate growth through cloud migration services, generative AI,
          data analytics, and enterprise modernization.
        </motion.p>

        <motion.div
          className="svc-hero__actions"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <a href="#services-overview" className="svc-btn svc-btn--primary">
            <FaRocket className="svc-btn-icon" />
            Explore Our Services
          </a>
          <a href="#contact" className="svc-btn svc-btn--ghost">
            <FaHeadset className="svc-btn-icon" />
            Talk to an Expert
          </a>
        </motion.div>

        <motion.div
          className="svc-hero__stats"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {stats.map((stat, idx) => (
            <div key={stat.label} className="svc-hero__stat">
              <div className="svc-hero__stat-icon">{stat.icon}</div>
              <div className="svc-hero__stat-value">{stat.value}</div>
              <div className="svc-hero__stat-label">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="svc-hero__scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span>Scroll to explore</span>
        <div className="svc-hero__scroll-dot" />
      </motion.div>
    </section>
  );
}

/* ─── 2. Stats Section ─────────────────────────────────── */

function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="svc-stats" ref={ref}>
      <div className="svc-stats__inner">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            className="svc-stats__card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <div
              className="svc-stats__icon"
              style={{
                background: `linear-gradient(135deg, #667eea ${idx * 30}%, #764ba2 100%)`,
              }}
            >
              {stat.icon}
            </div>
            <div className="svc-stats__value">{stat.value}</div>
            <div className="svc-stats__label">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── 3. Services Overview Cards ──────────────────────── */

function OverviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services-overview" className="svc-cards" ref={ref}>
      <div className="svc-cards__inner">
        <motion.div
          className="svc-cards__head"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="svc-eyebrow">What We Offer</span>
          <h2 className="svc-h2">
            Our Core <span className="svc-grad-text">IT Services</span>
          </h2>
          <p className="svc-lede">
            At Zeta-V, we offer end-to-end technology solutions designed to
            drive innovation, efficiency, and scalability across industries.
          </p>
        </motion.div>

        <div className="svc-cards__grid">
          {overviewCards.map((card, i) => (
            <motion.div
              key={card.title}
              className="svc-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="svc-card__image"
                style={{ backgroundImage: `url(${card.image})` }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="svc-card__content">
                <div
                  className="svc-card__icon-wrap"
                  style={{ background: card.gradient }}
                >
                  {card.icon}
                </div>
                <h3 className="svc-card__title">{card.title}</h3>
                <p className="svc-card__desc">{card.desc}</p>
                <a
                  href={`#${detailedServices[i].id}`}
                  className="svc-card__link"
                >
                  Learn More <FaArrowRight className="svc-card__link-icon" />
                </a>
              </div>
              <div
                className="svc-card__bar"
                style={{ background: card.gradient }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 4. Detailed Services (2-Column Layout) ───────────────────── */

function DetailedSection() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const svc = detailedServices[active];

  return (
    <section id="detailed-services" className="svc-detail" ref={ref}>
      <div className="svc-detail__inner">
        <motion.div
          className="svc-detail__head"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="svc-eyebrow">Service Details</span>
          <h2 className="svc-h2">
            Explore Our <span className="svc-grad-text">Solutions</span>
          </h2>
        </motion.div>

        <motion.div
          className="svc-detail__tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {detailedServices.map((s, i) => (
            <button
              key={s.id}
              className={`svc-detail__tab ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="svc-detail__tab-icon">{s.icon}</span>
              {s.title}
              {active === i && (
                <motion.div
                  className="svc-detail__tab-indicator"
                  layoutId="tabIndicator"
                />
              )}
            </button>
          ))}
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
              {/* Left Column - Info */}
              <div className="svc-detail__info-col">
                <div className="svc-detail__overview">
                  {svc.subText.map((p, i) => (
                    <p key={i} className="svc-detail__para">
                      {p}
                    </p>
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
                        <div className="svc-challenge__num">
                          CHALLENGE 0{i + 1}
                        </div>
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
                          background:
                            "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
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

              {/* Right Column - Image */}
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
  );
}

/* ─── 5. How We Work ──────────────────────────────────────── */

/* ─── How We Work Section - Premium Redesign ──────────────────────────────────────── */
/* ─── How We Work Section - Compact Premium Design ──────────────────────────────────────── */

function HowWeWorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section className="svc-how" ref={ref}>
      <div className="svc-how__inner">
        <motion.div
          className="svc-how__head"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="svc-eyebrow">Our Process</span>
          <h2 className="svc-h2">
            How We <span className="svc-grad-text">Work</span>
          </h2>
          <p className="svc-lede">
            A streamlined 4-step methodology that delivers results
          </p>
        </motion.div>

        {/* Compact Horizontal Timeline */}
        <div className="svc-how__timeline">
          {howWeWorkSteps.map((step, i) => (
            <motion.div
              key={step.num}
              className="svc-how__step"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              onMouseEnter={() => setActiveStep(i)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Step Connector Line */}
              {i < howWeWorkSteps.length - 1 && (
                <div className="svc-how__connector">
                  <motion.div
                    className="svc-how__connector-line"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                  />
                </div>
              )}

              {/* Step Node */}
              <div className="svc-how__node">
                <motion.div
                  className="svc-how__node-ring"
                  animate={{ scale: activeStep === i ? [1, 1.2, 1] : 1 }}
                  transition={{
                    duration: 0.5,
                    repeat: activeStep === i ? Infinity : 0,
                  }}
                />
                <div className="svc-how__node-number">{step.num}</div>
                <div className="svc-how__node-icon">{step.icon}</div>
              </div>

              {/* Step Card */}
              <motion.div
                className="svc-how__card"
                animate={{
                  y: activeStep === i ? -4 : 0,
                  borderColor:
                    activeStep === i
                      ? "var(--svc-violet)"
                      : "var(--svc-border)",
                }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="svc-how__title">{step.title}</h3>
                <p className="svc-how__body">{step.body}</p>
                <div className="svc-how__meta">
                  <span className="svc-how__duration">
                    <FaClock className="svc-how__duration-icon" />
                    {getStepDuration(i)}
                  </span>
                  <FiArrowRight className="svc-how__arrow" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function getStepDuration(stepIndex) {
  const durations = ["1-2 weeks", "2-3 weeks", "3-4 weeks", "Ongoing"];
  return durations[stepIndex] || "2-3 weeks";
}

/* ─── 6. Case Studies ─────────────────────────────────── */

function CaseStudiesSection() {
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
          <span className="svc-eyebrow">Case Studies</span>
          <h2 className="svc-h2">
            Real-World <span className="svc-grad-text">Results</span>
          </h2>
        </motion.div>

        <div className="svc-cases__grid">
          {caseStudies.map((cs, idx) => (
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
  );
}

/* ─── 7. Why Choose Zeta-V ────────────────────────────── */

function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    { icon: <HiOutlineSparkles />, title: "Generative AI Expertise" },
    { icon: <FaCloudUploadAlt />, title: "Cloud-Native Solutions" },
    { icon: <HiOutlineChartBar />, title: "Data-Driven Insights" },
    { icon: <FaCodeBranch />, title: "Agile Delivery" },
    { icon: <FaShieldAlt />, title: "Enterprise Security" },
    { icon: <FaGlobe />, title: "Industry Expertise" },
  ];

  return (
    <section className="svc-why" ref={ref}>
      <div className="svc-why__bg" />
      <div className="svc-why__inner">
        <motion.div
          className="svc-why__head"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="svc-eyebrow svc-eyebrow--light">Why Choose Us</span>
          <h2 className="svc-h2" style={{ color: "#fff" }}>
            Why <span className="svc-grad-text">Zeta-V</span>?
          </h2>
          <p className="svc-lede" style={{ color: "rgba(255,255,255,0.7)" }}>
            We combine deep technical expertise with business acumen to deliver
            transformative results.
          </p>
        </motion.div>

        <div className="svc-why__benefits">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              className="svc-benefit"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
            >
              <div className="svc-benefit__icon">{benefit.icon}</div>
              <span className="svc-benefit__text">{benefit.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 8. Technology Stack ─────────────────────────────── */

/* ─── TechStackSection - Clean Compact Grid Design ──────────────────────────────────────── */

function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="svc-tech" ref={ref}>
      <div className="svc-tech__inner">
        <motion.div
          className="svc-tech__head"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="svc-eyebrow">Technologies</span>
          <h2 className="svc-h2">
            Our Technology <span className="svc-grad-text">Stack</span>
          </h2>
          <p className="svc-lede">
            Modern tools and frameworks we use to build exceptional solutions
          </p>
        </motion.div>

        {/* Category Filter Buttons */}
        <div className="svc-tech__filters">
          {techStackCategories.map((category, idx) => (
            <motion.button
              key={category.category}
              className={`svc-tech__filter ${activeCategory === idx ? "active" : ""}`}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.03, duration: 0.3 }}
              onClick={() => setActiveCategory(idx)}
            >
              <span className="svc-tech__filter-icon">{category.icon}</span>
              <span className="svc-tech__filter-name">{category.category}</span>
            </motion.button>
          ))}
        </div>

        {/* Tech Grid - Shows active category only */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="svc-tech__grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {techStackCategories[activeCategory].technologies.map(
              (tech, idx) => (
                <motion.div
                  key={tech.name}
                  className="svc-tech__card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.03, duration: 0.2 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  style={{
                    borderTopColor: tech.color,
                    borderTopWidth: "3px",
                    borderTopStyle: "solid",
                  }}
                >
                  <div
                    className="svc-tech__card-icon"
                    style={{ color: tech.color }}
                  >
                    {tech.icon}
                  </div>
                  <h4 className="svc-tech__card-name">{tech.name}</h4>
                  <span className="svc-tech__card-badge">Expert</span>
                </motion.div>
              ),
            )}
          </motion.div>
        </AnimatePresence>

        {/* Compact Stats */}
        <motion.div
          className="svc-tech__stats"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <div className="svc-tech__stat">
            <span className="svc-tech__stat-value">50+</span>
            <span className="svc-tech__stat-label">Technologies</span>
          </div>
          <div className="svc-tech__stat">
            <span className="svc-tech__stat-value">8</span>
            <span className="svc-tech__stat-label">Categories</span>
          </div>
          <div className="svc-tech__stat">
            <span className="svc-tech__stat-value">5+</span>
            <span className="svc-tech__stat-label">Years Avg Exp</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── 9. Testimonials Section ─────────────────────────── */

function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="svc-testimonials" ref={ref}>
      <div className="svc-testimonials__bg">
        <div className="svc-testimonials__bg-orb-1" />
        <div className="svc-testimonials__bg-orb-2" />
      </div>

      <div className="svc-testimonials__inner">
        <motion.div
          className="svc-testimonials__head"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="svc-eyebrow">Testimonials</span>
          <h2 className="svc-h2">
            What Our <span className="svc-grad-text">Clients Say</span>
          </h2>
          <p className="svc-lede">Trusted by leading enterprises worldwide</p>
        </motion.div>

        <div className="svc-testimonials__slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="svc-testimonial"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Quote Icon */}
              <div className="svc-testimonial__quote-icon">
                <svg
                  width="40"
                  height="32"
                  viewBox="0 0 40 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 32L8 0H16L12 32H0ZM24 32L32 0H40L36 32H24Z"
                    fill="currentColor"
                    opacity="0.15"
                  />
                </svg>
              </div>

              {/* Rating Stars */}
              <div className="svc-testimonial__stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="svc-testimonial__star" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="svc-testimonial__text">
                {testimonials[activeIndex].text}
              </p>

              {/* Author Info */}
              <div className="svc-testimonial__author">
                <div className="svc-testimonial__author-avatar">
                  <div className="svc-testimonial__author-initial">
                    {testimonials[activeIndex].author.charAt(0)}
                  </div>
                  <div className="svc-testimonial__author-check">
                    <HiCheck />
                  </div>
                </div>
                <div className="svc-testimonial__author-info">
                  <strong>{testimonials[activeIndex].author}</strong>
                  <span>{testimonials[activeIndex].role}</span>
                </div>
              </div>

              {/* Company Logo Placeholder */}
              <div className="svc-testimonial__company">
                <div className="svc-testimonial__company-dot" />
                <span>Verified Client</span>
                <div className="svc-testimonial__company-dot" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="svc-testimonials__dots">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`svc-testimonials__dot ${activeIndex === idx ? "active" : ""}`}
                onClick={() => setActiveIndex(idx)}
              >
                <span className="svc-testimonials__dot-label">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="svc-testimonials__progress">
            <motion.div
              className="svc-testimonials__progress-bar"
              key={activeIndex}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              onAnimationComplete={() => {
                setActiveIndex((prev) => (prev + 1) % testimonials.length);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
/* ─── 10. FAQ Section ──────────────────────────────────── */

function FAQSection() {
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
          <span className="svc-eyebrow">FAQ</span>
          <h2 className="svc-h2">
            Frequently Asked <span className="svc-grad-text">Questions</span>
          </h2>
          <p className="svc-lede">
            Everything you need to know about our services and how we can help
            your business grow.
          </p>
        </motion.div>

        <div className="svc-faq__two-col">
          {/* Left Column - FAQ Accordion */}
          <div className="svc-faq__accordion-col">
            <div className="svc-faq__list">
              {faqs.map((faq, idx) => (
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

            {/* Additional Help Text */}
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
                <p>
                  Can't find the answer you're looking for? Please chat with our
                  friendly team.
                </p>
                <a href="#contact" className="svc-faq__help-link">
                  Contact Support <FaArrowRight />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Image */}
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
  );
}
/* ─── 11. Final CTA ────────────────────────────────────── */

function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="svc-cta" ref={ref}>
      <div className="svc-cta__grid-bg" />
      <div className="svc-cta__orb svc-cta__orb--1" />
      <div className="svc-cta__orb svc-cta__orb--2" />

      <div className="svc-cta__inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="svc-cta__icon">
            <FaHandshake />
          </div>
          <h2 className="svc-cta__title">
            Ready to <span className="svc-grad-text">Transform</span> Your
            Business?
          </h2>
          <p className="svc-cta__sub">
            Partner with Zeta-V to accelerate your digital journey with
            AI-driven solutions, cloud transformation, and enterprise IT
            consulting services. Let's build scalable, secure, and future-ready
            systems for your business.
          </p>
          <div className="svc-cta__actions">
            <a
              href="#contact"
              className="svc-btn svc-btn--primary svc-btn--large"
            >
              Schedule a Consultation
            </a>
            <a href="#contact" className="svc-btn svc-btn--outline">
              Contact Us Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
