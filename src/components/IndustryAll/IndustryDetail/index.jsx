// src/components/IndustryAll/IndustryDetail/Index.jsx
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
    FaArrowRight, FaQuoteLeft, FaChartLine, FaCloud, FaRobot, FaShieldAlt
} from 'react-icons/fa'
import {
    HiOutlineLightBulb, HiOutlineExclamationTriangle,
    HiOutlineDocumentText, HiOutlineChartBar, HiOutlineQuestionMarkCircle,
    HiPlus, HiMinus, HiCheck,
} from 'react-icons/hi2'
import './IndustryDetail.css'

import BgImage1 from '../../../assets/pexels/pexels-photo-25.webp';
import BgImage2 from '../../../assets/pexels/pexels-photo-26.avif';
import BgImage3 from '../../../assets/pexels/pexels-photo-27.avif';
import BgImage4 from '../../../assets/pexels/pexels-photo-28.webp';
import BgImage5 from '../../../assets/pexels/pexels-photo-29.avif';

const industryBgImages = {
    financial: BgImage1,
    manufacturing: BgImage2,
    healthcare: BgImage3,
    retaildistribution: BgImage4,
    retail: BgImage5,
}

const industryColors = {
    financial: { gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)', color: '#22a7f0', lightBg: 'rgba(34, 167, 240, 0.08)' },
    manufacturing: { gradient: 'linear-gradient(135deg, #34d399, #06b6d4)', color: '#34d399', lightBg: 'rgba(52, 211, 153, 0.08)' },
    healthcare: { gradient: 'linear-gradient(135deg, #f472b6, #ec4899)', color: '#f472b6', lightBg: 'rgba(244, 114, 182, 0.08)' },
     retaildistribution: { gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)', color: '#f59e0b', lightBg: 'rgba(245, 158, 11, 0.08)' },
    retail: { gradient: 'linear-gradient(135deg, #f97316, #fb923c)', color: '#f97316', lightBg: 'rgba(249, 115, 22, 0.08)' },
}

