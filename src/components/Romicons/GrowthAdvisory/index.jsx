import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Rocket,
  Handshake,
  Zap,
} from "lucide-react";

import "./GrowthAdvisory.css";

import growth from "../../../assets/advisory/growth.svg";

const growthPoints = [
  {
    number: "01",
    icon: <TrendingUp size={28} />,
    title: "Market Expansion",
    description:
      "Expanding into new geographical or demographic markets to incease reach.",
    active: true,
  },
  {
    number: "02",
    icon: <Rocket size={28} />,
    title: "Innovation-Driven Growth",
    description:
      "Leveraging new ideas and technologies to drive business environment.",
  },
  {
    number: "03",
    icon: <Zap size={28} />,
    title: "Agile Execution",
    description:
      "Implementing flexible and efficient processes to adapt quickly to changes.",
  },
  {
    number: "04",
    icon: <Handshake size={28} />,
    title: "Strategic Partnerships",
    description:
      "Forming alliances to enhance capabilities and market presence.",
  },
];

export default function GrowthAdvisory() {
  return (
    <section className="growth-advisory">

      {/* SVG BACKGROUND */}
      <div className="growth-bg-animation">
        <img src={growth} alt="" aria-hidden="true" />
      </div>

      <div className="growth-container">

        {/* LEFT CONTENT */}

        <motion.div
          className="growth-content"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-label">
            GROWTH ADVISORY
          </span>

          <h2 className="section-title">
            Accelerating Sustainable
            <span className="grad-text">
              {" "}Business Growth
            </span>
          </h2>

          <p className="section-subtitle">
            At Zeta-V, we specialize in guiding IT businesses
            through pivotal growth phases, from recovery and
            turnarounds to scaling at lightning speed in new
            and existing markets.
          </p>
        </motion.div>

        {/* RIGHT CARDS */}

        <motion.div
          className="growth-cards"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {growthPoints.map((item, index) => (
            <motion.div
              key={index}
              className={`growth-card ${item.active ? "active" : ""}`}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="card-top">
                <div className="card-number">{item.number}</div>
                <div className="card-icon">{item.icon}</div>
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}