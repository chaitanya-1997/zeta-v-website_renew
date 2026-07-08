// // // // // DigitalFootprint.jsx
// // // // import { useRef, useState } from 'react'
// // // // import { motion, useInView } from 'framer-motion'
// // // // import {
// // // //   HiArrowRight,
// // // //   HiOutlineCheckCircle,
// // // //   HiOutlineClock,
// // // //   HiOutlineChartBar,
// // // //   HiOutlineDocumentText,
// // // //   HiArrowTrendingUp,
// // // //   HiOutlineShieldCheck,
// // // //   HiOutlineGlobeAlt,
// // // //   HiOutlineServer,
// // // //   HiOutlineCpuChip,
// // // //   HiOutlineCheck,
// // // //   HiOutlineUserGroup,
// // // //   HiOutlineComputerDesktop,
// // // //   HiOutlineBuildingOffice,
// // // //   HiOutlineBriefcase,
// // // //   HiOutlineHome,
// // // //   HiOutlineShoppingBag,
// // // //   HiOutlineTruck,
// // // //   HiOutlineWrenchScrewdriver,
// // // //   HiOutlinePhone,
// // // //   HiOutlineShare,
// // // //   HiOutlineMegaphone,
// // // //   HiOutlinePencil,
// // // //   HiOutlineStar,
// // // //   HiOutlineCloud,
// // // //   HiOutlineLockClosed,
// // // // } from 'react-icons/hi2'
// // // // import { HiOutlineLocationMarker } from 'react-icons/hi'
// // // // import { FaChartLine, FaDatabase, FaRocket, FaShieldAlt } from 'react-icons/fa'
// // // // import { Link } from 'react-router-dom'
// // // // import Navbar from '../../Navbar/index'
// // // // import FooterSection from '../../Footer/index'
// // // // import './DigitalFootprint.css'
// // // // import BgImage1 from '../../../assets/pexels/pexels-photo-15.avif'

// // // // // ─── LOCATIONS ───
// // // // const locations = ['Hong Kong', 'India', 'China', 'USA']

// // // // // ─── FEATURE PILLS ───
// // // // const features = [
// // // //   { icon: HiOutlineGlobeAlt, label: 'Web Presence Management' },
// // // //   { icon: HiOutlineLocationMarker, label: 'SEO & Visibility' },
// // // //   { icon: HiOutlineShare, label: 'Social Media Management' },
// // // //   { icon: HiOutlineMegaphone, label: 'Digital Marketing' },
// // // //   { icon: HiOutlinePencil, label: 'Brand Consistency' },
// // // //   { icon: HiOutlineStar, label: 'Online Reputation' },
// // // //   { icon: HiOutlineServer, label: 'IT Infrastructure' },
// // // //   { icon: HiOutlineLockClosed, label: 'Compliance & Privacy' },
// // // // ]

// // // // // ─── STATS ───
// // // // const stats = [
// // // //   { value: '360°', label: 'Full Digital Coverage', icon: HiOutlineGlobeAlt },
// // // //   { value: '24/7', label: 'Monitoring & Support', icon: HiOutlineClock },
// // // //   { value: '98%', label: 'Brand Consistency', icon: HiOutlineCheckCircle },
// // // //   { value: '5x', label: 'Faster Reporting', icon: HiOutlineChartBar },
// // // // ]

// // // // // ─── HIGHLIGHTS ───
// // // // const highlights = [
// // // //   {
// // // //     icon: HiOutlineClock,
// // // //     title: 'Always On',
// // // //     desc: '24/7 monitoring for your website, servers, and online reputation.',
// // // //   },
// // // //   {
// // // //     icon: HiOutlineShieldCheck,
// // // //     title: 'Audit-Ready',
// // // //     desc: 'Compliance documentation and data privacy policies kept current.',
// // // //   },
// // // //   {
// // // //     icon: HiArrowTrendingUp,
// // // //     title: 'Growth-Focused',
// // // //     desc: 'Digital marketing campaigns built to generate leads, not just clicks.',
// // // //   },
// // // // ]

// // // // // ─── CORE SERVICES ───
// // // // const coreServices = [
// // // //   {
// // // //     icon: HiOutlineGlobeAlt,
// // // //     title: 'Web Presence Management',
// // // //     desc: 'Keep your website fast, updated, and always online.',
// // // //     gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
// // // //     color: '#22a7f0',
// // // //     details: [
// // // //       'Website maintenance and content updates',
// // // //       'Hosting management and uptime monitoring',
// // // //       'Performance optimization (speed, mobile, Core Web Vitals)',
// // // //       'CMS updates, plugin management, security patches',
// // // //       'Landing page creation and updates on demand',
// // // //     ],
// // // //   },
// // // //   {
// // // //     icon: HiOutlineLocationMarker,
// // // //     title: 'SEO & Online Visibility',
// // // //     desc: 'Get found by the right people at the right time.',
// // // //     gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
// // // //     color: '#34d399',
// // // //     details: [
// // // //       'On-page and technical SEO audits and fixes',
// // // //       'Google Business Profile setup and optimization',
// // // //       'Local listings management (Google Maps, Bing Places, Apple Maps)',
// // // //       'Keyword tracking and monthly ranking reports',
// // // //       'Competitor visibility benchmarking',
// // // //     ],
// // // //   },
// // // //   {
// // // //     icon: HiOutlineShare,
// // // //     title: 'Social Media Management',
// // // //     desc: 'Stay active, relevant, and consistent across every platform.',
// // // //     gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
// // // //     color: '#f472b6',
// // // //     details: [
// // // //       'LinkedIn, Instagram, Facebook, and X management',
// // // //       'Monthly content calendar planning and scheduling',
// // // //       'Branded graphics and caption writing',
// // // //       'Community management (comments, DMs, engagement)',
// // // //       'Monthly performance analytics and insights',
// // // //     ],
// // // //   },
// // // //   {
// // // //     icon: HiOutlineMegaphone,
// // // //     title: 'Digital Marketing',
// // // //     desc: 'Reach your audience with campaigns that convert.',
// // // //     gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
// // // //     color: '#f59e0b',
// // // //     details: [
// // // //       'Google Ads and Meta Ads setup and management',
// // // //       'Email marketing campaigns and automation',
// // // //       'Lead generation funnels and landing pages',
// // // //       'A/B testing and performance optimization',
// // // //       'Monthly reporting on spend, reach, and ROI',
// // // //     ],
// // // //   },
// // // //   {
// // // //     icon: HiOutlinePencil,
// // // //     title: 'Brand Consistency',
// // // //     desc: 'One voice, one look — everywhere your business appears.',
// // // //     gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
// // // //     color: '#a78bfa',
// // // //     details: [
// // // //       'Brand guidelines documentation and enforcement',
// // // //       'Audit of all digital touchpoints for brand alignment',
// // // //       'Template creation for social, email, and presentations',
// // // //       'Ensuring consistent tone, colors, and messaging across all channels',
// // // //       'Onboarding new channels or markets with brand-ready assets',
// // // //     ],
// // // //   },
// // // //   {
// // // //     icon: HiOutlineStar,
// // // //     title: 'Online Reputation Management',
// // // //     desc: 'Control the narrative around your business.',
// // // //     gradient: 'linear-gradient(135deg, #f472b6, #f59e0b)',
// // // //     color: '#f472b6',
// // // //     details: [
// // // //       'Google and industry review monitoring',
// // // //       'Review response strategy and execution',
// // // //       'PR mentions tracking across web and news',
// // // //       'Negative content suppression strategy',
// // // //       'Monthly reputation health reports',
// // // //     ],
// // // //   },
// // // //   {
// // // //     icon: HiOutlineServer,
// // // //     title: 'IT Infrastructure Footprint',
// // // //     desc: 'The digital backbone that keeps everything running.',
// // // //     gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
// // // //     color: '#22a7f0',
// // // //     details: [
// // // //       'Cloud setup, configuration, and management (AWS / Azure / GCP)',
// // // //       'Domain and DNS management',
// // // //       'Server monitoring, uptime alerts, and incident response',
// // // //       'Email infrastructure setup (Microsoft 365 / Google Workspace)',
// // // //       'Backup, disaster recovery, and system health checks',
// // // //     ],
// // // //   },
// // // //   {
// // // //     icon: HiOutlineLockClosed,
// // // //     title: 'Compliance & Data Privacy',
// // // //     desc: 'Stay legal, stay trusted.',
// // // //     gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
// // // //     color: '#34d399',
// // // //     details: [
// // // //       'GDPR and data privacy policy documentation',
// // // //       'Cookie consent setup and banner management',
// // // //       'Website accessibility compliance (WCAG basics)',
// // // //       'Data handling audit and gap assessment',
// // // //       'Ongoing compliance monitoring as regulations evolve',
// // // //     ],
// // // //   },
// // // // ]

// // // // // ─── WHAT WE HANDLE ───
// // // // const whatWeHandle = [
// // // //   'Website content updates and maintenance',
// // // //   'Hosting and uptime monitoring',
// // // //   'Google Business Profile management',
// // // //   'Local directory listings and citations',
// // // //   'SEO keyword tracking and optimization',
// // // //   'Social media content creation and scheduling',
// // // //   'Paid ad campaign management (Google & Meta)',
// // // //   'Email campaign creation and automation',
// // // //   'Brand asset management and consistency audits',
// // // //   'Review monitoring and response management',
// // // //   'Cloud infrastructure monitoring',
// // // //   'Domain and DNS management',
// // // //   'Server backups and disaster recovery',
// // // //   'GDPR compliance and cookie management',
// // // //   'Monthly digital performance reporting',
// // // // ]

// // // // // ─── WHY CHOOSE US ───
// // // // const whyChooseUs = [
// // // //   'One team managing your entire digital presence',
// // // //   'Consistent brand voice across every touchpoint',
// // // //   'Proactive monitoring before problems become crises',
// // // //   'Lower cost than hiring multiple in-house specialists',
// // // //   'Fixed monthly engagement with no hidden fees',
// // // //   'Clear monthly reports on every service area',
// // // //   'Rapid response to website issues and IT incidents',
// // // //   'Scalable support as your business grows into new markets',
// // // // ]

// // // // // ─── INDUSTRY SOLUTIONS ───
// // // // const industrySolutions = [
// // // //   { icon: HiOutlineBuildingOffice, industry: 'Manufacturing', desc: 'B2B digital presence, supplier visibility, and LinkedIn authority building' },
// // // //   { icon: HiOutlineBriefcase, industry: 'Professional Services', desc: 'Thought leadership content, SEO, and lead generation campaigns' },
// // // //   { icon: HiOutlineHome, industry: 'Hotels & Hospitality', desc: 'Google listing optimization, review management, and direct booking campaigns' },
// // // //   { icon: HiOutlineBuildingOffice, industry: 'Food & Beverage', desc: 'Instagram and Facebook management, local SEO, and delivery platform presence' },
// // // //   { icon: HiOutlineShoppingBag, industry: 'E-Commerce', desc: 'Product SEO, Google Shopping ads, and email marketing automation' },
// // // //   { icon: HiOutlineShoppingBag, industry: 'Retail', desc: 'Local visibility, social commerce, and seasonal campaign management' },
// // // //   { icon: HiOutlineTruck, industry: 'Real Estate', desc: 'Property listing visibility, Google Ads, and reputation management' },
// // // //   { icon: HiOutlineWrenchScrewdriver, industry: 'IT & Tech Companies', desc: 'LinkedIn strategy, content marketing, and cloud infrastructure management' },
// // // // ]

// // // // // ─── REPORTS ───
// // // // const reports = [
// // // //   'Website Traffic & Performance Report',
// // // //   'SEO Rankings & Keyword Movement Report',
// // // //   'Google Business Profile Insights',
// // // //   'Social Media Reach & Engagement Report',
// // // //   'Paid Ads Spend, Clicks & Conversion Report',
// // // //   'Email Campaign Open Rate & CTR Report',
// // // //   'Online Reputation & Review Summary',
// // // //   'IT Infrastructure Health & Uptime Report',
// // // //   'Brand Consistency Audit Summary',
// // // //   'Compliance Status Update',
// // // // ]

// // // // // ─── TOOLS & PLATFORMS ───
// // // // const toolsPlatforms = [
// // // //   'Google Workspace & Microsoft 365',
// // // //   'Google Ads & Meta Ads Manager',
// // // //   'Google Search Console & Google Analytics',
// // // //   'SEMrush / Ahrefs',
// // // //   'Hootsuite / Buffer / Later',
// // // //   'Mailchimp / HubSpot / ActiveCampaign',
// // // //   'WordPress / Webflow / Shopify',
// // // //   'AWS / Microsoft Azure / Google Cloud',
// // // //   'Cloudflare (DNS & Security)',
// // // //   'GDPR compliance tools',
// // // // ]

// // // // // ─── GET STARTED STEPS ───
// // // // const getStartedSteps = [
// // // //   { step: 1, title: 'Free Digital Audit', desc: 'We assess your current web presence, social profiles, SEO health, and IT setup to identify gaps and opportunities.' },
// // // //   { step: 2, title: 'Strategy & Scope', desc: 'We recommend a tailored package covering the services your business actually needs — nothing more, nothing less.' },
// // // //   { step: 3, title: 'Onboarding & Access', desc: 'We securely collect access to your platforms, tools, and accounts and set up our management workspace.' },
// // // //   { step: 4, title: 'Month 1 — Foundation', desc: 'We fix what\'s broken, align your brand across channels, and launch quick-win campaigns.' },
// // // //   { step: 5, title: 'Ongoing Management', desc: 'Monthly content, campaigns, monitoring, reporting, and continuous optimization — all handled.' },
// // // // ]

// // // // // ─── PRICING PLANS DATA (with per‑plan add‑on definitions) ───
// // // // const pricingPlans = [
// // // //   {
// // // //     id: 'lite',
// // // //     name: 'Lite',
// // // //     price: 499,
// // // //     displayPrice: '$499',
// // // //     features: ['3 pages', 'Hosting'],
// // // //     addOns: [
// // // //       { id: 'pages', label: 'Extra Pages', price: 200 },
// // // //     ],
// // // //     highlight: false,
// // // //     gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
// // // //     color: '#22a7f0',
// // // //   },
// // // //   {
// // // //     id: 'standard',
// // // //     name: 'Standard',
// // // //     price: 999,
// // // //     displayPrice: '$999',
// // // //     features: ['5 pages', 'Hosting', 'Domain', '5+ email ids'],
// // // //     addOns: [
// // // //       { id: 'pages', label: 'Extra Pages', price: 200 },
// // // //       { id: 'emails', label: 'Extra Email IDs', price: 10 },
// // // //     ],
// // // //     highlight: false,
// // // //     gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
// // // //     color: '#34d399',
// // // //   },
// // // //   {
// // // //     id: 'business',
// // // //     name: 'Business',
// // // //     price: 1999,
// // // //     displayPrice: '$1999',
// // // //     features: ['10 pages', 'Hosting', 'Domain', '5+ email ids', 'SSL', 'SEO (5 words)'],
// // // //     addOns: [
// // // //       { id: 'pages', label: 'Extra Pages', price: 200 },
// // // //       { id: 'emails', label: 'Extra Email IDs', price: 10 },
// // // //       { id: 'seo', label: 'Extra SEO Keywords', price: 0.5 }, // example
// // // //     ],
// // // //     highlight: true,
// // // //     gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
// // // //     color: '#f472b6',
// // // //   },
// // // //   {
// // // //     id: 'professional',
// // // //     name: 'Professional',
// // // //     price: 2999,
// // // //     displayPrice: '$2999+',
// // // //     features: ['10 pages', 'Hosting', 'Domain', '5+ email ids', 'SSL', 'SEO', 'Integration', 'Social Media'],
// // // //     addOns: [
// // // //       { id: 'pages', label: 'Extra Pages', price: 200 },
// // // //       { id: 'emails', label: 'Extra Email IDs', price: 10 },
// // // //       { id: 'seo', label: 'Extra SEO Keywords', price: 0.5 },
// // // //     ],
// // // //     highlight: false,
// // // //     gradient: 'linear-gradient(135deg, #f97316, #fb923c)',
// // // //     color: '#f97316',
// // // //   },
// // // // ]

// // // // // // ─── CTA Banners ───
// // // // // const DPriceCtaBannerLight = () => (
// // // // //   <motion.div
// // // // //     className="bk-price-cta-light"
// // // // //     initial={{ opacity: 0, y: 20 }}
// // // // //     whileInView={{ opacity: 1, y: 0 }}
// // // // //     viewport={{ once: true }}
// // // // //     transition={{ duration: 0.7 }}
// // // // //   >
// // // // //     <div className="cta-content">
// // // // //       <span className="cta-text">Check out your price and find the perfect plan for your business.</span>
// // // // //     </div>
// // // // //     <Link to="/digitalcalculator" state={{ scrollTo: 'digitalcalculator-top' }} className="cta-btn cta-btn-solid">
// // // // //       <span>Calculate Your Price</span>
// // // // //       <HiArrowRight />
// // // // //     </Link>
// // // // //   </motion.div>
// // // // // )

// // // // // const DPriceCtaBannerDark = () => (
// // // // //   <motion.div
// // // // //     className="bk-price-cta-dark"
// // // // //     initial={{ opacity: 0, y: 20 }}
// // // // //     whileInView={{ opacity: 1, y: 0 }}
// // // // //     viewport={{ once: true }}
// // // // //     transition={{ duration: 0.7 }}
// // // // //   >
// // // // //     <div className="cta-content">
// // // // //       <span className="cta-text">Ready for accurate, stress-free pricing? Let's talk.</span>
// // // // //     </div>
// // // // //     <Link to="/digitalcalculator" state={{ scrollTo: 'digitalcalculator-top' }} className="cta-btn cta-btn-outline">
// // // // //       <span>Estimate My Price</span>
// // // // //       <HiArrowRight />
// // // // //     </Link>
// // // // //   </motion.div>
// // // // // )

// // // // export default function DigitalFootprint() {
// // // //   const heroRef = useRef(null)
// // // //   const pricingRef = useRef(null)
// // // //   const servicesRef = useRef(null)
// // // //   const whyRef = useRef(null)
// // // //   const industryRef = useRef(null)
// // // //   const startRef = useRef(null)

// // // //   // ─── Modal State ───
// // // //   const [modalOpen, setModalOpen] = useState(false)
// // // //   const [selectedPlanId, setSelectedPlanId] = useState(null)
// // // //   const [modalStep, setModalStep] = useState('form') // 'form' | 'submitted'
// // // //   const [userName, setUserName] = useState('')
// // // //   const [userEmail, setUserEmail] = useState('')
// // // //   const [userPhone, setUserPhone] = useState('')
// // // //   // Quantities for add‑ons: { [addonId]: number }
// // // //   const [addonQuantities, setAddonQuantities] = useState({})

// // // //   // ─── Modal Functions ───
// // // //   const openQuoteModal = (planId) => {
// // // //     setSelectedPlanId(planId)
// // // //     setModalStep('form')
// // // //     setUserName('')
// // // //     setUserEmail('')
// // // //     setUserPhone('')
// // // //     // Reset add‑on quantities to 0 for this plan
// // // //     const plan = pricingPlans.find(p => p.id === planId)
// // // //     if (plan) {
// // // //       const initial = {}
// // // //       plan.addOns.forEach(a => { initial[a.id] = 0 })
// // // //       setAddonQuantities(initial)
// // // //     }
// // // //     setModalOpen(true)
// // // //   }

// // // //   const closeModal = () => {
// // // //     setModalOpen(false)
// // // //     setSelectedPlanId(null)
// // // //   }

// // // //   const handleSubmitForm = (e) => {
// // // //     e.preventDefault()
// // // //     // Move to the "submitted" screen, where add‑ons and total appear
// // // //     setModalStep('submitted')
// // // //     // Optionally send data to backend here
// // // //     console.log({
// // // //       plan: selectedPlanId,
// // // //       name: userName,
// // // //       email: userEmail,
// // // //       phone: userPhone,
// // // //     })
// // // //   }

// // // //   const updateAddonQty = (addonId, delta) => {
// // // //     setAddonQuantities(prev => ({
// // // //       ...prev,
// // // //       [addonId]: Math.max(0, (prev[addonId] || 0) + delta),
// // // //     }))
// // // //   }

// // // //   const getPlanTotal = (planId, quantities) => {
// // // //     const plan = pricingPlans.find(p => p.id === planId)
// // // //     if (!plan) return 0
// // // //     let total = plan.price
// // // //     plan.addOns.forEach(a => {
// // // //       const qty = quantities[a.id] || 0
// // // //       total += qty * a.price
// // // //     })
// // // //     return total
// // // //   }

// // // //   // ─── InView hooks ───
// // // //   const heroInView = useInView(heroRef, { once: true, margin: '-100px' })
// // // //   const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' })
// // // //   const whyInView = useInView(whyRef, { once: true, margin: '-100px' })
// // // //   const industryInView = useInView(industryRef, { once: true, margin: '-100px' })
// // // //   const startInView = useInView(startRef, { once: true, margin: '-100px' })

// // // //   const containerVariants = {
// // // //     hidden: { opacity: 0 },
// // // //     visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
// // // //   }
// // // //   const itemVariants = {
// // // //     hidden: { opacity: 0, y: 30 },
// // // //     visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
// // // //   }

// // // //   const scrollToPricing = () => {
// // // //     if (pricingRef.current) {
// // // //       pricingRef.current.scrollIntoView({ behavior: 'smooth' })
// // // //     }
// // // //   }

// // // //   // ─── Render ───
// // // //   return (
// // // //     <>
// // // //       <Navbar />
// // // //       <main>
// // // //         {/* ════════════════════════════════════════════ */}
// // // //         {/* HERO - Dark */}
// // // //         {/* ════════════════════════════════════════════ */}
// // // //         <section className="df-hero" ref={heroRef}>
// // // //           <div className="df-hero-bg">
// // // //             <div className="df-hero-bg-img" style={{ backgroundImage: `url(${BgImage1})` }} />
// // // //             <div className="df-hero-overlay" />
// // // //           </div>
// // // //           <div className="df-hero-orbs">
// // // //             <div className="df-orb df-orb-1" />
// // // //             <div className="df-orb df-orb-2" />
// // // //             <div className="df-orb df-orb-3" />
// // // //           </div>
// // // //           <div className="df-hero-container">
// // // //             <motion.div
// // // //               className="df-hero-grid"
// // // //               variants={containerVariants}
// // // //               initial="hidden"
// // // //               animate={heroInView ? 'visible' : 'hidden'}
// // // //             >
// // // //               <motion.div className="df-hero-left" variants={itemVariants}>
// // // //                 <div className="df-hero-badge">
// // // //                   <HiOutlineCheckCircle className="df-badge-icon" />
// // // //                   <span>Shared Services</span>
// // // //                   <span className="df-badge-pulse" />
// // // //                 </div>
// // // //                 <h1 className="df-hero-title">
// // // //                   Your Business Deserves a Digital Presence That Works As Hard As You Do
// // // //                 </h1>
// // // //                 <p className="df-hero-desc">
// // // //                   From your website to your search rankings, social channels to cloud infrastructure we manage every layer of your digital footprint so you show up, stand out, and stay secure.
// // // //                 </p>
// // // //                 <div className="df-locations">
// // // //                   <HiOutlineGlobeAlt className="df-locations-icon" />
// // // //                   {locations.map((loc, i) => (
// // // //                     <span key={i} className="df-location-item">
// // // //                       {i > 0 && <span className="df-location-sep">|</span>}
// // // //                       {loc}
// // // //                     </span>
// // // //                   ))}
// // // //                 </div>
// // // //                 <div className="df-hero-ctas">
// // // //                   <button className="df-btn-primary" onClick={scrollToPricing}>
// // // //                     <span>Get Started Today</span>
// // // //                     <HiArrowRight />
// // // //                   </button>
// // // //                 </div>
// // // //                 <div className="df-hero-pills">
// // // //                   {features.map((f, i) => {
// // // //                     const Icon = f.icon
// // // //                     return (
// // // //                       <div key={i} className="df-pill">
// // // //                         <Icon />
// // // //                         <span>{f.label}</span>
// // // //                       </div>
// // // //                     )
// // // //                   })}
// // // //                 </div>
// // // //               </motion.div>

// // // //               <motion.div className="df-hero-right" variants={itemVariants}>
// // // //                 <div className="df-price-card">
// // // //                   <div className="df-price-card-glow" />
// // // //                   <p className="df-price-tagline">
// // // //                     Complete digital presence management for your business
// // // //                   </p>
// // // //                   <button className="df-btn-primary df-price-cta" onClick={scrollToPricing}>
// // // //                     <span>Start Now</span>
// // // //                     <HiArrowRight />
// // // //                   </button>
// // // //                 </div>
// // // //                 <div className="df-stats-grid">
// // // //                   {stats.map((s, i) => {
// // // //                     const Icon = s.icon
// // // //                     return (
// // // //                       <motion.div
// // // //                         key={i}
// // // //                         className="df-stat-card"
// // // //                         initial={{ opacity: 0, y: 20, scale: 0.9 }}
// // // //                         animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
// // // //                         transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
// // // //                         whileHover={{ y: -4, scale: 1.02 }}
// // // //                       >
// // // //                         <div className="df-stat-icon"><Icon /></div>
// // // //                         <div className="df-stat-info">
// // // //                           <span className="df-stat-value">{s.value}</span>
// // // //                           <span className="df-stat-label">{s.label}</span>
// // // //                         </div>
// // // //                       </motion.div>
// // // //                     )
// // // //                   })}
// // // //                 </div>
// // // //               </motion.div>
// // // //             </motion.div>
// // // //           </div>
// // // //           <div className="df-hero-bottom" />
// // // //         </section>

