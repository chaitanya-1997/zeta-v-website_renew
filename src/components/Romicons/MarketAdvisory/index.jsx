// MarketAdvisory.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Map,
  TrendingUp,
  Globe,
  ArrowRight,
  Sparkles
} from "lucide-react";
import "./MarketAdvisory.css";



const advisoryPoints = [
  {
    number: "01",
    icon: <BarChart3 size={22} />,
    title: "Competitive Benchmarking",
    description:
      "Map your position against industry peers with rigorous quantitative and qualitative analysis across product, pricing, and positioning.",
    gradient: "linear-gradient(135deg, #22a7f0, #6366f1)",
    color: "#22a7f0",
    lightBg: "rgba(34, 167, 240, 0.08)"
  },
  {
    number: "02",
    icon: <Map size={22} />,
    title: "Market Entry Strategy",
    description:
      "Custom entry blueprints tailored to regulatory landscapes, channel dynamics, and risk profiles in each target market.",
    gradient: "linear-gradient(135deg, #34d399, #06b6d4)",
    color: "#34d399",
    lightBg: "rgba(52, 211, 153, 0.08)"
  },
  {
    number: "03",
    icon: <TrendingUp size={22} />,
    title: "Scalable Growth Strategy",
    description:
      "Structured operating models designed to scale revenue and headcount without proportional drag on efficiency or culture.",
    gradient: "linear-gradient(135deg, #f472b6, #ec4899)",
    color: "#f472b6",
    lightBg: "rgba(244, 114, 182, 0.08)"
  },
  {
    number: "04",
    icon: <Globe size={22} />,
    title: "Global Reach",
    description:
      "Active advisory network spanning multiple regions, connecting you with partners, capital networks, and enterprise buyers.",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    color: "#f59e0b",
    lightBg: "rgba(245, 158, 11, 0.08)"
  },
];

const MarketAdvisory = () => {
  return (
    <section className="market-advisory-premium">
      {/* Background Image */}
      <div className="market-advisory-bg-image">
        <img src="https://images.pexels.com/photos/5789911/pexels-photo-5789911.jpeg" alt="" />
        <div className="market-advisory-bg-overlay" />
        <div className="market-advisory-bg-pattern" />
      </div>

      {/* Floating Orbs */}
      <div className="market-advisory-orbs">
        <div className="morb morb-1" />
        <div className="morb morb-2" />
        <div className="morb morb-3" />
        <div className="morb morb-4" />
      </div>

      <div className="market-advisory-premium-container">
        {/* Header */}
      

           <div className="industry-cards-premium-label">
           <span className="label-line" />
            <span className="label-text">Market Advisory</span>
                <span className="label-line" />
         </div>

        {/* Main Content */}
        <div className="market-advisory-premium-layout">
          {/* LEFT - List Items */}
          <motion.div 
            className="market-advisory-premium-list"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {advisoryPoints.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="market-advisory-premium-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                  style={{ '--item-color': item.color }}
                >
                  <div className="market-advisory-premium-item-left">
                    {/* <span className="market-advisory-premium-item-number" style={{ color: item.color }}>
                      {item.number}
                    </span> */}
                    <div className="market-advisory-premium-item-icon" style={{ background: item.lightBg, color: item.color }}>
                      {Icon}
                    </div>
                  </div>
                  <div className="market-advisory-premium-item-content">
                    <h3 className="market-advisory-premium-item-title">{item.title}</h3>
                    <p className="market-advisory-premium-item-desc">{item.description}</p>
                    <div className="market-advisory-premium-item-line" style={{ background: item.gradient }} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* RIGHT - Content */}
          <motion.div 
            className="market-advisory-premium-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="market-advisory-premium-content">
              <h2 className="market-advisory-premium-title">
                Turning Market Intelligence Into{' '}
                {/* <span className="gradient-text-market">Strategic Advantage</span> */}
                 <span>Strategic Advantage</span>
              </h2>
              
              <p className="market-advisory-premium-desc">
                At Zeta-V, our Market Advisory services combine in-depth market research, 
                actionable strategies, and team-building expertise to empower your business 
                to thrive in both established and emerging markets.
              </p>

              {/* <a href="#contact" className="market-advisory-premium-cta">
                <span>Explore Market Advisory</span>
                <ArrowRight />
              </a> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Edge */}
      <div className="market-advisory-premium-bottom" />
    </section>
  );
};

export default MarketAdvisory;