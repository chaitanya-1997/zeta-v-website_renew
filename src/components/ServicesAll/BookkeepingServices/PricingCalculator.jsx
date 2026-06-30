// // PricingCalculator.jsx
// import { useState, useEffect, useMemo } from 'react'
// import { motion } from 'framer-motion'
// import {
//   HiArrowRight,
//   HiArrowLeft,
//   HiOutlineCheckCircle,
//   HiOutlineUser,
//   HiOutlinePhone,
//   HiOutlineBuildingOffice,
//   HiOutlineBriefcase,
//   HiOutlineCheck,
//   HiOutlineChartBar,
//   HiOutlineCurrencyDollar,
//   HiOutlineClock,
//   HiOutlineShieldCheck,
// } from 'react-icons/hi2'
// import { HiOutlineMail } from 'react-icons/hi'
// import { Link } from 'react-router-dom'
// import Navbar from '../../Navbar/index'
// import FooterSection from '../../Footer/index'
// import './PricingCalculator.css'

// // ─── PRICING CONFIG ───
// const pricingConfig = {
//   transactionVolumes: [
//     { label: 'Low vol (10-100)', value: '10-100', price: 500 },
//     { label: 'Moderate (100-500)', value: '100-500', price: 1100 },
//     { label: 'High (500-1000)', value: '500-1000', price: 1800 },
//     { label: 'Enterprise (1000-2000)', value: '1000-2000', price: 2600 },
//     { label: 'Enterprise+ (2000+)', value: '2000+', price: 'Custom' },
//   ],
//   catchUpOptions: [
//     { label: 'No Books are current', value: 'current', price: 0 },
//     { label: '1-3 months (Minor)', value: '1-3', price: 500 },
//     { label: '3-6 months (Moderate)', value: '3-6', price: 1000 },
//     { label: '7-12 months (Significant)', value: '7-12', price: 2000 },
//     { label: '13+ months (Major)', value: '13+', price: 4000 },
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
//     { label: 'Weekly', value: 'weekly', multiplier: 1.5 },
//     { label: 'Fortnightly', value: 'fortnightly', multiplier: 1.2 },
//     { label: 'Monthly', value: 'monthly', multiplier: 1 },
//   ],
//   entityOptions: [
//     { label: 'Sole Prop / Single LLC', value: 'sole', multiplier: 1 },
//     { label: 'S Corp', value: 'scorp', multiplier: 1.1 },
//     { label: 'C-Corp', value: 'ccorp', multiplier: 1.15 },
//     { label: 'Partnership', value: 'partnership', multiplier: 1.1 },
//     { label: 'Non Profit', value: 'nonprofit', multiplier: 0.95 },
//   ],
//   sectorOptions: [
//     { label: 'Retail', value: 'retail', multiplier: 1 },
//     { label: 'Manufacturing', value: 'manufacturing', multiplier: 1.1 },
//     { label: 'eCommerce', value: 'ecommerce', multiplier: 1.05 },
//     { label: 'Hotel', value: 'hotel', multiplier: 1.05 },
//     { label: 'F&B', value: 'fb', multiplier: 1 },
//     { label: 'Real Estate', value: 'realestate', multiplier: 1 },
//     { label: 'Professional Services', value: 'professional', multiplier: 1 },
//     { label: 'Others', value: 'others', multiplier: 1 },
//   ],
// }

// export default function PricingCalculator() {
//   // ─── STEP STATE ───
//   const [step, setStep] = useState(1)

//   // ─── USER INFO ───
//   const [userInfo, setUserInfo] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     notes: '',
//   })
//   const [userInfoError, setUserInfoError] = useState('')

//   // ─── PRICING STATE ───
//   const [pricing, setPricing] = useState({
//     transactionVolume: null,
//     catchUp: null,
//     accounts: null,
//     addOns: [],
//     frequency: null,
//     entityType: null,
//     sector: null,
//   })

//   // ─── FORM SUBMITTED STATE ───
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   // ─── LOAD FROM LOCALSTORAGE ───
//   useEffect(() => {
//     const savedUser = localStorage.getItem('pricingCalculatorUser')
//     if (savedUser) {
//       try {
//         const parsed = JSON.parse(savedUser)
//         setUserInfo(parsed)
//         if (parsed.name && parsed.email) {
//           setStep(2)
//         }
//       } catch (e) {
//         console.error('Error loading user data')
//       }
//     }
//   }, [])

//   // ─── SAVE TO LOCALSTORAGE ───
//   const saveUserInfo = (data) => {
//     localStorage.setItem('pricingCalculatorUser', JSON.stringify(data))
//   }

//   // ─── CALCULATE TOTAL PRICE ───
//   const totalPrice = useMemo(() => {
//     let basePrice = 0
//     let catchUpCost = 0
//     let accountCost = 0
//     let addOnsTotal = 0
//     let frequencyMultiplier = 1
//     let entityMultiplier = 1
//     let sectorMultiplier = 1

//     const selectedVolume = pricingConfig.transactionVolumes.find(
//       v => v.value === pricing.transactionVolume
//     )
//     if (selectedVolume) {
//       basePrice = typeof selectedVolume.price === 'number' ? selectedVolume.price : 0
//     }

//     const selectedCatchUp = pricingConfig.catchUpOptions.find(
//       v => v.value === pricing.catchUp
//     )
//     if (selectedCatchUp) catchUpCost = selectedCatchUp.price

//     const selectedAccounts = pricingConfig.accountOptions.find(
//       v => v.value === pricing.accounts
//     )
//     if (selectedAccounts) accountCost = selectedAccounts.price

//     pricing.addOns.forEach(addOnValue => {
//       const addOn = pricingConfig.addOnOptions.find(a => a.value === addOnValue)
//       if (addOn) addOnsTotal += addOn.price
//     })

//     const selectedFrequency = pricingConfig.frequencyOptions.find(
//       v => v.value === pricing.frequency
//     )
//     if (selectedFrequency) frequencyMultiplier = selectedFrequency.multiplier

//     const selectedEntity = pricingConfig.entityOptions.find(
//       v => v.value === pricing.entityType
//     )
//     if (selectedEntity) entityMultiplier = selectedEntity.multiplier

//     const selectedSector = pricingConfig.sectorOptions.find(
//       v => v.value === pricing.sector
//     )
//     if (selectedSector) sectorMultiplier = selectedSector.multiplier

//     const monthlyTotal = (basePrice + accountCost + addOnsTotal) *
//       frequencyMultiplier *
//       entityMultiplier *
//       sectorMultiplier

//     return Math.round(monthlyTotal + catchUpCost)
//   }, [pricing])

//   const isComplete = useMemo(() => {
//     return pricing.transactionVolume !== null &&
//       pricing.catchUp !== null &&
//       pricing.accounts !== null &&
//       pricing.frequency !== null &&
//       pricing.entityType !== null &&
//       pricing.sector !== null
//   }, [pricing])

//   // ─── HANDLERS ───
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
//     saveUserInfo(userInfo)
//     setStep(2)
//   }

//   const handleSelect = (category, value) => {
//     setPricing(prev => ({
//       ...prev,
//       [category]: value,
//     }))
//   }

//   const handleAddOnToggle = (value) => {
//     setPricing(prev => {
//       const currentAddOns = [...prev.addOns]
//       const index = currentAddOns.indexOf(value)
//       if (index > -1) {
//         currentAddOns.splice(index, 1)
//       } else {
//         currentAddOns.push(value)
//       }
//       return {
//         ...prev,
//         addOns: currentAddOns,
//       }
//     })
//   }

//   const getSelectedLabel = (category, value) => {
//     const configMap = {
//       transactionVolume: pricingConfig.transactionVolumes,
//       catchUp: pricingConfig.catchUpOptions,
//       accounts: pricingConfig.accountOptions,
//       frequency: pricingConfig.frequencyOptions,
//       entityType: pricingConfig.entityOptions,
//       sector: pricingConfig.sectorOptions,
//     }
//     const options = configMap[category] || []
//     const found = options.find(opt => opt.value === value)
//     return found ? found.label : ''
//   }

//   const getPriceDisplay = () => {
//     const selectedVolume = pricingConfig.transactionVolumes.find(
//       v => v.value === pricing.transactionVolume
//     )
//     if (selectedVolume && selectedVolume.price === 'Custom') {
//       return 'Custom'
//     }
//     return '$' + totalPrice.toLocaleString()
//   }

//   const handleGetQuote = () => {
//     if (isComplete) {
//       // Scroll to the form section
//       const formSection = document.querySelector('.pc-step-wrapper')
//       if (formSection) {
//         formSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
//       }
//       setStep(3)
//     }
//   }

//   const handleFinalSubmit = (e) => {
//     e.preventDefault()
//     const formData = {
//       ...userInfo,
//       ...pricing,
//       totalPrice,
//       selections: {
//         volume: getSelectedLabel('transactionVolume', pricing.transactionVolume),
//         catchUp: getSelectedLabel('catchUp', pricing.catchUp),
//         accounts: getSelectedLabel('accounts', pricing.accounts),
//         frequency: getSelectedLabel('frequency', pricing.frequency),
//         entity: getSelectedLabel('entityType', pricing.entityType),
//         sector: getSelectedLabel('sector', pricing.sector),
//         addOns: pricing.addOns.map(v => getSelectedLabel('addOns', v)).join(', '),
//       }
//     }
//     console.log('Form Data:', formData)
//     setIsSubmitted(true)
//     // Here you would send the data to your backend
//     // For now, show success message
//   }

//   const goBack = () => {
//     if (step > 1) {
//       setStep(step - 1)
//     }
//   }

//   // ─── RENDER HERO ───
//   const renderHero = () => (
//     <div className="pc-hero">
//       <div className="pc-hero-bg">
//         <div className="pc-hero-bg-img" style={{ backgroundImage: 'url(https://images.pexels.com/photos/33175667/pexels-photo-33175667.jpeg)' }} />
//         <div className="pc-hero-overlay" />
//       </div>
//       <div className="pc-hero-content">
//         <motion.div
//           className="pc-hero-inner"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="pc-hero-badge">
//             <HiOutlineCheckCircle />
//             <span>Pricing Calculator</span>
//           </div>
//           <h1 className="pc-hero-title">
//             Get Your <span className="pc-hero-gradient">Custom Price</span>
//           </h1>
//           <p className="pc-hero-desc">
//             Answer a few questions and get an instant estimate for your bookkeeping services
//           </p>
//           <div className="pc-hero-stats">
//             <div className="pc-hero-stat">
//               <HiOutlineClock />
//               <span>2 Min</span>
//             </div>
//             <div className="pc-hero-stat">
//               <HiOutlineChartBar />
//               <span>Simple Questions</span>
//             </div>
//             <div className="pc-hero-stat">
//               <HiOutlineShieldCheck />
//               <span>100% Secure</span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   )

