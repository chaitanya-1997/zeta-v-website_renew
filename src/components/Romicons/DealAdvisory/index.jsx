// DealAdvisory.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BriefcaseBusiness,
  Globe,
  Network,
  BadgeCheck,
  ChevronDown,
  Sparkles,
  ArrowRight
} from "lucide-react";
import "./DealAdvisory.css";
import BgImage1 from '../../../assets/pexels/pexels-photo-22.avif';



const features = [
  {
    icon: <BriefcaseBusiness size={22} />,
    title: "Tailored Solutions",
    description: "Customized approaches to meet specific client needs with precision and expertise.",
    gradient: "linear-gradient(135deg, #22a7f0, #6366f1)",
    color: "#22a7f0",
    lightBg: "rgba(34, 167, 240, 0.08)"
  },
  {
    icon: <Network size={22} />,
    title: "Cross-Functional Expertise",
    description: "Diverse team skills for comprehensive deal support across multiple domains.",
    gradient: "linear-gradient(135deg, #34d399, #06b6d4)",
    color: "#34d399",
    lightBg: "rgba(52, 211, 153, 0.08)"
  },
  {
    icon: <Globe size={22} />,
    title: "Global Perspective",
    description: "International insights for a broader market view and strategic advantage.",
    gradient: "linear-gradient(135deg, #f472b6, #ec4899)",
    color: "#f472b6",
    lightBg: "rgba(244, 114, 182, 0.08)"
  },
  {
    icon: <BadgeCheck size={22} />,
    title: "Proven Track Record",
    description: "Established success in delivering effective deals with measurable outcomes.",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    color: "#f59e0b",
    lightBg: "rgba(245, 158, 11, 0.08)"
  },
];

const DealAdvisory = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="deal-advisory-premium">
      {/* Background Decorations */}
      <div className="deal-advisory-premium-bg">
        <div className="deal-advisory-premium-blob dblob-1" />
        <div className="deal-advisory-premium-blob dblob-2" />
        <div className="deal-advisory-premium-blob dblob-3" />
        <div className="deal-advisory-premium-blob dblob-4" />
      </div>
      <div className="deal-advisory-premium-grid" />

      {/* Background Image */}
      <div className="deal-advisory-premium-image">
        <img src={BgImage1} alt="" />
        <div className="deal-advisory-premium-image-overlay" />
      </div>

      <div className="deal-advisory-premium-container">
        {/* Header */}
        {/* <motion.div 
          className="deal-advisory-premium-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="deal-advisory-premium-label">
            <Sparkles className="label-sparkle-deal" />
            <span className="label-text-deal">Deal Advisory</span>
          </div>
        </motion.div> */}

           <div className="industry-cards-premium-label">
           <span className="label-line" />
            <span className="label-text"  style={{color:'white'}}>Deal Advisory</span>
                <span className="label-line" />
         </div>
       <br></br>

        {/* Main Content */}
        <div className="deal-advisory-premium-layout">
          {/* LEFT - Content */}
          <motion.div 
            className="deal-advisory-premium-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="deal-advisory-premium-title">
              Maximizing Deal Value Through{' '}
              {/* <span className="gradient-text-deal">Strategic Advisory</span> */}
                <span >Strategic Advisory</span>
            </h2>
            
            <p className="deal-advisory-premium-desc">
              Our Deal Advisory services are designed to help you navigate the complexities 
              of deals by optimizing strategic value and ensuring sustainable ROI for your business.
            </p>

            {/* <a href="#contact" className="deal-advisory-premium-cta">
              <span>Explore Deal Advisory</span>
              <ArrowRight />
            </a> */}
          </motion.div>

          {/* RIGHT - Accordion */}
          <motion.div 
            className="deal-advisory-premium-accordion"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {features.map((item, index) => {
              const Icon = item.icon;
              const isActive = active === index;
              return (
                <div
                  key={index}
                  className={`deal-advisory-premium-item ${isActive ? 'active' : ''}`}
                  style={{ '--item-color': item.color }}
                >
                  <button
                    className="deal-advisory-premium-header"
                    onClick={() => setActive(isActive ? -1 : index)}
                  >
                    <div className="deal-advisory-premium-header-left">
                      {/* <span className="deal-advisory-premium-number" style={{ color: isActive ? item.color : 'rgba(255,255,255,0.2)' }}>
                        {String(index + 1).padStart(2, "0")}
                      </span> */}
                      <div className="deal-advisory-premium-icon" style={{ background: isActive ? item.lightBg : 'rgba(255,255,255,0.03)', color: isActive ? item.color : 'rgba(255,255,255,0.3)' }}>
                        {Icon}
                      </div>
                      <h3 className="deal-advisory-premium-title-header">{item.title}</h3>
                    </div>
                    <ChevronDown 
                      size={20} 
                      className={`deal-advisory-premium-arrow ${isActive ? 'rotate' : ''}`}
                      style={{ color: isActive ? item.color : 'rgba(255,255,255,0.2)' }}
                    />
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        className="deal-advisory-premium-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                      >
                        <div className="deal-advisory-premium-content-inner">
                          <p className="deal-advisory-premium-desc-content">{item.description}</p>
                          <div className="deal-advisory-premium-line" style={{ background: item.gradient }} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Bottom Edge */}
      <div className="deal-advisory-premium-bottom" />
    </section>
  );
};

export default DealAdvisory;