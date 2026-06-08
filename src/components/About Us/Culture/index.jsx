import React from "react";
import { motion } from "framer-motion";

import {
  FaUsers,
  FaFemale,
  FaFlag,
  FaGlobeAsia,
} from "react-icons/fa";

import "./Culture.css";

const cultureStats = [
  {
    icon: <FaUsers />,
    number: "60+",
    label: "Global Workforce",
  },

  {
    icon: <FaFemale />,
    number: "19.85%",
    label: "of global staff is women",
  },

  {
    icon: <FaFlag />,
    number: "20",
    label: "Nationalities",
  },

  {
    icon: <FaGlobeAsia />,
    number: "15",
    label: "Countries",
  },
];

export default function Culture() {
  return (
    <section className="culture-section">

      <div className="culture-container">

        {/* Left Content */}

        <motion.div
          className="culture-content"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Culture & Diversity</span>
          <h2>
            Culture & <span className="grad-text">Diversity</span>
          </h2>

          <p className="section-subtitle">
            Building an inclusive workplace where innovation,
            collaboration, and diverse perspectives drive
            meaningful digital transformation.
          </p><br></br>

          <p className="culture-description">
            At Zeta-V, we believe that great ideas emerge when
            people from different cultures, backgrounds, and
            experiences collaborate toward a common vision.
            Our teams work across regions, industries, and
            technologies, fostering an environment that values
            creativity, respect, continuous learning, and
            global teamwork.
          </p>
        </motion.div>

        {/* Right Side Stats */}

        <motion.div
          className="culture-stats"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {cultureStats.map((item, index) => (
            <div className="culture-stat" key={index}>

              <div className="culture-stat-top">

                <div className="culture-icon">
                  {item.icon}
                </div>

                <h3>{item.number}</h3>

              </div>

              <p>{item.label}</p>

            </div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}