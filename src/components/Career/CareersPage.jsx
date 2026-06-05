import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import {
  FaRocket, FaGraduationCap, FaBriefcase, FaMapMarkerAlt,
  FaClock, FaDollarSign, FaRegSave, FaTimes, FaCheckCircle,
  FaUpload, FaLinkedin, FaGithub, FaGlobe, FaPhone,
  FaEnvelope, FaUser, FaBuilding, FaChartLine, FaHeartbeat,
  FaLightbulb, FaUsers, FaLaptopCode, FaCloudUploadAlt,
  FaShieldAlt, FaLeaf, FaSmile, FaTrophy, FaAward,
  FaRegHeart, FaBookOpen, FaCalendarAlt, FaLanguage,
  FaRegFileAlt, FaRegCheckCircle, FaArrowRight, FaStar,
  FaCrown, FaGem, FaHandshake, FaMedal, FaUserTie,
  FaCoffee, FaHeadset
} from 'react-icons/fa'
import { HiOutlineLocationMarker, HiOutlineOfficeBuilding, HiOutlineCash } from 'react-icons/hi'
import { FiArrowUpRight, FiDownload } from 'react-icons/fi'

import './CareersPage.css'
import FooterSection from '../../components/Footer'
// Background Images
const heroBgImage = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920'
const cultureBgImage = 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920'
const ctaBgImage = 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1920'

/* ─── Data ─────────────────────────────────────────────── */

const stats = [
  { value: '500+', label: 'Projects Delivered', icon: <FaRocket />, color: '#00D4FF' },
  { value: '200+', label: 'Tech Experts', icon: <FaUsers />, color: '#7C5CFF' },
  { value: '20+', label: 'Technologies', icon: <FaLaptopCode />, color: '#FF4FB7' },
  { value: 'Global', label: 'Opportunities', icon: <FaGlobe />, color: '#43E97B' },
]

const reasons = [
  { icon: <FaGraduationCap />, title: 'Learning & Growth', desc: 'Continuous learning with paid certifications and workshops', color: '#00D4FF' },
  { icon: <FaLaptopCode />, title: 'Hybrid Work', desc: 'Flexible remote and office options', color: '#7C5CFF' },
  { icon: <FaDollarSign />, title: 'Competitive Salary', desc: 'Industry-leading compensation with regular reviews', color: '#FF4FB7' },
  { icon: <FaHeartbeat />, title: 'Health Benefits', desc: 'Comprehensive insurance for you and family', color: '#43E97B' },
  { icon: <FaChartLine />, title: 'Career Acceleration', desc: 'Fast-track promotions and leadership programs', color: '#F59E0B' },
  { icon: <FaCloudUploadAlt />, title: 'AI & Cloud Projects', desc: 'Work on cutting-edge technologies', color: '#06B6D4' },
  { icon: <FaSmile />, title: 'Flexible Culture', desc: 'Open culture with work-life balance', color: '#EC4899' },
  { icon: <FaGlobe />, title: 'Global Exposure', desc: 'International projects and collaboration', color: '#8B5CF6' },
]