// // // //         {/* ════════════════════════════════════════════ */}
// // // //         {/* PRICING SECTION - White */}
// // // //         {/* ════════════════════════════════════════════ */}
// // // //         <section className="df-pricing-section" ref={pricingRef}>
// // // //           <div className="df-section-container">
// // // //             <div className="df-section-header">
// // // //               <div className="df-section-label">
// // // //                 <span className="df-label-line" />
// // // //                 <span className="df-label-text">Pricing Plans</span>
// // // //                 <span className="df-label-line" />
// // // //               </div>
// // // //               <h2 className="df-section-title">Choose the plan that fits your business</h2>
// // // //               <p className="df-section-subtitle">
// // // //                 All plans include core digital presence management. Add extra pages or email addresses as you grow.
// // // //               </p>
// // // //             </div>

// // // //             <div className="df-pricing-grid">
// // // //               {pricingPlans.map((plan) => (
// // // //                 <motion.div
// // // //                   key={plan.id}
// // // //                   className={`df-pricing-card ${plan.highlight ? 'df-pricing-card-highlight' : ''}`}
// // // //                   style={{
// // // //                     borderTop: `4px solid ${plan.color}`,
// // // //                     background: `linear-gradient(180deg, ${plan.color}08, #f8faff)`,
// // // //                   }}
// // // //                   initial={{ opacity: 0, y: 30 }}
// // // //                   whileInView={{ opacity: 1, y: 0 }}
// // // //                   viewport={{ once: true }}
// // // //                   transition={{ duration: 0.5 }}
// // // //                 >
// // // //                   {plan.highlight && <div className="df-pricing-badge">Most Popular</div>}
// // // //                   <h3 className="df-pricing-name">{plan.name}</h3>
// // // //                   <ul className="df-pricing-features">
// // // //                     {plan.features.map((feat, idx) => (
// // // //                       <li key={idx}>
// // // //                         <HiOutlineCheck className="df-pricing-check" /> {feat}
// // // //                       </li>
// // // //                     ))}
// // // //                   </ul>

// // // //                 <div className="df-pricing-actions">
// // // //   <button
// // // //     className="df-pricing-btn df-pricing-btn-quote"
// // // //     onClick={() => openQuoteModal(plan.id)}
// // // //   >
// // // //     Get Customized Quote
// // // //   </button>
// // // // </div>
// // // //                 </motion.div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* ─── QUOTE MODAL ─── */}
// // // //         {modalOpen && selectedPlanId && (
// // // //           <div className="df-modal-overlay" onClick={closeModal}>
// // // //             <div className="df-modal" onClick={(e) => e.stopPropagation()}>
// // // //               <button className="df-modal-close" onClick={closeModal}>×</button>
// // // //               {(() => {
// // // //                 const plan = pricingPlans.find(p => p.id === selectedPlanId)
// // // //                 const total = getPlanTotal(selectedPlanId, addonQuantities)
// // // //                 const hasAddons = plan.addOns && plan.addOns.length > 0

// // // //                 if (modalStep === 'form') {
// // // //                   return (
// // // //                     <>
// // // //                       <h2 className="df-modal-title">{plan.name} Plan</h2>
// // // //                       <p className="df-modal-sub">Enter your details and we'll show you your custom price.</p>

// // // //                       <form onSubmit={handleSubmitForm} className="df-modal-form">
// // // //                         <input
// // // //                           type="text"
// // // //                           placeholder="Your Name"
// // // //                           value={userName}
// // // //                           onChange={(e) => setUserName(e.target.value)}
// // // //                           required
// // // //                         />
// // // //                         <input
// // // //                           type="email"
// // // //                           placeholder="Email Address"
// // // //                           value={userEmail}
// // // //                           onChange={(e) => setUserEmail(e.target.value)}
// // // //                           required
// // // //                         />
// // // //                         <input
// // // //                           type="tel"
// // // //                           placeholder="Phone Number"
// // // //                           value={userPhone}
// // // //                           onChange={(e) => setUserPhone(e.target.value)}
// // // //                           required
// // // //                         />
// // // //                         <button type="submit" className="df-modal-submit">
// // // //                           Submit & See Price
// // // //                         </button>
// // // //                       </form>
// // // //                     </>
// // // //                   )
// // // //                 } else {
// // // //                   // submitted state – show price, add‑ons, and breakdown
// // // //                   return (
// // // //                     <>

// // // //                       <h2 className="df-modal-title">Your Custom Quote</h2>
// // // //                       <p className="df-modal-sub">
// // // //                         Hello <strong>{userName}</strong>, here is your estimated monthly price.
// // // //                       </p>

// // // //                       <div className="df-modal-price-box">
// // // //                         <span className="df-modal-price-label">Estimated Monthly Total</span>
// // // //                         <div className="df-modal-price-amount">
// // // //                           ${total.toFixed(2)}
// // // //                           <span className="df-modal-price-period">/ month</span>
// // // //                         </div>
// // // //                         <div className="df-modal-price-breakdown">
// // // //                           <span>Base: {plan.displayPrice}</span>
// // // //                           {plan.addOns.map(a => {
// // // //                             const qty = addonQuantities[a.id] || 0
// // // //                             if (qty === 0) return null
// // // //                             const cost = qty * a.price
// // // //                             return <span key={a.id}>+ ${cost} ({qty} × {a.label})</span>
// // // //                           })}
// // // //                         </div>
// // // //                       </div>

// // // //                       {hasAddons && (
// // // //                         <div className="df-modal-addons">
// // // //                           <p className="df-modal-addons-label">Customise your plan:</p>
// // // //                           {plan.addOns.map(a => (
// // // //                             <div key={a.id} className="df-modal-addon-row">
// // // //                               <label>{a.label} (${a.price} each)</label>
// // // //                               <div className="df-modal-counter">
// // // //                                 <button onClick={() => updateAddonQty(a.id, -1)}>−</button>
// // // //                                 <span>{addonQuantities[a.id] || 0}</span>
// // // //                                 <button onClick={() => updateAddonQty(a.id, 1)}>+</button>
// // // //                               </div>
// // // //                             </div>
// // // //                           ))}
// // // //                         </div>
// // // //                       )}

// // // //                       <div className="df-modal-contact-info">
// // // //                         <p><strong>Email:</strong> {userEmail}</p>
// // // //                         <p><strong>Phone:</strong> {userPhone}</p>
// // // //                       </div>

// // // //                       <button className="df-modal-submit df-modal-close-btn" onClick={closeModal}>
// // // //                         Close
// // // //                       </button>
// // // //                     </>
// // // //                   )
// // // //                 }
// // // //               })()}
// // // //             </div>
// // // //           </div>
// // // //         )}

// // // //         {/* ════════════════════════════════════════════ */}
// // // //         {/* WHAT IS DIGITAL FOOTPRINT MANAGEMENT - White */}
// // // //         {/* ════════════════════════════════════════════ */}
// // // //         <section className="df-about-section">
// // // //           <div className="df-section-container">
// // // //             <div className="df-about-grid">
// // // //               <div className="df-about-left">
// // // //                 <div className="df-section-label">
// // // //                   <span className="df-label-line" />
// // // //                   <span className="df-label-text">About</span>
// // // //                   <span className="df-label-line" />
// // // //                 </div>
// // // //                 <h2 className="df-section-title">
// // // //                   What Is Digital Footprint Management?
// // // //                 </h2>
// // // //                 <p className="df-about-text">
// // // //                   Your digital footprint is everything your business looks like online your website, your search presence, your social media profiles, your cloud infrastructure, and the data trail you leave across the internet.
// // // //                 </p>
// // // //                 <p className="df-about-text">
// // // //                   Most businesses manage these in silos: one agency for SEO, another for social, a freelancer for the website, and an IT vendor for the servers. The result is inconsistency, gaps in security, and a brand that feels different everywhere people find it.
// // // //                 </p>
// // // //                 <p className="df-about-text">
// // // //                   At Zeta-V, we bring all of it under one roof. Our Digital Footprint service covers your entire online presence  from how you look on Google to how your servers are configured  managed by one team, on one fixed monthly engagement.
// // // //                 </p>
// // // //               </div>
// // // //               <div className="df-about-right">
// // // //                 <div className="df-about-card">
// // // //                   <div className="df-about-card-icon">
// // // //                     <HiOutlineShieldCheck />
// // // //                   </div>
// // // //                   <h3>Why Choose Zeta-V?</h3>
// // // //                   <ul className="df-about-list">
// // // //                     <li><HiOutlineCheck /> Industry-specific digital strategy</li>
// // // //                     <li><HiOutlineCheck /> Single point of contact for all digital services</li>
// // // //                     <li><HiOutlineCheck /> Consistent brand voice across every channel</li>
// // // //                     <li><HiOutlineCheck /> Proactive monitoring, not reactive fixes</li>
// // // //                     <li><HiOutlineCheck /> Transparent monthly reporting</li>
// // // //                   </ul>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* ════════════════════════════════════════════ */}
// // // //         {/* CORE SERVICES - Dark */}
// // // //         {/* ════════════════════════════════════════════ */}
// // // //         <section className="df-services-section" ref={servicesRef}>
// // // //           <div className="df-section-container">
// // // //             <div className="df-services-wrapper">
// // // //               <div className="df-services-left">
// // // //                 <div className="df-section-header-left">
// // // //                   <div className="df-section-label">
// // // //                     <span className="df-label-line" />
// // // //                     <span className="df-label-text">What We Offer</span>
// // // //                     <span className="df-label-line" /> <span className="df-label-line" />
// // // //                   </div>
// // // //                   <h2 className="df-section-title">
// // // //                     Everything We Manage Inside Your Digital World
// // // //                   </h2>
// // // //                   <p className="df-section-subtitle">
// // // //                     End-to-end digital presence management tailored to your business size and industry.
// // // //                   </p>
// // // //                 </div>
// // // //                 <div className="df-services-grid">
// // // //                   {coreServices.map((s, i) => {
// // // //                     const Icon = s.icon
// // // //                     return (
// // // //                       <motion.div
// // // //                         key={i}
// // // //                         className="df-service-card"
// // // //                         style={{ '--df-card-color': s.color }}
// // // //                         initial={{ opacity: 0, y: 20 }}
// // // //                         whileInView={{ opacity: 1, y: 0 }}
// // // //                         viewport={{ once: true }}
// // // //                         transition={{ delay: i * 0.04, duration: 0.5 }}
// // // //                         whileHover={{ y: -6 }}
// // // //                       >
// // // //                         <div className="df-service-card-icon" style={{ background: s.gradient }}>
// // // //                           <Icon />
// // // //                         </div>
// // // //                         <h3 className="df-service-card-title">{s.title}</h3>
// // // //                         <p className="df-service-card-desc">{s.desc}</p>
// // // //                         <div className="df-service-card-details">
// // // //                           {s.details.slice(0, 3).map((detail, idx) => (
// // // //                             <div key={idx} className="df-service-detail">
// // // //                               <HiOutlineCheck className="df-service-detail-check" />
// // // //                               <span className="df-service-card-details-p">{detail}</span>
// // // //                             </div>
// // // //                           ))}
// // // //                           {s.details.length > 3 && (
// // // //                             <div className="df-service-detail-more">
// // // //                               +{s.details.length - 3} more
// // // //                             </div>
// // // //                           )}
// // // //                         </div>
// // // //                       </motion.div>
// // // //                     )
// // // //                   })}
// // // //                 </div>
// // // //               </div>

// // // //               <div className="df-services-right-side">
// // // //                 <div className="df-services-right-inner">
// // // //                   <div className="df-right-icon">
// // // //                     <HiArrowTrendingUp />
// // // //                   </div>
// // // //                   <h2 className="df-right-headline">
// // // //                     Visible Online.<br />
// // // //                     <span>Secure Behind the Scenes.</span>
// // // //                   </h2>
// // // //                   <p className="df-right-sub">
// // // //                     We manage what people see and what powers it — so your brand performs at every layer.
// // // //                   </p>
// // // //                   <div className="df-right-highlights">
// // // //                     {highlights.map((h, i) => {
// // // //                       const Icon = h.icon
// // // //                       return (
// // // //                         <div key={i} className="df-right-highlight-item">
// // // //                           <div className="df-right-highlight-icon">
// // // //                             <Icon />
// // // //                           </div>
// // // //                           <div>
// // // //                             <h4>{h.title}</h4>
// // // //                             <p>{h.desc}</p>
// // // //                           </div>
// // // //                         </div>
// // // //                       )
// // // //                     })}
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //           {/* <DPriceCtaBannerDark /> */}
// // // //         </section>

// // // //         {/* ════════════════════════════════════════════ */}
// // // //         {/* EVERYTHING WE HANDLE - White */}
// // // //         {/* ════════════════════════════════════════════ */}
// // // //         <section className="df-handle-section">
// // // //           <div className="df-section-container">
// // // //             <div className="df-handle-grid">
// // // //               <div className="df-handle-left">
// // // //                 <div className="df-section-label">
// // // //                   <span className="df-label-line" />
// // // //                   <span className="df-label-text">Everything We Handle</span>
// // // //                   <span className="df-label-line" />
// // // //                 </div>
// // // //                 <h2 className="df-section-title">
// // // //                   We Take Care of Every Digital Detail
// // // //                 </h2>
// // // //                 <p className="df-section-subtitle">
// // // //                   From daily social posts to monthly server health checks we manage it all.
// // // //                 </p>
// // // //               </div>
// // // //               <div className="df-handle-right">
// // // //                 <div className="df-handle-list">
// // // //                   {whatWeHandle.map((item, i) => (
// // // //                     <motion.div
// // // //                       key={i}
// // // //                       className="df-handle-item"
// // // //                       initial={{ opacity: 0, x: 20 }}
// // // //                       whileInView={{ opacity: 1, x: 0 }}
// // // //                       viewport={{ once: true }}
// // // //                       transition={{ delay: i * 0.03, duration: 0.4 }}
// // // //                     >
// // // //                       <HiOutlineCheck className="df-handle-check" />
// // // //                       <span>{item}</span>
// // // //                     </motion.div>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* ════════════════════════════════════════════ */}
// // // //         {/* WHY CHOOSE US - Dark */}
// // // //         {/* ════════════════════════════════════════════ */}
// // // //         <section className="df-why-choose" ref={whyRef}>
// // // //           <div className="df-section-container">
// // // //             <motion.div
// // // //               className="df-why-grid"
// // // //               initial={{ opacity: 0 }}
// // // //               animate={whyInView ? { opacity: 1 } : {}}
// // // //               transition={{ duration: 0.5 }}
// // // //             >
// // // //               <div className="df-why-left">
// // // //                 <div className="df-section-label">
// // // //                   <span className="df-label-line" />
// // // //                   <span className="df-label-text">Why Choose Us</span>
// // // //                   <span className="df-label-line" />
// // // //                 </div>
// // // //                 <h2 className="df-section-title">
// // // //                   More Than Digital Management —<br />
// // // //                   <span>We Become Your Entire Digital Team</span>
// // // //                 </h2>
// // // //                 <p className="df-section-subtitle">
// // // //                   Building separate in-house teams for web, social, SEO, IT, and compliance is expensive and hard to coordinate. We bring it all together under one accountable partner.
// // // //                 </p>
// // // //               </div>
// // // //               <div className="df-why-right">
// // // //                 {whyChooseUs.map((item, i) => (
// // // //                   <motion.div
// // // //                     key={i}
// // // //                     className="df-why-item"
// // // //                     initial={{ opacity: 0, x: 20 }}
// // // //                     animate={whyInView ? { opacity: 1, x: 0 } : {}}
// // // //                     transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
// // // //                   >
// // // //                     <HiOutlineCheck className="df-why-check" />
// // // //                     <span>{item}</span>
// // // //                   </motion.div>
// // // //                 ))}
// // // //               </div>
// // // //             </motion.div>
// // // //           </div>
// // // //         </section>

// // // //         {/* ════════════════════════════════════════════ */}
// // // //         {/* INDUSTRY SOLUTIONS - White */}
// // // //         {/* ════════════════════════════════════════════ */}
// // // //         <section className="df-industry-section" ref={industryRef}>
// // // //           <div className="df-section-container">
// // // //             <div className="df-section-header">
// // // //               <div className="df-section-label">
// // // //                 <span className="df-label-line" />
// // // //                 <span className="df-label-text">Industry Solutions</span>
// // // //                 <span className="df-label-line" />
// // // //               </div>
// // // //               <h2 className="df-section-title">
// // // //                 Tailored Digital Strategies By Industry
// // // //               </h2>
// // // //             </div>
// // // //             <div className="df-industry-grid">
// // // //               {industrySolutions.map((item, i) => {
// // // //                 const Icon = item.icon
// // // //                 return (
// // // //                   <motion.div
// // // //                     key={i}
// // // //                     className="df-industry-card"
// // // //                     initial={{ opacity: 0, y: 20 }}
// // // //                     whileInView={{ opacity: 1, y: 0 }}
// // // //                     viewport={{ once: true }}
// // // //                     transition={{ delay: i * 0.04, duration: 0.4 }}
// // // //                     whileHover={{ y: -4 }}
// // // //                   >
// // // //                     <div className="df-industry-card-icon">
// // // //                       <Icon />
// // // //                     </div>
// // // //                     <h3 className="df-industry-card-title">{item.industry}</h3>
// // // //                     <p className="df-industry-card-desc">{item.desc}</p>
// // // //                   </motion.div>
// // // //                 )
// // // //               })}
// // // //             </div>
// // // //           </div>
// // // //           {/* <DPriceCtaBannerLight /> */}
// // // //         </section>

// // // //         {/* ════════════════════════════════════════════ */}
// // // //         {/* REPORTS - Dark */}
// // // //         {/* ════════════════════════════════════════════ */}
// // // //         <section className="df-reports-section">
// // // //           <div className="df-section-container">
// // // //             <div className="df-section-label">
// // // //               <span className="df-label-line" />
// // // //               <span className="df-label-text">Reports You Receive</span>
// // // //               <span className="df-label-line" />
// // // //             </div>
// // // //             <h2 className="df-section-title">
// // // //               Monthly Reports That Tell You Exactly Where You Stand
// // // //             </h2>
// // // //             <p className="df-section-subtitle">
// // // //               Every month, you receive clear reports across all service areas  no fluff, just the numbers that matter.
// // // //             </p>
// // // //             <div className="df-reports-grid">
// // // //               {reports.map((report, i) => (
// // // //                 <motion.div
// // // //                   key={i}
// // // //                   className="df-report-item"
// // // //                   initial={{ opacity: 0, y: 20 }}
// // // //                   whileInView={{ opacity: 1, y: 0 }}
// // // //                   viewport={{ once: true }}
// // // //                   transition={{ delay: i * 0.04, duration: 0.4 }}
// // // //                 >
// // // //                   <HiOutlineDocumentText className="df-report-icon" />
// // // //                   <span>{report}</span>
// // // //                 </motion.div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* ════════════════════════════════════════════ */}
// // // //         {/* TOOLS & PLATFORMS - White */}
// // // //         {/* ════════════════════════════════════════════ */}
// // // //         <section className="df-tools-section">
// // // //           <div className="df-section-container">
// // // //             <div className="df-section-label">
// // // //               <span className="df-label-line" />
// // // //               <span className="df-label-text">Tools & Platforms</span>
// // // //               <span className="df-label-line" />
// // // //             </div>
// // // //             <h2 className="df-section-title">
// // // //               Platforms & Tools We Work With
// // // //             </h2>
// // // //             <div className="df-tools-grid">
// // // //               {toolsPlatforms.map((tool, i) => (
// // // //                 <motion.div
// // // //                   key={i}
// // // //                   className="df-tool-item"
// // // //                   initial={{ opacity: 0, scale: 0.9 }}
// // // //                   whileInView={{ opacity: 1, scale: 1 }}
// // // //                   viewport={{ once: true }}
// // // //                   transition={{ delay: i * 0.06, duration: 0.4 }}
// // // //                 >
// // // //                   <div className="df-tool-icon">✓</div>
// // // //                   <span>{tool}</span>
// // // //                 </motion.div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* ════════════════════════════════════════════ */}
// // // //         {/* GETTING STARTED - Dark */}
// // // //         {/* ════════════════════════════════════════════ */}
// // // //         <section className="df-steps-section" ref={startRef}>
// // // //           <div className="df-section-container">
// // // //             <div className="df-section-label">
// // // //               <span className="df-label-line" />
// // // //               <span className="df-label-text">Getting Started</span>
// // // //               <span className="df-label-line" />
// // // //             </div>
// // // //             <h2 className="df-section-title">
// // // //               Getting Started Is Simple
// // // //             </h2>
// // // //             <div className="df-steps-grid">
// // // //               {getStartedSteps.map((step, i) => (
// // // //                 <motion.div
// // // //                   key={i}
// // // //                   className="df-step-card"
// // // //                   initial={{ opacity: 0, y: 30 }}
// // // //                   animate={startInView ? { opacity: 1, y: 0 } : {}}
// // // //                   transition={{ delay: i * 0.08, duration: 0.5 }}
// // // //                 >
// // // //                   <div className="df-step-number">{step.step}</div>
// // // //                   <h3 className="df-step-title">{step.title}</h3>
// // // //                   <p className="df-step-desc">{step.desc}</p>
// // // //                 </motion.div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* ════════════════════════════════════════════ */}
// // // //         {/* FINAL CTA - White */}
// // // //         {/* ════════════════════════════════════════════ */}
// // // //         <section className="df-final-cta">
// // // //           <div className="df-section-container">
// // // //             <div className="df-final-cta-content">
// // // //               <h2 className="df-final-cta-title">
// // // //                 Ready To Build a Digital Presence That Actually Works?
// // // //               </h2>
// // // //               <p className="df-final-cta-desc">
// // // //                 Get a full audit of your current digital footprint  website, SEO, social, IT, and compliance  and see exactly where you stand and what to fix first.
// // // //               </p>
// // // //               <div className="df-final-cta-actions">
// // // //                 <Link to="/contact" state={{ scrollTo: 'enquiries' }} className="df-btn-primary">
// // // //                   <span>Book Your Free Digital Audit</span>
// // // //                   <HiArrowRight />
// // // //                 </Link>
// // // //                 <a href="tel:+912069015402" className="df-btn-secondary">
// // // //                   Contact Us Today
// // // //                 </a>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </section>
// // // //       </main>
// // // //       <FooterSection />
// // // //     </>
// // // //   )
// // // // }



// // // // DigitalFootprint.jsx
// // // import { useRef, useState } from 'react'
// // // import { motion, useInView } from 'framer-motion'
// // // import {
// // //   HiArrowRight,
// // //   HiOutlineCheckCircle,
// // //   HiOutlineClock,
// // //   HiOutlineChartBar,
// // //   HiOutlineDocumentText,
// // //   HiArrowTrendingUp,
// // //   HiOutlineShieldCheck,
// // //   HiOutlineGlobeAlt,
// // //   HiOutlineServer,
// // //   HiOutlineCpuChip,
// // //   HiOutlineCheck,
// // //   HiOutlineUserGroup,
// // //   HiOutlineComputerDesktop,
// // //   HiOutlineBuildingOffice,
// // //   HiOutlineBriefcase,
// // //   HiOutlineHome,
// // //   HiOutlineShoppingBag,
// // //   HiOutlineTruck,
// // //   HiOutlineWrenchScrewdriver,
// // //   HiOutlinePhone,
// // //   HiOutlineShare,
// // //   HiOutlineMegaphone,
// // //   HiOutlinePencil,
// // //   HiOutlineStar,
// // //   HiOutlineCloud,
// // //   HiOutlineLockClosed,
// // // } from 'react-icons/hi2'
// // // import { HiOutlineLocationMarker } from 'react-icons/hi'
// // // import { FaChartLine, FaDatabase, FaRocket, FaShieldAlt } from 'react-icons/fa'
// // // import { Link } from 'react-router-dom'
// // // import Navbar from '../../Navbar/index'
// // // import FooterSection from '../../Footer/index'
// // // import './DigitalFootprint.css'
// // // import BgImage1 from '../../../assets/pexels/pexels-photo-15.avif'

// // // // ─── LOCATIONS ───
// // // const locations = ['Hong Kong', 'India', 'China', 'USA']

// // // // ─── FEATURE PILLS ───
// // // const features = [
// // //   { icon: HiOutlineGlobeAlt, label: 'Web Presence Management' },
// // //   { icon: HiOutlineLocationMarker, label: 'SEO & Visibility' },
// // //   { icon: HiOutlineShare, label: 'Social Media Management' },
// // //   { icon: HiOutlineMegaphone, label: 'Digital Marketing' },
// // //   { icon: HiOutlinePencil, label: 'Brand Consistency' },
// // //   { icon: HiOutlineStar, label: 'Online Reputation' },
// // //   { icon: HiOutlineServer, label: 'IT Infrastructure' },
// // //   { icon: HiOutlineLockClosed, label: 'Compliance & Privacy' },
// // // ]

// // // // ─── STATS ───
// // // const stats = [
// // //   { value: '360°', label: 'Full Digital Coverage', icon: HiOutlineGlobeAlt },
// // //   { value: '24/7', label: 'Monitoring & Support', icon: HiOutlineClock },
// // //   { value: '98%', label: 'Brand Consistency', icon: HiOutlineCheckCircle },
// // //   { value: '5x', label: 'Faster Reporting', icon: HiOutlineChartBar },
// // // ]

// // // // ─── HIGHLIGHTS ───
// // // const highlights = [
// // //   {
// // //     icon: HiOutlineClock,
// // //     title: 'Always On',
// // //     desc: '24/7 monitoring for your website, servers, and online reputation.',
// // //   },
// // //   {
// // //     icon: HiOutlineShieldCheck,
// // //     title: 'Audit-Ready',
// // //     desc: 'Compliance documentation and data privacy policies kept current.',
// // //   },
// // //   {
// // //     icon: HiArrowTrendingUp,
// // //     title: 'Growth-Focused',
// // //     desc: 'Digital marketing campaigns built to generate leads, not just clicks.',
// // //   },
// // // ]

