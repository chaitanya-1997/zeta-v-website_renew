// Values.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineLightBulb,
  HiOutlineShieldCheck,

  HiOutlineUsers,

  HiOutlineArrowUpRight
} from "react-icons/hi2";
import "./Values.css";

const values = [
  {
    id: "01",
    title: "Innovation",
    tagline: "Think Ahead, Deliver Now",
    description: "Driving progress through creativity, technology, and continuous improvement.",
    icon: HiOutlineLightBulb,
    gradient: "linear-gradient(135deg, #22a7f0, #6366f1)",
    color: "#22a7f0"
  },
  {
    id: "02",
    title: "Integrity",
    tagline: "Say It. Mean It. Deliver It.",
    description: "Building lasting relationships through transparency and accountability.",
    icon: HiOutlineShieldCheck,
    gradient: "linear-gradient(135deg, #34d399, #06b6d4)",
    color: "#34d399"
  },
  {
    id: "03",
    title: "Adaptability",
    tagline: "Change Is Our Constant",
    description: "Evolving alongside technology and business landscapes to keep our clients ahead.",
    icon: HiOutlineLightBulb,
    gradient: "linear-gradient(135deg, #f472b6, #ec4899)",
    color: "#f472b6"
  },
  {
    id: "04",
    title: "Inclusivity",
    tagline: "Technology Without Borders",
    description: "Creating solutions accessible to every business, every team, every person.",
    icon: HiOutlineUsers,
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    color: "#f59e0b"
  },
  {
    id: "05",
    title: "Partnership",
    tagline: "We Succeed When You Succeed",
    description: "Your goals are our goals, we measure our performance by your outcomes.",
    icon: HiOutlineUsers,
    gradient: "linear-gradient(135deg, #a78bfa, #8b5cf6)",
    color: "#a78bfa"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const Values = () => {
  return (
    <section className="values-section-premium">
      {/* Background Decorations */}
      <div className="values-bg-decor">
        <div className="values-bg-blob vblob-1" />
        <div className="values-bg-blob vblob-2" />
        <div className="values-bg-blob vblob-3" />
        <div className="values-bg-blob vblob-4" />
      </div>
      <div className="values-grid-overlay" />

      {/* Heading */}
      <div className="values-heading-premium">
        <motion.div
          className="values-label-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="values-label-line" />
          <span className="values-label-text">OUR CORE VALUES</span>
          <span className="values-label-line" />
        </motion.div>

        <motion.h2
          className="values-title-premium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
        >
          Our Core 
          {/* <span className="text-gradient-values">Values</span> */}
          <span > Values</span>
          <span className="values-title-icon">✦</span>
        </motion.h2>

        <motion.p
          className="values-subtitle-premium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
        >
          The values that guide our decisions, culture, and commitment to excellence.
        </motion.p>
      </div>

      {/* Values Grid */}
      <motion.div
        className="values-grid-premium"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {values.map((v) => (
          <motion.div
            className="value-card-premium"
            key={v.id}
            variants={itemVariants}
            style={{ '--card-color': v.color }}
          >
            {/* Glow Effect */}
            <div className="value-card-glow" style={{ background: v.gradient }} />

            {/* Background Pattern */}
            <div className="value-card-pattern" />

            {/* Card Content */}
            <div className="value-card-content">
              {/* Icon with Gradient */}
              <div className="value-icon-wrapper" style={{ background: v.gradient }}>
                <v.icon className="value-icon" />
              </div>

              {/* ID Badge */}
              {/* <span className="value-id-badge">{v.id}</span> */}

              {/* Title & Tagline */}
              <div className="value-header">
                <h3 className="value-title-premium">{v.title}</h3>
                <span className="value-tagline-premium">{v.tagline}</span>
              </div>

              {/* Description */}
              <p className="value-description-premium">{v.description}</p>

              {/* Learn More Link */}
              <div className="value-link-wrapper">
                {/* <span className="value-link-text">Learn More</span> */}
                {/* <HiOutlineArrowUpRight className="value-link-icon" /> */}
              </div>
            </div>

            {/* Decorative Corner Line */}
            <div className="value-corner-line" />

            {/* Hover Border Glow */}
            <div className="value-border-glow" style={{ background: v.gradient }} />
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Decorative Edge */}
      <div className="values-bottom-edge" />
    </section>
  );
};

export default Values;