

// BookkeepingServices.jsx - Updated with all requested changes
import { useState, useMemo, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  HiArrowRight,
  HiOutlineCurrencyDollar,
  HiOutlineUsers,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineChartBar,
  HiOutlineDocumentText,
  HiArrowTrendingUp,
  HiOutlineShieldCheck,
  HiOutlineBuildingLibrary,
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
} from 'react-icons/hi2'
import { FaFileInvoice, FaCalculator, FaHandshake, FaPiggyBank } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from '../../Navbar/index'
import FooterSection from '../../Footer/index'
import './BookkeepingServices.css'
import bookkeepingBg from '../../../assets/images/book.webp'
import { CirclePoundSterling } from 'lucide-react'

// ─── STATS ───
const stats = [
  { value: '60%', label: 'Lower Cost Than In-House', icon: HiOutlineCurrencyDollar },
  { value: '98%', label: 'Data Accuracy', icon: HiOutlineCheckCircle },
  { value: '24/7', label: 'Support', icon: HiOutlineClock },
  { value: '5x', label: 'Faster Reporting', icon: HiOutlineChartBar },
]

// ─── FEATURE PILLS ───
const features = [
  { icon: HiOutlineCheckCircle, label: 'Transaction Tracking' },
  { icon: FaFileInvoice, label: 'AR & AP Management' },
  { icon: CirclePoundSterling, label: 'Expense Management' },
  { icon: HiOutlineBuildingLibrary, label: 'Bank Reconciliation' },
  { icon: FaCalculator, label: 'General Ledger' },
  { icon: HiOutlineChartBar, label: 'Financial Reporting' },
  { icon: HiOutlineServer, label: 'Inventory Management' },
  { icon: HiOutlineUserGroup, label: 'Payroll Management' },
]

// ─── LOCATIONS ───
const locations = ['Hong Kong', 'India', 'China', 'USA']

// ─── CORE SERVICES (8 cards) ───
const coreServices = [
  {
    icon: HiOutlineServer,
    title: 'Transaction Tracking',
    desc: 'Sales & purchase recording with precision',
    gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
    color: '#22a7f0',
  },
  {
    icon: HiOutlineCpuChip,
    title: 'AR & AP Management',
    desc: 'Invoicing & payments handled efficiently',
    gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
    color: '#34d399',
  },
  {
    icon: CirclePoundSterling,
    title: 'Expense Management',
    desc: 'Categorized expenses & tax optimization',
    gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    color: '#f472b6',
  },
  {
    icon: HiOutlineChartBar,
    title: 'Bank Reconciliation',
    desc: 'Accurate matching, error-free books',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    color: '#f59e0b',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'General Ledger',
    desc: 'Balanced, up-to-date & audit-ready',
    gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
    color: '#a78bfa',
  },
  {
    icon: HiOutlineDocumentText,
    title: 'Financial Reporting',
    desc: 'Clear reports, actionable insights',
    gradient: 'linear-gradient(135deg, #f472b6, #f59e0b)',
    color: '#f472b6',
  },
  {
    icon: HiOutlineServer,
    title: 'Inventory Management',
    desc: 'Track stock, COGS & inventory valuation',
    gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
    color: '#22a7f0',
  },
  {
    icon: HiOutlineUserGroup,
    title: 'Payroll Management',
    desc: 'Payroll processing & compliance',
    gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
    color: '#34d399',
  },
]

// ─── HIGHLIGHTS ───
const highlights = [
  {
    icon: HiOutlineCheckCircle,
    title: '60% Lower Cost Than In-House',
    desc: 'A full-time U.S. bookkeeper costs $45K–$60K+ annually. Outsourcing is a fraction of that.',
  },
  {
    icon: HiOutlineUserGroup,
    title: 'Special Focus on SME',
    desc: 'Solutions that help small-mid-sized companies scale up while keeping costs in check.',
  },
  {
    icon: HiOutlineClock,
    title: 'On Time and Just-in-Time',
    desc: 'No sick days, no vacations, no turnover. Your books are delivered on a fixed schedule.',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Secure & Confidential',
    desc: 'Encrypted, cloud-based systems with strict access controls. Your data is safe.',
  },
  {
    icon: HiOutlineComputerDesktop,
    title: 'Freedom to Choose Software',
    desc: 'Work on Microsoft Business Central or use your own license to record data.',
  },
]

