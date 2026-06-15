import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Map,
  TrendingUp,
  Globe,
} from "lucide-react";

import "./MarketAdvisory.css";

import market from "../../../assets/Advisory/market.svg";

const advisoryPoints = [
  {
    number: "01",
    icon: <BarChart3 size={22} />,
    title: "Competitive Benchmarking",
    description:
      "Map your position against industry peers with rigorous quantitative and qualitative analysis across product, pricing, and positioning.",
  },
  {
    number: "02",
    icon: <Map size={22} />,
    title: "Market Entry Strategy",
    description:
      "Custom entry blueprints tailored to regulatory landscapes, channel dynamics, and risk profiles in each target market.",
  },
  {
    number: "03",
    icon: <TrendingUp size={22} />,
    title: "Scalable Growth Strategy",
    description:
      "Structured operating models designed to scale revenue and headcount without proportional drag on efficiency or culture.",
  },
  {
    number: "04",
    icon: <Globe size={22} />,
    title: "Global Reach",
    description:
      "Active advisory network spanning multiple regions, connecting you with partners, capital networks, and enterprise buyers.",
  },
];

const MarketAdvisory = () => {
  return (
    <section className="market-advisory">
      <div className="market-container">

        {/* LEFT SIDE */}

        <div className="market-list">
          {advisoryPoints.map((item, index) => (
            <motion.div
              key={index}
              className="market-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
            >
              <div className="market-number">
                {item.number}
              </div>

              <div className="market-details">
                <div className="market-title-row">
                  <span className="market-icon">
                    {item.icon}
                  </span>

                  <h3>{item.title}</h3>
                </div>

                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT SIDE */}

        <motion.div
          className="market-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* SVG Background */}

          <div
            className="market-content-bg"
            style={{
              backgroundImage: `url(${market})`,
            }}
          ></div>

          <div className="market-content-inner">
            <span className="section-label">
              MARKET ADVISORY
            </span>

            <h2 className="section-title">
              Turning Market Intelligence Into
              <span className="grad-text">
                {" "}Strategic Advantage
              </span>
            </h2>

            <p className="section-subtitle">
              At Zeta-V, our Market Advisory services combine
              in-depth market research, actionable strategies,
              and team-building expertise to empower your
              business to thrive in both established and
              emerging markets.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MarketAdvisory;