const industriesData = {
    financial: {
        heading: 'Financial Services: Digital Transformation & AI Solutions',
        overview: [
            'The financial services industry is experiencing rapid disruption driven by digital banking, fintech innovation, regulatory complexity, and rising customer expectations for seamless digital experiences.',
            'As a data analytics consulting firm and fintech consulting services provider, Zeta-V helps financial institutions modernize operations through enterprise cloud migration, intelligent analytics, and secure digital infrastructure.',
            'Through Generative AI consulting, real-time financial intelligence platforms, and legacy system modernization, we help financial institutions transform outdated infrastructures into scalable, cloud-ready ecosystems.',
        ],
        challenges: [
            { title: 'Data Overload & Lack of Insights', desc: 'Banks generate massive datasets but struggle to transform them into actionable insights due to fragmented systems.' },
            { title: 'Regulatory Compliance Complexity', desc: 'Manual compliance processes increase the risk of reporting errors across evolving global regulations.' },
            { title: 'Fraud Detection & Risk Management', desc: 'Sophisticated digital fraud requires intelligent systems that detect suspicious activity in real time.' },
            { title: 'Inefficient Reporting Processes', desc: 'Traditional reporting workflows delay insights and slow strategic decision-making.' },
        ],
        solutions: [
            { title: 'Financial Data Analytics & BI', desc: 'Transform financial data into actionable insights through advanced analytics platforms and modern BI dashboards.' },
            { title: 'Enterprise Cloud Migration', desc: 'Move legacy financial platforms to secure cloud environments for improved scalability and resilience.' },
            { title: 'AI & Generative AI for Finance', desc: 'Automate reporting, detect fraud patterns, and generate predictive insights with GenAI.' },
            { title: 'Legacy System Modernization', desc: 'Modernize outdated infrastructures with modern APIs, analytics platforms, and cloud-native architectures.' },
        ],
        benefits: ['Improved decision-making with predictive analytics', 'Reduced compliance risks through AI automation', 'Enhanced fraud prevention using ML risk analysis', 'Scalable infrastructure on cloud-native platforms'],
        whyUs: 'Zeta-V brings deep expertise in implementing advanced financial technology solutions for banks, fintech companies, and financial institutions.',
        faqs: [
            { q: 'How can data analytics improve decision-making in financial institutions?', a: 'Data analytics enables banks to analyze large volumes of transactional and customer data to identify trends, assess risk, and make data-driven decisions.' },
            { q: 'How can AI help financial institutions detect fraud?', a: 'AI and ML models analyze transaction patterns in real time to detect anomalies and suspicious behavior.' },
            { q: 'What are the benefits of real-time financial reporting?', a: 'Real-time reporting allows organizations to monitor financial performance instantly and improve strategic decision-making.' },
            { q: 'How does cloud infrastructure benefit financial services?', a: 'Cloud platforms provide scalable infrastructure, improved security, and better integration across financial systems.' },
            { q: 'How can institutions manage regulatory compliance more efficiently?', a: 'Automated compliance systems streamline reporting, maintain audit trails, and ensure adherence to regulatory requirements.' },
        ],
    },
    manufacturing: {
        heading: 'Manufacturing Technology Consulting ERP, IIoT & Smart Factory',
        overview: [
            'The manufacturing industry is rapidly evolving with smart factories, connected supply chains, and data-driven production systems.',
            'Zeta-V supports manufacturers with Industry 4.0 consulting, advanced automation, and real-time production intelligence platforms.',
            'By combining IIoT, advanced analytics, and AI automation, we enable intelligent factories that improve productivity and minimize downtime.',
        ],
        challenges: [
            { title: 'Inefficient Production Planning', desc: 'Disconnected systems lead to scheduling inefficiencies and production delays.' },
            { title: 'Lack of Real-Time Visibility', desc: 'Without centralized data, tracking production, inventory, and equipment performance is difficult.' },
            { title: 'Equipment Downtime', desc: 'Unexpected machine failures disrupt schedules and inflate operational costs.' },
        ],
        solutions: [
            { title: 'ERP & SAP Implementation', desc: 'Deploy enterprise ERP platforms that unify manufacturing operations.' },
            { title: 'Industry 4.0 & Smart Manufacturing', desc: 'Enable smart factories using IoT sensors and predictive maintenance.' },
            { title: 'AI Automation for Production', desc: 'Automate operational tasks and improve equipment performance.' },
        ],
        benefits: ['Increased operational efficiency through ERP', 'Reduced downtime via predictive maintenance', 'Improved planning with MRP integration'],
        whyUs: 'Zeta-V brings deep expertise in implementing advanced technology solutions for manufacturers.',
        faqs: [
            { q: 'What role does ERP play in modern manufacturing?', a: 'ERP systems integrate production, inventory, and finance into a centralized platform.' },
            { q: 'How can Industrial IoT improve productivity?', a: 'IIoT connects machines to collect real-time data, enabling monitoring and optimization.' },
            { q: 'What are the benefits of real-time production monitoring?', a: 'It allows manufacturers to track machine performance, identify bottlenecks, and optimize schedules.' },
        ],
    },
    healthcare: {
        heading: 'Healthcare IT Solutions Telemedicine, EHR & Digital Health',
        overview: [
            'Healthcare organizations are rapidly embracing digital technologies to improve patient care and streamline clinical workflows.',
            'Zeta-V helps hospitals, clinics, and networks adopt telemedicine platforms, healthcare data analytics, and intelligent management systems.',
            'By combining Generative AI, advanced analytics, and secure cloud platforms, we help unlock clinical insights and improve diagnostics.',
        ],
        challenges: [
            { title: 'Limited Access in Remote Areas', desc: 'Providers struggle to deliver quality services in rural regions.' },
            { title: 'Fragmented Patient Data', desc: 'Disconnected systems make consolidating patient records inefficient.' },
            { title: 'Data Security & Compliance', desc: 'Protecting patient information while complying with regulations is complex.' },
        ],
        solutions: [
            { title: 'Telemedicine Platforms', desc: 'Digital health frameworks for remote consultations.' },
            { title: 'Healthcare Data Analytics', desc: 'Analyze patient data and support clinical decision-making.' },
            { title: 'AI & Generative AI in Healthcare', desc: 'Automate admin processes and enhance decision-making.' },
        ],
        benefits: ['Expanded digital health transformation', 'Improved patient engagement', 'Enhanced clinical decisions through analytics'],
        whyUs: 'Zeta-V brings deep expertise in developing secure, scalable healthcare IT solutions.',
        faqs: [
            { q: 'How does telemedicine improve healthcare access?', a: 'It enables remote consultations, improving access especially for rural patients.' },
            { q: 'What are the benefits of EHR integration?', a: 'Securely stored patient history improves care coordination and efficiency.' },
        ],
    },
    // NEW: Retail & Distribution
    retail: {
        heading: 'Retail & Distribution: Connected Commerce & Operational Excellence',
        overview: [
            'Retail and distribution businesses operate in fast-moving environments where inventory accuracy, order fulfilment, customer experience, and financial visibility directly impact business performance.',
            'As organizations expand supplier networks, sales channels, and customer touchpoints, there is increasing demand for integrated systems that improve operational visibility, streamline workflows, and support scalable growth.',
            'Zeta-V helps retail and distribution organizations modernize business operations through ERP enablement, workflow automation, digital commerce solutions, analytics, and financial operations support.',
        ],
        challenges: [
            { title: 'Inventory Visibility & Control', desc: 'Managing inventory across suppliers, warehouses, and sales channels while maintaining accuracy and availability.' },
            { title: 'Inefficient Order Management', desc: 'Manual order processing and disconnected systems can slow fulfillment and impact customer experience.' },
            { title: 'Limited Operational Visibility', desc: 'Lack of integrated reporting makes it difficult to track business performance and make informed decisions.' },
            { title: 'Fragmented Customer Experience', desc: 'Disconnected platforms can create inconsistencies across ordering, account management, and customer support processes.' },
        ],
        solutions: [
            { title: 'ERP & Business Process Enablement', desc: 'Implement integrated business platforms that connect inventory, purchasing, sales, financial operations, and reporting.' },
            { title: 'Digital Commerce Platforms', desc: 'Enable customers to place orders, track shipments, review invoices, and manage accounts through web and mobile experiences.' },
            { title: 'Workflow Automation', desc: 'Streamline approvals, notifications, customer onboarding, and operational processes through automated workflows.' },
            { title: 'Analytics & Business Intelligence', desc: 'Leverage dashboards and reporting solutions to improve visibility across inventory, finance, sales, and operations.' },
        ],
        benefits: [
            'Improved inventory and operational visibility',
            'Streamlined order processing and fulfillment workflows',
            'Enhanced customer experience through digital engagement',
            'Better business insights through connected reporting',
            'Increased efficiency through workflow automation',
            'Improved coordination across finance, sales, and operations',
        ],
        whyUs: 'Zeta-V combines operational expertise, technology enablement, and business process modernization to help retail and distribution organizations build connected business ecosystems. Our approach focuses on improving visibility, streamlining operations, enhancing customer experiences, and supporting scalable growth through integrated technology and operational solutions.',
        faqs: [
            { q: 'How can ERP systems improve retail and distribution operations?', a: 'ERP platforms centralize inventory, sales, purchasing, and financial processes, providing greater visibility and operational control across the business.' },
            { q: 'How does workflow automation benefit retail businesses?', a: 'Workflow automation reduces manual effort, accelerates approvals, improves process consistency, and enhances operational efficiency.' },
            { q: 'What role does analytics play in retail and distribution?', a: 'Analytics helps organizations monitor inventory levels, sales performance, operational trends, and financial metrics to support better decision-making.' },
            { q: 'How can digital commerce solutions improve customer experience?', a: 'Digital platforms allow customers to place orders, access invoices, track shipments, and manage accounts through a convenient self-service experience.' },
            { q: 'Why is operational visibility important for distribution businesses?', a: 'Real-time visibility across inventory, orders, and financial operations enables faster decision-making, better planning, and improved customer service.' },
            { q: 'How can integrated business systems support growth?', a: 'Connected systems reduce operational silos, improve efficiency, strengthen reporting capabilities, and create a scalable foundation for business expansion.' },
        ],
    }
}

