import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaLayerGroup, FaCode } from "react-icons/fa";
import CountUp from "react-countup";
import teamOffsiteImg from "../../../assets/gallery/team-offsite.png";

import "./OurStory.css";

const stats = [
  {
    icon: <FaRocket />,
    value: 5,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: <FaLayerGroup />,
    value: 100,
    suffix: "+",
    label: "Deployments",
  },
  {
    icon: <FaCode />,
    value: 15,
    suffix: "+",
    label: "Technologies",
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
           Who We <span className="grad-text"> Are</span>
          </h2>

           <p className="story-description">
            Founded with a vision to bridge the gap between business ambition and technology execution, 
            Zeta-V empowers organizations to accelerate digital transformation and unlock measurable business value. 
            We combine strategic consulting, intelligent technology ecosystems, and our proprietary Zeta Value Multiplier 
            Framework (zVMF) to help enterprises navigate complexity, embrace innovation, and achieve sustainable growth. 
            Today, we partner with businesses across industries to transform ideas into impactful digital solutions that drive 
            performance, agility, and long-term success.
          </p>

          <p className="story-description">
            <strong>Our Mantra:</strong> Simplify Solutions. Multiply Value.
            This guides every strategy we develop, every solution we engineer,
            and every partnership we nurture.
          </p>

          <p className="story-description">
            Because at Zeta-V, success is not defined by technology alone; it is
            measured by the value it creates.
          </p>

          {/* Stats */}

          <div className="story-stats">
            {stats.map((item, index) => (
              <motion.div
                className="story-stat"
                key={index}
                whileHover={{ y: -6 }}
              >
                <div className="story-stat-icon">
                  {item.icon}
                </div>

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
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}