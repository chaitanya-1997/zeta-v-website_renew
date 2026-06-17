import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import teamOffsiteImg from "../../../assets/gallery/team-offsite.png";

import "./OurStory.css";

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "YEARS EXPERIENCE",
  },
  {
    value: 100,
    suffix: "+",
    label: "DEPLOYMENTS",
  },
  {
    value: 15,
    suffix: "+",
    label: "TECHNOLOGIES",
  },
];

export default function OurStory() {
  return (
    <section className="story-section">
      <div className="story-container">

        {/* Left Image */}

        <motion.div
          className="story-image-wrapper"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={teamOffsiteImg}
            alt="Zeta-V Team"
            className="story-image"
          />

          <div className="story-image-overlay"></div>
        </motion.div>

        {/* Right Content */}

        <motion.div
          className="story-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-label">
            OUR STORY
          </span>

          <h2 className="section-title">
            Who We <span className="grad-text">Are</span>
          </h2>

          <p className="section-subtitle">
             Founded to bridge the gap between business ambition and technology
             execution, Zeta-V empowers organizations to accelerate digital
             transformation and unlock measurable value. Through strategic consulting,
             intelligent technology ecosystems, and our proprietary zVMF framework,
             we help enterprises innovate, grow, and turn ideas into impactful
             digital solutions.
          </p>

          {/* Mantra */}

          <motion.div
  className="mantra-box"
  initial={{
    opacity: 0,
    y: 40,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  viewport={{ once: true }}
>
  <span className="mantra-tag">
    OUR MANTRA
  </span>

  <h3>
    Simplify Solutions. <span className="grad-text"> Multiply Value.</span>
  </h3>

  <p>
    Every strategy we create, every solution we engineer,
    and every partnership we build is focused on delivering
    measurable business outcomes and sustainable growth.
  </p>
</motion.div>

          {/* Statistics */}

          <div className="story-stats">
            {stats.map((item, index) => (
              <div className="stat-item" key={index}>
                <h3>
                  <CountUp
                    end={item.value}
                    duration={2.5}
                    suffix={item.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </h3>

                <p>{item.label}</p>
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}