export default function IndustryDetail({ industryKey, shouldAutoScroll = false }) {
    const [openFaq, setOpenFaq] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const detailRef = useRef(null)
    const data = industriesData[industryKey]
    const colors = industryColors[industryKey] || industryColors.financial

    const getIndustryIcons = () => {
        const icons = {
            financial: [<FaChartLine />, <FaCloud />, <FaShieldAlt />],
            manufacturing: [<FaRobot />, <FaChartLine />, <FaCloud />],
            healthcare: [<FaRobot />, <FaShieldAlt />, <FaChartLine />],
             retaildistribution: [<FaCloud />, <FaShieldAlt />, <FaRobot />],
            retail: [<FaChartLine />, <FaCloud />, <FaRobot />], // choose appropriate icons
        }
        return icons[industryKey] || [<FaChartLine />, <FaCloud />, <FaRobot />]
    }

    useEffect(() => {
        setIsVisible(false)
        const timer = setTimeout(() => setIsVisible(true), 50)
        return () => clearTimeout(timer)
    }, [industryKey])

    useEffect(() => {
        if (shouldAutoScroll && detailRef.current) {
            const headerOffset = 80
            const elementPosition = detailRef.current.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset
            
            setTimeout(() => {
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                })
            }, 150)
        }
    }, [industryKey, shouldAutoScroll])

    if (!data) return null

    return (
        <motion.section
            id={industryKey}
            ref={detailRef}
            className="industry-detail-premium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
        >
            {/* Background */}
            <div className="industry-detail-premium-bg">
                <div 
                    className="industry-detail-premium-bg-image"
                    style={{ backgroundImage: `url(${industryBgImages[industryKey]})` }}
                />
                <div className="industry-detail-premium-overlay" />
            </div>

            <div className="industry-detail-premium-container">
                {/* Header */}
                <motion.h2
                    className="industry-detail-premium-heading"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ color: colors.color }}
                >
                    {data.heading}
                </motion.h2>

                {/* Overview Section */}
                <div className="industry-detail-premium-overview">
                    <div className="overview-header">
                        <div className="overview-badge" style={{ background: colors.lightBg, color: colors.color, borderColor: colors.color }}>
                            <span className="badge-dot" style={{ background: colors.gradient }} />
                            Industry Insights
                        </div>
                        <div className="overview-quote-icon" style={{ background: colors.gradient }}>
                            <FaQuoteLeft />
                        </div>
                    </div>

                    <div className="overview-cards">
                        {data.overview.map((p, i) => {
                            const icons = getIndustryIcons()
                            return (
                                <motion.div
                                    key={i}
                                    className="overview-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.15, duration: 0.6 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="overview-card-icon" style={{ background: colors.lightBg, color: colors.color }}>
                                        {icons[i % icons.length]}
                                    </div>
                                    <div className="overview-card-content">
                                        <div className="overview-card-number" style={{ color: colors.color }}>0{i + 1}</div>
                                        <p>{p}</p>
                                    </div>
                                    <div className="overview-card-glow" style={{ background: `radial-gradient(circle, ${colors.color}10, transparent 70%)` }} />
                                    <div className="overview-card-line" style={{ background: colors.gradient }} />
                                </motion.div>
                            )
                        })}
                    </div>

                    <motion.div 
                        className="overview-stats"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <div className="stat-item">
                            <div className="stat-number" style={{ background: colors.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>9+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat-divider" />
                        <div className="stat-item">
                            <div className="stat-number" style={{ background: colors.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>242+</div>
                            <div className="stat-label">Projects Delivered</div>
                        </div>
                        <div className="stat-divider" />
                        <div className="stat-item">
                            <div className="stat-number" style={{ background: colors.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>98%</div>
                            <div className="stat-label">Client Satisfaction</div>
                        </div>
                    </motion.div>
                </div>

                {/* Challenges */}
                {data.challenges.length > 0 && (
                    <div className="industry-detail-premium-block">
                        <h3 className="industry-detail-premium-block-title" style={{ color: colors.color }}>
                            <span className="industry-detail-premium-block-icon" style={{ background: colors.lightBg, color: colors.color }}>
                                <HiOutlineExclamationTriangle />
                            </span>
                            Industry Challenges
                        </h3>
                        <div className="industry-detail-premium-grid-2">
                            {data.challenges.map((c, i) => (
                                <motion.div
                                    key={i}
                                    className="industry-detail-premium-challenge"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    whileHover={{ y: -4 }}
                                >
                                    <h4>{c.title}</h4>
                                    <p>{c.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Solutions */}
                {data.solutions.length > 0 && (
                    <div className="industry-detail-premium-block">
                        <h3 className="industry-detail-premium-block-title" style={{ color: colors.color }}>
                            <span className="industry-detail-premium-block-icon" style={{ background: colors.lightBg, color: colors.color }}>
                                <HiOutlineLightBulb />
                            </span>
                            Technology Solutions
                        </h3>
                        <div className="industry-detail-premium-grid-2">
                            {data.solutions.map((s, i) => (
                                <motion.div
                                    key={i}
                                    className="industry-detail-premium-solution"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    whileHover={{ y: -4 }}
                                >
                                    <div className="industry-detail-premium-solution-corner" style={{ background: colors.gradient }} />
                                    <h4>{s.title}</h4>
                                    <p>{s.desc}</p>
                                    <FaArrowRight className="industry-detail-premium-solution-arrow" style={{ color: colors.color }} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Benefits */}
                <div className="industry-detail-premium-block">
                    <h3 className="industry-detail-premium-block-title" style={{ color: colors.color }}>
                        <span className="industry-detail-premium-block-icon" style={{ background: colors.lightBg, color: colors.color }}>
                            <HiOutlineChartBar />
                        </span>
                        Key Benefits
                    </h3>
                    <div className="industry-detail-premium-benefits">
                        {data.benefits.map((b, i) => (
                            <motion.div
                                key={i}
                                className="industry-detail-premium-benefit"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.4 }}
                            >
                                <span className="industry-detail-premium-benefit-check" style={{ background: colors.gradient }}><HiCheck /></span>
                                <span>{b}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Why Us */}
                <motion.div
                    className="industry-detail-premium-why"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="industry-detail-premium-why-glow" style={{ background: `radial-gradient(circle, ${colors.color}40, transparent 70%)` }} />
                    <div className="industry-detail-premium-why-badge" style={{ background: colors.lightBg, color: colors.color }}>
                        Why Choose Us
                    </div>
                    <h2 className="industry-detail-premium-why-title">
                        Why Businesses Choose <span>Zeta-V</span>
                    </h2>
                    <p className="industry-detail-premium-why-desc">{data.whyUs}</p>
                </motion.div>

                {/* FAQs */}
                {data.faqs.length > 0 && (
                    <div className="industry-detail-premium-block">
                        <h3 className="industry-detail-premium-block-title" style={{ color: colors.color }}>
                            <span className="industry-detail-premium-block-icon" style={{ background: colors.lightBg, color: colors.color }}>
                                <HiOutlineQuestionMarkCircle />
                            </span>
                            Frequently Asked Questions
                        </h3>
                        <div className="industry-detail-premium-faqs">
                            {data.faqs.map((faq, i) => {
                                const open = openFaq === i
                                return (
                                    <motion.div
                                        key={i}
                                        className={`industry-detail-premium-faq ${open ? 'open' : ''}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05, duration: 0.4 }}
                                    >
                                        <button
                                            className="industry-detail-premium-faq-question"
                                            onClick={() => setOpenFaq(open ? -1 : i)}
                                        >
                                            <span>{faq.q}</span>
                                            <span className="industry-detail-premium-faq-toggle" style={{ background: open ? colors.gradient : colors.lightBg, color: open ? '#fff' : colors.color }}>
                                                {open ? <HiMinus /> : <HiPlus />}
                                            </span>
                                        </button>
                                        <AnimatePresence initial={false}>
                                            {open && (
                                                <motion.div
                                                    className="industry-detail-premium-faq-answer"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div className="industry-detail-premium-faq-answer-inner">{faq.a}</div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        </motion.section>
    )
}