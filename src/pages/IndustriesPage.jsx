import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import {
    FaUniversity, FaIndustry, FaHeartbeat, FaLandmark,
    FaChartLine, FaShieldAlt, FaCloudUploadAlt, FaRobot,
    FaCheckCircle, FaArrowRight
} from 'react-icons/fa'
import {
    HiOutlineLightBulb, HiOutlineExclamationTriangle,
    HiOutlineDocumentText, HiOutlineChartBar, HiOutlineQuestionMarkCircle,
    HiOutlineSparkles, HiArrowLongRight,
    HiOutlineCheckCircle, HiPlus, HiMinus, HiCheck,
} from 'react-icons/hi2'
import { FiArrowUpRight } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import FooterSection from '../components/Footer'
import './IndustriesPage.css'

// Industry background images
const industryBgImages = {
    financial: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1920',
    manufacturing: 'https://images.pexels.com/photos/15893881/pexels-photo-15893881.jpeg',
    healthcare: 'https://images.pexels.com/photos/7723524/pexels-photo-7723524.jpeg',
    government: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1920',
}

/* ─── Industry Data ────────────────────────────────────── */

const industryCards = [
    { Icon: FaUniversity, title: 'Financial Services', id: 'financial', tag: 'Banking · Fintech · Insurance', bgImage: industryBgImages.financial },
    { Icon: FaIndustry, title: 'Manufacturing', id: 'manufacturing', tag: 'Industry 4.0 · ERP · IIoT', bgImage: industryBgImages.manufacturing },
    { Icon: FaHeartbeat, title: 'Healthcare', id: 'healthcare', tag: 'Telemedicine · EHR · AI', bgImage: industryBgImages.healthcare },
    { Icon: FaLandmark, title: 'Government', id: 'government', tag: 'Smart Cities · Cloud · GenAI', bgImage: industryBgImages.government },
]

