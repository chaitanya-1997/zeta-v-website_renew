import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./OurJourney.css";

const timelineData = [
  { year: "2017", title: "Zeta-V Founded in Hong Kong" },
  { year: "2018", title: "Expanded into China's IT Ecosystem" },
  { year: "2019", title: "Launched Digital Transformation Platform" },
  { year: "2020", title: "Established India Sourcing Operations" },
  { year: "2021", title: "Expanded Operations in USA & Germany" },
  { year: "2022", title: "Built SAP & Zoho Center of Excellence" },
  { year: "2023", title: "Opened India Offshore Delivery Center" },
  { year: "2024", title: "Launched Microsoft & Telco-IoT CoE" },
];

const LINE_DURATION = 3.2;
const NODE_STAGGER = LINE_DURATION / timelineData.length;
// How long after the line starts before each node appears
// Node i appears when line reaches it: delay = i * (LINE_DURATION / 8)
const nodeDelay = (i) => 0.05 + i * NODE_STAGGER;

export default function OurJourney() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section className="journey-section" ref={sectionRef}>


      {/* Heading */}
      <motion.div
        className="journey-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="section-label">Our Journey</span>
        <h2 className="section-title">
          Our <span className="grad-text">Journey</span>
        </h2>
        <p className="section-subtitle">
          From vision to global impact, a story of innovation, growth, and transformation.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="timeline-outer">
        <div className="horizontal-timeline">

          {/* Animated blue line */}
          <div className="timeline-track">
            <motion.div
              className="timeline-line"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: LINE_DURATION, ease: "easeInOut" }}
            />
          </div>

          {timelineData.map((item, index) => {
            const isTop = index % 2 === 0;
            const delay = nodeDelay(index);

            return (
              <div
                className="timeline-card"
                key={index}
                style={{ left: `${index * 12.5}%` }}
              >
                {isTop ? (
                  <motion.div
                    className="node-half node-top"
                    initial={{ opacity: 0, y: -18 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -18 }}
                    transition={{ duration: 0.45, ease: "easeOut", delay }}
                  >
                    <div className="timeline-text"><p>{item.title}</p></div>
                    <div className="timeline-connector" />
                    <div className="timeline-year"><span>{item.year}</span></div>
                  </motion.div>
                ) : (
                  <motion.div
                    className="node-half node-bottom"
                    initial={{ opacity: 0, y: 18 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                    transition={{ duration: 0.45, ease: "easeOut", delay }}
                  >
                    <div className="timeline-year"><span>{item.year}</span></div>
                    <div className="timeline-connector" />
                    <div className="timeline-text"><p>{item.title}</p></div>
                  </motion.div>
                )}

                <motion.div
                  className="timeline-dot"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3, ease: "backOut", delay: delay + 0.1 }}
                />
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}