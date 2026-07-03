// LeadershipPage.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiOutlineSparkles, HiOutlineUsers } from "react-icons/hi2";

// Import your existing Navbar and Footer (adjust paths as needed)
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";

// Leadership images (keep your imports)
import sujitImg from "../../assets/team/sujit1.webp";
import rangaImg from "../../assets/team/ranga.webp";
import sriniImg from "../../assets/team/srini.webp";
import gaganImg from "../../assets/team/gagan.webp";
import archanaImg from "../../assets/team/archana.webp";
import aashishImg from "../../assets/team/aashish.webp";
import meggieImg from "../../assets/team/meggie.webp";
import nehaImg from "../../assets/team/neha.webp";

// Leadership CSS (keep separate)
import "./Leadership.css";

// ---------- Leadership Data (exactly as you had) ----------
const founders = [
  {
    name: "Sujit Chatterjee",
    designation: "Founder & CEO",
    description: "Driving global digital transformation and enterprise innovation.",
    image: sujitImg,
    linkedin: "https://www.linkedin.com/in/sujit-chatterjee-1817415/",
    email: "mailto:sujit.chatterjee@zeta-v.com",
    gradient: "linear-gradient(135deg, #22a7f0, #6366f1)",
    color: "#22a7f0",
  },
  {
    name: "Ranga Vellamore",
    designation: "Founder & CTO",
    description: "Leading cloud, SAP, and next-generation technology solutions.",
    image: rangaImg,
    linkedin: "https://www.linkedin.com/in/ranga-vellamore-702b30/",
    email: "mailto:ranga.vellamore@zeta-v.com",
    gradient: "linear-gradient(135deg, #34d399, #06b6d4)",
    color: "#34d399",
  },
];

const leaders = [
  {
    name: "Javvaji Srinivasa Rao",
    designation: "Chief Operating Officer",
    linkedin: "https://www.linkedin.com/in/srinivasa-rao-javvaji-a5960b5/",
    email: "mailto:js.rao@zeta-v.com",
    image: sriniImg,
    gradient: "linear-gradient(135deg, #f472b6, #ec4899)",
    color: "#f472b6",
  },
  {
    name: "Gagan Sabharwal",
    designation: "Chief Growth Officer",
    linkedin: "https://www.linkedin.com/in/gagan-sabharwal-3050371/",
    email: "mailto:gagan.sabharwal@zeta-v.com",
    image: gaganImg,
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    color: "#f59e0b",
  },
  {
    name: "Archana Ambike",
    designation: "Chief People Officer",
    linkedin: "https://www.linkedin.com/in/archana-ambike-9576189/",
    email: "mailto:archana.ambike@zeta-v.com",
    image: archanaImg,
    gradient: "linear-gradient(135deg, #a78bfa, #8b5cf6)",
    color: "#a78bfa",
  },
  {
    name: "Aashish Shroff",
    designation: "Head of Operations India",
    linkedin: "https://www.linkedin.com/in/aashish-shroff-378947258/",
    email: "mailto:aashish.shroff@zeta-v.com",
    image: aashishImg,
    gradient: "linear-gradient(135deg, #22a7f0, #06b6d4)",
    color: "#22a7f0",
  },
  {
    name: "Meggie Wang",
    designation: "Head of Operations China",
    linkedin: "https://www.linkedin.com/in/meggie-wang-82b58210b/",
    email: "mailto:meggie.wang@zeta-v.com",
    image: meggieImg,
    gradient: "linear-gradient(135deg, #34d399, #22a7f0)",
    color: "#34d399",
  },
  {
    name: "Neha Bhalla",
    designation: "Research & Advisory Head",
    linkedin: "https://www.linkedin.com/in/neha-bhalla-3b574080/",
    email: "mailto:neha.bhalla@zeta-v.com",
    image: nehaImg,
    gradient: "linear-gradient(135deg, #f59e0b, #f472b6)",
    color: "#f59e0b",
  },
];

