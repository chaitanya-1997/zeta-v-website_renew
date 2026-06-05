import React from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

import "./Vision.css";

export default function Vision() {
  return (

    <motion.section
      className="vision-card"

      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}

      transition={{
        duration: 1,
      }}

      viewport={{ once: true }}
    >

      {/* Animated Icon */}

      <motion.div
        className="vision-icon"

        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, 3, -3, 0],
        }}

        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Eye size={55} />
      </motion.div>

      {/* Heading */}

      <h1 align = "center">Our <span className="grad-text">Vision</span></h1>

      {/* Content */}

      <p align = "center">
        Zeta-V envisions becoming a globally trusted technology and digital
        innovation partner delivering future-ready enterprise solutions,
        intelligent business transformation, AI-driven technologies, and
        next-generation IT ecosystems that redefine growth and innovation
        worldwide.
      </p>

    </motion.section>
  );
}