//   // ─── RENDER STEP 1: NAME & EMAIL ───
//   const renderStep1 = () => (
//     <div className="pc-step pc-step-1">
//       <div className="pc-step-content">
//         <div className="pc-step-icon">
//           <HiOutlineUser />
//         </div>
//         <h2>Let's Get Started</h2>
//         <p>Enter your details to calculate your custom bookkeeping price</p>
        
//         <form onSubmit={handleUserInfoSubmit} className="pc-form">
//           <div className="pc-form-group">
//             <label>
//               <HiOutlineUser />
//               Full Name
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your full name"
//               value={userInfo.name}
//               onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
//               required
//             />
//           </div>
          
//           <div className="pc-form-group">
//             <label>
//               <HiOutlineMail />
//               Email Address
//             </label>
//             <input
//               type="email"
//               placeholder="Enter your email address"
//               value={userInfo.email}
//               onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
//               required
//             />
//           </div>
          
//           {userInfoError && (
//             <p className="pc-form-error">{userInfoError}</p>
//           )}
          
//           <button type="submit" className="pc-btn-primary">
//             Continue to Calculator
//             <HiArrowRight />
//           </button>
//         </form>
        
//         <p className="pc-step-note">
//           <HiOutlineCheckCircle />
//           Your information is secure and will only be used for your quote
//         </p>
//       </div>
//     </div>
//   )

//   // ─── RENDER STEP 2: CALCULATOR ───
//   const renderStep2 = () => (
//     <div className="pc-step pc-step-2">
//       <div className="pc-step-header">
//         <button onClick={goBack} className="pc-btn-back">
//           <HiArrowLeft />
//           Back
//         </button>
//         <div className="pc-user-badge">
//           <span className="pc-user-name">{userInfo.name}</span>
//           <span className="pc-user-email">{userInfo.email}</span>
//         </div>
//       </div>
      
//       <div className="pc-calculator">
//         <div className="pc-calculator-header">
//           <h2>Bookkeeping Pricing Calculator</h2>
//           <p>Answer 7 quick questions to get your custom price estimate</p>
//           <div className="pc-progress">
//             <div className="pc-progress-bar">
//               <div 
//                 className="pc-progress-fill" 
//                 style={{ 
//                   width: `${(Object.values(pricing).filter(v => v !== null && v !== '' && (Array.isArray(v) ? v.length > 0 : true)).length / 7) * 100}%` 
//                 }}
//               />
//             </div>
//             <span className="pc-progress-text">
//               {Object.values(pricing).filter(v => v !== null && v !== '' && (Array.isArray(v) ? v.length > 0 : true)).length}/7 answered
//             </span>
//           </div>
//         </div>

//         {/* Q1: Transaction Volume */}
//         <div className="pc-calc-question">
//           <div className="pc-calc-question-header">
//             <span className="pc-calc-question-number">1</span>
//             <h4>How many transactions does your business average per month?</h4>
//           </div>
//           <p className="pc-calc-hint">Include all bank and credit card transactions combined. If unsure, estimate on the higher side.</p>
//           <div className="pc-calc-options">
//             {pricingConfig.transactionVolumes.map(option => (
//               <button
//                 key={option.value}
//                 onClick={() => handleSelect('transactionVolume', option.value)}
//                 className={`pc-calc-btn ${pricing.transactionVolume === option.value ? 'active' : ''}`}
//               >
//                 {option.label}
//                 {option.price === 'Custom' ? (
//                   <span className="pc-calc-btn-price">Custom</span>
//                 ) : (
//                   <span className="pc-calc-btn-price">${option.price}</span>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Q2: Catch-up Work */}
//         <div className="pc-calc-question">
//           <div className="pc-calc-question-header">
//             <span className="pc-calc-question-number">2</span>
//             <h4>Do you need any catch-up or clean-up work?</h4>
//           </div>
//           <p className="pc-calc-hint">This applies if your books aren't current or have reconciliation issues that need correcting before ongoing service begins.</p>
//           <div className="pc-calc-options">
//             {pricingConfig.catchUpOptions.map(option => (
//               <button
//                 key={option.value}
//                 onClick={() => handleSelect('catchUp', option.value)}
//                 className={`pc-calc-btn ${pricing.catchUp === option.value ? 'active' : ''}`}
//               >
//                 {option.label}
//                 {option.price > 0 && (
//                   <span className="pc-calc-btn-price">+${option.price}</span>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Q3: Number of Accounts */}
//         <div className="pc-calc-question">
//           <div className="pc-calc-question-header">
//             <span className="pc-calc-question-number">3</span>
//             <h4>How many bank and credit card accounts do you have?</h4>
//           </div>
//           <p className="pc-calc-hint">Count all accounts that would need to be reconciled each month.</p>
//           <div className="pc-calc-options">
//             {pricingConfig.accountOptions.map(option => (
//               <button
//                 key={option.value}
//                 onClick={() => handleSelect('accounts', option.value)}
//                 className={`pc-calc-btn ${pricing.accounts === option.value ? 'active' : ''}`}
//               >
//                 {option.label}
//                 {option.price > 0 && (
//                   <span className="pc-calc-btn-price">+${option.price}</span>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Q4: Add-on Services */}
//         <div className="pc-calc-question">
//           <div className="pc-calc-question-header">
//             <span className="pc-calc-question-number">4</span>
//             <h4>Do you need any of these add-on services?</h4>
//           </div>
//           <p className="pc-calc-hint">Select all that apply. These are optional monthly add-ons to core bookkeeping.</p>
//           <div className="pc-calc-addons">
//             {pricingConfig.addOnOptions.map(option => (
//               <label
//                 key={option.value}
//                 className={`pc-calc-addon ${pricing.addOns.includes(option.value) ? 'active' : ''}`}
//               >
//                 <span className="pc-calc-addon-label">{option.label}</span>
//                 <span className="pc-calc-addon-price">+${option.price}/mo</span>
//                 <input
//                   type="checkbox"
//                   checked={pricing.addOns.includes(option.value)}
//                   onChange={() => handleAddOnToggle(option.value)}
//                 />
//                 <span className="pc-calc-addon-checkmark">
//                   {pricing.addOns.includes(option.value) ? '✓' : ''}
//                 </span>
//               </label>
//             ))}
//           </div>
//           {pricing.addOns.length > 0 && (
//             <div className="pc-calc-addons-total">
//               Add-ons total: <strong>+${pricing.addOns.reduce((sum, val) => {
//                 const addOn = pricingConfig.addOnOptions.find(a => a.value === val)
//                 return sum + (addOn ? addOn.price : 0)
//               }, 0)}/mo</strong>
//             </div>
//           )}
//         </div>

//         {/* Q5: Frequency */}
//         <div className="pc-calc-question">
//           <div className="pc-calc-question-header">
//             <span className="pc-calc-question-number">5</span>
//             <h4>How frequently would you like your books updated?</h4>
//           </div>
//           <div className="pc-calc-options">
//             {pricingConfig.frequencyOptions.map(option => (
//               <button
//                 key={option.value}
//                 onClick={() => handleSelect('frequency', option.value)}
//                 className={`pc-calc-btn ${pricing.frequency === option.value ? 'active' : ''}`}
//               >
//                 {option.label}
//                 <span className="pc-calc-btn-price">
//                   {option.multiplier > 1 ? `×${option.multiplier}` : 'Base'}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Q6: Entity Type */}
//         <div className="pc-calc-question">
//           <div className="pc-calc-question-header">
//             <span className="pc-calc-question-number">6</span>
//             <h4>What type of entity is your business?</h4>
//           </div>
//           <div className="pc-calc-options">
//             {pricingConfig.entityOptions.map(option => (
//               <button
//                 key={option.value}
//                 onClick={() => handleSelect('entityType', option.value)}
//                 className={`pc-calc-btn ${pricing.entityType === option.value ? 'active' : ''}`}
//               >
//                 {option.label}
//                 <span className="pc-calc-btn-price">
//                   {option.multiplier !== 1 ? `×${option.multiplier}` : 'Base'}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Q7: Sector */}
//         <div className="pc-calc-question">
//           <div className="pc-calc-question-header">
//             <span className="pc-calc-question-number">7</span>
//             <h4>Which sector describes you best?</h4>
//           </div>
//           <div className="pc-calc-options pc-calc-options-grid">
//             {pricingConfig.sectorOptions.map(option => (
//               <button
//                 key={option.value}
//                 onClick={() => handleSelect('sector', option.value)}
//                 className={`pc-calc-btn ${pricing.sector === option.value ? 'active' : ''}`}
//               >
//                 {option.label}
//                 <span className="pc-calc-btn-price">
//                   {option.multiplier !== 1 ? `×${option.multiplier}` : ''}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Results */}
//         <div className="pc-calc-result">
//           <div className="pc-calc-result-left">
//             <p className="pc-calc-result-label">Your Estimated Monthly Price</p>
//             <p className="pc-calc-result-price">{getPriceDisplay()}</p>
//             {isComplete && (
//               <p className="pc-calc-result-breakdown">
//                 Base: ${pricingConfig.transactionVolumes.find(v => v.value === pricing.transactionVolume)?.price || 0}
//                 {pricing.accounts && pricingConfig.accountOptions.find(v => v.value === pricing.accounts)?.price > 0 && 
//                   ` + Accounts: $${pricingConfig.accountOptions.find(v => v.value === pricing.accounts)?.price || 0}`
//                 }
//                 {pricing.addOns.length > 0 && 
//                   ` + Add-ons: $${pricing.addOns.reduce((sum, val) => {
//                     const addOn = pricingConfig.addOnOptions.find(a => a.value === val)
//                     return sum + (addOn ? addOn.price : 0)
//                   }, 0)}`
//                 }
//                 {pricing.catchUp && pricingConfig.catchUpOptions.find(v => v.value === pricing.catchUp)?.price > 0 &&
//                   ` + Catch-up: $${pricingConfig.catchUpOptions.find(v => v.value === pricing.catchUp)?.price || 0}`
//                 }
//               </p>
//             )}
//           </div>
//           {!isComplete && (
//             <div className="pc-calc-result-right">
//               <p className="pc-calc-result-hint">Please answer all 7 questions for an accurate estimate</p>
//             </div>
//           )}
//         </div>

//         {/* CTA */}
//         <button
//           onClick={handleGetQuote}
//           disabled={!isComplete}
//           className={`pc-calc-submit ${isComplete ? 'active' : ''}`}
//         >
//           {isComplete ? (
//             <>
//               <span>Get Your Custom Quote</span>
//               <HiArrowRight />
//             </>
//           ) : (
//             'Complete All Questions to Get Quote'
//           )}
//         </button>
//       </div>
//     </div>
//   )

