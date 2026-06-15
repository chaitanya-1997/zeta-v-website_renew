// src/components/AboutAll/MissionVision.jsx
import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Rocket, Sparkles, ChevronRight, Shield, Zap } from "lucide-react";
import "./MissionVision.css";
import missionImg from "../../../assets/about/mission.jpg";
import visionImg from "../../../assets/about/vision.jpg";

const MissionVision = () => {
  return (
    <div className="mission-vision-wrapper">
      <div className="mission-vision-header">
        <motion.span 
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Purpose
        </motion.span>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          What Drives <span className="grad-text">Us Forward</span>
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Our mission and vision guide everything we do at Zeta-V
        </motion.p>
      </div>

      <div className="mission-vision-container">
        {/* Mission Card */}
        <motion.div 
          className="mv-card mission-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mv-card-bg" style={{ backgroundImage: `url(${missionImg})` }}>
            <div className="mv-card-overlay"></div>
          </div>
          
          <div className="mv-card-icon-large">
            <Target size={56} strokeWidth={1.5} />
          </div>
          
          <div className="mv-card-content">
            <div className="mv-card-badge">Our Mission</div>
            <h3>Orchestrating Digital Transformation</h3>
            <p>
              To orchestrate a digitally enabled transformative IT solutions ecosystem 
              that democratizes access to cutting-edge technologies while leveraging 
              a global workforce, diverse languages, and cultures to empower 
              organizations to transform their visions into reality.
            </p>
            {/* <div className="mv-card-stats">
              <div className="mv-stat">
                <Zap size={18} />
                <span>Innovation First</span>
              </div>
              <div className="mv-stat">
                <Shield size={18} />
                <span>Global Reach</span>
              </div>
            </div> */}
            {/* <div className="mv-card-footer">
              <span>Driving innovation forward</span>
              <ChevronRight size={18} />
            </div> */}
          </div>
        </motion.div>

        {/* Vision Card */}
        <motion.div 
          className="mv-card vision-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mv-card-bg" style={{ backgroundImage: `url(${visionImg})` }}>
            <div className="mv-card-overlay"></div>
          </div>
          
          <div className="mv-card-icon-large">
            <Eye size={56} strokeWidth={1.5} />
          </div>
          
          <div className="mv-card-content">
            <div className="mv-card-badge">Our Vision</div>
            <h3>Becoming the Preferred Partner</h3>
            <p>
              To become the preferred technology partner for small and medium-sized 
              businesses by enabling innovation, accelerating digital transformation, 
              and guiding organizations through every stage of their journey from 
              business ideation to successful market realization.
            </p>
            {/* <div className="mv-card-stats">
              <div className="mv-stat">
                <Rocket size={18} />
                <span>Growth Focused</span>
              </div>
              <div className="mv-stat">
                <Sparkles size={18} />
                <span>Excellence Driven</span>
              </div>
            </div> */}
            {/* <div className="mv-card-footer">
              <span>Building tomorrow's enterprises</span>
              <ChevronRight size={18} />
            </div> */}
          </div>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <div className="mv-floating-elements">
        <div className="float-dot dot-1"></div>
        <div className="float-dot dot-2"></div>
        <div className="float-dot dot-3"></div>
        <div className="float-dot dot-4"></div>
      </div>
    </div>
  );
};

export default MissionVision;