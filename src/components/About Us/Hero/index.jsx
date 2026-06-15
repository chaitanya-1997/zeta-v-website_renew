
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "../../../assets/about/hero.jpg";

import "./Hero.css";

export default function Hero() {

  const scrollToNext = () => {
    window.scrollBy({
      top: window.innerHeight - 100,
      behavior: "smooth",
    });
  };

  return (

    <section className="about-hero"
      style={{   backgroundImage: `url(${heroBg})`, }}
    >

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
              className="btn-grad"
            >
              Begin Your Transformation
              <ArrowRight size={18} />
            </a>

            <a
              href="/services"
              className="btn-outline"
            >
              Explore Services
            </a>

          </div>

        </motion.div>  

      </div>

    </section>
  );
}