//   // ─── RENDER STEP 3: FINAL FORM ───
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
//             <p className="pc-success-desc">We will review your information and contact you within 24 hours with your detailed quote.</p>
//             <button 
//               onClick={() => {
//                 setIsSubmitted(false)
//                 setStep(1)
//                 setPricing({
//                   transactionVolume: null,
//                   catchUp: null,
//                   accounts: null,
//                   addOns: [],
//                   frequency: null,
//                   entityType: null,
//                   sector: null,
//                 })
//                 setUserInfo({
//                   name: '',
//                   email: '',
//                   phone: '',
//                   company: '',
//                   notes: '',
//                 })
//                 localStorage.removeItem('pricingCalculatorUser')
//               }} 
//               className="pc-btn-primary"
//             >
//             Go to Home-page
//               <HiArrowRight />
//             </button>
//           </div>
//         </div>
//       )
//     }

//     return (
//       <div className="pc-step pc-step-3">
//         <div className="pc-step-header">
//           <button onClick={goBack} className="pc-btn-back">
//             <HiArrowLeft />
//             Back to Calculator
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

//           {/* Price Summary */}
//           <div className="pc-final-price-summary">
//             <span className="pc-final-price-label">Estimated Monthly Price</span>
//             <span className="pc-final-price-amount">{getPriceDisplay()}</span>
//           </div>

//           {/* Selections Summary */}
//           <div className="pc-final-selections">
//             <div className="pc-final-selection-item">
//               <span className="pc-final-selection-label">Transaction Volume</span>
//               <span className="pc-final-selection-value">
//                 {getSelectedLabel('transactionVolume', pricing.transactionVolume)}
//               </span>
//             </div>
//             <div className="pc-final-selection-item">
//               <span className="pc-final-selection-label">Catch-up Work</span>
//               <span className="pc-final-selection-value">
//                 {getSelectedLabel('catchUp', pricing.catchUp)}
//               </span>
//             </div>
//             <div className="pc-final-selection-item">
//               <span className="pc-final-selection-label">Accounts</span>
//               <span className="pc-final-selection-value">
//                 {getSelectedLabel('accounts', pricing.accounts)}
//               </span>
//             </div>
//             <div className="pc-final-selection-item">
//               <span className="pc-final-selection-label">Frequency</span>
//               <span className="pc-final-selection-value">
//                 {getSelectedLabel('frequency', pricing.frequency)}
//               </span>
//             </div>
//             <div className="pc-final-selection-item">
//               <span className="pc-final-selection-label">Entity Type</span>
//               <span className="pc-final-selection-value">
//                 {getSelectedLabel('entityType', pricing.entityType)}
//               </span>
//             </div>
//             <div className="pc-final-selection-item">
//               <span className="pc-final-selection-label">Sector</span>
//               <span className="pc-final-selection-value">
//                 {getSelectedLabel('sector', pricing.sector)}
//               </span>
//             </div>
//             {pricing.addOns.length > 0 && (
//               <div className="pc-final-selection-item">
//                 <span className="pc-final-selection-label">Add-ons</span>
//                 <span className="pc-final-selection-value">
//                   {pricing.addOns.map(v => getSelectedLabel('addOns', v)).join(', ')}
//                 </span>
//               </div>
//             )}
//           </div>

//           {/* User Info Form */}
//           <form onSubmit={handleFinalSubmit} className="pc-final-form-fields">
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

//             <button type="submit" className="pc-btn-primary pc-btn-submit">
//               Submit Quote Request
//               <HiArrowRight />
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

//   // ─── RENDER ───
//   return (
//     <>
//       <Navbar />
//       <main>
//         {/* Hero Section */}
//         {/* {renderHero()} */}

//         {/* Calculator Section */}
//         <section className="pc-section">
//           <div className="pc-container">
//             {/* Step Indicator - Hide when submitted */}
//             {!isSubmitted && (
//               <div className="pc-steps-indicator">
//                 <div className={`pc-step-dot ${step >= 1 ? 'active' : ''}`}>
//                   <span>1</span>
//                   <span className="pc-step-label">Your Details</span>
//                 </div>
//                 <div className={`pc-step-line ${step >= 2 ? 'active' : ''}`} />
//                 <div className={`pc-step-dot ${step >= 2 ? 'active' : ''}`}>
//                   <span>2</span>
//                   <span className="pc-step-label">Calculate</span>
//                 </div>
//                 <div className={`pc-step-line ${step >= 3 ? 'active' : ''}`} />
//                 <div className={`pc-step-dot ${step >= 3 ? 'active' : ''}`}>
//                   <span>3</span>
//                   <span className="pc-step-label">Get Quote</span>
//                 </div>
//               </div>
//             )}

//             {/* Step Content */}
//             <div className="pc-step-wrapper">
//               {step === 1 && renderStep1()}
//               {step === 2 && renderStep2()}
//               {step === 3 && renderStep3()}
//             </div>
//           </div>
//         </section>
//       </main>
//       <FooterSection />
//     </>
//   )
// }


// // PricingCalculator.jsx
// import { useState, useEffect, useMemo } from 'react'
// import { motion } from 'framer-motion'
// import {
//   HiArrowRight,
//   HiArrowLeft,
//   HiOutlineCheckCircle,
//   HiOutlineUser,
//   HiOutlinePhone,
//   HiOutlineBuildingOffice,
//   HiOutlineBriefcase,
//   HiOutlineCheck,
//   HiOutlineChartBar,
//   HiOutlineCurrencyDollar,
//   HiOutlineClock,
//   HiOutlineShieldCheck,
// } from 'react-icons/hi2'
// import { HiOutlineMail } from 'react-icons/hi'
// import { Link } from 'react-router-dom'
// import Navbar from '../../Navbar/index'
// import FooterSection from '../../Footer/index'
// import './PricingCalculator.css'

// // ─── API CONFIGURATION ───
// const API_URL = 'https://zeta-v-invoicemanagement-ddgwdzg2dchdfaf4.centralindia-01.azurewebsites.net/api/pricing/submit'

// // ─── PRICING CONFIG ───
// const pricingConfig = {
//   transactionVolumes: [
//     { label: 'Low vol (10-100)', value: '10-100', price: 500 },
//     { label: 'Moderate (100-500)', value: '100-500', price: 1100 },
//     { label: 'High (500-1000)', value: '500-1000', price: 1800 },
//     { label: 'Enterprise (1000-2000)', value: '1000-2000', price: 2600 },
//     { label: 'Enterprise+ (2000+)', value: '2000+', price: 'Custom' },
//   ],
//   catchUpOptions: [
//     { label: 'No Books are current', value: 'current', price: 0 },
//     { label: '1-3 months (Minor)', value: '1-3', price: 500 },
//     { label: '3-6 months (Moderate)', value: '3-6', price: 1000 },
//     { label: '7-12 months (Significant)', value: '7-12', price: 2000 },
//     { label: '13+ months (Major)', value: '13+', price: 4000 },
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
//     { label: 'Weekly', value: 'weekly', multiplier: 1.5 },
//     { label: 'Fortnightly', value: 'fortnightly', multiplier: 1.2 },
//     { label: 'Monthly', value: 'monthly', multiplier: 1 },
//   ],
//   entityOptions: [
//     { label: 'Sole Prop / Single LLC', value: 'sole', multiplier: 1 },
//     { label: 'S Corp', value: 'scorp', multiplier: 1.1 },
//     { label: 'C-Corp', value: 'ccorp', multiplier: 1.15 },
//     { label: 'Partnership', value: 'partnership', multiplier: 1.1 },
//     { label: 'Non Profit', value: 'nonprofit', multiplier: 0.95 },
//   ],
//   sectorOptions: [
//     { label: 'Retail', value: 'retail', multiplier: 1 },
//     { label: 'Manufacturing', value: 'manufacturing', multiplier: 1.1 },
//     { label: 'eCommerce', value: 'ecommerce', multiplier: 1.05 },
//     { label: 'Hotel', value: 'hotel', multiplier: 1.05 },
//     { label: 'F&B', value: 'fb', multiplier: 1 },
//     { label: 'Real Estate', value: 'realestate', multiplier: 1 },
//     { label: 'Professional Services', value: 'professional', multiplier: 1 },
//     { label: 'Others', value: 'others', multiplier: 1 },
//   ],
// }

// export default function PricingCalculator() {
//   // ─── STATE ───
//   const [step, setStep] = useState(1)
//   const [userInfo, setUserInfo] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     notes: '',
//   })
//   const [userInfoError, setUserInfoError] = useState('')
//   const [pricing, setPricing] = useState({
//     transactionVolume: null,
//     catchUp: null,
//     accounts: null,
//     addOns: [],
//     frequency: null,
//     entityType: null,
//     sector: null,
//   })
//   const [isSubmitted, setIsSubmitted] = useState(false)
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitError, setSubmitError] = useState(null)
//   const [submissionId, setSubmissionId] = useState(null)

//   // ─── LOCAL STORAGE ───
//   useEffect(() => {
//     const savedUser = localStorage.getItem('pricingCalculatorUser')
//     if (savedUser) {
//       try {
//         const parsed = JSON.parse(savedUser)
//         setUserInfo(parsed)
//         if (parsed.name && parsed.email) {
//           setStep(2)
//         }
//       } catch (e) {
//         console.error('Error loading user data')
//       }
//     }
//   }, [])

//   const saveUserInfo = (data) => {
//     localStorage.setItem('pricingCalculatorUser', JSON.stringify(data))
//   }

//   // ─── CALCULATIONS ───
//   const totalPrice = useMemo(() => {
//     let basePrice = 0
//     let catchUpCost = 0
//     let accountCost = 0
//     let addOnsTotal = 0
//     let frequencyMultiplier = 1
//     let entityMultiplier = 1
//     let sectorMultiplier = 1

//     const selectedVolume = pricingConfig.transactionVolumes.find(
//       v => v.value === pricing.transactionVolume
//     )
//     if (selectedVolume) {
//       basePrice = typeof selectedVolume.price === 'number' ? selectedVolume.price : 0
//     }

//     const selectedCatchUp = pricingConfig.catchUpOptions.find(
//       v => v.value === pricing.catchUp
//     )
//     if (selectedCatchUp) catchUpCost = selectedCatchUp.price

//     const selectedAccounts = pricingConfig.accountOptions.find(
//       v => v.value === pricing.accounts
//     )
//     if (selectedAccounts) accountCost = selectedAccounts.price

//     pricing.addOns.forEach(addOnValue => {
//       const addOn = pricingConfig.addOnOptions.find(a => a.value === addOnValue)
//       if (addOn) addOnsTotal += addOn.price
//     })

//     const selectedFrequency = pricingConfig.frequencyOptions.find(
//       v => v.value === pricing.frequency
//     )
//     if (selectedFrequency) frequencyMultiplier = selectedFrequency.multiplier

