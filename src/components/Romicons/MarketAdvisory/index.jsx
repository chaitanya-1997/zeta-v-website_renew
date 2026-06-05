import React from "react";
import { motion } from "framer-motion";

import {
  TrendingUp,
  LineChart,
  Users,
  Target,
  ArrowRight,
} from "lucide-react";

import "./MarketAdvisory.css";

const MarketAdvisory = () => {
  return (
    <section className="market-advisory">

      <div className="market-container">

        {/* LEFT SIDE */}

        <motion.div
          className="market-diagram"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="diagram-line vertical"></div>
          <div className="diagram-line horizontal"></div>

          <div className="market-center">
            <span>Market Advisory</span>
          </div>

          <div className="market-node top">
            <TrendingUp size={28} />
            <h4>Competitive Benchmarking</h4>
          </div>

          <div className="market-node right">
            <Users size={28} />
            <h4>Scalable Growth Strategy </h4>
          </div>

          <div className="market-node bottom">
            <Target size={28} />
            <h4>Market Entry Strategy </h4>
          </div>

          <div className="market-node left">
            <LineChart size={28} />
            <h4>Global Reach </h4>
          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          className="market-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span className="section-label">
            MARKET ADVISORY
          </span>

          <h2 className="section-title">
            Turning Market Intelligence Into
            <span className="grad-text"> Strategic Advantage</span>
          </h2>

          <p className="section-subtitle">
            At Zeta-V, our Market Advisory services combine in-depth market research, actionable strategies, 
            and team-building expertise to empower your business to thrive in both established and emerging markets.
          </p>

          <div className="market-points">

            <div className="point">
              Competitive Benchmarking
            </div>

            <div className="point">
              Scalable Growth Strategy
            </div>

            <div className="point">
              Market Entry Strategy
            </div>

            <div className="point">
              Global Reach
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default MarketAdvisory;