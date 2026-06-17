import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BriefcaseBusiness,
  Globe,
  Network,
  BadgeCheck,
  ChevronDown,
} from "lucide-react";

import "./DealAdvisory.css";
import dealBg from "../../../assets/Advisory/deal.svg";

const features = [
  {
    icon: <BriefcaseBusiness size={22} />,
    title: "Tailored Solutions",
    description:
      "Customized approaches to meet specific client needs.",
  },
  {
    icon: <Network size={22} />,
    title: "Cross-Functional Expertise",
    description:
      "Diverse team skills for comprehensive deal support.",
  },
  {
    icon: <Globe size={22} />,
    title: "Global Perspective",
    description:
      "International insights for a broader market view.",
  },
  {
    icon: <BadgeCheck size={22} />,
    title: "Proven Track Record",
    description:
      "Established success in delivering effective deals.",
  },
];

const DealAdvisory = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="deal-advisory">
      <div className="deal-container">

        {/* LEFT CONTENT */}

        <motion.div
          className="deal-content"
          style={{
            "--deal-bg": `url(${dealBg})`,
          }}
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="deal-bg"></div>

          <span className="section-label">
            DEAL ADVISORY
          </span>

          <h2 className="section-title">
            Maximizing Deal Value Through
            <span className="grad-text">
              {" "}Strategic Advisory
            </span>
          </h2>

          <p className="section-subtitle">
            Our Deal Advisory services are designed to help you
            navigate the complexities of deals by optimizing
            strategic value and ensuring sustainable ROI for
            your business.
          </p>
        </motion.div>

        {/* RIGHT ACCORDION */}

        <motion.div
          className="deal-accordion"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {features.map((item, index) => (
            <div
              key={index}
              className={`accordion-item ${
                active === index ? "active" : ""
              }`}
            >
              <button
                className="accordion-header"
                onClick={() =>
                  setActive(
                    active === index ? -1 : index
                  )
                }
              >
                <span className="accordion-number">
                {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item.title}</h3>

                <ChevronDown
                  size={20}
                  className={`arrow ${
                    active === index ? "rotate" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    className="accordion-content"
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                  >
                    <div className="icon-circle">
                      {item.icon}
                    </div>

                    <p>{item.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default DealAdvisory;