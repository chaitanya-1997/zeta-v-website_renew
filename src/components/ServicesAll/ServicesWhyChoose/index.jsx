// src/components/ServicesAll/ServicesWhyChoose/Index.jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  HiOutlineSparkles, HiOutlineChartBar 
} from 'react-icons/hi2'
import { 
  FaCloudUploadAlt, FaCodeBranch, FaShieldAlt, FaGlobe 
} from 'react-icons/fa'
import './ServicesWhyChoose.css'

const benefits = [
  { icon: <HiOutlineSparkles />, title: "Generative AI Expertise" },
  { icon: <FaCloudUploadAlt />, title: "Cloud-Native Solutions" },
  { icon: <HiOutlineChartBar />, title: "Data-Driven Insights" },
  { icon: <FaCodeBranch />, title: "Agile Delivery" },
  { icon: <FaShieldAlt />, title: "Enterprise Security" },
  { icon: <FaGlobe />, title: "Industry Expertise" },
];

export default function ServicesWhyChoose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="svc-why" ref={ref}>
      <div className="svc-why__bg" />
      <div className="svc-why__inner">
        <motion.div
          className="svc-why__head"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Why Choose Us</span>
                              <h2 className="hero__h1" style={{ color: '#fff', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '16px' }}>

        <span className="hero__h1a">
            Why <span className="svc-grad-text">Zeta-V</span>?
          </span>
          </h2>
          <p className="section-subtitle">
            We combine deep technical expertise with business acumen to deliver transformative results.
          </p>
        </motion.div>

        <div className="svc-why__benefits">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              className="svc-benefit"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
            >
              <div className="svc-benefit__icon">{benefit.icon}</div>
              <span className="svc-benefit__text">{benefit.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}