// src/components/ServicesAll/ServicesTechStack/Index.jsx
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaAngular, 
  FaNodeJs, FaPython, FaJava, FaPhp, FaAws, FaDocker, 
  FaDatabase, FaGitAlt, FaGithub, FaCloud, FaServer, FaLinux
} from 'react-icons/fa'
import { 
  SiTypescript, SiTailwindcss, SiGo, SiDjango, SiSpringboot, 
  SiDotnet, SiKubernetes, SiTerraform, SiJenkins, SiGithubactions,
  SiMongodb, SiPostgresql, SiMysql, SiRedis, SiElasticsearch, SiFirebase
} from 'react-icons/si'
import { 
  DiGoogleCloudPlatform
} from 'react-icons/di'
import './ServicesTechStack.css'

// Embedded tech stack categories data with proper icons
const techStackCategoriesData = [
  {
    category: "Frontend",
    icon: <FaHtml5 />,
    technologies: [
      { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Vue.js", icon: <FaVuejs />, color: "#4FC08D" },
      { name: "Angular", icon: <FaAngular />, color: "#DD0031" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    ],
  },
  {
    category: "Backend",
    icon: <FaServer />,
    technologies: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
      { name: "Python", icon: <FaPython />, color: "#3776AB" },
      { name: "Java", icon: <FaJava />, color: "#007396" },
      { name: "Go", icon: <SiGo />, color: "#00ADD8" },
      { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
      { name: "Django", icon: <SiDjango />, color: "#092E20" },
      { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
      { name: ".NET", icon: <SiDotnet />, color: "#512BD4" },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: <FaCloud />,
    technologies: [
      { name: "AWS", icon: <FaAws />, color: "#FF9900" },
      { name: "Azure", icon: <FaCloud />, color: "#0089D6" },
      { name: "Google Cloud", icon: <DiGoogleCloudPlatform />, color: "#4285F4" },
      { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
      { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5" },
      { name: "Terraform", icon: <SiTerraform />, color: "#7B42BC" },
      { name: "Jenkins", icon: <SiJenkins />, color: "#D33833" },
      { name: "GitHub Actions", icon: <SiGithubactions />, color: "#2088FF" },
    ],
  },
  {
    category: "Databases",
    icon: <FaDatabase />,
    technologies: [
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
      { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
      { name: "Elasticsearch", icon: <SiElasticsearch />, color: "#005571" },
      { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
    ],
  },
  {
    category: "Version Control",
    icon: <FaGitAlt />,
    technologies: [
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#181717" },
      { name: "GitLab", icon: <FaGitAlt />, color: "#FC6D26" },
      { name: "Bitbucket", icon: <FaGitAlt />, color: "#0052CC" },
    ],
  },
  {
    category: "OS & Tools",
    icon: <FaLinux />,
    technologies: [
      { name: "Linux", icon: <FaLinux />, color: "#FCC624" },
      { name: "Ubuntu", icon: <FaLinux />, color: "#E95420" },
      { name: "Windows", icon: <FaServer />, color: "#0078D4" },
      { name: "macOS", icon: <FaServer />, color: "#000000" },
    ],
  },
];

export default function ServicesTechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="svc-tech" ref={ref}>
      <div className="svc-tech__inner">
        <motion.div
          className="svc-tech__head"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Technologies</span>
          <h2 className="section-title">
            Our Technology <span className="svc-grad-text">Stack</span>
          </h2>
          <p className="section-subtitle">
            Modern tools and frameworks we use to build exceptional solutions
          </p>
        </motion.div>

        <div className="svc-tech__filters">
          {techStackCategoriesData.map((category, idx) => (
            <motion.button
              key={category.category}
              className={`svc-tech__filter ${activeCategory === idx ? "active" : ""}`}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.03, duration: 0.3 }}
              onClick={() => setActiveCategory(idx)}
            >
              <span className="svc-tech__filter-icon">{category.icon}</span>
              <span className="svc-tech__filter-name">{category.category}</span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="svc-tech__grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {techStackCategoriesData[activeCategory].technologies.map((tech, idx) => (
              <motion.div
                key={tech.name}
                className="svc-tech__card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.03, duration: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="svc-tech__card-icon" style={{ color: tech.color }}>
                  {tech.icon}
                </div>
                <h4 className="svc-tech__card-name">{tech.name}</h4>
                <span className="svc-tech__card-badge">Expert</span>
                <div className="svc-tech__card-border" style={{ background: tech.color }} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="svc-tech__stats"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <div className="svc-tech__stat">
            <span className="svc-tech__stat-value">50+</span>
            <span className="svc-tech__stat-label">Technologies</span>
          </div>
          <div className="svc-tech__stat">
            <span className="svc-tech__stat-value">6</span>
            <span className="svc-tech__stat-label">Categories</span>
          </div>
          <div className="svc-tech__stat">
            <span className="svc-tech__stat-value">5+</span>
            <span className="svc-tech__stat-label">Years Avg Exp</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}