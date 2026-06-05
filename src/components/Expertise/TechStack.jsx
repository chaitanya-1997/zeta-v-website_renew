import './TechStack.css'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaAws, FaDocker, FaFigma, FaPython } from 'react-icons/fa'
import { SiMongodb, SiMysql } from 'react-icons/si'

const techData = [
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
  { name: 'Python', icon: <FaPython />, color: '#3776AB' },
  { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
  { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
  { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.8, rotateX: 15 },
  show: {
    opacity: 1, y: 0, scale: 1, rotateX: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="tech-stack-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Tech Stack</h2>
        <p>Modern technologies powering scalable digital products.</p>
      </motion.div>

      <motion.div 
        className="tech-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {techData.map((tech, index) => (
          <motion.div
            className="tech-card"
            key={index}
            variants={cardVariants}
            whileHover={{ y: -12, scale: 1.05, transition: { duration: 0.3 } }}
          >
            <motion.div 
              className="tech-icon-wrapper"
              whileHover={{ rotateY: 360, transition: { duration: 0.8 } }}
            >
              <motion.div 
                className="tech-icon"
                style={{ color: tech.color }}
                animate={{
                  filter: ['drop-shadow(0 0 2px rgba(0,0,0,0.1))', 'drop-shadow(0 0 8px rgba(0,0,0,0.2))', 'drop-shadow(0 0 2px rgba(0,0,0,0.1))']
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {tech.icon}
              </motion.div>
              <div className="tech-glow" style={{ background: tech.color }}></div>
            </motion.div>
            <h3>{tech.name}</h3>
            <div className="tech-line"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}