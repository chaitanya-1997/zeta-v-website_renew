





// // PricingCalculator.jsx
// import { useState, useEffect, useMemo } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import {
//   HiArrowRight,
//   HiArrowLeft,
//   HiOutlineCheckCircle,
//   HiOutlineUser,
//   HiOutlinePhone,
//   HiOutlineBuildingOffice,
//   HiOutlineBriefcase,
//   HiOutlineChartBar,
//   HiOutlineClock,
//   HiOutlineShieldCheck,
// } from 'react-icons/hi2'
// import { HiOutlineMail } from 'react-icons/hi'
// import Navbar from '../../Navbar/index'
// import FooterSection from '../../Footer/index'
// import './PricingCalculator.css'
// import { useLocation } from 'react-router-dom'

// // ─── API CONFIGURATION ───
// const API_URL = 'https://zeta-v-invoicemanagement-ddgwdzg2dchdfaf4.centralindia-01.azurewebsites.net/api/pricing/submit'

// // ─── PRICING CONFIG ───
// // NOTE: catch-up/clean-up work is intentionally NOT a fixed dollar amount for any
// // tier except "books are current". Per the source pricing sheet, every catch-up
// // tier (1-3, 3-6, 7-12, 13+ months) is a CUSTOM quote — it must never be added
// // into the automatic monthly total.
// const pricingConfig = {
//   // One-time setup fee. Shown as its own line item, amortized (divided by 12)
//   // only when computing the blended monthly estimate range.
//   setupFee: 399,

//   transactionVolumes: [
//     { label: 'Low vol', sublabel: '10–100', value: '10-100', price: 499 },
//     { label: 'Moderate', sublabel: '100–500', value: '100-500', price: 1199 },
//     { label: 'High', sublabel: '500–1000', value: '500-1000', price: 1799 },
//     { label: 'Enterprise', sublabel: '1000–2000', value: '1000-2000', price: 2599 },
//     { label: 'Enterprise+', sublabel: '2000+', value: '2000+', price: 'Custom' },
//   ],
//   catchUpOptions: [
//     { label: 'No — books are current', value: 'current', isCustom: false },
//     { label: '1-3 months (Minor)', value: '1-3', isCustom: true },
//     { label: '3-6 months (Moderate)', value: '3-6', isCustom: true },
//     { label: '7-12 months (Significant)', value: '7-12', isCustom: true },
//     { label: '13+ months (Major)', value: '13+', isCustom: true },
//   ],
//   accountOptions: [
//     { label: '1-2 accounts', value: '1-2', price: 0 },
//     { label: '3-5 accounts', value: '3-5', price: 150 },
//     { label: '6+ accounts', value: '6+', price: 300 },
//   ],
//   addOnOptions: [
//     { label: 'Accounts Receivable add-on', value: 'ar', price: 200 },
//     { label: 'Accounts Payable add-on', value: 'ap', price: 200 },
//     { label: 'Inventory bookkeeping add-on', value: 'inventory', price: 250 },
//     { label: 'Payroll bookkeeping (1-10 employees)', value: 'payroll', price: 150 },
//     { label: 'Light monthly advisory add-on', value: 'advisory', price: 250 },
//     { label: '3rd-party app integration add-on', value: 'integration', price: 100 },
//   ],
//   frequencyOptions: [
//     { label: 'Weekly', value: 'weekly' },
//     { label: 'Fortnightly', value: 'fortnightly' },
//     { label: 'Monthly', value: 'monthly' },
//   ],
//   entityOptions: [
//     { label: 'Sole Prop / Single LLC', value: 'sole' },
//     { label: 'S Corp', value: 'scorp' },
//     { label: 'C-Corp', value: 'ccorp' },
//     { label: 'Partnership', value: 'partnership' },
//     { label: 'Non Profit', value: 'nonprofit' },
//   ],
//   sectorOptions: [
//     { label: 'Retail', value: 'retail' },
//     { label: 'Manufacturing', value: 'manufacturing' },
//     { label: 'eCommerce', value: 'ecommerce' },
//     { label: 'Hotel', value: 'hotel' },
//     { label: 'F&B', value: 'fb' },
//     { label: 'Real Estate', value: 'realestate' },
//     { label: 'Professional Services', value: 'professional' },
//     { label: 'Others', value: 'others' },
//   ],
//   softwareOptions: [
//     { label: 'MSFT Business Central', value: 'business-central' },
//     { label: 'Quickbooks', value: 'quickbooks' },
//     { label: 'Zoho Books', value: 'zoho' },
//     { label: 'SAP Financials', value: 'sap' },
//     { label: 'Netsuite', value: 'netsuite' },
//     { label: 'Workday', value: 'workday' },
//     { label: 'Not yet decided', value: 'undecided' },
//   ],
// }

// const QUESTIONS = ['transactionVolume', 'catchUp', 'accounts', 'addOns', 'frequency', 'entityType', 'sector', 'software']

// // Round a monthly figure down/up to the nearest $50 to produce a clean estimate
// // range, e.g. 882.25 -> { low: 850, high: 900 }
// function toEstimateRange(amount) {
//   const low = Math.floor(amount / 50) * 50
//   const high = low + 50
//   return { low, high }
// }

// export default function PricingCalculator() {
//   // ─── STATE ───
//   const [step, setStep] = useState(1)
//   const [visibleUpTo, setVisibleUpTo] = useState(0)
//   const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '', company: '', notes: '' })
//   const [userInfoError, setUserInfoError] = useState('')
//   const [pricing, setPricing] = useState({
//     transactionVolume: null,
//     catchUp: null,
//     accounts: null,
//     addOns: [],
//     frequency: null,
//     entityType: null,
//     sector: null,
//     software: null,
//   })
//   const [isSubmitted, setIsSubmitted] = useState(false)
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitError, setSubmitError] = useState(null)
//   const [submissionId, setSubmissionId] = useState(null)

//   const location = useLocation()

//   // ─── SCROLL HANDLING ───
//   useEffect(() => {
//     if (location.state?.scrollTo === 'calculator-top') {
//       const el = document.getElementById('calculator-top')
//       if (el) {
//         el.scrollIntoView({ behavior: 'smooth', block: 'start' })
//         window.history.replaceState({}, document.title)
//       }
//     }
//   }, [location])

//   useEffect(() => {
//     if (isSubmitted) window.scrollTo({ top: 0, behavior: 'smooth' })
//   }, [isSubmitted])

//   // ─── CALCULATIONS ───
//   // Split clearly into: (a) monthly recurring costs we can actually total up,
//   // and (b) the one-time setup fee, which is never folded into the recurring
//   // number directly — only amortized for the final blended estimate.
//   const breakdown = useMemo(() => {
//     const vol = pricingConfig.transactionVolumes.find(v => v.value === pricing.transactionVolume)
//     const bookkeepingCost = vol && typeof vol.price === 'number' ? vol.price : 0

//     const acc = pricingConfig.accountOptions.find(v => v.value === pricing.accounts)
//     const accountCost = acc ? acc.price : 0

//     const addOnLines = pricing.addOns
//       .map(val => pricingConfig.addOnOptions.find(x => x.value === val))
//       .filter(Boolean)
//     const addOnsTotal = addOnLines.reduce((sum, a) => sum + a.price, 0)

//     const cu = pricingConfig.catchUpOptions.find(v => v.value === pricing.catchUp)
//     const catchUpIsCustom = cu ? cu.isCustom : false

//     const volumeIsCustom = vol ? vol.price === 'Custom' : false

//     const recurringTotal = bookkeepingCost + accountCost + addOnsTotal
//     const setupFee = pricingConfig.setupFee
//     const setupFeeMonthly = setupFee / 12

//     const isCustom = volumeIsCustom || catchUpIsCustom

//     let estimate = null
//     if (!isCustom) {
//       estimate = toEstimateRange(recurringTotal + setupFeeMonthly)
//     }

//     return {
//       bookkeepingCost,
//       accountCost,
//       addOnLines,
//       addOnsTotal,
//       catchUpIsCustom,
//       volumeIsCustom,
//       recurringTotal,
//       setupFee,
//       setupFeeMonthly,
//       isCustom,
//       estimate, // { low, high } or null when custom
//     }
//   }, [pricing])

//   const isCustomPrice = breakdown.isCustom

//   const getPriceDisplay = () => {
//     if (isCustomPrice) return 'Custom Quote'
//     if (!breakdown.estimate) return '—'
//     return `$${breakdown.estimate.low.toLocaleString()}–$${breakdown.estimate.high.toLocaleString()}`
//   }

