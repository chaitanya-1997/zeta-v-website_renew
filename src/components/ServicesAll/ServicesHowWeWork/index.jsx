// src/components/ServicesAll/ServicesHowWeWork/Index.jsx
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaLaptopCode, FaRocket, FaHeadset, FaClock } from 'react-icons/fa'
import { HiOutlineLightBulb } from 'react-icons/hi2'
import { FiArrowRight } from 'react-icons/fi'
import './ServicesHowWeWork.css'

const iconMap = {
  FaLaptopCode: FaLaptopCode,
  HiOutlineLightBulb: HiOutlineLightBulb,
  FaRocket: FaRocket,
  FaHeadset: FaHeadset,
}

// Embedded how we work steps data
const howWeWorkStepsData = [
  {
    num: "01",
    icon: "FaLaptopCode",
    title: "Discovery",
    body: "We begin by understanding your business landscape, technology environment, and strategic objectives through deep-dive workshops and stakeholder interviews.",
  },
  {
    num: "02",
    icon: "HiOutlineLightBulb",
    title: "Design",
    body: "Our architects craft a tailored solution blueprint — covering technology stack, integration points, security posture, and a phased delivery roadmap.",
  },
  {
    num: "03",
    icon: "FaRocket",
    title: "Deploy",
    body: "We execute with agile precision — iterative sprints, continuous testing, and seamless deployment into your production environment.",
  },
  {
    num: "04",
    icon: "FaHeadset",
    title: "Support",
    body: "Post-launch, we provide ongoing monitoring, optimization, and managed support to ensure peak performance and continuous improvement.",
  },
];

function getStepDuration(stepIndex) {
  const durations = ["1-2 weeks", "2-3 weeks", "3-4 weeks", "Ongoing"];
  return durations[stepIndex] || "2-3 weeks";
}

export default function ServicesHowWeWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(null);

  const getIcon = (iconName) => {
    return iconMap[iconName] || FaLaptopCode;
  }

  return (
    <section className="svc-how" ref={ref}>
      <div className="svc-how__inner">
        <motion.div
          className="svc-how__head"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Our Process</span>
          <h2 className="section-title">
            How We <span className="svc-grad-text">Work</span>
          </h2>
          <p className="section-subtitle">
            A streamlined 4-step methodology that delivers results
          </p>
        </motion.div>

        <div className="svc-how__timeline">
          {howWeWorkStepsData.map((step, i) => {
            const Icon = getIcon(step.icon);
            return (
              <motion.div
                key={step.num}
                className="svc-how__step"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {i < howWeWorkStepsData.length - 1 && (
                  <div className="svc-how__connector">
                    <motion.div
                      className="svc-how__connector-line"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                    />
                  </div>
                )}

                <div className="svc-how__node">
                  <motion.div
                    className="svc-how__node-ring"
                    animate={{ scale: activeStep === i ? [1, 1.2, 1] : 1 }}
                    transition={{
                      duration: 0.5,
                      repeat: activeStep === i ? Infinity : 0,
                    }}
                  />
                  <div className="svc-how__node-number">{step.num}</div>
                  <div className="svc-how__node-icon"><Icon /></div>
                </div>

                <motion.div
                  className="svc-how__card"
                  animate={{
                    y: activeStep === i ? -4 : 0,
                    borderColor: activeStep === i ? "#7C5CFF" : "rgba(14, 21, 48, 0.08)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="svc-how__title">{step.title}</h3>
                  <p className="svc-how__body">{step.body}</p>
                  <div className="svc-how__meta">
                    <span className="svc-how__duration">
                      <FaClock className="svc-how__duration-icon" />
                      {getStepDuration(i)}
                    </span>
                    <FiArrowRight className="svc-how__arrow" />
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}