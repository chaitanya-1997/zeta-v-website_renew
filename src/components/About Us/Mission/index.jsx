
// MissionVision.jsx
import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Sparkles, ArrowUpRight } from "lucide-react";
import "./MissionVision.css";
import missionImg from "../../../assets/about/mission.webp";
import visionImg from "../../../assets/about/vision.webp";

const MissionVision = () => {
  return (
    <section className="mv-section-premium">
      {/* Background Decorations */}
      <div className="mv-bg-decor">
        <div className="mv-bg-blob mvblob-1" />
        <div className="mv-bg-blob mvblob-2" />
        <div className="mv-bg-blob mvblob-3" />
      </div>
      <div className="mv-grid-overlay" />

      {/* Floating decorative elements */}
      <div className="mv-floating-elements">
        <div className="float-dot dot-1"></div>
        <div className="float-dot dot-2"></div>
      </div>

      {/* Header */}
      <div className="mv-header-premium">
        <motion.div
          className="mv-label-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="mv-label-line" />
          <span className="mv-label-text">Our Purpose</span>
          <span className="mv-label-line" />
        </motion.div>

        <motion.h2
          className="mv-title-premium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
        >
          What Drives
          <span> Us Forward</span>
          <span className="mv-title-icon">✦</span>
        </motion.h2>

        <motion.p
          className="mv-subtitle-premium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
        >
          Our mission and vision guide everything we do at Zeta-V
        </motion.p>
      </div>

      {/* Cards Container */}
      <div className="mv-container-premium">

        {/* VISION CARD - First (Reverse) */}
        <div className="mv-card-wrapper-premium reverse">
          <motion.div
            className="mv-image-container-premium"
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mv-image-frame">
              <img src={visionImg} alt="Zeta-V Vision" className="mv-image-premium" />
              <div className="mv-image-overlay-premium" />
              <div className="mv-image-shine" />
              <div className="mv-image-border" />
            </div>
            <motion.div
              className="mv-image-badge mv-image-badge--right"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Sparkles size={16} />
              <span>Vision Forward</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="mv-content-card-premium"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="mv-card-glow" />
            <div className="mv-card-content-inner">
              <div className="mv-icon-wrapper">
                <div className="mv-icon-badge-premium" style={{ background: 'linear-gradient(135deg, #a78bfa, #8b5cf6)' }}>
                  <Eye size={28} className="mv-icon" />
                </div>
                <span className="mv-badge-text-premium">Our Vision</span>
              </div>
              <p className="mv-card-description">
               To shape a future where businesses harness the power of AI, automation, and emerging technologies to unlock new possibilities, accelerate innovation, and create lasting value. We envision organizations that are more intelligent, agile, and resilient, empowered to make better decisions, adapt to change, and achieve sustainable growth in an increasingly digital world.
At Zeta-V, we aspire to be a catalyst in this transformation by helping organizations embrace innovation with confidence and turn technological advancement into meaningful business outcomes.
              </p>
              {/* <p className="mv-card-description">
                We envision a future where businesses can adapt faster, make smarter decisions, and
                scale with confidence through connected workflows, modern operating models, and
                technology-enabled transformation. By combining innovation with execution, we aim to
                help organizations unlock new opportunities, improve efficiency, and build resilient
                foundations for long-term success in an evolving digital world.
              </p> */}
              <div className="mv-card-footer">
                <span className="mv-card-meta">Future Focus</span>
              </div>
            </div>
            <div className="mv-card-accent-line" style={{ background: 'linear-gradient(135deg, #a78bfa, #8b5cf6)' }} />
          </motion.div>
        </div>

        {/* MISSION CARD - Second */}
        <div className="mv-card-wrapper-premium">
          <motion.div
            className="mv-image-container-premium"
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mv-image-frame">
              <img src={missionImg} alt="Zeta-V Mission" className="mv-image-premium" />
              <div className="mv-image-overlay-premium" />
              <div className="mv-image-shine" />
              <div className="mv-image-border" />
            </div>
            <motion.div
              className="mv-image-badge mv-image-badge--left"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Sparkles size={16} />
              <span>Mission First</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="mv-content-card-premium"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="mv-card-glow" />
            <div className="mv-card-content-inner">
              <div className="mv-icon-wrapper">
                <div className="mv-icon-badge-premium" style={{ background: 'linear-gradient(135deg, #22a7f0, #6366f1)' }}>
                  <Target size={28} className="mv-icon" />
                </div>
                <span className="mv-badge-text-premium">Our Mission</span>
              </div>
              <p className="mv-card-description">
To empower mid-market enterprises with scalable offshore IT services that seamlessly harmonize human ingenuity with artificial intelligence, delivering secure, high-velocity solutions that respect strict data residency and sovereign compliance.              </p>
             
              <div className="mv-card-footer">
                <span className="mv-card-meta">Guiding Principle</span>
                <div className="mv-card-arrow">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
            <div className="mv-card-accent-line" style={{ background: 'linear-gradient(135deg, #22a7f0, #6366f1)' }} />
          </motion.div>
        </div>

      </div>

      {/* Bottom Edge */}
      <div className="mv-bottom-edge" />
    </section>
  );
};

export default MissionVision;