// ServicesWhyChoose.jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  HiOutlineSparkles, 
  HiOutlineChartBar,

} from 'react-icons/hi2'
import { 
  FaCloudUploadAlt, 
  FaCodeBranch, 
  FaShieldAlt, 
  FaGlobe 
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
    <section className="whychoose-premium" ref={ref}>
      {/* Background Image */}
      <div className="whychoose-premium-bg">
        <div 
          className="whychoose-premium-bg-image"
          style={{ backgroundImage: `url(https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920)` }}
        />
        <div className="whychoose-premium-overlay">
          <div className="whychoose-premium-gradient" />
        </div>
      </div>

      {/* Animated Orbs */}
      <div className="whychoose-premium-orbs">
        <div className="worb worb-1" />
        <div className="worb worb-2" />
        <div className="worb worb-3" />
      </div>

      <div className="whychoose-premium-container">
        {/* Header */}
        <motion.div
          className="whychoose-premium-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="whychoose-premium-label">
            <span className="label-line" />
            <span className="label-text" style={{color:'white'}}>Why Choose Us</span>
            <span className="label-line" />
          </div>
          
          <h2 className="whychoose-premium-title">
            Why 
            {/* <span className="gradient-text-whychoose">Zeta-V</span> */}
            <span> Zeta-V</span>
            <span className="title-icon">✦</span>
          </h2>
          
          <p className="whychoose-premium-subtitle">
            We combine deep technical expertise with business acumen to deliver transformative results.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          className="whychoose-premium-grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              className="whychoose-premium-benefit"
              initial={{ opacity: 0, x: -15 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + idx * 0.06, duration: 0.4 }}
              whileHover={{ x: 6 }}
            >
              <div className="whychoose-premium-benefit-icon">
                {benefit.icon}
              </div>
              <span className="whychoose-premium-benefit-text">{benefit.title}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Edge */}
      <div className="whychoose-premium-bottom" />
    </section>
  )
}