// ServicesTechStack.jsx
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaAngular, 
  FaNodeJs, FaPython, FaJava, FaPhp, FaAws, FaDocker, 
  FaDatabase, FaGitAlt, FaGithub, FaCloud, FaServer, FaLinux,
  FaMobileAlt, FaApple                      // <-- added for mobile
} from 'react-icons/fa'
import { 
  SiTypescript, SiTailwindcss, SiGo, SiDjango, SiSpringboot, 
  SiDotnet, SiKubernetes, SiTerraform, SiJenkins, SiGithubactions,
  SiMongodb, SiPostgresql, SiMysql, SiRedis, SiElasticsearch, SiFirebase,
  SiFlutter                               // <-- added for Flutter
} from 'react-icons/si'
import { DiGoogleCloudPlatform } from 'react-icons/di'
import { HiOutlineSparkles } from 'react-icons/hi2'
import './ServicesTechStack.css'

const techStackCategoriesData = [
  {
    category: "Frontend",
    icon: <FaHtml5 />,
    gradient: "linear-gradient(135deg, #22a7f0, #6366f1)",
    color: "#22a7f0",
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
    category: "Mobile",                              // <-- NEW CATEGORY
    icon: <FaMobileAlt />,
    gradient: "linear-gradient(135deg, #f472b6, #ec4899)",
    color: "#f472b6",
    technologies: [
      { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },
      { name: "iOS", icon: <FaApple />, color: "#000000" },
      // Add more mobile techs if needed: React Native, Android, etc.
    ],
  },
  {
    category: "Backend",
    icon: <FaServer />,
    gradient: "linear-gradient(135deg, #34d399, #06b6d4)",
    color: "#34d399",
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
    gradient: "linear-gradient(135deg, #f472b6, #ec4899)",
    color: "#f472b6",
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
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    color: "#f59e0b",
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
    gradient: "linear-gradient(135deg, #a78bfa, #8b5cf6)",
    color: "#a78bfa",
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
    gradient: "linear-gradient(135deg, #22a7f0, #06b6d4)",
    color: "#22a7f0",
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
    <section className="techstack-premium" ref={ref}>
      {/* Background Decorations */}
      <div className="techstack-premium-bg">
        <div className="techstack-premium-blob tblob-1" />
        <div className="techstack-premium-blob tblob-2" />
        <div className="techstack-premium-blob tblob-3" />
      </div>
      <div className="techstack-premium-pattern" />

      <div className="techstack-premium-container">
        {/* Header */}
        <motion.div
          className="techstack-premium-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="techstack-premium-label">
            <span className="label-line" />
            <span className="label-text">Technologies</span>
            <span className="label-line" />
          </div>
          
          <h2 className="techstack-premium-title">
            Our Technology 
            <span> Stack</span>
            <span className="title-icon">✦</span>
          </h2>
          
          <p className="techstack-premium-subtitle">
            Modern tools and frameworks we use to build exceptional solutions
          </p>
        </motion.div>

        {/* Filters */}
        <div className="techstack-premium-filters">
          {techStackCategoriesData.map((category, idx) => (
            <motion.button
              key={category.category}
              className={`techstack-premium-filter ${activeCategory === idx ? "active" : ""}`}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.04, duration: 0.3 }}
              onClick={() => setActiveCategory(idx)}
              style={{
                borderColor: activeCategory === idx ? category.color : 'rgba(15, 23, 42, 0.06)',
                background: activeCategory === idx ? category.gradient : 'rgba(255, 255, 255, 0.8)',
              }}
            >
              <span className="techstack-premium-filter-icon" style={{ color: activeCategory === idx ? '#ffffff' : category.color }}>
                {category.icon}
              </span>
              <span className="techstack-premium-filter-name" style={{ color: activeCategory === idx ? '#ffffff' : 'rgba(15, 23, 42, 0.5)' }}>
                {category.category}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="techstack-premium-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {techStackCategoriesData[activeCategory].technologies.map((tech, idx) => (
              <motion.div
                key={tech.name}
                className="techstack-premium-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.03, duration: 0.2 }}
                whileHover={{ y: -5 }}
                style={{ '--tech-color': tech.color }}
              >
                <div className="techstack-premium-card-icon" style={{ color: tech.color }}>
                  {tech.icon}
                </div>
                <h4 className="techstack-premium-card-name">{tech.name}</h4>
                <span className="techstack-premium-card-badge" style={{ 
                  background: `linear-gradient(135deg, ${tech.color}10, ${tech.color}20)`,
                  color: tech.color 
                }}>
                  Expert
                </span>
                <div className="techstack-premium-card-line" style={{ background: tech.color }} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats */}
        <motion.div
          className="techstack-premium-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <div className="techstack-premium-stat">
            <span className="techstack-premium-stat-value">50+</span>
            <span className="techstack-premium-stat-label">Technologies</span>
          </div>
          <div className="techstack-premium-stat">
            <span className="techstack-premium-stat-value">7</span>  {/* updated from 6 */}
            <span className="techstack-premium-stat-label">Categories</span>
          </div>
          <div className="techstack-premium-stat">
            <span className="techstack-premium-stat-value">5+</span>
            <span className="techstack-premium-stat-label">Years Avg Exp</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Edge */}
      <div className="techstack-premium-bottom" />
    </section>
  )
}