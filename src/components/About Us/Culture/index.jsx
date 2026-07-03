// Culture.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import {
  UserCheck,
  HeartHandshake,
  BarChart3,
  Laptop,
  ChevronDown,
  Sparkles,
  Globe,
  Users,
  Award,
  TrendingUp
} from "lucide-react";
import "./Culture.css";

import cultureBg from "../../../assets/about/culture.webp";
import diversityBg from "../../../assets/about/diversity.webp";
import equalityBg from "../../../assets/about/equality.webp";
import inclusiveBg from "../../../assets/about/inclusive.webp";

const culturePillars = [
  {
    title: "Culture",
    description: "We cultivate an environment where collaboration, trust, and continuous learning are not aspirations, they are daily practice. Every team member contributes to a culture built on psychological safety, open feedback, and shared growth.",
    bg: cultureBg,
    icon: Users,
    gradient: "linear-gradient(135deg, #22a7f0, #6366f1)"
  },
  {
    title: "Diversity",
    description: "Our strength lies in the breadth of perspectives we bring together. From Hong Kong to Germany, India to the USA, our teams span continents, languages, and lived experiences, making every solution richer and every challenge better understood.",
    bg: diversityBg,
    icon: Globe,
    gradient: "linear-gradient(135deg, #34d399, #06b6d4)"
  },
  {
    title: "Equality",
    description: "Fairness is non-negotiable. We ensure equitable access to opportunities, resources, and recognition regardless of background, gender, or geography. Our pay equity reviews and transparent promotion criteria hold us accountable.",
    bg: equalityBg,
    icon: Award,
    gradient: "linear-gradient(135deg, #f472b6, #ec4899)"
  },
  {
    title: "Inclusion",
    description: "Being included is more than being present. We actively create space for every voice to be heard, build accessible digital platforms, and run programs that help team members lead with confidence.",
    bg: inclusiveBg,
    icon: HeartHandshake,
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)"
  },
];

const stats = [
  { value: 52, suffix: "%", label: "Women in Workforce", icon: Users },
  { value: 73, suffix: "%", label: "Diverse Leadership", icon: TrendingUp },
  { value: 12, suffix: "", label: "Employee Resource Groups", icon: Sparkles },
  { value: 18, suffix: "+", label: "Nationalities Represented", icon: Globe },
];

const regions = [
  { label: "China", percent: 38, color: "#22a7f0" },
  { label: "USA", percent: 27, color: "#6366f1" },
  { label: "India", percent: 22, color: "#a78bfa" },
  { label: "Europe", percent: 13, color: "#34d399" },
];

const commitments = [
  {
    icon: UserCheck,
    title: "Inclusive Hiring",
    description: "Structured, bias-reduced interview panels with diverse hiring managers ensure every candidate is evaluated on merit. We publish role criteria publicly before posting.",
    gradient: "linear-gradient(135deg, #22a7f0, #6366f1)"
  },
  {
    icon: HeartHandshake,
    title: "Cultural Celebrations",
    description: "From Chinese New Year to Diwali, Independence Days to Christmas, we celebrate the traditions and milestones that make our global team who they are, with dedicated time and budget for every region.",
    gradient: "linear-gradient(135deg, #34d399, #06b6d4)"
  },
  {
    icon: BarChart3,
    title: "Pay Equity Reviews",
    description: "Annual third-party pay equity audits across all teams and geographies. Where gaps are identified, they are closed within the same review cycle, no exceptions.",
    gradient: "linear-gradient(135deg, #f472b6, #ec4899)"
  },
  {
    icon: Laptop,
    title: "Accessible Experiences",
    description: "We prioritize accessibility in every project, ensuring our digital platforms are inclusive, user-friendly, and accessible to people of all abilities.",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)"
  },
];

