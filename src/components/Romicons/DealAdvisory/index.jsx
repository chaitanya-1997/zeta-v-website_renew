import React from "react";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Globe,
  Network,
  BadgeCheck,
} from "lucide-react";

import "./DealAdvisory.css";

const features = [
  {
    icon: <BriefcaseBusiness size={22} />,
    title: "Tailored Solutions",
  },
  {
    icon: <Network size={22} />,
    title: "Cross-Functional Expertise",
  },
  {
    icon: <Globe size={22} />,
    title: "Global Perspective",
  },
  {
    icon: <BadgeCheck size={22} />,
    title: "Proven Track Record",
  },
];

const DealAdvisory = () => {
  return (
    <section className="deal-advisory">

      <div className="deal-container">

        {/* LEFT */}

        <motion.div
          className="deal-content"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-label">
            DEAL ADVISORY
          </span>

          <h2 className="section-title">
            Maximizing Deal Value Through
            <span className="grad-text"> Strategic Advisory</span>
          </h2>

          <p className="section-subtitle">
            Our Deal Advisory services are designed to help you navigate the complexities of deals by 
            optimizing strategic value and ensuring sustainable ROI for your business.
          </p>

          <div className="deal-features">
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="deal-feature"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">
                  {item.icon}
                </div>

                <span>{item.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="deal-visual"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="deal-line horizontal"></div>
          <div className="deal-line vertical"></div>

          <motion.div
            className="deal-core"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            Deal
            <br />
            Advisory
          </motion.div>

          <div className="deal-node top">
            Tailored
            <br />
            Solutions
          </div>

          <div className="deal-node right">
            Cross-Functional
            <br />
            Expertise
          </div>

          <div className="deal-node bottom">
            Global
            <br />
            Perspective
          </div>

          <div className="deal-node left">
            Proven
            <br />
            Track Record
          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default DealAdvisory;