// ---------- Animation Variants ----------
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ---------- Leadership Component (inline) ----------
function Leadership() {
  return (
    <section className="leadership-section-premium">
      {/* Background Decorations */}
      <div className="leadership-bg-decor">
        <div className="leadership-bg-blob lblob-1" />
        <div className="leadership-bg-blob lblob-2" />
        <div className="leadership-bg-blob lblob-3" />
      </div>
      <div className="leadership-grid-overlay" />

      {/* Heading */}
      <div className="leadership-heading-premium">
        <motion.div
          className="leadership-label-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="leadership-label-line" />
          <span className="leadership-label-text">Our Leadership Team</span>
          <span className="leadership-label-line" />
        </motion.div>

        <motion.h2
          className="leadership-title-premium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Our <span> Leadership </span> Team
          <span className="leadership-title-icon">✦</span>
        </motion.h2>

        <motion.p
          className="leadership-subtitle-premium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Behind every successful transformation is strong leadership. Our team combines business acumen,
          technological expertise, and global perspectives to help organizations achieve their goals.
        </motion.p>
      </div>

      {/* Leadership Grid */}
      <motion.div
        className="leadership-grid-premium"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Founders Section */}
        <motion.div className="leadership-founders-section" variants={itemVariants}>
          <div className="leadership-section-label">
            <HiOutlineSparkles className="section-label-icon" />
            <span>Founders</span>
          </div>
          <div className="founders-grid-premium">
            {founders.map((founder, index) => (
              <motion.div
                className="founder-card-premium"
                key={index}
                variants={itemVariants}
                style={{ "--card-color": founder.color }}
              >
                <div className="founder-card-glow" style={{ background: founder.gradient }} />
                <div className="founder-image-wrapper-premium">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="founder-image-premium"
                  />
                  <div className="founder-image-overlay" style={{ background: founder.gradient }} />
                  <div className="founder-social-premium">
                    <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                <div className="founder-info-premium">
                  <h3>{founder.name}</h3>
                  <h4 style={{ color: founder.color }}>{founder.designation}</h4>
                  <p>{founder.description}</p>
                </div>
                <div className="founder-accent-line" style={{ background: founder.gradient }} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leaders Section */}
        <motion.div className="leadership-leaders-section" variants={itemVariants}>
          <div className="leadership-section-label">
            <HiOutlineUsers className="section-label-icon" />
            <span>Leadership Team</span>
          </div>
          <div className="leaders-grid-premium">
            {leaders.map((leader, index) => (
              <motion.div
                className="leader-card-premium"
                key={index}
                variants={itemVariants}
                style={{ "--card-color": leader.color }}
              >
                <div className="leader-card-glow" style={{ background: leader.gradient }} />
                <div className="leader-image-wrapper-premium">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="leader-image-premium"
                  />
                  <div className="leader-ring" style={{ borderColor: leader.color }} />
                  <div className="leader-social-premium">
                    <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                <h3 className="leader-name-premium">{leader.name}</h3>
                <h4 className="leader-designation-premium" style={{ color: leader.color }}>
                  {leader.designation}
                </h4>
                <div className="leader-accent-dot" style={{ background: leader.gradient }} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Edge */}
      <div className="leadership-bottom-edge" />
    </section>
  );
}

// ---------- Small Hero Component (normal / minimal) ----------
function SmallHero() {
  return (
    <section className="small-hero-section">
      <div className="small-hero-content">
        <h1 className="small-hero-title">Our Leadership</h1>
        <p className="small-hero-subtitle">
          Meet the visionaries driving innovation and growth at Zeta-V.
        </p>
      </div>
    </section>
  );
}

// ---------- The Full Page ----------
export default function LeadershipPage() {
  return (
    <>
      <Navbar />
      {/* <SmallHero /> */}
      <Leadership />
      <Footer />
    </>
  );
}