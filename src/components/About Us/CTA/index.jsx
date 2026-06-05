import React from "react";
import { motion } from "framer-motion";

import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta-section">

      <motion.div
        className="cta-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2>
          Ready to multiply your business <span className="grad-text">value?</span>
        </h2>

        <p>
          Let's find the right solution together.
        </p>

        <div className="cta-buttons">

          <a
            href="/contact"
            className="cta-btn primary-btn"
          >
            Get in touch
          </a>

          <a
            href="/services"
            className="cta-btn secondary-btn"
          >
            View services
          </a>

        </div>

      </motion.div>

    </section>
  );
}