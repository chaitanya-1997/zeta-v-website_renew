import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="romicons-hero">

      <div className="hero-bg-grid"></div>

      <div className="hero-glow glow-1"></div>
      <div className="hero-glow glow-2"></div>

      <div className="hero-container">

        {/* Left Content */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span className="section-label">
            Strategic Business Advisory
          </span>

          <h2 className="section-title">
            Business <span className="grad-text">Advisories</span> That Turn
            <span> Strategy Into Value.</span>
          </h2>

          <p className="section-subtitle">
            Romicons empowers organizations with Growth,
            Market, Deal, and Technology Advisory services
            designed to unlock opportunities, accelerate
            transformation, and create sustainable business
            value.
          </p>

          <div className="hero-buttons">

            <a
              href="#advisories"
              className="hero-btn primary-btn"
            >
              Explore Advisories
              <ArrowRight size={18} />
            </a>

            <a
              href="/contact"
              className="hero-btn secondary-btn"
            >
              Talk To Experts
            </a>

          </div>

        </motion.div>

        {/* Right Visual */}

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <div className="center-circle">
            <span>ROMICONS</span>
          </div>

          <div className="advisory-card growth">
            Growth Advisory
          </div>

          <div className="advisory-card market">
            Market Advisory
          </div>

          <div className="advisory-card deal">
            Deal Advisory
          </div>

          <div className="advisory-card tech">
            Tech Advisory
          </div>

          <div className="connector connector-top"></div>
          <div className="connector connector-right"></div>
          <div className="connector connector-bottom"></div>
          <div className="connector connector-left"></div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;