// Partners.jsx
import React from "react";
import { motion } from "framer-motion";
import { HiOutlineSparkles, HiOutlineUsers, HiOutlineGlobeAlt } from "react-icons/hi2";
import "./Partners.css";

import swan from '../../../assets/team/cl1.avif';
import zerolite from '../../../assets/team/cl2.png';
import izapy from '../../../assets/team/cl3.png';
import fugu from '../../../assets/team/cl4.png';
import inmorphis from '../../../assets/team/cl5.png';
import cynoteck from '../../../assets/team/cl6.png';

const partners = [
  {
    name: "IZAPY",
    logo: izapy,
    category: "Technology Partner",
    gradient: "linear-gradient(135deg, #22a7f0, #6366f1)"
  },
  {
    name: "Fugu Mobile",
    logo: fugu,
    category: "Mobile Solutions",
    gradient: "linear-gradient(135deg, #34d399, #06b6d4)"
  },
  {
    name: "inmorphis",
    logo: inmorphis,
    category: "Digital Transformation",
    gradient: "linear-gradient(135deg, #f472b6, #ec4899)"
  },
  {
    name: "Cynoteck",
    logo: cynoteck,
    category: "Enterprise Solutions",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)"
  },
  {
    name: "Swan",
    logo: swan,
    category: "Cloud Services",
    gradient: "linear-gradient(135deg, #a78bfa, #8b5cf6)"
  },
  {
    name: "Zerolite",
    logo: zerolite,
    category: "Innovation Partner",
    gradient: "linear-gradient(135deg, #22a7f0, #06b6d4)"
  },
];

export default function Partners() {
  return (
    <section className="partners-section-premium">
      {/* Background Decorations */}
      <div className="partners-bg-decor">
        <div className="partners-bg-blob pblob-1" />
        <div className="partners-bg-blob pblob-2" />
        <div className="partners-bg-blob pblob-3" />
      </div>
      <div className="partners-grid-overlay" />

      {/* Heading */}
      <motion.div
        className="partners-heading-premium"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="partners-label-wrapper">
          <span className="partners-label-line" />
          <span className="partners-label-text">Our Trusted Partners</span>
          <span className="partners-label-line" />
        </div>
        <h2 className="partners-title-premium">
          Trusted 
          {/* <span className="text-gradient-partners">Partners</span> */}
          <span > Partners</span>
          <span className="partners-title-icon">✦</span>
        </h2>
        <p className="partners-subtitle-premium">
          Collaborating with global technology and enterprise partners
          to deliver scalable, innovative, and future-ready solutions.
        </p>
      </motion.div>

      {/* Moving Slider - First Row */}
      <div className="partners-slider-premium">
        <div className="partners-track-premium">
          {/* First Set */}
          {partners.map((partner, index) => (
            <div className="partner-card-premium" key={index}>
              <div className="partner-card-glow" style={{ background: partner.gradient }} />
              <img src={partner.logo} alt={partner.name} className="partner-logo-premium" />
              <div className="partner-card-overlay">
                <span className="partner-name-overlay">{partner.name}</span>
                <span className="partner-category-overlay">{partner.category}</span>
              </div>
              <div className="partner-card-border" style={{ background: partner.gradient }} />
            </div>
          ))}
          {/* Duplicate Set For Infinite Loop */}
          {partners.map((partner, index) => (
            <div className="partner-card-premium" key={`duplicate-${index}`}>
              <div className="partner-card-glow" style={{ background: partner.gradient }} />
              <img src={partner.logo} alt={partner.name} className="partner-logo-premium" />
              <div className="partner-card-overlay">
                <span className="partner-name-overlay">{partner.name}</span>
                <span className="partner-category-overlay">{partner.category}</span>
              </div>
              <div className="partner-card-border" style={{ background: partner.gradient }} />
            </div>
          ))}
        </div>
      </div>

      {/* Moving Slider - Second Row (Reverse Direction) */}
      <div className="partners-slider-premium reverse">
        <div className="partners-track-premium reverse-track">
          {/* First Set */}
          {[...partners].reverse().map((partner, index) => (
            <div className="partner-card-premium" key={`reverse-${index}`}>
              <div className="partner-card-glow" style={{ background: partner.gradient }} />
              <img src={partner.logo} alt={partner.name} className="partner-logo-premium" />
              <div className="partner-card-overlay">
                <span className="partner-name-overlay">{partner.name}</span>
                <span className="partner-category-overlay">{partner.category}</span>
              </div>
              <div className="partner-card-border" style={{ background: partner.gradient }} />
            </div>
          ))}
          {/* Duplicate Set */}
          {[...partners].reverse().map((partner, index) => (
            <div className="partner-card-premium" key={`reverse-duplicate-${index}`}>
              <div className="partner-card-glow" style={{ background: partner.gradient }} />
              <img src={partner.logo} alt={partner.name} className="partner-logo-premium" />
              <div className="partner-card-overlay">
                <span className="partner-name-overlay">{partner.name}</span>
                <span className="partner-category-overlay">{partner.category}</span>
              </div>
              <div className="partner-card-border" style={{ background: partner.gradient }} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Decorative Edge */}
      <div className="partners-bottom-edge" />
    </section>
  );
}