// // // // ─── CORE SERVICES ───
// // // const coreServices = [
// // //   {
// // //     icon: HiOutlineGlobeAlt,
// // //     title: 'Web Presence Management',
// // //     desc: 'Keep your website fast, updated, and always online.',
// // //     gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
// // //     color: '#22a7f0',
// // //     details: [
// // //       'Website maintenance and content updates',
// // //       'Hosting management and uptime monitoring',
// // //       'Performance optimization (speed, mobile, Core Web Vitals)',
// // //       'CMS updates, plugin management, security patches',
// // //       'Landing page creation and updates on demand',
// // //     ],
// // //   },
// // //   {
// // //     icon: HiOutlineLocationMarker,
// // //     title: 'SEO & Online Visibility',
// // //     desc: 'Get found by the right people at the right time.',
// // //     gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
// // //     color: '#34d399',
// // //     details: [
// // //       'On-page and technical SEO audits and fixes',
// // //       'Google Business Profile setup and optimization',
// // //       'Local listings management (Google Maps, Bing Places, Apple Maps)',
// // //       'Keyword tracking and monthly ranking reports',
// // //       'Competitor visibility benchmarking',
// // //     ],
// // //   },
// // //   {
// // //     icon: HiOutlineShare,
// // //     title: 'Social Media Management',
// // //     desc: 'Stay active, relevant, and consistent across every platform.',
// // //     gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
// // //     color: '#f472b6',
// // //     details: [
// // //       'LinkedIn, Instagram, Facebook, and X management',
// // //       'Monthly content calendar planning and scheduling',
// // //       'Branded graphics and caption writing',
// // //       'Community management (comments, DMs, engagement)',
// // //       'Monthly performance analytics and insights',
// // //     ],
// // //   },
// // //   {
// // //     icon: HiOutlineMegaphone,
// // //     title: 'Digital Marketing',
// // //     desc: 'Reach your audience with campaigns that convert.',
// // //     gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
// // //     color: '#f59e0b',
// // //     details: [
// // //       'Google Ads and Meta Ads setup and management',
// // //       'Email marketing campaigns and automation',
// // //       'Lead generation funnels and landing pages',
// // //       'A/B testing and performance optimization',
// // //       'Monthly reporting on spend, reach, and ROI',
// // //     ],
// // //   },
// // //   {
// // //     icon: HiOutlinePencil,
// // //     title: 'Brand Consistency',
// // //     desc: 'One voice, one look — everywhere your business appears.',
// // //     gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
// // //     color: '#a78bfa',
// // //     details: [
// // //       'Brand guidelines documentation and enforcement',
// // //       'Audit of all digital touchpoints for brand alignment',
// // //       'Template creation for social, email, and presentations',
// // //       'Ensuring consistent tone, colors, and messaging across all channels',
// // //       'Onboarding new channels or markets with brand-ready assets',
// // //     ],
// // //   },
// // //   {
// // //     icon: HiOutlineStar,
// // //     title: 'Online Reputation Management',
// // //     desc: 'Control the narrative around your business.',
// // //     gradient: 'linear-gradient(135deg, #f472b6, #f59e0b)',
// // //     color: '#f472b6',
// // //     details: [
// // //       'Google and industry review monitoring',
// // //       'Review response strategy and execution',
// // //       'PR mentions tracking across web and news',
// // //       'Negative content suppression strategy',
// // //       'Monthly reputation health reports',
// // //     ],
// // //   },
// // //   {
// // //     icon: HiOutlineServer,
// // //     title: 'IT Infrastructure Footprint',
// // //     desc: 'The digital backbone that keeps everything running.',
// // //     gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
// // //     color: '#22a7f0',
// // //     details: [
// // //       'Cloud setup, configuration, and management (AWS / Azure / GCP)',
// // //       'Domain and DNS management',
// // //       'Server monitoring, uptime alerts, and incident response',
// // //       'Email infrastructure setup (Microsoft 365 / Google Workspace)',
// // //       'Backup, disaster recovery, and system health checks',
// // //     ],
// // //   },
// // //   {
// // //     icon: HiOutlineLockClosed,
// // //     title: 'Compliance & Data Privacy',
// // //     desc: 'Stay legal, stay trusted.',
// // //     gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
// // //     color: '#34d399',
// // //     details: [
// // //       'GDPR and data privacy policy documentation',
// // //       'Cookie consent setup and banner management',
// // //       'Website accessibility compliance (WCAG basics)',
// // //       'Data handling audit and gap assessment',
// // //       'Ongoing compliance monitoring as regulations evolve',
// // //     ],
// // //   },
// // // ]

// // // // ─── WHAT WE HANDLE ───
// // // const whatWeHandle = [
// // //   'Website content updates and maintenance',
// // //   'Hosting and uptime monitoring',
// // //   'Google Business Profile management',
// // //   'Local directory listings and citations',
// // //   'SEO keyword tracking and optimization',
// // //   'Social media content creation and scheduling',
// // //   'Paid ad campaign management (Google & Meta)',
// // //   'Email campaign creation and automation',
// // //   'Brand asset management and consistency audits',
// // //   'Review monitoring and response management',
// // //   'Cloud infrastructure monitoring',
// // //   'Domain and DNS management',
// // //   'Server backups and disaster recovery',
// // //   'GDPR compliance and cookie management',
// // //   'Monthly digital performance reporting',
// // // ]

// // // // ─── WHY CHOOSE US ───
// // // const whyChooseUs = [
// // //   'One team managing your entire digital presence',
// // //   'Consistent brand voice across every touchpoint',
// // //   'Proactive monitoring before problems become crises',
// // //   'Lower cost than hiring multiple in-house specialists',
// // //   'Fixed monthly engagement with no hidden fees',
// // //   'Clear monthly reports on every service area',
// // //   'Rapid response to website issues and IT incidents',
// // //   'Scalable support as your business grows into new markets',
// // // ]

// // // // ─── INDUSTRY SOLUTIONS ───
// // // const industrySolutions = [
// // //   { icon: HiOutlineBuildingOffice, industry: 'Manufacturing', desc: 'B2B digital presence, supplier visibility, and LinkedIn authority building' },
// // //   { icon: HiOutlineBriefcase, industry: 'Professional Services', desc: 'Thought leadership content, SEO, and lead generation campaigns' },
// // //   { icon: HiOutlineHome, industry: 'Hotels & Hospitality', desc: 'Google listing optimization, review management, and direct booking campaigns' },
// // //   { icon: HiOutlineBuildingOffice, industry: 'Food & Beverage', desc: 'Instagram and Facebook management, local SEO, and delivery platform presence' },
// // //   { icon: HiOutlineShoppingBag, industry: 'E-Commerce', desc: 'Product SEO, Google Shopping ads, and email marketing automation' },
// // //   { icon: HiOutlineShoppingBag, industry: 'Retail', desc: 'Local visibility, social commerce, and seasonal campaign management' },
// // //   { icon: HiOutlineTruck, industry: 'Real Estate', desc: 'Property listing visibility, Google Ads, and reputation management' },
// // //   { icon: HiOutlineWrenchScrewdriver, industry: 'IT & Tech Companies', desc: 'LinkedIn strategy, content marketing, and cloud infrastructure management' },
// // // ]

// // // // ─── REPORTS ───
// // // const reports = [
// // //   'Website Traffic & Performance Report',
// // //   'SEO Rankings & Keyword Movement Report',
// // //   'Google Business Profile Insights',
// // //   'Social Media Reach & Engagement Report',
// // //   'Paid Ads Spend, Clicks & Conversion Report',
// // //   'Email Campaign Open Rate & CTR Report',
// // //   'Online Reputation & Review Summary',
// // //   'IT Infrastructure Health & Uptime Report',
// // //   'Brand Consistency Audit Summary',
// // //   'Compliance Status Update',
// // // ]

// // // // ─── TOOLS & PLATFORMS ───
// // // const toolsPlatforms = [
// // //   'Google Workspace & Microsoft 365',
// // //   'Google Ads & Meta Ads Manager',
// // //   'Google Search Console & Google Analytics',
// // //   'SEMrush / Ahrefs',
// // //   'Hootsuite / Buffer / Later',
// // //   'Mailchimp / HubSpot / ActiveCampaign',
// // //   'WordPress / Webflow / Shopify',
// // //   'AWS / Microsoft Azure / Google Cloud',
// // //   'Cloudflare (DNS & Security)',
// // //   'GDPR compliance tools',
// // // ]

// // // // ─── GET STARTED STEPS ───
// // // const getStartedSteps = [
// // //   { step: 1, title: 'Free Digital Audit', desc: 'We assess your current web presence, social profiles, SEO health, and IT setup to identify gaps and opportunities.' },
// // //   { step: 2, title: 'Strategy & Scope', desc: 'We recommend a tailored package covering the services your business actually needs — nothing more, nothing less.' },
// // //   { step: 3, title: 'Onboarding & Access', desc: 'We securely collect access to your platforms, tools, and accounts and set up our management workspace.' },
// // //   { step: 4, title: 'Month 1 — Foundation', desc: 'We fix what\'s broken, align your brand across channels, and launch quick-win campaigns.' },
// // //   { step: 5, title: 'Ongoing Management', desc: 'Monthly content, campaigns, monitoring, reporting, and continuous optimization — all handled.' },
// // // ]

// // // // ─── PRICING PLANS DATA ───
// // // const pricingPlans = [
// // //   {
// // //     id: 'lite',
// // //     name: 'Lite',
// // //     price: 499,
// // //     displayPrice: '$499',
// // //     features: ['3 pages', 'Hosting'],
// // //     addOns: [
// // //       { id: 'pages', label: 'Extra Pages', price: 200 },
// // //     ],
// // //     highlight: false,
// // //     gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
// // //     color: '#22a7f0',
// // //   },
// // //   {
// // //     id: 'standard',
// // //     name: 'Standard',
// // //     price: 999,
// // //     displayPrice: '$999',
// // //     features: ['5 pages', 'Hosting', 'Domain', '5+ email ids'],
// // //     addOns: [
// // //       { id: 'pages', label: 'Extra Pages', price: 200 },
// // //       { id: 'emails', label: 'Extra Email IDs', price: 10 },
// // //     ],
// // //     highlight: false,
// // //     gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
// // //     color: '#34d399',
// // //   },
// // //   {
// // //     id: 'business',
// // //     name: 'Business',
// // //     price: 1999,
// // //     displayPrice: '$1999',
// // //     features: ['10 pages', 'Hosting', 'Domain', '5+ email ids', 'SSL', 'SEO (5 words)'],
// // //     addOns: [
// // //       { id: 'pages', label: 'Extra Pages', price: 200 },
// // //       { id: 'emails', label: 'Extra Email IDs', price: 10 },
// // //       { id: 'seo', label: 'Extra SEO Keywords', price: 0.5 },
// // //     ],
// // //     highlight: true,
// // //     gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
// // //     color: '#f472b6',
// // //   },
// // //   {
// // //     id: 'professional',
// // //     name: 'Professional',
// // //     price: 2999,
// // //     displayPrice: '$2999+',
// // //     features: ['10 pages', 'Hosting', 'Domain', '5+ email ids', 'SSL', 'SEO', 'Integration', 'Social Media'],
// // //     addOns: [
// // //       { id: 'pages', label: 'Extra Pages', price: 200 },
// // //       { id: 'emails', label: 'Extra Email IDs', price: 10 },
// // //       { id: 'seo', label: 'Extra SEO Keywords', price: 0.5 },
// // //     ],
// // //     highlight: false,
// // //     gradient: 'linear-gradient(135deg, #f97316, #fb923c)',
// // //     color: '#f97316',
// // //   },
// // // ]

// // // export default function DigitalFootprint() {
// // //   const heroRef = useRef(null)
// // //   const pricingRef = useRef(null)
// // //   const servicesRef = useRef(null)
// // //   const whyRef = useRef(null)
// // //   const industryRef = useRef(null)
// // //   const startRef = useRef(null)

// // //   // ─── Modal State ───
// // //   const [modalOpen, setModalOpen] = useState(false)
// // //   const [selectedPlanId, setSelectedPlanId] = useState(null)
// // //   const [modalStep, setModalStep] = useState('calculator') // 'calculator' | 'form' | 'submitted'
// // //   const [userName, setUserName] = useState('')
// // //   const [userEmail, setUserEmail] = useState('')
// // //   const [userPhone, setUserPhone] = useState('')
// // //   const [addonQuantities, setAddonQuantities] = useState({})

// // //   // ─── Modal Functions ───
// // //   const openQuoteModal = (planId) => {
// // //     setSelectedPlanId(planId)
// // //     setModalStep('calculator')
// // //     setUserName('')
// // //     setUserEmail('')
// // //     setUserPhone('')
// // //     const plan = pricingPlans.find(p => p.id === planId)
// // //     if (plan) {
// // //       const initial = {}
// // //       plan.addOns.forEach(a => { initial[a.id] = 0 })
// // //       setAddonQuantities(initial)
// // //     }
// // //     setModalOpen(true)
// // //   }

// // //   const closeModal = () => {
// // //     setModalOpen(false)
// // //     setSelectedPlanId(null)
// // //   }

// // //   const handleSubmitForm = (e) => {
// // //     e.preventDefault()
// // //     setModalStep('submitted')
// // //     console.log({
// // //       plan: selectedPlanId,
// // //       name: userName,
// // //       email: userEmail,
// // //       phone: userPhone,
// // //       addons: addonQuantities,
// // //       total: getPlanTotal(selectedPlanId, addonQuantities),
// // //     })
// // //   }

// // //   const updateAddonQty = (addonId, delta) => {
// // //     setAddonQuantities(prev => ({
// // //       ...prev,
// // //       [addonId]: Math.max(0, (prev[addonId] || 0) + delta),
// // //     }))
// // //   }

// // //   const getPlanTotal = (planId, quantities) => {
// // //     const plan = pricingPlans.find(p => p.id === planId)
// // //     if (!plan) return 0
// // //     let total = plan.price
// // //     plan.addOns.forEach(a => {
// // //       const qty = quantities[a.id] || 0
// // //       total += qty * a.price
// // //     })
// // //     return total
// // //   }

// // //   const goToForm = () => {
// // //     setModalStep('form')
// // //   }

// // //   const goToCalculator = () => {
// // //     setModalStep('calculator')
// // //   }

// // //   const scrollToPricing = () => {
// // //     if (pricingRef.current) {
// // //       pricingRef.current.scrollIntoView({ behavior: 'smooth' })
// // //     }
// // //   }

// // //   // ─── InView hooks ───
// // //   const heroInView = useInView(heroRef, { once: true, margin: '-100px' })
// // //   const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' })
// // //   const whyInView = useInView(whyRef, { once: true, margin: '-100px' })
// // //   const industryInView = useInView(industryRef, { once: true, margin: '-100px' })
// // //   const startInView = useInView(startRef, { once: true, margin: '-100px' })

// // //   const containerVariants = {
// // //     hidden: { opacity: 0 },
// // //     visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
// // //   }
// // //   const itemVariants = {
// // //     hidden: { opacity: 0, y: 30 },
// // //     visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
// // //   }

// // //   // ─── CTA Banner Components (now use scrollToPricing) ───
// // //   const DPriceCtaBannerLight = () => (
// // //     <motion.div
// // //       className="bk-price-cta-light"
// // //       initial={{ opacity: 0, y: 20 }}
// // //       whileInView={{ opacity: 1, y: 0 }}
// // //       viewport={{ once: true }}
// // //       transition={{ duration: 0.7 }}
// // //     >
// // //       <div className="cta-content">
// // //         <span className="cta-text">Check out your price and find the perfect plan for your business.</span>
// // //       </div>
// // //       <button className="cta-btn cta-btn-solid" onClick={scrollToPricing}>
// // //         <span>Calculate Your Price</span>
// // //         <HiArrowRight />
// // //       </button>
// // //     </motion.div>
// // //   )

// // //   const DPriceCtaBannerDark = () => (
// // //     <motion.div
// // //       className="bk-price-cta-dark"
// // //       initial={{ opacity: 0, y: 20 }}
// // //       whileInView={{ opacity: 1, y: 0 }}
// // //       viewport={{ once: true }}
// // //       transition={{ duration: 0.7 }}
// // //     >
// // //       <div className="cta-content">
// // //         <span className="cta-text">Ready for accurate, stress-free pricing? Let's talk.</span>
// // //       </div>
// // //       <button className="cta-btn cta-btn-outline" onClick={scrollToPricing}>
// // //         <span>Estimate My Price</span>
// // //         <HiArrowRight />
// // //       </button>
// // //     </motion.div>
// // //   )

// // //   // ─── Render ───
// // //   return (
// // //     <>
// // //       <Navbar />
// // //       <main>
// // //         {/* ─── HERO (unchanged) ─── */}
// // //         <section className="df-hero" ref={heroRef}>
// // //           <div className="df-hero-bg">
// // //             <div className="df-hero-bg-img" style={{ backgroundImage: `url(${BgImage1})` }} />
// // //             <div className="df-hero-overlay" />
// // //           </div>
// // //           <div className="df-hero-orbs">
// // //             <div className="df-orb df-orb-1" />
// // //             <div className="df-orb df-orb-2" />
// // //             <div className="df-orb df-orb-3" />
// // //           </div>
// // //           <div className="df-hero-container">
// // //             <motion.div
// // //               className="df-hero-grid"
// // //               variants={containerVariants}
// // //               initial="hidden"
// // //               animate={heroInView ? 'visible' : 'hidden'}
// // //             >
// // //               <motion.div className="df-hero-left" variants={itemVariants}>
// // //                 <div className="df-hero-badge">
// // //                   <HiOutlineCheckCircle className="df-badge-icon" />
// // //                   <span>Shared Services</span>
// // //                   <span className="df-badge-pulse" />
// // //                 </div>
// // //                 <h1 className="df-hero-title">
// // //                   Your Business Deserves a Digital Presence That Works As Hard As You Do
// // //                 </h1>
// // //                 <p className="df-hero-desc">
// // //                   From your website to your search rankings, social channels to cloud infrastructure we manage every layer of your digital footprint so you show up, stand out, and stay secure.
// // //                 </p>
// // //                 <div className="df-locations">
// // //                   <HiOutlineGlobeAlt className="df-locations-icon" />
// // //                   {locations.map((loc, i) => (
// // //                     <span key={i} className="df-location-item">
// // //                       {i > 0 && <span className="df-location-sep">|</span>}
// // //                       {loc}
// // //                     </span>
// // //                   ))}
// // //                 </div>
// // //                 <div className="df-hero-ctas">
// // //                   <button className="df-btn-primary" onClick={scrollToPricing}>
// // //                     <span>Get Started Today</span>
// // //                     <HiArrowRight />
// // //                   </button>
// // //                 </div>
// // //                 <div className="df-hero-pills">
// // //                   {features.map((f, i) => {
// // //                     const Icon = f.icon
// // //                     return (
// // //                       <div key={i} className="df-pill">
// // //                         <Icon />
// // //                         <span>{f.label}</span>
// // //                       </div>
// // //                     )
// // //                   })}
// // //                 </div>
// // //               </motion.div>

// // //               <motion.div className="df-hero-right" variants={itemVariants}>
// // //                 <div className="df-price-card">
// // //                   <div className="df-price-card-glow" />
// // //                   <p className="df-price-tagline">
// // //                     Complete digital presence management for your business
// // //                   </p>
// // //                   <button className="df-btn-primary df-price-cta" onClick={scrollToPricing}>
// // //                     <span>Start Now</span>
// // //                     <HiArrowRight />
// // //                   </button>
// // //                 </div>
// // //                 <div className="df-stats-grid">
// // //                   {stats.map((s, i) => {
// // //                     const Icon = s.icon
// // //                     return (
// // //                       <motion.div
// // //                         key={i}
// // //                         className="df-stat-card"
// // //                         initial={{ opacity: 0, y: 20, scale: 0.9 }}
// // //                         animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
// // //                         transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
// // //                         whileHover={{ y: -4, scale: 1.02 }}
// // //                       >
// // //                         <div className="df-stat-icon"><Icon /></div>
// // //                         <div className="df-stat-info">
// // //                           <span className="df-stat-value">{s.value}</span>
// // //                           <span className="df-stat-label">{s.label}</span>
// // //                         </div>
// // //                       </motion.div>
// // //                     )
// // //                   })}
// // //                 </div>
// // //               </motion.div>
// // //             </motion.div>
// // //           </div>
// // //           <div className="df-hero-bottom" />
// // //         </section>

// // //         {/* ─── PRICING SECTION ─── */}
// // //         <section className="df-pricing-section" ref={pricingRef}>
// // //           <div className="df-section-container">
// // //             <div className="df-section-header">
// // //               <div className="df-section-label">
// // //                 <span className="df-label-line" />
// // //                 <span className="df-label-text">Pricing Plans</span>
// // //                 <span className="df-label-line" />
// // //               </div>
// // //               <h2 className="df-section-title">Choose the plan that fits your business</h2>
// // //               <p className="df-section-subtitle">
// // //                 All plans include core digital presence management. Add extra pages or email addresses as you grow.
// // //               </p>
// // //             </div>

// // //             <div className="df-pricing-grid">
// // //               {pricingPlans.map((plan) => (
// // //                 <motion.div
// // //                   key={plan.id}
// // //                   className={`df-pricing-card ${plan.highlight ? 'df-pricing-card-highlight' : ''}`}
// // //                   style={{
// // //                     borderTop: `4px solid ${plan.color}`,
// // //                     background: `linear-gradient(180deg, ${plan.color}08, #f8faff)`,
// // //                   }}
// // //                   initial={{ opacity: 0, y: 30 }}
// // //                   whileInView={{ opacity: 1, y: 0 }}
// // //                   viewport={{ once: true }}
// // //                   transition={{ duration: 0.5 }}
// // //                 >
// // //                   {plan.highlight && <div className="df-pricing-badge">Most Popular</div>}
// // //                   <h3 className="df-pricing-name">{plan.name}</h3>
// // //                   <ul className="df-pricing-features">
// // //                     {plan.features.map((feat, idx) => (
// // //                       <li key={idx}>
// // //                         <HiOutlineCheck className="df-pricing-check" /> {feat}
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                   <div className="df-pricing-actions">
// // //                     <button
// // //                       className="df-pricing-btn df-pricing-btn-quote"
// // //                       onClick={() => openQuoteModal(plan.id)}
// // //                     >
// // //                       Get Customized Quote
// // //                     </button>
// // //                   </div>
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* ─── QUOTE MODAL ─── */}
// // //         {modalOpen && selectedPlanId && (
// // //           <div className="df-modal-overlay" onClick={closeModal}>
// // //             <div className="df-modal" onClick={(e) => e.stopPropagation()}>
// // //               <button className="df-modal-close" onClick={closeModal}>×</button>
// // //               {(() => {
// // //                 const plan = pricingPlans.find(p => p.id === selectedPlanId)
// // //                 const total = getPlanTotal(selectedPlanId, addonQuantities)
// // //                 const hasAddons = plan.addOns && plan.addOns.length > 0

// // //                 if (modalStep === 'calculator') {
// // //                   return (
// // //                     <>
// // //                       <h2 className="df-modal-title">Customise Your {plan.name} Plan</h2>
// // //                       <p className="df-modal-sub">
// // //                         Select the add‑ons you need. The final price will be shown after you submit your details.
// // //                       </p>

// // //                       <div className="df-modal-base-price">
// // //                         <span className="df-modal-base-label">Base Plan Price</span>
// // //                         <span className="df-modal-base-amount">{plan.displayPrice}<span className="df-modal-base-period"> / month</span></span>
// // //                       </div>

// // //                       {hasAddons && (
// // //                         <div className="df-modal-addons">
// // //                           <p className="df-modal-addons-label">Customise your plan:</p>
// // //                           {plan.addOns.map(a => (
// // //                             <div key={a.id} className="df-modal-addon-row">
// // //                               <label>{a.label} (${a.price} each)</label>
// // //                               <div className="df-modal-counter">
// // //                                 <button onClick={() => updateAddonQty(a.id, -1)}>−</button>
// // //                                 <span>{addonQuantities[a.id] || 0}</span>
// // //                                 <button onClick={() => updateAddonQty(a.id, 1)}>+</button>
// // //                               </div>
// // //                             </div>
// // //                           ))}
// // //                         </div>
// // //                       )}

// // //                       <button className="df-modal-submit" onClick={goToForm}>
// // //                         Continue to Quote
// // //                       </button>
// // //                     </>
// // //                   )
// // //                 } else if (modalStep === 'form') {
// // //                   return (
// // //                     <>
// // //                       <h2 className="df-modal-title">Get Your Personalized Quote</h2>
// // //                       <p className="df-modal-sub">
// // //                         Please enter your contact details and we'll send you a detailed proposal.
// // //                       </p>

// // //                       <form onSubmit={handleSubmitForm} className="df-modal-form">
// // //                         <input
// // //                           type="text"
// // //                           placeholder="Your Name"
// // //                           value={userName}
// // //                           onChange={(e) => setUserName(e.target.value)}
// // //                           required
// // //                         />
// // //                         <input
// // //                           type="email"
// // //                           placeholder="Email Address"
// // //                           value={userEmail}
// // //                           onChange={(e) => setUserEmail(e.target.value)}
// // //                           required
// // //                         />
// // //                         <input
// // //                           type="tel"
// // //                           placeholder="Phone Number"
// // //                           value={userPhone}
// // //                           onChange={(e) => setUserPhone(e.target.value)}
// // //                           required
// // //                         />
// // //                         <div className="df-modal-form-actions">
// // //                           <button type="button" className="df-modal-back" onClick={goToCalculator}>
// // //                             Back
// // //                           </button>
// // //                           <button type="submit" className="df-modal-submit">
// // //                             Submit & Get Quote
// // //                           </button>
// // //                         </div>
// // //                       </form>
// // //                     </>
// // //                   )
// // //                 } else {
// // //                   // submitted state – now show the total
// // //                   return (
// // //                     <>
// // //                       <h2 className="df-modal-title">Quote Submitted</h2>
// // //                       <p className="df-modal-sub">
// // //                         Thanks, <strong>{userName}</strong>! Your personalised quote for the <strong>{plan.name}</strong> plan is ready.
// // //                       </p>

