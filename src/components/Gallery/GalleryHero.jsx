import { motion } from 'framer-motion'
import galleryHeroBg from '../../assets/gallerym/Galleryh.jpg'
import './GalleryHero.css'

export default function GalleryHero() {
  return (
    <section className="gallery-hero">
      <div className="gallery-hero__bg">
        <div 
          className="gallery-hero__bg-image"
          style={{ backgroundImage: `url(${galleryHeroBg})` }}
        ></div>
        <div className="gallery-hero__bg-overlay"></div>
      </div>
      
      <div className="gallery-hero__inner">
        <div className="gallery-hero__left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="gallery-hero__overline">Our Work</span>
            <h1 className="gallery-hero__title">
              <span className="gallery-hero__title-line">Capturing Moments,</span>
              <span className="gallery-hero__title-line">
                <span className="grad-text">Creating Memories</span>
              </span>
            </h1>
            <p className="gallery-hero__subtitle">
              Explore our portfolio of AV installations, corporate events, retail experiences, and creative projects
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}