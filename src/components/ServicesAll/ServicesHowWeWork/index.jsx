// ServicesHowWeWork.jsx
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  FaLaptopCode, 
  FaRocket, 
  FaHeadset, 
  FaClock,
  FaArrowRight,
  FaSearch,
  FaPaintBrush,

  FaHeadset as FaHeadsetIcon
} from 'react-icons/fa'
import { HiOutlineLightBulb, HiOutlineSparkles } from 'react-icons/hi2'
import './ServicesHowWeWork.css'

const howWeWorkStepsData = [
  {
    num: "01",
    icon: FaSearch,
    title: "Discovery",
    body: "We begin by understanding your business landscape, technology environment, and strategic objectives through deep-dive workshops and stakeholder interviews.",
    gradient: "linear-gradient(135deg, #22a7f0, #6366f1)",
    color: "#22a7f0",
    lightBg: "rgba(34, 167, 240, 0.08)",
    duration: "1-2 weeks"
  },
  {
    num: "02",
    icon: FaPaintBrush,
    title: "Design",
    body: "Our architects craft a tailored solution blueprint — covering technology stack, integration points, security posture, and a phased delivery roadmap.",
    gradient: "linear-gradient(135deg, #34d399, #06b6d4)",
    color: "#34d399",
    lightBg: "rgba(52, 211, 153, 0.08)",
    duration: "2-3 weeks"
  },
  {
    num: "03",
    icon: FaRocket,
    title: "Deploy",
    body: "We execute with agile precision — iterative sprints, continuous testing, and seamless deployment into your production environment.",
    gradient: "linear-gradient(135deg, #f472b6, #ec4899)",
    color: "#f472b6",
    lightBg: "rgba(244, 114, 182, 0.08)",
    duration: "3-4 weeks"
  },
  {
    num: "04",
    icon: FaHeadsetIcon,
    title: "Support",
    body: "Post-launch, we provide ongoing monitoring, optimization, and managed support to ensure peak performance and continuous improvement.",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    color: "#f59e0b",
    lightBg: "rgba(245, 158, 11, 0.08)",
    duration: "Ongoing"
  },
];

export default function ServicesHowWeWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section className="howwe-work-premium" ref={ref}>
      {/* Background Decorations */}
      <div className="howwe-work-premium-bg">
        <div className="howwe-work-premium-blob hwblob-1" />
        <div className="howwe-work-premium-blob hwblob-2" />
        <div className="howwe-work-premium-blob hwblob-3" />
        <div className="howwe-work-premium-blob hwblob-4" />
      </div>
      <div className="howwe-work-premium-grid" />

      <div className="howwe-work-premium-container">
        {/* Header */}
        <motion.div
          className="howwe-work-premium-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="howwe-work-premium-label">
            <span className="label-line" />
            <span className="label-text" style={{color:'white'}}>Our Process</span>
            <span className="label-line" />
          </div>
          
          <h2 className="howwe-work-premium-title">
            How We
 {/* <span className="gradient-text-hww">Work</span> */}
  <span>Work</span>
            <span className="title-icon">✦</span>
          </h2>
          
          <p className="howwe-work-premium-subtitle">
            A streamlined 4-step methodology that delivers results
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="howwe-work-premium-timeline">
          {howWeWorkStepsData.map((step, i) => {
            const Icon = step.icon;
            const isActive = activeStep === i;
            
            return (
              <motion.div
                key={step.num}
                className="howwe-work-premium-step"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
                style={{ '--step-color': step.color }}
              >
                {/* Connector */}
                {i < howWeWorkStepsData.length - 1 && (
                  <div className="howwe-work-premium-connector">
                    <motion.div
                      className="howwe-work-premium-connector-line"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ delay: i * 0.12 + 0.3, duration: 0.6 }}
                    />
                    <div className="howwe-work-premium-connector-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                )}

                {/* Node */}
                <div className="howwe-work-premium-node">
                  <motion.div
                    className="howwe-work-premium-node-ring"
                    animate={{ 
                      scale: isActive ? [1, 1.3, 1] : 1,
                      borderColor: isActive ? step.color : 'rgba(255, 255, 255, 0.1)'
                    }}
                    transition={{ duration: 0.6, repeat: isActive ? Infinity : 0 }}
                  />
                  {/* <div className="howwe-work-premium-node-number">{step.num}</div> */}
                  <div className="howwe-work-premium-node-icon" style={{ background: step.gradient }}>
                    <Icon />
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  className={`howwe-work-premium-card ${isActive ? 'active' : ''}`}
                  animate={{
                    y: isActive ? -6 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="howwe-work-premium-card-glow" style={{ background: step.gradient }} />
                  
                  <div className="howwe-work-premium-card-header">
                    {/* <span className="howwe-work-premium-card-step" style={{ color: step.color }}>
                      Step {step.num}
                    </span> */}
                    <h3 className="howwe-work-premium-card-title">{step.title}</h3>
                  </div>
                  
                  <p className="howwe-work-premium-card-body">{step.body}</p>
                  
                  <div className="howwe-work-premium-card-footer">
                    {/* <span className="howwe-work-premium-card-duration">
                      <FaClock />
                      {step.duration}
                    </span> */}
                    {/* <motion.div 
                      className="howwe-work-premium-card-arrow"
                      animate={{ x: isActive ? 4 : 0 }}
                    >
                      <FaArrowRight />
                    </motion.div> */}
                  </div>
                  
                  <div className="howwe-work-premium-card-line" style={{ background: step.gradient }} />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Bottom Edge */}
      <div className="howwe-work-premium-bottom" />
    </section>
  )
}