// // //                       <div className="df-modal-price-box">
// // //                         <span className="df-modal-price-label">Your Estimated Monthly Total</span>
// // //                         <div className="df-modal-price-amount">
// // //                           ${total.toFixed(2)}
// // //                           <span className="df-modal-price-period">/ month</span>
// // //                         </div>
// // //                         <div className="df-modal-price-breakdown">
// // //                           <span>Base: {plan.displayPrice}</span>
// // //                           {plan.addOns.map(a => {
// // //                             const qty = addonQuantities[a.id] || 0
// // //                             if (qty === 0) return null
// // //                             const cost = qty * a.price
// // //                             return <span key={a.id}>+ ${cost} ({qty} × {a.label})</span>
// // //                           })}
// // //                         </div>
// // //                       </div>

// // //                       <div className="df-modal-contact-info">
// // //                         <p><strong>Email:</strong> {userEmail}</p>
// // //                         <p><strong>Phone:</strong> {userPhone}</p>
// // //                       </div>

// // //                       <p className="df-modal-sub">
// // //                         We'll review your requirements and get back to you within one business day.
// // //                       </p>

// // //                       <button className="df-modal-submit df-modal-close-btn" onClick={closeModal}>
// // //                         Close
// // //                       </button>
// // //                     </>
// // //                   )
// // //                 }
// // //               })()}
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* ─── OTHER SECTIONS (unchanged) ─── */}
// // //         <section className="df-about-section">
// // //           <div className="df-section-container">
// // //             <div className="df-about-grid">
// // //               <div className="df-about-left">
// // //                 <div className="df-section-label">
// // //                   <span className="df-label-line" />
// // //                   <span className="df-label-text">About</span>
// // //                   <span className="df-label-line" />
// // //                 </div>
// // //                 <h2 className="df-section-title">What Is Digital Footprint Management?</h2>
// // //                 <p className="df-about-text">
// // //                   Your digital footprint is everything your business looks like online your website, your search presence, your social media profiles, your cloud infrastructure, and the data trail you leave across the internet.
// // //                 </p>
// // //                 <p className="df-about-text">
// // //                   Most businesses manage these in silos: one agency for SEO, another for social, a freelancer for the website, and an IT vendor for the servers. The result is inconsistency, gaps in security, and a brand that feels different everywhere people find it.
// // //                 </p>
// // //                 <p className="df-about-text">
// // //                   At Zeta-V, we bring all of it under one roof. Our Digital Footprint service covers your entire online presence  from how you look on Google to how your servers are configured  managed by one team, on one fixed monthly engagement.
// // //                 </p>
// // //               </div>
// // //               <div className="df-about-right">
// // //                 <div className="df-about-card">
// // //                   <div className="df-about-card-icon"><HiOutlineShieldCheck /></div>
// // //                   <h3>Why Choose Zeta-V?</h3>
// // //                   <ul className="df-about-list">
// // //                     <li><HiOutlineCheck /> Industry-specific digital strategy</li>
// // //                     <li><HiOutlineCheck /> Single point of contact for all digital services</li>
// // //                     <li><HiOutlineCheck /> Consistent brand voice across every channel</li>
// // //                     <li><HiOutlineCheck /> Proactive monitoring, not reactive fixes</li>
// // //                     <li><HiOutlineCheck /> Transparent monthly reporting</li>
// // //                   </ul>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         <section className="df-services-section" ref={servicesRef}>
// // //           <div className="df-section-container">
// // //             <div className="df-services-wrapper">
// // //               <div className="df-services-left">
// // //                 <div className="df-section-header-left">
// // //                   <div className="df-section-label">
// // //                     <span className="df-label-line" />
// // //                     <span className="df-label-text">What We Offer</span>
// // //                     <span className="df-label-line" /> <span className="df-label-line" />
// // //                   </div>
// // //                   <h2 className="df-section-title">Everything We Manage Inside Your Digital World</h2>
// // //                   <p className="df-section-subtitle">End-to-end digital presence management tailored to your business size and industry.</p>
// // //                 </div>
// // //                 <div className="df-services-grid">
// // //                   {coreServices.map((s, i) => {
// // //                     const Icon = s.icon
// // //                     return (
// // //                       <motion.div
// // //                         key={i}
// // //                         className="df-service-card"
// // //                         style={{ '--df-card-color': s.color }}
// // //                         initial={{ opacity: 0, y: 20 }}
// // //                         whileInView={{ opacity: 1, y: 0 }}
// // //                         viewport={{ once: true }}
// // //                         transition={{ delay: i * 0.04, duration: 0.5 }}
// // //                         whileHover={{ y: -6 }}
// // //                       >
// // //                         <div className="df-service-card-icon" style={{ background: s.gradient }}>
// // //                           <Icon />
// // //                         </div>
// // //                         <h3 className="df-service-card-title">{s.title}</h3>
// // //                         <p className="df-service-card-desc">{s.desc}</p>
// // //                         <div className="df-service-card-details">
// // //                           {s.details.slice(0, 3).map((detail, idx) => (
// // //                             <div key={idx} className="df-service-detail">
// // //                               <HiOutlineCheck className="df-service-detail-check" />
// // //                               <span className="df-service-card-details-p">{detail}</span>
// // //                             </div>
// // //                           ))}
// // //                           {s.details.length > 3 && (
// // //                             <div className="df-service-detail-more">+{s.details.length - 3} more</div>
// // //                           )}
// // //                         </div>
// // //                       </motion.div>
// // //                     )
// // //                   })}
// // //                 </div>
// // //               </div>
// // //               <div className="df-services-right-side">
// // //                 <div className="df-services-right-inner">
// // //                   <div className="df-right-icon"><HiArrowTrendingUp /></div>
// // //                   <h2 className="df-right-headline">Visible Online.<br /><span>Secure Behind the Scenes.</span></h2>
// // //                   <p className="df-right-sub">We manage what people see and what powers it — so your brand performs at every layer.</p>
// // //                   <div className="df-right-highlights">
// // //                     {highlights.map((h, i) => {
// // //                       const Icon = h.icon
// // //                       return (
// // //                         <div key={i} className="df-right-highlight-item">
// // //                           <div className="df-right-highlight-icon"><Icon /></div>
// // //                           <div>
// // //                             <h4>{h.title}</h4>
// // //                             <p>{h.desc}</p>
// // //                           </div>
// // //                         </div>
// // //                       )
// // //                     })}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //           {/* CTA Banner – Light */}
// // //           <DPriceCtaBannerLight />
// // //         </section>

// // //         <section className="df-handle-section">
// // //           <div className="df-section-container">
// // //             <div className="df-handle-grid">
// // //               <div className="df-handle-left">
// // //                 <div className="df-section-label">
// // //                   <span className="df-label-line" />
// // //                   <span className="df-label-text">Everything We Handle</span>
// // //                   <span className="df-label-line" />
// // //                 </div>
// // //                 <h2 className="df-section-title">We Take Care of Every Digital Detail</h2>
// // //                 <p className="df-section-subtitle">From daily social posts to monthly server health checks we manage it all.</p>
// // //               </div>
// // //               <div className="df-handle-right">
// // //                 <div className="df-handle-list">
// // //                   {whatWeHandle.map((item, i) => (
// // //                     <motion.div
// // //                       key={i}
// // //                       className="df-handle-item"
// // //                       initial={{ opacity: 0, x: 20 }}
// // //                       whileInView={{ opacity: 1, x: 0 }}
// // //                       viewport={{ once: true }}
// // //                       transition={{ delay: i * 0.03, duration: 0.4 }}
// // //                     >
// // //                       <HiOutlineCheck className="df-handle-check" />
// // //                       <span>{item}</span>
// // //                     </motion.div>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         <section className="df-why-choose" ref={whyRef}>
// // //           <div className="df-section-container">
// // //             <motion.div
// // //               className="df-why-grid"
// // //               initial={{ opacity: 0 }}
// // //               animate={whyInView ? { opacity: 1 } : {}}
// // //               transition={{ duration: 0.5 }}
// // //             >
// // //               <div className="df-why-left">
// // //                 <div className="df-section-label">
// // //                   <span className="df-label-line" />
// // //                   <span className="df-label-text">Why Choose Us</span>
// // //                   <span className="df-label-line" />
// // //                 </div>
// // //                 <h2 className="df-section-title">More Than Digital Management —<br /><span>We Become Your Entire Digital Team</span></h2>
// // //                 <p className="df-section-subtitle">Building separate in-house teams for web, social, SEO, IT, and compliance is expensive and hard to coordinate. We bring it all together under one accountable partner.</p>
// // //               </div>
// // //               <div className="df-why-right">
// // //                 {whyChooseUs.map((item, i) => (
// // //                   <motion.div
// // //                     key={i}
// // //                     className="df-why-item"
// // //                     initial={{ opacity: 0, x: 20 }}
// // //                     animate={whyInView ? { opacity: 1, x: 0 } : {}}
// // //                     transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
// // //                   >
// // //                     <HiOutlineCheck className="df-why-check" />
// // //                     <span>{item}</span>
// // //                   </motion.div>
// // //                 ))}
// // //               </div>
// // //             </motion.div>
// // //           </div>
// // //         </section>

// // //         <section className="df-industry-section" ref={industryRef}>
// // //           <div className="df-section-container">
// // //             <div className="df-section-header">
// // //               <div className="df-section-label">
// // //                 <span className="df-label-line" />
// // //                 <span className="df-label-text">Industry Solutions</span>
// // //                 <span className="df-label-line" />
// // //               </div>
// // //               <h2 className="df-section-title">Tailored Digital Strategies By Industry</h2>
// // //             </div>
// // //             <div className="df-industry-grid">
// // //               {industrySolutions.map((item, i) => {
// // //                 const Icon = item.icon
// // //                 return (
// // //                   <motion.div
// // //                     key={i}
// // //                     className="df-industry-card"
// // //                     initial={{ opacity: 0, y: 20 }}
// // //                     whileInView={{ opacity: 1, y: 0 }}
// // //                     viewport={{ once: true }}
// // //                     transition={{ delay: i * 0.04, duration: 0.4 }}
// // //                     whileHover={{ y: -4 }}
// // //                   >
// // //                     <div className="df-industry-card-icon"><Icon /></div>
// // //                     <h3 className="df-industry-card-title">{item.industry}</h3>
// // //                     <p className="df-industry-card-desc">{item.desc}</p>
// // //                   </motion.div>
// // //                 )
// // //               })}
// // //             </div>
// // //           </div>
// // //         </section>

// // //         <section className="df-reports-section">
// // //           <div className="df-section-container">
// // //             <div className="df-section-label">
// // //               <span className="df-label-line" />
// // //               <span className="df-label-text">Reports You Receive</span>
// // //               <span className="df-label-line" />
// // //             </div>
// // //             <h2 className="df-section-title">Monthly Reports That Tell You Exactly Where You Stand</h2>
// // //             <p className="df-section-subtitle">Every month, you receive clear reports across all service areas  no fluff, just the numbers that matter.</p>
// // //             <div className="df-reports-grid">
// // //               {reports.map((report, i) => (
// // //                 <motion.div
// // //                   key={i}
// // //                   className="df-report-item"
// // //                   initial={{ opacity: 0, y: 20 }}
// // //                   whileInView={{ opacity: 1, y: 0 }}
// // //                   viewport={{ once: true }}
// // //                   transition={{ delay: i * 0.04, duration: 0.4 }}
// // //                 >
// // //                   <HiOutlineDocumentText className="df-report-icon" />
// // //                   <span>{report}</span>
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //           <br></br>
// // //               <DPriceCtaBannerLight />
// // //         </section>

// // //         <section className="df-tools-section">
// // //           <div className="df-section-container">
// // //             <div className="df-section-label">
// // //               <span className="df-label-line" />
// // //               <span className="df-label-text">Tools & Platforms</span>
// // //               <span className="df-label-line" />
// // //             </div>
// // //             <h2 className="df-section-title">Platforms & Tools We Work With</h2>
// // //             <div className="df-tools-grid">
// // //               {toolsPlatforms.map((tool, i) => (
// // //                 <motion.div
// // //                   key={i}
// // //                   className="df-tool-item"
// // //                   initial={{ opacity: 0, scale: 0.9 }}
// // //                   whileInView={{ opacity: 1, scale: 1 }}
// // //                   viewport={{ once: true }}
// // //                   transition={{ delay: i * 0.06, duration: 0.4 }}
// // //                 >
// // //                   <div className="df-tool-icon">✓</div>
// // //                   <span>{tool}</span>
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>

// // //         <section className="df-steps-section" ref={startRef}>
// // //           <div className="df-section-container">
// // //             <div className="df-section-label">
// // //               <span className="df-label-line" />
// // //               <span className="df-label-text">Getting Started</span>
// // //               <span className="df-label-line" />
// // //             </div>
// // //             <h2 className="df-section-title">Getting Started Is Simple</h2>
// // //             <div className="df-steps-grid">
// // //               {getStartedSteps.map((step, i) => (
// // //                 <motion.div
// // //                   key={i}
// // //                   className="df-step-card"
// // //                   initial={{ opacity: 0, y: 30 }}
// // //                   animate={startInView ? { opacity: 1, y: 0 } : {}}
// // //                   transition={{ delay: i * 0.08, duration: 0.5 }}
// // //                 >
// // //                   <div className="df-step-number">{step.step}</div>
// // //                   <h3 className="df-step-title">{step.title}</h3>
// // //                   <p className="df-step-desc">{step.desc}</p>
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>

// // //         <section className="df-final-cta">
// // //           <div className="df-section-container">
// // //             <div className="df-final-cta-content">
// // //               <h2 className="df-final-cta-title">Ready To Build a Digital Presence That Actually Works?</h2>
// // //               <p className="df-final-cta-desc">Get a full audit of your current digital footprint – website, SEO, social, IT, and compliance – and see exactly where you stand and what to fix first.</p>
// // //               <div className="df-final-cta-actions">
// // //                 <Link to="/contact" state={{ scrollTo: 'enquiries' }} className="df-btn-primary">
// // //                   <span>Book Your Free Digital Audit</span>
// // //                   <HiArrowRight />
// // //                 </Link>
// // //                 <a href="tel:+912069015402" className="df-btn-secondary">Contact Us Today</a>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </section>
// // //       </main>
// // //       <FooterSection />
// // //     </>
// // //   )
// // // }




// // // DigitalFootprint.jsx
// // import { useRef, useState } from 'react'
// // import { motion, useInView } from 'framer-motion'
// // import {
// //   HiArrowRight,
// //   HiOutlineCheckCircle,
// //   HiOutlineClock,
// //   HiOutlineChartBar,
// //   HiOutlineDocumentText,
// //   HiArrowTrendingUp,
// //   HiOutlineShieldCheck,
// //   HiOutlineGlobeAlt,
// //   HiOutlineServer,
// //   HiOutlineCpuChip,
// //   HiOutlineCheck,
// //   HiOutlineUserGroup,
// //   HiOutlineComputerDesktop,
// //   HiOutlineBuildingOffice,
// //   HiOutlineBriefcase,
// //   HiOutlineHome,
// //   HiOutlineShoppingBag,
// //   HiOutlineTruck,
// //   HiOutlineWrenchScrewdriver,
// //   HiOutlinePhone,
// //   HiOutlineShare,
// //   HiOutlineMegaphone,
// //   HiOutlinePencil,
// //   HiOutlineStar,
// //   HiOutlineCloud,
// //   HiOutlineLockClosed,
// // } from 'react-icons/hi2'
// // import { HiOutlineLocationMarker } from 'react-icons/hi'
// // import { Link } from 'react-router-dom'
// // import Navbar from '../../Navbar/index'
// // import FooterSection from '../../Footer/index'
// // import './DigitalFootprint.css'
// // import BgImage1 from '../../../assets/pexels/pexels-photo-15.avif'

// // // ─── LOCATIONS ───
// // const locations = ['Hong Kong', 'India', 'China', 'USA']

// // // ─── FEATURE PILLS ───
// // const features = [
// //   { icon: HiOutlineGlobeAlt, label: 'Web Presence Management' },
// //   { icon: HiOutlineLocationMarker, label: 'SEO & Visibility' },
// //   { icon: HiOutlineShare, label: 'Social Media Management' },
// //   { icon: HiOutlineMegaphone, label: 'Digital Marketing' },
// //   { icon: HiOutlinePencil, label: 'Brand Consistency' },
// //   { icon: HiOutlineStar, label: 'Online Reputation' },
// //   { icon: HiOutlineServer, label: 'Cloud Native Infrastructure' },
// //   { icon: HiOutlineLockClosed, label: 'Compliance & Privacy' },
// // ]

// // // ─── STATS ───
// // const stats = [
// //   { value: '360°', label: 'Full Digital Coverage', icon: HiOutlineGlobeAlt },
// //   { value: '24/7', label: 'Monitoring & Support', icon: HiOutlineClock },
// //   { value: '98%', label: 'Brand Consistency', icon: HiOutlineCheckCircle },
// //   { value: '5x', label: 'Faster Reporting', icon: HiOutlineChartBar },
// // ]

// // // ─── HIGHLIGHTS ───
// // const highlights = [
// //   {
// //     icon: HiOutlineClock,
// //     title: 'Always On',
// //     desc: '24/7 monitoring for your website, servers, and online reputation.',
// //   },
// //   {
// //     icon: HiOutlineShieldCheck,
// //     title: 'Audit-Ready',
// //     desc: 'Compliance documentation and data privacy policies kept current.',
// //   },
// //   {
// //     icon: HiArrowTrendingUp,
// //     title: 'Growth-Focused',
// //     desc: 'Digital marketing campaigns built to generate leads, not just clicks.',
// //   },
// // ]

// // // ─── CORE SERVICES ───
// // const coreServices = [
// //   {
// //     icon: HiOutlineGlobeAlt,
// //     title: 'Web Presence Management',
// //     desc: 'Keep your website fast, updated, and always online.',
// //     gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
// //     color: '#22a7f0',
// //     details: [
// //       'Website maintenance and content updates',
// //       'Hosting management and uptime monitoring',
// //       'Performance optimization (speed, mobile, Core Web Vitals)',
// //       'CMS updates, plugin management, security patches',
// //       'Landing page creation and updates on demand',
// //     ],
// //   },
// //   {
// //     icon: HiOutlineLocationMarker,
// //     title: 'SEO & Online Visibility',
// //     desc: 'Get found by the right people at the right time.',
// //     gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
// //     color: '#34d399',
// //     details: [
// //       'On-page and technical SEO audits and fixes',
// //       'Google Business Profile setup and optimization',
// //       'Local listings management (Google Maps, Bing Places, Apple Maps)',
// //       'Keyword tracking and monthly ranking reports',
// //       'Competitor visibility benchmarking',
// //     ],
// //   },
// //   {
// //     icon: HiOutlineShare,
// //     title: 'Social Media Management',
// //     desc: 'Stay active, relevant, and consistent across every platform.',
// //     gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
// //     color: '#f472b6',
// //     details: [
// //       'LinkedIn, Instagram, Facebook, and X management',
// //       'Monthly content calendar planning and scheduling',
// //       'Branded graphics and caption writing',
// //       'Community management (comments, DMs, engagement)',
// //       'Monthly performance analytics and insights',
// //     ],
// //   },
// //   {
// //     icon: HiOutlineMegaphone,
// //     title: 'Digital Marketing',
// //     desc: 'Reach your audience with campaigns that convert.',
// //     gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
// //     color: '#f59e0b',
// //     details: [
// //       'Google Ads and Meta Ads setup and management',
// //       'Email marketing campaigns and automation',
// //       'Lead generation funnels and landing pages',
// //       'A/B testing and performance optimization',
// //       'Monthly reporting on spend, reach, and ROI',
// //     ],
// //   },
// //   {
// //     icon: HiOutlinePencil,
// //     title: 'Brand Consistency',
// //     desc: 'One voice, one look — everywhere your business appears.',
// //     gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
// //     color: '#a78bfa',
// //     details: [
// //       'Brand guidelines documentation and enforcement',
// //       'Audit of all digital touchpoints for brand alignment',
// //       'Template creation for social, email, and presentations',
// //       'Ensuring consistent tone, colors, and messaging across all channels',
// //       'Onboarding new channels or markets with brand-ready assets',
// //     ],
// //   },
// //   {
// //     icon: HiOutlineStar,
// //     title: 'Online Reputation Management',
// //     desc: 'Control the narrative around your business.',
// //     gradient: 'linear-gradient(135deg, #f472b6, #f59e0b)',
// //     color: '#f472b6',
// //     details: [
// //       'Google and industry review monitoring',
// //       'Review response strategy and execution',
// //       'PR mentions tracking across web and news',
// //       'Negative content suppression strategy',
// //       'Monthly reputation health reports',
// //     ],
// //   },
// //   {
// //     icon: HiOutlineServer,
// //     title: 'IT Infrastructure Footprint',
// //     desc: 'The digital backbone that keeps everything running.',
// //     gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
// //     color: '#22a7f0',
// //     details: [
// //       'Cloud setup, configuration, and management (AWS / Azure / GCP)',
// //       'Domain and DNS management',
// //       'Server monitoring, uptime alerts, and incident response',
// //       'Email infrastructure setup (Microsoft 365 / Google Workspace)',
// //       'Backup, disaster recovery, and system health checks',
// //     ],
// //   },
// //   {
// //     icon: HiOutlineLockClosed,
// //     title: 'Compliance & Data Privacy',
// //     desc: 'Stay legal, stay trusted.',
// //     gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
// //     color: '#34d399',
// //     details: [
// //       'GDPR and data privacy policy documentation',
// //       'Cookie consent setup and banner management',
// //       'Website accessibility compliance (WCAG basics)',
// //       'Data handling audit and gap assessment',
// //       'Ongoing compliance monitoring as regulations evolve',
// //     ],
// //   },
// // ]

// // // ─── WHAT WE HANDLE ───
// // const whatWeHandle = [
// //   'Website content updates and maintenance',
// //   'Hosting and uptime monitoring',
// //   'Google Business Profile management',
// //   'Local directory listings and citations',
// //   'SEO keyword tracking and optimization',
// //   'Social media content creation and scheduling',
// //   'Paid ad campaign management (Google & Meta)',
// //   'Email campaign creation and automation',
// //   'Brand asset management and consistency audits',
// //   'Review monitoring and response management',
// //   'Cloud infrastructure monitoring',
// //   'Domain and DNS management',
// //   'Server backups and disaster recovery',
// //   'GDPR compliance and cookie management',
// //   'Monthly digital performance reporting',
// // ]

// // // ─── WHY CHOOSE US ───
// // const whyChooseUs = [
// //   'One team managing your entire digital presence',
// //   'Consistent brand voice across every touchpoint',
// //   'Proactive monitoring before problems become crises',
// //   'Lower cost than hiring multiple in-house specialists',
// //   'Fixed monthly engagement with no hidden fees',
// //   'Clear monthly reports on every service area',
// //   'Rapid response to website issues and IT incidents',
// //   'Scalable support as your business grows into new markets',
// // ]

// // // ─── INDUSTRY SOLUTIONS ───
// // const industrySolutions = [
// //   { icon: HiOutlineBuildingOffice, industry: 'Manufacturing', desc: 'B2B digital presence, supplier visibility, and LinkedIn authority building' },
// //   { icon: HiOutlineBriefcase, industry: 'Professional Services', desc: 'Thought leadership content, SEO, and lead generation campaigns' },
// //   { icon: HiOutlineHome, industry: 'Hotels & Hospitality', desc: 'Google listing optimization, review management, and direct booking campaigns' },
// //   { icon: HiOutlineBuildingOffice, industry: 'Food & Beverage', desc: 'Instagram and Facebook management, local SEO, and delivery platform presence' },
// //   { icon: HiOutlineShoppingBag, industry: 'E-Commerce', desc: 'Product SEO, Google Shopping ads, and email marketing automation' },
// //   { icon: HiOutlineShoppingBag, industry: 'Retail', desc: 'Local visibility, social commerce, and seasonal campaign management' },
// //   { icon: HiOutlineTruck, industry: 'Real Estate', desc: 'Property listing visibility, Google Ads, and reputation management' },
// //   { icon: HiOutlineWrenchScrewdriver, industry: 'IT & Tech Companies', desc: 'LinkedIn strategy, content marketing, and cloud infrastructure management' },
// // ]

// // // ─── REPORTS ───
// // const reports = [
// //   'Website Traffic & Performance Report',
// //   'SEO Rankings & Keyword Movement Report',
// //   'Google Business Profile Insights',
// //   'Social Media Reach & Engagement Report',
// //   'Paid Ads Spend, Clicks & Conversion Report',
// //   'Email Campaign Open Rate & CTR Report',
// //   'Online Reputation & Review Summary',
// //   'IT Infrastructure Health & Uptime Report',
// //   'Brand Consistency Audit Summary',
// //   'Compliance Status Update',
// // ]

// // // ─── TOOLS & PLATFORMS ───
// // const toolsPlatforms = [
// //   'Google Workspace & Microsoft 365',
// //   'Google Ads & Meta Ads Manager',
// //   'Google Search Console & Google Analytics',
// //   'SEMrush / Ahrefs',
// //   'Hootsuite / Buffer / Later',
// //   'Mailchimp / HubSpot / ActiveCampaign',
// //   'WordPress / Webflow / Shopify',
// //   'AWS / Microsoft Azure / Google Cloud',
// //   'Cloudflare (DNS & Security)',
// //   'GDPR compliance tools',
// // ]