//   const isAllAnswered = useMemo(() => {
//     return pricing.transactionVolume !== null &&
//       pricing.catchUp !== null &&
//       pricing.accounts !== null &&
//       pricing.frequency !== null &&
//       pricing.entityType !== null &&
//       pricing.sector !== null &&
//       pricing.software !== null
//   }, [pricing])

//   // ─── HELPERS ───
//   const getSelectedLabel = (category, value) => {
//     const map = {
//       transactionVolume: pricingConfig.transactionVolumes,
//       catchUp: pricingConfig.catchUpOptions,
//       accounts: pricingConfig.accountOptions,
//       frequency: pricingConfig.frequencyOptions,
//       entityType: pricingConfig.entityOptions,
//       sector: pricingConfig.sectorOptions,
//       software: pricingConfig.softwareOptions,
//     }
//     return (map[category] || []).find(o => o.value === value)?.label || ''
//   }

//   const isQuestionAnswered = (index) => {
//     const key = QUESTIONS[index]
//     if (key === 'addOns') return visibleUpTo > index
//     return pricing[key] !== null
//   }

//   // ─── BACK NAVIGATION (inside questionnaire) ───
//   const goBack = () => {
//     if (visibleUpTo > 0) {
//       setVisibleUpTo(prev => prev - 1)
//       setTimeout(() => {
//         const prevQuestion = document.getElementById(`question-${visibleUpTo - 1}`)
//         if (prevQuestion) prevQuestion.scrollIntoView({ behavior: 'smooth', block: 'center' })
//       }, 150)
//     }
//   }

//   // ─── HANDLERS ───
//   const handleSelect = (category, value, questionIndex) => {
//     setPricing(prev => ({ ...prev, [category]: value }))
//     if (questionIndex < QUESTIONS.length - 1) {
//       setVisibleUpTo(prev => Math.max(prev, questionIndex + 1))
//       setTimeout(() => {
//         const next = document.getElementById(`question-${questionIndex + 1}`)
//         if (next) next.scrollIntoView({ behavior: 'smooth', block: 'center' })
//       }, 150)
//     }
//   }

//   const handleAddOnToggle = (value) => {
//     setPricing(prev => {
//       const curr = [...prev.addOns]
//       const idx = curr.indexOf(value)
//       if (idx > -1) curr.splice(idx, 1)
//       else curr.push(value)
//       return { ...prev, addOns: curr }
//     })
//   }

//   const handleAddOnContinue = () => {
//     setVisibleUpTo(prev => Math.max(prev, 4))
//     setTimeout(() => {
//       const next = document.getElementById('question-4')
//       if (next) next.scrollIntoView({ behavior: 'smooth', block: 'center' })
//     }, 150)
//   }

//   // Step 2
//   const handleUserInfoSubmit = (e) => {
//     e.preventDefault()
//     if (!userInfo.name.trim() || !userInfo.email.trim()) {
//       setUserInfoError('Please enter both name and email')
//       return
//     }
//     if (!userInfo.email.includes('@')) {
//       setUserInfoError('Please enter a valid email address')
//       return
//     }
//     setUserInfoError('')
//     setStep(3)
//     window.scrollTo({ top: 0, behavior: 'smooth' })
//   }

//   // Step 3 submit
//   const handleFinalSubmit = async (e) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     setSubmitError(null)

//     const payload = {
//       full_name: userInfo.name,
//       work_email: userInfo.email,
//       phone: userInfo.phone || '',
//       company: userInfo.company || '',
//       notes: userInfo.notes || '',
//       transaction_volume: getSelectedLabel('transactionVolume', pricing.transactionVolume),
//       catch_up_work: getSelectedLabel('catchUp', pricing.catchUp),
//       catch_up_is_custom: breakdown.catchUpIsCustom,
//       accounts: getSelectedLabel('accounts', pricing.accounts),
//       add_ons: pricing.addOns.map(v => pricingConfig.addOnOptions.find(a => a.value === v)?.label || v).join(', '),
//       frequency: getSelectedLabel('frequency', pricing.frequency),
//       entity_type: getSelectedLabel('entityType', pricing.entityType),
//       sector: getSelectedLabel('sector', pricing.sector),
//       software: getSelectedLabel('software', pricing.software),
//       setup_fee: breakdown.setupFee,
//       recurring_monthly_total: breakdown.recurringTotal,
//       is_custom_quote: isCustomPrice,
//       price_display: getPriceDisplay(),
//     }

