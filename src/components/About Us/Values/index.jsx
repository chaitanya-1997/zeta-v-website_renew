import React from "react";
import {
  Lightbulb,
  ShieldCheck,
  Globe2,
  Users,
} from "lucide-react";

import "./Values.css";

const values = {
  top: {
    icon: <Lightbulb size={36} />,
    title: "Innovation",
    description:
      "Driving progress through creativity, technology, and continuous improvement.",
  },

  right: {
    icon: <ShieldCheck size={36} />,
    title: "Trust & Integrity",
    description:
      "Building lasting relationships through transparency and accountability.",
  },

  bottom: {
    icon: <Globe2 size={36} />,
    title: "Global Impact",
    description:
      "Delivering scalable solutions that create meaningful business value worldwide.",
  },

  left: {
    icon: <Users size={36} />,
    title: "Customer Success",
    description:
      "Putting customer goals at the center of every decision and solution.",
  },
};

const Values = () => {
  return (
    <section className="values-section">

      <div className="values-heading">
      <span className="section-label">OUR CORE VALUES</span>

      <h2 className="section-title"> Our Core <span className="grad-text">Values</span></h2>

      <p className="section-subtitle">
        The values that guide our decisions, culture, and commitment to excellence.
      </p>

      </div>

      <div className="values-container">

        {/* Top Value */}
        <div className="value-node top-node">
          <p className="value-description">
            {values.top.description}
          </p>

          <h4>{values.top.title}</h4>

          <div className="icon-circle">
            {values.top.icon}
          </div>
        </div>

        {/* Left Value */}
        <div className="value-node left-node">
          <div className="icon-circle">
            {values.left.icon}
          </div>

          <h4>{values.left.title}</h4>

          <p className="value-description">
            {values.left.description}
          </p>
        </div>

        {/* Right Value */}
        <div className="value-node right-node">
          <div className="icon-circle">
            {values.right.icon}
          </div>

          <h4>{values.right.title}</h4>

          <p className="value-description">
            {values.right.description}
          </p>
        </div>

        {/* Bottom Value */}
        <div className="value-node bottom-node">
          <div className="icon-circle">
            {values.bottom.icon}
          </div>

          <h4>{values.bottom.title}</h4>

          <p className="value-description">
            {values.bottom.description}
          </p>
        </div>

        {/* Horizontal Line */}
        <div className="horizontal-line"></div>

        {/* Vertical Line */}
        <div className="vertical-line"></div>

        {/* Center Circle */}
        <div className="core-circle">
          <span>CORE VALUES</span>
        </div>

      </div>
    </section>
  );
};

export default Values;