// // // ─── GET STARTED STEPS ───
// // const getStartedSteps = [
// //   { step: 1, title: 'Free Digital Audit', desc: 'We assess your current web presence, social profiles, SEO health, and IT setup to identify gaps and opportunities.' },
// //   { step: 2, title: 'Strategy & Scope', desc: 'We recommend a tailored package covering the services your business actually needs — nothing more, nothing less.' },
// //   { step: 3, title: 'Onboarding & Access', desc: 'We securely collect access to your platforms, tools, and accounts and set up our management workspace.' },
// //   { step: 4, title: 'Month 1 — Foundation', desc: 'We fix what\'s broken, align your brand across channels, and launch quick-win campaigns.' },
// //   { step: 5, title: 'Ongoing Management', desc: 'Monthly content, campaigns, monitoring, reporting, and continuous optimization — all handled.' },
// // ]

// // // ─── PRICING PLANS DATA ───
// // const pricingPlans = [
// //   {
// //     id: 'lite',
// //     name: 'Lite',
// //     price: 499,
// //     displayPrice: '$499',
// //     features: ['3 pages', 'Hosting'],
// //     addOns: [
// //       { id: 'pages', label: 'Extra Pages', price: 200 },
// //     ],
// //     highlight: false,
// //     gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
// //     color: '#22a7f0',
// //   },
// //   {
// //     id: 'standard',
// //     name: 'Standard',
// //     price: 999,
// //     displayPrice: '$999',
// //     features: ['5 pages', 'Hosting', 'Domain', '5+ email ids'],
// //     addOns: [
// //       { id: 'pages', label: 'Extra Pages', price: 200 },
// //       { id: 'emails', label: 'Extra Email IDs', price: 10 },
// //     ],
// //     highlight: false,
// //     gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
// //     color: '#34d399',
// //   },
// //   {
// //     id: 'business',
// //     name: 'Business',
// //     price: 1999,
// //     displayPrice: '$1999',
// //     features: ['10 pages', 'Hosting', 'Domain', '5+ email ids', 'SSL', 'SEO (5 words)'],
// //     addOns: [
// //       { id: 'pages', label: 'Extra Pages', price: 200 },
// //       { id: 'emails', label: 'Extra Email IDs', price: 10 },
// //       { id: 'seo', label: 'Extra SEO Keywords', price: 0.5 }, // price exists but will be ignored
// //     ],
// //     highlight: true,
// //     gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
// //     color: '#f472b6',
// //   },
// //   {
// //     id: 'professional',
// //     name: 'Professional',
// //     price: 2999,
// //     displayPrice: '$2999+',
// //     features: ['10 pages', 'Hosting', 'Domain', '5+ email ids', 'SSL', 'SEO', 'Integration', 'Social Media'],
// //     addOns: [
// //       { id: 'pages', label: 'Extra Pages', price: 200 },
// //       { id: 'emails', label: 'Extra Email IDs', price: 10 },
// //       { id: 'seo', label: 'Extra SEO Keywords', price: 0.5 },
// //     ],
// //     highlight: false,
// //     gradient: 'linear-gradient(135deg, #f97316, #fb923c)',
// //     color: '#f97316',
// //   },
// // ]

// // export default function DigitalFootprint() {
// //   const heroRef = useRef(null)
// //   const pricingRef = useRef(null)
// //   const servicesRef = useRef(null)
// //   const whyRef = useRef(null)
// //   const industryRef = useRef(null)
// //   const startRef = useRef(null)

// //   // ─── Modal State ───
// //   const [modalOpen, setModalOpen] = useState(false)
// //   const [selectedPlanId, setSelectedPlanId] = useState(null)
// //   const [modalStep, setModalStep] = useState('calculator') // 'calculator' | 'form' | 'submitted'
// //   const [userName, setUserName] = useState('')
// //   const [userEmail, setUserEmail] = useState('')
// //   const [userPhone, setUserPhone] = useState('')
// //   const [addonQuantities, setAddonQuantities] = useState({})

// //   // ─── Modal Functions ───
// //   const openQuoteModal = (planId) => {
// //     setSelectedPlanId(planId)
// //     setModalStep('calculator')
// //     setUserName('')
// //     setUserEmail('')
// //     setUserPhone('')
// //     const plan = pricingPlans.find(p => p.id === planId)
// //     if (plan) {
// //       const initial = {}
// //       plan.addOns.forEach(a => {
// //         // Only set quantity for non-seo add-ons (seo is static)
// //         if (a.id !== 'seo') {
// //           initial[a.id] = 0
// //         }
// //       })
// //       setAddonQuantities(initial)
// //     }
// //     setModalOpen(true)
// //   }

// //   const closeModal = () => {
// //     setModalOpen(false)
// //     setSelectedPlanId(null)
// //   }

// //   const handleSubmitForm = (e) => {
// //     e.preventDefault()
// //     setModalStep('submitted')
// //     console.log({
// //       plan: selectedPlanId,
// //       name: userName,
// //       email: userEmail,
// //       phone: userPhone,
// //       addons: addonQuantities,
// //       total: getPlanTotal(selectedPlanId, addonQuantities),
// //     })
// //   }

// //   const updateAddonQty = (addonId, delta) => {
// //     setAddonQuantities(prev => ({
// //       ...prev,
// //       [addonId]: Math.max(0, (prev[addonId] || 0) + delta),
// //     }))
// //   }

// //   const getPlanTotal = (planId, quantities) => {
// //     const plan = pricingPlans.find(p => p.id === planId)
// //     if (!plan) return 0
// //     let total = plan.price
// //     plan.addOns.forEach(a => {
// //       // Skip SEO – it's "on request" and not part of the fixed monthly total
// //       if (a.id === 'seo') return
// //       const qty = quantities[a.id] || 0
// //       total += qty * a.price
// //     })
// //     return total
// //   }

// //   const goToForm = () => {
// //     setModalStep('form')
// //   }

// //   const goToCalculator = () => {
// //     setModalStep('calculator')
// //   }

// //   const scrollToPricing = () => {
// //     if (pricingRef.current) {
// //       pricingRef.current.scrollIntoView({ behavior: 'smooth' })
// //     }
// //   }

// //   // ─── InView hooks ───
// //   const heroInView = useInView(heroRef, { once: true, margin: '-100px' })
// //   const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' })
// //   const whyInView = useInView(whyRef, { once: true, margin: '-100px' })
// //   const industryInView = useInView(industryRef, { once: true, margin: '-100px' })
// //   const startInView = useInView(startRef, { once: true, margin: '-100px' })

// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
// //   }
// //   const itemVariants = {
// //     hidden: { opacity: 0, y: 30 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
// //   }

// //   // ─── CTA Banner Components ───
// //   const DPriceCtaBannerLight = () => (
// //     <motion.div
// //       className="bk-price-cta-light"
// //       initial={{ opacity: 0, y: 20 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true }}
// //       transition={{ duration: 0.7 }}
// //     >
// //       <div className="cta-content">
// //         <span className="cta-text">Check out your price and find the perfect plan for your business.</span>
// //       </div>
// //       <button className="cta-btn cta-btn-solid" onClick={scrollToPricing}>
// //         <span>Calculate Your Price</span>
// //         <HiArrowRight />
// //       </button>
// //     </motion.div>
// //   )

// //   const DPriceCtaBannerDark = () => (
// //     <motion.div
// //       className="bk-price-cta-dark"
// //       initial={{ opacity: 0, y: 20 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true }}
// //       transition={{ duration: 0.7 }}
// //     >
// //       <div className="cta-content">
// //         <span className="cta-text">Ready for accurate, stress-free pricing? Let's talk.</span>
// //       </div>
// //       <button className="cta-btn cta-btn-outline" onClick={scrollToPricing}>
// //         <span>Estimate My Price</span>
// //         <HiArrowRight />
// //       </button>
// //     </motion.div>
// //   )

// //   // ─── Render ───
// //   return (
// //     <>
// //       <Navbar />
// //       <main>
// //         {/* ─── HERO ─── */}
// //         <section className="df-hero" ref={heroRef}>
// //           <div className="df-hero-bg">
// //             <div className="df-hero-bg-img" style={{ backgroundImage: `url(${BgImage1})` }} />
// //             <div className="df-hero-overlay" />
// //           </div>
// //           <div className="df-hero-orbs">
// //             <div className="df-orb df-orb-1" />
// //             <div className="df-orb df-orb-2" />
// //             <div className="df-orb df-orb-3" />
// //           </div>
// //           <div className="df-hero-container">
// //             <motion.div
// //               className="df-hero-grid"
// //               variants={containerVariants}
// //               initial="hidden"
// //               animate={heroInView ? 'visible' : 'hidden'}
// //             >
// //               <motion.div className="df-hero-left" variants={itemVariants}>
// //                 <div className="df-hero-badge">
// //                   <HiOutlineCheckCircle className="df-badge-icon" />
// //                   <span>Shared Services</span>
// //                   <span className="df-badge-pulse" />
// //                 </div>
// //                 <h1 className="df-hero-title">
// //                   Your Business Deserves a Digital Presence That Works As Hard As You Do
// //                 </h1>
// //                 <p className="df-hero-desc">
// //                   From your website to your search rankings, social channels to cloud infrastructure we manage every layer of your digital footprint so you show up, stand out, and stay secure.
// //                 </p>
// //                 <div className="df-locations">
// //                   <HiOutlineGlobeAlt className="df-locations-icon" />
// //                   {locations.map((loc, i) => (
// //                     <span key={i} className="df-location-item">
// //                       {i > 0 && <span className="df-location-sep">|</span>}
// //                       {loc}
// //                     </span>
// //                   ))}
// //                 </div>
// //                 <div className="df-hero-ctas">
// //                   <button className="df-btn-primary" onClick={scrollToPricing}>
// //                     <span>Get Started Today</span>
// //                     <HiArrowRight />
// //                   </button>
// //                 </div>
// //                 <div className="df-hero-pills">
// //                   {features.map((f, i) => {
// //                     const Icon = f.icon
// //                     return (
// //                       <div key={i} className="df-pill">
// //                         <Icon />
// //                         <span>{f.label}</span>
// //                       </div>
// //                     )
// //                   })}
// //                 </div>
// //               </motion.div>

// //               <motion.div className="df-hero-right" variants={itemVariants}>
// //                 <div className="df-price-card">
// //                   <div className="df-price-card-glow" />
// //                   <p className="df-price-tagline">
// //                     Complete digital presence management for your business
// //                   </p>
// //                   <button className="df-btn-primary df-price-cta" onClick={scrollToPricing}>
// //                     <span>Start Now</span>
// //                     <HiArrowRight />
// //                   </button>
// //                 </div>
// //                 <div className="df-stats-grid">
// //                   {stats.map((s, i) => {
// //                     const Icon = s.icon
// //                     return (
// //                       <motion.div
// //                         key={i}
// //                         className="df-stat-card"
// //                         initial={{ opacity: 0, y: 20, scale: 0.9 }}
// //                         animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
// //                         transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
// //                         whileHover={{ y: -4, scale: 1.02 }}
// //                       >
// //                         <div className="df-stat-icon"><Icon /></div>
// //                         <div className="df-stat-info">
// //                           <span className="df-stat-value">{s.value}</span>
// //                           <span className="df-stat-label">{s.label}</span>
// //                         </div>
// //                       </motion.div>
// //                     )
// //                   })}
// //                 </div>
// //               </motion.div>
// //             </motion.div>
// //           </div>
// //           <div className="df-hero-bottom" />
// //         </section>

// //         {/* ─── PRICING SECTION ─── */}
// //         <section className="df-pricing-section" ref={pricingRef}>
// //           <div className="df-section-container">
// //             <div className="df-section-header">
// //               <div className="df-section-label">
// //                 <span className="df-label-line" />
// //                 <span className="df-label-text">Pricing Plans</span>
// //                 <span className="df-label-line" />
// //               </div>
// //               <h2 className="df-section-title">Choose the plan that fits your business</h2>
// //               <p className="df-section-subtitle">
// //                 All plans include core digital presence management. Add extra pages or email addresses as you grow.
// //               </p>
// //             </div>

// //             <div className="df-pricing-grid">
// //               {pricingPlans.map((plan) => (
// //                 <motion.div
// //                   key={plan.id}
// //                   className={`df-pricing-card ${plan.highlight ? 'df-pricing-card-highlight' : ''}`}
// //                   style={{
// //                     borderTop: `4px solid ${plan.color}`,
// //                     background: `linear-gradient(180deg, ${plan.color}08, #f8faff)`,
// //                   }}
// //                   initial={{ opacity: 0, y: 30 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ duration: 0.5 }}
// //                 >
// //                   {plan.highlight && <div className="df-pricing-badge">Most Popular</div>}
// //                   <h3 className="df-pricing-name">{plan.name}</h3>
// //                   <ul className="df-pricing-features">
// //                     {plan.features.map((feat, idx) => (
// //                       <li key={idx}>
// //                         <HiOutlineCheck className="df-pricing-check" /> {feat}
// //                       </li>
// //                     ))}
// //                   </ul>
// //                   <div className="df-pricing-actions">
// //                     <button
// //                       className="df-pricing-btn df-pricing-btn-quote"
// //                       onClick={() => openQuoteModal(plan.id)}
// //                     >
// //                       Get Customized Quote
// //                     </button>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         {/* ─── QUOTE MODAL ─── */}
// //         {modalOpen && selectedPlanId && (
// //           <div className="df-modal-overlay" onClick={closeModal}>
// //             <div className="df-modal" onClick={(e) => e.stopPropagation()}>
// //               <button className="df-modal-close" onClick={closeModal}>×</button>
// //               {(() => {
// //                 const plan = pricingPlans.find(p => p.id === selectedPlanId)
// //                 const total = getPlanTotal(selectedPlanId, addonQuantities)
// //                 const hasAddons = plan.addOns && plan.addOns.length > 0
// //                 // Check if any addon besides seo exists
// //                 const hasCountableAddons = plan.addOns.some(a => a.id !== 'seo')

// //                 if (modalStep === 'calculator') {
// //                   return (
// //                     <>
// //                       <h2 className="df-modal-title">Customise Your {plan.name} Plan</h2>
// //                       <p className="df-modal-sub">
// //                         Select the add‑ons you need. The final price will be shown after you submit your details.
// //                       </p>

// //                       <div className="df-modal-base-price">
// //                         <span className="df-modal-base-label">Base Plan Price</span>
// //                         <span className="df-modal-base-amount">{plan.displayPrice}<span className="df-modal-base-period"> / month</span></span>
// //                       </div>

// //                       {hasAddons && (
// //                         <div className="df-modal-addons">
// //                           <p className="df-modal-addons-label">Customise your plan:</p>
// //                           {plan.addOns.map(a => {
// //                             if (a.id === 'seo') {
// //                               // Static SEO row – no quantity controls
// //                               return (
// //                                 <div key={a.id} className="df-modal-addon-row df-modal-addon-static">
// //                                   <span className="df-modal-addon-label-static" style={{ fontSize: '15px' }}>Extra SEO Keywords – on your request</span>
// //                                 </div>
// //                               )
// //                             }
// //                             return (
// //                               <div key={a.id} className="df-modal-addon-row">
// //                                 <label>{a.label} (${a.price} each)</label>
// //                                 <div className="df-modal-counter">
// //                                   <button onClick={() => updateAddonQty(a.id, -1)}>−</button>
// //                                   <span>{addonQuantities[a.id] || 0}</span>
// //                                   <button onClick={() => updateAddonQty(a.id, 1)}>+</button>
// //                                 </div>
// //                               </div>
// //                             )
// //                           })}
// //                         </div>
// //                       )}

// //                       <button className="df-modal-submit" onClick={goToForm}>
// //                         Continue to Quote
// //                       </button>
// //                     </>
// //                   )
// //                 } else if (modalStep === 'form') {
// //                   return (
// //                     <>
// //                       <h2 className="df-modal-title">Get Your Personalized Quote</h2>
// //                       <p className="df-modal-sub">
// //                         Please enter your contact details and we'll send you a detailed proposal.
// //                       </p>

// //                       <form onSubmit={handleSubmitForm} className="df-modal-form">
// //                         <input
// //                           type="text"
// //                           placeholder="Your Name"
// //                           value={userName}
// //                           onChange={(e) => setUserName(e.target.value)}
// //                           required
// //                         />
// //                         <input
// //                           type="email"
// //                           placeholder="Email Address"
// //                           value={userEmail}
// //                           onChange={(e) => setUserEmail(e.target.value)}
// //                           required
// //                         />
// //                         <input
// //                           type="tel"
// //                           placeholder="Phone Number"
// //                           value={userPhone}
// //                           onChange={(e) => setUserPhone(e.target.value)}
// //                           required
// //                         />
// //                         <div className="df-modal-form-actions">
// //                           <button type="button" className="df-modal-back" onClick={goToCalculator}>
// //                             Back
// //                           </button>
// //                           <button type="submit" className="df-modal-submit">
// //                             Submit & Get Quote
// //                           </button>
// //                         </div>
// //                       </form>
// //                     </>
// //                   )
// //                 } else {
// //                   // submitted state – show total (excluding SEO)
// //                   return (
// //                     <>
// //                       <h2 className="df-modal-title">Quote Submitted</h2>
// //                       <p className="df-modal-sub">
// //                         Thanks, <strong>{userName}</strong>! Your personalised quote for the <strong>{plan.name}</strong> plan is ready.
// //                       </p>

// //                       <div className="df-modal-price-box">
// //                         <span className="df-modal-price-label">Your Estimated Monthly Total</span>
// //                         <div className="df-modal-price-amount">
// //                           ${total.toFixed(2)}
// //                           <span className="df-modal-price-period">/ month</span>
// //                         </div>
// //                         <div className="df-modal-price-breakdown">
// //                           <span>Base: {plan.displayPrice}</span>
// //                           {plan.addOns.map(a => {
// //                             if (a.id === 'seo') return null // skip SEO in breakdown
// //                             const qty = addonQuantities[a.id] || 0
// //                             if (qty === 0) return null
// //                             const cost = qty * a.price
// //                             return <span key={a.id}>+ ${cost} ({qty} × {a.label})</span>
// //                           })}
// //                           {/* Show SEO as a separate non‑priced line */}
// //                           {plan.addOns.some(a => a.id === 'seo') && (
// //                             <span className="df-modal-breakdown-seo" style={{ fontSize: '15px' }}>Extra SEO Keywords – on your request</span>
// //                           )}
// //                         </div>
// //                       </div>

// //                       <div className="df-modal-contact-info">
// //                         <p><strong>Email:</strong> {userEmail}</p>
// //                         <p><strong>Phone:</strong> {userPhone}</p>
// //                       </div>

// //                       <p className="df-modal-sub">
// //                         We'll review your requirements and get back to you within one business day.
// //                       </p>

// //                       <button className="df-modal-submit df-modal-close-btn" onClick={closeModal}>
// //                         Close
// //                       </button>
// //                     </>
// //                   )
// //                 }
// //               })()}
// //             </div>
// //           </div>
// //         )}

// //         {/* ─── OTHER SECTIONS ─── */}
// //         <section className="df-about-section">
// //           <div className="df-section-container">
// //             <div className="df-about-grid">
// //               <div className="df-about-left">
// //                 <div className="df-section-label">
// //                   <span className="df-label-line" />
// //                   <span className="df-label-text">About</span>
// //                   <span className="df-label-line" />
// //                 </div>
// //                 <h2 className="df-section-title">What Is Digital Footprint Management?</h2>
// //                 <p className="df-about-text">
// //                   Your digital footprint is everything your business looks like online your website, your search presence, your social media profiles, your cloud infrastructure, and the data trail you leave across the internet.
// //                 </p>
// //                 <p className="df-about-text">
// //                   Most businesses manage these in silos: one agency for SEO, another for social, a freelancer for the website, and an IT vendor for the servers. The result is inconsistency, gaps in security, and a brand that feels different everywhere people find it.
// //                 </p>
// //                 <p className="df-about-text">
// //                   At Zeta-V, we bring all of it under one roof. Our Digital Footprint service covers your entire online presence  from how you look on Google to how your servers are configured  managed by one team, on one fixed monthly engagement.
// //                 </p>
// //               </div>
// //               <div className="df-about-right">
// //                 <div className="df-about-card">
// //                   <div className="df-about-card-icon"><HiOutlineShieldCheck /></div>
// //                   <h3>Why Choose Zeta-V?</h3>
// //                   <ul className="df-about-list">
// //                     <li><HiOutlineCheck /> Industry-specific digital strategy</li>
// //                     <li><HiOutlineCheck /> Single point of contact for all digital services</li>
// //                     <li><HiOutlineCheck /> Consistent brand voice across every channel</li>
// //                     <li><HiOutlineCheck /> Proactive monitoring, not reactive fixes</li>
// //                     <li><HiOutlineCheck /> Transparent monthly reporting</li>
// //                   </ul>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         <section className="df-services-section" ref={servicesRef}>
// //           <div className="df-section-container">
// //             <div className="df-services-wrapper">
// //               <div className="df-services-left">
// //                 <div className="df-section-header-left">
// //                   <div className="df-section-label">
// //                     <span className="df-label-line" />
// //                     <span className="df-label-text">What We Offer</span>
// //                     <span className="df-label-line" /> <span className="df-label-line" />
// //                   </div>
// //                   <h2 className="df-section-title">Everything We Manage Inside Your Digital World</h2>
// //                   <p className="df-section-subtitle">End-to-end digital presence management tailored to your business size and industry.</p>
// //                 </div>
// //                 <div className="df-services-grid">
// //                   {coreServices.map((s, i) => {
// //                     const Icon = s.icon
// //                     return (
// //                       <motion.div
// //                         key={i}
// //                         className="df-service-card"
// //                         style={{ '--df-card-color': s.color }}
// //                         initial={{ opacity: 0, y: 20 }}
// //                         whileInView={{ opacity: 1, y: 0 }}
// //                         viewport={{ once: true }}
// //                         transition={{ delay: i * 0.04, duration: 0.5 }}
// //                         whileHover={{ y: -6 }}
// //                       >
// //                         <div className="df-service-card-icon" style={{ background: s.gradient }}>
// //                           <Icon />
// //                         </div>
// //                         <h3 className="df-service-card-title">{s.title}</h3>
// //                         <p className="df-service-card-desc">{s.desc}</p>
// //                         <div className="df-service-card-details">
// //                           {s.details.slice(0, 3).map((detail, idx) => (
// //                             <div key={idx} className="df-service-detail">
// //                               <HiOutlineCheck className="df-service-detail-check" />
// //                               <span className="df-service-card-details-p">{detail}</span>
// //                             </div>
// //                           ))}
// //                           {s.details.length > 3 && (
// //                             <div className="df-service-detail-more">+{s.details.length - 3} more</div>
// //                           )}
// //                         </div>
// //                       </motion.div>
// //                     )
// //                   })}
// //                 </div>
// //               </div>
// //               <div className="df-services-right-side">
// //                 <div className="df-services-right-inner">
// //                   <div className="df-right-icon"><HiArrowTrendingUp /></div>
// //                   <h2 className="df-right-headline">Visible Online.<br /><span>Secure Behind the Scenes.</span></h2>
// //                   <p className="df-right-sub">We manage what people see and what powers it — so your brand performs at every layer.</p>
// //                   <div className="df-right-highlights">
// //                     {highlights.map((h, i) => {
// //                       const Icon = h.icon
// //                       return (
// //                         <div key={i} className="df-right-highlight-item">
// //                           <div className="df-right-highlight-icon"><Icon /></div>
// //                           <div>
// //                             <h4>{h.title}</h4>
// //                             <p>{h.desc}</p>
// //                           </div>
// //                         </div>
// //                       )
// //                     })}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <DPriceCtaBannerLight />
// //         </section>

// //         <section className="df-handle-section">
// //           <div className="df-section-container">
// //             <div className="df-handle-grid">
// //               <div className="df-handle-left">
// //                 <div className="df-section-label">
// //                   <span className="df-label-line" />
// //                   <span className="df-label-text">Everything We Handle</span>
// //                   <span className="df-label-line" />
// //                 </div>
// //                 <h2 className="df-section-title">We Take Care of Every Digital Detail</h2>
// //                 <p className="df-section-subtitle">From daily social posts to monthly server health checks we manage it all.</p>
// //               </div>
// //               <div className="df-handle-right">
// //                 <div className="df-handle-list">
// //                   {whatWeHandle.map((item, i) => (
// //                     <motion.div
// //                       key={i}
// //                       className="df-handle-item"
// //                       initial={{ opacity: 0, x: 20 }}
// //                       whileInView={{ opacity: 1, x: 0 }}
// //                       viewport={{ once: true }}
// //                       transition={{ delay: i * 0.03, duration: 0.4 }}
// //                     >
// //                       <HiOutlineCheck className="df-handle-check" />
// //                       <span>{item}</span>
// //                     </motion.div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         <section className="df-why-choose" ref={whyRef}>
// //           <div className="df-section-container">
// //             <motion.div
// //               className="df-why-grid"
// //               initial={{ opacity: 0 }}
// //               animate={whyInView ? { opacity: 1 } : {}}
// //               transition={{ duration: 0.5 }}
// //             >
// //               <div className="df-why-left">
// //                 <div className="df-section-label">
// //                   <span className="df-label-line" />
// //                   <span className="df-label-text">Why Choose Us</span>
// //                   <span className="df-label-line" />
// //                 </div>
// //                 <h2 className="df-section-title">More Than Digital Management —<br /><span>We Become Your Entire Digital Team</span></h2>
// //                 <p className="df-section-subtitle">Building separate in-house teams for web, social, SEO, IT, and compliance is expensive and hard to coordinate. We bring it all together under one accountable partner.</p>
// //               </div>
// //               <div className="df-why-right">
// //                 {whyChooseUs.map((item, i) => (
// //                   <motion.div
// //                     key={i}
// //                     className="df-why-item"
// //                     initial={{ opacity: 0, x: 20 }}
// //                     animate={whyInView ? { opacity: 1, x: 0 } : {}}
// //                     transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
// //                   >
// //                     <HiOutlineCheck className="df-why-check" />
// //                     <span>{item}</span>
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             </motion.div>
// //           </div>
// //         </section>
// //         <DPriceCtaBannerLight />
// //         <section className="df-industry-section" ref={industryRef}>

