// DevProcess.jsx
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ClipboardList,
  PenTool,
  Code2,
  Rocket,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import "./DevProcess.css";

const STEPS = [
  {
    icon: Search,
    label: "Discovery",
    desc: "Understanding business goals and user requirements.",
    gradient: "linear-gradient(135deg, #22a7f0, #6366f1)",
    color: "#22a7f0",
    bg: "rgba(34, 167, 240, 0.1)"
  },
  {
    icon: ClipboardList,
    label: "Planning",
    desc: "Defining roadmap, architecture, and delivery strategy.",
    gradient: "linear-gradient(135deg, #34d399, #06b6d4)",
    color: "#34d399",
    bg: "rgba(52, 211, 153, 0.1)"
  },
  {
    icon: PenTool,
    label: "Design",
    desc: "Creating intuitive user experiences and interfaces.",
    gradient: "linear-gradient(135deg, #f472b6, #ec4899)",
    color: "#f472b6",
    bg: "rgba(244, 114, 182, 0.1)"
  },
  {
    icon: Code2,
    label: "Development",
    desc: "Building scalable and secure digital solutions.",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    color: "#f59e0b",
    bg: "rgba(245, 158, 11, 0.1)"
  },
  {
    icon: Rocket,
    label: "Deployment",
    desc: "Launching optimized products with continuous support.",
    gradient: "linear-gradient(135deg, #a78bfa, #8b5cf6)",
    color: "#a78bfa",
    bg: "rgba(167, 139, 250, 0.1)"
  },
];

export default function DevProcess() {
  const stripRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      const idx = Math.round(progress * (STEPS.length - 1));
      setActiveIndex(idx);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="dev-section-premium">
      {/* Background Decorations */}
      <div className="dev-bg-decor">
        <div className="dev-bg-blob dblob-1" />
        <div className="dev-bg-blob dblob-2" />
        <div className="dev-bg-blob dblob-3" />
        <div className="dev-bg-blob dblob-4" />
      </div>
      <div className="dev-grid-overlay" />

      {/* Heading */}
      <motion.div
        className="dev-heading-premium"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="dev-label-wrapper">
          <span className="dev-label-line" />
          <span className="dev-label-text">Development Process</span>
          <span className="dev-label-line" />
        </div>
        <h2 className="dev-title-premium">
          Development Process 
          {/* <span className="text-gradient-dev">Process</span> */}
         
          <span className="dev-title-icon">✦</span>
        </h2>
        <p className="dev-subtitle-premium">
          A structured approach that transforms ideas into scalable,
          secure, and high-performance digital solutions.
        </p>
      </motion.div>

      {/* DESKTOP TREE LAYOUT */}
      <div className="dev-tree-wrapper">
        <div className="dev-tree-top-row">
          {STEPS.slice(0, 3).map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                className="dev-card-premium"
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true }}
                style={{ '--card-color': step.color, '--card-bg': step.bg }}
              >
                <div className="dev-card-glow" style={{ background: step.gradient }} />
                {/* <div className="dev-card-number">0{index + 1}</div> */}
                <div className="dev-card-icon-wrapper" style={{ background: step.gradient }}>
                  <IconComponent className="dev-card-icon" size={26} />
                </div>
                <h3 className="dev-card-title">{step.label}</h3>
                <p className="dev-card-desc">{step.desc}</p>
                <div className="dev-card-line" style={{ background: step.gradient }} />
              </motion.div>
            );
          })}
        </div>

        <div className="dev-tree-connectors">
          <div className="dev-connector-horizontal" />
          <div className="dev-connector-vertical" />
          <div className="dev-connector-dot" />
        </div>

        <div className="dev-tree-bottom">
          {STEPS.slice(3).map((step, index) => {
            const IconComponent = step.icon;
            const actualIndex = index + 3;
            return (
              <motion.div
                className="dev-card-premium"
                key={actualIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: actualIndex * 0.12 }}
                viewport={{ once: true }}
                style={{ '--card-color': step.color, '--card-bg': step.bg }}
              >
                <div className="dev-card-glow" style={{ background: step.gradient }} />
                {/* <div className="dev-card-number">0{actualIndex + 1}</div> */}
                <div className="dev-card-icon-wrapper" style={{ background: step.gradient }}>
                  <IconComponent className="dev-card-icon" size={26} />
                </div>
                <h3 className="dev-card-title">{step.label}</h3>
                <p className="dev-card-desc">{step.desc}</p>
                <div className="dev-card-line" style={{ background: step.gradient }} />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* MOBILE HORIZONTAL SCROLL */}
      <div className="dev-mobile-scroll">
        <div className="dev-mobile-strip" ref={stripRef}>
          <div className="dev-mobile-track">
            {STEPS.map((step, i) => {
              const IconComponent = step.icon;
              return (
                <React.Fragment key={step.label}>
                  <motion.div
                    className="dev-mobile-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: true }}
                    style={{ '--card-color': step.color }}
                  >
                    {/* <div className="dev-mobile-badge" style={{ background: step.gradient }}>
                      {String(i + 1).padStart(2, "0")}
                    </div> */}
                    <div className="dev-mobile-icon" style={{ background: step.gradient }}>
                      <IconComponent size={22} />
                    </div>
                    <h3>{step.label}</h3>
                    <p>{step.desc}</p>
                    <div className="dev-mobile-glow" style={{ background: step.gradient }} />
                  </motion.div>
                  {i < STEPS.length - 1 && (
                    <div className="dev-mobile-connector" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="dev-mobile-dots">
          {STEPS.map((step, i) => (
            <span
              key={step.label}
              className={i === activeIndex ? "active" : ""}
              style={{ background: i === activeIndex ? step.color : 'rgba(255,255,255,0.2)' }}
            />
          ))}
        </div>
      </div>

      {/* Bottom Edge */}
      <div className="dev-bottom-edge" />
    </section>
  );
}