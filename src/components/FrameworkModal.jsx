import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import './FrameworkModal.css'

export default function FrameworkModal({ isOpen, onClose, title, content, icon }) {
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      
      return () => {
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.overflow = ''
        window.scrollTo(0, scrollY)
      }
    }
  }, [isOpen])

  // Render modal in a portal to body to ensure it's always on top
  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fm-root">
          {/* Dark overlay */}
          <motion.div
            className="fm-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Centered modal container */}
          <div className="fm-center">
            <motion.div
              className="fm-card"
              initial={{ opacity: 0, scale: 0.75, y: 80 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ 
                duration: 0.55, 
                ease: [0.25, 0.8, 0.25, 1.2],
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button 
                className="fm-close" 
                onClick={onClose}
                whileHover={{ rotate: 90, scale: 1.15, backgroundColor: 'rgba(11,111,232,0.15)' }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes />
              </motion.button>

              {/* Icon with animation */}
              {icon && (
                <motion.div 
                  className="fm-icon"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.15, duration: 0.5, ease: "backOut" }}
                >
                  {icon}
                </motion.div>
              )}

              {/* Title */}
              <motion.h2 
                className="fm-title"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                {title}
              </motion.h2>

              {/* Content */}
              <motion.div 
                className="fm-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                {content}
              </motion.div>

              {/* Close button at bottom */}
              <motion.div 
                className="fm-footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <motion.button 
                  className="fm-btn" 
                  onClick={onClose}
                  whileHover={{ scale: 1.04, y: -2, boxShadow: '0 12px 32px rgba(11,111,232,0.35)' }}
                  whileTap={{ scale: 0.96 }}
                >
                  Close
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  )
}