// //           <div className="df-section-container">

// //             <div className="df-section-header">
// //               <div className="df-section-label">
// //                 <span className="df-label-line" />
// //                 <span className="df-label-text">Industry Solutions</span>
// //                 <span className="df-label-line" />
// //               </div>
// //               <h2 className="df-section-title">Tailored Digital Strategies By Industry</h2>
// //             </div>
// //             <div className="df-industry-grid">
// //               {industrySolutions.map((item, i) => {
// //                 const Icon = item.icon
// //                 return (
// //                   <motion.div
// //                     key={i}
// //                     className="df-industry-card"
// //                     initial={{ opacity: 0, y: 20 }}
// //                     whileInView={{ opacity: 1, y: 0 }}
// //                     viewport={{ once: true }}
// //                     transition={{ delay: i * 0.04, duration: 0.4 }}
// //                     whileHover={{ y: -4 }}
// //                   >
// //                     <div className="df-industry-card-icon"><Icon /></div>
// //                     <h3 className="df-industry-card-title">{item.industry}</h3>
// //                     <p className="df-industry-card-desc">{item.desc}</p>
// //                   </motion.div>
// //                 )
// //               })}
// //             </div>
// //           </div>

// //         </section>

// //         <section className="df-reports-section">
// //           <div className="df-section-container">
// //             <div className="df-section-label">
// //               <span className="df-label-line" />
// //               <span className="df-label-text">Reports You Receive</span>
// //               <span className="df-label-line" />
// //             </div>
// //             <h2 className="df-section-title">Monthly Reports That Tell You Exactly Where You Stand</h2>
// //             <p className="df-section-subtitle">Every month, you receive clear reports across all service areas  no fluff, just the numbers that matter.</p>
// //             <div className="df-reports-grid">
// //               {reports.map((report, i) => (
// //                 <motion.div
// //                   key={i}
// //                   className="df-report-item"
// //                   initial={{ opacity: 0, y: 20 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: i * 0.04, duration: 0.4 }}
// //                 >
// //                   <HiOutlineDocumentText className="df-report-icon" />
// //                   <span>{report}</span>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </div>
// //           <br />
// //           <DPriceCtaBannerLight />
// //         </section>

// //         <section className="df-tools-section">
// //           <div className="df-section-container">
// //             <div className="df-section-label">
// //               <span className="df-label-line" />
// //               <span className="df-label-text">Tools & Platforms</span>
// //               <span className="df-label-line" />
// //             </div>
// //             <h2 className="df-section-title">Platforms & Tools We Work With</h2>
// //             <div className="df-tools-grid">
// //               {toolsPlatforms.map((tool, i) => (
// //                 <motion.div
// //                   key={i}
// //                   className="df-tool-item"
// //                   initial={{ opacity: 0, scale: 0.9 }}
// //                   whileInView={{ opacity: 1, scale: 1 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: i * 0.06, duration: 0.4 }}
// //                 >
// //                   <div className="df-tool-icon">✓</div>
// //                   <span>{tool}</span>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         <section className="df-steps-section" ref={startRef}>
// //           <div className="df-section-container">
// //             <div className="df-section-label">
// //               <span className="df-label-line" />
// //               <span className="df-label-text">Getting Started</span>
// //               <span className="df-label-line" />
// //             </div>
// //             <h2 className="df-section-title">Getting Started Is Simple</h2>
// //             <div className="df-steps-grid">
// //               {getStartedSteps.map((step, i) => (
// //                 <motion.div
// //                   key={i}
// //                   className="df-step-card"
// //                   initial={{ opacity: 0, y: 30 }}
// //                   animate={startInView ? { opacity: 1, y: 0 } : {}}
// //                   transition={{ delay: i * 0.08, duration: 0.5 }}
// //                 >
// //                   <div className="df-step-number">{step.step}</div>
// //                   <h3 className="df-step-title">{step.title}</h3>
// //                   <p className="df-step-desc">{step.desc}</p>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         <section className="df-final-cta">
// //           <div className="df-section-container">
// //             <div className="df-final-cta-content">
// //               <h2 className="df-final-cta-title">Ready To Build a Digital Presence That Actually Works?</h2>
// //               <p className="df-final-cta-desc">Get a full audit of your current digital footprint – website, SEO, social, IT, and compliance – and see exactly where you stand and what to fix first.</p>
// //               <div className="df-final-cta-actions">
// //                 <Link to="/contact" state={{ scrollTo: 'enquiries' }} className="df-btn-primary">
// //                   <span>Book Your Free Digital Audit</span>
// //                   <HiArrowRight />
// //                 </Link>
// //                 <a href="tel:+912069015402" className="df-btn-secondary">Contact Us Today</a>
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       </main>
// //       <FooterSection />
// //     </>
// //   )
// // }






// // DigitalFootprint.jsx
// import { useRef, useState } from 'react'
// import { motion, useInView } from 'framer-motion'
// import {
//   HiArrowRight,
//   HiOutlineCheckCircle,
//   HiOutlineClock,
//   HiOutlineChartBar,
//   HiOutlineDocumentText,
//   HiArrowTrendingUp,
//   HiOutlineShieldCheck,
//   HiOutlineGlobeAlt,
//   HiOutlineServer,
//   HiOutlineCpuChip,
//   HiOutlineCheck,
//   HiOutlineUserGroup,
//   HiOutlineComputerDesktop,
//   HiOutlineBuildingOffice,
//   HiOutlineBriefcase,
//   HiOutlineHome,
//   HiOutlineShoppingBag,
//   HiOutlineTruck,
//   HiOutlineWrenchScrewdriver,
//   HiOutlinePhone,
//   HiOutlineShare,
//   HiOutlineMegaphone,
//   HiOutlinePencil,
//   HiOutlineStar,
//   HiOutlineCloud,
//   HiOutlineLockClosed,
// } from 'react-icons/hi2'
// import { HiOutlineLocationMarker } from 'react-icons/hi'
// import { Link } from 'react-router-dom'
// import Navbar from '../../Navbar/index'
// import FooterSection from '../../Footer/index'
// import './DigitalFootprint.css'
// import BgImage1 from '../../../assets/pexels/pexels-photo-15.avif'

// // ─── LOCATIONS ───
// const locations = ['Hong Kong', 'India', 'China', 'USA']

// // ─── FEATURE PILLS ───
// const features = [
//   { icon: HiOutlineGlobeAlt, label: 'Web Presence Management' },
//   { icon: HiOutlineLocationMarker, label: 'SEO & Visibility' },
//   { icon: HiOutlineShare, label: 'Social Media Management' },
//   { icon: HiOutlineMegaphone, label: 'Digital Marketing' },
//   { icon: HiOutlinePencil, label: 'Brand Consistency' },
//   { icon: HiOutlineStar, label: 'Online Reputation' },
//   { icon: HiOutlineServer, label: 'Cloud Native Infrastructure' },
//   { icon: HiOutlineLockClosed, label: 'Compliance & Privacy' },
// ]

// // ─── STATS ───
// const stats = [
//   { value: '360°', label: 'Full Digital Coverage', icon: HiOutlineGlobeAlt },
//   { value: '24/7', label: 'Monitoring & Support', icon: HiOutlineClock },
//   { value: '98%', label: 'Brand Consistency', icon: HiOutlineCheckCircle },
//   { value: '5x', label: 'Faster Reporting', icon: HiOutlineChartBar },
// ]

// // ─── HIGHLIGHTS ───
// const highlights = [
//   {
//     icon: HiOutlineClock,
//     title: 'Always On',
//     desc: '24/7 monitoring for your website, servers, and online reputation.',
//   },
//   {
//     icon: HiOutlineShieldCheck,
//     title: 'Audit-Ready',
//     desc: 'Compliance documentation and data privacy policies kept current.',
//   },
//   {
//     icon: HiArrowTrendingUp,
//     title: 'Growth-Focused',
//     desc: 'Digital marketing campaigns built to generate leads, not just clicks.',
//   },
// ]

// // ─── CORE SERVICES ───
// const coreServices = [
//   {
//     icon: HiOutlineGlobeAlt,
//     title: 'Web Presence Management',
//     desc: 'Keep your website fast, updated, and always online.',
//     gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
//     color: '#22a7f0',
//     details: [
//       'Website maintenance and content updates',
//       'Hosting management and uptime monitoring',
//       'Performance optimization (speed, mobile, Core Web Vitals)',
//       'CMS updates, plugin management, security patches',
//       'Landing page creation and updates on demand',
//     ],
//   },
//   {
//     icon: HiOutlineLocationMarker,
//     title: 'SEO & Online Visibility',
//     desc: 'Get found by the right people at the right time.',
//     gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
//     color: '#34d399',
//     details: [
//       'On-page and technical SEO audits and fixes',
//       'Google Business Profile setup and optimization',
//       'Local listings management (Google Maps, Bing Places, Apple Maps)',
//       'Keyword tracking and monthly ranking reports',
//       'Competitor visibility benchmarking',
//     ],
//   },
//   {
//     icon: HiOutlineShare,
//     title: 'Social Media Management',
//     desc: 'Stay active, relevant, and consistent across every platform.',
//     gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
//     color: '#f472b6',
//     details: [
//       'LinkedIn, Instagram, Facebook, and X management',
//       'Monthly content calendar planning and scheduling',
//       'Branded graphics and caption writing',
//       'Community management (comments, DMs, engagement)',
//       'Monthly performance analytics and insights',
//     ],
//   },
//   {
//     icon: HiOutlineMegaphone,
//     title: 'Digital Marketing',
//     desc: 'Reach your audience with campaigns that convert.',
//     gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
//     color: '#f59e0b',
//     details: [
//       'Google Ads and Meta Ads setup and management',
//       'Email marketing campaigns and automation',
//       'Lead generation funnels and landing pages',
//       'A/B testing and performance optimization',
//       'Monthly reporting on spend, reach, and ROI',
//     ],
//   },
//   {
//     icon: HiOutlinePencil,
//     title: 'Brand Consistency',
//     desc: 'One voice, one look — everywhere your business appears.',
//     gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
//     color: '#a78bfa',
//     details: [
//       'Brand guidelines documentation and enforcement',
//       'Audit of all digital touchpoints for brand alignment',
//       'Template creation for social, email, and presentations',
//       'Ensuring consistent tone, colors, and messaging across all channels',
//       'Onboarding new channels or markets with brand-ready assets',
//     ],
//   },
//   {
//     icon: HiOutlineStar,
//     title: 'Online Reputation Management',
//     desc: 'Control the narrative around your business.',
//     gradient: 'linear-gradient(135deg, #f472b6, #f59e0b)',
//     color: '#f472b6',
//     details: [
//       'Google and industry review monitoring',
//       'Review response strategy and execution',
//       'PR mentions tracking across web and news',
//       'Negative content suppression strategy',
//       'Monthly reputation health reports',
//     ],
//   },
//   {
//     icon: HiOutlineServer,
//     title: 'IT Infrastructure Footprint',
//     desc: 'The digital backbone that keeps everything running.',
//     gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
//     color: '#22a7f0',
//     details: [
//       'Cloud setup, configuration, and management (AWS / Azure / GCP)',
//       'Domain and DNS management',
//       'Server monitoring, uptime alerts, and incident response',
//       'Email infrastructure setup (Microsoft 365 / Google Workspace)',
//       'Backup, disaster recovery, and system health checks',
//     ],
//   },
//   {
//     icon: HiOutlineLockClosed,
//     title: 'Compliance & Data Privacy',
//     desc: 'Stay legal, stay trusted.',
//     gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
//     color: '#34d399',
//     details: [
//       'GDPR and data privacy policy documentation',
//       'Cookie consent setup and banner management',
//       'Website accessibility compliance (WCAG basics)',
//       'Data handling audit and gap assessment',
//       'Ongoing compliance monitoring as regulations evolve',
//     ],
//   },
// ]

// // ─── WHAT WE HANDLE ───
// const whatWeHandle = [
//   'Website content updates and maintenance',
//   'Hosting and uptime monitoring',
//   'Google Business Profile management',
//   'Local directory listings and citations',
//   'SEO keyword tracking and optimization',
//   'Social media content creation and scheduling',
//   'Paid ad campaign management (Google & Meta)',
//   'Email campaign creation and automation',
//   'Brand asset management and consistency audits',
//   'Review monitoring and response management',
//   'Cloud infrastructure monitoring',
//   'Domain and DNS management',
//   'Server backups and disaster recovery',
//   'GDPR compliance and cookie management',
//   'Monthly digital performance reporting',
// ]

// // ─── WHY CHOOSE US ───
// const whyChooseUs = [
//   'One team managing your entire digital presence',
//   'Consistent brand voice across every touchpoint',
//   'Proactive monitoring before problems become crises',
//   'Lower cost than hiring multiple in-house specialists',
//   'Fixed monthly engagement with no hidden fees',
//   'Clear monthly reports on every service area',
//   'Rapid response to website issues and IT incidents',
//   'Scalable support as your business grows into new markets',
// ]

// // ─── INDUSTRY SOLUTIONS ───
// const industrySolutions = [
//   { icon: HiOutlineBuildingOffice, industry: 'Manufacturing', desc: 'B2B digital presence, supplier visibility, and LinkedIn authority building' },
//   { icon: HiOutlineBriefcase, industry: 'Professional Services', desc: 'Thought leadership content, SEO, and lead generation campaigns' },
//   { icon: HiOutlineHome, industry: 'Hotels & Hospitality', desc: 'Google listing optimization, review management, and direct booking campaigns' },
//   { icon: HiOutlineBuildingOffice, industry: 'Food & Beverage', desc: 'Instagram and Facebook management, local SEO, and delivery platform presence' },
//   { icon: HiOutlineShoppingBag, industry: 'E-Commerce', desc: 'Product SEO, Google Shopping ads, and email marketing automation' },
//   { icon: HiOutlineShoppingBag, industry: 'Retail', desc: 'Local visibility, social commerce, and seasonal campaign management' },
//   { icon: HiOutlineTruck, industry: 'Real Estate', desc: 'Property listing visibility, Google Ads, and reputation management' },
//   { icon: HiOutlineWrenchScrewdriver, industry: 'IT & Tech Companies', desc: 'LinkedIn strategy, content marketing, and cloud infrastructure management' },
// ]

// // ─── REPORTS ───
// const reports = [
//   'Website Traffic & Performance Report',
//   'SEO Rankings & Keyword Movement Report',
//   'Google Business Profile Insights',
//   'Social Media Reach & Engagement Report',
//   'Paid Ads Spend, Clicks & Conversion Report',
//   'Email Campaign Open Rate & CTR Report',
//   'Online Reputation & Review Summary',
//   'IT Infrastructure Health & Uptime Report',
//   'Brand Consistency Audit Summary',
//   'Compliance Status Update',
// ]

// // ─── TOOLS & PLATFORMS ───
// const toolsPlatforms = [
//   'Google Workspace & Microsoft 365',
//   'Google Ads & Meta Ads Manager',
//   'Google Search Console & Google Analytics',
//   'SEMrush / Ahrefs',
//   'Hootsuite / Buffer / Later',
//   'Mailchimp / HubSpot / ActiveCampaign',
//   'WordPress / Webflow / Shopify',
//   'AWS / Microsoft Azure / Google Cloud',
//   'Cloudflare (DNS & Security)',
//   'GDPR compliance tools',
// ]

// // ─── GET STARTED STEPS ───
// const getStartedSteps = [
//   { step: 1, title: 'Free Digital Audit', desc: 'We assess your current web presence, social profiles, SEO health, and IT setup to identify gaps and opportunities.' },
//   { step: 2, title: 'Strategy & Scope', desc: 'We recommend a tailored package covering the services your business actually needs — nothing more, nothing less.' },
//   { step: 3, title: 'Onboarding & Access', desc: 'We securely collect access to your platforms, tools, and accounts and set up our management workspace.' },
//   { step: 4, title: 'Month 1 — Foundation', desc: 'We fix what\'s broken, align your brand across channels, and launch quick-win campaigns.' },
//   { step: 5, title: 'Ongoing Management', desc: 'Monthly content, campaigns, monitoring, reporting, and continuous optimization — all handled.' },
// ]

// // ─── PRICING PLANS DATA ───
// const pricingPlans = [
//   {
//     id: 'lite',
//     name: 'Lite',
//     price: 499,
//     displayPrice: '$499',
//     features: ['3 pages', 'Hosting'],
//     addOns: [
//       { id: 'pages', label: 'Extra Pages', price: 200 },
//     ],
//     highlight: false,
//     gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
//     color: '#22a7f0',
//   },
//   {
//     id: 'standard',
//     name: 'Standard',
//     price: 999,
//     displayPrice: '$999',
//     features: ['5 pages', 'Hosting', 'Domain', '5+ email ids'],
//     addOns: [
//       { id: 'pages', label: 'Extra Pages', price: 200 },
//       { id: 'emails', label: 'Extra Email IDs', price: 10 },
//     ],
//     highlight: false,
//     gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
//     color: '#34d399',
//   },
//   {
//     id: 'business',
//     name: 'Business',
//     price: 1999,
//     displayPrice: '$1999',
//     features: ['10 pages', 'Hosting', 'Domain', '5+ email ids', 'SSL', 'SEO (5 words)'],
//     addOns: [
//       { id: 'pages', label: 'Extra Pages', price: 200 },
//       { id: 'emails', label: 'Extra Email IDs', price: 10 },
//       { id: 'seo', label: 'Extra SEO Keywords', price: 0, static: true },
//     ],
//     highlight: true,
//     gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
//     color: '#f472b6',
//   },
//   {
//     id: 'professional',
//     name: 'Professional',
//     price: 2999,
//     displayPrice: '$2999+',
//     features: ['10 pages', 'Hosting', 'Domain', '5+ email ids', 'SSL', 'SEO', 'Integration', 'Social Media'],
//     addOns: [
//       { id: 'pages', label: 'Extra Pages', price: 200 },
//       { id: 'emails', label: 'Extra Email IDs', price: 10 },
//       { id: 'seo', label: 'Extra SEO Keywords', price: 0, static: true },
//       { id: 'integration', label: 'Integration', price: 0, static: true },
//       { id: 'social', label: 'Social Media', price: 0, static: true },
//     ],
//     highlight: false,
//     gradient: 'linear-gradient(135deg, #f97316, #fb923c)',
//     color: '#f97316',
//   },
// ]

// export default function DigitalFootprint() {
//   const heroRef = useRef(null)
//   const pricingRef = useRef(null)
//   const servicesRef = useRef(null)
//   const whyRef = useRef(null)
//   const industryRef = useRef(null)
//   const startRef = useRef(null)

//   // ─── Modal State ───
//   const [modalOpen, setModalOpen] = useState(false)
//   const [selectedPlanId, setSelectedPlanId] = useState(null)
//   const [modalStep, setModalStep] = useState('calculator') // 'calculator' | 'form' | 'submitted'
//   const [userName, setUserName] = useState('')
//   const [userEmail, setUserEmail] = useState('')
//   const [userPhone, setUserPhone] = useState('')
//   const [addonQuantities, setAddonQuantities] = useState({})

//   // ─── Modal Functions ───
//   const openQuoteModal = (planId) => {
//     setSelectedPlanId(planId)
//     setModalStep('calculator')
//     setUserName('')
//     setUserEmail('')
//     setUserPhone('')
//     const plan = pricingPlans.find(p => p.id === planId)
//     if (plan) {
//       const initial = {}
//       plan.addOns.forEach(a => {
//         // Only set quantity for non-static add-ons
//         if (!a.static) {
//           initial[a.id] = 0
//         }
//       })
//       setAddonQuantities(initial)
//     }
//     setModalOpen(true)
//   }

//   const closeModal = () => {
//     setModalOpen(false)
//     setSelectedPlanId(null)
//   }

//   const handleSubmitForm = (e) => {
//     e.preventDefault()
//     setModalStep('submitted')
//     console.log({
//       plan: selectedPlanId,
//       name: userName,
//       email: userEmail,
//       phone: userPhone,
//       addons: addonQuantities,
//       total: getPlanTotal(selectedPlanId, addonQuantities),
//     })
//   }

//   const updateAddonQty = (addonId, delta) => {
//     setAddonQuantities(prev => ({
//       ...prev,
//       [addonId]: Math.max(0, (prev[addonId] || 0) + delta),
//     }))
//   }

//   const getPlanTotal = (planId, quantities) => {
//     const plan = pricingPlans.find(p => p.id === planId)
//     if (!plan) return 0
//     let total = plan.price
//     plan.addOns.forEach(a => {
//       // Skip static add-ons (they have no price contribution)
//       if (a.static) return
//       const qty = quantities[a.id] || 0
//       total += qty * a.price
//     })
//     return total
//   }

//   const goToForm = () => {
//     setModalStep('form')
//   }

//   const goToCalculator = () => {
//     setModalStep('calculator')
//   }

//   const scrollToPricing = () => {
//     if (pricingRef.current) {
//       pricingRef.current.scrollIntoView({ behavior: 'smooth' })
//     }
//   }

//   // ─── InView hooks ───
//   const heroInView = useInView(heroRef, { once: true, margin: '-100px' })
//   const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' })
//   const whyInView = useInView(whyRef, { once: true, margin: '-100px' })
//   const industryInView = useInView(industryRef, { once: true, margin: '-100px' })
//   const startInView = useInView(startRef, { once: true, margin: '-100px' })

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
//   }
//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
//   }

//   // ─── CTA Banner Components ───
//   const DPriceCtaBannerLight = () => (
//     <motion.div
//       className="bk-price-cta-light"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.7 }}
//     >
//       <div className="cta-content">
//         <span className="cta-text">Check out your price and find the perfect plan for your business.</span>
//       </div>
//       <button className="cta-btn cta-btn-solid" onClick={scrollToPricing}>
//         <span>Calculate Your Price</span>
//         <HiArrowRight />
//       </button>
//     </motion.div>
//   )

//   const DPriceCtaBannerDark = () => (
//     <motion.div
//       className="bk-price-cta-dark"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.7 }}
//     >
//       <div className="cta-content">
//         <span className="cta-text">Ready for accurate, stress-free pricing? Let's talk.</span>
//       </div>
//       <button className="cta-btn cta-btn-outline" onClick={scrollToPricing}>
//         <span>Estimate My Price</span>
//         <HiArrowRight />
//       </button>
//     </motion.div>
//   )

//   // ─── Render ───
//   return (
//     <>
//       <Navbar />
//       <main>
//         {/* ─── HERO ─── */}
//         <section className="df-hero" ref={heroRef}>
//           <div className="df-hero-bg">
//             <div className="df-hero-bg-img" style={{ backgroundImage: `url(${BgImage1})` }} />
//             <div className="df-hero-overlay" />
//           </div>
//           <div className="df-hero-orbs">
//             <div className="df-orb df-orb-1" />
//             <div className="df-orb df-orb-2" />
//             <div className="df-orb df-orb-3" />
//           </div>
//           <div className="df-hero-container">
//             <motion.div
//               className="df-hero-grid"
//               variants={containerVariants}
//               initial="hidden"
//               animate={heroInView ? 'visible' : 'hidden'}
//             >
//               <motion.div className="df-hero-left" variants={itemVariants}>
//                 <div className="df-hero-badge">
//                   <HiOutlineCheckCircle className="df-badge-icon" />
//                   <span>Shared Services</span>
//                   <span className="df-badge-pulse" />
//                 </div>
//                 <h1 className="df-hero-title">
//                   Your Business Deserves a Digital Presence That Works As Hard As You Do
//                 </h1>
//                 <p className="df-hero-desc">
//                   From your website to your search rankings, social channels to cloud infrastructure we manage every layer of your digital footprint so you show up, stand out, and stay secure.
//                 </p>
//                 <div className="df-locations">
//                   <HiOutlineGlobeAlt className="df-locations-icon" />
//                   {locations.map((loc, i) => (
//                     <span key={i} className="df-location-item">
//                       {i > 0 && <span className="df-location-sep">|</span>}
//                       {loc}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="df-hero-ctas">
//                   <button className="df-btn-primary" onClick={scrollToPricing}>
//                     <span>Get Started Today</span>
//                     <HiArrowRight />
//                   </button>
//                 </div>
//                 <div className="df-hero-pills">
//                   {features.map((f, i) => {
//                     const Icon = f.icon
//                     return (
//                       <div key={i} className="df-pill">
//                         <Icon />
//                         <span>{f.label}</span>
//                       </div>
//                     )
//                   })}
//                 </div>
//               </motion.div>

//               <motion.div className="df-hero-right" variants={itemVariants}>
//                 <div className="df-price-card">
//                   <div className="df-price-card-glow" />
//                   <p className="df-price-tagline">
//                     Complete digital presence management for your business
//                   </p>
//                   <button className="df-btn-primary df-price-cta" onClick={scrollToPricing}>
//                     <span>Start Now</span>
//                     <HiArrowRight />
//                   </button>
//                 </div>
//                 <div className="df-stats-grid">
//                   {stats.map((s, i) => {
//                     const Icon = s.icon
//                     return (
//                       <motion.div
//                         key={i}
//                         className="df-stat-card"
//                         initial={{ opacity: 0, y: 20, scale: 0.9 }}
//                         animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
//                         transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
//                         whileHover={{ y: -4, scale: 1.02 }}
//                       >
//                         <div className="df-stat-icon"><Icon /></div>
//                         <div className="df-stat-info">
//                           <span className="df-stat-value">{s.value}</span>
//                           <span className="df-stat-label">{s.label}</span>
//                         </div>
//                       </motion.div>
//                     )
//                   })}
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//           <div className="df-hero-bottom" />
//         </section>