//     const selectedEntity = pricingConfig.entityOptions.find(
//       v => v.value === pricing.entityType
//     )
//     if (selectedEntity) entityMultiplier = selectedEntity.multiplier

//     const selectedSector = pricingConfig.sectorOptions.find(
//       v => v.value === pricing.sector
//     )
//     if (selectedSector) sectorMultiplier = selectedSector.multiplier

//     const monthlyTotal = (basePrice + accountCost + addOnsTotal) *
//       frequencyMultiplier *
//       entityMultiplier *
//       sectorMultiplier

//     return Math.round(monthlyTotal + catchUpCost)
//   }, [pricing])

//   const isComplete = useMemo(() => {
//     return pricing.transactionVolume !== null &&
//       pricing.catchUp !== null &&
//       pricing.accounts !== null &&
//       pricing.frequency !== null &&
//       pricing.entityType !== null &&
//       pricing.sector !== null
//   }, [pricing])

//   // ─── HELPERS ───
//   const getSelectedLabel = (category, value) => {
//     const configMap = {
//       transactionVolume: pricingConfig.transactionVolumes,
//       catchUp: pricingConfig.catchUpOptions,
//       accounts: pricingConfig.accountOptions,
//       frequency: pricingConfig.frequencyOptions,
//       entityType: pricingConfig.entityOptions,
//       sector: pricingConfig.sectorOptions,
//     }
//     const options = configMap[category] || []
//     const found = options.find(opt => opt.value === value)
//     return found ? found.label : ''
//   }

//   const getPriceDisplay = () => {
//     const selectedVolume = pricingConfig.transactionVolumes.find(
//       v => v.value === pricing.transactionVolume
//     )
//     if (selectedVolume && selectedVolume.price === 'Custom') {
//       return 'Custom'
//     }
//     return '$' + totalPrice.toLocaleString()
//   }

//   // ─── HANDLERS ───
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
//     saveUserInfo(userInfo)
//     setStep(2)
//   }

//   const handleSelect = (category, value) => {
//     setPricing(prev => ({
//       ...prev,
//       [category]: value,
//     }))
//   }

//   const handleAddOnToggle = (value) => {
//     setPricing(prev => {
//       const currentAddOns = [...prev.addOns]
//       const index = currentAddOns.indexOf(value)
//       if (index > -1) {
//         currentAddOns.splice(index, 1)
//       } else {
//         currentAddOns.push(value)
//       }
//       return {
//         ...prev,
//         addOns: currentAddOns,
//       }
//     })
//   }

//   const handleGetQuote = () => {
//     if (isComplete) {
//       const formSection = document.querySelector('.pc-step-wrapper')
//       if (formSection) {
//         formSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
//       }
//       setStep(3)
//     }
//   }

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
//       accounts: getSelectedLabel('accounts', pricing.accounts),
//       add_ons: pricing.addOns.map(v => getSelectedLabel('addOns', v)).join(', '),
//       frequency: getSelectedLabel('frequency', pricing.frequency),
//       entity_type: getSelectedLabel('entityType', pricing.entityType),
//       sector: getSelectedLabel('sector', pricing.sector),
//       total_price: totalPrice,
//       price_display: getPriceDisplay(),
//     }

//     try {
//       const response = await fetch(API_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       })

//       const data = await response.json()

//       if (!response.ok) {
//         throw new Error(data.message || 'Something went wrong. Please try again.')
//       }

