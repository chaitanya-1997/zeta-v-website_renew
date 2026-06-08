import React from "react";
import { motion } from "framer-motion";

import {
  Rocket,
  ShieldCheck,
  Layers3,
  Headphones,
  Workflow,
} from "lucide-react";

import "./WhyChooseUs.css";

const chooseData = [
  {
    icon: <Rocket size={34} />,
    title: "Fast Delivery",

    description:
      "Accelerating digital transformation with agile execution, rapid deployment, and faster go-to-market delivery.",
  },

  {
    icon: <Layers3 size={34} />,
    title: "Scalable Architecture",

    description:
      "Building robust and scalable enterprise solutions designed for long-term growth and high performance.",
  },

  {
    icon: <ShieldCheck size={34} />,
    title: "Security-First Development",

    description:
      "Implementing secure development practices with reliability, compliance, and enterprise-grade protection.",
  },

  {
    icon: <Headphones size={34} />,
    title: "Continuous Support",

    description:
      "Providing proactive technical support, optimization, and maintenance for uninterrupted business operations.",
  },

  {
    icon: <Workflow size={34} />,
    title: "End-to-End Solutions",

    description:
      "Delivering complete digital ecosystems from strategy and UI/UX design to deployment and cloud integration.",
  },
];

export default function WhyChooseUs() {

  return (

    <section className="choose-section">

      {/* Heading */}

      <motion.div
        className="choose-heading"

        initial={{ opacity: 0, y: 40 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.8 }}

        viewport={{ once: true }}
      >
        <span className="section-label">Why choose us</span>
        <h2 className="section-title">
          Why <span className="grad-text">Choose Us</span>
        </h2>

        <p className="section-subtitle">
          Empowering businesses with scalable digital solutions, enterprise innovation, and technology-driven transformation.
        </p>
      </motion.div>

      {/* Cards */}

      <div className="choose-grid">

        {chooseData.map((item, index) => (

          <motion.div
            className="choose-card"
            key={index}

            initial={{
              opacity: 0,
              y: 70,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.8,
              delay: index * 0.12,
            }}

            viewport={{ once: true }}

            whileHover={{
              y: -8,
            }}
          >

            {/* Top Border Animation */}

            <div className="choose-line"></div>

            {/* Icon */}

            <div className="choose-icon">
              {item.icon}
            </div>

            {/* Content */}

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </motion.div>
        ))}
      </div>

    </section>
  );
}