//         {/* ─── PRICING SECTION ─── */}
//         <section className="df-pricing-section" ref={pricingRef}>
//           <div className="df-section-container">
//             <div className="df-section-header">
//               <div className="df-section-label">
//                 <span className="df-label-line" />
//                 <span className="df-label-text">Pricing Plans</span>
//                 <span className="df-label-line" />
//               </div>
//               <h2 className="df-section-title">Choose the plan that fits your business</h2>
//               <p className="df-section-subtitle">
//                 All plans include core digital presence management. Add extra pages or email addresses as you grow.
//               </p>
//             </div>

//             <div className="df-pricing-grid">
//               {pricingPlans.map((plan) => (
//                 <motion.div
//                   key={plan.id}
//                   className={`df-pricing-card ${plan.highlight ? 'df-pricing-card-highlight' : ''}`}
//                   style={{
//                     borderTop: `4px solid ${plan.color}`,
//                     background: `linear-gradient(180deg, ${plan.color}08, #f8faff)`,
//                   }}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   {plan.highlight && <div className="df-pricing-badge">Most Popular</div>}
//                   <h3 className="df-pricing-name">{plan.name}</h3>
//                   <ul className="df-pricing-features">
//                     {plan.features.map((feat, idx) => (
//                       <li key={idx}>
//                         <HiOutlineCheck className="df-pricing-check" /> {feat}
//                       </li>
//                     ))}
//                   </ul>
//                   <div className="df-pricing-actions">
//                     <button
//                       className="df-pricing-btn df-pricing-btn-quote"
//                       onClick={() => openQuoteModal(plan.id)}
//                     >
//                       Get Customized Quote
//                     </button>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ─── QUOTE MODAL ─── */}
//         {modalOpen && selectedPlanId && (
//           <div className="df-modal-overlay" onClick={closeModal}>
//             <div className="df-modal" onClick={(e) => e.stopPropagation()}>
//               <button className="df-modal-close" onClick={closeModal}>×</button>
//               {(() => {
//                 const plan = pricingPlans.find(p => p.id === selectedPlanId)
//                 const total = getPlanTotal(selectedPlanId, addonQuantities)
//                 const hasAddons = plan.addOns && plan.addOns.length > 0

//                 if (modalStep === 'calculator') {
//                   return (
//                     <>
//                       <h2 className="df-modal-title">Customise Your {plan.name} Plan</h2>
//                       <p className="df-modal-sub">
//                         Select the add‑ons you need. The final price will be shown after you submit your details.
//                       </p>

//                       <div className="df-modal-base-price">
//                         <span className="df-modal-base-label">Base Plan Price</span>
//                         <span className="df-modal-base-amount">{plan.displayPrice}<span className="df-modal-base-period"> / month</span></span>
//                       </div>

//                       {hasAddons && (
//                         <div className="df-modal-addons">
//                           <p className="df-modal-addons-label">Customise your plan:</p>
//                           {plan.addOns.map(a => {
//                             if (a.static) {
//                               // Static row – no quantity controls
//                               return (
//                                 <div key={a.id} className="df-modal-addon-row df-modal-addon-static">
//                                   <span className="df-modal-addon-label-static" style={{ fontSize: '15px' }}>
//                                     {a.label} – on your request
//                                   </span>
//                                 </div>
//                               )
//                             }
//                             return (
//                               <div key={a.id} className="df-modal-addon-row">
//                                 <label>{a.label} (${a.price} each)</label>
//                                 <div className="df-modal-counter">
//                                   <button onClick={() => updateAddonQty(a.id, -1)}>−</button>
//                                   <span>{addonQuantities[a.id] || 0}</span>
//                                   <button onClick={() => updateAddonQty(a.id, 1)}>+</button>
//                                 </div>
//                               </div>
//                             )
//                           })}
//                         </div>
//                       )}

//                       <button className="df-modal-submit" onClick={goToForm}>
//                         Continue to Quote
//                       </button>
//                     </>
//                   )
//                 } else if (modalStep === 'form') {
//                   return (
//                     <>
//                       <h2 className="df-modal-title">Get Your Personalized Quote</h2>
//                       <p className="df-modal-sub">
//                         Please enter your contact details and we'll send you a detailed proposal.
//                       </p>

//                       <form onSubmit={handleSubmitForm} className="df-modal-form">
//                         <input
//                           type="text"
//                           placeholder="Your Name"
//                           value={userName}
//                           onChange={(e) => setUserName(e.target.value)}
//                           required
//                         />
//                         <input
//                           type="email"
//                           placeholder="Email Address"
//                           value={userEmail}
//                           onChange={(e) => setUserEmail(e.target.value)}
//                           required
//                         />
//                         <input
//                           type="tel"
//                           placeholder="Phone Number"
//                           value={userPhone}
//                           onChange={(e) => setUserPhone(e.target.value)}
//                           required
//                         />
//                         <div className="df-modal-form-actions">
//                           <button type="button" className="df-modal-back" onClick={goToCalculator}>
//                             Back
//                           </button>
//                           <button type="submit" className="df-modal-submit">
//                             Submit & Get Quote
//                           </button>
//                         </div>
//                       </form>
//                     </>
//                   )
//                 } else {
//                   // submitted state – show total (excluding static add-ons)
//                   return (
//                     <>
//                       <h2 className="df-modal-title">Quote Submitted</h2>
//                       <p className="df-modal-sub">
//                         Thanks, <strong>{userName}</strong>! Your personalised quote for the <strong>{plan.name}</strong> plan is ready.
//                       </p>

//                       <div className="df-modal-price-box">
//                         <span className="df-modal-price-label">Your Estimated Monthly Total</span>
//                         <div className="df-modal-price-amount">
//                           ${total.toFixed(2)}
//                           <span className="df-modal-price-period">/ month</span>
//                         </div>
//                         <div className="df-modal-price-breakdown">
//                           <span>Base: {plan.displayPrice}</span>
//                           {plan.addOns.map(a => {
//                             if (a.static) return null // skip static in numeric breakdown
//                             const qty = addonQuantities[a.id] || 0
//                             if (qty === 0) return null
//                             const cost = qty * a.price
//                             return <span key={a.id}>+ ${cost} ({qty} × {a.label})</span>
//                           })}
//                           {/* Show static add-ons as separate lines */}
//                           {plan.addOns.filter(a => a.static).map(a => (
//                             <span key={a.id} className="df-modal-breakdown-seo" style={{ fontSize: '15px' }}>
//                               {a.label} – on your request
//                             </span>
//                           ))}
//                         </div>
//                       </div>

//                       <div className="df-modal-contact-info">
//                         <p><strong>Email:</strong> {userEmail}</p>
//                         <p><strong>Phone:</strong> {userPhone}</p>
//                       </div>

//                       <p className="df-modal-sub">
//                         We'll review your requirements and get back to you within one business day.
//                       </p>

//                       <button className="df-modal-submit df-modal-close-btn" onClick={closeModal}>
//                         Close
//                       </button>
//                     </>
//                   )
//                 }
//               })()}
//             </div>
//           </div>
//         )}

//         {/* ─── OTHER SECTIONS ─── */}
//         <section className="df-about-section">
//           <div className="df-section-container">
//             <div className="df-about-grid">
//               <div className="df-about-left">
//                 <div className="df-section-label">
//                   <span className="df-label-line" />
//                   <span className="df-label-text">About</span>
//                   <span className="df-label-line" />
//                 </div>
//                 <h2 className="df-section-title">What Is Digital Footprint Management?</h2>
//                 <p className="df-about-text">
//                   Your digital footprint is everything your business looks like online your website, your search presence, your social media profiles, your cloud infrastructure, and the data trail you leave across the internet.
//                 </p>
//                 <p className="df-about-text">
//                   Most businesses manage these in silos: one agency for SEO, another for social, a freelancer for the website, and an IT vendor for the servers. The result is inconsistency, gaps in security, and a brand that feels different everywhere people find it.
//                 </p>
//                 <p className="df-about-text">
//                   At Zeta-V, we bring all of it under one roof. Our Digital Footprint service covers your entire online presence  from how you look on Google to how your servers are configured  managed by one team, on one fixed monthly engagement.
//                 </p>
//               </div>
//               <div className="df-about-right">
//                 <div className="df-about-card">
//                   <div className="df-about-card-icon"><HiOutlineShieldCheck /></div>
//                   <h3>Why Choose Zeta-V?</h3>
//                   <ul className="df-about-list">
//                     <li><HiOutlineCheck /> Industry-specific digital strategy</li>
//                     <li><HiOutlineCheck /> Single point of contact for all digital services</li>
//                     <li><HiOutlineCheck /> Consistent brand voice across every channel</li>
//                     <li><HiOutlineCheck /> Proactive monitoring, not reactive fixes</li>
//                     <li><HiOutlineCheck /> Transparent monthly reporting</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="df-services-section" ref={servicesRef}>
//           <div className="df-section-container">
//             <div className="df-services-wrapper">
//               <div className="df-services-left">
//                 <div className="df-section-header-left">
//                   <div className="df-section-label">
//                     <span className="df-label-line" />
//                     <span className="df-label-text">What We Offer</span>
//                     <span className="df-label-line" /> <span className="df-label-line" />
//                   </div>
//                   <h2 className="df-section-title">Everything We Manage Inside Your Digital World</h2>
//                   <p className="df-section-subtitle">End-to-end digital presence management tailored to your business size and industry.</p>
//                 </div>
//                 <div className="df-services-grid">
//                   {coreServices.map((s, i) => {
//                     const Icon = s.icon
//                     return (
//                       <motion.div
//                         key={i}
//                         className="df-service-card"
//                         style={{ '--df-card-color': s.color }}
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: i * 0.04, duration: 0.5 }}
//                         whileHover={{ y: -6 }}
//                       >
//                         <div className="df-service-card-icon" style={{ background: s.gradient }}>
//                           <Icon />
//                         </div>
//                         <h3 className="df-service-card-title">{s.title}</h3>
//                         <p className="df-service-card-desc">{s.desc}</p>
//                         <div className="df-service-card-details">
//                           {s.details.slice(0, 3).map((detail, idx) => (
//                             <div key={idx} className="df-service-detail">
//                               <HiOutlineCheck className="df-service-detail-check" />
//                               <span className="df-service-card-details-p">{detail}</span>
//                             </div>
//                           ))}
//                           {s.details.length > 3 && (
//                             <div className="df-service-detail-more">+{s.details.length - 3} more</div>
//                           )}
//                         </div>
//                       </motion.div>
//                     )
//                   })}
//                 </div>
//               </div>
//               <div className="df-services-right-side">
//                 <div className="df-services-right-inner">
//                   <div className="df-right-icon"><HiArrowTrendingUp /></div>
//                   <h2 className="df-right-headline">Visible Online.<br /><span>Secure Behind the Scenes.</span></h2>
//                   <p className="df-right-sub">We manage what people see and what powers it — so your brand performs at every layer.</p>
//                   <div className="df-right-highlights">
//                     {highlights.map((h, i) => {
//                       const Icon = h.icon
//                       return (
//                         <div key={i} className="df-right-highlight-item">
//                           <div className="df-right-highlight-icon"><Icon /></div>
//                           <div>
//                             <h4>{h.title}</h4>
//                             <p>{h.desc}</p>
//                           </div>
//                         </div>
//                       )
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <DPriceCtaBannerLight />
//         </section>

//         <section className="df-handle-section">
//           <div className="df-section-container">
//             <div className="df-handle-grid">
//               <div className="df-handle-left">
//                 <div className="df-section-label">
//                   <span className="df-label-line" />
//                   <span className="df-label-text">Everything We Handle</span>
//                   <span className="df-label-line" />
//                 </div>
//                 <h2 className="df-section-title">We Take Care of Every Digital Detail</h2>
//                 <p className="df-section-subtitle">From daily social posts to monthly server health checks we manage it all.</p>
//               </div>
//               <div className="df-handle-right">
//                 <div className="df-handle-list">
//                   {whatWeHandle.map((item, i) => (
//                     <motion.div
//                       key={i}
//                       className="df-handle-item"
//                       initial={{ opacity: 0, x: 20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: i * 0.03, duration: 0.4 }}
//                     >
//                       <HiOutlineCheck className="df-handle-check" />
//                       <span>{item}</span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="df-why-choose" ref={whyRef}>
//           <div className="df-section-container">
//             <motion.div
//               className="df-why-grid"
//               initial={{ opacity: 0 }}
//               animate={whyInView ? { opacity: 1 } : {}}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="df-why-left">
//                 <div className="df-section-label">
//                   <span className="df-label-line" />
//                   <span className="df-label-text">Why Choose Us</span>
//                   <span className="df-label-line" />
//                 </div>
//                 <h2 className="df-section-title">More Than Digital Management —<br /><span>We Become Your Entire Digital Team</span></h2>
//                 <p className="df-section-subtitle">Building separate in-house teams for web, social, SEO, IT, and compliance is expensive and hard to coordinate. We bring it all together under one accountable partner.</p>
//               </div>
//               <div className="df-why-right">
//                 {whyChooseUs.map((item, i) => (
//                   <motion.div
//                     key={i}
//                     className="df-why-item"
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={whyInView ? { opacity: 1, x: 0 } : {}}
//                     transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
//                   >
//                     <HiOutlineCheck className="df-why-check" />
//                     <span>{item}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </section>
//         <DPriceCtaBannerLight />
//         <section className="df-industry-section" ref={industryRef}>
//           <div className="df-section-container">
//             <div className="df-section-header">
//               <div className="df-section-label">
//                 <span className="df-label-line" />
//                 <span className="df-label-text">Industry Solutions</span>
//                 <span className="df-label-line" />
//               </div>
//               <h2 className="df-section-title">Tailored Digital Strategies By Industry</h2>
//             </div>
//             <div className="df-industry-grid">
//               {industrySolutions.map((item, i) => {
//                 const Icon = item.icon
//                 return (
//                   <motion.div
//                     key={i}
//                     className="df-industry-card"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: i * 0.04, duration: 0.4 }}
//                     whileHover={{ y: -4 }}
//                   >
//                     <div className="df-industry-card-icon"><Icon /></div>
//                     <h3 className="df-industry-card-title">{item.industry}</h3>
//                     <p className="df-industry-card-desc">{item.desc}</p>
//                   </motion.div>
//                 )
//               })}
//             </div>
//           </div>
//         </section>

//         <section className="df-reports-section">
//           <div className="df-section-container">
//             <div className="df-section-label">
//               <span className="df-label-line" />
//               <span className="df-label-text">Reports You Receive</span>
//               <span className="df-label-line" />
//             </div>
//             <h2 className="df-section-title">Monthly Reports That Tell You Exactly Where You Stand</h2>
//             <p className="df-section-subtitle">Every month, you receive clear reports across all service areas  no fluff, just the numbers that matter.</p>
//             <div className="df-reports-grid">
//               {reports.map((report, i) => (
//                 <motion.div
//                   key={i}
//                   className="df-report-item"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.04, duration: 0.4 }}
//                 >
//                   <HiOutlineDocumentText className="df-report-icon" />
//                   <span>{report}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//           <br />
//           <DPriceCtaBannerLight />
//         </section>

//         <section className="df-tools-section">
//           <div className="df-section-container">
//             <div className="df-section-label">
//               <span className="df-label-line" />
//               <span className="df-label-text">Tools & Platforms</span>
//               <span className="df-label-line" />
//             </div>
//             <h2 className="df-section-title">Platforms & Tools We Work With</h2>
//             <div className="df-tools-grid">
//               {toolsPlatforms.map((tool, i) => (
//                 <motion.div
//                   key={i}
//                   className="df-tool-item"
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.06, duration: 0.4 }}
//                 >
//                   <div className="df-tool-icon">✓</div>
//                   <span>{tool}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section className="df-steps-section" ref={startRef}>
//           <div className="df-section-container">
//             <div className="df-section-label">
//               <span className="df-label-line" />
//               <span className="df-label-text">Getting Started</span>
//               <span className="df-label-line" />
//             </div>
//             <h2 className="df-section-title">Getting Started Is Simple</h2>
//             <div className="df-steps-grid">
//               {getStartedSteps.map((step, i) => (
//                 <motion.div
//                   key={i}
//                   className="df-step-card"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={startInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: i * 0.08, duration: 0.5 }}
//                 >
//                   <div className="df-step-number">{step.step}</div>
//                   <h3 className="df-step-title">{step.title}</h3>
//                   <p className="df-step-desc">{step.desc}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section className="df-final-cta">
//           <div className="df-section-container">
//             <div className="df-final-cta-content">
//               <h2 className="df-final-cta-title">Ready To Build a Digital Presence That Actually Works?</h2>
//               <p className="df-final-cta-desc">Get a full audit of your current digital footprint – website, SEO, social, IT, and compliance – and see exactly where you stand and what to fix first.</p>
//               <div className="df-final-cta-actions">
//                 <Link to="/contact" state={{ scrollTo: 'enquiries' }} className="df-btn-primary">
//                   <span>Book Your Free Digital Audit</span>
//                   <HiArrowRight />
//                 </Link>
//                 <a href="tel:+912069015402" className="df-btn-secondary">Contact Us Today</a>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <FooterSection />
//     </>
//   )
// }




// DigitalFootprint.jsx
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  HiArrowRight,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineChartBar,
  HiOutlineDocumentText,
  HiArrowTrendingUp,
  HiOutlineShieldCheck,
  HiOutlineGlobeAlt,
  HiOutlineServer,
  HiOutlineCpuChip,
  HiOutlineCheck,
  HiOutlineUserGroup,
  HiOutlineComputerDesktop,
  HiOutlineBuildingOffice,
  HiOutlineBriefcase,
  HiOutlineHome,
  HiOutlineShoppingBag,
  HiOutlineTruck,
  HiOutlineWrenchScrewdriver,
  HiOutlinePhone,
  HiOutlineShare,
  HiOutlineMegaphone,
  HiOutlinePencil,
  HiOutlineStar,
  HiOutlineCloud,
  HiOutlineLockClosed,
} from 'react-icons/hi2'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Navbar from '../../Navbar/index'
import FooterSection from '../../Footer/index'
import './DigitalFootprint.css'
import BgImage1 from '../../../assets/pexels/pexels-photo-15.avif'

// ─── LOCATIONS ───
const locations = ['Hong Kong', 'India', 'China', 'USA']

// ─── FEATURE PILLS ───
const features = [
  { icon: HiOutlineGlobeAlt, label: 'Web Presence Management' },
  { icon: HiOutlineLocationMarker, label: 'SEO & Visibility' },
  { icon: HiOutlineShare, label: 'Social Media Management' },
  { icon: HiOutlineMegaphone, label: 'Digital Marketing' },
  { icon: HiOutlinePencil, label: 'Brand Consistency' },
  { icon: HiOutlineStar, label: 'Online Reputation' },
  { icon: HiOutlineServer, label: 'Cloud Native Infrastructure' },
  { icon: HiOutlineLockClosed, label: 'Compliance & Privacy' },
]

// ─── STATS ───
const stats = [
  { value: '360°', label: 'Full Digital Coverage', icon: HiOutlineGlobeAlt },
  { value: '24/7', label: 'Monitoring & Support', icon: HiOutlineClock },
  { value: '98%', label: 'Brand Consistency', icon: HiOutlineCheckCircle },
  { value: '5x', label: 'Faster Reporting', icon: HiOutlineChartBar },
]

// ─── HIGHLIGHTS ───
const highlights = [
  {
    icon: HiOutlineClock,
    title: 'Always On',
    desc: '24/7 monitoring for your website, servers, and online reputation.',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Audit-Ready',
    desc: 'Compliance documentation and data privacy policies kept current.',
  },
  {
    icon: HiArrowTrendingUp,
    title: 'Growth-Focused',
    desc: 'Digital marketing campaigns built to generate leads, not just clicks.',
  },
]

// ─── CORE SERVICES ───
const coreServices = [
  {
    icon: HiOutlineGlobeAlt,
    title: 'Web Presence Management',
    desc: 'Keep your website fast, updated, and always online.',
    gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
    color: '#22a7f0',
    details: [
      'Website maintenance and content updates',
      'Hosting management and uptime monitoring',
      'Performance optimization (speed, mobile, Core Web Vitals)',
      'CMS updates, plugin management, security patches',
      'Landing page creation and updates on demand',
    ],
  },
  {
    icon: HiOutlineLocationMarker,
    title: 'SEO & Online Visibility',
    desc: 'Get found by the right people at the right time.',
    gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
    color: '#34d399',
    details: [
      'On-page and technical SEO audits and fixes',
      'Google Business Profile setup and optimization',
      'Local listings management (Google Maps, Bing Places, Apple Maps)',
      'Keyword tracking and monthly ranking reports',
      'Competitor visibility benchmarking',
    ],
  },
  {
    icon: HiOutlineShare,
    title: 'Social Media Management',
    desc: 'Stay active, relevant, and consistent across every platform.',
    gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    color: '#f472b6',
    details: [
      'LinkedIn, Instagram, Facebook, and X management',
      'Monthly content calendar planning and scheduling',
      'Branded graphics and caption writing',
      'Community management (comments, DMs, engagement)',
      'Monthly performance analytics and insights',
    ],
  },
  {
    icon: HiOutlineMegaphone,
    title: 'Digital Marketing',
    desc: 'Reach your audience with campaigns that convert.',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    color: '#f59e0b',
    details: [
      'Google Ads and Meta Ads setup and management',
      'Email marketing campaigns and automation',
      'Lead generation funnels and landing pages',
      'A/B testing and performance optimization',
      'Monthly reporting on spend, reach, and ROI',
    ],
  },
  {
    icon: HiOutlinePencil,
    title: 'Brand Consistency',
    desc: 'One voice, one look — everywhere your business appears.',
    gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
    color: '#a78bfa',
    details: [
      'Brand guidelines documentation and enforcement',
      'Audit of all digital touchpoints for brand alignment',
      'Template creation for social, email, and presentations',
      'Ensuring consistent tone, colors, and messaging across all channels',
      'Onboarding new channels or markets with brand-ready assets',
    ],
  },
  {
    icon: HiOutlineStar,
    title: 'Online Reputation Management',
    desc: 'Control the narrative around your business.',
    gradient: 'linear-gradient(135deg, #f472b6, #f59e0b)',
    color: '#f472b6',
    details: [
      'Google and industry review monitoring',
      'Review response strategy and execution',
      'PR mentions tracking across web and news',
      'Negative content suppression strategy',
      'Monthly reputation health reports',
    ],
  },
  {
    icon: HiOutlineServer,
    title: 'IT Infrastructure Footprint',
    desc: 'The digital backbone that keeps everything running.',
    gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
    color: '#22a7f0',
    details: [
      'Cloud setup, configuration, and management (AWS / Azure / GCP)',
      'Domain and DNS management',
      'Server monitoring, uptime alerts, and incident response',
      'Email infrastructure setup (Microsoft 365 / Google Workspace)',
      'Backup, disaster recovery, and system health checks',
    ],
  },
  {
    icon: HiOutlineLockClosed,
    title: 'Compliance & Data Privacy',
    desc: 'Stay legal, stay trusted.',
    gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
    color: '#34d399',
    details: [
      'GDPR and data privacy policy documentation',
      'Cookie consent setup and banner management',
      'Website accessibility compliance (WCAG basics)',
      'Data handling audit and gap assessment',
      'Ongoing compliance monitoring as regulations evolve',
    ],
  },
]

// ─── WHAT WE HANDLE ───
const whatWeHandle = [
  'Website content updates and maintenance',
  'Hosting and uptime monitoring',
  'Google Business Profile management',
  'Local directory listings and citations',
  'SEO keyword tracking and optimization',
  'Social media content creation and scheduling',
  'Paid ad campaign management (Google & Meta)',
  'Email campaign creation and automation',
  'Brand asset management and consistency audits',
  'Review monitoring and response management',
  'Cloud infrastructure monitoring',
  'Domain and DNS management',
  'Server backups and disaster recovery',
  'GDPR compliance and cookie management',
  'Monthly digital performance reporting',
]

// ─── WHY CHOOSE US ───
const whyChooseUs = [
  'One team managing your entire digital presence',
  'Consistent brand voice across every touchpoint',
  'Proactive monitoring before problems become crises',
  'Lower cost than hiring multiple in-house specialists',
  'Fixed monthly engagement with no hidden fees',
  'Clear monthly reports on every service area',
  'Rapid response to website issues and IT incidents',
  'Scalable support as your business grows into new markets',
]

// ─── INDUSTRY SOLUTIONS ───
const industrySolutions = [
  { icon: HiOutlineBuildingOffice, industry: 'Manufacturing', desc: 'B2B digital presence, supplier visibility, and LinkedIn authority building' },
  { icon: HiOutlineBriefcase, industry: 'Professional Services', desc: 'Thought leadership content, SEO, and lead generation campaigns' },
  { icon: HiOutlineHome, industry: 'Hotels & Hospitality', desc: 'Google listing optimization, review management, and direct booking campaigns' },
  { icon: HiOutlineBuildingOffice, industry: 'Food & Beverage', desc: 'Instagram and Facebook management, local SEO, and delivery platform presence' },
  { icon: HiOutlineShoppingBag, industry: 'E-Commerce', desc: 'Product SEO, Google Shopping ads, and email marketing automation' },
  { icon: HiOutlineShoppingBag, industry: 'Retail', desc: 'Local visibility, social commerce, and seasonal campaign management' },
  { icon: HiOutlineTruck, industry: 'Real Estate', desc: 'Property listing visibility, Google Ads, and reputation management' },
  { icon: HiOutlineWrenchScrewdriver, industry: 'IT & Tech Companies', desc: 'LinkedIn strategy, content marketing, and cloud infrastructure management' },
]

