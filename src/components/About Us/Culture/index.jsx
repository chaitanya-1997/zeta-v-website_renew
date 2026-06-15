import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";

import cultureBg   from "../../../assets/about/culture.jpg";
import diversityBg from "../../../assets/about/diversity.jpg";
import equalityBg  from "../../../assets/about/equality.jpg";
import inclusiveBg from "../../../assets/about/inclusive.jpg";

import divCulBg from "../../../assets/about/div-cul-bg.gif";

import {
  UserCheck,
  HeartHandshake,
  BarChart3,
  Laptop,
  ChevronDown,
} from "lucide-react";

import "./Culture.css";

/* ─── Data ─────────────────────────────────────────────── */

const culturePillars = [
  {
    title: "Culture",
    description:
      "We cultivate an environment where collaboration, trust, and continuous learning are not aspirations, they are daily practice. Every team member contributes to a culture built on psychological safety, open feedback, and shared growth.",
    bg: cultureBg,
  },
  {
    title: "Diversity",
    description:
      "Our strength lies in the breadth of perspectives we bring together. From Hong Kong to Germany, India to the USA, our teams span continents, languages, and lived experiences, making every solution richer and every challenge better understood.",
    bg: diversityBg,
  },
  {
    title: "Equality",
    description:
      "Fairness is non-negotiable. We ensure equitable access to opportunities, resources, and recognition regardless of background, gender, or geography. Our pay equity reviews and transparent promotion criteria hold us accountable.",
    bg: equalityBg,
  },
  {
    title: "Inclusion",
    description:
      "Being included is more than being present. We actively create space for every voice to be heard, build accessible digital platforms, and run programs that help team members lead with confidence.",
    bg: inclusiveBg,
  },
];

const stats = [
  { value: 52,  suffix: "%", label: "Women in Workforce" },
  { value: 73,  suffix: "%", label: "Diverse Leadership" },
  { value: 12,  suffix: "",  label: "Employee Resource Groups" },
  { value: 18,  suffix: "+", label: "Nationalities Represented" },
];

const regions = [
  { label: "China",  percent: 38 },
  { label: "USA",    percent: 27 },
  { label: "India",  percent: 22 },
];

const commitments = [
  {
    icon: <UserCheck size={22} />,
    title: "Inclusive Hiring",
    description:
      "Structured, bias-reduced interview panels with diverse hiring managers ensure every candidate is evaluated on merit. We publish role criteria publicly before posting.",
  },
  {
    icon: <HeartHandshake size={22} />,
    title: "Cultural Celebrations",
    description:
      "From Chinese New Year to Diwali, Independence Days to Christmas, we celebrate the traditions and milestones that make our global team who they are, with dedicated time and budget for every region.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Pay Equity Reviews",
    description:
      "Annual third-party pay equity audits across all teams and geographies. Where gaps are identified, they are closed within the same review cycle, no exceptions.",
  },
  {
    icon: <Laptop size={22} />,
    title: "Accessible Experiences",
    description:
      "We prioritize accessibility in every project, ensuring our digital platforms are inclusive, user-friendly, and accessible to people of all abilities..",
  },
];

/* ─── Component ─────────────────────────────────────────── */

export default function Culture() {
  const [hoveredPillar, setHoveredPillar]   = useState(0);
  const [openCommitment, setOpenCommitment] = useState(null);

  const toggleCommitment = (index) =>
    setOpenCommitment(openCommitment === index ? null : index);

  return (
    <section className="culture-section"
     style={{ backgroundImage: `url(${divCulBg})`, }}
    >
      
      <div className="culture-container">

        {/* ── Heading ── */}
        <motion.div
          className="culture-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Culture &amp; Diversity</span>
          <h2 className="section-title">
            Diverse Perspectives,{" "}
            <span className="grad-text">Unified Purpose.</span>
          </h2>
          <p className="section-subtitle">
            At Zeta-V, great ideas emerge when people from different cultures,
            backgrounds, and experiences collaborate toward a common vision.
            Our teams work across regions, industries, and technologies,
            fostering respect, creativity, and continuous learning at every level.
          </p>
        </motion.div>

        {/* ── Culture Pillars — unified panel ── */}
        <motion.div
          className="pillars-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="section-label pillars-eyebrow">
            Our Culture Pillars
          </span>

          {/* Unified panel — one section, background swaps on hover */}
          <div
            className="pillars-panel"
            onMouseLeave={() => setHoveredPillar(0)}
          >
            {/* Background layers — one per pillar, crossfade */}
            {culturePillars.map((item, index) => (
              <div
                key={index}
                className="pillars-panel-bg"
                style={{
                  backgroundImage: `url(${item.bg})`,
                  opacity: hoveredPillar === index ? 1 : 0,
                }}
              />
            ))}

            {/* Dark overlay */}
            <div className="pillars-panel-overlay" />

            {/* Content */}
            <div className="pillars-panel-inner">

              {/* Left — tab selectors */}
              <div className="pillars-tabs">
                {culturePillars.map((item, index) => (
                  <div
                    key={index}
                    className={`pillar-tab${hoveredPillar === index ? " pillar-tab--active" : ""}`}
                    onMouseEnter={() => setHoveredPillar(index)}
                  >
                    <div className="pillar-tab-orb" />
                    <span className="pillar-tab-title">{item.title}</span>
                    <div className="pillar-tab-arrow">→</div>
                  </div>
                ))}
              </div>

              {/* Right — content area */}
              <div className="pillars-content-area">
                <AnimatePresence mode="wait">
                  {culturePillars.map((item, index) =>
                    hoveredPillar === index ? (
                      <motion.div
                        key={index}
                        className="pillar-content-block"
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        transition={{ duration: 0.35 }}
                      >
                        <h3 className="pillar-content-title">{item.title}</h3>
                        <div className="pillar-content-line" />
                        <p className="pillar-content-desc">{item.description}</p>
                      </motion.div>
                    ) : null
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </motion.div>

        {/* ── Stats + Regions ── */}
        <div className="stats-region-grid">

          <motion.div
            className="stats-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Workforce at a Glance</span>
            <div className="stats-grid">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  className="stat-box"
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
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
              ))}
            </div>
          </motion.div>

          <motion.div
            className="regions-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="section-label">People by Region</span>
            {regions.map((region, index) => (
              <div key={index} className="region-item">
                <div className="region-row">
                  <span className="region-label">{region.label}</span>
                  <span className="region-pct">{region.percent}%</span>
                </div>
                <div className="progress-track">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${region.percent}%` }}
                    transition={{
                      duration: 1.2,
                      delay: index * 0.18,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* ── How We Act On It — Accordion ── */}
        <motion.div
          className="commitments-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="section-label">How We Act On It</span>

          <div className="commitments-list">
            {commitments.map((item, index) => {
              const isOpen = openCommitment === index;
              return (
                <div
                  key={index}
                  className={`commitment-item${isOpen ? " commitment-item--open" : ""}`}
                >
                  <button
                    className="commitment-trigger"
                    onClick={() => toggleCommitment(index)}
                    aria-expanded={isOpen}
                  >
                    <div className="commitment-trigger-left">
                      <div className="commitment-icon">{item.icon}</div>
                      <span className="commitment-title">{item.title}</span>
                    </div>
                    <motion.div
                      className="commitment-chevron"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="commitment-body"
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: "easeInOut" }}
                      >
                        <p className="commitment-desc">{item.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}