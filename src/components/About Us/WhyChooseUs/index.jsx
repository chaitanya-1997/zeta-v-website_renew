// WhyChooseUs.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  BriefcaseBusiness,
  Users,
  Globe,
  Handshake,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import "./WhyChooseUs.css";

const chooseData = [
  {
    icon: Rocket,
    title: "Powered by the Proprietary zVMF Framework",
    description: "Our proprietary Zeta Value Multiplier Framework (zVMF) ensures every technology decision is aligned with measurable business outcomes, turning vision into tangible value.",
    gradient: "linear-gradient(135deg, #22a7f0, #6366f1)",
    color: "#22a7f0",
    bg: "rgba(34, 167, 240, 0.08)"
  },
  {
    icon: BriefcaseBusiness,
    title: "One Partner. Complete Accountability.",
    description: "From consulting and solution architecture to implementation and delivery, we orchestrate the entire technology journey; providing a seamless experience through a single, trusted point of accountability.",
    gradient: "linear-gradient(135deg, #34d399, #06b6d4)",
    color: "#34d399",
    bg: "rgba(52, 211, 153, 0.08)"
  },
  {
    icon: Users,
    title: "Access to the Best Technology Experts",
    description: "Through our network of 10+ accredited technology partners, we connect businesses with specialized expertise, ensuring every solution is built using the most suitable technologies and industry-leading practices.",
    gradient: "linear-gradient(135deg, #f472b6, #ec4899)",
    color: "#ec4899",
    bg: "rgba(244, 114, 182, 0.08)"
  },
  {
    icon: Globe,
    title: "Global Expertise with Local Understanding",
    description: "With a worldwide presence, multilingual capabilities, and culturally aligned teams, we deliver globally recognized technology solutions tailored to local business needs and market dynamics.",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    color: "#f59e0b",
    bg: "rgba(245, 158, 11, 0.08)"
  },
  {
    icon: Handshake,
    title: "Relationships Built on Results",
    description: "Our 95% client retention rate reflects the trust we've earned through consistent delivery, measurable outcomes, and long-term partnerships that continue to drive business growth.",
    gradient: "linear-gradient(135deg, #a78bfa, #8b5cf6)",
    color: "#8b5cf6",
    bg: "rgba(167, 139, 250, 0.08)"
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section-premium">
      {/* Background Decorations */}
      <div className="why-bg-decor">
        <div className="why-bg-blob wblob-1" />
        <div className="why-bg-blob wblob-2" />
        <div className="why-bg-blob wblob-3" />
      </div>
      <div className="why-grid-overlay" />

      {/* Heading */}
      <motion.div
        className="why-heading-premium"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="why-label-wrapper">
          <span className="why-label-line" />
          <span className="why-label-text">Why Choose Us</span>
          <span className="why-label-line" />
        </div>
        <h2 className="why-title-premium">
          More Than a Vendor.<br />
          {/* <span className="text-gradient-why">A Value Partner.</span> */}
            <span>A Value Partner.</span>
          <span className="why-title-icon">✦</span>
        </h2>
        <p className="why-subtitle-premium">
          Empowering businesses with scalable digital solutions, enterprise innovation,
          and technology-driven transformation.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="why-grid-premium">
        {chooseData.map((item, index) => {
          const IconComponent = item.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              className={`why-card-premium ${isEven ? 'why-card-left' : 'why-card-right'}`}
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ '--card-color': item.color, '--card-bg': item.bg }}
            >
              {/* Card Glow */}
              <div className="why-card-glow" style={{ background: item.gradient }} />

              {/* Icon with Gradient */}
              <div className="why-card-icon-wrapper" style={{ background: item.gradient }}>
                <IconComponent className="why-card-icon" size={24} />
              </div>

              {/* Content */}
              <div className="why-card-content">
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-description">{item.description}</p>
              </div>

              {/* Number Badge */}
              {/* <span className="why-card-number">0{index + 1}</span> */}

              {/* Learn More Link */}
              <div className="why-card-link">
                {/* <span>Learn More</span> */}
                {/* <ArrowUpRight size={16} /> */}
              </div>

              {/* Decorative Line */}
              <div className="why-card-line" style={{ background: item.gradient }} />

              {/* Hover Border */}
              <div className="why-card-border" style={{ background: item.gradient }} />
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Decorative Edge */}
      <div className="why-bottom-edge" />
    </section>
  );
}