//     try {
//       const response = await fetch(API_URL, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       })
//       const data = await response.json()
//       if (!response.ok) throw new Error(data.message || 'Something went wrong. Please try again.')
//       setSubmissionId(data.submission_id || null)
//       setIsSubmitted(true)
//     } catch (err) {
//       setSubmitError(err.message || 'Network error. Please check your connection and try again.')
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const resetAll = () => {
//     setIsSubmitted(false)
//     setStep(1)
//     setVisibleUpTo(0)
//     setPricing({ transactionVolume: null, catchUp: null, accounts: null, addOns: [], frequency: null, entityType: null, sector: null, software: null })
//     setUserInfo({ name: '', email: '', phone: '', company: '', notes: '' })
//     setUserInfoError('')
//     setSubmitError(null)
//     setSubmissionId(null)
//     window.scrollTo({ top: 0, behavior: 'smooth' })
//   }

//   // Shared inline styles so the breakdown table can never drift out of
//   // alignment regardless of what's in the external CSS file.
//   const rowStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', width: '100%' }
//   const labelStyle = { textAlign: 'left' }
//   const valueStyle = { textAlign: 'right', fontWeight: 600, whiteSpace: 'nowrap' }

//   // ─── RENDER: STEP 1 (Calculator – no prices shown) ───
//   const renderStep1 = () => (
//     <div className="pc-step pc-step-1">
//       <div className="pc-calc-top">
//         <h2>Bookkeeping Pricing Calculator</h2>
//         <p>Answer quick questions to get your custom price estimate</p>
//         <div className="pc-progress">
//           <div className="pc-progress-bar">
//             <div className="pc-progress-fill" style={{ width: `${(visibleUpTo / (QUESTIONS.length - 1)) * 100}%` }} />
//           </div>
//           <span className="pc-progress-text">{Math.min(visibleUpTo + 1, QUESTIONS.length)}/8</span>
//         </div>
//       </div>

//       <div className="pc-questions-list">
//         {/* Q1: Transaction Volume */}
//         {visibleUpTo >= 0 && (
//           <motion.div id="question-0" className={`pc-question ${isQuestionAnswered(0) ? 'answered' : ''}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
//             <div className="pc-question-header">
//               <span className="pc-q-number">1</span>
//               <div>
//                 <h4>How many transactions does your business average per month?</h4>
//                 <p className="pc-q-hint">Include all bank and credit card transactions combined. If unsure, estimate on the higher side.</p>
//               </div>
//               {isQuestionAnswered(0) && <span className="pc-q-done"><HiOutlineCheckCircle /></span>}
//             </div>
//             <div className="pc-calc-options">
//               {pricingConfig.transactionVolumes.map(opt => (
//                 <button
//                   key={opt.value}
//                   onClick={() => handleSelect('transactionVolume', opt.value, 0)}
//                   className={`pc-calc-btn ${pricing.transactionVolume === opt.value ? 'active' : ''}`}
//                 >
//                   {opt.label}
//                   <span className="pc-calc-btn-sub">{opt.sublabel}</span>
//                 </button>
//               ))}
//             </div>
//           </motion.div>
//         )}

//         {/* Q2: Catch-up Work */}
//         {visibleUpTo >= 1 && (
//           <motion.div id="question-1" className={`pc-question ${isQuestionAnswered(1) ? 'answered' : ''}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
//             <div className="pc-question-header">
//               <span className="pc-q-number">2</span>
//               <div>
//                 <h4>Do you need any catch-up or clean-up work?</h4>
//                 <p className="pc-q-hint">This applies if your books aren't current or have reconciliation issues that need correcting before ongoing service begins.</p>
//               </div>
//               {isQuestionAnswered(1) && <span className="pc-q-done"><HiOutlineCheckCircle /></span>}
//             </div>
//             <div className="pc-calc-options">
//               {pricingConfig.catchUpOptions.map(opt => (
//                 <button
//                   key={opt.value}
//                   onClick={() => handleSelect('catchUp', opt.value, 1)}
//                   className={`pc-calc-btn ${pricing.catchUp === opt.value ? 'active' : ''}`}
//                 >
//                   {opt.label}
//                 </button>
//               ))}
//             </div>
//           </motion.div>
//         )}

//         {/* Q3: Number of Accounts */}
//         {visibleUpTo >= 2 && (
//           <motion.div id="question-2" className={`pc-question ${isQuestionAnswered(2) ? 'answered' : ''}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
//             <div className="pc-question-header">
//               <span className="pc-q-number">3</span>
//               <div>
//                 <h4>How many bank and credit card accounts do you have?</h4>
//                 <p className="pc-q-hint">Count all accounts that would need to be reconciled each month.</p>
//               </div>
//               {isQuestionAnswered(2) && <span className="pc-q-done"><HiOutlineCheckCircle /></span>}
//             </div>
//             <div className="pc-calc-options">
//               {pricingConfig.accountOptions.map(opt => (
//                 <button
//                   key={opt.value}
//                   onClick={() => handleSelect('accounts', opt.value, 2)}
//                   className={`pc-calc-btn ${pricing.accounts === opt.value ? 'active' : ''}`}
//                 >
//                   {opt.label}
//                 </button>
//               ))}
//             </div>
//           </motion.div>
//         )}

//         {/* Q4: Add-ons (no prices shown) */}
//         {visibleUpTo >= 3 && (
//           <motion.div id="question-3" className={`pc-question ${visibleUpTo > 3 ? 'answered' : ''}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
//             <div className="pc-question-header">
//               <span className="pc-q-number">4</span>
//               <div>
//                 <h4>Do you need any of these add-on services?</h4>
//                 <p className="pc-q-hint">Select all that apply. These are optional monthly add-ons to core bookkeeping.</p>
//               </div>
//               {visibleUpTo > 3 && <span className="pc-q-done"><HiOutlineCheckCircle /></span>}
//             </div>
//             <div className="pc-calc-addons">
//               {pricingConfig.addOnOptions.map(opt => (
//                 <label key={opt.value} className={`pc-calc-addon ${pricing.addOns.includes(opt.value) ? 'active' : ''}`}>
//                   <span className="pc-calc-addon-label">{opt.label}</span>
//                   {/* Price intentionally hidden */}
//                   <input type="checkbox" checked={pricing.addOns.includes(opt.value)} onChange={() => handleAddOnToggle(opt.value)} />
//                   <span className="pc-calc-addon-checkmark">{pricing.addOns.includes(opt.value) ? '✓' : ''}</span>
//                 </label>
//               ))}
//             </div>
//             {visibleUpTo === 3 && (
//               <button className="pc-addon-continue-btn" onClick={handleAddOnContinue}>
//                 {pricing.addOns.length > 0 ? `Continue with ${pricing.addOns.length} add-on${pricing.addOns.length > 1 ? 's' : ''}` : 'Continue — no add-ons needed'}
//                 <HiArrowRight />
//               </button>
//             )}
//           </motion.div>
//         )}

//         {/* Q5: Frequency */}
//         {visibleUpTo >= 4 && (
//           <motion.div id="question-4" className={`pc-question ${isQuestionAnswered(4) ? 'answered' : ''}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
//             <div className="pc-question-header">
//               <span className="pc-q-number">5</span>
//               <div>
//                 <h4>How frequently would you like your books updated?</h4>
//               </div>
//               {isQuestionAnswered(4) && <span className="pc-q-done"><HiOutlineCheckCircle /></span>}
//             </div>
//             <div className="pc-calc-options">
//               {pricingConfig.frequencyOptions.map(opt => (
//                 <button
//                   key={opt.value}
//                   onClick={() => handleSelect('frequency', opt.value, 4)}
//                   className={`pc-calc-btn ${pricing.frequency === opt.value ? 'active' : ''}`}
//                 >
//                   {opt.label}
//                 </button>
//               ))}
//             </div>
//           </motion.div>
//         )}

//         {/* Q6: Entity Type */}
//         {visibleUpTo >= 5 && (
//           <motion.div id="question-5" className={`pc-question ${isQuestionAnswered(5) ? 'answered' : ''}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
//             <div className="pc-question-header">
//               <span className="pc-q-number">6</span>
//               <div>
//                 <h4>What type of entity is your business?</h4>
//               </div>
//               {isQuestionAnswered(5) && <span className="pc-q-done"><HiOutlineCheckCircle /></span>}
//             </div>
//             <div className="pc-calc-options">
//               {pricingConfig.entityOptions.map(opt => (
//                 <button
//                   key={opt.value}
//                   onClick={() => handleSelect('entityType', opt.value, 5)}
//                   className={`pc-calc-btn ${pricing.entityType === opt.value ? 'active' : ''}`}
//                 >
//                   {opt.label}
//                 </button>
//               ))}
//             </div>
//           </motion.div>
//         )}

//         {/* Q7: Sector */}
//         {visibleUpTo >= 6 && (
//           <motion.div id="question-6" className={`pc-question ${isQuestionAnswered(6) ? 'answered' : ''}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
//             <div className="pc-question-header">
//               <span className="pc-q-number">7</span>
//               <div>
//                 <h4>Which sector describes you best?</h4>
//               </div>
//               {isQuestionAnswered(6) && <span className="pc-q-done"><HiOutlineCheckCircle /></span>}
//             </div>
//             <div className="pc-calc-options pc-calc-options-grid">
//               {pricingConfig.sectorOptions.map(opt => (
//                 <button
//                   key={opt.value}
//                   onClick={() => handleSelect('sector', opt.value, 6)}
//                   className={`pc-calc-btn ${pricing.sector === opt.value ? 'active' : ''}`}
//                 >
//                   {opt.label}
//                 </button>
//               ))}
//             </div>
//           </motion.div>
//         )}

//         {/* Q8: Accounting Software */}
//         {visibleUpTo >= 7 && (
//           <motion.div
//             id="question-7"
//             className={`pc-question ${isQuestionAnswered(7) ? 'answered' : ''}`}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//           >
//             <div className="pc-question-header">
//               <span className="pc-q-number">8</span>
//               <div>
//                 <h4>Which accounting software do you use?</h4>
//                 <p className="pc-q-hint">Select the primary software you use for bookkeeping.</p>
//               </div>
//               {isQuestionAnswered(7) && <span className="pc-q-done"><HiOutlineCheckCircle /></span>}
//             </div>
//             <div className="pc-calc-options pc-calc-options-grid">
//               {pricingConfig.softwareOptions.map(opt => (
//                 <button
//                   key={opt.value}
//                   onClick={() => handleSelect('software', opt.value, 7)}
//                   className={`pc-calc-btn ${pricing.software === opt.value ? 'active' : ''}`}
//                 >
//                   {opt.label}
//                 </button>
//               ))}
//             </div>
//           </motion.div>
//         )}

//         {/* CTA after all questions answered */}
//         <AnimatePresence>
//           {isAllAnswered && visibleUpTo >= 6 && isQuestionAnswered(6) && (
//             <motion.div className="pc-calc-cta" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//               <p className="pc-calc-cta-text">All done! Enter your details to get your custom quote.</p>
//               <button
//                 className="pc-calc-submit active"
//                 onClick={() => { setStep(2); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
//               >
//                 <span>Get Your Custom Quote</span>
//                 <HiArrowRight />
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>

//       </div>
//     </div>
//   )

//   // ─── RENDER: STEP 2 (Name + Email) ───
//   const renderStep2 = () => (
//     <>
//       <div className="pc-step-header">
//         <button onClick={() => setStep(1)} className="pc-btn-back">
//           <HiArrowLeft />
//           Back
//         </button>
//       </div>

//       <div className="pc-step pc-step-2-simple">
//         <div className="pc-step-content">
//           <div className="pc-step-icon">
//             <HiOutlineUser />
//           </div>
//           <h2>Almost there</h2>
//           <p>Enter your details to receive your custom bookkeeping quote</p>

//           <form onSubmit={handleUserInfoSubmit} className="pc-form">
//             <div className="pc-form-group">
//               <label>
//                 <HiOutlineUser />
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your full name"
//                 value={userInfo.name}
//                 onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
//                 required
//               />
//             </div>

//             <div className="pc-form-group">
//               <label>
//                 <HiOutlineMail />
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter your email address"
//                 value={userInfo.email}
//                 onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
//                 required
//               />
//             </div>

//             {userInfoError && (
//               <p className="pc-form-error">{userInfoError}</p>
//             )}

//             <button type="submit" className="pc-btn-primary">
//               Continue to Quote
//               <HiArrowRight />
//             </button>
//           </form>
//           <br />

//           <p className="pc-step-note">
//             <HiOutlineCheckCircle />
//             Your information is secure and will only be used for your quote
//           </p>
//         </div>
//       </div>
//     </>
//   )

//   // ─── RENDER: STEP 3 (Full form + Success) ───
//   const renderStep3 = () => {
//     if (isSubmitted) {
//       return (
//         <div className="pc-step pc-step-3 pc-step-success">
//           <div className="pc-success-content">
//             <div className="pc-success-icon">
//               <HiOutlineCheckCircle />
//             </div>
//             <h2>Thank You!</h2>
//             <p>Your quote request has been submitted successfully.</p>
//             {submissionId && (
//               <p className="pc-success-id">Reference ID: #{submissionId}</p>
//             )}

//             <div className="pc-success-price-reveal">
//               <p className="pc-success-price-label">Your Estimated Monthly Price</p>
//               <motion.p
//                 className="pc-success-price-amount"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3, duration: 0.5 }}
//               >
//                 {getPriceDisplay()}
//                 {!isCustomPrice && <span className="pc-success-price-period">/mo</span>}
//               </motion.p>
//             </div>

//             <p className="pc-success-desc">
//               We will review your information and contact you within 24 hours with your detailed quote.
//             </p>
//             <button onClick={resetAll} className="pc-btn-primary" style={{ width: 'auto', padding: '12px 32px' }}>
//               Start New Quote
//               <HiArrowRight />
//             </button>
//           </div>
//         </div>
//       )
//     }

//     return (
//       <div className="pc-step pc-step-3">
//         <div className="pc-step-header">
//           <button onClick={() => setStep(2)} className="pc-btn-back">
//             <HiArrowLeft />
//             Back
//           </button>
//           <div className="pc-user-badge">
//             <span className="pc-user-name">{userInfo.name}</span>
//             <span className="pc-user-email">{userInfo.email}</span>
//           </div>
//         </div>

//         <div className="pc-final-form">
//           <div className="pc-final-form-header">
//             <div className="pc-final-form-icon">
//               <HiOutlineCheckCircle />
//             </div>
//             <h2>Your Custom Quote</h2>
//             <p>Review your selections and submit to receive your detailed quote</p>
//           </div>

//           {/* ⭐ Itemized price breakdown */}
//           <div className="pc-final-price-summary" style={{ display: 'block', padding: '20px', width: '100%' }}>
//             <div style={{ ...rowStyle, marginBottom: 10 }}>
//               <span style={labelStyle}>Setup Fee <em style={{ opacity: 0.6, fontWeight: 400 }}>(one-time)</em></span>
//               <span style={valueStyle}>${breakdown.setupFee.toLocaleString()}</span>
//             </div>

//             <div style={{ ...rowStyle, marginBottom: 10 }}>
//               <span style={labelStyle}>Bookkeeping cost</span>
//               <span style={valueStyle}>${breakdown.bookkeepingCost.toLocaleString()} / p.m.</span>
//             </div>

//             {breakdown.accountCost > 0 && (
//               <div style={{ ...rowStyle, marginBottom: 10 }}>
//                 <span style={labelStyle}>Accounts reconciliation</span>
//                 <span style={valueStyle}>${breakdown.accountCost.toLocaleString()} / p.m.</span>
//               </div>
//             )}

//             <div style={{ ...rowStyle, marginBottom: 10 }}>
//               <span style={labelStyle}>Books Cleaning charge</span>
//               <span style={valueStyle}>{breakdown.catchUpIsCustom ? 'Custom' : 'NIL'}</span>
//             </div>

//             {breakdown.addOnLines.length > 0 && (
//               <div style={{ marginBottom: 10 }}>
//                 <div style={{ marginBottom: 6 }}>Add-on services chosen</div>
//                 {breakdown.addOnLines.map(a => (
//                   <div key={a.value} style={{ ...rowStyle, paddingLeft: 16, marginBottom: 4 }}>
//                     <span style={labelStyle}>{a.label}</span>
//                     <span style={valueStyle}>${a.price.toLocaleString()} / p.m.</span>
//                   </div>
//                 ))}
//               </div>
//             )}

//             <div style={{ borderTop: '1px solid rgba(0,0,0,0.12)', margin: '14px 0' }} />

//             <div style={{ ...rowStyle }}>
//               <span style={{ ...labelStyle, fontWeight: 700 }}>
//                 {isCustomPrice ? 'Estimated Price' : 'Estimated Price '}
//               </span>
//               <span style={{ ...valueStyle, fontSize: '1.2em' }}>
//                 {getPriceDisplay()}{!isCustomPrice && <span style={{ fontWeight: 400 }}> /mo</span>}
//               </span>
//             </div>

//             {isCustomPrice && (
//               <p style={{ marginTop: 8, opacity: 0.75, fontSize: '0.9em' }}>
//              One of the selected items requires a custom quotation. We will review your request and share the final pricing soon.
//               </p>
//             )}
//           </div>

//           <div className="pc-final-selections">
//             <div className="pc-final-selection-item">
//               <span className="pc-final-selection-label">Transaction Volume</span>
//               <span className="pc-final-selection-value">{getSelectedLabel('transactionVolume', pricing.transactionVolume)}</span>
//             </div>
//             <div className="pc-final-selection-item">
//               <span className="pc-final-selection-label">Catch-up Work</span>
//               <span className="pc-final-selection-value">{getSelectedLabel('catchUp', pricing.catchUp)}</span>
//             </div>
//             <div className="pc-final-selection-item">
//               <span className="pc-final-selection-label">Accounts</span>
//               <span className="pc-final-selection-value">{getSelectedLabel('accounts', pricing.accounts)}</span>
//             </div>
//             <div className="pc-final-selection-item">
//               <span className="pc-final-selection-label">Frequency</span>
//               <span className="pc-final-selection-value">{getSelectedLabel('frequency', pricing.frequency)}</span>
//             </div>
//             <div className="pc-final-selection-item">
//               <span className="pc-final-selection-label">Entity Type</span>
//               <span className="pc-final-selection-value">{getSelectedLabel('entityType', pricing.entityType)}</span>
//             </div>
//             <div className="pc-final-selection-item">
//               <span className="pc-final-selection-label">Sector</span>
//               <span className="pc-final-selection-value">{getSelectedLabel('sector', pricing.sector)}</span>
//             </div>
//             <div className="pc-final-selection-item">
//               <span className="pc-final-selection-label">Accounting Software</span>
//               <span className="pc-final-selection-value">
//                 {getSelectedLabel('software', pricing.software)}
//               </span>
//             </div>
//             {pricing.addOns.length > 0 && (
//               <div className="pc-final-selection-item">
//                 <span className="pc-final-selection-label">Add-ons</span>
//                 <span className="pc-final-selection-value">
//                   {pricing.addOns.map(v => pricingConfig.addOnOptions.find(a => a.value === v)?.label || v).join(', ')}
//                 </span>
//               </div>
//             )}
//           </div>

//           <form onSubmit={handleFinalSubmit} className="pc-final-form-fields">
//             {submitError && (
//               <div className="pc-form-error pc-form-error-submit">{submitError}</div>
//             )}
//             <div className="pc-form-row">
//               <div className="pc-form-group">
//                 <label>
//                   <HiOutlineUser />
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   value={userInfo.name}
//                   onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
//                   required
//                 />
//               </div>
//               <div className="pc-form-group">
//                 <label>
//                   <HiOutlineMail />
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   value={userInfo.email}
//                   onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="pc-form-row">
//               <div className="pc-form-group">
//                 <label>
//                   <HiOutlinePhone />
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   placeholder="Enter your phone number"
//                   value={userInfo.phone}
//                   onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
//                 />
//               </div>
//               <div className="pc-form-group">
//                 <label>
//                   <HiOutlineBuildingOffice />
//                   Company Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter your company name"
//                   value={userInfo.company}
//                   onChange={(e) => setUserInfo({ ...userInfo, company: e.target.value })}
//                 />
//               </div>
//             </div>

//             <div className="pc-form-group pc-form-group-full">
//               <label>
//                 <HiOutlineBriefcase />
//                 Additional Notes
//               </label>
//               <textarea
//                 placeholder="Any additional information you'd like to share..."
//                 rows="3"
//                 value={userInfo.notes}
//                 onChange={(e) => setUserInfo({ ...userInfo, notes: e.target.value })}
//               />
//             </div>

//             <button
//               type="submit"
//               className="pc-btn-primary pc-btn-submit"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? (
//                 <span>Submitting...</span>
//               ) : (
//                 <>
//                   Submit Quote Request
//                   <HiArrowRight />
//                 </>
//               )}
//             </button>
//           </form>

//           <p className="pc-final-note">
//             <HiOutlineCheckCircle />
//             Your information is secure. We'll contact you within 24 hours with your detailed quote.
//           </p>
//         </div>
//       </div>
//     )
//   }

//   // ─── MAIN RENDER ───
//   return (
//     <>
//       <Navbar />
//       <main id="calculator-top">
//         <section className="pc-section">
//           <div className="pc-container">
//             {!isSubmitted && (
//               <div className="pc-steps-indicator">
//                 <div className={`pc-step-dot ${step >= 1 ? 'active' : ''}`}>
//                   <span>1</span>
//                   <span className="pc-step-label">Calculate</span>
//                 </div>
//                 <div className={`pc-step-line ${step >= 2 ? 'active' : ''}`} />
//                 <div className={`pc-step-dot ${step >= 2 ? 'active' : ''}`}>
//                   <span>2</span>
//                   <span className="pc-step-label">Your Details</span>
//                 </div>
//                 <div className={`pc-step-line ${step >= 3 ? 'active' : ''}`} />
//                 <div className={`pc-step-dot ${step >= 3 ? 'active' : ''}`}>
//                   <span>3</span>
//                   <span className="pc-step-label">Get Quote</span>
//                 </div>
//               </div>
//             )}

//             <div className="pc-step-wrapper">
//               <AnimatePresence mode="wait">
//                 {step === 1 && (
//                   <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
//                     {renderStep1()}
//                   </motion.div>
//                 )}
//                 {step === 2 && (
//                   <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
//                     {renderStep2()}
//                   </motion.div>
//                 )}
//                 {step === 3 && (
//                   <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
//                     {renderStep3()}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </section>
//       </main>
//       <FooterSection />
//     </>
//   )
// }












// PricingCalculator.jsx
import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiArrowRight,
  HiArrowLeft,
  HiOutlineCheckCircle,
  HiOutlineUser,
  HiOutlinePhone,
  HiOutlineBuildingOffice,
  HiOutlineBriefcase,
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineShieldCheck,
} from 'react-icons/hi2'
import { HiOutlineMail } from 'react-icons/hi'
import Navbar from '../../Navbar/index'
import FooterSection from '../../Footer/index'
import './PricingCalculator.css'
import { useLocation } from 'react-router-dom'