const testimonials = [
  {
    text: "Working at Zeta-V has transformed my career. The learning opportunities and cutting-edge projects keep me motivated every day.",
    author: "Chaitanya Raut",
    role: "Senior React Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    text: "The culture here is amazing! Everyone is supportive, and the hybrid work model gives me the perfect work-life balance.",
    author: "Aniket Darje",
    role: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    text: "Zeta-V truly cares about employee growth. The mentorship programs and skill development initiatives are top-notch.",
    author: "Rashmi Devkar",
    role: "AI/ML Engineer",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
]

const jobs = [
  {
    id: 1,
    title: 'React Developer',
    department: 'Engineering',
    experience: '2-4 years',
    location: 'Remote / India',
    type: 'Full-time',
    salary: '₹8L - ₹15L',
    skills: ['React', 'JavaScript', 'Redux', 'Tailwind CSS', 'TypeScript'],
    description: 'We are looking for a skilled React Developer to join our frontend team. You will be responsible for building modern web applications with exceptional user experiences.'
  },
  {
    id: 2,
    title: 'Node.js Developer',
    department: 'Backend',
    experience: '3-5 years',
    location: 'Bangalore',
    type: 'Full-time',
    salary: '₹10L - ₹18L',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'],
    description: 'Seeking a Node.js expert to build scalable backend services and APIs for our enterprise clients.'
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    experience: '4-6 years',
    location: 'Remote',
    type: 'Full-time',
    salary: '₹12L - ₹22L',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
    description: 'Looking for a DevOps professional to manage our cloud infrastructure and CI/CD pipelines.'
  },
  {
    id: 4,
    title: 'UI/UX Designer',
    department: 'Design',
    experience: '2-4 years',
    location: 'Hyderabad',
    type: 'Full-time',
    salary: '₹6L - ₹12L',
    skills: ['Figma', 'Adobe XD', 'UI Design', 'Prototyping', 'User Research'],
    description: 'Join our design team to create beautiful and intuitive user interfaces for web and mobile apps.'
  },
  {
    id: 5,
    title: 'Cloud Engineer',
    department: 'Infrastructure',
    experience: '3-5 years',
    location: 'Mumbai',
    type: 'Full-time',
    salary: '₹10L - ₹20L',
    skills: ['AWS', 'Azure', 'GCP', 'Terraform', 'CloudFormation'],
    description: 'We need a cloud expert to design and implement cloud solutions for our enterprise clients.'
  },
  {
    id: 6,
    title: 'Business Analyst',
    department: 'Strategy',
    experience: '2-4 years',
    location: 'Remote',
    type: 'Full-time',
    salary: '₹7L - ₹14L',
    skills: ['Agile', 'JIRA', 'SQL', 'Data Analysis', 'BRD/FRD'],
    description: 'Looking for a Business Analyst to bridge the gap between clients and technical teams.'
  },
]

/* ─── Page Component ───────────────────────────────────── */

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null)
  const [showApplicationModal, setShowApplicationModal] = useState(false)
  const [applicationSubmitted, setApplicationSubmitted] = useState(false)

  const handleApply = (job) => {
    setSelectedJob(job)
    setShowApplicationModal(true)
    setApplicationSubmitted(false)
  }

  const handleSubmitApplication = () => {
    setShowApplicationModal(false)
    setApplicationSubmitted(true)
    setTimeout(() => {
      setApplicationSubmitted(false)
    }, 5000)
  }

  return (
    <>
    <main className="careers-page">
      <HeroSection />
  
      <WhyJoinSection />
      <CultureSection testimonials={testimonials} />
      <OpenPositionsSection jobs={jobs} onApply={handleApply} />
      
      <AnimatePresence>
        {showApplicationModal && (
          <ApplicationModal 
            job={selectedJob}
            onClose={() => setShowApplicationModal(false)}
            onSubmit={handleSubmitApplication}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {applicationSubmitted && (
          <SuccessScreen onClose={() => setApplicationSubmitted(false)} />
        )}
      </AnimatePresence>

      <FinalCTASection />
    </main>
    <FooterSection/>
    </>
  )
}

/* ─── 1. Hero Section with Background Image ──────────────────────────────────── */

function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section ref={ref} className="careers-hero">
      <motion.div 
        className="careers-hero__bg-image"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.1, 1] }}
        style={{ backgroundImage: `url(${heroBgImage})` }}
      />
      <div className="careers-hero__overlay" />
      <div className="careers-hero__mesh" />
      <div className="careers-hero__grid" />
      <motion.div className="careers-hero__orb careers-hero__orb--1" animate={{ x: [0, 40, 0], y: [0, -20, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="careers-hero__orb careers-hero__orb--2" animate={{ x: [0, -30, 0], y: [0, 25, 0] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} />

      <div className="careers-hero__inner" style={{ y }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="careers-hero__badge">
            <FaRocket />
            <span>We're Hiring!</span>
          </div>
          
          <h1 className="careers-hero__title">
            Build Your Future With <span className="grad-text">Zeta-V</span>
          </h1>
          
          <p className="careers-hero__subtitle">
            Join a team of innovators working on cutting-edge AI, cloud, and digital transformation projects.
            Accelerate your career growth with Zeta-V.
          </p>
          
          <div className="careers-hero__actions">
            <a href="#open-positions" className="btn-primary">
              View Open Positions
              <FiArrowUpRight />
            </a>
            <button className="btn-outline">
              Submit Resume
              <FiDownload />
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="careers-hero__scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span>Scroll to explore</span>
        <div className="careers-hero__scroll-dot" />
      </motion.div>
    </section>
  )
}

/* ─── 2. Stats Section ─────────────────────────────────── */

function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="careers-stats" ref={ref}>
      <div className="careers-stats__inner">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            className="careers-stats__card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="careers-stats__icon" style={{ color: stat.color }}>{stat.icon}</div>
            <div className="careers-stats__value">{stat.value}</div>
            <div className="careers-stats__label">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ─── 3. Why Join Section ───────────────────────────────── */

function WhyJoinSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="careers-why" ref={ref}>
      <div className="careers-why__bg">
        <div className="careers-why__bg-pattern" />
      </div>
      <div className="careers-why__inner">
        <motion.div
          className="careers-why__head"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Why Join Us</span>
          <h2 className="section-title">
            Why <span className="grad-text">Zeta-V</span>?
          </h2>
          <p className="section-subtitle">
            We offer an environment where you can grow, innovate, and thrive.
          </p>
        </motion.div>

        <div className="careers-why__grid">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              className="careers-why__card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <div className="careers-why__card-icon" style={{ color: reason.color }}>{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
              <div className="careers-why__card-glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── 4. Culture Section with Background Image ───────────────────────────────── */

function CultureSection({ testimonials }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const culturePoints = [
    { icon: <FaUsers />, title: 'Team Collaboration', desc: 'Work with brilliant minds in a supportive environment' },
    { icon: <FaLightbulb />, title: 'Innovation Culture', desc: 'Ideas are valued, creativity is encouraged' },
    { icon: <FaBookOpen />, title: 'Learning Environment', desc: 'Continuous learning with paid certifications' },
    { icon: <FaGlobe />, title: 'Diversity & Inclusion', desc: 'Celebrating differences, fostering belonging' },
  ]

  return (
    <section className="careers-culture" ref={ref}>
      <motion.div 
        className="careers-culture__bg-image"
        initial={{ scale: 1.1 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1 }}
        style={{ backgroundImage: `url(${cultureBgImage})` }}
      />
      <div className="careers-culture__overlay" />
      
      <div className="careers-culture__inner">
        <motion.div
          className="careers-culture__head"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label section-label--light">Our Culture</span>
          <h2 className="section-title section-title--light">
            <span className="grad-text">Life at Zeta-V</span>
          </h2>
        </motion.div>

        <div className="careers-culture__grid">
          {culturePoints.map((point, idx) => (
            <motion.div
              key={point.title}
              className="careers-culture__card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="careers-culture__card-icon">{point.icon}</div>
              <h3>{point.title}</h3>
              <p>{point.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="careers-testimonials">
          <div className="careers-testimonials__header">
            <h3>What Our <span className="grad-text">Employees Say</span></h3>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              className="careers-testimonial"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <div className="careers-testimonial__avatar">
                <img src={testimonials[activeTestimonial].image} alt={testimonials[activeTestimonial].author} />
                <div className="careers-testimonial__quote-icon">“</div>
              </div>
              <div className="careers-testimonial__content">
                <p>{testimonials[activeTestimonial].text}</p>
                <div className="careers-testimonial__author">
                  <strong>{testimonials[activeTestimonial].author}</strong>
                  <span>{testimonials[activeTestimonial].role}</span>
                </div>
                <div className="careers-testimonial__stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="careers-testimonial__star" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="careers-testimonials__dots">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`careers-testimonials__dot ${activeTestimonial === idx ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── 5. Open Positions Section ────────────────────────── */

function OpenPositionsSection({ jobs, onApply }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedJob, setExpandedJob] = useState(null)
  const [savedJobs, setSavedJobs] = useState([])
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const departments = ['all', ...new Set(jobs.map(job => job.department))]
  
  const filteredJobs = jobs.filter(job => {
    const matchesDept = filter === 'all' || job.department === filter
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesDept && matchesSearch
  })

  const toggleSaveJob = (jobId) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    )
  }

  return (
    <section id="open-positions" className="careers-jobs" ref={ref}>
      <div className="careers-jobs__inner">
        <motion.div
          className="careers-jobs__head"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Open Positions</span>
          <h2 className="section-title">
            Join Our <span className="grad-text">Team</span>
          </h2>
          <p className="section-subtitle">
            Find your perfect role and start your journey with us.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="careers-jobs__filters">
          <div className="careers-jobs__search">
            <input 
              type="text" 
              placeholder="Search by title or skill..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="careers-jobs__dept-filters">
            {departments.map(dept => (
              <button
                key={dept}
                className={`careers-jobs__filter-btn ${filter === dept ? 'active' : ''}`}
                onClick={() => setFilter(dept)}
              >
                {dept === 'all' ? 'All' : dept}
              </button>
            ))}
          </div>
        </div>

        <div className="careers-jobs__grid">
          {filteredJobs.map((job, idx) => (
            <motion.div
              key={job.id}
              className={`careers-job-card ${expandedJob === job.id ? 'expanded' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              whileHover={{ y: -3 }}
            >
              <div className="careers-job-card__gradient" />
              
              <div className="careers-job-card__header">
                <div>
                  <h3>{job.title}</h3>
                  <span className="careers-job-card__dept">{job.department}</span>
                </div>
                <button 
                  className={`careers-job-card__save ${savedJobs.includes(job.id) ? 'saved' : ''}`}
                  onClick={() => toggleSaveJob(job.id)}
                >
                  <FaRegHeart />
                </button>
              </div>

              <div className="careers-job-card__details">
                <div className="careers-job-card__detail">
                  <FaBriefcase /> <span>{job.experience}</span>
                </div>
                <div className="careers-job-card__detail">
                  <HiOutlineLocationMarker /> <span>{job.location}</span>
                </div>
                <div className="careers-job-card__detail">
                  <FaClock /> <span>{job.type}</span>
                </div>
                <div className="careers-job-card__detail">
                  <HiOutlineCash /> <span>{job.salary}</span>
                </div>
              </div>

              <div className="careers-job-card__skills">
                {job.skills.slice(0, 4).map((skill, i) => (
                  <span key={i} className="careers-job-card__skill">{skill}</span>
                ))}
                {job.skills.length > 4 && (
                  <span className="careers-job-card__skill">+{job.skills.length - 4}</span>
                )}
              </div>

              <AnimatePresence>
                {expandedJob === job.id && (
                  <motion.div
                    className="careers-job-card__expand"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{job.description}</p>
                    <div className="careers-job-card__full-skills">
                      <strong>Required Skills:</strong>
                      <div className="careers-job-card__skill-list">
                        {job.skills.map((skill, i) => (
                          <span key={i}>{skill}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="careers-job-card__actions">
                <button 
                  className="careers-job-card__expand-btn"
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                >
                  {expandedJob === job.id ? 'Show Less' : 'View Details'}
                </button>
                <button 
                  className="careers-job-card__apply"
                  onClick={() => onApply(job)}
                >
                  Apply Now
                  <FaArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="careers-jobs__empty">
            <p>No jobs found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}

/* ─── 6. Application Modal ─────────────────────────────── */

/* ─── 6. Application Modal - Complete Working Form ─────────────────────────────── */

function ApplicationModal({ job, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    fullName: '', 
    email: '', 
    phone: '', 
    currentLocation: '',
    linkedin: '', 
    portfolio: '', 
    github: '',
    totalExperience: '', 
    relevantExperience: '', 
    currentCompany: '',
    currentDesignation: '', 
    currentCTC: '', 
    expectedCTC: '', 
    noticePeriod: '',
    highestQualification: '', 
    college: '', 
    graduationYear: '', 
    certifications: '',
    whyJoin: '', 
    coverLetter: '', 
    availability: '', 
    willingToRelocate: 'false',
    agreePrivacy: false,
  })

  const [resumeFile, setResumeFile] = useState(null)
  const [photoFile, setPhotoFile] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    if (name === 'resume') {
      setResumeFile(files[0])
    } else if (name === 'photo') {
      setPhotoFile(files[0])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation
    if (!resumeFile) {
      alert('Please upload your resume')
      return
    }
    
    if (!formData.agreePrivacy) {
      alert('Please agree to the privacy policy')
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      onSubmit()
    }, 1500)
  }

  return (
    <motion.div
      className="careers-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="careers-modal"
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ type: 'spring', damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="careers-modal__header">
          <div>
            <h2>Apply for {job?.title}</h2>
            <p>{job?.department} • {job?.location}</p>
          </div>
          <button className="careers-modal__close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="careers-modal__form">
          {/* Basic Information Section */}
          <div className="careers-form-section">
            <h3><FaUser /> Basic Information</h3>
            <div className="careers-form-grid">
              <div className="careers-form-field">
                <label>Full Name *</label>
                <input 
                  type="text" 
                  name="fullName" 
                  value={formData.fullName}
                  onChange={handleChange} 
                  required 
                  placeholder="Enter your full name"
                />
              </div>
              <div className="careers-form-field">
                <label>Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange} 
                  required 
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="careers-form-field">
                <label>Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange} 
                  required 
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>
              <div className="careers-form-field">
                <label>Current Location *</label>
                <input 
                  type="text" 
                  name="currentLocation" 
                  value={formData.currentLocation}
                  onChange={handleChange} 
                  required 
                  placeholder="City, Country"
                />
              </div>
              <div className="careers-form-field">
                <label>LinkedIn URL</label>
                <input 
                  type="url" 
                  name="linkedin" 
                  value={formData.linkedin}
                  onChange={handleChange} 
                  placeholder="https://linkedin.com/in/username"
                />
              </div>
              <div className="careers-form-field">
                <label>Portfolio URL</label>
                <input 
                  type="url" 
                  name="portfolio" 
                  value={formData.portfolio}
                  onChange={handleChange} 
                  placeholder="https://yourportfolio.com"
                />
              </div>
              <div className="careers-form-field">
                <label>GitHub URL</label>
                <input 
                  type="url" 
                  name="github" 
                  value={formData.github}
                  onChange={handleChange} 
                  placeholder="https://github.com/username"
                />
              </div>
            </div>
          </div>

          {/* Professional Details Section */}
          <div className="careers-form-section">
            <h3><FaBriefcase /> Professional Details</h3>
            <div className="careers-form-grid">
              <div className="careers-form-field">
                <label>Total Experience (years) *</label>
                <input 
                  type="number" 
                  name="totalExperience" 
                  value={formData.totalExperience}
                  onChange={handleChange} 
                  required 
                  placeholder="e.g., 3"
                  min="0"
                  step="0.5"
                />
              </div>
              <div className="careers-form-field">
                <label>Relevant Experience (years) *</label>
                <input 
                  type="number" 
                  name="relevantExperience" 
                  value={formData.relevantExperience}
                  onChange={handleChange} 
                  required 
                  placeholder="e.g., 2"
                  min="0"
                  step="0.5"
                />
              </div>
              <div className="careers-form-field">
                <label>Current Company</label>
                <input 
                  type="text" 
                  name="currentCompany" 
                  value={formData.currentCompany}
                  onChange={handleChange} 
                  placeholder="Current employer name"
                />
              </div>
              <div className="careers-form-field">
                <label>Current Designation</label>
                <input 
                  type="text" 
                  name="currentDesignation" 
                  value={formData.currentDesignation}
                  onChange={handleChange} 
                  placeholder="Your current role"
                />
              </div>
              <div className="careers-form-field">
                <label>Current CTC (₹) *</label>
                <input 
                  type="text" 
                  name="currentCTC" 
                  value={formData.currentCTC}
                  onChange={handleChange} 
                  required 
                  placeholder="e.g., 12,00,000"
                />
              </div>
              <div className="careers-form-field">
                <label>Expected CTC (₹) *</label>
                <input 
                  type="text" 
                  name="expectedCTC" 
                  value={formData.expectedCTC}
                  onChange={handleChange} 
                  required 
                  placeholder="e.g., 15,00,000"
                />
              </div>
              <div className="careers-form-field">
                <label>Notice Period (days) *</label>
                <input 
                  type="text" 
                  name="noticePeriod" 
                  value={formData.noticePeriod}
                  onChange={handleChange} 
                  required 
                  placeholder="e.g., 30"
                />
              </div>
            </div>
          </div>

          {/* Education Details Section */}
          <div className="careers-form-section">
            <h3><FaGraduationCap /> Education Details</h3>
            <div className="careers-form-grid">
              <div className="careers-form-field">
                <label>Highest Qualification *</label>
                <input 
                  type="text" 
                  name="highestQualification" 
                  value={formData.highestQualification}
                  onChange={handleChange} 
                  required 
                  placeholder="e.g., B.Tech, MCA, MBA"
                />
              </div>
              <div className="careers-form-field">
                <label>College/University *</label>
                <input 
                  type="text" 
                  name="college" 
                  value={formData.college}
                  onChange={handleChange} 
                  required 
                  placeholder="Name of institution"
                />
              </div>
              <div className="careers-form-field">
                <label>Graduation Year *</label>
                <input 
                  type="text" 
                  name="graduationYear" 
                  value={formData.graduationYear}
                  onChange={handleChange} 
                  required 
                  placeholder="e.g., 2020"
                />
              </div>
              <div className="careers-form-field">
                <label>Certifications</label>
                <input 
                  type="text" 
                  name="certifications" 
                  value={formData.certifications}
                  onChange={handleChange} 
                  placeholder="AWS, Azure, PMP, etc."
                />
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="careers-form-section">
            <h3><FaRegFileAlt /> Additional Information</h3>
            <div className="careers-form-grid">
              <div className="careers-form-field careers-form-field--full">
                <label>Why do you want to join Zeta-V? *</label>
                <textarea 
                  name="whyJoin" 
                  rows={3} 
                  value={formData.whyJoin}
                  onChange={handleChange} 
                  required 
                  placeholder="Tell us why you're excited about this opportunity..."
                />
              </div>
              <div className="careers-form-field careers-form-field--full">
                <label>Cover Letter</label>
                <textarea 
                  name="coverLetter" 
                  rows={3} 
                  value={formData.coverLetter}
                  onChange={handleChange} 
                  placeholder="Optional: Add a cover letter..."
                />
              </div>
              <div className="careers-form-field">
                <label>Availability to join *</label>
                <select 
                  name="availability" 
                  value={formData.availability}
                  onChange={handleChange} 
                  required
                >
                  <option value="">Select</option>
                  <option value="immediate">Immediate</option>
                  <option value="15-days">Within 15 days</option>
                  <option value="30-days">Within 30 days</option>
                  <option value="60-days">Within 60 days</option>
                  <option value="90-days">Within 90 days</option>
                </select>
              </div>
              <div className="careers-form-field">
                <label>Willing to relocate?</label>
                <select 
                  name="willingToRelocate" 
                  value={formData.willingToRelocate}
                  onChange={handleChange}
                >
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </div>
            </div>
          </div>

          {/* Documents Section */}
          <div className="careers-form-section">
            <h3><FaUpload /> Documents</h3>
            <div className="careers-form-grid">
              <div className="careers-form-field">
                <label>Resume (PDF/DOC) *</label>
                <input 
                  type="file" 
                  name="resume" 
                  accept=".pdf,.doc,.docx" 
                  onChange={handleFileChange}
                  required 
                />
                <small>Max file size: 5MB</small>
              </div>
              <div className="careers-form-field">
                <label>Profile Photo</label>
                <input 
                  type="file" 
                  name="photo" 
                  accept="image/*" 
                  onChange={handleFileChange}
                />
                <small>Optional. Max file size: 2MB</small>
              </div>
            </div>
          </div>

          {/* Privacy Checkbox */}
          <div className="careers-form-checkbox">
            <label>
              <input 
                type="checkbox" 
                name="agreePrivacy" 
                checked={formData.agreePrivacy}
                onChange={handleChange} 
                required 
              />
              <span>I agree to the <a href="#">privacy policy</a> and <a href="#">terms of use</a> *</span>
            </label>
          </div>

          {/* Form Actions */}
          <div className="careers-form-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button 
              type="button" 
              className="btn-outline"
              onClick={() => {
                // Save draft functionality
                localStorage.setItem('jobApplicationDraft', JSON.stringify(formData))
                alert('Draft saved successfully!')
              }}
            >
              <FaRegSave /> Save Draft
            </button>
            <button 
              type="submit" 
              className="btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>Submitting... <FaArrowRight /></>
              ) : (
                <>Submit Application <FaArrowRight /></>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}

/* ─── 7. Success Screen ────────────────────────────────── */

function SuccessScreen({ onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000)
    return () => clearInterval(timer)
  }, [onClose])

  return (
    <motion.div
      className="careers-success-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="careers-success"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', damping: 20 }}
      >
        <div className="careers-success__icon">
          <FaCheckCircle />
        </div>
        <h2>Application Submitted Successfully!</h2>
        <p>Thank you for applying to Zeta-V. Our HR team will review your application and contact you shortly.</p>
        <button className="btn-primary" onClick={onClose}>Back to Careers</button>
      </motion.div>
    </motion.div>
  )
}

/* ─── 8. Final CTA Section with Background Image ─────────────────────────────── */

function FinalCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="careers-cta" ref={ref}>
      <motion.div 
        className="careers-cta__bg-image"
        initial={{ scale: 1.1 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1.5 }}
        style={{ backgroundImage: `url(${ctaBgImage})` }}
      />
      <div className="careers-cta__overlay" />
      <div className="careers-cta__bg" />
      
      <div className="careers-cta__inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="careers-hero__badge">
            <FaHandshake />
            <span>Join Our Team</span>
          </div>
          <h2 className="careers-cta__title">
            Ready to <span className="grad-text">Build Your Future</span>?
          </h2>
          <p className="careers-cta__subtitle">
            Join Zeta-V and be part of something extraordinary. Let's build the future together.
          </p>
          <div className="careers-cta__actions">
            <a href="#open-positions" className="btn-primary btn-large">
              View All Jobs
              <FaArrowRight />
            </a>
            <button className="btn-outline btn-large">
              Upload Resume
              <FiDownload />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}