import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaPlay, FaSearchPlus } from 'react-icons/fa'

export default function GalleryCard({ item, index, onClick }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={cardRef}
      className="gallery-card"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ y: -5 }}
      onClick={() => onClick(item)}
    >
      <div className="gallery-card__image">
        <img src={item.image} alt={item.title} loading="lazy" />
        {item.type === 'video' && (
          <div className="gallery-card__video-badge">
            <FaPlay />
          </div>
        )}
        <div className="gallery-card__overlay">
          <button className="gallery-card__zoom">
            <FaSearchPlus />
          </button>
        </div>
      </div>
      
      <div className="gallery-card__content">
        <h3 className="gallery-card__title">{item.title}</h3>
        <div className="gallery-card__meta">
          <span>{item.date}</span>
          <span>{item.location}</span>
        </div>
      </div>
    </motion.div>
  )
}