export default function Culture() {
  const [hoveredPillar, setHoveredPillar] = useState(0);
  const [openCommitment, setOpenCommitment] = useState(null);

  const toggleCommitment = (index) =>
    setOpenCommitment(openCommitment === index ? null : index);

  return (
    <section className="culture-section-premium">
      {/* Background Decorations */}
      <div className="culture-bg-decor">
        <div className="culture-bg-blob cblob-1" />
        <div className="culture-bg-blob cblob-2" />
        <div className="culture-bg-blob cblob-3" />
        <div className="culture-bg-blob cblob-4" />
      </div>
      <div className="culture-grid-overlay" />

      <div className="culture-container-premium">
        {/* Heading */}
        <motion.div
          className="culture-heading-premium"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="culture-label-wrapper">
            <span className="culture-label-line" />
            <span className="culture-label-text">Culture & Diversity</span>
            <span className="culture-label-line" />
          </div>
          <h2 className="culture-title-premium">
            Diverse Perspectives,{" "}
            {/* <span className="text-gradient-culture">Unified Purpose.</span> */}
                        <span >Unified Purpose.</span>

            <span className="culture-title-icon">✦</span>
          </h2>
          <p className="culture-subtitle-premium">
            At Zeta-V, great ideas emerge when people from different cultures,
            backgrounds, and experiences collaborate toward a common vision.
            Our teams work across regions, industries, and technologies,
            fostering respect, creativity, and continuous learning at every level.
          </p>
        </motion.div>

        {/* Culture Pillars */}
        <motion.div
          className="culture-pillars-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="culture-pillars-header">
            <Sparkles className="pillars-header-icon" />
            <span>Our Culture Pillars</span>
          </div>

          <div
            className="culture-pillars-panel"
            onMouseLeave={() => setHoveredPillar(0)}
          >
            {culturePillars.map((item, index) => (
              <div
                key={index}
                className="culture-pillars-bg"
                style={{
                  backgroundImage: `url(${item.bg})`,
                  opacity: hoveredPillar === index ? 1 : 0,
                }}
              />
            ))}
            <div className="culture-pillars-overlay" />

            <div className="culture-pillars-inner">
              <div className="culture-pillars-tabs">
                {culturePillars.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className={`culture-pillar-tab${hoveredPillar === index ? " active" : ""}`}
                      onMouseEnter={() => setHoveredPillar(index)}
                    >
                      <div className="pillar-tab-icon-wrapper" style={{ background: item.gradient }}>
                        <Icon size={16} />
                      </div>
                      <span className="pillar-tab-title">{item.title}</span>
                      <div className="pillar-tab-line" style={{ background: item.gradient }} />
                    </div>
                  );
                })}
              </div>

              <div className="culture-pillars-content">
                <AnimatePresence mode="wait">
                  {culturePillars.map((item, index) =>
                    hoveredPillar === index ? (
                      <motion.div
                        key={index}
                        className="culture-pillar-block"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="pillar-block-icon" style={{ background: item.gradient }}>
                          <item.icon size={28} />
                        </div>
                        <h3>{item.title}</h3>
                        <div className="pillar-block-line" style={{ background: item.gradient }} />
                        <p>{item.description}</p>
                      </motion.div>
                    ) : null
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats + Regions */}
        <div className="culture-stats-region">
          <motion.div
            className="culture-stats-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="card-header">
              <Users className="card-header-icon" />
              <span>Workforce at a Glance</span>
            </div>
            <div className="culture-stats-grid">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={i}
                    className="culture-stat-box"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6 }}
                  >
                    <div className="stat-icon-wrapper">
                      <Icon size={20} />
                    </div>
                    <h3>
                      <CountUp
                        end={s.value}
                        duration={2.2}
                        suffix={s.suffix}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                    </h3>
                    <p>{s.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="culture-regions-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="card-header">
              <Globe className="card-header-icon" />
              <span>People by Region</span>
            </div>
            {regions.map((region, index) => (
              <div key={index} className="culture-region-item">
                <div className="region-row">
                  <span className="region-label">{region.label}</span>
                  <span className="region-pct" style={{ color: region.color }}>
                    {region.percent}%
                  </span>
                </div>
                <div className="region-progress">
                  <motion.div
                    className="region-progress-fill"
                    style={{ background: region.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${region.percent}%` }}
                    transition={{
                      duration: 1.2,
                      delay: index * 0.15,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Commitments Accordion */}
        <motion.div
          className="culture-commitments-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="commitments-header">
            <HeartHandshake className="commitments-header-icon" />
            <span>How We Act On It</span>
          </div>

          <div className="culture-commitments-list">
            {commitments.map((item, index) => {
              const isOpen = openCommitment === index;
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`culture-commitment-item${isOpen ? " open" : ""}`}
                >
                  <button
                    className="culture-commitment-trigger"
                    onClick={() => toggleCommitment(index)}
                    aria-expanded={isOpen}
                  >
                    <div className="trigger-left">
                      <div className="trigger-icon" style={{ background: item.gradient }}>
                        <Icon size={20} />
                      </div>
                      <span className="trigger-title">{item.title}</span>
                    </div>
                    <motion.div
                      className="trigger-chevron"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="culture-commitment-body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                      >
                        <p>{item.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Bottom Edge */}
      <div className="culture-bottom-edge" />
    </section>
  );
}