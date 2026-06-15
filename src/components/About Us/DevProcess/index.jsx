import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  Search,
  ClipboardList,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";

import "./DevProcess.css";

import devBg from "../../../assets/about/dev-process.jpg";

const STEPS = [
  {
    icon: <Search size={26} />,
    label: "Discovery",
    desc: "Understanding business goals and user requirements.",
  },
  {
    icon: <ClipboardList size={26} />,
    label: "Planning",
    desc: "Defining roadmap, architecture, and delivery strategy.",
  },
  {
    icon: <PenTool size={26} />,
    label: "Design",
    desc: "Creating intuitive user experiences and interfaces.",
  },
  {
    icon: <Code2 size={26} />,
    label: "Development",
    desc: "Building scalable and secure digital solutions.",
  },
  {
    icon: <Rocket size={26} />,
    label: "Deployment",
    desc: "Launching optimized products with continuous support.",
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
    <section className="process-section">

      <img
        src={devBg}
        alt=""
        aria-hidden="true"
        className="dev-bg"
      />

      <motion.div
        className="process-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
       




    <span className="section-label"> DEVELOPMENT PROCESS</span>
                              <h2 className="hero__h1" style={{ color: '#fff', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '16px' }}>

        <span className="hero__h1a">
            Development <span className="svc-grad-text">Process</span>?
          </span>
          </h2>
          <p className="section-subtitle">
    A structured approach that transforms ideas into scalable,
          secure, and high-performance digital solutions.          </p>

        
      </motion.div>

      {/* DESKTOP TREE LAYOUT */}
      <div className="tree-wrapper">

        <div className="tree-top-row">

          <motion.div
            className="tree-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="tree-icon"><Search size={28} /></div>
            <h3>Discovery</h3>
            <p>Understanding business goals and user requirements.</p>
          </motion.div>

          <motion.div
            className="tree-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="tree-icon"><ClipboardList size={28} /></div>
            <h3>Planning</h3>
            <p>Defining roadmap, architecture, and delivery strategy.</p>
          </motion.div>

          <motion.div
            className="tree-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="tree-icon"><PenTool size={28} /></div>
            <h3>Design</h3>
            <p>Creating intuitive user experiences and interfaces.</p>
          </motion.div>

        </div>

        <div className="tree-connectors">
          <div className="connector-horizontal"></div>
          <div className="connector-vertical"></div>
        </div>

        <div className="tree-bottom">

          <motion.div
            className="tree-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="tree-icon"><Code2 size={28} /></div>
            <h3>Development</h3>
            <p>Building scalable and secure digital solutions.</p>
          </motion.div>

          <div className="tree-vertical-line-small"></div>

          <motion.div
            className="tree-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="tree-icon"><Rocket size={28} /></div>
            <h3>Deployment</h3>
            <p>Launching optimized products with continuous support.</p>
          </motion.div>

        </div>
      </div>

      {/* MOBILE HORIZONTAL SCROLL */}
      <div className="mobile-scroll-fade">
        <div className="mobile-scroll-strip" ref={stripRef}>
          <div className="mobile-scroll-track">
            {STEPS.map((step, i) => (
              <React.Fragment key={step.label}>

                <motion.div
                  className="tree-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <span className="mobile-step-badge">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="tree-icon">{step.icon}</div>
                  <h3>{step.label}</h3>
                  <p>{step.desc}</p>
                </motion.div>

                {i < STEPS.length - 1 && (
                  <hr className="mobile-connector-line" aria-hidden="true" />
                )}

              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="mobile-scroll-dots" aria-hidden="true">
          {STEPS.map((step, i) => (
            <span
              key={step.label}
              className={i === activeIndex ? "active" : ""}
            />
          ))}
        </div>
      </div>

    </section>
  );
}