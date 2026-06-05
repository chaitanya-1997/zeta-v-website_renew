import React from "react";
import { motion } from "framer-motion";
import {
  Cog,
  Workflow,
  Cpu,
  Rocket,
} from "lucide-react";

import "./TechAdvisory.css";

const advisoryPoints = [
  "Process Improvement",
  "Technology Optimization",
  "End-to-End Support",
  "Agile & Scalable Solutions",
];

const TechAdvisory = () => {
  return (
    <section className="tech-advisory-section">
      <div className="tech-advisory-container">

        {/* LEFT SIDE DIAGRAM */}

        <motion.div
          className="tech-diagram"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="diagram-core">
            <span>Tech Advisory</span>
          </div>

          <div className="diagram-line line-top"></div>
          <div className="diagram-line line-right"></div>
          <div className="diagram-line line-bottom"></div>
          <div className="diagram-line line-left"></div>

          <div className="diagram-node node-top">
            <Cog size={32} />
            <span>Process Improvement</span>
          </div>

          <div className="diagram-node node-right">
            <Cpu size={32} />
            <span>Technology Optimization</span>
          </div>

          <div className="diagram-node node-bottom">
            <Rocket size={32} />
            <span>Agile Solutions</span>
          </div>

          <div className="diagram-node node-left">
            <Workflow size={32} />
            <span>End-to-End Support</span>
          </div>

        </motion.div>

        {/* RIGHT SIDE CONTENT */}

        <motion.div
          className="tech-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span className="section-label">
            TECH ADVISORY
          </span>

          <h2 className="section-title">
            Technology Strategies That
            <span className="grad-text"> Accelerate Transformation</span>
          </h2>

          <p className="section-subtitle">
            Our Tech Advisory services guide you through the journey of transformation- driving incremental 
            innovation and enabling process digitalization to improve efficiency, enhance agility, 
            and unlock new opportunities.
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default TechAdvisory;