// src/components/IndustryAll/IndustryDetail/Index.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
    FaArrowRight
} from 'react-icons/fa'
import {
    HiOutlineLightBulb, HiOutlineExclamationTriangle,
    HiOutlineDocumentText, HiOutlineChartBar, HiOutlineQuestionMarkCircle,
    HiOutlineCheckCircle, HiPlus, HiMinus, HiCheck,
} from 'react-icons/hi2'
import './IndustryDetail.css'

// Embedded industry background images
const industryBgImages = {
    financial: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1920',
    manufacturing: 'https://images.pexels.com/photos/15893881/pexels-photo-15893881.jpeg',
    healthcare: 'https://images.pexels.com/photos/7723524/pexels-photo-7723524.jpeg',
    government: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1920',
}

// Embedded complete industry data
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
        caseStudies: [
            { title: 'Cloud Transformation for a Regional Bank', challenge: 'A regional bank struggled with legacy reporting systems that delayed financial reporting and limited real-time visibility.', solution: ['Cloud migration of financial data infrastructure', 'Real-time business intelligence dashboards', 'Automated financial reporting workflows'], results: ['60% faster reporting cycles', 'Real-time executive insights'] },
            { title: 'AI Fraud Detection for Payment Platform', challenge: 'A payment processing company needed advanced fraud detection capabilities at scale.', solution: ['ML fraud detection models', 'Real-time analytics dashboards', 'Automated alert systems'], results: ['35% drop in fraudulent transactions', 'Enhanced security'] },
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
        heading: 'Manufacturing Technology Consulting — ERP, IIoT & Smart Factory',
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
        caseStudies: [
            { title: 'ERP Modernization for a Manufacturing Company', challenge: 'A mid-sized manufacturer ran multiple disconnected legacy systems.', solution: ['Centralized ERP platform implementation', 'Automated supply chain workflows'], results: ['35% improvement in operational efficiency', 'Real-time production visibility'] },
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
        heading: 'Healthcare IT Solutions — Telemedicine, EHR & Digital Health',
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
        caseStudies: [
            { title: 'Telemedicine Platform for a Healthcare Provider', challenge: 'A provider wanted to expand access in remote areas.', solution: ['Secure telemedicine consultation portal', 'EHR integration'], results: ['50% increase in patient access', 'Improved patient satisfaction'] },
        ],
        benefits: ['Expanded digital health transformation', 'Improved patient engagement', 'Enhanced clinical decisions through analytics'],
        whyUs: 'Zeta-V brings deep expertise in developing secure, scalable healthcare IT solutions.',
        faqs: [
            { q: 'How does telemedicine improve healthcare access?', a: 'It enables remote consultations, improving access especially for rural patients.' },
            { q: 'What are the benefits of EHR integration?', a: 'Securely stored patient history improves care coordination and efficiency.' },
        ],
    },
    government: {
        heading: 'Government Digital Transformation — Cloud, AI & Citizen Services',
        overview: [
            'Government organizations are adopting digital technologies to improve citizen services and modernize public infrastructure.',
            'Zeta-V helps public sector institutions accelerate transformation through smart city solutions, cloud modernization, and intelligent data platforms.',
            'By implementing AI-driven automation and citizen service portals, we help build resilient digital ecosystems.',
        ],
        challenges: [
            { title: 'Legacy IT Infrastructure', desc: 'Outdated systems limit integration with modern platforms.' },
            { title: 'Limited Scalability', desc: 'Government systems struggle with increasing digital service demand.' },
            { title: 'Manual Processes', desc: 'Paper-based workflows slow service delivery.' },
        ],
        solutions: [
            { title: 'Cloud Modernization', desc: 'Migrate government systems to scalable, secure cloud environments.' },
            { title: 'Citizen Service Portals', desc: 'Digital platforms that improve citizen engagement.' },
            { title: 'AI for Public Sector', desc: 'Automate administrative tasks and enhance decision-making.' },
        ],
        caseStudies: [],
        benefits: ['Improved public service efficiency', 'Enhanced transparency', 'Scalable cloud infrastructure'],
        whyUs: 'Zeta-V brings deep expertise in delivering digital transformation for government organizations.',
        faqs: [
            { q: 'How can digital transformation improve public services?', a: 'It modernizes service delivery and provides faster digital services.' },
            { q: 'What are the benefits of cloud migration for government?', a: 'Improved scalability, reduced costs, and enhanced security.' },
        ],
    },
}

