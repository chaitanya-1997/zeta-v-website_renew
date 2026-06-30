// AboutHero.jsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from 'react-router-dom';

import {
  HiArrowLongRight,
  HiOutlineSparkles,
  HiOutlineGlobeAlt,
  HiOutlineCpuChip,
  HiOutlineUsers,
  HiOutlineBriefcase,
  HiOutlineChartBar,
  HiOutlineCloud,
} from "react-icons/hi2";
import { FaRocket } from "react-icons/fa";
import "./Hero.css";

export default function AboutHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="hero-section-about" ref={ref}>
      {/* Background Image with Overlay */}
      <div className="hero-bg-image">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="Team collaboration"
          className="hero-bg-img"
        />
        <div className="hero-bg-overlay" />
        <div className="hero-bg-gradient-radial" />
      </div>

      {/* Animated Orbs */}
      <div className="hero-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="hero-grid-overlay" />

      <div className="container hero-container-about">
        <motion.div
          className="hero-content-wrapper-about"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* LEFT COLUMN - Content */}
          <motion.div className="hero-left-column" variants={itemVariants}>
            <div className="hero-tagline-wrapper">
              <span className="hero-tagline-pulse" />
              <FaRocket className="hero-tagline-icon" />
              <span className="hero-tagline-text">
                Trusted Technology Partner Since 2017
              </span>
            </div>

            <h1 className="hero-title-about">
              Building Scalable{" "}
              {/* <span className="text-gradient-about">Digital Solutions</span> */}
                 <span >Digital Solutions</span>
              <br />
              <span className="hero-title-sub">for Modern Businesses</span>
              <span className="title-underline-about" />
            </h1>

            <p className="hero-description-about">
              We help startups and enterprises accelerate growth through AI,
              cloud, web, mobile, and enterprise technology solutions designed
              for impact, built to scale.
            </p>

            <div className="hero-ctas-about">
           <Link 
 to="/contact"
  state={{ scrollTo: 'enquiries' }}

  className="btn-primary-about"
>
  <span>Begin Your Transformation</span>
  <HiArrowLongRight size={20} className="btn-icon" />
</Link>

<Link 
  to="/services" 
  className="btn-outline-about"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  Explore Services
</Link>
            </div>

            {/* Feature Pills */}
            <div className="hero-feature-pills">
              <div className="feature-pill">
                <HiOutlineSparkles />
                <span>AI-Powered</span>
              </div>
              <div className="feature-pill">
                <HiOutlineCloud />
                <span>Cloud Native</span>
              </div>
              <div className="feature-pill">
                <HiOutlineGlobeAlt />
                <span>Global Scale</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Stats & Visuals */}
          <motion.div className="hero-right-column" variants={itemVariants}>
            {/* Stats Grid */}
            <div className="hero-stats-grid">
              <motion.div
                className="hero-stat-card"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="stat-icon-wrapper">
                  <HiOutlineChartBar />
                </div>
                <div className="stat-content">
                  <span className="stat-number-large">9+</span>
                  <span className="stat-label-large">Years Excellence</span>
                </div>
              </motion.div>

              <motion.div
                className="hero-stat-card"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="stat-icon-wrapper">
                  <HiOutlineBriefcase />
                </div>
                <div className="stat-content">
                  <span className="stat-number-large">242+</span>
                  <span className="stat-label-large">Projects Delivered</span>
                </div>
              </motion.div>

              <motion.div
                className="hero-stat-card"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="stat-icon-wrapper">
                  <HiOutlineUsers />
                </div>
                <div className="stat-content">
                  <span className="stat-number-large">98%</span>
                  <span className="stat-label-large">Client Satisfaction</span>
                </div>
              </motion.div>

              <motion.div
                className="hero-stat-card"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="stat-icon-wrapper">
                  <HiOutlineGlobeAlt />
                </div>
                <div className="stat-content">
                  <span className="stat-number-large">50+</span>
                  <span className="stat-label-large">Team Members</span>
                </div>
              </motion.div>
            </div>

            {/* Visual Element - Premium Card */}
            {/* <div className="hero-visual-premium">
              <div className="hero-visual-card">
                <div className="visual-header-premium">
                  <div className="visual-dots-premium">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="visual-title-premium">Zeta-V Platform</span>
                </div>
                <div className="visual-body-premium">
                  <div className="visual-chart">
                    <div
                      className="chart-bar"
                      style={{ height: "70%", animationDelay: "0s" }}
                    >
                      <span>AI</span>
                    </div>
                    <div
                      className="chart-bar"
                      style={{ height: "85%", animationDelay: "0.2s" }}
                    >
                      <span>Cloud</span>
                    </div>
                    <div
                      className="chart-bar"
                      style={{ height: "60%", animationDelay: "0.4s" }}
                    >
                      <span>IoT</span>
                    </div>
                    <div
                      className="chart-bar"
                      style={{ height: "90%", animationDelay: "0.6s" }}
                    >
                      <span>Data</span>
                    </div>
                    <div
                      className="chart-bar"
                      style={{ height: "75%", animationDelay: "0.8s" }}
                    >
                      <span>Mobile</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Edge */}
      <div className="hero-bottom-edge" />
    </section>
  );
}