//       setSubmissionId(data.submission_id || null)
//       setIsSubmitted(true)
//       localStorage.removeItem('pricingCalculatorUser')
//     } catch (err) {
//       setSubmitError(err.message || 'Network error. Please check your connection and try again.')
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const goBack = () => {
//     if (step > 1) {
//       setStep(step - 1)
//     }
//   }

//   const resetAll = () => {
//     setIsSubmitted(false)
//     setStep(1)
//     setPricing({
//       transactionVolume: null,
//       catchUp: null,
//       accounts: null,
//       addOns: [],
//       frequency: null,
//       entityType: null,
//       sector: null,
//     })
//     setUserInfo({
//       name: '',
//       email: '',
//       phone: '',
//       company: '',
//       notes: '',
//     })
//     setSubmitError(null)
//     setSubmissionId(null)
//     localStorage.removeItem('pricingCalculatorUser')
//   }

//   // ─── RENDER FUNCTIONS ───
//   const renderHero = () => (
//     <div className="pc-hero">
//       <div className="pc-hero-bg">
//         <div className="pc-hero-bg-img" style={{ backgroundImage: 'url(https://images.pexels.com/photos/33175667/pexels-photo-33175667.jpeg)' }} />
//         <div className="pc-hero-overlay" />
//       </div>
//       <div className="pc-hero-content">
//         <motion.div
//           className="pc-hero-inner"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="pc-hero-badge">
//             <HiOutlineCheckCircle />
//             <span>Pricing Calculator</span>
//           </div>
//           <h1 className="pc-hero-title">
//             Get Your <span className="pc-hero-gradient">Custom Price</span>
//           </h1>
//           <p className="pc-hero-desc">
//             Answer a few questions and get an instant estimate for your bookkeeping services
//           </p>
//           <div className="pc-hero-stats">
//             <div className="pc-hero-stat">
//               <HiOutlineClock />
//               <span>2 Min</span>
//             </div>
//             <div className="pc-hero-stat">
//               <HiOutlineChartBar />
//               <span>Simple Questions</span>
//             </div>
//             <div className="pc-hero-stat">
//               <HiOutlineShieldCheck />
//               <span>100% Secure</span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   )

//   const renderStep1 = () => (
//     <div className="pc-step pc-step-1">
//       <div className="pc-step-content">
//         <div className="pc-step-icon">
//           <HiOutlineUser />
//         </div>
//         <h2>Let's Get Started</h2>
//         <p>Enter your details to calculate your custom bookkeeping price</p>
        
//         <form onSubmit={handleUserInfoSubmit} className="pc-form">
//           <div className="pc-form-group">
//             <label>
//               <HiOutlineUser />
//               Full Name
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your full name"
//               value={userInfo.name}
//               onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
//               required
//             />
//           </div>
          
//           <div className="pc-form-group">
//             <label>
//               <HiOutlineMail />
//               Email Address
//             </label>
//             <input
//               type="email"
//               placeholder="Enter your email address"
//               value={userInfo.email}
//               onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
//               required
//             />
//           </div>
          
//           {userInfoError && (
//             <p className="pc-form-error">{userInfoError}</p>
//           )}
          
//           <button type="submit" className="pc-btn-primary">
//             Continue to Calculator
//             <HiArrowRight />
//           </button>
//         </form>
        
//         <p className="pc-step-note">
//           <HiOutlineCheckCircle />
//           Your information is secure and will only be used for your quote
//         </p>
//       </div>
//     </div>
//   )

//   const renderStep2 = () => (
//     <div className="pc-step pc-step-2">
//       <div className="pc-step-header">
//         <button onClick={goBack} className="pc-btn-back">
//           <HiArrowLeft />
//           Back
//         </button>
//         <div className="pc-user-badge">
//           <span className="pc-user-name">{userInfo.name}</span>
//           <span className="pc-user-email">{userInfo.email}</span>
//         </div>
//       </div>
      
//       <div className="pc-calculator">
//         <div className="pc-calculator-header">
//           <h2>Bookkeeping Pricing Calculator</h2>
//           <p>Answer 7 quick questions to get your custom price estimate</p>
//           <div className="pc-progress">
//             <div className="pc-progress-bar">
//               <div 
//                 className="pc-progress-fill" 
//                 style={{ 
//                   width: `${(Object.values(pricing).filter(v => v !== null && v !== '' && (Array.isArray(v) ? v.length > 0 : true)).length / 7) * 100}%` 
//                 }}
//               />
//             </div>
//             <span className="pc-progress-text">
//               {Object.values(pricing).filter(v => v !== null && v !== '' && (Array.isArray(v) ? v.length > 0 : true)).length}/7 answered
//             </span>
//           </div>
//         </div>

//         {/* Q1: Transaction Volume */}
//         <div className="pc-calc-question">
//           <div className="pc-calc-question-header">
//             <span className="pc-calc-question-number">1</span>
//             <h4>How many transactions does your business average per month?</h4>
//           </div>
//           <p className="pc-calc-hint">Include all bank and credit card transactions combined. If unsure, estimate on the higher side.</p>
//           <div className="pc-calc-options">
//             {pricingConfig.transactionVolumes.map(option => (
//               <button
//                 key={option.value}
//                 onClick={() => handleSelect('transactionVolume', option.value)}
//                 className={`pc-calc-btn ${pricing.transactionVolume === option.value ? 'active' : ''}`}
//               >
//                 {option.label}
//                 {option.price === 'Custom' ? (
//                   <span className="pc-calc-btn-price">Custom</span>
//                 ) : (
//                   <span className="pc-calc-btn-price">${option.price}</span>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Q2: Catch-up Work */}
//         <div className="pc-calc-question">
//           <div className="pc-calc-question-header">
//             <span className="pc-calc-question-number">2</span>
//             <h4>Do you need any catch-up or clean-up work?</h4>
//           </div>
//           <p className="pc-calc-hint">This applies if your books aren't current or have reconciliation issues that need correcting before ongoing service begins.</p>
//           <div className="pc-calc-options">
//             {pricingConfig.catchUpOptions.map(option => (
//               <button
//                 key={option.value}
//                 onClick={() => handleSelect('catchUp', option.value)}
//                 className={`pc-calc-btn ${pricing.catchUp === option.value ? 'active' : ''}`}
//               >
//                 {option.label}
//                 {option.price > 0 && (
//                   <span className="pc-calc-btn-price">+${option.price}</span>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Q3: Number of Accounts */}
//         <div className="pc-calc-question">
//           <div className="pc-calc-question-header">
//             <span className="pc-calc-question-number">3</span>
//             <h4>How many bank and credit card accounts do you have?</h4>
//           </div>
//           <p className="pc-calc-hint">Count all accounts that would need to be reconciled each month.</p>
//           <div className="pc-calc-options">
//             {pricingConfig.accountOptions.map(option => (
//               <button
//                 key={option.value}
//                 onClick={() => handleSelect('accounts', option.value)}
//                 className={`pc-calc-btn ${pricing.accounts === option.value ? 'active' : ''}`}
//               >
//                 {option.label}
//                 {option.price > 0 && (
//                   <span className="pc-calc-btn-price">+${option.price}</span>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Q4: Add-on Services */}
//         <div className="pc-calc-question">
//           <div className="pc-calc-question-header">
//             <span className="pc-calc-question-number">4</span>
//             <h4>Do you need any of these add-on services?</h4>
//           </div>
//           <p className="pc-calc-hint">Select all that apply. These are optional monthly add-ons to core bookkeeping.</p>
//           <div className="pc-calc-addons">
//             {pricingConfig.addOnOptions.map(option => (
//               <label
//                 key={option.value}
//                 className={`pc-calc-addon ${pricing.addOns.includes(option.value) ? 'active' : ''}`}
//               >
//                 <span className="pc-calc-addon-label">{option.label}</span>
//                 <span className="pc-calc-addon-price">+${option.price}/mo</span>
//                 <input
//                   type="checkbox"
//                   checked={pricing.addOns.includes(option.value)}
//                   onChange={() => handleAddOnToggle(option.value)}
//                 />
//                 <span className="pc-calc-addon-checkmark">
//                   {pricing.addOns.includes(option.value) ? '✓' : ''}
//                 </span>
//               </label>
//             ))}
//           </div>
//           {pricing.addOns.length > 0 && (
//             <div className="pc-calc-addons-total">
//               Add-ons total: <strong>+${pricing.addOns.reduce((sum, val) => {
//                 const addOn = pricingConfig.addOnOptions.find(a => a.value === val)
//                 return sum + (addOn ? addOn.price : 0)
//               }, 0)}/mo</strong>
//             </div>
//           )}
//         </div>

//         {/* Q5: Frequency */}
//         <div className="pc-calc-question">
//           <div className="pc-calc-question-header">
//             <span className="pc-calc-question-number">5</span>
//             <h4>How frequently would you like your books updated?</h4>
//           </div>
//           <div className="pc-calc-options">
//             {pricingConfig.frequencyOptions.map(option => (
//               <button
//                 key={option.value}
//                 onClick={() => handleSelect('frequency', option.value)}
//                 className={`pc-calc-btn ${pricing.frequency === option.value ? 'active' : ''}`}
//               >
//                 {option.label}
//                 <span className="pc-calc-btn-price">
//                   {option.multiplier > 1 ? `×${option.multiplier}` : 'Base'}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Q6: Entity Type */}
//         <div className="pc-calc-question">
//           <div className="pc-calc-question-header">
//             <span className="pc-calc-question-number">6</span>
//             <h4>What type of entity is your business?</h4>
//           </div>
//           <div className="pc-calc-options">
//             {pricingConfig.entityOptions.map(option => (
//               <button
//                 key={option.value}
//                 onClick={() => handleSelect('entityType', option.value)}
//                 className={`pc-calc-btn ${pricing.entityType === option.value ? 'active' : ''}`}
//               >
//                 {option.label}
//                 <span className="pc-calc-btn-price">
//                   {option.multiplier !== 1 ? `×${option.multiplier}` : 'Base'}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Q7: Sector */}
//         <div className="pc-calc-question">
//           <div className="pc-calc-question-header">
//             <span className="pc-calc-question-number">7</span>
//             <h4>Which sector describes you best?</h4>
//           </div>
//           <div className="pc-calc-options pc-calc-options-grid">
//             {pricingConfig.sectorOptions.map(option => (
//               <button
//                 key={option.value}
//                 onClick={() => handleSelect('sector', option.value)}
//                 className={`pc-calc-btn ${pricing.sector === option.value ? 'active' : ''}`}
//               >
//                 {option.label}
//                 <span className="pc-calc-btn-price">
//                   {option.multiplier !== 1 ? `×${option.multiplier}` : ''}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Results */}
//         <div className="pc-calc-result">
//           <div className="pc-calc-result-left">
//             <p className="pc-calc-result-label">Your Estimated Monthly Price</p>
//             <p className="pc-calc-result-price">{getPriceDisplay()}</p>
//             {isComplete && (
//               <p className="pc-calc-result-breakdown">
//                 Base: ${pricingConfig.transactionVolumes.find(v => v.value === pricing.transactionVolume)?.price || 0}
//                 {pricing.accounts && pricingConfig.accountOptions.find(v => v.value === pricing.accounts)?.price > 0 && 
//                   ` + Accounts: $${pricingConfig.accountOptions.find(v => v.value === pricing.accounts)?.price || 0}`
//                 }
//                 {pricing.addOns.length > 0 && 
//                   ` + Add-ons: $${pricing.addOns.reduce((sum, val) => {
//                     const addOn = pricingConfig.addOnOptions.find(a => a.value === val)
//                     return sum + (addOn ? addOn.price : 0)
//                   }, 0)}`
//                 }
//                 {pricing.catchUp && pricingConfig.catchUpOptions.find(v => v.value === pricing.catchUp)?.price > 0 &&
//                   ` + Catch-up: $${pricingConfig.catchUpOptions.find(v => v.value === pricing.catchUp)?.price || 0}`
//                 }
//               </p>
//             )}
//           </div>
//           {!isComplete && (
//             <div className="pc-calc-result-right">
//               <p className="pc-calc-result-hint">Please answer all 7 questions for an accurate estimate</p>
//             </div>
//           )}
//         </div>

//         <button
//           onClick={handleGetQuote}
//           disabled={!isComplete}
//           className={`pc-calc-submit ${isComplete ? 'active' : ''}`}
//         >
//           {isComplete ? (
//             <>
//               <span>Get Your Custom Quote</span>
//               <HiArrowRight />
//             </>
//           ) : (
//             'Complete All Questions to Get Quote'
//           )}
//         </button>
//       </div>
//     </div>
//   )

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
//             <p className="pc-success-desc">
//               We will review your information and contact you within 24 hours with your detailed quote.
//             </p>
//             <button onClick={resetAll} className="pc-btn-primary">
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
//           <button onClick={goBack} className="pc-btn-back">
//             <HiArrowLeft />
//             Back to Calculator
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

//           <div className="pc-final-price-summary">
//             <span className="pc-final-price-label">Estimated Monthly Price</span>
//             <span className="pc-final-price-amount">{getPriceDisplay()}</span>
//           </div>

//           <div className="pc-final-selections">
//             <div className="pc-final-selection-item">
//               <span className="pc-final-selection-label">Transaction Volume</span>
//               <span className="pc-final-selection-value">
//                 {getSelectedLabel('transactionVolume', pricing.transactionVolume)}
//               </span>
//             </div>
//             <div className="pc-final-selection-item">
//               <span className="pc-final-selection-label">Catch-up Work</span>
//               <span className="pc-final-selection-value">
//                 {getSelectedLabel('catchUp', pricing.catchUp)}
//               </span>
//             </div>
//             <div className="pc-final-selection-item">
//               <span className="pc-final-selection-label">Accounts</span>
//               <span className="pc-final-selection-value">
//                 {getSelectedLabel('accounts', pricing.accounts)}
//               </span>
//             </div>
//             <div className="pc-final-selection-item">
//               <span className="pc-final-selection-label">Frequency</span>
//               <span className="pc-final-selection-value">
//                 {getSelectedLabel('frequency', pricing.frequency)}
//               </span>
//             </div>
//             <div className="pc-final-selection-item">
//               <span className="pc-final-selection-label">Entity Type</span>
//               <span className="pc-final-selection-value">
//                 {getSelectedLabel('entityType', pricing.entityType)}
//               </span>
//             </div>
//             <div className="pc-final-selection-item">
//               <span className="pc-final-selection-label">Sector</span>
//               <span className="pc-final-selection-value">
//                 {getSelectedLabel('sector', pricing.sector)}
//               </span>
//             </div>
//             {pricing.addOns.length > 0 && (
//               <div className="pc-final-selection-item">
//                 <span className="pc-final-selection-label">Add-ons</span>
//                 <span className="pc-final-selection-value">
//                   {pricing.addOns.map(v => getSelectedLabel('addOns', v)).join(', ')}
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
//       <main>
//         <section className="pc-section">
//           <div className="pc-container">
//             {!isSubmitted && (
//               <div className="pc-steps-indicator">
//                 <div className={`pc-step-dot ${step >= 1 ? 'active' : ''}`}>
//                   <span>1</span>
//                   <span className="pc-step-label">Your Details</span>
//                 </div>
//                 <div className={`pc-step-line ${step >= 2 ? 'active' : ''}`} />
//                 <div className={`pc-step-dot ${step >= 2 ? 'active' : ''}`}>
//                   <span>2</span>
//                   <span className="pc-step-label">Calculate</span>
//                 </div>
//                 <div className={`pc-step-line ${step >= 3 ? 'active' : ''}`} />
//                 <div className={`pc-step-dot ${step >= 3 ? 'active' : ''}`}>
//                   <span>3</span>
//                   <span className="pc-step-label">Get Quote</span>
//                 </div>
//               </div>
//             )}

//             <div className="pc-step-wrapper">
//               {step === 1 && renderStep1()}
//               {step === 2 && renderStep2()}
//               {step === 3 && renderStep3()}
//             </div>
//           </div>
//         </section>
//       </main>
//       <FooterSection />
//     </>
//   )
// }


// PricingCalculator.jsx
// import { useState, useEffect, useMemo } from 'react'
// import { motion } from 'framer-motion'
// import {
//   HiArrowRight,
//   HiArrowLeft,
//   HiOutlineCheckCircle,
//   HiOutlineUser,
//   HiOutlinePhone,
//   HiOutlineBuildingOffice,
//   HiOutlineBriefcase,
//   HiOutlineCheck,
//   HiOutlineChartBar,
//   HiOutlineCurrencyDollar,
//   HiOutlineClock,
//   HiOutlineShieldCheck,
// } from 'react-icons/hi2'
// import { HiOutlineMail } from 'react-icons/hi'
// import { Link } from 'react-router-dom'
// import Navbar from '../../Navbar/index'
// import FooterSection from '../../Footer/index'
// import './PricingCalculator.css'

// // ─── API CONFIGURATION ───
// const API_URL = 'https://zeta-v-invoicemanagement-ddgwdzg2dchdfaf4.centralindia-01.azurewebsites.net/api/pricing/submit'

// // ─── PRICING CONFIG ───
// const pricingConfig = {
//   transactionVolumes: [
//     { label: 'Low vol (10-100)', value: '10-100', price: 500 },
//     { label: 'Moderate (100-500)', value: '100-500', price: 1100 },
//     { label: 'High (500-1000)', value: '500-1000', price: 1800 },
//     { label: 'Enterprise (1000-2000)', value: '1000-2000', price: 2600 },
//     { label: 'Enterprise+ (2000+)', value: '2000+', price: 'Custom' },
//   ],
//   catchUpOptions: [
//     { label: 'No Books are current', value: 'current', price: 0 },
//     { label: '1-3 months (Minor)', value: '1-3', price: 500 },
//     { label: '3-6 months (Moderate)', value: '3-6', price: 1000 },
//     { label: '7-12 months (Significant)', value: '7-12', price: 2000 },
//     { label: '13+ months (Major)', value: '13+', price: 4000 },
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
//     { label: 'Weekly', value: 'weekly', multiplier: 1.5 },
//     { label: 'Fortnightly', value: 'fortnightly', multiplier: 1.2 },
//     { label: 'Monthly', value: 'monthly', multiplier: 1 },
//   ],
//   entityOptions: [
//     { label: 'Sole Prop / Single LLC', value: 'sole', multiplier: 1 },
//     { label: 'S Corp', value: 'scorp', multiplier: 1.1 },
//     { label: 'C-Corp', value: 'ccorp', multiplier: 1.15 },
//     { label: 'Partnership', value: 'partnership', multiplier: 1.1 },
//     { label: 'Non Profit', value: 'nonprofit', multiplier: 0.95 },
//   ],
//   sectorOptions: [
//     { label: 'Retail', value: 'retail', multiplier: 1 },
//     { label: 'Manufacturing', value: 'manufacturing', multiplier: 1.1 },
//     { label: 'eCommerce', value: 'ecommerce', multiplier: 1.05 },
//     { label: 'Hotel', value: 'hotel', multiplier: 1.05 },
//     { label: 'F&B', value: 'fb', multiplier: 1 },
//     { label: 'Real Estate', value: 'realestate', multiplier: 1 },
//     { label: 'Professional Services', value: 'professional', multiplier: 1 },
//     { label: 'Others', value: 'others', multiplier: 1 },
//   ],
// }

// export default function PricingCalculator() {
//   // ─── STATE ───
//   const [step, setStep] = useState(1)
//   const [userInfo, setUserInfo] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     notes: '',
//   })
//   const [userInfoError, setUserInfoError] = useState('')
//   const [pricing, setPricing] = useState({
//     transactionVolume: null,
//     catchUp: null,
//     accounts: null,
//     addOns: [],
//     frequency: null,
//     entityType: null,
//     sector: null,
//   })
//   const [isSubmitted, setIsSubmitted] = useState(false)
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitError, setSubmitError] = useState(null)
//   const [submissionId, setSubmissionId] = useState(null)

