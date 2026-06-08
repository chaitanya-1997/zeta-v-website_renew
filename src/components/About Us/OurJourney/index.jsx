import React from "react";
import { motion } from "framer-motion";
import "./OurJourney.css";

const timelineData = [
  {
    year: "2017",
    title: "Zeta-V Founded in Hong Kong",
  },
  {
    year: "2018",
    title: "Expanded into China’s IT Ecosystem",
  },
  {
    year: "2019",
    title: "Launched Digital Transformation Platform",
  },
  {
    year: "2020",
    title: "Established India Sourcing Operations",
  },
  {
    year: "2021",
    title: "Expanded Operations Across USA & Germany",
  },
  {
    year: "2022",
    title: "Built SAP & Zoho Center of Excellence",
  },
  {
    year: "2023",
    title: "Opened India Offshore Delivery Center",
  },
  {
    year: "2024",
    title: "Launched Microsoft & Telco-IoT CoE",
  },
];

export default function OurJourney() {
  return (
    <section className="journey-section">

      {/* Heading */}

      <motion.div
        className="journey-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-label">Our Journey</span>
        <h2 className="section-title">
          Our <span className="grad-text">Journey</span>
        </h2>

        <p className="section-subtitle">
          From vision to global impact, our journey reflects innovation,
          growth, and transformation.
        </p>
      </motion.div>

      {/* Timeline */}

      <div className="horizontal-timeline">

        {/* Animated Center Line */}

        <motion.div
          className="timeline-line"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        />

        {timelineData.map((item, index) => {

          const isTop = index % 2 === 0;

          return (
            <motion.div
              className={`timeline-card ${isTop ? "top" : "bottom"}`}
              key={index}

              initial={{
                opacity: 0,
                y: isTop ? -60 : 60,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.8,
                delay: index * 0.35,
              }}

              viewport={{ once: true }}
            >

              {/* Dot */}

              <div className="timeline-dot" />

              {/* Floating Motion */}

              <motion.div
                className="timeline-content"

                animate={{
                  y: isTop
                    ? [0, -6, 0]
                    : [0, 6, 0],
                }}

                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              >

                {/* TOP */}

                {isTop && (
                  <>
                    <div className="timeline-text">
                      <p>{item.title}</p>
                    </div>

                    <div className="timeline-connector"></div>

                    <div className="timeline-year">
                      <h3>{item.year}</h3>
                    </div>
                  </>
                )}

                {/* BOTTOM */}

                {!isTop && (
                  <>
                    <div className="timeline-year">
                      <h3>{item.year}</h3>
                    </div>

                    <div className="timeline-connector"></div>

                    <div className="timeline-text">
                      <p>{item.title}</p>
                    </div>
                  </>
                )}

              </motion.div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}