// ─── API CONFIGURATION ───
const API_URL = 'https://zeta-v-invoicemanagement-ddgwdzg2dchdfaf4.centralindia-01.azurewebsites.net/api/pricing/submit'

// ─── PRICING CONFIG ───
const pricingConfig = {
  setupFee: 399,
  transactionVolumes: [
    { label: 'Low vol', sublabel: '10–100', value: '10-100', price: 499 },
    { label: 'Moderate', sublabel: '100–500', value: '100-500', price: 1199 },
    { label: 'High', sublabel: '500–1000', value: '500-1000', price: 1799 },
    { label: 'Enterprise', sublabel: '1000–2000', value: '1000-2000', price: 2599 },
    { label: 'Enterprise+', sublabel: '2000+', value: '2000+', price: 'Custom' },
  ],
  catchUpOptions: [
    { label: 'No — books are current', value: 'current', isCustom: false },
    { label: '1-3 months (Minor)', value: '1-3', isCustom: true },
    { label: '3-6 months (Moderate)', value: '3-6', isCustom: true },
    { label: '7-12 months (Significant)', value: '7-12', isCustom: true },
    { label: '13+ months (Major)', value: '13+', isCustom: true },
  ],
  accountOptions: [
    { label: '1-2 accounts', value: '1-2', price: 0 },
    { label: '3-5 accounts', value: '3-5', price: 0 },
    { label: '6+ accounts', value: '6+', price: 0 },
  ],
  addOnOptions: [
    { label: 'Accounts Receivable add-on', value: 'ar', price: 200 },
    { label: 'Accounts Payable add-on', value: 'ap', price: 200 },
    { label: 'Inventory bookkeeping add-on', value: 'inventory', price: 250 },
    { label: 'Payroll bookkeeping (1-10 employees)', value: 'payroll', price: 150 },
    { label: 'Light monthly advisory add-on', value: 'advisory', price: 250 },
    { label: '3rd-party app integration add-on', value: 'integration', price: 100 },
  ],
  frequencyOptions: [
    { label: 'Weekly', value: 'weekly' },
    { label: 'Fortnightly', value: 'fortnightly' },
    { label: 'Monthly', value: 'monthly' },
  ],
  entityOptions: [
    { label: 'Sole Prop / Single LLC', value: 'sole' },
    { label: 'S Corp', value: 'scorp' },
    { label: 'C-Corp', value: 'ccorp' },
    { label: 'Partnership', value: 'partnership' },
    { label: 'Non Profit', value: 'nonprofit' },
  ],
  sectorOptions: [
    { label: 'Retail', value: 'retail' },
    { label: 'Manufacturing', value: 'manufacturing' },
    { label: 'eCommerce', value: 'ecommerce' },
    { label: 'Hotel', value: 'hotel' },
    { label: 'F&B', value: 'fb' },
    { label: 'Real Estate', value: 'realestate' },
    { label: 'Professional Services', value: 'professional' },
    { label: 'Others', value: 'others' },
  ],
  softwareOptions: [
    { label: 'MSFT Business Central', value: 'business-central' },
    { label: 'Quickbooks', value: 'quickbooks' },
    { label: 'Zoho Books', value: 'zoho' },
    { label: 'SAP Financials', value: 'sap' },
    { label: 'Netsuite', value: 'netsuite' },
    { label: 'Workday', value: 'workday' },
    { label: 'Not yet decided', value: 'undecided' },
  ],
}