//   // ─── SCROLL TO TOP ON SUCCESS ───
//   useEffect(() => {
//     if (isSubmitted) {
//       window.scrollTo({ top: 0, behavior: 'smooth' })
//     }
//   }, [isSubmitted])

//   // ─── LOCAL STORAGE ───
//   useEffect(() => {
//     const savedUser = localStorage.getItem('pricingCalculatorUser')
//     if (savedUser) {
//       try {
//         const parsed = JSON.parse(savedUser)
//         setUserInfo(parsed)
//         if (parsed.name && parsed.email) {
//           setStep(2)
//         }
//       } catch (e) {
//         console.error('Error loading user data')
//       }
//     }
//   }, [])

//   const saveUserInfo = (data) => {
//     localStorage.setItem('pricingCalculatorUser', JSON.stringify(data))
//   }

//   // ─── CALCULATIONS ───
//   const totalPrice = useMemo(() => {
//     let basePrice = 0
//     let catchUpCost = 0
//     let accountCost = 0
//     let addOnsTotal = 0
//     let frequencyMultiplier = 1
//     let entityMultiplier = 1
//     let sectorMultiplier = 1

//     const selectedVolume = pricingConfig.transactionVolumes.find(
//       v => v.value === pricing.transactionVolume
//     )
//     if (selectedVolume) {
//       basePrice = typeof selectedVolume.price === 'number' ? selectedVolume.price : 0
//     }

//     const selectedCatchUp = pricingConfig.catchUpOptions.find(
//       v => v.value === pricing.catchUp
//     )
//     if (selectedCatchUp) catchUpCost = selectedCatchUp.price

//     const selectedAccounts = pricingConfig.accountOptions.find(
//       v => v.value === pricing.accounts
//     )
//     if (selectedAccounts) accountCost = selectedAccounts.price

//     pricing.addOns.forEach(addOnValue => {
//       const addOn = pricingConfig.addOnOptions.find(a => a.value === addOnValue)
//       if (addOn) addOnsTotal += addOn.price
//     })

//     const selectedFrequency = pricingConfig.frequencyOptions.find(
//       v => v.value === pricing.frequency
//     )
//     if (selectedFrequency) frequencyMultiplier = selectedFrequency.multiplier

//     const selectedEntity = pricingConfig.entityOptions.find(
//       v => v.value === pricing.entityType
//     )
//     if (selectedEntity) entityMultiplier = selectedEntity.multiplier

//     const selectedSector = pricingConfig.sectorOptions.find(
//       v => v.value === pricing.sector
//     )
//     if (selectedSector) sectorMultiplier = selectedSector.multiplier

//     const monthlyTotal = (basePrice + accountCost + addOnsTotal) *
//       frequencyMultiplier *
//       entityMultiplier *
//       sectorMultiplier

//     return Math.round(monthlyTotal + catchUpCost)
//   }, [pricing])

//   const isComplete = useMemo(() => {
//     return pricing.transactionVolume !== null &&
//       pricing.catchUp !== null &&
//       pricing.accounts !== null &&
//       pricing.frequency !== null &&
//       pricing.entityType !== null &&
//       pricing.sector !== null
//   }, [pricing])

//   // ─── HELPERS ───
//   const getSelectedLabel = (category, value) => {
//     const configMap = {
//       transactionVolume: pricingConfig.transactionVolumes,
//       catchUp: pricingConfig.catchUpOptions,
//       accounts: pricingConfig.accountOptions,
//       frequency: pricingConfig.frequencyOptions,
//       entityType: pricingConfig.entityOptions,
//       sector: pricingConfig.sectorOptions,
//     }
//     const options = configMap[category] || []
//     const found = options.find(opt => opt.value === value)
//     return found ? found.label : ''
//   }

//   const getPriceDisplay = () => {
//     const selectedVolume = pricingConfig.transactionVolumes.find(
//       v => v.value === pricing.transactionVolume
//     )
//     if (selectedVolume && selectedVolume.price === 'Custom') {
//       return 'Custom'
//     }
//     return '$' + totalPrice.toLocaleString()
//   }

//   // ─── HANDLERS ───
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
//     saveUserInfo(userInfo)
//     setStep(2)
//   }

//   const handleSelect = (category, value) => {
//     setPricing(prev => ({
//       ...prev,
//       [category]: value,
//     }))
//   }

//   const handleAddOnToggle = (value) => {
//     setPricing(prev => {
//       const currentAddOns = [...prev.addOns]
//       const index = currentAddOns.indexOf(value)
//       if (index > -1) {
//         currentAddOns.splice(index, 1)
//       } else {
//         currentAddOns.push(value)
//       }
//       return {
//         ...prev,
//         addOns: currentAddOns,
//       }
//     })
//   }

//   const handleGetQuote = () => {
//     if (isComplete) {
//       const formSection = document.querySelector('.pc-step-wrapper')
//       if (formSection) {
//         formSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
//       }
//       setStep(3)
//     }
//   }

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
//       accounts: getSelectedLabel('accounts', pricing.accounts),
//       add_ons: pricing.addOns.map(v => getSelectedLabel('addOns', v)).join(', '),
//       frequency: getSelectedLabel('frequency', pricing.frequency),
//       entity_type: getSelectedLabel('entityType', pricing.entityType),
//       sector: getSelectedLabel('sector', pricing.sector),
//       total_price: totalPrice,
//       price_display: getPriceDisplay(),
//     }

//     try {
//       const response = await fetch(API_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       })

//       const data = await response.json()

//       if (!response.ok) {
//         throw new Error(data.message || 'Something went wrong. Please try again.')
//       }

