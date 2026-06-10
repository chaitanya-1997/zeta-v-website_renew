import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import './SuccessScreen.css'

export default function SuccessScreen({ onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000)
    return () => clearInterval(timer)
  }, [onClose])

  return (
    <motion.div
      className="zv-success-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="zv-success-modal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', damping: 20 }}
      >
        <div className="zv-success-icon">
          <FaCheckCircle />
        </div>
        <h2 className="zv-success-title">Application Submitted Successfully!</h2>
        <p className="zv-success-message">Thank you for applying to Zeta-V. Our HR team will review your application and contact you shortly.</p>
        <button className="zv-success-btn" onClick={onClose}>Back to Careers</button>
      </motion.div>
    </motion.div>
  )
}