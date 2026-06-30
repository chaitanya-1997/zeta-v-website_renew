// Gallery.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ZoomIn, Heart, Share2, ArrowUpRight, Sparkles } from "lucide-react";
import "./Gallery.css";
import { Link } from 'react-router-dom';


import teamOffsiteImg from "../../../assets/gallery/team-offsite.png";
import team2Img from "../../../assets/gallery/team-2.png";
import celebrationImg from "../../../assets/gallery/celebration.png";
import clientMeetImg from "../../../assets/gallery/client-meet.png";
import sujitImg from "../../../assets/gallery/sujit.png";

const galleryData = [
  {
    title: "Zeta-V Team",
    image: teamOffsiteImg,
    large: true,
    category: "Team",
    description: "Our amazing team working together",
    gradient: "linear-gradient(135deg, #22a7f0, #6366f1)"
  },
  {
    title: "Team Leaders",
    image: team2Img,
    category: "Leadership",
    description: "Visionary leaders driving innovation",
    gradient: "linear-gradient(135deg, #34d399, #06b6d4)"
  },
  {
    title: "Client Meet",
    image: clientMeetImg,
    category: "Collaboration",
    description: "Building strong client relationships",
    gradient: "linear-gradient(135deg, #f472b6, #ec4899)"
  },
  {
    title: "Diwali Celebration",
    image: celebrationImg,
    category: "Culture",
    description: "Celebrating festivals together",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)"
  },
  {
    title: "Our CEO",
    image: sujitImg,
    category: "Leadership",
    description: "Sujit Chatterjee - Founder & CEO",
    gradient: "linear-gradient(135deg, #a78bfa, #8b5cf6)"
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <section className="gallery-section-premium">
        {/* Background Decorations */}
        <div className="gallery-bg-decor">
          <div className="gallery-bg-blob gblob-1" />
          <div className="gallery-bg-blob gblob-2" />
          <div className="gallery-bg-blob gblob-3" />
        </div>
        <div className="gallery-grid-overlay" />

        <div className="gallery-container-premium">
          {/* Heading */}
          <motion.div
            className="gallery-heading-premium"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="gallery-label-wrapper">
              <span className="gallery-label-line" />
              <span className="gallery-label-text">Moments & Memories</span>
              <span className="gallery-label-line" />
            </div>
            <h2 className="gallery-title-premium">
              Moments 
              {/* <span className="text-gradient-gallery">& Memories</span> */}
              <span > & Memories</span>
              <span className="gallery-title-icon">✦</span>
            </h2>
            <p className="gallery-subtitle-premium">
              Capturing our culture, innovation, celebrations,
              collaborations, and milestones.
            </p>
          </motion.div>

          {/* Gallery Layout */}
          <div className="gallery-layout-premium">
            {/* Large Image */}
            <motion.div
              className="gallery-large-premium"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(galleryData[0])}
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="gallery-image-wrapper">
                <img src={galleryData[0].image} alt={galleryData[0].title} />
                <div className="gallery-image-overlay-premium" style={{ background: galleryData[0].gradient }} />
                <div className="gallery-image-shine" />
              </div>
              <div className="gallery-overlay-premium">
                <div className="gallery-overlay-content">
                  <span className="gallery-overlay-category">{galleryData[0].category}</span>
                  <h3>{galleryData[0].title}</h3>
                  <p>{galleryData[0].description}</p>
                  <div className="gallery-overlay-actions">
                    <ZoomIn size={18} />
                    <span>View Details</span>
                  </div>
                </div>
              </div>
              <div className="gallery-card-badge">
                <Sparkles size={14} />
                <span>Featured</span>
              </div>
            </motion.div>

            {/* Small Images Grid */}
            <div className="gallery-grid-premium">
              {galleryData.slice(1).map((item, index) => (
                <motion.div
                  key={index}
                  className="gallery-card-premium"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedImage(item)}
                  onMouseEnter={() => setHoveredIndex(index + 1)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="gallery-card-image-wrapper">
                    <img src={item.image} alt={item.title} />
                    <div className="gallery-card-overlay-premium" style={{ background: item.gradient }} />
                  </div>
                  <div className="gallery-card-content-premium">
                    <span className="gallery-card-category">{item.category}</span>
                    <h4>{item.title}</h4>
                    <div className="gallery-card-hover-actions">
                      <ZoomIn size={16} />
                    </div>
                  </div>
                  <div className="gallery-card-accent" style={{ background: item.gradient }} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
         <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <Link 
    to="/gallery" 
    className="gallery-cta-premium"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    <span>View Full Gallery</span>
    <ArrowUpRight size={18} />
  </Link>
</motion.div>
        </div>

        {/* Bottom Decorative Edge */}
        <div className="gallery-bottom-edge" />
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="gallery-modal-premium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedImage(null)}
          >
            <div className="gallery-modal-backdrop" />

            <button
              className="gallery-modal-close"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <motion.div
              className="gallery-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="gallery-modal-image-wrapper">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="gallery-modal-image"
                />
                <div className="gallery-modal-gradient" style={{ background: selectedImage.gradient }} />
              </div>

              <div className="gallery-modal-info">
                <div className="gallery-modal-header">
                  <span className="gallery-modal-category" style={{ color: selectedImage.gradient.includes('22a7f0') ? '#22a7f0' : '#6366f1' }}>
                    {selectedImage.category}
                  </span>
                  <div className="gallery-modal-actions">
                    <button className="gallery-modal-action-btn">
                      <Heart size={18} />
                    </button>
                    <button className="gallery-modal-action-btn">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
                <h3 className="gallery-modal-title">{selectedImage.title}</h3>
                <p className="gallery-modal-description">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}