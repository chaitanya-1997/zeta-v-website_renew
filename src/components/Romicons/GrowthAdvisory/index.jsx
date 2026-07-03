// GrowthAdvisory.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Rocket,
  Handshake,
  Zap,
  ArrowRight,
  Sparkles
} from "lucide-react";
import "./GrowthAdvisory.css";

import { Link } from 'react-router-dom';

// Import images
import BgImage1 from '../../../assets/pexels/pexels-photo-17.avif';

import BgImage2 from '../../../assets/pexels/pexels-photo-18.avif';
import BgImage3 from '../../../assets/pexels/pexels-photo-19.avif';
import BgImage4 from '../../../assets/pexels/pexels-photo-20.avif';
import BgImage5 from '../../../assets/pexels/pexels-photo-21.avif';



const growthPoints = [
  {
    number: "01",
    icon: <TrendingUp size={22} />,
    title: "Market Expansion",
    description: "Expanding into new geographical or demographic markets to increase reach and revenue.",
    image: BgImage5,
    gradient: "linear-gradient(135deg, #22a7f0, #6366f1)",
    color: "#22a7f0",
    lightBg: "rgba(34, 167, 240, 0.08)"
  },
  {
    number: "02",
    icon: <Rocket size={22} />,
    title: "Innovation-Driven Growth",
    description: "Leveraging new ideas and technologies to drive business transformation and growth.",
    image: BgImage4,
    gradient: "linear-gradient(135deg, #34d399, #06b6d4)",
    color: "#34d399",
    lightBg: "rgba(52, 211, 153, 0.08)"
  },
  {
    number: "03",
    icon: <Zap size={22} />,
    title: "Agile Execution",
    description: "Implementing flexible and efficient processes to adapt quickly to market changes.",
    image: BgImage3,
    gradient: "linear-gradient(135deg, #f472b6, #ec4899)",
    color: "#f472b6",
    lightBg: "rgba(244, 114, 182, 0.08)"
  },
  {
    number: "04",
    icon: <Handshake size={22} />,
    title: "Strategic Partnerships",
    description: "Forming alliances to enhance capabilities, expand reach, and drive mutual growth.",
    image: BgImage2,
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    color: "#f59e0b",
    lightBg: "rgba(245, 158, 11, 0.08)"
  },
];

export default function GrowthAdvisory() {
  return (
    <section className="growth-advisory-unique">
      {/* Background Image */}
      <div className="growth-advisory-bg-image">
        <img src={BgImage1} alt="Growth" />
        <div className="growth-advisory-bg-overlay" />
        <div className="growth-advisory-bg-pattern" />
      </div>

      {/* Floating Orbs */}
      <div className="growth-advisory-float-orbs">
        <div className="float-orb fo-1" />
        <div className="float-orb fo-2" />
        <div className="float-orb fo-3" />
        <div className="float-orb fo-4" />
      </div>

      <div className="growth-advisory-unique-container">
        {/* Header */}
        <motion.div 
          className="growth-advisory-unique-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
            <div className="industry-cards-premium-label">
           <span className="label-line" />
            <span className="label-text" >Growth Advisory</span>
                <span className="label-line" />
         </div>
          
          
          <h2 className="growth-advisory-unique-title">
            Accelerating Sustainable{' '}
            {/* <span className="gradient-text-growth-light">Business Growth</span> */}
             <span >Business Growth</span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p 
          className="growth-advisory-unique-desc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          At Zeta-V, we specialize in guiding IT businesses through pivotal growth phases, 
          from recovery and turnarounds to scaling at lightning speed in new and existing markets.
        </motion.p>

        {/* Cards */}
        <div className="growth-advisory-unique-grid">
          {growthPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="growth-advisory-unique-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                style={{ '--card-color': item.color }}
              >
                <div className="growth-advisory-unique-card-image">
                  <img src={item.image} alt={item.title} />
                  <div className="growth-advisory-unique-card-overlay" style={{ background: item.gradient }} />
                  {/* <div className="growth-advisory-unique-card-badge" style={{ background: item.gradient }}>
                    {item.number}
                  </div> */}
                </div>
                
                <div className="growth-advisory-unique-card-body">
                  <div className="growth-advisory-unique-card-icon" style={{ background: item.lightBg, color: item.color }}>
                    {Icon}
                  </div>
                  <h3 className="growth-advisory-unique-card-title">{item.title}</h3>
                  <p className="growth-advisory-unique-card-desc">{item.description}</p>
                  {/* <div className="growth-advisory-unique-card-link" style={{ color: item.color }}>
                    <span>Learn More</span>
                    <ArrowRight />
                  </div> */}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
     <motion.div 
  className="growth-advisory-unique-cta"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.6 }}
  viewport={{ once: true }}
>
  <Link 
   to="/contact"
  state={{ scrollTo: 'enquiries' }} 
    className="growth-advisory-unique-cta-btn"
    // onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    <span>Start Your Growth Journey</span>
    <ArrowRight />
  </Link>
</motion.div>
      </div>

      {/* Bottom Edge */}
      <div className="growth-advisory-unique-bottom" />
    </section>
  );
}