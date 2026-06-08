import React from "react";
import { motion } from "framer-motion";
import "./TechAdvisory.css";

import techBg from "../../../assets/Advisory/tech.svg";

const timelineItems = [
  {
    number: "01",
    title: "Process Improvement",
    description:
      "Enhancing operational workflows for better efficiency.",
    side: "right",
  },
  {
    number: "02",
    title: "Technology Optimization",
    description:
      "Aligning tech resources with business goals.",
    side: "left",
  },
  {
    number: "03",
    title: "End-to-End Support",
    description:
      "Providing comprehensive assistance throughout.",
    side: "right",
  },
  {
    number: "04",
    title: "Agile & Scalable Solutions",
    description:
      "Developing flexible and growth-oriented systems.",
    side: "left",
  },
];

const TechAdvisory = () => {
  return (
    <section className="tech-advisory-section">
      <div className="tech-advisory-container">

        {/* LEFT SIDE TIMELINE */}

        <motion.div
          className="timeline-wrapper"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="timeline-line"></div>

          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${item.side}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>

              <motion.div
                className="timeline-content"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <span className="timeline-number">
                  {item.number}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT SIDE CONTENT */}

        <motion.div
          className="tech-content"
          style={{
            "--tech-bg": `url(${techBg})`,
          }}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-label">
            TECH ADVISORY
          </span>

          <h2>
            Technology Strategies That
            <span className="grad-text">
              {" "}Accelerate Transformation
            </span>
          </h2>

          <p>
            Our Tech Advisory services guide you through the
            journey of transformation—driving incremental
            innovation and enabling process digitalization
            to improve efficiency, enhance agility, and
            unlock new opportunities.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default TechAdvisory;