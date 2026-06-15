import React from "react";
import { motion } from "framer-motion";

import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta__section">

      <motion.div
        className="cta__container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2 className="cta__title">
          Ready to multiply your business value?
        </h2>

        <p className="cta__subtitle">
          Let's find the right solution together.
        </p>

        <div className="cta__button-group">

          <a
            href="/contact"
            className="cta__btn cta__btn--primary"
          >
            Get in touch
          </a>

          <a
            href="/services"
            className="cta__btn cta__btn--secondary"
          >
            View services
          </a>

        </div>

      </motion.div>

    </section>
  );
}