//       setSubmissionId(data.submission_id || null)
//       setIsSubmitted(true)
//       localStorage.removeItem('pricingCalculatorUser')
//     } catch (err) {
//       setSubmitError(err.message || 'Network error. Please check your connection and try again.')
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const goBack = () => {
//     if (step > 1) {
//       setStep(step - 1)
//     }
//   }

//   const resetAll = () => {
//     setIsSubmitted(false)
//     setStep(1)
//     setPricing({
//       transactionVolume: null,
//       catchUp: null,
//       accounts: null,
//       addOns: [],
//       frequency: null,
//       entityType: null,
//       sector: null,
//     })
//     setUserInfo({
//       name: '',
//       email: '',
//       phone: '',
//       company: '',
//       notes: '',
//     })
//     setSubmitError(null)
//     setSubmissionId(null)
//     localStorage.removeItem('pricingCalculatorUser')
//     window.scrollTo({ top: 0, behavior: 'smooth' })
//   }

//   // ─── RENDER FUNCTIONS ───
//   const renderHero = () => (
//     <div className="pc-hero">
//       <div className="pc-hero-bg">
//         <div className="pc-hero-bg-img" style={{ backgroundImage: 'url(https://images.pexels.com/photos/33175667/pexels-photo-33175667.jpeg)' }} />
//         <div className="pc-hero-overlay" />
//       </div>
//       <div className="pc-hero-content">
//         <motion.div
//           className="pc-hero-inner"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="pc-hero-badge">
//             <HiOutlineCheckCircle />
//             <span>Pricing Calculator</span>
//           </div>
//           <h1 className="pc-hero-title">
//             Get Your <span className="pc-hero-gradient">Custom Price</span>
//           </h1>
//           <p className="pc-hero-desc">
//             Answer a few questions and get an instant estimate for your bookkeeping services
//           </p>
//           <div className="pc-hero-stats">
//             <div className="pc-hero-stat">
//               <HiOutlineClock />
//               <span>2 Min</span>
//             </div>
//             <div className="pc-hero-stat">
//               <HiOutlineChartBar />
//               <span>Simple Questions</span>
//             </div>
//             <div className="pc-hero-stat">
//               <HiOutlineShieldCheck />
//               <span>100% Secure</span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   )

//   const renderStep1 = () => (
//     <div className="pc-step pc-step-1">
//       <div className="pc-step-content">
//         <div className="pc-step-icon">
//           <HiOutlineUser />
//         </div>
//         <h2>Let's Get Started</h2>
//         <p>Enter your details to calculate your custom bookkeeping price</p>
        
//         <form onSubmit={handleUserInfoSubmit} className="pc-form">
//           <div className="pc-form-group">
//             <label>
//               <HiOutlineUser />
//               Full Name
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your full name"
//               value={userInfo.name}
//               onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
//               required
//             />
//           </div>
          
//           <div className="pc-form-group">
//             <label>
//               <HiOutlineMail />
//               Email Address
//             </label>
//             <input
//               type="email"
//               placeholder="Enter your email address"
//               value={userInfo.email}
//               onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
//               required
//             />
//           </div>
          
//           {userInfoError && (
//             <p className="pc-form-error">{userInfoError}</p>
//           )}
          
//           <button type="submit" className="pc-btn-primary">
//             Continue to Calculator
//             <HiArrowRight />
//           </button>
//         </form>
        
//         <p className="pc-step-note">
//           <HiOutlineCheckCircle />
//           Your information is secure and will only be used for your quote
//         </p>
//       </div>
//     </div>
//   )

//   const renderStep2 = () => (
//     <div className="pc-step pc-step-2">
//       <div className="pc-step-header">
//         <button onClick={goBack} className="pc-btn-back">
//           <HiArrowLeft />
//           Back
//         </button>
//         <div className="pc-user-badge">
//           <span className="pc-user-name">{userInfo.name}</span>
//           <span className="pc-user-email">{userInfo.email}</span>
//         </div>
//       </div>
      
//       <div className="pc-calculator">
//         <div className="pc-calculator-header">
//           <h2>Bookkeeping Pricing Calculator</h2>
//           <p>Answer 7 quick questions to get your custom price estimate</p>
//           <div className="pc-progress">
//             <div className="pc-progress-bar">
//               <div 
//                 className="pc-progress-fill" 
//                 style={{ 
//                   width: `${(Object.values(pricing).filter(v => v !== null && v !== '' && (Array.isArray(v) ? v.length > 0 : true)).length / 7) * 100}%` 
//                 }}
//               />
//             </div>
//             <span className="pc-progress-text">
//               {Object.values(pricing).filter(v => v !== null && v !== '' && (Array.isArray(v) ? v.length > 0 : true)).length}/7 answered
//             </span>
//           </div>
//         </div>

//         {/* Q1 - Q7 remain unchanged — we omit them for brevity, but they are exactly the same as before */}
//         {/* Q1: Transaction Volume */}
//         <div className="pc-calc-question">
//           <div className="pc-calc-question-header">
//             <span className="pc-calc-question-number">1</span>
//             <h4>How many transactions does your business average per month?</h4>
//           </div>
//           <p className="pc-calc-hint">Include all bank and credit card transactions combined. If unsure, estimate on the higher side.</p>
//           <div className="pc-calc-options">
//             {pricingConfig.transactionVolumes.map(option => (
//               <button
//                 key={option.value}
//                 onClick={() => handleSelect('transactionVolume', option.value)}
//                 className={`pc-calc-btn ${pricing.transactionVolume === option.value ? 'active' : ''}`}
//               >
//                 {option.label}
//                 {option.price === 'Custom' ? (
//                   <span className="pc-calc-btn-price">Custom</span>
//                 ) : (
//                   <span className="pc-calc-btn-price">${option.price}</span>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Q2: Catch-up Work */}
//         <div className="pc-calc-question">
//           <div className="pc-calc-question-header">
//             <span className="pc-calc-question-number">2</span>
//             <h4>Do you need any catch-up or clean-up work?</h4>
//           </div>
//           <p className="pc-calc-hint">This applies if your books aren't current or have reconciliation issues that need correcting before ongoing service begins.</p>
//           <div className="pc-calc-options">
//             {pricingConfig.catchUpOptions.map(option => (
//               <button
//                 key={option.value}
//                 onClick={() => handleSelect('catchUp', option.value)}
//                 className={`pc-calc-btn ${pricing.catchUp === option.value ? 'active' : ''}`}
//               >
//                 {option.label}
//                 {option.price > 0 && (
//                   <span className="pc-calc-btn-price">+${option.price}</span>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Q3: Number of Accounts */}
//         <div className="pc-calc-question">
//           <div className="pc-calc-question-header">
//             <span className="pc-calc-question-number">3</span>
//             <h4>How many bank and credit card accounts do you have?</h4>
//           </div>
//           <p className="pc-calc-hint">Count all accounts that would need to be reconciled each month.</p>
//           <div className="pc-calc-options">
//             {pricingConfig.accountOptions.map(option => (
//               <button
//                 key={option.value}
//                 onClick={() => handleSelect('accounts', option.value)}
//                 className={`pc-calc-btn ${pricing.accounts === option.value ? 'active' : ''}`}
//               >
//                 {option.label}
//                 {option.price > 0 && (
//                   <span className="pc-calc-btn-price">+${option.price}</span>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Q4: Add-on Services */}
//         <div className="pc-calc-question">
//           <div className="pc-calc-question-header">
//             <span className="pc-calc-question-number">4</span>
//             <h4>Do you need any of these add-on services?</h4>
//           </div>
//           <p className="pc-calc-hint">Select all that apply. These are optional monthly add-ons to core bookkeeping.</p>
//           <div className="pc-calc-addons">
//             {pricingConfig.addOnOptions.map(option => (
//               <label
//                 key={option.value}
//                 className={`pc-calc-addon ${pricing.addOns.includes(option.value) ? 'active' : ''}`}
//               >
//                 <span className="pc-calc-addon-label">{option.label}</span>
//                 <span className="pc-calc-addon-price">+${option.price}/mo</span>
//                 <input
//                   type="checkbox"
//                   checked={pricing.addOns.includes(option.value)}
//                   onChange={() => handleAddOnToggle(option.value)}
//                 />
//                 <span className="pc-calc-addon-checkmark">
//                   {pricing.addOns.includes(option.value) ? '✓' : ''}
//                 </span>
//               </label>
//             ))}
//           </div>
//           {pricing.addOns.length > 0 && (
//             <div className="pc-calc-addons-total">
//               Add-ons total: <strong>+${pricing.addOns.reduce((sum, val) => {
//                 const addOn = pricingConfig.addOnOptions.find(a => a.value === val)
//                 return sum + (addOn ? addOn.price : 0)
//               }, 0)}/mo</strong>
//             </div>
//           )}
//         </div>

//         {/* Q5: Frequency */}
//         <div className="pc-calc-question">
//           <div className="pc-calc-question-header">
//             <span className="pc-calc-question-number">5</span>
//             <h4>How frequently would you like your books updated?</h4>
//           </div>
//           <div className="pc-calc-options">
//             {pricingConfig.frequencyOptions.map(option => (
//               <button
//                 key={option.value}
//                 onClick={() => handleSelect('frequency', option.value)}
//                 className={`pc-calc-btn ${pricing.frequency === option.value ? 'active' : ''}`}
//               >
//                 {option.label}
//                 <span className="pc-calc-btn-price">
//                   {option.multiplier > 1 ? `×${option.multiplier}` : 'Base'}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Q6: Entity Type */}
//         <div className="pc-calc-question">
//           <div className="pc-calc-question-header">
//             <span className="pc-calc-question-number">6</span>
//             <h4>What type of entity is your business?</h4>
//           </div>
//           <div className="pc-calc-options">
//             {pricingConfig.entityOptions.map(option => (
//               <button
//                 key={option.value}
//                 onClick={() => handleSelect('entityType', option.value)}
//                 className={`pc-calc-btn ${pricing.entityType === option.value ? 'active' : ''}`}
//               >
//                 {option.label}
//                 <span className="pc-calc-btn-price">
//                   {option.multiplier !== 1 ? `×${option.multiplier}` : 'Base'}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Q7: Sector */}
//         <div className="pc-calc-question">
//           <div className="pc-calc-question-header">
//             <span className="pc-calc-question-number">7</span>
//             <h4>Which sector describes you best?</h4>
//           </div>
//           <div className="pc-calc-options pc-calc-options-grid">
//             {pricingConfig.sectorOptions.map(option => (
//               <button
//                 key={option.value}
//                 onClick={() => handleSelect('sector', option.value)}
//                 className={`pc-calc-btn ${pricing.sector === option.value ? 'active' : ''}`}
//               >
//                 {option.label}
//                 <span className="pc-calc-btn-price">
//                   {option.multiplier !== 1 ? `×${option.multiplier}` : ''}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Results */}
//         <div className="pc-calc-result">
//           <div className="pc-calc-result-left">
//             <p className="pc-calc-result-label">Your Estimated Monthly Price</p>
//             <p className="pc-calc-result-price">{getPriceDisplay()}</p>
//             {isComplete && (
//               <p className="pc-calc-result-breakdown">
//                 Base: ${pricingConfig.transactionVolumes.find(v => v.value === pricing.transactionVolume)?.price || 0}
//                 {pricing.accounts && pricingConfig.accountOptions.find(v => v.value === pricing.accounts)?.price > 0 && 
//                   ` + Accounts: $${pricingConfig.accountOptions.find(v => v.value === pricing.accounts)?.price || 0}`
//                 }
//                 {pricing.addOns.length > 0 && 
//                   ` + Add-ons: $${pricing.addOns.reduce((sum, val) => {
//                     const addOn = pricingConfig.addOnOptions.find(a => a.value === val)
//                     return sum + (addOn ? addOn.price : 0)
//                   }, 0)}`
//                 }
//                 {pricing.catchUp && pricingConfig.catchUpOptions.find(v => v.value === pricing.catchUp)?.price > 0 &&
//                   ` + Catch-up: $${pricingConfig.catchUpOptions.find(v => v.value === pricing.catchUp)?.price || 0}`
//                 }
//               </p>
//             )}
//           </div>
//           {!isComplete && (
//             <div className="pc-calc-result-right">
//               <p className="pc-calc-result-hint">Please answer all 7 questions for an accurate estimate</p>
//             </div>
//           )}
//         </div>

//         <button
//           onClick={handleGetQuote}
//           disabled={!isComplete}
//           className={`pc-calc-submit ${isComplete ? 'active' : ''}`}
//         >
//           {isComplete ? (
//             <>
//               <span>Get Your Custom Quote</span>
//               <HiArrowRight />
//             </>
//           ) : (
//             'Complete All Questions to Get Quote'
//           )}
//         </button>
//       </div>
//     </div>
//   )

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
//             <p className="pc-success-desc">
//               We will review your information and contact you within 24 hours with your detailed quote.
//             </p>
//             <button onClick={resetAll} className="pc-btn-primary">
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
//           <button onClick={goBack} className="pc-btn-back">
//             <HiArrowLeft />
//             Back to Calculator
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

//           <div className="pc-final-price-summary">
//             <span className="pc-final-price-label">Estimated Monthly Price</span>
//             <span className="pc-final-price-amount">{getPriceDisplay()}</span>
//           </div>

//           <div className="pc-final-selections">
//             <div className="pc-final-selection-item">
//               <span className="pc-final-selection-label">Transaction Volume</span>
//               <span className="pc-final-selection-value">
//                 {getSelectedLabel('transactionVolume', pricing.transactionVolume)}
//               </span>
//             </div>
//             <div className="pc-final-selection-item">
//               <span className="pc-final-selection-label">Catch-up Work</span>
//               <span className="pc-final-selection-value">
//                 {getSelectedLabel('catchUp', pricing.catchUp)}
//               </span>
//             </div>
//             <div className="pc-final-selection-item">
//               <span className="pc-final-selection-label">Accounts</span>
//               <span className="pc-final-selection-value">
//                 {getSelectedLabel('accounts', pricing.accounts)}
//               </span>
//             </div>
//             <div className="pc-final-selection-item">
//               <span className="pc-final-selection-label">Frequency</span>
//               <span className="pc-final-selection-value">
//                 {getSelectedLabel('frequency', pricing.frequency)}
//               </span>
//             </div>
//             <div className="pc-final-selection-item">
//               <span className="pc-final-selection-label">Entity Type</span>
//               <span className="pc-final-selection-value">
//                 {getSelectedLabel('entityType', pricing.entityType)}
//               </span>
//             </div>
//             <div className="pc-final-selection-item">
//               <span className="pc-final-selection-label">Sector</span>
//               <span className="pc-final-selection-value">
//                 {getSelectedLabel('sector', pricing.sector)}
//               </span>
//             </div>
//             {pricing.addOns.length > 0 && (
//               <div className="pc-final-selection-item">
//                 <span className="pc-final-selection-label">Add-ons</span>
//                 <span className="pc-final-selection-value">
//                   {pricing.addOns.map(v => getSelectedLabel('addOns', v)).join(', ')}
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
//       <main>
//         <section className="pc-section">
//           <div className="pc-container">
//             {!isSubmitted && (
//               <div className="pc-steps-indicator">
//                 <div className={`pc-step-dot ${step >= 1 ? 'active' : ''}`}>
//                   <span>1</span>
//                   <span className="pc-step-label">Your Details</span>
//                 </div>
//                 <div className={`pc-step-line ${step >= 2 ? 'active' : ''}`} />
//                 <div className={`pc-step-dot ${step >= 2 ? 'active' : ''}`}>
//                   <span>2</span>
//                   <span className="pc-step-label">Calculate</span>
//                 </div>
//                 <div className={`pc-step-line ${step >= 3 ? 'active' : ''}`} />
//                 <div className={`pc-step-dot ${step >= 3 ? 'active' : ''}`}>
//                   <span>3</span>
//                   <span className="pc-step-label">Get Quote</span>
//                 </div>
//               </div>
//             )}

//             <div className="pc-step-wrapper">
//               {step === 1 && renderStep1()}
//               {step === 2 && renderStep2()}
//               {step === 3 && renderStep3()}
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
  transactionVolumes: [
    { label: 'Low vol', sublabel: '10–100', value: '10-100', price: 500 },
    { label: 'Moderate', sublabel: '100–500', value: '100-500', price: 1100 },
    { label: 'High', sublabel: '500–1000', value: '500-1000', price: 1800 },
    { label: 'Enterprise', sublabel: '1000–2000', value: '1000-2000', price: 2600 },
    { label: 'Enterprise+', sublabel: '2000+', value: '2000+', price: 'Custom' },
  ],
  catchUpOptions: [
    { label: 'No Books are current', value: 'current', price: 0 },
    { label: '1-3 months (Minor)', value: '1-3', price: 500 },
    { label: '3-6 months (Moderate)', value: '3-6', price: 1000 },
    { label: '7-12 months (Significant)', value: '7-12', price: 2000 },
    { label: '13+ months (Major)', value: '13+', price: 4000 },
  ],
  accountOptions: [
    { label: '1-2 accounts', value: '1-2', price: 0 },
    { label: '3-5 accounts', value: '3-5', price: 150 },
    { label: '6+ accounts', value: '6+', price: 300 },
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
    { label: 'Weekly', value: 'weekly', multiplier: 1 },
    { label: 'Fortnightly', value: 'fortnightly', multiplier: 1 },
    { label: 'Monthly', value: 'monthly', multiplier: 1 },
  ],
  entityOptions: [
    { label: 'Sole Prop / Single LLC', value: 'sole', multiplier: 1 },
    { label: 'S Corp', value: 'scorp', multiplier: 1 },
    { label: 'C-Corp', value: 'ccorp', multiplier: 1 },
    { label: 'Partnership', value: 'partnership', multiplier: 1 },
    { label: 'Non Profit', value: 'nonprofit', multiplier: 1 },
  ],
  sectorOptions: [
    { label: 'Retail', value: 'retail', multiplier: 1 },
    { label: 'Manufacturing', value: 'manufacturing', multiplier: 1 },
    { label: 'eCommerce', value: 'ecommerce', multiplier: 1 },
    { label: 'Hotel', value: 'hotel', multiplier: 1 },
    { label: 'F&B', value: 'fb', multiplier: 1 },
    { label: 'Real Estate', value: 'realestate', multiplier: 1 },
    { label: 'Professional Services', value: 'professional', multiplier: 1 },
    { label: 'Others', value: 'others', multiplier: 1 },
  ],
}

