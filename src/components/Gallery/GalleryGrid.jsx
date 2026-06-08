import './GalleryGrid.css'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Import all 35 images
import ph1 from '../../assets/gallerym/ph1.jpg'
import ph2 from '../../assets/gallerym/ph2.jpg'
import ph3 from '../../assets/gallerym/ph3.jpg'
import ph4 from '../../assets/gallerym/ph4.jpg'
import ph5 from '../../assets/gallerym/ph5.jpg'
import ph6 from '../../assets/gallerym/ph6.jpg'
import ph7 from '../../assets/gallerym/ph7.jpg'
import ph8 from '../../assets/gallerym/ph8.jpg'
import ph9 from '../../assets/gallerym/ph9.jpg'
import ph10 from '../../assets/gallerym/ph10.jpg'
import ph11 from '../../assets/gallerym/ph11.jpg'
import ph12 from '../../assets/gallerym/ph12.jpg'
import ph13 from '../../assets/gallerym/ph13.jpg'
import ph14 from '../../assets/gallerym/ph14.jpg'
import ph15 from '../../assets/gallerym/ph15.jpg'
import ph16 from '../../assets/gallerym/ph16.jpg'
import ph17 from '../../assets/gallerym/ph17.jpg'
import ph18 from '../../assets/gallerym/ph18.jpg'
import ph19 from '../../assets/gallerym/ph19.jpg'
import ph20 from '../../assets/gallerym/ph20.jpg'
import ph21 from '../../assets/gallerym/ph21.jpg'
import ph22 from '../../assets/gallerym/ph22.jpg'
import ph23 from '../../assets/gallerym/ph23.jpg'
import ph24 from '../../assets/gallerym/ph24.jpg'
import ph25 from '../../assets/gallerym/ph25.jpg'
import ph26 from '../../assets/gallerym/ph26.jpg'
import ph27 from '../../assets/gallerym/ph27.jpg'
import ph28 from '../../assets/gallerym/ph28.jpg'
import ph29 from '../../assets/gallerym/ph29.jpg'
import ph30 from '../../assets/gallerym/ph30.jpg'
import ph31 from '../../assets/gallerym/ph31.jpg'
import ph32 from '../../assets/gallerym/ph32.jpg'
import ph33 from '../../assets/gallerym/ph33.jpg'
import ph34 from '../../assets/gallerym/ph34.jpg'
import ph35 from '../../assets/gallerym/ph35.jpg'

const images = [
  { src: ph1, id: 1 }, { src: ph2, id: 2 }, { src: ph3, id: 3 }, { src: ph4, id: 4 }, { src: ph5, id: 5 },
  { src: ph6, id: 6 }, { src: ph7, id: 7 }, { src: ph8, id: 8 }, { src: ph9, id: 9 }, { src: ph10, id: 10 },
  { src: ph11, id: 11 }, { src: ph12, id: 12 }, { src: ph13, id: 13 }, { src: ph14, id: 14 }, { src: ph15, id: 15 },
  { src: ph16, id: 16 }, { src: ph17, id: 17 }, { src: ph18, id: 18 }, { src: ph19, id: 19 }, { src: ph20, id: 20 },
  { src: ph21, id: 21 }, { src: ph22, id: 22 }, { src: ph23, id: 23 }, { src: ph24, id: 24 }, { src: ph25, id: 25 },
  { src: ph26, id: 26 }, { src: ph27, id: 27 }, { src: ph28, id: 28 }, { src: ph29, id: 29 }, { src: ph30, id: 30 },
  { src: ph31, id: 31 }, { src: ph32, id: 32 }, { src: ph33, id: 33 }, { src: ph34, id: 34 }, { src: ph35, id: 35 },
]

// Get card size class based on index
const getCardClass = (index) => {
  const pattern = [
    'card-wide',      // 1 - spans 3 cols, 2 rows
    'card-tall',      // 2 - spans 2 cols, 2 rows (tall)
    'card-normal',    // 3 - spans 2 cols, 1 row
    'card-large',     // 4 - spans 2 cols, 2 rows
    'card-normal',    // 5 - spans 2 cols, 1 row
    'card-tall',      // 6 - spans 2 cols, 2 rows (tall)
    'card-wide',      // 7 - spans 3 cols, 2 rows
    'card-normal',    // 8 - spans 2 cols, 1 row
    'card-normal',    // 9 - spans 2 cols, 1 row
    'card-large',     // 10 - spans 2 cols, 2 rows
    'card-normal',    // 11
    'card-tall',      // 12
    'card-wide',      // 13
    'card-normal',    // 14
    'card-large',     // 15
    'card-normal',    // 16
    'card-tall',      // 17
    'card-wide',      // 18
    'card-normal',    // 19
    'card-large',     // 20
    'card-normal',    // 21
    'card-tall',      // 22
    'card-wide',      // 23
    'card-normal',    // 24
    'card-large',     // 25
    'card-normal',    // 26
    'card-tall',      // 27
    'card-wide',      // 28
    'card-normal',    // 29
    'card-large',     // 30
    'card-normal',    // 31
    'card-tall',      // 32
    'card-wide',      // 33
    'card-normal',    // 34
    'card-large',     // 35
  ]
  return pattern[index] || 'card-normal'
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.1 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
}

export default function GalleryGrid() {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null

  const openLightbox = (index) => {
    setSelectedIndex(index)
    document.body.style.overflow = 'hidden'
  }
  const closeLightbox = () => {
    setSelectedIndex(null)
    document.body.style.overflow = ''
  }
  const goNext = useCallback(() => setSelectedIndex(prev => (prev + 1) % images.length), [])
  const goPrev = useCallback(() => setSelectedIndex(prev => (prev - 1 + images.length) % images.length), [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex, goNext, goPrev])

  return (
    <section className="gallery-grid-section" id="gallery-grid">
      <motion.div 
        className="gallery-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">Portfolio</span>
        <h2 className="section-title">Our <span className="grad-text">Gallery</span></h2>
        <p className="section-subtitle">Explore our portfolio of innovative projects and enterprise solutions.</p>
      </motion.div>

      <motion.div 
        className="gallery-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-30px" }}
      >
        {images.map((img, index) => (
          <motion.div
            className={`gallery-card ${getCardClass(index)}`}
            key={img.id}
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => openLightbox(index)}
          >
            <div className="gallery-card-inner">
              <img src={img.src} alt={`Gallery ${img.id}`} loading="lazy" />
              <div className="gallery-card-overlay"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div className="gallery-lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className="lightbox-bg" onClick={closeLightbox}></div>
            <button className="lightbox-close" onClick={closeLightbox}>✕</button>
            <button className="lightbox-nav lightbox-prev" onClick={goPrev}><span>‹</span></button>
            <motion.div className="lightbox-content" key={selectedIndex} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.3 }}>
              <img src={selectedImage.src} alt={`Gallery ${selectedImage.id}`} />
              <div className="lightbox-counter">{selectedIndex + 1} / {images.length}</div>
            </motion.div>
            <button className="lightbox-nav lightbox-next" onClick={goNext}><span>›</span></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}