export default function IndustryDetail({ industryKey }) {
    const [openFaq, setOpenFaq] = useState(0)
    const data = industriesData[industryKey]

    return (
        <motion.section
            className="ind-detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="ind-detail__bg">
                <motion.div 
                    className="ind-detail__bg-image"
                    style={{ backgroundImage: `url(${industryBgImages[industryKey]})` }}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                />
                <div className="ind-detail__bg-overlay" />
            </div>

            <div className="ind-detail__inner">
                <motion.h2
                    className="ind-detail__heading"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {data.heading}
                </motion.h2>

                <div className="ind-detail__overview">
                    {data.overview.map((p, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            {p}
                        </motion.p>
                    ))}
                </div>

                {data.challenges.length > 0 && (
                    <div className="ind-block">
                        <motion.h3
                            className="ind-block__title"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="ind-block__icon"><HiOutlineExclamationTriangle /></span>
                            Industry Challenges
                        </motion.h3>
                        <div className="ind-grid-2">
                            {data.challenges.map((c, i) => (
                                <motion.div
                                    key={i}
                                    className="ind-challenge"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    whileHover={{ y: -4 }}
                                >
                                    <div className="ind-challenge__num">0{i + 1}</div>
                                    <h4>{c.title}</h4>
                                    <p>{c.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {data.solutions.length > 0 && (
                    <div className="ind-block">
                        <motion.h3
                            className="ind-block__title"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="ind-block__icon"><HiOutlineLightBulb /></span>
                            Technology Solutions
                        </motion.h3>
                        <div className="ind-grid-2">
                            {data.solutions.map((s, i) => (
                                <motion.div
                                    key={i}
                                    className="ind-solution"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    whileHover={{ y: -4 }}
                                >
                                    <div className="ind-solution__corner" />
                                    <h4>{s.title}</h4>
                                    <p>{s.desc}</p>
                                    <FaArrowRight className="ind-solution__arrow" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {data.caseStudies.length > 0 && (
                    <div className="ind-block">
                        <motion.h3
                            className="ind-block__title"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="ind-block__icon"><HiOutlineDocumentText /></span>
                            Case Studies
                        </motion.h3>
                        <div className="ind-cases">
                            {data.caseStudies.map((cs, i) => (
                                <motion.div
                                    key={i}
                                    className="ind-case"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2, duration: 0.5 }}
                                >
                                    <div className="ind-case__badge">Case Study</div>
                                    <h4>{cs.title}</h4>
                                    <div className="ind-case__row">
                                        <span className="ind-case__lbl">Challenge</span>
                                        <p>{cs.challenge}</p>
                                    </div>
                                    <div className="ind-case__row">
                                        <span className="ind-case__lbl">Solution</span>
                                        <ul>
                                            {cs.solution.map((s, j) => (
                                                <li key={j}><HiCheck /> {s}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="ind-case__results">
                                        {cs.results.map((r, j) => (
                                            <span key={j} className="ind-case__pill">
                                                <HiOutlineCheckCircle /> {r}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="ind-block">
                    <motion.h3
                        className="ind-block__title"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="ind-block__icon"><HiOutlineChartBar /></span>
                        Key Benefits
                    </motion.h3>
                    <div className="ind-benefits">
                        {data.benefits.map((b, i) => (
                            <motion.div
                                key={i}
                                className="ind-benefit"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.4 }}
                            >
                                <span className="ind-benefit__check"><HiCheck /></span>
                                <span>{b}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="ind-why"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="ind-why__glow" />
                    <span className="hero__overline" style={{ color: 'rgba(255,255,255,0.7)' }}>Why Choose Us</span>
                    <h2 className="hero__h1" style={{ color: '#fff', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '16px' }}>
                        <span className="hero__h1b">Why Businesses Choose <span className="grad-text">Zeta-V</span>?</span>
                    </h2>
                    <p className="hero__sub" style={{ color: 'rgba(255,255,255,0.78)', maxWidth: '800px' }}>
                        Delivering measurable outcomes through technology, orchestration, and value-driven execution.
                    </p>
                    <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.78)', lineHeight: '1.8', marginTop: '24px' }}>
                        {data.whyUs}
                    </p>
                </motion.div>

                {data.faqs.length > 0 && (
                    <div className="ind-block">
                        <motion.h3
                            className="ind-block__title"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="ind-block__icon"><HiOutlineQuestionMarkCircle /></span>
                            Frequently Asked Questions
                        </motion.h3>
                        <div className="ind-faqs">
                            {data.faqs.map((faq, i) => {
                                const open = openFaq === i
                                return (
                                    <motion.div
                                        key={i}
                                        className={`ind-faq ${open ? 'ind-faq--open' : ''}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05, duration: 0.4 }}
                                    >
                                        <button
                                            className="ind-faq__q"
                                            onClick={() => setOpenFaq(open ? -1 : i)}
                                        >
                                            <span>{faq.q}</span>
                                            <span className="ind-faq__toggle">
                                                {open ? <HiMinus /> : <HiPlus />}
                                            </span>
                                        </button>
                                        <AnimatePresence initial={false}>
                                            {open && (
                                                <motion.div
                                                    className="ind-faq__a"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div className="ind-faq__a-inner">{faq.a}</div>
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