const QUESTIONS = ['transactionVolume', 'catchUp', 'accounts', 'addOns', 'frequency', 'entityType', 'sector']

export default function PricingCalculator() {
  // ─── STATE ───
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
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [submissionId, setSubmissionId] = useState(null)

  const location = useLocation()

  // ─── SCROLL HANDLING ───
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
  const totalPrice = useMemo(() => {
    let basePrice = 0, catchUpCost = 0, accountCost = 0, addOnsTotal = 0
    let freqMult = 1, entityMult = 1, sectorMult = 1

    const vol = pricingConfig.transactionVolumes.find(v => v.value === pricing.transactionVolume)
    if (vol) basePrice = typeof vol.price === 'number' ? vol.price : 0

    const cu = pricingConfig.catchUpOptions.find(v => v.value === pricing.catchUp)
    if (cu) catchUpCost = cu.price

    const acc = pricingConfig.accountOptions.find(v => v.value === pricing.accounts)
    if (acc) accountCost = acc.price

    pricing.addOns.forEach(val => {
      const a = pricingConfig.addOnOptions.find(x => x.value === val)
      if (a) addOnsTotal += a.price
    })

    const freq = pricingConfig.frequencyOptions.find(v => v.value === pricing.frequency)
    if (freq) freqMult = freq.multiplier

    const ent = pricingConfig.entityOptions.find(v => v.value === pricing.entityType)
    if (ent) entityMult = ent.multiplier

    const sec = pricingConfig.sectorOptions.find(v => v.value === pricing.sector)
    if (sec) sectorMult = sec.multiplier

    return Math.round((basePrice + accountCost + addOnsTotal) * freqMult * entityMult * sectorMult + catchUpCost)
  }, [pricing])

  const isCustomPrice = useMemo(() => {
    return pricingConfig.transactionVolumes.find(v => v.value === pricing.transactionVolume)?.price === 'Custom'
  }, [pricing.transactionVolume])

  const getPriceDisplay = () => isCustomPrice ? 'Custom' : '$' + totalPrice.toLocaleString()

  const isAllAnswered = useMemo(() => {
    return pricing.transactionVolume !== null &&
      pricing.catchUp !== null &&
      pricing.accounts !== null &&
      pricing.frequency !== null &&
      pricing.entityType !== null &&
      pricing.sector !== null
  }, [pricing])

  // ─── HELPERS ───
  const getSelectedLabel = (category, value) => {
    const map = {
      transactionVolume: pricingConfig.transactionVolumes,
      catchUp: pricingConfig.catchUpOptions,
      accounts: pricingConfig.accountOptions,
      frequency: pricingConfig.frequencyOptions,
      entityType: pricingConfig.entityOptions,
      sector: pricingConfig.sectorOptions,
    }
    return (map[category] || []).find(o => o.value === value)?.label || ''
  }

  const isQuestionAnswered = (index) => {
    const key = QUESTIONS[index]
    if (key === 'addOns') return visibleUpTo > index
    return pricing[key] !== null
  }

  // ─── HANDLERS ───
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

  // Step 2
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

  // Step 3 submit
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
      accounts: getSelectedLabel('accounts', pricing.accounts),
      add_ons: pricing.addOns.map(v => pricingConfig.addOnOptions.find(a => a.value === v)?.label || v).join(', '),
      frequency: getSelectedLabel('frequency', pricing.frequency),
      entity_type: getSelectedLabel('entityType', pricing.entityType),
      sector: getSelectedLabel('sector', pricing.sector),
      total_price: totalPrice,
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
    setPricing({ transactionVolume: null, catchUp: null, accounts: null, addOns: [], frequency: null, entityType: null, sector: null })
    setUserInfo({ name: '', email: '', phone: '', company: '', notes: '' })
    setUserInfoError('')
    setSubmitError(null)
    setSubmissionId(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // ─── RENDER: STEP 1 (Calculator) ───
  const renderStep1 = () => (
    <div className="pc-step pc-step-1">
      <div className="pc-calc-top">
        <h2>Bookkeeping Pricing Calculator</h2>
        <p>Answer quick questions to get your custom price estimate</p>
        <div className="pc-progress">
          <div className="pc-progress-bar">
            <div className="pc-progress-fill" style={{ width: `${(visibleUpTo / (QUESTIONS.length - 1)) * 100}%` }} />
          </div>
          <span className="pc-progress-text">{Math.min(visibleUpTo + 1, QUESTIONS.length)}/7</span>
        </div>
      </div>

      <div className="pc-questions-list">

        {/* Q1: Transaction Volume — no prices */}
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

        {/* Q2: Catch-up Work — no prices */}
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

        {/* Q3: Number of Accounts — no prices */}
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

        {/* Q4: Add-ons — no prices, no totals */}
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
                  {/* Price removed */}
                  <input type="checkbox" checked={pricing.addOns.includes(opt.value)} onChange={() => handleAddOnToggle(opt.value)} />
                  <span className="pc-calc-addon-checkmark">{pricing.addOns.includes(opt.value) ? '✓' : ''}</span>
                </label>
              ))}
            </div>
            {/* Add-ons total removed */}
            {visibleUpTo === 3 && (
              <button className="pc-addon-continue-btn" onClick={handleAddOnContinue}>
                {pricing.addOns.length > 0 ? `Continue with ${pricing.addOns.length} add-on${pricing.addOns.length > 1 ? 's' : ''}` : 'Continue — no add-ons needed'}
                <HiArrowRight />
              </button>
            )}
          </motion.div>
        )}

        {/* Q5: Frequency — no amounts */}
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

        {/* Q6: Entity Type — no amounts */}
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

        {/* Q7: Sector — no amounts */}
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

        {/* CTA after all 7 answered */}
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

  // ─── RENDER: STEP 2 (Name + Email) ───
  const renderStep2 = () => (
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
        <br></br>

        <p className="pc-step-note">
          <HiOutlineCheckCircle />
          Your information is secure and will only be used for your quote
        </p>
      </div>
    </div>
  )

  // ─── RENDER: STEP 3 (Full form + Success) ───
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

          <div className="pc-final-price-summary">
            <span className="pc-final-price-label">Estimated Monthly Price</span>
            <span className="pc-final-price-amount">{getPriceDisplay()}</span>
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
            {pricing.addOns.length > 0 && (
              <div className="pc-final-selection-item">
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