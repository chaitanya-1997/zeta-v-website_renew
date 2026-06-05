import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Rocket,
  Handshake,
  Zap,
} from "lucide-react";

import "./GrowthAdvisory.css";

const growthPoints = [
  {
    icon: <TrendingUp size={28} />,
    title: "Market Expansion",
  },
  {
    icon: <Rocket size={28} />,
    title: "Innovation-Driven Growth",
  },
  {
    icon: <Zap size={28} />,
    title: "Agile Execution",
  },
  {
    icon: <Handshake size={28} />,
    title: "Strategic Partnerships",
  },
];

export default function GrowthAdvisory() {
  return (
    <section className="growth-advisory">

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
            <span className="grad-text"> Business Growth</span>
          </h2>

          <p className="section-subtitle">
            At Zeta-V, we specialize in guiding IT businesses
            through pivotal growth phases, from recovery and
            turnarounds to scaling at lightning speed in new
            and existing markets.
          </p>

          <div className="growth-grid">
            {growthPoints.map((item, index) => (
              <div key={index} className="growth-card">
                <div className="growth-icon">
                  {item.icon}
                </div>

                <h4>{item.title}</h4>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT DIAGRAM */}

        <motion.div
          className="growth-visual"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >

          <div className="growth-core">
            Growth
          </div>

          <div className="growth-ring ring-1"></div>
          <div className="growth-ring ring-2"></div>

          <div className="node node-1">
            <TrendingUp size={28} />
            <span>Market Expansion</span>
          </div>

          <div className="node node-2">
            <Rocket size={28} />
            <span>Innovation</span>
          </div>

          <div className="node node-3">
            <Zap size={28} />
            <span>Agility</span>
          </div>

          <div className="node node-4">
            <Handshake size={28} />
            <span>Partnerships</span>
          </div>

        </motion.div>

      </div>

    </section>
  );
}