// ─── WHAT WE HANDLE ───
const whatWeHandle = [
  'Bank & credit card reconciliation',
  'Accounts payable & receivable management',
  'Payroll processing',
  'Inventory & COGS tracking',
  'General ledger maintenance',
  'Financial reporting (P&L, Balance Sheet, Cash Flow)',
  'Expense categorization & tracking',
  'Sales & purchase recording',
  'Sales tax & compliance support',
  'Audit-ready financial statements',
]

// ─── WHY CHOOSE US ───
const whyChooseUs = [
  'Accurate and up-to-date financial records',
  'Weekly bookkeeping and continuous monitoring',
  'Better cash flow visibility',
  'Reduced year-end accounting stress',
  'Scalable support as your business grows',
  'Faster decision-making with financial insights',
  'Secure systems and complete audit trail',
  'Lower cost than hiring full-time bookkeeping staff',
]

// ─── CPA PROCESS ───
const cpaProcess = [
  'Proper categorization of all transactions',
  'Supporting vouchers attached to entries',
  'Complete document paper trail',
  'Bank and credit card reconciliation',
  'Organized backend records',
  'Tax-ready financial statements',
]

// ─── INDUSTRY SOLUTIONS (with bullet points) ───
const industrySolutions = [
  {
    icon: HiOutlineBuildingOffice,
    industry: 'Manufacturing',
    points: [
      'Inventory bookkeeping',
      'COGS tracking',
      'Multi-location reporting',
      'Project reporting',
    ],
  },
  {
    icon: HiOutlineBriefcase,
    industry: 'Professional Services',
    points: [
      'Project Profitability',
      'Contractor Management',
      'Utilization Tracking',
      'Retainer Revenue',
    ],
  },
  {
    icon: HiOutlineHome,
    industry: 'Hotels & Hospitality',
    points: [
      'Sales by Marketplace',
      'Utilisation / Occupancy reports',
      'Vendor / expense reporting',
      'Payroll handling',
    ],
  },
  {
    icon: HiOutlineBuildingLibrary,
    industry: 'Food & Beverage',
    points: [
      'POS reconciliation',
      'Processed food tracking',
      'Tracking wastage',
      'Correct labour costs',
    ],
  },
  {
    icon: HiOutlineShoppingBag,
    industry: 'E‑Commerce',
    points: [
      'Sales by Marketplace',
      'POS reconciliation',
      'Store / Warehouse insights',
      'Multi-channel payment reconciliation by vendors',
    ],
  },
  {
    icon: HiOutlineShoppingBag,
    industry: 'Retail',
    points: [
      'Multi-Channel Complexity',
      'Accurate COGS Tracking',
      'Itemised insights',
      'Multi-channel payment reconciliation by vendors',
    ],
  },
  {
    icon: HiOutlineTruck,
    industry: 'Construction',
    points: [
      'Job Costing Complexity',
      'Subcontractor Tracking',
      'Milestone billing',
      'Project management',
    ],
  },
  {
    icon: HiOutlineWrenchScrewdriver,
    industry: 'Real Estate',
    points: [
      'Acquisition costs',
      'Mortgage costs',
      'Rental revenue management',
      'Property level accounting',
    ],
  },
]

// ─── REPORTS ───
const reports = [
  'Profit & Loss Statement',
  'Balance Sheet',
  'Trial Balance',
  'Cost of Goods Sold (COGS) Report',
  'Accounts Receivable Aging',
  'Accounts Payable Aging',
  'Cash Flow Summary',
  'Outstanding Customer & Vendor Reports',
]

// ─── SOFTWARE SUPPORTED ───
const softwareSupported = [
  'MSFT Business Central',
  'QuickBooks',
  'Zoho Books',
  'SAP Financials',
  'Netsuite',
  'Workday' // Changed from Excel to Workday
]

// ─── GET STARTED STEPS (for the tree) ───
const getStartedSteps = [
  { step: 1, title: 'Free Consultation', desc: 'Discuss your current bookkeeping process and challenges.' },
  { step: 2, title: 'Free Assessment', desc: 'We review your bookkeeping requirements and recommend the right package.' },
  { step: 3, title: 'Onboarding Setup', desc: 'We create your secure workspace and set up your process.' },
  { step: 4, title: 'Share Documents Easily', desc: 'Upload invoices, receipts, and vouchers using SharePoint.' },
  { step: 5, title: 'Weekly Bookkeeping Begins', desc: 'Our team starts maintaining your books and providing ongoing reporting.' },
]

