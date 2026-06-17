import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ZoomIn } from "lucide-react";
import "./Gallery.css";

import teamOffsiteImg from "../../../assets/gallery/team-offsite.png";
import team2Img from "../../../assets/gallery/team-2.png";
import celebrationImg from "../../../assets/gallery/celebration.png";
import clientMeetImg from "../../../assets/gallery/client-meet.png";
import sujitImg from "../../../assets/gallery/sujit.png";

import galleryBg from "../../../assets/gallery/gallery-bg.jpg";

const galleryData = [
  { title: "Zeta-V Team", image: teamOffsiteImg, large: true },
  { title: "Team Leaders", image: team2Img },
  { title: "Client Meet", image: clientMeetImg },
  { title: "Diwali Celebration", image: celebrationImg },
  { title: "Our CEO - Sujit Chatterjee", image: sujitImg },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Lock body scroll when modal is open
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

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <section className="ab_gallery">

        {/* Background Image */}
        <img
          src={galleryBg}
          alt=""
          aria-hidden="true"
          className="ab_gallery__bg"
        />

        <div className="ab_gallery__container">

          {/* Heading */}
          <motion.div
            className="ab_gallery__heading"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Moments and Memories</span>
            <h2 className="section-title">
              Moments <span className="grad-text"> & Memories</span>
            </h2>
            <p className="section-subtitle">
              Capturing our culture, innovation, celebrations,
              collaborations, and milestones.
            </p>
          </motion.div>

          {/* Gallery Layout */}
          <div className="ab_gallery__layout">

            {/* Large Image */}
            <motion.div
              className="ab_gallery__large"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(galleryData[0])}
            >
              <img src={galleryData[0].image} alt={galleryData[0].title} />
              <div className="ab_gallery__overlay">
                <ZoomIn size={26} />
                <span>{galleryData[0].title}</span>
              </div>
            </motion.div>

            {/* Small Images Grid */}
            <div className="ab_gallery__grid">
              {galleryData.slice(1).map((item, index) => (
                <motion.div
                  key={index}
                  className="ab_gallery__card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedImage(item)}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="ab_gallery__overlay">
                    <ZoomIn size={20} />
                    <span>{item.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Link */}
          <motion.a
            href="/gallery"
            className="btn-outline"
            whileHover={{ x: 5 }}
          >
            View Full Gallery →
          </motion.a>

        </div>
      </section>

      {/* Lightbox — rendered outside section via fragment to escape stacking context */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="ab_gallery__modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="ab_gallery__modal_close"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Image */}
            <motion.img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="ab_gallery__modal_image"
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Title */}
            <motion.h3
              className="ab_gallery__modal_title"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
            >
              {selectedImage.title}
            </motion.h3>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}