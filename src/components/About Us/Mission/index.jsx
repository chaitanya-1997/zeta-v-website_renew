import React from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

import "./Mission.css";

export default function Mission() {
  return (

    <motion.section
      className="mission-card"

      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}

      transition={{
        duration: 1,
      }}

      viewport={{ once: true }}
    >

      {/* Animated Icon */}

      <motion.div
        className="mission-icon"

        animate={{
          y: [0, -12, 0],
          rotate: [0, 4, -4, 0],
        }}

        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Rocket size={55} />
      </motion.div>

      {/* Heading */}

      <h1 align = "center">Our <span className="grad-text">Mission</span></h1>


      {/* Content */}

      <p align = "center">
        At Zeta-V, our mission is to empower enterprises with innovative
        digital transformation solutions, intelligent automation, cloud
        technologies, enterprise software, and scalable IT services that
        accelerate business growth, operational excellence, and sustainable
        digital success across global industries.
      </p>

    </motion.section>
  );
}