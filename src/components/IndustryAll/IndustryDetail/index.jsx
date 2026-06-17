import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
    ArrowRight, Quote, Lightbulb, AlertTriangle, FileText, TrendingUp, HelpCircle,
    CheckCircle2, Plus, Minus, Check, Building2, Landmark, Stethoscope, Factory,
    CloudUpload, ShieldCheck, Wrench, Truck, Lock, Users, FileText as FileIcon,
    Cpu, Dna, ClipboardList, Bot, ChartLine
} from 'lucide-react'
import './IndustryDetail.css'

import financeBg from '../../../assets/industy/finance.jpg'
import manufacturingBg from '../../../assets/industy/manufacturing.jpg'
import healthcareBg from '../../../assets/industy/healthcare.jpg'
import governmentBg from '../../../assets/industy/government.png'

const industryBgImages = {
    financial: financeBg, manufacturing: manufacturingBg,
    healthcare: healthcareBg, government: governmentBg,
}

const industryThemes = {
    financial: {
        name: 'Financial Services', classSuffix: 'finance',
        accentRgb: '55, 138, 221', accentMid: '#378ADD', accentLight: '#85B7EB', accentGlow: 'rgba(55, 138, 221, 0.12)',
        gradientOverlay: 'linear-gradient(135deg, rgba(5,15,35,0.85), rgba(5,15,35,0.78))',
        iconGradient: 'linear-gradient(135deg, #378ADD, #2563EB)', industryIcon: Building2,
        overlay: 'linear-gradient(160deg, rgba(5,15,35,0.82) 0%, rgba(5,15,35,0.92) 100%)',
        overviewIcons: [<CloudUpload size={22} />, <ChartLine size={22} />, <ShieldCheck size={22} />, <Cpu size={22} />],
    },
    manufacturing: {
        name: 'Manufacturing', classSuffix: 'manufacturing',
        accentRgb: '245, 158, 11', accentMid: '#F59E0B', accentLight: '#FBBF24', accentGlow: 'rgba(245, 158, 11, 0.18)',
        gradientOverlay: 'linear-gradient(135deg, rgba(15,8,4,0.88), rgba(15,8,4,0.82))',
        iconGradient: 'linear-gradient(135deg, #F59E0B, #D97706)', industryIcon: Factory,
        overlay: 'linear-gradient(160deg, rgba(15,8,4,0.58) 0%, rgba(15,8,4,0.75) 100%)',
        overviewIcons: [<Wrench size={22} />, <Bot size={22} />, <TrendingUp size={22} />, <Truck size={22} />],
    },
    healthcare: {
        name: 'Healthcare', classSuffix: 'healthcare',
        accentRgb: '29, 158, 117', accentMid: '#1D9E75', accentLight: '#5DCAA5', accentGlow: 'rgba(29, 158, 117, 0.12)',
        gradientOverlay: 'linear-gradient(135deg, rgba(8,25,40,0.85), rgba(8,25,40,0.78))',
        iconGradient: 'linear-gradient(135deg, #1D9E75, #10B981)', industryIcon: Stethoscope,
        overlay: 'linear-gradient(160deg, rgba(8,25,40,0.80) 0%, rgba(8,25,40,0.92) 100%)',
        overviewIcons: [<Stethoscope size={22} />, <Dna size={22} />, <ClipboardList size={22} />, <ShieldCheck size={22} />],
    },
    government: {
        name: 'Government', classSuffix: 'government',
        accentRgb: '139, 92, 246', accentMid: '#8B5CF6', accentLight: '#C4B5FD', accentGlow: 'rgba(139, 92, 246, 0.16)',
        gradientOverlay: 'linear-gradient(135deg, rgba(20,14,6,0.88), rgba(20,14,6,0.82))',
        iconGradient: 'linear-gradient(135deg, #8B5CF6, #7C3AED)', industryIcon: Landmark,
        overlay: 'linear-gradient(160deg, rgba(20,14,6,0.60) 0%, rgba(20,14,6,0.78) 100%)',
        overviewIcons: [<Building2 size={22} />, <Lock size={22} />, <Users size={22} />, <FileIcon size={22} />],
    },
}

