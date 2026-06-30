// OurStory.jsx
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { HiOutlineSparkles, HiOutlineUsers, HiOutlineChartBar } from "react-icons/hi2";
import teamOffsiteImg from "../../../assets/gallery/team-offsite.png";
import "./OurStory.css";

const stats = [
  {
    value: 9,
    suffix: "+",
    label: "Years Experience",
    icon: HiOutlineSparkles,
  },
  {
    value: 100,
    suffix: "+",
    label: "Deployments",
    icon: HiOutlineSparkles,
  },
  {
    value: 15,
    suffix: "+",
    label: "Technologies",
    icon: HiOutlineChartBar,
  },
];

export default function OurStory() {
  return (
    <section className="story-section-premium">
      {/* Background Decorations */}
      <div className="story-bg-decor">
        <div className="story-bg-blob blob-1" />
        <div className="story-bg-blob blob-2" />
        <div className="story-bg-blob blob-3" />
      </div>
      <div className="story-grid-overlay" />

      <div className="story-container-premium">
        {/* Left Column - Image with Stats Below */}
        <motion.div
          className="story-image-col"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="story-image-wrapper">
            <div className="story-image-frame">
              <img
                src={teamOffsiteImg}
                alt="Zeta-V Team"
                className="story-image-premium"
              />
              <div className="story-image-overlay-premium" />
              <div className="story-image-shine" />

              {/* Decorative Corner Accents */}
              <div className="corner-accent corner-accent-tl" />
              <div className="corner-accent corner-accent-br" />
            </div>

            {/* Floating Badge */}
            <motion.div
              className="story-floating-badge"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <HiOutlineUsers className="badge-icon" />
              <div>
                <span className="badge-number">50+</span>
                <span className="badge-label">Team Members</span>
              </div>
            </motion.div>
          </div>

          {/* Stats Below Image */}
          <div className="story-image-stats">
            {stats.map((item, index) => (
              <motion.div
                className="image-stat-item"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="image-stat-icon-wrapper">
                  <item.icon className="image-stat-icon" />
                </div>
                <div className="image-stat-content">
                  <h3 className="image-stat-number">
                    <CountUp
                      end={item.value}
                      duration={2.5}
                      suffix={item.suffix}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </h3>
                  <p className="image-stat-label">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Content (col-6) */}
        <motion.div
          className="story-content-col"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Label with Line */}
          <motion.div
            className="story-label-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="story-label-line" />
            <span className="story-label-text">OUR STORY</span>
          </motion.div>

          {/* Title with Gradient */}
          <motion.h2
            className="story-title-premium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Who We 
            {/* <span className="text-gradient-premium">Are</span> */}
            <span >Are</span>
            <span className="story-title-ornament">✦</span>
          </motion.h2>

          {/* Editorial Dropcap */}
          <motion.div
            className="story-dropcap-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="story-dropcap">F</span>
            <p className="story-dropcap-text">
              ounded to bridge the gap between business ambition and technology
              execution, Zeta-V empowers organizations to accelerate digital
              transformation and unlock measurable value. Through strategic consulting,
              intelligent technology ecosystems, and our proprietary zVMF framework,
              we help enterprises innovate, grow, and turn ideas into impactful
              digital solutions.
            </p>
          </motion.div>

          {/* Mantra Box - Redesigned */}
          <motion.div
            className="mantra-box-premium"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="mantra-glow" />
            <div className="mantra-content">
              <span className="mantra-tag-premium">
                <HiOutlineSparkles />
                OUR MANTRA
              </span>
              <h3 className="mantra-heading">
                Simplify Solutions 
                {/* <span className="text-gradient-premium"> | Multiply Value.</span> */}
                <span> | Multiply Value.</span>
              </h3>
              <p className="mantra-text">
                Every strategy we create, every solution we engineer,
                and every partnership we build is focused on delivering
                measurable business outcomes and sustainable growth.
              </p>
            </div>
            <div className="mantra-border-glow" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="story-bottom-line" />
    </section>
  );
}