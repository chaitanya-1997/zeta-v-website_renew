// OurJourney.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  HiOutlineGlobeAlt,
  HiOutlineBuildingOffice,
  HiOutlineCpuChip,
  HiOutlineCloud,
  HiOutlineUsers,
  HiOutlineChartBar,
  HiOutlineSparkles,
  HiOutlineRocketLaunch
} from "react-icons/hi2";
import "./OurJourney.css";

const timelineData = [
  {
    year: "2017",
    title: "Zeta-V Founded in Hong Kong",
    icon: HiOutlineGlobeAlt,
    description: "Began our journey as a technology pioneer in Asia's financial hub",
    color: "#22a7f0"
  },
  {
    year: "2018",
    title: "Expanded into China's IT Ecosystem",
    icon: HiOutlineBuildingOffice,
    description: "Established strong presence in China's rapidly growing tech market",
    color: "#6366f1"
  },
  {
    year: "2019",
    title: "Launched Digital Transformation Platform",
    icon: HiOutlineCpuChip,
    description: "Revolutionized how businesses approach digital innovation",
    color: "#a78bfa"
  },
  {
    year: "2020",
    title: "Established India Sourcing Operations",
    icon: HiOutlineUsers,
    description: "Tapped into India's world-class tech talent pool",
    color: "#34d399"
  },
  {
    year: "2021",
    title: "Expanded Operations in USA & Germany",
    icon: HiOutlineCloud,
    description: "Global expansion into key Western markets",
    color: "#f472b6"
  },
  {
    year: "2022",
    title: "Built SAP & Zoho Center of Excellence",
    icon: HiOutlineCpuChip,
    description: "Created specialized centers for enterprise solutions",
    color: "#f59e0b"
  },
  {
    year: "2023",
    title: "Opened India Offshore Delivery Center",
    icon: HiOutlineBuildingOffice,
    description: "Full-scale offshore delivery capabilities",
    color: "#06b6d4"
  },
  {
    year: "2024",
    title: "Launched Microsoft & Telco-IoT CoE",
    icon: HiOutlineSparkles,
    description: "Pioneering next-gen technologies and solutions",
    color: "#8b5cf6"
  },
  {
    year: "2025",
    title: "Research Practice",
    icon: HiOutlineRocketLaunch,
    description: "Driving innovation through advanced research & development",
    color: "#ec4899"
  },
];

export default function OurJourney() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section className="journey-section-premium" ref={sectionRef}>
      {/* Background Decorations */}
      <div className="journey-bg-decor">
        <div className="journey-bg-blob jblob-1" />
        <div className="journey-bg-blob jblob-2" />
        <div className="journey-bg-blob jblob-3" />
      </div>
      <div className="journey-grid-overlay" />

      {/* Heading */}
      <motion.div
        className="journey-heading-premium"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="journey-label-wrapper">
          <span className="journey-label-line" />
          <span className="journey-label-text">Our Journey</span>
          <span className="journey-label-line" />
        </div>
        <h2 className="journey-title-premium">
          Our 
          {/* <span className="text-gradient-journey">Journey</span> */}
          <span > Journey</span>
          <span className="journey-title-icon">✦</span>
        </h2>
        <p className="journey-subtitle-premium">
          From vision to global impact, a story of innovation, growth, and transformation.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="timeline-outer-premium">
        <div className="horizontal-timeline-premium">
          {/* Animated gradient line */}
          <div className="timeline-track-premium">
            <motion.div
              className="timeline-line-premium"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 3.5, ease: "easeInOut" }}
            />
          </div>

          {timelineData.map((item, index) => {
            const isTop = index % 2 === 0;
            const delay = 0.05 + index * 0.15;
            const position = index * 11.11; // 100% / 9 items

            return (
              <div
                className="timeline-card-premium"
                key={index}
                style={{ left: `${position}%` }}
              >
                {isTop ? (
                  <motion.div
                    className="node-half-premium node-top-premium"
                    initial={{ opacity: 0, y: -25 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -25 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay }}
                  >
                    <div className="timeline-content-box premium-top">
                      <div className="content-icon" style={{ color: item.color }}>
                        <item.icon />
                      </div>
                      <div className="content-text">
                        <p className="content-title">{item.title}</p>
                        <p className="content-desc">{item.description}</p>
                      </div>
                    </div>
                    <div className="timeline-connector-premium" />
                    <div className="timeline-year-premium" style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)` }}>
                      <span>{item.year}</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    className="node-half-premium node-bottom-premium"
                    initial={{ opacity: 0, y: 25 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay }}
                  >
                    <div className="timeline-year-premium" style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)` }}>
                      <span>{item.year}</span>
                    </div>
                    <div className="timeline-connector-premium" />
                    <div className="timeline-content-box premium-bottom">
                      <div className="content-icon" style={{ color: item.color }}>
                        <item.icon />
                      </div>
                      <div className="content-text">
                        <p className="content-title">{item.title}</p>
                        <p className="content-desc">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <motion.div
                  className="timeline-dot-premium"
                  style={{ borderColor: item.color }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4, ease: "backOut", delay: delay + 0.1 }}
                >
                  <div className="dot-pulse" style={{ background: item.color }} />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Decorative Edge */}
      <div className="journey-bottom-edge" />
    </section>
  );
}