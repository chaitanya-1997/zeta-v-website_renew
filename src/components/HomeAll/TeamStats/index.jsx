// TeamStats.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import './TeamStats.css';

const stats = [
  { value: 242, suffix: '+', label: 'Enterprise Projects Delivered' },
  { value: 34, suffix: '+', label: 'Global Enterprise Clients' },
  { value: 9, suffix: '+', label: 'Years of Engineering Excellence' },
  { value: 98, suffix: '%', label: 'Client Success Rate' },
];

function AnimatedNumber({ value, suffix, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="stat-card">
      <div className="stat-value-container">
        <span className="stat-value">{count}</span>
        <span className="stat-suffix">{suffix}</span>
      </div>
      <p className="stat-label-i">{label}</p>
    </div>
  );
}

export default function TeamStats() {
  return (
    <section className="section team-stats-section section-dark">
      {/* Background Elements */}
      <div className="stats-bg-pattern"></div>
      <div className="stats-glow"></div>
      
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <AnimatedNumber key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}