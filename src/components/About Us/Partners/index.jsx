import React from "react";
import { motion } from "framer-motion";

import "./Partners.css";

import izapy from "../../../assets/team/izapy.png";
import fugu from "../../../assets/team/fugu.png";
import inmorphis from "../../../assets/team/inmorphis.png";
import cynoteck from "../../../assets/team/cynoteck.png";
import swan from "../../../assets/team/swan.png";
import zerolite from "../../../assets/team/zerolite.png";


const partners = [
  {
    name: "IZAPY",
    logo: izapy,
  },

  {
    name: "Fugu Mobile",
    logo: fugu,
  },

  {
    name: "inmorphis",
    logo: inmorphis,
  },

  {
    name: "Cynoteck",
    logo: cynoteck,
  },

  {
    name: "Swan",
    logo: swan,
  },

  {
    name: "Zerolite",
    logo: zerolite,
  },
];

export default function Partners() {

  return (

    <section className="partners-section">

      {/* Heading */}

      <motion.div
        className="partners-heading"

        initial={{ opacity: 0, y: 40 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.8 }}

        viewport={{ once: true }}
      >
        <span className="section-label">Our Trusted Partners</span>
        <h2 className="section-title">
          Trusted <span className="grad-text">Partners</span>
        </h2>

        <p className="section-subtitle">
          Collaborating with global technology and enterprise partners
          to deliver scalable, innovative, and future-ready solutions.
        </p>

      </motion.div>

      {/* Moving Slider */}

      <div className="partners-slider">

        <div className="partners-track">

          {/* First Set */}

          {partners.map((partner, index) => (

            <div
              className="partner-card"
              key={index}
            >

              <img
                src={partner.logo}
                alt={partner.name}
              />

            </div>
          ))}

          {/* Duplicate Set For Infinite Loop */}

          {partners.map((partner, index) => (

            <div
              className="partner-card"
              key={`duplicate-${index}`}
            >

              <img
                src={partner.logo}
                alt={partner.name}
              />

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}