import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import sujitImg from "../../../assets/team/sujit.png";
import rangaImg from "../../../assets/team/ranga.png";
import sriniImg from "../../../assets/team/srini.png";
import gaganImg from "../../../assets/team/gagan.png";
import archanaImg from "../../../assets/team/archana.png";
import aashishImg from "../../../assets/team/aashish.png";
import meggieImg from "../../../assets/team/meggie.png";
import nehaImg from "../../../assets/team/neha.png";

import "./Leadership.css";

const founders = [
  {
    name: "Sujit Chatterjee",
    designation: "Founder & CEO",
    description: "Driving global digital transformation and enterprise innovation.",
    image: sujitImg,
    linkedin: "https://www.linkedin.com/in/sujit-chatterjee-1817415/",
    email: "mailto:sujit.chatterjee@zeta-v.com",
  },
  {
    name: "Ranga Vellamore",
    designation: "Founder & CTO",
    description: "Leading cloud, SAP, and next-generation technology solutions.",
    image: rangaImg,
    linkedin: "https://www.linkedin.com/in/ranga-vellamore-702b30/",
    email: "mailto:ranga.vellamore@zeta-v.com",
  },
];

const leaders = [
  {
    name: "Javvaji Srinivas Rao",
    designation: "Chief Operating Officer",
    linkedin: "https://www.linkedin.com/in/srinivasa-rao-javvaji-a5960b5/",
    email: "mailto:js.rao@zeta-v.com",
    image: sriniImg,
  },
  {
    name: "Gagan Sabharwal",
    designation: "Chief Growth Officer",
    linkedin: "https://www.linkedin.com/in/gagan-sabharwal-3050371/",
    email: "mailto:gagan.sabharwal@zeta-v.com",
    image: gaganImg,
  },
  {
    name: "Archana Ambike",
    designation: "Chief People Officer",
    linkedin: "https://www.linkedin.com/in/archana-ambike-9576189/",
    email: "mailto:archana.ambike@zeta-v.com",
    image: archanaImg,
  },
  {
    name: "Aashish Shroff",
    designation: "Head of Operations India",
    linkedin: "https://www.linkedin.com/in/aashish-shroff-378947258/",
    email: "mailto:aashish.shroff@zeta-v.com",
    image: aashishImg,
  },
  {
    name: "Meggie Wang",
    designation: "Head of Operations China",
    linkedin: "https://www.linkedin.com/in/meggie-wang-82b58210b/",
    email: "mailto:meggie.wang@zeta-v.com",
    image: meggieImg,
  },
  {
    name: "Neha Bhalla",
    designation: "Research & Advisory Head",
    linkedin: "https://www.linkedin.com/in/neha-bhalla-3b574080/",
    email: "mailto:neha.bhalla@zeta-v.com",
    image: nehaImg,
  },
];

export default function Leadership() {
  return (
    <section className="leadership-section">
     
      <div className="leadership-heading">
        <span className="section-label">Our leadership team</span>
        <h2 className="section-title">
          Our <span className="grad-text">Leadership</span> Team
        </h2>
        <p className="section-subtitle">
          Behind every successful transformation is strong leadership. Our team combines business acumen, <br />
          technological expertise, and global perspectives to help organizations achieve their goals.
        </p>
      </div>

      {/* Main Layout */}
      <div className="leadership-layout">
        {/* FOUNDERS */}
        <div className="founders-section">
          {founders.map((founder, index) => (
            <div className="founder-card" key={index}>
              <div className="founder-image-wrapper">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="founder-image"
                />
              </div>

              <div className="hover-icons">
                <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
                <a href={founder.email}>
                  <MdEmail />
                </a>
              </div>

              <h3>{founder.name}</h3>
              <h4>{founder.designation}</h4>
              <p>{founder.description}</p>
            </div>
          ))}
        </div>

        {/* TEAM MEMBERS */}
        <div className="leaders-grid">
          {leaders.map((leader, index) => (
            <div className="leader-card" key={index}>
              <div className="leader-image-wrapper">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="leader-image"
                />
                <div className="hover-icons">
                  <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
                  <a href={leader.email}>
                    <MdEmail />
                  </a>
                </div>
              </div>

              <h3>{leader.name}</h3>
              <h4>{leader.designation}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}