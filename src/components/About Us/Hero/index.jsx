import React from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  ChevronDown,
} from "lucide-react";

import "./Hero.css";

export default function Hero() {

  const scrollToNext = () => {
    window.scrollBy({
      top: window.innerHeight - 100,
      behavior: "smooth",
    });
  };

  return (

    <section className="about-hero">

      {/* Animated Background */}

      <div className="hero-gradient"></div>

      <div className="hero-particles">

        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

      </div>

      <div className="hero-container">

        {/* =========================
            LEFT CONTENT
        ========================= */}

        <motion.div
          className="hero-content"

          initial={{
            opacity: 0,
            x: -60,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 0.9,
          }}
        >
        <span className="section-label">Trusted Technology Partner Since 2021</span>
        

        <h2 className="section-title">
            Building Scalable <span className="grad-text">Digital Solutions</span> for Modern Businesses.
          </h2>

          <p className="section-subtitle">
            We help startups and enterprises accelerate growth
            through AI, cloud, web, mobile, and enterprise
            technology solutions.
          </p>

          <div className="hero-buttons">

            <a
              href="/contact"
              className="hero-btn primary-btn"
            >
              Begin Your Transformation
              <ArrowRight size={18} />
            </a>

            <a
              href="/services"
              className="hero-btn secondary-btn"
            >
              Explore Services
            </a>

          </div>

        </motion.div>

        {/* =========================
            RIGHT VISUAL
        ========================= */}

        <motion.div
          className="hero-visual"

          initial={{
            opacity: 0,
            x: 60,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 1,
          }}
        >

          <div className="tech-orbit orbit-1"></div>
          <div className="tech-orbit orbit-2"></div>
          <div className="tech-orbit orbit-3"></div>

          <motion.div
            className="hero-core"

            animate={{
              y: [0, -12, 0],
            }}

            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ZETA-V
          </motion.div>

          <div className="floating floating-1">
            AI
          </div>

          <div className="floating floating-2">
            Cloud
          </div>

          <div className="floating floating-3">
            Web
          </div>

          <div className="floating floating-4">
            Mobile
          </div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        className="scroll-indicator"

        animate={{
          y: [0, 10, 0],
        }}

        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}

        onClick={scrollToNext}
      >
        <ChevronDown size={28} />
      </motion.div>

    </section>
  );
}