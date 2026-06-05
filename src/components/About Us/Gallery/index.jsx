import React, { useState } from "react";
import { motion } from "framer-motion";
import { Camera, X } from "lucide-react";

import "./Gallery.css";

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
  },

  {
    title: "Team Leaders",
    image: team2Img,
  },

  {
    title: "Client Meet",
    image: clientMeetImg,
  },

  {
    title: "Diwali Celebration",
    image: celebrationImg,
  },

  {
    title: "Our CEO - Sujit Chatterjee",
    image: sujitImg,
  },
];

export default function Gallery() {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery-section">

      {/* Heading */}

      <motion.div
        className="gallery-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="section-label">Moments and Memories</span>
        <h2 className="section-title">
          Moments <span className="grad-text">& Memories</span>
        </h2>

        <p className="section-subtitle">
          Capturing our culture, innovation, celebrations,
          collaborations, and milestones.
        </p>
      </motion.div>

      {/* Gallery Layout */}

      <div className="gallery-layout">

        {/* Large Image */}

        <motion.div
          className="gallery-large"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onClick={() => setSelectedImage(galleryData[0])}
        >
          <img
            src={galleryData[0].image}
            alt={galleryData[0].title}
          />

          <div className="gallery-overlay">
            <Camera size={22} />
            <span>{galleryData[0].title}</span>
          </div>
        </motion.div>

        {/* Small Images */}

        <div className="gallery-grid">

          {galleryData.slice(1).map((item, index) => (

            <motion.div
              key={index}
              className="gallery-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(item)}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="gallery-overlay">
                <Camera size={18} />
                <span>{item.title}</span>
              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* CTA */}

      <motion.a
        href="/gallery"
        className="gallery-link"
        whileHover={{ x: 5 }}
      >
        View Full Gallery →
      </motion.a>

      {/* Full Screen Lightbox */}

      {selectedImage && (

        <div
          className="gallery-modal"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="gallery-close"
            onClick={() => setSelectedImage(null)}
          >
            <X size={30} />
          </button>

          <img
            src={selectedImage.image}
            alt={selectedImage.title}
            className="gallery-modal-image"
          />

          <h3 className="gallery-modal-title">
            {selectedImage.title}
          </h3>

        </div>
      )}

    </section>
  );
}