// ─── REPORTS ───
const reports = [
  'Website Traffic & Performance Report',
  'SEO Rankings & Keyword Movement Report',
  'Google Business Profile Insights',
  'Social Media Reach & Engagement Report',
  'Paid Ads Spend, Clicks & Conversion Report',
  'Email Campaign Open Rate & CTR Report',
  'Online Reputation & Review Summary',
  'IT Infrastructure Health & Uptime Report',
  'Brand Consistency Audit Summary',
  'Compliance Status Update',
]

// ─── TOOLS & PLATFORMS ───
const toolsPlatforms = [
  'Google Workspace & Microsoft 365',
  'Google Ads & Meta Ads Manager',
  'Google Search Console & Google Analytics',
  'SEMrush / Ahrefs',
  'Hootsuite / Buffer / Later',
  'Mailchimp / HubSpot / ActiveCampaign',
  'WordPress / Webflow / Shopify',
  'AWS / Microsoft Azure / Google Cloud',
  'Cloudflare (DNS & Security)',
  'GDPR compliance tools',
]

// ─── GET STARTED STEPS ───
const getStartedSteps = [
  { step: 1, title: 'Free Digital Audit', desc: 'We assess your current web presence, social profiles, SEO health, and IT setup to identify gaps and opportunities.' },
  { step: 2, title: 'Strategy & Scope', desc: 'We recommend a tailored package covering the services your business actually needs — nothing more, nothing less.' },
  { step: 3, title: 'Onboarding & Access', desc: 'We securely collect access to your platforms, tools, and accounts and set up our management workspace.' },
  { step: 4, title: 'Month 1 — Foundation', desc: 'We fix what\'s broken, align your brand across channels, and launch quick-win campaigns.' },
  { step: 5, title: 'Ongoing Management', desc: 'Monthly content, campaigns, monitoring, reporting, and continuous optimization — all handled.' },
]

// ─── PRICING PLANS DATA ───
const pricingPlans = [
  {
    id: 'lite',
    name: 'Lite',
    price: 499,
    displayPrice: '$499',
    features: ['3 pages', 'Hosting'],
    addOns: [
      { id: 'pages', label: 'Extra Pages', price: 200 },
    ],
    highlight: false,
    gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
    color: '#22a7f0',
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 999,
    displayPrice: '$999',
    features: ['5 pages', 'Hosting', 'Domain', '5+ email ids'],
    addOns: [
      { id: 'pages', label: 'Extra Pages', price: 200 },
      { id: 'emails', label: 'Extra Email IDs', price: 10 },
    ],
    highlight: false,
    gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
    color: '#34d399',
  },
  {
    id: 'business',
    name: 'Business',
    price: 1999,
    displayPrice: '$1999',
    features: ['10 pages', 'Hosting', 'Domain', '5+ email ids', 'SSL', 'SEO (5 words)'],
    addOns: [
      { id: 'pages', label: 'Extra Pages', price: 200 },
      { id: 'emails', label: 'Extra Email IDs', price: 10 },
      { id: 'seo', label: 'Extra SEO Keywords', price: 0, static: true },
    ],
    highlight: true,
    gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    color: '#f472b6',
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 2999,
    displayPrice: '$2999+',
    features: ['10 pages', 'Hosting', 'Domain', '5+ email ids', 'SSL', 'SEO', 'Integration', 'Social Media'],
    addOns: [
      { id: 'pages', label: 'Extra Pages', price: 200 },
      { id: 'emails', label: 'Extra Email IDs', price: 10 },
      { id: 'seo', label: 'Extra SEO Keywords', price: 0, static: true },
      { id: 'integration', label: 'Integration', price: 0, static: true },
      { id: 'social', label: 'Social Media', price: 0, static: true },
    ],
    highlight: false,
    gradient: 'linear-gradient(135deg, #f97316, #fb923c)',
    color: '#f97316',
  },
]

// ─── API ENDPOINT ───
const QUOTE_API_URL = 'https://zeta-v-invoicemanagement-ddgwdzg2dchdfaf4.centralindia-01.azurewebsites.net/api/pricing/quote-request-digitalfootprint';

export default function DigitalFootprint() {
  const heroRef = useRef(null)
  const pricingRef = useRef(null)
  const servicesRef = useRef(null)
  const whyRef = useRef(null)
  const industryRef = useRef(null)
  const startRef = useRef(null)

  // ─── Modal State ───
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPlanId, setSelectedPlanId] = useState(null)
  const [modalStep, setModalStep] = useState('calculator') // 'calculator' | 'form' | 'submitted'
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [addonQuantities, setAddonQuantities] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  // ─── Modal Functions ───
  const openQuoteModal = (planId) => {
    setSelectedPlanId(planId)
    setModalStep('calculator')
    setUserName('')
    setUserEmail('')
    setUserPhone('')
    setSubmitError(null)
    const plan = pricingPlans.find(p => p.id === planId)
    if (plan) {
      const initial = {}
      plan.addOns.forEach(a => {
        // Only set quantity for non-static add-ons
        if (!a.static) {
          initial[a.id] = 0
        }
      })
      setAddonQuantities(initial)
    }
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedPlanId(null)
    setIsSubmitting(false)
    setSubmitError(null)
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const plan = pricingPlans.find(p => p.id === selectedPlanId)
      if (!plan) throw new Error('Plan not found')

      // Build addons object – only dynamic add-ons (price > 0 or not static)
      const addonsPayload = {}
      plan.addOns.forEach(a => {
        if (!a.static) {
          addonsPayload[a.id] = addonQuantities[a.id] || 0
        }
      })

      const payload = {
        full_name: userName,
        email: userEmail,
        phone: userPhone,
        plan_id: selectedPlanId,
        addons: addonsPayload,
      }

      const response = await fetch(QUOTE_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || `HTTP error ${response.status}`)
      }

      // Success – move to submitted step
      setModalStep('submitted')
    } catch (err) {
      console.error('Quote submission failed:', err)
      setSubmitError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const updateAddonQty = (addonId, delta) => {
    setAddonQuantities(prev => ({
      ...prev,
      [addonId]: Math.max(0, (prev[addonId] || 0) + delta),
    }))
  }

  const getPlanTotal = (planId, quantities) => {
    const plan = pricingPlans.find(p => p.id === planId)
    if (!plan) return 0
    let total = plan.price
    plan.addOns.forEach(a => {
      // Skip static add-ons (they have no price contribution)
      if (a.static) return
      const qty = quantities[a.id] || 0
      total += qty * a.price
    })
    return total
  }

  const goToForm = () => {
    setModalStep('form')
    setSubmitError(null)
  }

  const goToCalculator = () => {
    setModalStep('calculator')
    setSubmitError(null)
  }

  const scrollToPricing = () => {
    if (pricingRef.current) {
      pricingRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // ─── InView hooks ───
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' })
  const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' })
  const whyInView = useInView(whyRef, { once: true, margin: '-100px' })
  const industryInView = useInView(industryRef, { once: true, margin: '-100px' })
  const startInView = useInView(startRef, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  // ─── CTA Banner Components ───
  const DPriceCtaBannerLight = () => (
    <motion.div
      className="bk-price-cta-light"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="cta-content">
        <span className="cta-text">Check out your price and find the perfect plan for your business.</span>
      </div>
      <button className="cta-btn cta-btn-solid" onClick={scrollToPricing}>
        <span>Calculate Your Price</span>
        <HiArrowRight />
      </button>
    </motion.div>
  )

  const DPriceCtaBannerDark = () => (
    <motion.div
      className="bk-price-cta-dark"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="cta-content">
        <span className="cta-text">Ready for accurate, stress-free pricing? Let's talk.</span>
      </div>
      <button className="cta-btn cta-btn-outline" onClick={scrollToPricing}>
        <span>Estimate My Price</span>
        <HiArrowRight />
      </button>
    </motion.div>
  )

  // ─── Render ───
  return (
    <>
      <Navbar />
      <main>
        {/* ─── HERO ─── */}
        <section className="df-hero" ref={heroRef}>
          <div className="df-hero-bg">
            <div className="df-hero-bg-img" style={{ backgroundImage: `url(${BgImage1})` }} />
            <div className="df-hero-overlay" />
          </div>
          <div className="df-hero-orbs">
            <div className="df-orb df-orb-1" />
            <div className="df-orb df-orb-2" />
            <div className="df-orb df-orb-3" />
          </div>
          <div className="df-hero-container">
            <motion.div
              className="df-hero-grid"
              variants={containerVariants}
              initial="hidden"
              animate={heroInView ? 'visible' : 'hidden'}
            >
              <motion.div className="df-hero-left" variants={itemVariants}>
                <div className="df-hero-badge">
                  <HiOutlineCheckCircle className="df-badge-icon" />
                  <span>Shared Services</span>
                  <span className="df-badge-pulse" />
                </div>
                <h1 className="df-hero-title">
                  Your Business Deserves a Digital Presence That Works As Hard As You Do
                </h1>
                <p className="df-hero-desc">
                  From your website to your search rankings, social channels to cloud infrastructure we manage every layer of your digital footprint so you show up, stand out, and stay secure.
                </p>
                <div className="df-locations">
                  <HiOutlineGlobeAlt className="df-locations-icon" />
                  {locations.map((loc, i) => (
                    <span key={i} className="df-location-item">
                      {i > 0 && <span className="df-location-sep">|</span>}
                      {loc}
                    </span>
                  ))}
                </div>
                <div className="df-hero-ctas">
                  <button className="df-btn-primary" onClick={scrollToPricing}>
                    <span>Get Started Today</span>
                    <HiArrowRight />
                  </button>
                </div>
                <div className="df-hero-pills">
                  {features.map((f, i) => {
                    const Icon = f.icon
                    return (
                      <div key={i} className="df-pill">
                        <Icon />
                        <span>{f.label}</span>
                      </div>
                    )
                  })}
                </div>
              </motion.div>

              <motion.div className="df-hero-right" variants={itemVariants}>
                <div className="df-price-card">
                  <div className="df-price-card-glow" />
                  <p className="df-price-tagline">
                    Complete digital presence management for your business
                  </p>
                  <button className="df-btn-primary df-price-cta" onClick={scrollToPricing}>
                    <span>Start Now</span>
                    <HiArrowRight />
                  </button>
                </div>
                <div className="df-stats-grid">
                  {stats.map((s, i) => {
                    const Icon = s.icon
                    return (
                      <motion.div
                        key={i}
                        className="df-stat-card"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                        whileHover={{ y: -4, scale: 1.02 }}
                      >
                        <div className="df-stat-icon"><Icon /></div>
                        <div className="df-stat-info">
                          <span className="df-stat-value">{s.value}</span>
                          <span className="df-stat-label">{s.label}</span>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className="df-hero-bottom" />
        </section>

        {/* ─── PRICING SECTION ─── */}
        <section className="df-pricing-section" ref={pricingRef}>
          <div className="df-section-container">
            <div className="df-section-header">
              <div className="df-section-label">
                <span className="df-label-line" />
                <span className="df-label-text">Pricing Plans</span>
                <span className="df-label-line" />
              </div>
              <h2 className="df-section-title">Choose the plan that fits your business</h2>
              <p className="df-section-subtitle">
                All plans include core digital presence management. Add extra pages or email addresses as you grow.
              </p>
            </div>

            <div className="df-pricing-grid">
              {pricingPlans.map((plan) => (
                <motion.div
                  key={plan.id}
                  className={`df-pricing-card ${plan.highlight ? 'df-pricing-card-highlight' : ''}`}
                  style={{
                    borderTop: `4px solid ${plan.color}`,
                    background: `linear-gradient(180deg, ${plan.color}08, #f8faff)`,
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {plan.highlight && <div className="df-pricing-badge">Most Popular</div>}
                  <h3 className="df-pricing-name">{plan.name}</h3>
                  <ul className="df-pricing-features">
                    {plan.features.map((feat, idx) => (
                      <li key={idx}>
                        <HiOutlineCheck className="df-pricing-check" /> {feat}
                      </li>
                    ))}
                  </ul>
                  <div className="df-pricing-actions">
                    <button
                      className="df-pricing-btn df-pricing-btn-quote"
                      onClick={() => openQuoteModal(plan.id)}
                    >
                      Get Customized Quote
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── QUOTE MODAL ─── */}
        {modalOpen && selectedPlanId && (
          <div className="df-modal-overlay" onClick={closeModal}>
            <div className="df-modal" onClick={(e) => e.stopPropagation()}>
              <button className="df-modal-close" onClick={closeModal}>×</button>
              {(() => {
                const plan = pricingPlans.find(p => p.id === selectedPlanId)
                const total = getPlanTotal(selectedPlanId, addonQuantities)
                const hasAddons = plan.addOns && plan.addOns.length > 0

                if (modalStep === 'calculator') {
                  return (
                    <>
                      <h2 className="df-modal-title">Customise Your {plan.name} Plan</h2>
                      <p className="df-modal-sub">
                        Select the add‑ons you need. The final price will be shown after you submit your details.
                      </p>

                      <div className="df-modal-base-price">
                        <span className="df-modal-base-label">Base Plan Price</span>
                        <span className="df-modal-base-amount">{plan.displayPrice}<span className="df-modal-base-period"> / month</span></span>
                      </div>

                      {hasAddons && (
                        <div className="df-modal-addons">
                          <p className="df-modal-addons-label">Customise your plan:</p>
                          {plan.addOns.map(a => {
                            if (a.static) {
                              // Static row – no quantity controls
                              return (
                                <div key={a.id} className="df-modal-addon-row df-modal-addon-static">
                                  <span className="df-modal-addon-label-static" style={{ fontSize: '15px' }}>
                                    {a.label} – on your request
                                  </span>
                                </div>
                              )
                            }
                            return (
                              <div key={a.id} className="df-modal-addon-row">
                                <label>{a.label} (${a.price} each)</label>
                                <div className="df-modal-counter">
                                  <button onClick={() => updateAddonQty(a.id, -1)}>−</button>
                                  <span>{addonQuantities[a.id] || 0}</span>
                                  <button onClick={() => updateAddonQty(a.id, 1)}>+</button>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      )}

                      <button className="df-modal-submit" onClick={goToForm}>
                        Continue to Quote
                      </button>
                    </>
                  )
                } else if (modalStep === 'form') {
                  return (
                    <>
                      <h2 className="df-modal-title">Get Your Personalized Quote</h2>
                      <p className="df-modal-sub">
                        Please enter your contact details and we'll send you a detailed proposal.
                      </p>

                      {submitError && (
                        <div className="df-modal-error">
                          {submitError}
                        </div>
                      )}

                      <form onSubmit={handleSubmitForm} className="df-modal-form">
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          required
                          disabled={isSubmitting}
                        />
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={userEmail}
                          onChange={(e) => setUserEmail(e.target.value)}
                          required
                          disabled={isSubmitting}
                        />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          value={userPhone}
                          onChange={(e) => setUserPhone(e.target.value)}
                          required
                          disabled={isSubmitting}
                        />
                        <div className="df-modal-form-actions">
                          <button
                            type="button"
                            className="df-modal-back"
                            onClick={goToCalculator}
                            disabled={isSubmitting}
                          >
                            Back
                          </button>
                          <button
                            type="submit"
                            className="df-modal-submit"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? 'Submitting...' : 'Submit & Get Quote'}
                          </button>
                        </div>
                      </form>
                    </>
                  )
                } else {
                  // submitted state – show total (excluding static add-ons)
                  return (
                    <>
                      <h2 className="df-modal-title">Quote Submitted</h2>
                      <p className="df-modal-sub">
                        Thanks, <strong>{userName}</strong>! Your personalised quote for the <strong>{plan.name}</strong> plan is ready.
                      </p>

                      <div className="df-modal-price-box">
                        <span className="df-modal-price-label">Your Estimated Monthly Total</span>
                        <div className="df-modal-price-amount">
                          ${total.toFixed(2)}
                          <span className="df-modal-price-period">/ month</span>
                        </div>
                        <div className="df-modal-price-breakdown">
                          <span>Base: {plan.displayPrice}</span>
                          {plan.addOns.map(a => {
                            if (a.static) return null // skip static in numeric breakdown
                            const qty = addonQuantities[a.id] || 0
                            if (qty === 0) return null
                            const cost = qty * a.price
                            return <span key={a.id}>+ ${cost} ({qty} × {a.label})</span>
                          })}
                          {/* Show static add-ons as separate lines */}
                          {plan.addOns.filter(a => a.static).map(a => (
                            <span key={a.id} className="df-modal-breakdown-seo" style={{ fontSize: '15px' }}>
                              {a.label} – on your request
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="df-modal-contact-info">
                        <p><strong>Email:</strong> {userEmail}</p>
                        <p><strong>Phone:</strong> {userPhone}</p>
                      </div>

                      <p className="df-modal-sub">
                        We'll review your requirements and get back to you within one business day.
                      </p>

                      <button className="df-modal-submit df-modal-close-btn" onClick={closeModal}>
                        Close
                      </button>
                    </>
                  )
                }
              })()}
            </div>
          </div>
        )}

        {/* ─── OTHER SECTIONS ─── */}
        <section className="df-about-section">
          <div className="df-section-container">
            <div className="df-about-grid">
              <div className="df-about-left">
                <div className="df-section-label">
                  <span className="df-label-line" />
                  <span className="df-label-text">About</span>
                  <span className="df-label-line" />
                </div>
                <h2 className="df-section-title">What Is Digital Footprint Management?</h2>
                <p className="df-about-text">
                  Your digital footprint is everything your business looks like online your website, your search presence, your social media profiles, your cloud infrastructure, and the data trail you leave across the internet.
                </p>
                <p className="df-about-text">
                  Most businesses manage these in silos: one agency for SEO, another for social, a freelancer for the website, and an IT vendor for the servers. The result is inconsistency, gaps in security, and a brand that feels different everywhere people find it.
                </p>
                <p className="df-about-text">
                  At Zeta-V, we bring all of it under one roof. Our Digital Footprint service covers your entire online presence  from how you look on Google to how your servers are configured  managed by one team, on one fixed monthly engagement.
                </p>
              </div>
              <div className="df-about-right">
                <div className="df-about-card">
                  <div className="df-about-card-icon"><HiOutlineShieldCheck /></div>
                  <h3>Why Choose Zeta-V?</h3>
                  <ul className="df-about-list">
                    <li><HiOutlineCheck /> Industry-specific digital strategy</li>
                    <li><HiOutlineCheck /> Single point of contact for all digital services</li>
                    <li><HiOutlineCheck /> Consistent brand voice across every channel</li>
                    <li><HiOutlineCheck /> Proactive monitoring, not reactive fixes</li>
                    <li><HiOutlineCheck /> Transparent monthly reporting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="df-services-section" ref={servicesRef}>
          <div className="df-section-container">
            <div className="df-services-wrapper">
              <div className="df-services-left">
                <div className="df-section-header-left">
                  <div className="df-section-label">
                    <span className="df-label-line" />
                    <span className="df-label-text">What We Offer</span>
                    <span className="df-label-line" /> <span className="df-label-line" />
                  </div>
                  <h2 className="df-section-title">Everything We Manage Inside Your Digital World</h2>
                  <p className="df-section-subtitle">End-to-end digital presence management tailored to your business size and industry.</p>
                </div>
                <div className="df-services-grid">
                  {coreServices.map((s, i) => {
                    const Icon = s.icon
                    return (
                      <motion.div
                        key={i}
                        className="df-service-card"
                        style={{ '--df-card-color': s.color }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04, duration: 0.5 }}
                        whileHover={{ y: -6 }}
                      >
                        <div className="df-service-card-icon" style={{ background: s.gradient }}>
                          <Icon />
                        </div>
                        <h3 className="df-service-card-title">{s.title}</h3>
                        <p className="df-service-card-desc">{s.desc}</p>
                        <div className="df-service-card-details">
                          {s.details.slice(0, 3).map((detail, idx) => (
                            <div key={idx} className="df-service-detail">
                              <HiOutlineCheck className="df-service-detail-check" />
                              <span className="df-service-card-details-p">{detail}</span>
                            </div>
                          ))}
                          {s.details.length > 3 && (
                            <div className="df-service-detail-more">+{s.details.length - 3} more</div>
                          )}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
              <div className="df-services-right-side">
                <div className="df-services-right-inner">
                  <div className="df-right-icon"><HiArrowTrendingUp /></div>
                  <h2 className="df-right-headline">Visible Online.<br /><span>Secure Behind the Scenes.</span></h2>
                  <p className="df-right-sub">We manage what people see and what powers it — so your brand performs at every layer.</p>
                  <div className="df-right-highlights">
                    {highlights.map((h, i) => {
                      const Icon = h.icon
                      return (
                        <div key={i} className="df-right-highlight-item">
                          <div className="df-right-highlight-icon"><Icon /></div>
                          <div>
                            <h4>{h.title}</h4>
                            <p>{h.desc}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DPriceCtaBannerLight />
        </section>

        <section className="df-handle-section">
          <div className="df-section-container">
            <div className="df-handle-grid">
              <div className="df-handle-left">
                <div className="df-section-label">
                  <span className="df-label-line" />
                  <span className="df-label-text">Everything We Handle</span>
                  <span className="df-label-line" />
                </div>
                <h2 className="df-section-title">We Take Care of Every Digital Detail</h2>
                <p className="df-section-subtitle">From daily social posts to monthly server health checks we manage it all.</p>
              </div>
              <div className="df-handle-right">
                <div className="df-handle-list">
                  {whatWeHandle.map((item, i) => (
                    <motion.div
                      key={i}
                      className="df-handle-item"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03, duration: 0.4 }}
                    >
                      <HiOutlineCheck className="df-handle-check" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="df-why-choose" ref={whyRef}>
          <div className="df-section-container">
            <motion.div
              className="df-why-grid"
              initial={{ opacity: 0 }}
              animate={whyInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="df-why-left">
                <div className="df-section-label">
                  <span className="df-label-line" />
                  <span className="df-label-text">Why Choose Us</span>
                  <span className="df-label-line" />
                </div>
                <h2 className="df-section-title">More Than Digital Management —<br /><span>We Become Your Entire Digital Team</span></h2>
                <p className="df-section-subtitle">Building separate in-house teams for web, social, SEO, IT, and compliance is expensive and hard to coordinate. We bring it all together under one accountable partner.</p>
              </div>
              <div className="df-why-right">
                {whyChooseUs.map((item, i) => (
                  <motion.div
                    key={i}
                    className="df-why-item"
                    initial={{ opacity: 0, x: 20 }}
                    animate={whyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  >
                    <HiOutlineCheck className="df-why-check" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        <DPriceCtaBannerLight />
        <section className="df-industry-section" ref={industryRef}>
          <div className="df-section-container">
            <div className="df-section-header">
              <div className="df-section-label">
                <span className="df-label-line" />
                <span className="df-label-text">Industry Solutions</span>
                <span className="df-label-line" />
              </div>
              <h2 className="df-section-title">Tailored Digital Strategies By Industry</h2>
            </div>
            <div className="df-industry-grid">
              {industrySolutions.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={i}
                    className="df-industry-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="df-industry-card-icon"><Icon /></div>
                    <h3 className="df-industry-card-title">{item.industry}</h3>
                    <p className="df-industry-card-desc">{item.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="df-reports-section">
          <div className="df-section-container">
            <div className="df-section-label">
              <span className="df-label-line" />
              <span className="df-label-text">Reports You Receive</span>
              <span className="df-label-line" />
            </div>
            <h2 className="df-section-title">Monthly Reports That Tell You Exactly Where You Stand</h2>
            <p className="df-section-subtitle">Every month, you receive clear reports across all service areas  no fluff, just the numbers that matter.</p>
            <div className="df-reports-grid">
              {reports.map((report, i) => (
                <motion.div
                  key={i}
                  className="df-report-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                >
                  <HiOutlineDocumentText className="df-report-icon" />
                  <span>{report}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <br />
          <DPriceCtaBannerLight />
        </section>

        <section className="df-tools-section">
          <div className="df-section-container">
            <div className="df-section-label">
              <span className="df-label-line" />
              <span className="df-label-text">Tools & Platforms</span>
              <span className="df-label-line" />
            </div>
            <h2 className="df-section-title">Platforms & Tools We Work With</h2>
            <div className="df-tools-grid">
              {toolsPlatforms.map((tool, i) => (
                <motion.div
                  key={i}
                  className="df-tool-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <div className="df-tool-icon">✓</div>
                  <span>{tool}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="df-steps-section" ref={startRef}>
          <div className="df-section-container">
            <div className="df-section-label">
              <span className="df-label-line" />
              <span className="df-label-text">Getting Started</span>
              <span className="df-label-line" />
            </div>
            <h2 className="df-section-title">Getting Started Is Simple</h2>
            <div className="df-steps-grid">
              {getStartedSteps.map((step, i) => (
                <motion.div
                  key={i}
                  className="df-step-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={startInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <div className="df-step-number">{step.step}</div>
                  <h3 className="df-step-title">{step.title}</h3>
                  <p className="df-step-desc">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="df-final-cta">
          <div className="df-section-container">
            <div className="df-final-cta-content">
              <h2 className="df-final-cta-title">Ready To Build a Digital Presence That Actually Works?</h2>
              <p className="df-final-cta-desc">Get a full audit of your current digital footprint – website, SEO, social, IT, and compliance – and see exactly where you stand and what to fix first.</p>
              <div className="df-final-cta-actions">
                <Link to="/contact" state={{ scrollTo: 'enquiries' }} className="df-btn-primary">
                  <span>Book Your Free Digital Audit</span>
                  <HiArrowRight />
                </Link>
                <a href="tel:+912069015402" className="df-btn-secondary">Contact Us Today</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}