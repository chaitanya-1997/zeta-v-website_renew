import React from "react";
import { motion } from "framer-motion";

import {
  Search,
  ClipboardList,
  PenTool,
  Code2,
  Bug,
  Rocket,
  Headphones,
} from "lucide-react";

import "./DevProcess.css";

const processData = [
  {
    icon: <Search size={28} />,
    title: "Discovery",
    description:
      "Understanding business goals & user needs.",
  },

  {
    icon: <ClipboardList size={28} />,
    title: "Planning",
    description:
      "Creating roadmaps and scalable project strategies.",
  },

  {
    icon: <PenTool size={28} />,
    title: "Design",
    description:
      "Designing modern, intuitive UI/UX experiences.",
  },

  {
    icon: <Code2 size={28} />,
    title: "Development",
    description:
      "Building secure and high -performance applications.",
  },

  {
    icon: <Bug size={28} />,
    title: "Testing",
    description:
      "Ensuring quality, security, and seamless performance.",
  },

  {
    icon: <Rocket size={28} />,
    title: "Deployment",
    description:
      "Deploying optimized and cloud-ready solutions.",
  },

  {
    icon: <Headphones size={28} />,
    title: "Support",
    description:
      "Providing ongoing maintenance and support.",
  },
];

export default function DevProcess() {

  return (

    <section className="process-section">

      {/* Heading */}

      <motion.div
        className="process-heading"

        initial={{ opacity: 0, y: 40 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.8 }}

        viewport={{ once: true }}
      >
        
        <span className="section-label">Development process</span>
        <h2 className="section-title">
          Development <span className="grad-text">Process</span>
        </h2>

        <p className="section-subtitle">
          A streamlined development workflow focused on innovation,
          scalability, quality assurance, and business growth.
        </p>

      </motion.div>

      {/* Timeline */}

      <div className="process-timeline">

        {/* Animated Line */}

        <motion.div
          className="timeline-progress"

          initial={{ width: 0 }}

          whileInView={{ width: "100%" }}

          transition={{
            duration: 2,
            ease: "easeInOut",
          }}

          viewport={{ once: true }}
        />

        {processData.map((item, index) => (

          <motion.div
            className="process-card"
            key={index}

            initial={{
              opacity: 0,
              y: 80,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.8,
              delay: index * 0.15,
            }}

            viewport={{ once: true }}
          >

            {/* Connector */}

            <div className="process-connector"></div>

            {/* Icon */}

            <motion.div
              className="process-icon"

              animate={{
                y: [0, -6, 0],
              }}

              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              {item.icon}
            </motion.div>

            {/* Content */}

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}