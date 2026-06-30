import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaTimes, FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa'

export default function GalleryLightbox({ item, onClose, onNext, onPrev, hasNext, hasPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && hasNext) onNext()
      if (e.key === 'ArrowLeft' && hasPrev) onPrev()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose, onNext, onPrev, hasNext, hasPrev])

  if (!item) return null

  return (
    <motion.div
      className="lightbox-overlay"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="lightbox-content"
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="lightbox-close" onClick={onClose}><FaTimes /></button>
        {hasPrev && <button className="lightbox-nav lightbox-nav-prev" onClick={onPrev}><FaChevronLeft /></button>}
        {hasNext && <button className="lightbox-nav lightbox-nav-next" onClick={onNext}><FaChevronRight /></button>}
        <div className="lightbox-image-container">
          {item.type === 'video' ? (
            <div className="lightbox-video">
              <img src={item.image} alt={item.title} />
              <div className="video-play-overlay"><FaPlay /><span>Video Preview</span></div>
            </div>
          ) : (
            <img src={item.image} alt={item.title} />
          )}
        </div>
        <div className="lightbox-info">
          <h3 style={{color:'white'}}>{item.title}</h3>
          {/* <p>{item.description}</p>
          <div className="lightbox-meta"><span>{item.date}</span><span>{item.location}</span></div> */}
        </div>
      </motion.div>
    </motion.div>
  )
}