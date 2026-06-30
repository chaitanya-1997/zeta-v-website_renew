// OpenPositionsSection.jsx
import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  FaBriefcase, FaClock, FaRegHeart, FaArrowRight, FaSpinner, FaHeart,
  FaListUl, FaGift, FaLightbulb, FaCalendarAlt, FaMapMarkerAlt, FaMoneyBillWave,
  FaSearch, FaFilter, FaTimes, FaUpload, FaEnvelope, FaUser, FaFileAlt,
  FaCheckCircle, FaExclamationCircle
} from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi2'
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
  const [showFilters, setShowFilters] = useState(false)
  
  // Resume submission state
  const [showResumeForm, setShowResumeForm] = useState(false)
  const [resumeFormData, setResumeFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resumeFile: null,
    message: ''
  })
  const [resumeSubmitted, setResumeSubmitted] = useState(false)
  const [resumeSubmitting, setResumeSubmitting] = useState(false)
  const [resumeSubmitError, setResumeSubmitError] = useState(null)

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
          description: job.description || '',
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

  const departments = ['all', ...new Set(jobs.map(job => job.department).filter(Boolean))]
  
  const filteredJobs = jobs.filter(job => {
    const matchesDept = filter === 'all' || job.department === filter
    const matchesSearch = job.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
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

  const renderHTML = (htmlContent) => {
    if (!htmlContent) return null
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  }

  // ─── RESUME SUBMISSION HANDLERS ───
  const handleResumeInputChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'resumeFile') {
      setResumeFormData(prev => ({ ...prev, resumeFile: files[0] }))
    } else {
      setResumeFormData(prev => ({ ...prev, [name]: value }))
    }
    // Clear error when user types
    if (resumeSubmitError) setResumeSubmitError(null)
  }

  const handleResumeSubmit = async (e) => {
    e.preventDefault()
    setResumeSubmitting(true)
    setResumeSubmitError(null)

    // Validate required fields
    if (!resumeFormData.name.trim() || !resumeFormData.email.trim() || !resumeFormData.resumeFile) {
      setResumeSubmitError('Please fill in all required fields and attach your resume.')
      setResumeSubmitting(false)
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(resumeFormData.email)) {
      setResumeSubmitError('Please enter a valid email address.')
      setResumeSubmitting(false)
      return
    }

    // Validate file size (max 5MB)
    if (resumeFormData.resumeFile.size > 5 * 1024 * 1024) {
      setResumeSubmitError('File size exceeds 5MB limit. Please compress or choose a smaller file.')
      setResumeSubmitting(false)
      return
    }

    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain']
    if (!allowedTypes.includes(resumeFormData.resumeFile.type)) {
      setResumeSubmitError('Only PDF, DOC, DOCX, and TXT files are allowed.')
      setResumeSubmitting(false)
      return
    }

    try {
      const formData = new FormData()
      formData.append('name', resumeFormData.name.trim())
      formData.append('email', resumeFormData.email.trim())
      formData.append('phone', resumeFormData.phone.trim())
      formData.append('message', resumeFormData.message.trim())
      formData.append('resumeFile', resumeFormData.resumeFile)

      const response = await fetch(`${API_BASE_URL}/api/public/submitresume`, {
        method: 'POST',
        body: formData,
        // Do NOT set Content-Type header; browser will set it with boundary for multipart/form-data
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit resume. Please try again.')
      }

      // Success
      setResumeSubmitted(true)
      setResumeSubmitting(false)
      
      // Reset form after delay
      setTimeout(() => {
        setResumeSubmitted(false)
        setShowResumeForm(false)
        setResumeFormData({
          name: '',
          email: '',
          phone: '',
          resumeFile: null,
          message: ''
        })
        // Reset file input value
        const fileInput = document.getElementById('resume-file')
        if (fileInput) fileInput.value = ''
      }, 4000)

    } catch (err) {
      setResumeSubmitError(err.message || 'Network error. Please check your connection and try again.')
      setResumeSubmitting(false)
    }
  }

  if (loading) {
    return (
      <section className="open-positions-premium-light" ref={ref}>
        <div className="open-positions-premium-light-container">
          <div className="open-positions-loader-light">
            <FaSpinner className="loader-spinner-light" />
            <p>Loading opportunities...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="zv-open-positions" className="open-positions-premium-light" ref={ref}>
      {/* Background Decorations */}
      <div className="open-positions-light-bg">
        <div className="open-positions-light-blob oplblob-1" />
        <div className="open-positions-light-blob oplblob-2" />
        <div className="open-positions-light-blob oplblob-3" />
      </div>
      <div className="open-positions-light-pattern" />

      <div className="open-positions-premium-light-container">
        {/* Header */}
        <motion.div
          className="open-positions-light-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="industry-cards-premium-label">
            <span className="label-line" />
            <span className="label-text">Open Positions</span>
            <span className="label-line" />
          </div>
          
          <h2 className="open-positions-light-title">
            Join Our 
            <span> Team</span>
            <span className="title-icon-light">✦</span>
          </h2>
          <p className="open-positions-light-subtitle">
            Find your perfect role and start your journey with us.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="open-positions-light-filters">
          <div className="open-positions-light-search">
            <FaSearch className="search-icon-light" />
            <input 
              type="text" 
              placeholder="Search by title or skill..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button className="search-clear-light" onClick={() => setSearchTerm('')}>
                <FaTimes />
              </button>
            )}
          </div>
          <button className="filter-toggle-light" onClick={() => setShowFilters(!showFilters)}>
            <FaFilter />
            <span>Filter</span>
          </button>
        </div>

        {/* Department Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div 
              className="open-positions-light-dept-filters"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {departments.map(dept => (
                <button
                  key={dept}
                  className={`dept-filter-btn-light ${filter === dept ? 'active' : ''}`}
                  onClick={() => setFilter(dept)}
                >
                  {dept === 'all' ? 'All Jobs' : dept}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Jobs Grid */}
        <div className="open-positions-light-grid">
          {filteredJobs.map((job, idx) => (
            <motion.div
              key={job.id}
              className={`open-position-light-card ${expandedJob === job.id ? 'expanded' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
            >
              <div className="open-position-light-card-glow" />
              
              <div className="open-position-light-card-header">
                <div className="open-position-light-card-title-group">
                  <h3>{job.title}</h3>
                  <div className="open-position-light-card-meta">
                    <span className="open-position-light-card-dept">{job.department}</span>
                    {job.jr_id && <span className="open-position-light-card-jr">{job.jr_id}</span>}
                  </div>
                </div>
                <button 
                  className={`open-position-light-card-save ${savedJobs.includes(job.id) ? 'saved' : ''}`}
                  onClick={() => toggleSaveJob(job.id)}
                  aria-label="Save job"
                >
                  {savedJobs.includes(job.id) ? <FaHeart /> : <FaRegHeart />}
                </button>
              </div>

              <div className="open-position-light-card-details">
                <div className="open-position-light-card-detail">
                  <FaBriefcase /> <span>{job.experience}</span>
                </div>
                <div className="open-position-light-card-detail">
                  <FaMapMarkerAlt /> <span>{job.location}</span>
                </div>
                <div className="open-position-light-card-detail">
                  <FaClock /> <span>{job.type}</span>
                </div>
                <div className="open-position-light-card-detail">
                  <FaMoneyBillWave /> <span>{job.salary}</span>
                </div>
              </div>

              {job.shift_timings && (
                <div className="open-position-light-card-shift">
                  <FaClock /> <span>{job.shift_timings}</span>
                </div>
              )}

              <div className="open-position-light-card-skills">
                {job.skills && job.skills.slice(0, 4).map((skill, i) => (
                  <span key={i} className="open-position-light-card-skill">{skill}</span>
                ))}
                {job.skills && job.skills.length > 4 && (
                  <span className="open-position-light-card-skill more">+{job.skills.length - 4}</span>
                )}
              </div>

              <AnimatePresence>
                {expandedJob === job.id && (
                  <motion.div
                    className="open-position-light-card-expand"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {job.description && (
                      <div className="open-position-light-description">
                        {renderHTML(job.description)}
                      </div>
                    )}
                    
                    {job.requirements && job.requirements.length > 0 && (
                      <div className="open-position-light-requirements">
                        <strong><FaListUl /> Requirements:</strong>
                        <ul>
                          {job.requirements.map((req, i) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: req }} />
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {job.benefits && job.benefits.length > 0 && (
                      <div className="open-position-light-benefits">
                        <strong><FaGift /> Benefits:</strong>
                        <ul>
                          {job.benefits.map((benefit, i) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: benefit }} />
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {job.skills && job.skills.length > 0 && (
                      <div className="open-position-light-full-skills">
                        <strong><FaLightbulb /> Required Skills:</strong>
                        <div className="open-position-light-skill-list">
                          {job.skills.map((skill, i) => (
                            <span key={i} dangerouslySetInnerHTML={{ __html: skill }} />
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="open-position-light-card-actions">
                <button 
                  className="open-position-light-card-expand-btn"
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                >
                  {expandedJob === job.id ? 'Show Less' : 'View Details'}
                </button>
                <button 
                  className="open-position-light-card-apply"
                  onClick={() => onApply && onApply(job)}
                >
                  <span>Apply Now</span>
                  <FaArrowRight />
                </button>
              </div>

              <div className="open-position-light-card-line" />
            </motion.div>
          ))}
        </div>

        {filteredJobs.length === 0 && !loading && (
          <div className="open-positions-light-empty">
            <p>No jobs found matching your criteria.</p>
          </div>
        )}

        {/* ─── SUBMIT RESUME SECTION (with API integration) ─── */}
        <motion.div
          className="submit-resume-light-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="submit-resume-light-divider">
            <span className="submit-resume-light-line" />
            <span className="submit-resume-light-icon-wrapper">
              <FaUpload />
            </span>
            <span className="submit-resume-light-line" />
          </div>

          <div className="submit-resume-light-content">
            <h3 className="submit-resume-light-title">
              Don't see a suitable opening?
            </h3>
            <p className="submit-resume-light-description">
              Submit your resume, and we'll keep it in our talent database for future opportunities. 
              Stay connected with us — upload your resume today and be considered for future career opportunities.
            </p>

            {!showResumeForm && !resumeSubmitted ? (
              <button 
                className="submit-resume-light-btn"
                onClick={() => {
                  setShowResumeForm(true)
                  setResumeSubmitError(null)
                }}
              >
                <FaUpload />
                <span>Submit Your Resume</span>
              </button>
            ) : showResumeForm && !resumeSubmitted ? (
              <div className="submit-resume-light-form-wrapper">
                {resumeSubmitError && (
                  <div className="submit-resume-light-error">
                    <FaExclamationCircle />
                    <span>{resumeSubmitError}</span>
                  </div>
                )}
                <form className="submit-resume-light-form" onSubmit={handleResumeSubmit}>
                  <div className="submit-resume-light-form-row">
                    <div className="submit-resume-light-form-group">
                      <label htmlFor="resume-name">
                        <FaUser />
                        Full Name <span className="required">*</span>
                      </label>
                      <input
                        id="resume-name"
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={resumeFormData.name}
                        onChange={handleResumeInputChange}
                        required
                      />
                    </div>
                    <div className="submit-resume-light-form-group">
                      <label htmlFor="resume-email">
                        <FaEnvelope />
                        Email Address <span className="required">*</span>
                      </label>
                      <input
                        id="resume-email"
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={resumeFormData.email}
                        onChange={handleResumeInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="submit-resume-light-form-row">
                    <div className="submit-resume-light-form-group">
                      <label htmlFor="resume-phone">
                        <FaClock />
                        Phone Number
                      </label>
                      <input
                        id="resume-phone"
                        type="tel"
                        name="phone"
                        placeholder="+91 00000 00000"
                        value={resumeFormData.phone}
                        onChange={handleResumeInputChange}
                      />
                    </div>
                    <div className="submit-resume-light-form-group file-upload-group">
                      <label htmlFor="resume-file">
                        <FaFileAlt />
                        Resume / CV <span className="required">*</span>
                      </label>
                      <div className="file-upload-light-wrapper">
                        <input
                          id="resume-file"
                          type="file"
                          name="resumeFile"
                          accept=".pdf,.doc,.docx,.txt"
                          onChange={handleResumeInputChange}
                          required
                        />
                        <span className="file-upload-light-placeholder">
                          {resumeFormData.resumeFile ? resumeFormData.resumeFile.name : 'Choose file...'}
                        </span>
                        <span className="file-upload-light-browse">Browse</span>
                      </div>
                      <small className="file-upload-light-hint">PDF, DOC, DOCX, TXT (Max 5MB)</small>
                    </div>
                  </div>

                  <div className="submit-resume-light-form-group full-width">
                    <label htmlFor="resume-message">Additional Message (Optional)</label>
                    <textarea
                      id="resume-message"
                      name="message"
                      placeholder="Tell us about your experience, skills, or any specific roles you're interested in..."
                      rows="3"
                      value={resumeFormData.message}
                      onChange={handleResumeInputChange}
                    />
                  </div>

                  <div className="submit-resume-light-form-actions">
                    <button 
                      type="button"
                      className="submit-resume-light-cancel"
                      onClick={() => {
                        setShowResumeForm(false)
                        setResumeFormData({
                          name: '',
                          email: '',
                          phone: '',
                          resumeFile: null,
                          message: ''
                        })
                        setResumeSubmitError(null)
                        // Reset file input
                        const fileInput = document.getElementById('resume-file')
                        if (fileInput) fileInput.value = ''
                      }}
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="submit-resume-light-submit"
                      disabled={resumeSubmitting}
                    >
                      {resumeSubmitting ? (
                        <>
                          <FaSpinner className="spinner-light" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <FaCheckCircle />
                          Submit Resume
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="submit-resume-light-success">
                <div className="success-icon-light">
                  <FaCheckCircle />
                </div>
                <h4>Resume Submitted Successfully!</h4>
                <p>
                  Thank you for your interest in joining our team. We'll review your resume 
                  and reach out if we find a suitable opportunity for you.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Bottom Edge */}
      <div className="open-positions-light-bottom" />
    </section>
  )
}