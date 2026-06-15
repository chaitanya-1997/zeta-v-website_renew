// WhyChooseUs.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  BriefcaseBusiness,
  Users,
  Globe,
  Handshake
} from "lucide-react";
import "./WhyChooseUs.css";

import chooseBg from "../../../assets/about/choose.jpg";

const chooseData = [
  {
    icon: <Rocket size={22} />,
    title: "Powered by the Proprietary zVMF Framework",
    description: "Our proprietary Zeta Value Multiplier Framework (zVMF) ensures every technology decision is aligned with measurable business outcomes, turning vision into tangible value.",
  },
  {
    icon: <BriefcaseBusiness size={22} />,
    title: "One Partner. Complete Accountability.",
    description: "From consulting and solution architecture to implementation and delivery, we orchestrate the entire technology journey; providing a seamless experience through a single, trusted point of accountability.",
  },
  {
    icon: <Users size={22} />,
    title: "Access to the Best Technology Experts",
    description: "Through our network of 10+ accredited technology partners, we connect businesses with specialized expertise, ensuring every solution is built using the most suitable technologies and industry-leading practices.",
  },
  {
    icon: <Globe size={22} />,
    title: "Global Expertise with Local Understanding",
    description: "With a worldwide presence, multilingual capabilities, and culturally aligned teams, we deliver globally recognized technology solutions tailored to local business needs and market dynamics.",
  },
  {
    icon: <Handshake size={22} />,
    title: "Relationships Built on Results",
    description: "Our 95% client retention rate reflects the trust we've earned through consistent delivery, measurable outcomes, and long-term partnerships that continue to drive business growth.",
  },
];

const iconColors = [
  { bg: "var(--why-bg-tertiary)", color: "var(--why-blue-dark)" },
  { bg: "#E1F5EE", color: "#085041" },
  { bg: "#EEEDFE", color: "#3C3489" },
  { bg: "#FAECE7", color: "#712B13" },
  { bg: "#EAF3DE", color: "#27500A" },
];

export default function WhyChooseUs() {
  return (
    <section className="why_section">
      <img
        src={chooseBg}
        alt=""
        aria-hidden="true"
        className="why_bg_image"
      />

      <motion.div
        className="why_heading_container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="why_label">Why choose us</span>
        <h2 className="why_title">
          More Than a Vendor.<br /> <span className="why_gradient_text">A Value Partner.</span>
        </h2>
        <p className="why_subtitle">
          Empowering businesses with scalable digital solutions, enterprise innovation, and technology-driven transformation.
        </p>
      </motion.div>

      <div className="why_list_container">
        {chooseData.map((item, index) => (
          <motion.div
            className="why_row"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="why_left_panel">
              <span className="why_row_number">0{index + 1}</span>
              <div
                className="why_icon_wrapper"
                style={{
                  background: iconColors[index].bg,
                  color: iconColors[index].color,
                }}
              >
                {item.icon}
              </div>
              <h3 className="why_row_title">{item.title}</h3>
            </div>

            <div className="why_divider" />

            <div className="why_right_panel">
              <p className="why_description">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}