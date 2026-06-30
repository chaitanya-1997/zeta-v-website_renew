// TechAdvisory.jsx
import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight,
  Zap,
  Cpu,
  Layers,
  Rocket
} from "lucide-react";
import "./TechAdvisory.css";

const timelineItems = [
  {
    number: "01",
    title: "Process Improvement",
    description: "Enhancing operational workflows for better efficiency and reduced friction.",
    icon: <Zap size={20} />,
    gradient: "linear-gradient(135deg, #22a7f0, #6366f1)",
    color: "#22a7f0",
    lightBg: "rgba(34, 167, 240, 0.08)"
  },
  {
    number: "02",
    title: "Technology Optimization",
    description: "Aligning tech resources with business goals for maximum ROI.",
    icon: <Cpu size={20} />,
    gradient: "linear-gradient(135deg, #34d399, #06b6d4)",
    color: "#34d399",
    lightBg: "rgba(52, 211, 153, 0.08)"
  },
  {
    number: "03",
    title: "End-to-End Support",
    description: "Providing comprehensive assistance throughout your transformation journey.",
    icon: <Layers size={20} />,
    gradient: "linear-gradient(135deg, #f472b6, #ec4899)",
    color: "#f472b6",
    lightBg: "rgba(244, 114, 182, 0.08)"
  },
  {
    number: "04",
    title: "Agile & Scalable Solutions",
    description: "Developing flexible and growth-oriented systems that evolve with your business.",
    icon: <Rocket size={20} />,
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    color: "#f59e0b",
    lightBg: "rgba(245, 158, 11, 0.08)"
  },
];

const TechAdvisory = () => {
  return (
    <section className="tech-advisory-premium">
      {/* Background Decorations */}
      <div className="tech-advisory-premium-bg">
        <div className="tech-advisory-premium-blob tblob-1" />
        <div className="tech-advisory-premium-blob tblob-2" />
        <div className="tech-advisory-premium-blob tblob-3" />
      </div>
      <div className="tech-advisory-premium-pattern" />

      <div className="tech-advisory-premium-container">
        {/* Header */}
        <motion.div 
          className="tech-advisory-premium-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
         

             <div className="industry-cards-premium-label">
           <span className="label-line" />
            <span className="label-text">Tech Advisory</span>
                <span className="label-line" />
         </div>
          
          <h2 className="tech-advisory-premium-title">
            Technology Strategies That{' '}
            {/* <span className="gradient-text-tech">Accelerate Transformation</span> */}
            <span >Accelerate Transformation</span>
          </h2>
          
          <p className="tech-advisory-premium-desc">
            Our Tech Advisory services guide you through the journey of transformation—driving 
            incremental innovation and enabling process digitalization to improve efficiency, 
            enhance agility, and unlock new opportunities.
          </p>
        </motion.div>

        {/* Horizontal Flow / Tree Design */}
        <div className="tech-advisory-premium-flow">
          {/* Connecting Line */}
          <div className="tech-advisory-premium-flow-line" />
          
          {/* Flow Items */}
          <div className="tech-advisory-premium-flow-items">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="tech-advisory-premium-flow-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  style={{ '--item-color': item.color }}
                >
                  {/* Connector Dot */}
                  <div className="tech-advisory-premium-flow-dot" style={{ background: item.gradient }}>
                    <div className="tech-advisory-premium-flow-dot-pulse" />
                  </div>

                  {/* Card */}
                  <div className="tech-advisory-premium-flow-card">
                    <div className="tech-advisory-premium-flow-card-glow" style={{ background: item.gradient }} />
                    
                    <div className="tech-advisory-premium-flow-card-top">
                      <div className="tech-advisory-premium-flow-card-icon" style={{ background: item.lightBg, color: item.color }}>
                        {Icon}
                      </div>
                      {/* <span className="tech-advisory-premium-flow-card-number" style={{ color: item.color }}>
                        {item.number}
                      </span> */}
                    </div>
                    
                    <h3 className="tech-advisory-premium-flow-card-title">{item.title}</h3>
                    <p className="tech-advisory-premium-flow-card-desc">{item.description}</p>
                    
                    <div className="tech-advisory-premium-flow-card-line" style={{ background: item.gradient }} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          className="tech-advisory-premium-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* <a href="#contact" className="tech-advisory-premium-cta-btn">
            <span>Explore Tech Advisory</span>
            <ArrowRight />
          </a> */}
        </motion.div>
      </div>

      {/* Bottom Edge */}
      <div className="tech-advisory-premium-bottom" />
    </section>
  );
};

export default TechAdvisory;