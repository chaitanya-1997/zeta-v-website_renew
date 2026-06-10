import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FaBriefcase, FaClock, FaRegHeart, FaArrowRight, FaSpinner } from 'react-icons/fa'
import { HiOutlineLocationMarker, HiOutlineCash } from 'react-icons/hi'
import './OpenPositionsSection.css'

const API_BASE_URL = 'https://zeta-v-invoicemanagement-ddgwdzg2dchdfaf4.centralindia-01.azurewebsites.net'

export default function OpenPositionsSection({ onApply }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedJob, setExpandedJob] = useState(null)
  const [savedJobs, setSavedJobs] = useState([])
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch(`${API_BASE_URL}/api/public/jobs`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result = await response.json()
      
      if (result.success && result.data) {
        const formattedJobs = result.data.map(job => ({
          id: job.id,
          title: job.title,
          department: job.department,
          experience: formatExperience(job.required_experience),
          location: formatLocation(job.location, job.work_mode),
          type: job.job_type,
          salary: formatSalary(job.salary_min, job.salary_max, job.show_salary),
          skills: job.skills || [],
          description: job.description,
          jr_id: job.jr_id,
          requirements: job.requirements || [],
          benefits: job.benefits || [],
          deadline: job.deadline,
          shift_timings: job.shift_timings,
          openings: job.openings
        }))
        
        setJobs(formattedJobs)
      } else {
        setJobs([])
      }
    } catch (err) {
      console.error('Error fetching jobs:', err)
      setError(err.message)
      setJobs([])
    } finally {
      setLoading(false)
    }
  }

  const formatExperience = (required_experience) => {
    if (!required_experience) return 'Not specified'
    if (required_experience.includes('-')) {
      return `${required_experience} years`
    }
    return `${required_experience}+ years`
  }

  const formatLocation = (location, work_mode) => {
    if (work_mode === 'Remote') return `Remote`
    if (work_mode === 'Hybrid') return `${location} (Hybrid)`
    return location || 'Not specified'
  }

  const formatSalary = (min, max, showSalary) => {
    if (!showSalary) return 'Confidential'
    if (!min && !max) return 'Negotiable'
    
    const formatCurrency = (amount) => {
      if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)}Cr`
      if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`
      return `₹${amount.toLocaleString()}`
    }
    
    if (min && max) {
      return `${formatCurrency(min)} - ${formatCurrency(max)}`
    }
    if (min) return `${formatCurrency(min)}+`
    if (max) return `Up to ${formatCurrency(max)}`
    return 'Negotiable'
  }

  const departments = ['all', ...new Set(jobs.map(job => job.department))]
  
  const filteredJobs = jobs.filter(job => {
    const matchesDept = filter === 'all' || job.department === filter
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (job.skills && job.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())))
    return matchesDept && matchesSearch
  })

  const toggleSaveJob = (jobId) => {
    const newSavedJobs = savedJobs.includes(jobId) 
      ? savedJobs.filter(id => id !== jobId)
      : [...savedJobs, jobId]
    setSavedJobs(newSavedJobs)
    localStorage.setItem('zv_saved_jobs', JSON.stringify(newSavedJobs))
  }

  useEffect(() => {
    const saved = localStorage.getItem('zv_saved_jobs')
    if (saved) {
      setSavedJobs(JSON.parse(saved))
    }
  }, [])

  if (loading) {
    return (
      <section className="zv-careers-jobs" ref={ref}>
        <div className="zv-careers-jobs__inner">
          <div className="zv-loading-container">
            <FaSpinner className="zv-spinner" />
            <p>Loading opportunities...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="zv-open-positions" className="zv-careers-jobs" ref={ref}>
      <div className="zv-careers-jobs__inner">
        <motion.div
          className="zv-careers-jobs__head"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="zv-section-label">Open Positions</span>
          <h2 className="zv-section-title">
            Join Our <span className="zv-grad-text">Team</span>
          </h2>
          <p className="zv-section-subtitle">
            Find your perfect role and start your journey with us.
          </p>
        </motion.div>

        <div className="zv-careers-jobs__filters">
          <div className="zv-careers-jobs__search">
            <input 
              type="text" 
              placeholder="Search by title or skill..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="zv-careers-jobs__dept-filters">
            {departments.map(dept => (
              <button
                key={dept}
                className={`zv-jobs-filter-btn ${filter === dept ? 'active' : ''}`}
                onClick={() => setFilter(dept)}
              >
                {dept === 'all' ? 'All Jobs' : dept}
              </button>
            ))}
          </div>
        </div>

        <div className="zv-careers-jobs__grid">
          {filteredJobs.map((job, idx) => (
            <motion.div
              key={job.id}
              className={`zv-job-card ${expandedJob === job.id ? 'expanded' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              whileHover={{ y: -3 }}
            >
              <div className="zv-job-card__gradient" />
              
              <div className="zv-job-card__header">
                <div>
                  <h3>{job.title}</h3>
                  <span className="zv-job-card__dept">{job.department}</span>
                  {job.jr_id && <span className="zv-job-card__jr-id">{job.jr_id}</span>}
                </div>
                <button 
                  className={`zv-job-card__save ${savedJobs.includes(job.id) ? 'saved' : ''}`}
                  onClick={() => toggleSaveJob(job.id)}
                  aria-label="Save job"
                >
                  <FaRegHeart />
                </button>
              </div>

              <div className="zv-job-card__details">
                <div className="zv-job-card__detail">
                  <FaBriefcase /> <span>{job.experience}</span>
                </div>
                <div className="zv-job-card__detail">
                  <HiOutlineLocationMarker /> <span>{job.location}</span>
                </div>
                <div className="zv-job-card__detail">
                  <FaClock /> <span>{job.type}</span>
                </div>
                <div className="zv-job-card__detail">
                  <HiOutlineCash /> <span>{job.salary}</span>
                </div>
              </div>

              {job.shift_timings && (
                <div className="zv-job-card__shift">
                  <span>🕒 {job.shift_timings}</span>
                </div>
              )}

              <div className="zv-job-card__skills">
                {job.skills && job.skills.slice(0, 4).map((skill, i) => (
                  <span key={i} className="zv-job-card__skill">{skill}</span>
                ))}
                {job.skills && job.skills.length > 4 && (
                  <span className="zv-job-card__skill">+{job.skills.length - 4}</span>
                )}
              </div>

              <AnimatePresence>
                {expandedJob === job.id && (
                  <motion.div
                    className="zv-job-card__expand"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="zv-job-description">{job.description}</p>
                    
                    {job.requirements && job.requirements.length > 0 && (
                      <div className="zv-job-requirements">
                        <strong>📋 Requirements:</strong>
                        <ul>
                          {job.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {job.benefits && job.benefits.length > 0 && (
                      <div className="zv-job-benefits">
                        <strong>🎁 Benefits:</strong>
                        <ul>
                          {job.benefits.map((benefit, i) => (
                            <li key={i}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="zv-job-full-skills">
                      <strong>💡 Required Skills:</strong>
                      <div className="zv-job-skill-list">
                        {job.skills && job.skills.map((skill, i) => (
                          <span key={i}>{skill}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="zv-job-card__actions">
                <button 
                  className="zv-job-card__expand-btn"
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                >
                  {expandedJob === job.id ? '▲ Show Less' : '▼ View Details'}
                </button>
                <button 
                  className="zv-job-card__apply-btn"
                  onClick={() => {
                    console.log('Apply button clicked for job:', job)
                    onApply(job)
                  }}
                >
                  Apply Now <FaArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredJobs.length === 0 && !loading && (
          <div className="zv-careers-jobs__empty">
            <p>No jobs found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}