const QUESTIONS = ['transactionVolume', 'catchUp', 'accounts', 'addOns', 'frequency', 'entityType', 'sector', 'software']

function toEstimateRange(amount) {
  const low = Math.floor(amount / 50) * 50
  const high = low + 50
  return { low, high }
}

export default function PricingCalculator() {
  const [step, setStep] = useState(1)
  const [visibleUpTo, setVisibleUpTo] = useState(0)
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '', company: '', notes: '' })
  const [userInfoError, setUserInfoError] = useState('')
  const [pricing, setPricing] = useState({
    transactionVolume: null,
    catchUp: null,
    accounts: null,
    addOns: [],
    frequency: null,
    entityType: null,
    sector: null,
    software: null,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [submissionId, setSubmissionId] = useState(null)
  const [emailContent, setEmailContent] = useState('')
  const [showEmailPreview, setShowEmailPreview] = useState(false)

  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo === 'calculator-top') {
      const el = document.getElementById('calculator-top')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.replaceState({}, document.title)
      }
    }
  }, [location])

  useEffect(() => {
    if (isSubmitted) window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [isSubmitted])

  // ─── CALCULATIONS ───
  const breakdown = useMemo(() => {
    const vol = pricingConfig.transactionVolumes.find(v => v.value === pricing.transactionVolume)
    const bookkeepingCost = vol && typeof vol.price === 'number' ? vol.price : 0
    const volumeIsCustom = vol ? vol.price === 'Custom' : false

    const acc = pricingConfig.accountOptions.find(v => v.value === pricing.accounts)
    const accountCost = acc ? acc.price : 0

    const addOnLines = pricing.addOns
      .map(val => pricingConfig.addOnOptions.find(x => x.value === val))
      .filter(Boolean)
    const addOnsTotal = addOnLines.reduce((sum, a) => sum + a.price, 0)

    const cu = pricingConfig.catchUpOptions.find(v => v.value === pricing.catchUp)
    const catchUpIsCustom = cu ? cu.isCustom : false

    const recurringTotal = bookkeepingCost + accountCost + addOnsTotal
    const setupFee = pricingConfig.setupFee
    const setupFeeMonthly = setupFee / 12

    const isCustom = volumeIsCustom

    let estimate = null
    if (!isCustom) {
      estimate = toEstimateRange(recurringTotal + setupFeeMonthly)
    }

    return {
      bookkeepingCost,
      bookkeepingIsCustom: volumeIsCustom,
      accountCost,
      addOnLines,
      addOnsTotal,
      catchUpIsCustom,
      volumeIsCustom,
      recurringTotal,
      setupFee,
      setupFeeMonthly,
      isCustom,
      estimate,
    }
  }, [pricing])

  const isCustomPrice = breakdown.isCustom

  const getPriceDisplay = () => {
    if (isCustomPrice) return 'Custom Quote'
    if (!breakdown.estimate) return '—'
    return `$${breakdown.estimate.low.toLocaleString()}–$${breakdown.estimate.high.toLocaleString()}`
  }

  const isAllAnswered = useMemo(() => {
    return pricing.transactionVolume !== null &&
      pricing.catchUp !== null &&
      pricing.accounts !== null &&
      pricing.frequency !== null &&
      pricing.entityType !== null &&
      pricing.sector !== null &&
      pricing.software !== null
  }, [pricing])

  const getSelectedLabel = (category, value) => {
    const map = {
      transactionVolume: pricingConfig.transactionVolumes,
      catchUp: pricingConfig.catchUpOptions,
      accounts: pricingConfig.accountOptions,
      frequency: pricingConfig.frequencyOptions,
      entityType: pricingConfig.entityOptions,
      sector: pricingConfig.sectorOptions,
      software: pricingConfig.softwareOptions,
    }
    return (map[category] || []).find(o => o.value === value)?.label || ''
  }

  const isQuestionAnswered = (index) => {
    const key = QUESTIONS[index]
    if (key === 'addOns') return visibleUpTo > index
    return pricing[key] !== null
  }

  const goBack = () => {
    if (visibleUpTo > 0) {
      setVisibleUpTo(prev => prev - 1)
      setTimeout(() => {
        const prevQuestion = document.getElementById(`question-${visibleUpTo - 1}`)
        if (prevQuestion) prevQuestion.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 150)
    }
  }

  const handleSelect = (category, value, questionIndex) => {
    setPricing(prev => ({ ...prev, [category]: value }))
    if (questionIndex < QUESTIONS.length - 1) {
      setVisibleUpTo(prev => Math.max(prev, questionIndex + 1))
      setTimeout(() => {
        const next = document.getElementById(`question-${questionIndex + 1}`)
        if (next) next.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 150)
    }
  }

  const handleAddOnToggle = (value) => {
    setPricing(prev => {
      const curr = [...prev.addOns]
      const idx = curr.indexOf(value)
      if (idx > -1) curr.splice(idx, 1)
      else curr.push(value)
      return { ...prev, addOns: curr }
    })
  }

  const handleAddOnContinue = () => {
    setVisibleUpTo(prev => Math.max(prev, 4))
    setTimeout(() => {
      const next = document.getElementById('question-4')
      if (next) next.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 150)
  }

  const handleUserInfoSubmit = (e) => {
    e.preventDefault()
    if (!userInfo.name.trim() || !userInfo.email.trim()) {
      setUserInfoError('Please enter both name and email')
      return
    }
    if (!userInfo.email.includes('@')) {
      setUserInfoError('Please enter a valid email address')
      return
    }
    setUserInfoError('')
    setStep(3)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // ─── GENERATE EMAIL CONTENT ───
  const generateEmailContent = (name) => {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e8ecf1; border-radius: 12px; background: #ffffff;">
        <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #22a7f0;">
          <h2 style="color: #0a0f1e; margin: 0;">Zeta-V Technology</h2>
          <p style="color: #6366f1; margin: 4px 0 0; font-weight: 600;">Shared Services Division</p>
        </div>
        
        <div style="padding: 20px 0;">
          <p style="font-size: 1.1rem; color: #0a0f1e;">Dear <strong>${name}</strong>,</p>
          
          <p style="color: #333; line-height: 1.6;">Thank you for your interest in our <strong>Bookkeeping Services</strong>. We have received your request and are allocating an expert from our side for your account.</p>
          
          <p style="color: #333; line-height: 1.6;">You would hear from us shortly. If you have a preferred time and medium to talk to us, you can reply to this email and share your preferences.</p>
          
          <div style="background: #f8faff; padding: 16px 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #22a7f0;">
            <p style="margin: 0; color: #0a0f1e; font-size: 0.9rem;">We look forward to helping you with your bookkeeping needs!</p>
          </div>
          
          <p style="color: #333; line-height: 1.6; margin-top: 20px;">Have a great day.</p>
        </div>
        
        <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e8ecf1; font-size: 0.8rem; color: #b0b8c4;">
          <p style="margin: 0;">Zeta-V Technology Solutions</p>
          <p style="margin: 4px 0 0;">© ${new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    `
  }

  // ─── HANDLE FINAL SUBMIT ───
  const handleFinalSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    const payload = {
      full_name: userInfo.name,
      work_email: userInfo.email,
      phone: userInfo.phone || '',
      company: userInfo.company || '',
      notes: userInfo.notes || '',
      transaction_volume: getSelectedLabel('transactionVolume', pricing.transactionVolume),
      catch_up_work: getSelectedLabel('catchUp', pricing.catchUp),
      catch_up_is_custom: breakdown.catchUpIsCustom,
      accounts: getSelectedLabel('accounts', pricing.accounts),
      add_ons: pricing.addOns.map(v => pricingConfig.addOnOptions.find(a => a.value === v)?.label || v).join(', '),
      frequency: getSelectedLabel('frequency', pricing.frequency),
      entity_type: getSelectedLabel('entityType', pricing.entityType),
      sector: getSelectedLabel('sector', pricing.sector),
      software: getSelectedLabel('software', pricing.software),
      setup_fee: breakdown.setupFee,
      recurring_monthly_total: breakdown.recurringTotal,
      is_custom_quote: isCustomPrice,
      price_display: getPriceDisplay(),
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message || 'Something went wrong. Please try again.')
      setSubmissionId(data.submission_id || null)
      
      // ─── GENERATE EMAIL CONTENT ───
      const emailHtml = generateEmailContent(userInfo.name)
      setEmailContent(emailHtml)
      setShowEmailPreview(true)
      
      setIsSubmitted(true)
    } catch (err) {
      setSubmitError(err.message || 'Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetAll = () => {
    setIsSubmitted(false)
    setStep(1)
    setVisibleUpTo(0)
    setShowEmailPreview(false)
    setEmailContent('')
    setPricing({ transactionVolume: null, catchUp: null, accounts: null, addOns: [], frequency: null, entityType: null, sector: null, software: null })
    setUserInfo({ name: '', email: '', phone: '', company: '', notes: '' })
    setUserInfoError('')
    setSubmitError(null)
    setSubmissionId(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const rowGrid = {
    display: 'grid',
    gridTemplateColumns: '6fr 6fr',
    columnGap: 16,
    alignItems: 'center',
    marginBottom: 10,
  }

  const labelStyle = {
    textAlign: 'left',
    fontSize: '0.95rem',
    fontWeight: 600,
    color: 'rgba(0, 0, 0, 0.7)',
  }

  const valueStyle = {
    textAlign: 'left',
    fontSize: '0.95rem',
    fontWeight: 600,
    color: '#0a0f1e',
  }

  // ─── RENDER STEP 1 ───
  const renderStep1 = () => (
    <div className="pc-step pc-step-1">
      <div className="pc-calc-top">
        <h2>Bookkeeping Pricing Calculator</h2>
        <p>Answer quick questions to get your custom price estimate</p>
        <div className="pc-progress">
          <div className="pc-progress-bar">
            <div className="pc-progress-fill" style={{ width: `${(visibleUpTo / (QUESTIONS.length - 1)) * 100}%` }} />
          </div>
          <span className="pc-progress-text">{Math.min(visibleUpTo + 1, QUESTIONS.length)}/8</span>
        </div>
      </div>

      <div className="pc-questions-list">
        {/* Q1: Transaction Volume */}
        {visibleUpTo >= 0 && (
          <motion.div id="question-0" className={`pc-question ${isQuestionAnswered(0) ? 'answered' : ''}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="pc-question-header">
              <span className="pc-q-number">1</span>
              <div>
                <h4>How many transactions does your business average per month?</h4>
                <p className="pc-q-hint">Include all bank and credit card transactions combined. If unsure, estimate on the higher side.</p>
              </div>
              {isQuestionAnswered(0) && <span className="pc-q-done"><HiOutlineCheckCircle /></span>}
            </div>
            <div className="pc-calc-options">
              {pricingConfig.transactionVolumes.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => handleSelect('transactionVolume', opt.value, 0)}
                  className={`pc-calc-btn ${pricing.transactionVolume === opt.value ? 'active' : ''}`}
                >
                  {opt.label}
                  <span className="pc-calc-btn-sub">{opt.sublabel}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Q2: Catch-up Work */}
        {visibleUpTo >= 1 && (
          <motion.div id="question-1" className={`pc-question ${isQuestionAnswered(1) ? 'answered' : ''}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="pc-question-header">
              <span className="pc-q-number">2</span>
              <div>
                <h4>Do you need any catch-up or clean-up work?</h4>
                <p className="pc-q-hint">This applies if your books aren't current or have reconciliation issues that need correcting before ongoing service begins.</p>
              </div>
              {isQuestionAnswered(1) && <span className="pc-q-done"><HiOutlineCheckCircle /></span>}
            </div>
            <div className="pc-calc-options">
              {pricingConfig.catchUpOptions.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => handleSelect('catchUp', opt.value, 1)}
                  className={`pc-calc-btn ${pricing.catchUp === opt.value ? 'active' : ''}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Q3: Number of Accounts */}
        {visibleUpTo >= 2 && (
          <motion.div id="question-2" className={`pc-question ${isQuestionAnswered(2) ? 'answered' : ''}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="pc-question-header">
              <span className="pc-q-number">3</span>
              <div>
                <h4>How many bank and credit card accounts do you have?</h4>
                <p className="pc-q-hint">Count all accounts that would need to be reconciled each month.</p>
              </div>
              {isQuestionAnswered(2) && <span className="pc-q-done"><HiOutlineCheckCircle /></span>}
            </div>
            <div className="pc-calc-options">
              {pricingConfig.accountOptions.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => handleSelect('accounts', opt.value, 2)}
                  className={`pc-calc-btn ${pricing.accounts === opt.value ? 'active' : ''}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Q4: Add-ons */}
        {visibleUpTo >= 3 && (
          <motion.div id="question-3" className={`pc-question ${visibleUpTo > 3 ? 'answered' : ''}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="pc-question-header">
              <span className="pc-q-number">4</span>
              <div>
                <h4>Do you need any of these add-on services?</h4>
                <p className="pc-q-hint">Select all that apply. These are optional monthly add-ons to core bookkeeping.</p>
              </div>
              {visibleUpTo > 3 && <span className="pc-q-done"><HiOutlineCheckCircle /></span>}
            </div>
            <div className="pc-calc-addons">
              {pricingConfig.addOnOptions.map(opt => (
                <label key={opt.value} className={`pc-calc-addon ${pricing.addOns.includes(opt.value) ? 'active' : ''}`}>
                  <span className="pc-calc-addon-label">{opt.label}</span>
                  <input type="checkbox" checked={pricing.addOns.includes(opt.value)} onChange={() => handleAddOnToggle(opt.value)} />
                  <span className="pc-calc-addon-checkmark">{pricing.addOns.includes(opt.value) ? '✓' : ''}</span>
                </label>
              ))}
            </div>
            {visibleUpTo === 3 && (
              <button className="pc-addon-continue-btn" onClick={handleAddOnContinue}>
                {pricing.addOns.length > 0 ? `Continue with ${pricing.addOns.length} add-on${pricing.addOns.length > 1 ? 's' : ''}` : 'Continue — no add-ons needed'}
                <HiArrowRight />
              </button>
            )}
          </motion.div>
        )}

        {/* Q5: Frequency */}
        {visibleUpTo >= 4 && (
          <motion.div id="question-4" className={`pc-question ${isQuestionAnswered(4) ? 'answered' : ''}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="pc-question-header">
              <span className="pc-q-number">5</span>
              <div>
                <h4>How frequently would you like your books updated?</h4>
              </div>
              {isQuestionAnswered(4) && <span className="pc-q-done"><HiOutlineCheckCircle /></span>}
            </div>
            <div className="pc-calc-options">
              {pricingConfig.frequencyOptions.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => handleSelect('frequency', opt.value, 4)}
                  className={`pc-calc-btn ${pricing.frequency === opt.value ? 'active' : ''}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Q6: Entity Type */}
        {visibleUpTo >= 5 && (
          <motion.div id="question-5" className={`pc-question ${isQuestionAnswered(5) ? 'answered' : ''}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="pc-question-header">
              <span className="pc-q-number">6</span>
              <div>
                <h4>What type of entity is your business?</h4>
              </div>
              {isQuestionAnswered(5) && <span className="pc-q-done"><HiOutlineCheckCircle /></span>}
            </div>
            <div className="pc-calc-options">
              {pricingConfig.entityOptions.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => handleSelect('entityType', opt.value, 5)}
                  className={`pc-calc-btn ${pricing.entityType === opt.value ? 'active' : ''}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Q7: Sector */}
        {visibleUpTo >= 6 && (
          <motion.div id="question-6" className={`pc-question ${isQuestionAnswered(6) ? 'answered' : ''}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="pc-question-header">
              <span className="pc-q-number">7</span>
              <div>
                <h4>Which sector describes you best?</h4>
              </div>
              {isQuestionAnswered(6) && <span className="pc-q-done"><HiOutlineCheckCircle /></span>}
            </div>
            <div className="pc-calc-options pc-calc-options-grid">
              {pricingConfig.sectorOptions.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => handleSelect('sector', opt.value, 6)}
                  className={`pc-calc-btn ${pricing.sector === opt.value ? 'active' : ''}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Q8: Accounting Software */}
        {visibleUpTo >= 7 && (
          <motion.div
            id="question-7"
            className={`pc-question ${isQuestionAnswered(7) ? 'answered' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="pc-question-header">
              <span className="pc-q-number">8</span>
              <div>
                <h4>Which accounting software do you use?</h4>
                <p className="pc-q-hint">Select the primary software you use for bookkeeping.</p>
              </div>
              {isQuestionAnswered(7) && <span className="pc-q-done"><HiOutlineCheckCircle /></span>}
            </div>
            <div className="pc-calc-options pc-calc-options-grid">
              {pricingConfig.softwareOptions.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => handleSelect('software', opt.value, 7)}
                  className={`pc-calc-btn ${pricing.software === opt.value ? 'active' : ''}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA after all questions answered */}
        <AnimatePresence>
          {isAllAnswered && visibleUpTo >= 6 && isQuestionAnswered(6) && (
            <motion.div className="pc-calc-cta" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="pc-calc-cta-text">All done! Enter your details to get your custom quote.</p>
              <button
                className="pc-calc-submit active"
                onClick={() => { setStep(2); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              >
                <span>Get Your Custom Quote</span>
                <HiArrowRight />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )

  // ─── RENDER STEP 2 ───
  const renderStep2 = () => (
    <>
      <div className="pc-step-header">
        <button onClick={() => setStep(1)} className="pc-btn-back">
          <HiArrowLeft />
          Back
        </button>
      </div>

      <div className="pc-step pc-step-2-simple">
        <div className="pc-step-content">
          <div className="pc-step-icon">
            <HiOutlineUser />
          </div>
          <h2>Almost there</h2>
          <p>Enter your details to receive your custom bookkeeping quote</p>

          <form onSubmit={handleUserInfoSubmit} className="pc-form">
            <div className="pc-form-group">
              <label>
                <HiOutlineUser />
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={userInfo.name}
                onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                required
              />
            </div>

            <div className="pc-form-group">
              <label>
                <HiOutlineMail />
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                value={userInfo.email}
                onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                required
              />
            </div>

            {userInfoError && (
              <p className="pc-form-error">{userInfoError}</p>
            )}

            <button type="submit" className="pc-btn-primary">
              Continue to Quote
              <HiArrowRight />
            </button>
          </form>
          <br />

          <p className="pc-step-note">
            <HiOutlineCheckCircle />
            Your information is secure and will only be used for your quote
          </p>
        </div>
      </div>
    </>
  )

  // ─── RENDER STEP 3 ───
  const renderStep3 = () => {
    if (isSubmitted) {
      return (
        <div className="pc-step pc-step-3 pc-step-success">
          <div className="pc-success-content">
            <div className="pc-success-icon">
              <HiOutlineCheckCircle />
            </div>
            <h2>Thank You!</h2>
            <p>Your quote request has been submitted successfully.</p>
            {submissionId && (
              <p className="pc-success-id">Reference ID: #{submissionId}</p>
            )}

            <div className="pc-success-price-reveal">
              <p className="pc-success-price-label">Your Estimated Monthly Price</p>
              <motion.p
                className="pc-success-price-amount"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {getPriceDisplay()}
                {!isCustomPrice && <span className="pc-success-price-period">/mo</span>}
              </motion.p>
            </div>

            {/* ─── EMAIL PREVIEW / ACKNOWLEDGEMENT CARD ─── */}
            {showEmailPreview && (
              <div className="pc-email-preview-card">
                <div className="pc-email-preview-header">
                  <span className="pc-email-preview-icon">✉️</span>
                  <span className="pc-email-preview-label">Acknowledgement Sent To</span>
                  <span className="pc-email-preview-email">{userInfo.email}</span>
                </div>
                <div 
                  className="pc-email-preview-body"
                  dangerouslySetInnerHTML={{ __html: emailContent }}
                />
              </div>
            )}

            <p className="pc-success-desc">
              We will review your information and contact you within 24 hours with your detailed quote.
            </p>
            <button onClick={resetAll} className="pc-btn-primary" style={{ width: 'auto', padding: '12px 32px' }}>
              Start New Quote
              <HiArrowRight />
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className="pc-step pc-step-3">
        <div className="pc-step-header">
          <button onClick={() => setStep(2)} className="pc-btn-back">
            <HiArrowLeft />
            Back
          </button>
          <div className="pc-user-badge">
            <span className="pc-user-name">{userInfo.name}</span>
            <span className="pc-user-email">{userInfo.email}</span>
          </div>
        </div>

        <div className="pc-final-form">
          <div className="pc-final-form-header">
            <div className="pc-final-form-icon">
              <HiOutlineCheckCircle />
            </div>
            <h2>Your Custom Quote</h2>
            <p>Review your selections and submit to receive your detailed quote</p>
          </div>

          {/* ⭐ Itemized price breakdown */}
          <div className="pc-final-price-summary" style={{ display: 'block', padding: '20px', width: '100%' }}>

            <div style={rowGrid}>
              <span style={labelStyle}>Setup Fee <em style={{ opacity: 0.6, fontWeight: 400 }}>(one-time)</em></span>
              <span style={valueStyle}>${breakdown.setupFee.toLocaleString()}</span>
            </div>

            <div style={rowGrid}>
              <span style={labelStyle}>Bookkeeping cost</span>
              <span style={valueStyle}>
                {breakdown.bookkeepingIsCustom
                  ? 'Custom'
                  : `$${breakdown.bookkeepingCost.toLocaleString()} / p.m.`}
              </span>
            </div>

            <div style={rowGrid}>
              <span style={labelStyle}>Books Cleaning charge</span>
              <span style={valueStyle}>{breakdown.catchUpIsCustom ? 'Custom' : 'NIL'}</span>
            </div>

            {breakdown.addOnLines.length > 0 && (
              <div style={{ marginBottom: 10 }}>
                <div style={{ ...labelStyle, marginBottom: 6 }}>Add-on services chosen</div>
                {breakdown.addOnLines.map(a => (
                  <div key={a.value} style={{ ...rowGrid, paddingLeft: 16 }}>
                    <span style={labelStyle}>↳ {a.label}</span>
                    <span style={valueStyle}>${a.price.toLocaleString()} / p.m.</span>
                  </div>
                ))}
              </div>
            )}

            <div style={{ borderTop: '1px solid rgba(0,0,0,0.12)', margin: '14px 0' }} />

            <div style={rowGrid}>
              <span style={{ ...labelStyle, fontWeight: 700 }}>Estimated Price</span>
              <span style={{ ...valueStyle, fontSize: '1.2em', textAlign: 'left' }}>
                {getPriceDisplay()}{!isCustomPrice && <span style={{ fontWeight: 400 }}> /mo</span>}
              </span>
            </div>

            {/* ─── FINE PRINT ─── */}
            <p style={{ 
              marginTop: '12px', 
              opacity: 0.5, 
              fontSize: '0.75rem', 
              textAlign: 'center',
              fontStyle: 'italic',
              borderTop: '1px solid rgba(0,0,0,0.06)',
              paddingTop: '12px'
            }}>
              The above is the estimate basis information submitted. Please get in touch with us for actual estimates.
            </p>

            {isCustomPrice && (
              <p style={{ marginTop: 8, opacity: 0.75, fontSize: '0.9em' }}>
                One of the selected items requires a custom quotation. We will review your request and share the final pricing soon.
              </p>
            )}
          </div>

          <div className="pc-final-selections">
            <div className="pc-final-selection-item">
              <span className="pc-final-selection-label">Transaction Volume</span>
              <span className="pc-final-selection-value">{getSelectedLabel('transactionVolume', pricing.transactionVolume)}</span>
            </div>
            <div className="pc-final-selection-item">
              <span className="pc-final-selection-label">Catch-up Work</span>
              <span className="pc-final-selection-value">{getSelectedLabel('catchUp', pricing.catchUp)}</span>
            </div>
            <div className="pc-final-selection-item">
              <span className="pc-final-selection-label">Accounts</span>
              <span className="pc-final-selection-value">{getSelectedLabel('accounts', pricing.accounts)}</span>
            </div>
            <div className="pc-final-selection-item">
              <span className="pc-final-selection-label">Frequency</span>
              <span className="pc-final-selection-value">{getSelectedLabel('frequency', pricing.frequency)}</span>
            </div>
            <div className="pc-final-selection-item">
              <span className="pc-final-selection-label">Entity Type</span>
              <span className="pc-final-selection-value">{getSelectedLabel('entityType', pricing.entityType)}</span>
            </div>
            <div className="pc-final-selection-item">
              <span className="pc-final-selection-label">Sector</span>
              <span className="pc-final-selection-value">{getSelectedLabel('sector', pricing.sector)}</span>
            </div>
            <div className="pc-final-selection-item">
              <span className="pc-final-selection-label">Accounting Software</span>
              <span className="pc-final-selection-value">{getSelectedLabel('software', pricing.software)}</span>
            </div>
            {pricing.addOns.length > 0 && (
              <div className="pc-final-selection-item pc-final-selection-item--full">
                <span className="pc-final-selection-label">Add-ons</span>
                <span className="pc-final-selection-value">
                  {pricing.addOns.map(v => pricingConfig.addOnOptions.find(a => a.value === v)?.label || v).join(', ')}
                </span>
              </div>
            )}
          </div>

          <form onSubmit={handleFinalSubmit} className="pc-final-form-fields">
            {submitError && (
              <div className="pc-form-error pc-form-error-submit">{submitError}</div>
            )}
            <div className="pc-form-row">
              <div className="pc-form-group">
                <label>
                  <HiOutlineUser />
                  Full Name
                </label>
                <input
                  type="text"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                  required
                />
              </div>
              <div className="pc-form-group">
                <label>
                  <HiOutlineMail />
                  Email Address
                </label>
                <input
                  type="email"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="pc-form-row">
              <div className="pc-form-group">
                <label>
                  <HiOutlinePhone />
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={userInfo.phone}
                  onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                />
              </div>
              <div className="pc-form-group">
                <label>
                  <HiOutlineBuildingOffice />
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your company name"
                  value={userInfo.company}
                  onChange={(e) => setUserInfo({ ...userInfo, company: e.target.value })}
                />
              </div>
            </div>

            <div className="pc-form-group pc-form-group-full">
              <label>
                <HiOutlineBriefcase />
                Additional Notes
              </label>
              <textarea
                placeholder="Any additional information you'd like to share..."
                rows="3"
                value={userInfo.notes}
                onChange={(e) => setUserInfo({ ...userInfo, notes: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="pc-btn-primary pc-btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>Submitting...</span>
              ) : (
                <>
                  Submit Quote Request
                  <HiArrowRight />
                </>
              )}
            </button>
          </form>

          <p className="pc-final-note">
            <HiOutlineCheckCircle />
            Your information is secure. We'll contact you within 24 hours with your detailed quote.
          </p>
        </div>
      </div>
    )
  }

  // ─── MAIN RENDER ───
  return (
    <>
      <Navbar />
      <main id="calculator-top">
        <section className="pc-section">
          <div className="pc-container">
            {!isSubmitted && (
              <div className="pc-steps-indicator">
                <div className={`pc-step-dot ${step >= 1 ? 'active' : ''}`}>
                  <span>1</span>
                  <span className="pc-step-label">Calculate</span>
                </div>
                <div className={`pc-step-line ${step >= 2 ? 'active' : ''}`} />
                <div className={`pc-step-dot ${step >= 2 ? 'active' : ''}`}>
                  <span>2</span>
                  <span className="pc-step-label">Your Details</span>
                </div>
                <div className={`pc-step-line ${step >= 3 ? 'active' : ''}`} />
                <div className={`pc-step-dot ${step >= 3 ? 'active' : ''}`}>
                  <span>3</span>
                  <span className="pc-step-label">Get Quote</span>
                </div>
              </div>
            )}

            <div className="pc-step-wrapper">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                    {renderStep1()}
                  </motion.div>
                )}
                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                    {renderStep2()}
                  </motion.div>
                )}
                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                    {renderStep3()}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}