// ─── Variant 1: Light Theme (for white/light sections) ───
const PriceCtaBannerLight = () => (
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
    <Link to="/calculator" state={{ scrollTo: 'calculator-top' }} className="cta-btn cta-btn-solid">
      <span>Calculate Your Price</span>
      <HiArrowRight />
    </Link>
  </motion.div>
)

// ─── Variant 2: Dark Theme (for dark sections) ───
const PriceCtaBannerDark = () => (
  <motion.div
    className="bk-price-cta-dark"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <div className="cta-content">
      <span className="cta-text">Choose your plan and start within 48 hours</span>
    </div>
    <Link to="/calculator" state={{ scrollTo: 'calculator-top' }} className="cta-btn cta-btn-outline">
      <span>Choose My Plan</span>
      <HiArrowRight />
    </Link>
  </motion.div>
)

export default function BookkeepingServices() {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const whyRef = useRef(null)
  const cpaRef = useRef(null)
  const addonRef = useRef(null)
  const startRef = useRef(null)
  const calculatorRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, margin: '-100px' })
  const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' })
  const whyInView = useInView(whyRef, { once: true, margin: '-100px' })
  const cpaInView = useInView(cpaRef, { once: true, margin: '-100px' })
  const addonInView = useInView(addonRef, { once: true, margin: '-100px' })
  const startInView = useInView(startRef, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <>
      <Navbar />
      <main>
        {/* HERO - Dark */}
        <section className="bk-hero" ref={heroRef}>
          <div className="bk-hero-bg">
            <div className="bk-hero-bg-img" style={{ backgroundImage: `url(${bookkeepingBg})` }} />
            <div className="bk-hero-overlay" />
          </div>
          <div className="bk-hero-orbs">
            <div className="bk-orb bk-orb-1" />
            <div className="bk-orb bk-orb-2" />
            <div className="bk-orb bk-orb-3" />
          </div>
          <div className="bk-hero-container">
            <motion.div
              className="bk-hero-grid"
              variants={containerVariants}
              initial="hidden"
              animate={heroInView ? 'visible' : 'hidden'}
            >
              <motion.div className="bk-hero-left" variants={itemVariants}>
                <div className="bk-hero-badge">
                  <HiOutlineCheckCircle className="bk-badge-icon" />
                  <span>Professional Bookkeeping Services</span>
                  <span className="bk-badge-pulse" />
                </div>
                <h1 className="bk-hero-title">
                  Bookkeeping That Powers Your Growth
                </h1>
                <p className="bk-hero-desc">
                  Accurate books. Clear insights. Better business decisions.
                </p>
                <div className="bk-locations">
                  <HiOutlineGlobeAlt className="bk-locations-icon" />
                  {locations.map((loc, i) => (
                    <span key={i} className="bk-location-item">
                      {i > 0 && <span className="bk-location-sep">|</span>}
                      {loc}
                    </span>
                  ))}
                </div>
                <div className="bk-hero-ctas">
                  <Link to="/contact" state={{ scrollTo: 'enquiries' }} className="bk-btn-primary">
                    <span>Get Started Today</span>
                    <HiArrowRight />
                  </Link>
                </div>
                <div className="bk-hero-pills">
                  {features.map((f, i) => {
                    const Icon = f.icon
                    return (
                      <div key={i} className="bk-pill">
                        <Icon />
                        <span>{f.label}</span>
                      </div>
                    )
                  })}
                </div>
              </motion.div>

              <motion.div className="bk-hero-right" variants={itemVariants}>
                <div className="bk-price-card">
                  <div className="bk-price-card-glow" />
                  <div className="bk-price-starting">Package starts from</div>
                  <div className="bk-price-amount">
                    <span className="bk-price-dollar">$</span>499
                  </div>
                  <span className="bk-price-period">per month</span>
                  <p className="bk-price-tagline">
                    Professional bookkeeping for every business size
                  </p>
                  <Link to="/calculator" state={{ scrollTo: 'calculator-top' }} className="bk-btn-primary bk-price-cta-btn">
                    <span>Calculate Your Price</span>
                    <HiArrowRight />
                  </Link>
                </div>
                <div className="bk-stats-grid">
                  {stats.map((s, i) => {
                    const Icon = s.icon
                    return (
                      <motion.div
                        key={i}
                        className="bk-stat-card"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                        whileHover={{ y: -4, scale: 1.02 }}
                      >
                        <div className="bk-stat-icon"><Icon /></div>
                        <div className="bk-stat-info">
                          <span className="bk-stat-value">{s.value}</span>
                          <span className="bk-stat-label">{s.label}</span>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className="bk-hero-bottom" />
        </section>

        {/* WHAT IS OUTSOURCED BOOKKEEPING - White */}
        <section className="bk-about-section">
          <div className="bk-section-container">
            <div className="bk-about-grid">
              <div className="bk-about-left bk-about-expandable">
                <div className="bk-section-label">
                  <span className="bk-label-line" />
                  <span className="bk-label-text">About</span>
                  <span className="bk-label-line" />
                </div>

                <div className="bk-about-heading-wrapper">
                  <h2 className="bk-section-title bk-about-title">
                    What Is Outsourced Bookkeeping?
                    <span className="bk-expand-icon">▾</span>
                  </h2>

                  {/* PRICE CTA after About */}
                  <PriceCtaBannerLight align="center" />
                </div>

                <div className="bk-about-details">
                  <p className="bk-about-text">
                    Outsourced bookkeeping means hiring a dedicated, external professional to manage your day-to-day financial records remotely. Instead of employing an in-house bookkeeper (at 50K+/year), you get a specialist who delivers the same quality — at a fraction of the cost.
                  </p>
                  <p className="bk-about-text">
                    At Zeta-V Technology, your bookkeeper has specific experience in your industry. They know your chart of accounts, your software, and the nuances that generalists miss.
                  </p>
                  <div className="bk-about-benefits">
                    {highlights.slice(0, 3).map((h, i) => {
                      const Icon = h.icon
                      return (
                        <div key={i} className="bk-about-benefit">
                          <Icon className="bk-about-benefit-icon" />
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
              <div className="bk-about-right">
                <div className="bk-about-card">
                  <div className="bk-about-card-icon">
                    <HiOutlineShieldCheck />
                  </div>
                  <h3>Why Choose Zeta-V?</h3>
                  <ul className="bk-about-list">
                    <li><HiOutlineCheck /> Industry-specific expertise</li>
                    <li><HiOutlineCheck /> 60% lower cost than in-house</li>
                    <li><HiOutlineCheck /> Fixed monthly schedule</li>
                    <li><HiOutlineCheck /> Secure & confidential</li>
                    <li><HiOutlineCheck /> Software flexibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE SERVICES - Dark */}
        <section className="bk-services-section" ref={servicesRef}>
          <div className="bk-section-container">
            <div className="bk-services-wrapper">
              {/* LEFT - Service Cards */}
              <div className="bk-services-left">
                <div className="bk-section-header-left">
                  <div className="bk-section-label">
                    <span className="bk-label-line" />
                    <span className="bk-label-text">What We Offer</span>
                    <span className="bk-label-line" />
                  </div>
                  <h2 className="bk-section-title">
                    Everything We Handle Inside Your Books
                  </h2>
                  <p className="bk-section-subtitle">
                    Comprehensive bookkeeping services tailored to your business needs
                  </p>
                </div>
                <div className="bk-services-grid">
                  {coreServices.map((s, i) => {
                    const Icon = s.icon
                    return (
                      <motion.div
                        key={i}
                        className="bk-service-card"
                        style={{ '--bk-card-color': s.color }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, duration: 0.5 }}
                        whileHover={{ y: -6 }}
                      >
                        <div className="bk-service-card-icon" style={{ background: s.gradient }}>
                          <Icon />
                        </div>
                        <h3 className="bk-service-card-title">{s.title}</h3>
                        <p className="bk-service-card-desc">{s.desc}</p>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* RIGHT - Highlights & Contact */}
              <div className="bk-services-right-side">
                <div className="bk-services-right-inner">
                  <div className="bk-right-icon">
                    <HiArrowTrendingUp />
                  </div>
                  <h2 className="bk-right-headline">
                    Clear Financials.<br />
                    <span>Confident Decisions.</span>
                  </h2>
                  <p className="bk-right-sub">
                    We handle your numbers so you can focus on what matters — growing your business.
                  </p>
                  <div className="bk-right-highlights">
                    <div className="bk-right-highlight-item">
                      <div className="bk-right-highlight-icon">
                        <HiOutlineCheckCircle />
                      </div>
                      <div>
                        <h4>Tax-Ready</h4>
                        <p>Organized books, stress-free filing.</p>
                      </div>
                    </div>
                    <div className="bk-right-highlight-item">
                      <div className="bk-right-highlight-icon">
                        <HiArrowTrendingUp />
                      </div>
                      <div>
                        <h4>Data-Driven</h4>
                        <p>Real-time visibility for smarter decisions.</p>
                      </div>
                    </div>
                    <div className="bk-right-highlight-item">
                      <div className="bk-right-highlight-icon">
                        <HiOutlineShieldCheck />
                      </div>
                      <div>
                        <h4>Secure & Confidential</h4>
                        <p>Industry-leading security for your peace of mind.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE HANDLE - White */}
        <section className="bk-handle-section">
          <div className="bk-section-container">
            <div className="bk-handle-grid">
              <div className="bk-handle-left">
                <div className="bk-section-label">
                  <span className="bk-label-line" />
                  <span className="bk-label-text">Everything We Handle</span>
                  <span className="bk-label-line" />
                </div>
                <h2 className="bk-section-title">
                  We Take Care of Every Detail
                </h2>
                <p className="bk-section-subtitle">
                  From daily transactions to monthly closing, we manage it all.
                </p>
              </div>
              <div className="bk-handle-right">
                <div className="bk-handle-list">
                  {whatWeHandle.map((item, i) => (
                    <motion.div
                      key={i}
                      className="bk-handle-item"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04, duration: 0.4 }}
                    >
                      <HiOutlineCheck className="bk-handle-check" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICE CTA after What We Handle */}
        <PriceCtaBannerLight align="center" />

        {/* WHY CHOOSE US - Dark */}
        <section className="bk-why-choose" ref={whyRef}>
          <div className="bk-section-container">
            <motion.div
              className="bk-why-grid"
              initial={{ opacity: 0 }}
              animate={whyInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="bk-why-left">
                <div className="bk-section-label">
                  <span className="bk-label-line" />
                  <span className="bk-label-text">Why Choose Us</span>
                  <span className="bk-label-line" />
                </div>
                <h2 className="bk-section-title">
                  More Than Bookkeeping <br />
                  <span>We Become Your Finance Support Team</span>
                </h2>
                <p className="bk-section-subtitle">
                  Managing finances should not feel like a second full-time job. We handle the daily financial work so you can focus on running and growing your business.
                </p>
              </div>
              <div className="bk-why-right">
                {whyChooseUs.map((item, i) => (
                  <motion.div
                    key={i}
                    className="bk-why-item"
                    initial={{ opacity: 0, x: 20 }}
                    animate={whyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  >
                    <HiOutlineCheck className="bk-why-check" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CPA-READY BOOKS - White */}
        <section className="bk-cpa-section" ref={cpaRef}>
          <div className="bk-section-container">
            <motion.div
              className="bk-cpa-grid"
              initial={{ opacity: 0 }}
              animate={cpaInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="bk-cpa-left">
                <div className="bk-section-label">
                  <span className="bk-label-line" />
                  <span className="bk-label-text">Always Ready</span>
                  <span className="bk-label-line" />
                </div>
                <h2 className="bk-section-title">
                  CPA-Ready Books-Always
                </h2>
                <p className="bk-section-subtitle">
                  No More Last-Minute Tax Season Stress. We maintain your books throughout the year and keep them organized for your CPA.
                </p>
                <div className="bk-cpa-features">
                  {cpaProcess.map((item, i) => (
                    <motion.div
                      key={i}
                      className="bk-cpa-feature"
                      initial={{ opacity: 0, x: 20 }}
                      animate={cpaInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                    >
                      <HiOutlineCheck className="bk-cpa-feature-check" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="bk-cpa-right">
                <div className="bk-cpa-card">
                  <div className="bk-cpa-card-icon">
                    <HiOutlineShieldCheck />
                  </div>
                  <h3>Clean Books, Happy CPA</h3>
                  <p>Your CPA receives clean books and supporting documentation, making tax preparation faster and easier.</p>
                  <div className="bk-cpa-card-badge">✓ CPA-Ready</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* INDUSTRY SOLUTIONS - Dark (with bullet points) */}
        <section className="bk-industry-section" ref={addonRef}>
          <div className="bk-section-container">
            <div className="bk-section-header">
              <div className="bk-section-label">
                <span className="bk-label-line" />
                <span className="bk-label-text">Industry Solutions</span>
                <span className="bk-label-line" />
              </div>
              <h2 className="bk-section-title">
                Tailored Packages By Industry
              </h2>
            </div>
            <div className="bk-industry-grid">
              {industrySolutions.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={i}
                    className="bk-industry-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="bk-industry-card-icon">
                      <Icon />
                    </div>
                    <h3 className="bk-industry-card-title">{item.industry}</h3>
                    <ul className="bk-industry-points">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="bk-industry-point">
                          <span className="bk-point-dot" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </div>
          </div>
          {/* PRICE CTA after Industry */}
          <br />
          <PriceCtaBannerDark align="center" />
        </section>

        {/* REPORTS - White */}
        <section className="bk-reports-section">
          <div className="bk-section-container">
            <div className="bk-section-label">
              <span className="bk-label-line" />
              <span className="bk-label-text">Reports You Receive</span>
              <span className="bk-label-line" />
            </div>
            <h2 className="bk-section-title">
              Financial Reports That Help You Make Decisions
            </h2>
            <p className="bk-section-subtitle">
              You receive easy-to-understand financial reports including:
            </p>
            <div className="bk-reports-grid">
              {reports.map((report, i) => (
                <motion.div
                  key={i}
                  className="bk-report-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                >
                  <HiOutlineDocumentText className="bk-report-icon" />
                  <span>{report}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICE CTA after Reports */}
        <PriceCtaBannerLight align="center" />

        {/* SOFTWARE SUPPORTED - Dark */}
        <section className="bk-software-section">
          <div className="bk-section-container">
            <div className="bk-section-label bk-software-label">
              <span className="bk-label-line bk-software-label-line" />
              <span className="bk-label-text bk-software-label-text">Software We Support</span>
              <span className="bk-label-line" />
            </div>
            <h2 className="bk-section-title bk-software-title">
              Software Packages We Support
            </h2>
            <div className="bk-software-grid">
              {softwareSupported.map((software, i) => (
                <motion.div
                  key={i}
                  className="bk-software-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <div className="bk-software-icon">✓</div>
                  <span>{software}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* GETTING STARTED STEPS - Dark (Tree / Timeline) */}
        <section className="bk-steps-section bk-steps-dark" ref={startRef}>
          <div className="bk-section-container">
            <div className="bk-steps-label-dark">
              <span className="bk-label-line bk-steps-label-line-dark" />
              <span className="bk-label-text bk-steps-label-text-dark">Getting Started</span>
            </div>
            <h2 className="bk-section-title bk-steps-title-dark">
              Getting Started Is Simple
            </h2>
            <div className="bk-steps-tree">
              {getStartedSteps.map((step, i) => (
                <motion.div
                  key={i}
                  className={`bk-step-tree-item ${i % 2 === 0 ? 'bk-step-left' : 'bk-step-right'}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  animate={startInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  {i < getStartedSteps.length - 1 && (
                    <div className="bk-step-tree-connector" />
                  )}
                  <div className="bk-step-tree-content">
                    <div className="bk-step-tree-number">{step.step}</div>
                    <div className="bk-step-tree-info">
                      <h3 className="bk-step-tree-title">{step.title}</h3>
                      <p className="bk-step-tree-desc">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA - White */}
        <section className="bk-final-cta bk-final-cta-white">
          <div className="bk-section-container">
            <div className="bk-final-cta-content bk-final-cta-content-white">
              <h2 className="bk-final-cta-title bk-final-cta-title-white">
                Ready To Stop Worrying About Bookkeeping?
              </h2>
              <p className="bk-final-cta-desc bk-final-cta-desc-white">
                Get accurate books, better visibility, and CPA-ready financials without the overhead of building an internal team.
              </p>
              <div className="bk-final-cta-actions bk-final-cta-actions-white">
                <Link to="/contact" state={{ scrollTo: 'enquiries' }} className="bk-btn-primary">
                  <span>Book Your Free Assessment</span>
                  <HiArrowRight />
                </Link>
                <a href="tel:+91 20 1234 5678" className="bk-btn-secondary bk-btn-secondary-white">
                  Call Us Today
                </a>
                <Link to="/calculator" state={{ scrollTo: 'calculator-top' }} className="bk-btn-primary bk-price-cta-btn">
                  <span>Calculate Your Price</span>
                  <HiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}