const industries = {
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

/* ─── Page Component ───────────────────────────────────── */

export default function IndustriesPage() {
    const [activeIndustry, setActiveIndustry] = useState('financial')

    return (
        <>
            <Navbar />
            <main className="ind-page">
                <HeroSection />
                <IndustryCardsSection active={activeIndustry} setActive={setActiveIndustry} />
                <AnimatePresence mode="wait">
                    <IndustryDetailSection
                        key={activeIndustry}
                        data={industries[activeIndustry]}
                        industryKey={activeIndustry}
                    />
                </AnimatePresence>
                <FinalCTASection />
            </main>
            <FooterSection />
        </>
    )
}

/* ─── Hero Section with Background Image ───────────────── */

function HeroSection() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const y = useTransform(scrollYProgress, [0, 1], [0, 100])

    return (
        <section ref={ref} className="ind-hero">
            <motion.div 
                className="ind-hero__bg-image"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: [0.25, 0.1, 0.1, 1] }}
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg')`,
                }}
            />
            <div className="ind-hero__overlay" />
            <div className="ind-hero__mesh" />
            <div className="ind-hero__grid-bg" />
            <motion.div className="ind-hero__orb ind-hero__orb--1" animate={{ x: [0, 40, 0], y: [0, -20, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
            <motion.div className="ind-hero__orb ind-hero__orb--2" animate={{ x: [0, -30, 0], y: [0, 25, 0] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} />

            <motion.div className="ind-hero__inner" style={{ y }}>
                <motion.span
                    className="ind-hero__chip"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <HiOutlineSparkles /> Industry Solutions
                </motion.span>

                <motion.h1
                    className="ind-hero__title"
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    Digital Transformation for{' '}
                    <span className="ind-hero__title-grad">Every Industry</span>
                </motion.h1>

                <motion.p
                    className="ind-hero__sub"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                    Zeta-V delivers IT consulting services across financial services, manufacturing,
                    healthcare, and government — solving complex challenges with AI, cloud, data
                    analytics, and intelligent automation.
                </motion.p>

                <motion.div
                    className="ind-hero__actions"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <a href="#industries-cards" className="ind-btn ind-btn--primary">
                        Explore Industries <HiArrowLongRight />
                    </a>
                    <a href="#contact" className="ind-btn ind-btn--ghost">
                        Talk to Our Experts
                    </a>
                </motion.div>
            </motion.div>

            <motion.div 
                className="ind-hero__scroll"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <span>Scroll to explore</span>
                <div className="ind-hero__scroll-dot" />
            </motion.div>
        </section>
    )
}

/* ─── Industry Cards with Background Images ────────────── */

function IndustryCardsSection({ active, setActive }) {
    return (
        <section id="industries-cards" className="ind-cards">
            <div className="ind-cards__inner">
                <motion.div
                    className="ind-cards__head"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="ind-eyebrow">Industry Verticals</span>
                    <h2 className="ind-h2">Industries We <span className="ind-grad-text">Serve</span></h2>
                    <p className="ind-lede">Driving digital transformation across regulated, complex industries.</p>
                </motion.div>

                <div className="ind-cards__grid">
                    {industryCards.map((card, i) => {
                        const isActive = active === card.id
                        return (
                            <motion.button
                                key={card.id}
                                className={`ind-card ${isActive ? 'ind-card--active' : ''}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                whileHover={{ y: -8 }}
                                onClick={() => setActive(card.id)}
                            >
                                <motion.div 
                                    className="ind-card__bg"
                                    style={{ backgroundImage: `url(${card.bgImage})` }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                />
                                <div className="ind-card__overlay" />
                                <div className="ind-card__glow" />
                                <div className="ind-card__icon-wrap">
                                    <card.Icon className="ind-card__icon" />
                                </div>
                                <h3 className="ind-card__title">{card.title}</h3>
                                <p className="ind-card__tag">{card.tag}</p>
                                <span className="ind-card__cta">
                                    {isActive ? 'Viewing' : 'Explore'} <FiArrowUpRight />
                                </span>
                                <div className="ind-card__bar" />
                            </motion.button>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

/* ─── Industry Detail Section ──────────────────────────── */

function IndustryDetailSection({ data, industryKey }) {
    const [openFaq, setOpenFaq] = useState(0)

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
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
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

                {/* Challenges */}
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

                {/* Solutions */}
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

                {/* Case Studies */}
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

                {/* Benefits */}
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

                {/* Why Us */}
                <motion.div
                    className="ind-why"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="ind-why__glow" />
                    <span className="ind-eyebrow ind-eyebrow--light">Why Choose Us</span>
                    <h3>Why Choose Zeta-V</h3>
                    <p>{data.whyUs}</p>
                </motion.div>

                {/* FAQs */}
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

/* ─── Final CTA ────────────────────────────────────────── */

function FinalCTASection() {
    return (
        <section className="ind-cta">
            <motion.div 
                className="ind-cta__bg-image"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
                }}
            />
            <div className="ind-cta__overlay" />
            <motion.div className="ind-cta__orb ind-cta__orb--1" animate={{ x: [0, 30, 0], y: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
            <motion.div className="ind-cta__orb ind-cta__orb--2" animate={{ x: [0, -25, 0], y: [0, 20, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />

            <motion.div
                className="ind-cta__inner"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
            >
                <span className="ind-hero__chip"><HiOutlineSparkles /> Let's Build Together</span>
                <h2 className="ind-cta__title">
                    Your Industry. Your Challenges.{' '}
                    <span className="ind-hero__title-grad">Our Expertise.</span>
                </h2>
                <p className="ind-cta__sub">
                    Tell us your industry and what you're trying to solve — we'll match you with the
                    right specialist within 24 hours.
                </p>
                <div className="ind-hero__actions">
                    <a href="#contact" className="ind-btn ind-btn--primary">
                        Talk to a Specialist <HiArrowLongRight />
                    </a>
                    <a href="#contact" className="ind-btn ind-btn--ghost">See All Case Studies</a>
                </div>
            </motion.div>
        </section>
    )
}