const industriesData = {
    financial: {
        heading: 'Financial Services: Digital Transformation & AI Solutions',
        overview: [
            'The financial services industry is experiencing rapid disruption driven by digital banking, fintech innovation, and rising customer expectations.',
            'Zeta-V helps financial institutions modernize operations through enterprise cloud migration, intelligent analytics, and secure digital infrastructure.',
            'Through Generative AI consulting and real-time financial intelligence platforms, we transform outdated infrastructures into scalable, cloud-ready ecosystems.',
        ],
        challenges: [
            { title: 'Data Overload & Lack of Insights', desc: 'Banks generate massive datasets but struggle to transform them into actionable insights.' },
            { title: 'Regulatory Compliance Complexity', desc: 'Manual compliance processes increase the risk of reporting errors.' },
            { title: 'Fraud Detection & Risk Management', desc: 'Sophisticated digital fraud requires intelligent real-time detection systems.' },
            { title: 'Inefficient Reporting Processes', desc: 'Traditional reporting workflows delay insights and slow decision-making.' },
        ],
        solutions: [
            { title: 'Financial Data Analytics & BI', desc: 'Transform financial data into actionable insights through advanced analytics platforms.' },
            { title: 'Enterprise Cloud Migration', desc: 'Move legacy financial platforms to secure cloud environments.' },
            { title: 'AI & Generative AI for Finance', desc: 'Automate reporting and detect fraud patterns with GenAI.' },
            { title: 'Legacy System Modernization', desc: 'Modernize outdated infrastructures with cloud-native architectures.' },
        ],
        caseStudies: [
            { client: 'Global Bank', challenge: 'Legacy core system', solution: 'Cloud migration + BI', result: '40% cost reduction' },
            { client: 'Payment Platform', challenge: 'Rising fraud losses', solution: 'ML fraud detection', result: '35% fewer fraud cases' },
        ],
        benefits: ['Improved decision-making with predictive analytics', 'Reduced compliance risks through AI automation', 'Enhanced fraud prevention', 'Scalable cloud-native platforms'],
        whyUs: 'Zeta-V brings deep expertise in implementing advanced financial technology solutions.',
        faqs: [
            { q: 'How can data analytics improve decision-making?', a: 'Data analytics enables banks to analyze large volumes of transactional data to identify trends.' },
            { q: 'How can AI help detect fraud?', a: 'AI models analyze transaction patterns in real time to detect anomalies.' },
        ],
    },
    manufacturing: {
        heading: 'Manufacturing Technology Consulting: ERP, IIoT & Smart Factory',
        overview: ['The manufacturing industry is rapidly evolving with smart factories and connected supply chains.', 'Zeta-V supports manufacturers with Industry 4.0 consulting and real-time production intelligence.', 'By combining IIoT, advanced analytics, and AI automation, we enable intelligent factories.'],
        challenges: [{ title: 'Inefficient Production Planning', desc: 'Disconnected systems lead to scheduling inefficiencies and delays.' }, { title: 'Lack of Real-Time Visibility', desc: 'Without centralized data, tracking production metrics becomes impossible.' }, { title: 'Unplanned Equipment Downtime', desc: 'Unexpected failures disrupt schedules and inflate costs.' }],
        solutions: [{ title: 'ERP & SAP Implementation', desc: 'Deploy enterprise ERP platforms that unify manufacturing operations.' }, { title: 'Industry 4.0 & Smart Manufacturing', desc: 'Enable smart factories using IoT sensors and predictive maintenance.' }, { title: 'AI Automation for Production', desc: 'Automate operational tasks and improve equipment performance.' }],
        caseStudies: [{ client: 'Mid-Size Manufacturer', challenge: 'Disconnected legacy systems', solution: 'Centralized ERP platform', result: '35% efficiency gain' }],
        benefits: ['Increased operational efficiency', 'Reduced downtime via predictive maintenance', 'Improved planning with MRP integration'],
        whyUs: 'Zeta-V brings deep expertise in implementing advanced manufacturing technology solutions.',
        faqs: [{ q: 'What role does ERP play in manufacturing?', a: 'ERP systems integrate production, inventory, finance, and HR.' }],
    },
    healthcare: {
        heading: 'Healthcare IT Solutions: Telemedicine, EHR & Digital Health',
        overview: ['Healthcare organizations are rapidly embracing digital technologies to improve patient care.', 'Zeta-V helps hospitals adopt telemedicine platforms and healthcare data analytics.', 'By combining Generative AI and secure cloud platforms, we unlock clinical insights.'],
        challenges: [{ title: 'Limited Access in Remote Areas', desc: 'Providers struggle to deliver quality services in rural regions.' }, { title: 'Fragmented Patient Data', desc: 'Disconnected EHR systems make consolidating records inefficient.' }, { title: 'Data Security & HIPAA Compliance', desc: 'Protecting patient information while maintaining compliance is complex.' }],
        solutions: [{ title: 'Telemedicine Platforms', desc: 'Deploy secure digital health frameworks for remote consultations.' }, { title: 'Healthcare Data Analytics', desc: 'Analyze patient populations to support evidence-based decisions.' }, { title: 'AI & Generative AI in Healthcare', desc: 'Automate admin processes and enhance clinical decision support.' }],
        caseStudies: [{ client: 'Regional Healthcare Network', challenge: 'Limited specialty care access', solution: 'Telemedicine + EHR', result: '50% increase in access' }],
        benefits: ['Expanded access through digital health', 'Improved patient engagement', 'Enhanced clinical decisions'],
        whyUs: 'Zeta-V brings deep expertise in developing secure healthcare IT solutions.',
        faqs: [{ q: 'How does telemedicine improve access?', a: 'Telemedicine enables remote consultations for rural patients.' }],
    },
    government: {
        heading: 'Government Digital Transformation: Cloud, AI & Citizen Services',
        overview: ['Government organizations are adopting digital technologies to improve citizen services.', 'Zeta-V helps public sector institutions accelerate transformation.', 'By implementing AI-driven automation, we build resilient digital ecosystems.'],
        challenges: [{ title: 'Legacy IT Infrastructure', desc: 'Outdated systems limit integration with modern platforms.' }, { title: 'Limited Scalability', desc: 'Systems struggle with increasing digital service demand.' }, { title: 'Manual Paper-Based Processes', desc: 'Paper workflows slow service delivery.' }],
        solutions: [{ title: 'Cloud Modernization', desc: 'Migrate government systems to secure cloud environments.' }, { title: 'Citizen Service Portals', desc: 'Build digital platforms for citizen engagement.' }, { title: 'AI for Public Sector', desc: 'Automate tasks and enhance data-driven decisions.' }],
        caseStudies: [],
        benefits: ['Improved public service efficiency', 'Enhanced transparency', 'Scalable cloud infrastructure'],
        whyUs: 'Zeta-V brings deep expertise in delivering digital transformation for government.',
        faqs: [{ q: 'How can digital transformation improve services?', a: 'It modernizes service delivery through online portals.' }],
    },
}

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -25 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const fadeInRight = {
    hidden: { opacity: 0, x: 25 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function IndustryDetail({ industryKey }) {
    const [openFaq, setOpenFaq] = useState(0)
    const detailRef = useRef(null)
    const data = industriesData[industryKey]
    const theme = industryThemes[industryKey] || industryThemes.financial
    const IndustryIcon = theme.industryIcon

    if (!data || !theme) return null

    const iconStyle = { background: `rgba(${theme.accentRgb}, 0.22)`, color: theme.accentLight }

    return (
        <section className={`industry-detail industry-${theme.classSuffix} ind-detail`} ref={detailRef}
            style={{ '--ind-accent-rgb': theme.accentRgb, '--ind-accent-mid': theme.accentMid, '--ind-accent-light': theme.accentLight, '--ind-accent-glow': theme.accentGlow }}>
            
            <div className="industry-bg">
                <motion.img 
                    src={industryBgImages[industryKey]} 
                    alt="" 
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    key={industryKey}
                />
                <div className="industry-overlay" style={{ background: theme.overlay }} />
                <div className="industry-glow" />
            </div>

            <div className="industry-content" key={industryKey}>
                <div className="industry-content__inner">
                    
                    {/* Badge */}
                    <motion.div className="industry-badge" variants={scaleIn} initial="hidden" animate="visible">
                        <span className="badge-dot" />{theme.name}
                    </motion.div>

                    {/* Heading */}
                    <motion.div className="industry-heading-area" variants={fadeInUp} initial="hidden" animate="visible">
                        <motion.div className="industry-heading-icon" style={{ background: theme.iconGradient }}
                            initial={{ scale: 0, rotate: -10 }} animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.15, type: 'spring', stiffness: 200, damping: 15 }}>
                            <IndustryIcon size={28} />
                        </motion.div>
                        <h2 className="industry-heading">{data.heading}</h2>
                    </motion.div>

                    {/* Overview */}
                    <motion.div className="industry-overview" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
                        <motion.div className="industry-overview-header" variants={fadeInUp}>
                            <div className="industry-badge industry-badge--sm"><span className="badge-dot" />Industry Insights</div>
                            <motion.div className="industry-quote-icon" whileHover={{ scale: 1.1, rotate: -5 }}>
                                <Quote size={18} />
                            </motion.div>
                        </motion.div>
                        <div className="industry-overview-cards">
                            {data.overview.map((p, i) => (
                                <motion.div key={i} className="industry-glass-card" variants={fadeInUp} whileHover={{ y: -3 }}>
                                    <div className="card-icon" style={iconStyle}>{theme.overviewIcons[i % theme.overviewIcons.length]}</div>
                                    <div className="industry-glass-card__content"><p className="card-body">{p}</p></div>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div className="industry-stats" variants={fadeInUp}>
                            <div className="industry-stat"><div className="stat-value">15+</div><div className="stat-label">Years Experience</div></div>
                            <div className="industry-stat"><div className="stat-value">200+</div><div className="stat-label">Projects Delivered</div></div>
                            <div className="industry-stat"><div className="stat-value">98%</div><div className="stat-label">Client Satisfaction</div></div>
                        </motion.div>
                    </motion.div>

                    {/* Challenges */}
                    {data.challenges.length > 0 && (
                        <motion.div className="industry-block" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
                            <motion.h3 className="industry-block__title" variants={fadeInLeft}>
                                <span className="industry-block__icon" style={iconStyle}><AlertTriangle size={20} /></span>Industry Challenges
                            </motion.h3>
                            <div className="industry-grid-2">
                                {data.challenges.map((c, i) => (
                                    <motion.div key={i} className="industry-glass-card" variants={fadeInUp} whileHover={{ y: -3 }}>
                                        <span className="industry-challenge__num">0{i + 1}</span>
                                        <h4 className="card-title">{c.title}</h4>
                                        <p className="card-body">{c.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Solutions */}
                    {data.solutions.length > 0 && (
                        <motion.div className="industry-block" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
                            <motion.h3 className="industry-block__title" variants={fadeInRight}>
                                <span className="industry-block__icon" style={iconStyle}><Lightbulb size={20} /></span>Technology Solutions
                            </motion.h3>
                            <div className="industry-grid-2">
                                {data.solutions.map((s, i) => (
                                    <motion.div key={i} className="industry-glass-card industry-glass-card--solution" variants={fadeInUp} whileHover={{ y: -3 }}>
                                        <h4 className="card-title">{s.title}</h4>
                                        <p className="card-body">{s.desc}</p>
                                        <span className="card-tag">Learn more</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Case Studies */}
                    {data.caseStudies.length > 0 && (
                        <motion.div className="industry-block" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
                            <motion.h3 className="industry-block__title" variants={fadeInLeft}>
                                <span className="industry-block__icon" style={iconStyle}><FileText size={20} /></span>Case Studies
                            </motion.h3>
                            <motion.div className="cs-table-wrap" variants={scaleIn}>
                                <table className="cs-table">
                                    <thead><tr><th style={{width:'22%'}}>Client</th><th style={{width:'26%'}}>Challenge</th><th style={{width:'26%'}}>Solution</th><th style={{width:'26%'}}>Result</th></tr></thead>
                                    <tbody>
                                        {data.caseStudies.map((cs, i) => (
                                            <motion.tr key={i} variants={fadeInUp}>
                                                <td className="cs-client">{cs.client}</td>
                                                <td data-label="Challenge">{cs.challenge}</td>
                                                <td data-label="Solution">{cs.solution}</td>
                                                <td data-label="Result"><span className="cs-result">{cs.result}</span></td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </motion.div>
                        </motion.div>
                    )}

                    {/* Benefits */}
                    <motion.div className="industry-block" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
                        <motion.h3 className="industry-block__title" variants={fadeInRight}>
                            <span className="industry-block__icon" style={iconStyle}><TrendingUp size={20} /></span>Key Benefits
                        </motion.h3>
                        <div className="industry-grid-2">
                            {data.benefits.map((b, i) => (
                                <motion.div key={i} className="industry-glass-card industry-benefit-card" variants={fadeInUp} whileHover={{ x: 4 }}>
                                    <span className="industry-benefit__check" style={{ background: `rgba(${theme.accentRgb}, 0.25)`, color: theme.accentLight }}><Check size={14} /></span>
                                    <span className="card-body">{b}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Why Choose Us */}
                    <motion.div className="industry-why" style={{ background: theme.gradientOverlay }}
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
                        <span className="industry-why__overline">Why Choose Us</span>
                        <h2 className="industry-why__title">Why Businesses Choose <span className="industry-why__gradient">Zeta-V</span></h2>
                        <p className="industry-why__subtitle">Delivering measurable outcomes through technology, orchestration, and value-driven execution.</p>
                        <p className="industry-why__text">{data.whyUs}</p>
                    </motion.div>

                    {/* FAQs */}
                    {data.faqs.length > 0 && (
                        <motion.div className="industry-block" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
                            <motion.h3 className="industry-block__title" variants={fadeInLeft}>
                                <span className="industry-block__icon" style={iconStyle}><HelpCircle size={20} /></span>Frequently Asked Questions
                            </motion.h3>
                            <div className="industry-faqs">
                                {data.faqs.map((faq, i) => {
                                    const open = openFaq === i
                                    return (
                                        <motion.div key={i} className={`industry-glass-card industry-faq ${open ? 'industry-faq--open' : ''}`} variants={fadeInUp}>
                                            <button className="industry-faq__q" onClick={() => setOpenFaq(open ? -1 : i)}>
                                                <span className="card-title" style={{margin:0}}>{faq.q}</span>
                                                <motion.span className="industry-faq__toggle" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                                    {open ? <Minus size={16} /> : <Plus size={16} />}
                                                </motion.span>
                                            </button>
                                            <AnimatePresence initial={false}>
                                                {open && (
                                                    <motion.div className="industry-faq__a" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:0.3}}>
                                                        <div className="industry-faq__a-inner card-body">{faq.a}</div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    )
}