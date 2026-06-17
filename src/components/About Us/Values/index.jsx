import React from "react";
import "./Values.css";
import valuesBg from "../../../assets/about/values.svg";

const values = [
  {
    id: "01",
    title: "Innovation",
    tagline: "Think Ahead, Deliver Now",
    description: "Driving progress through creativity, technology, and continuous improvement.",
  },
  {
    id: "02",
    title: "Integrity",
    tagline: "Say It. Mean It. Deliver It.",
    description: "Building lasting relationships through transparency and accountability.",
  },
  {
    id: "03",
    title: "Adaptability",
    tagline: "Change Is Our Constant",
    description: "Evolving alongside technology and business landscapes to keep our clients ahead.",
  },
  {
    id: "04",
    title: "Inclusivity",
    tagline: "Technology Without Borders",
    description: "Creating solutions accessible to every business, every team, every person.",
  },
  {
    id: "05",
    title: "Partnership",
    tagline: "We Succeed When You Succeed",
    description: "Your goals are our goals, we measure our performance by your outcomes.",
  },
];

const Values = () => {
  return (
    <section className="values-section">
         <img
        src={valuesBg}
        alt=""
        aria-hidden="true"
        className="values-bg"
      />

      <div className="values-heading">
        <span className="section-label">OUR CORE VALUES</span>
        <h2 className="section-title">
          Our Core <span className="grad-text">Values</span>
        </h2>
        <p className="section-subtitle">
          The values that guide our decisions, culture, and commitment to excellence.
        </p>
      </div>

      <div className="values-list">
        {values.map((v) => (
          <div className="value-row" key={v.id}>
            <span className="value-number">{v.id}</span>
            <div className="value-body">
              <div className="value-top">
                <h3 className="value-title">{v.title}</h3>
                <span className="value-tagline">{v.tagline}</span>
              </div>
              <p className="value-desc">{v.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;