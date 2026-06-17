import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaTimes, FaUser, FaBriefcase, FaGraduationCap, FaRegFileAlt, FaUpload, FaRegSave, FaArrowRight, FaSpinner } from 'react-icons/fa'
import './ApplicationModal.css'

const API_BASE_URL = 'https://zeta-v-invoicemanagement-ddgwdzg2dchdfaf4.centralindia-01.azurewebsites.net/api/public'

export default function ApplicationModal({ job, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    first_name: '', last_name: '', email: '', phone: '', current_location: '',
    linkedin_url: '', portfolio_url: '', github_url: '',
    total_experience: '', relevant_experience: '', current_company: '',
    current_designation: '', current_ctc: '', expected_ctc: '', notice_period: '',
    highest_qualification: '', college: '', graduation_year: '', certifications: '',
    why_join: '', cover_letter: '', availability: '', willing_to_relocate: 'false',
    skills: '',
    agreePrivacy: false,
  })

  const [resumeFile, setResumeFile] = useState(null)
  const [photoFile, setPhotoFile] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [existingApplication, setExistingApplication] = useState(null)
  const [checkingExisting, setCheckingExisting] = useState(false)

  useEffect(() => {
    const checkExisting = async () => {
      if (formData.email || formData.phone) {
        setCheckingExisting(true)
        try {
          const params = new URLSearchParams()
          if (formData.email) params.append('email', formData.email)
          if (formData.phone) params.append('phone', formData.phone)
          
          const response = await fetch(`${API_BASE_URL}/check-existing?${params}`)
          const result = await response.json()
          
          if (result.success && result.exists) {
            setExistingApplication(result.data)
          } else {
            setExistingApplication(null)
          }
        } catch (error) {
          console.error('Error checking existing application:', error)
        } finally {
          setCheckingExisting(false)
        }
      }
    }
    
    const timeoutId = setTimeout(() => {
      if (formData.email || formData.phone) {
        checkExisting()
      }
    }, 500)
    
    return () => clearTimeout(timeoutId)
  }, [formData.email, formData.phone])

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
    
    if (!resumeFile) {
      alert('Please upload your resume')
      return
    }
    
    if (!formData.agreePrivacy) {
      alert('Please agree to the privacy policy')
      return
    }
    
    if (existingApplication) {
      alert('You have already applied. Our team will contact you soon.')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const formDataToSend = new FormData()
      
      Object.keys(formData).forEach(key => {
        if (key !== 'agreePrivacy' && formData[key]) {
          formDataToSend.append(key, formData[key])
        }
      })
      
      formDataToSend.append('job_id', job.id)
      formDataToSend.append('resume', resumeFile)
      
      if (photoFile) {
        formDataToSend.append('photo', photoFile)
      }
      
      const response = await fetch(`${API_BASE_URL}/apply`, {
        method: 'POST',
        body: formDataToSend
      })
      
      const result = await response.json()
      
      if (result.success) {
        localStorage.removeItem('zv_job_draft')
        onSubmit()
      } else {
        alert(result.message || 'Application submission failed. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      alert('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const saveDraft = () => {
    localStorage.setItem('zv_job_draft', JSON.stringify(formData))
    alert('Draft saved successfully!')
  }

  useEffect(() => {
    const draft = localStorage.getItem('zv_job_draft')
    if (draft) {
      const shouldLoad = window.confirm('You have a saved draft. Do you want to load it?')
      if (shouldLoad) {
        setFormData(JSON.parse(draft))
      }
    }
  }, [])

  return (
    <motion.div
      className="zv-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="zv-modal"
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ type: 'spring', damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="zv-modal__header">
          <div>
            <h2>Apply for {job?.title}</h2>
            <p>{job?.department} • {job?.location}</p>
          </div>
          <button className="zv-modal__close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {existingApplication && (
          <div className="zv-modal-warning">
            <p>⚠️ You have already submitted an application. Our team will contact you soon.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="zv-modal__form">
          <div className="zv-form-section">
            <h3><FaUser /> Basic Information</h3>
            <div className="zv-form-grid">
              <div className="zv-form-field">
                <label>First Name *</label>
                <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />
              </div>
              <div className="zv-form-field">
                <label>Last Name *</label>
                <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required />
              </div>
              <div className="zv-form-field">
                <label>Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                {checkingExisting && <small>Checking...</small>}
              </div>
              <div className="zv-form-field">
                <label>Phone Number *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="zv-form-field">
                <label>Current Location *</label>
                <input type="text" name="current_location" value={formData.current_location} onChange={handleChange} required />
              </div>
              <div className="zv-form-field">
                <label>LinkedIn URL</label>
                <input type="url" name="linkedin_url" value={formData.linkedin_url} onChange={handleChange} />
              </div>
              <div className="zv-form-field">
                <label>Portfolio URL</label>
                <input type="url" name="portfolio_url" value={formData.portfolio_url} onChange={handleChange} />
              </div>
              <div className="zv-form-field">
                <label>GitHub URL</label>
                <input type="url" name="github_url" value={formData.github_url} onChange={handleChange} />
              </div>
            </div>
          </div>

          <div className="zv-form-section">
            <h3><FaBriefcase /> Professional Details</h3>
            <div className="zv-form-grid">
              <div className="zv-form-field">
                <label>Total Experience (years) *</label>
                <input type="number" name="total_experience" value={formData.total_experience} onChange={handleChange} required />
              </div>
              <div className="zv-form-field">
                <label>Relevant Experience (years) *</label>
                <input type="number" name="relevant_experience" value={formData.relevant_experience} onChange={handleChange} required />
              </div>
              <div className="zv-form-field">
                <label>Current Company</label>
                <input type="text" name="current_company" value={formData.current_company} onChange={handleChange} />
              </div>
              <div className="zv-form-field">
                <label>Current Designation</label>
                <input type="text" name="current_designation" value={formData.current_designation} onChange={handleChange} />
              </div>
              <div className="zv-form-field">
                <label>Current CTC (₹) *</label>
                <input type="text" name="current_ctc" value={formData.current_ctc} onChange={handleChange} required />
              </div>
              <div className="zv-form-field">
                <label>Expected CTC (₹) *</label>
                <input type="text" name="expected_ctc" value={formData.expected_ctc} onChange={handleChange} required />
              </div>
              <div className="zv-form-field">
                <label>Notice Period (days) *</label>
                <input type="text" name="notice_period" value={formData.notice_period} onChange={handleChange} required />
              </div>
              <div className="zv-form-field zv-form-field--full">
                <label>Skills (comma separated) *</label>
                <input type="text" name="skills" value={formData.skills} onChange={handleChange} placeholder="React, Node.js, Python, SQL" required />
              </div>
            </div>
          </div>

          <div className="zv-form-section">
            <h3><FaGraduationCap /> Education Details</h3>
            <div className="zv-form-grid">
              <div className="zv-form-field">
                <label>Highest Qualification *</label>
                <input type="text" name="highest_qualification" value={formData.highest_qualification} onChange={handleChange} required />
              </div>
              <div className="zv-form-field">
                <label>College/University *</label>
                <input type="text" name="college" value={formData.college} onChange={handleChange} required />
              </div>
              <div className="zv-form-field">
                <label>Graduation Year *</label>
                <input type="text" name="graduation_year" value={formData.graduation_year} onChange={handleChange} required />
              </div>
              <div className="zv-form-field">
                <label>Certifications</label>
                <input type="text" name="certifications" value={formData.certifications} onChange={handleChange} />
              </div>
            </div>
          </div>

          <div className="zv-form-section">
            <h3><FaRegFileAlt /> Additional Information</h3>
            <div className="zv-form-grid">
              <div className="zv-form-field zv-form-field--full">
                <label>Why do you want to join Zeta-V? *</label>
                <textarea name="why_join" rows={3} value={formData.why_join} onChange={handleChange} required />
              </div>
              <div className="zv-form-field zv-form-field--full">
                <label>Cover Letter</label>
                <textarea name="cover_letter" rows={3} value={formData.cover_letter} onChange={handleChange} />
              </div>
              <div className="zv-form-field">
                <label>Availability to join *</label>
                <select name="availability" value={formData.availability} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="immediate">Immediate</option>
                  <option value="15-days">Within 15 days</option>
                  <option value="30-days">Within 30 days</option>
                  <option value="60-days">Within 60 days</option>
                  <option value="90-days">Within 90 days</option>
                </select>
              </div>
              <div className="zv-form-field">
                <label>Willing to relocate?</label>
                <select name="willing_to_relocate" value={formData.willing_to_relocate} onChange={handleChange}>
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </div>
            </div>
          </div>

          <div className="zv-form-section">
            <h3><FaUpload /> Documents</h3>
            <div className="zv-form-grid">
              <div className="zv-form-field">
                <label>Resume (PDF/DOC) *</label>
                <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
                <small>Max file size: 5MB</small>
              </div>
              <div className="zv-form-field">
                <label>Profile Photo</label>
                <input type="file" name="photo" accept="image/*" onChange={handleFileChange} />
                <small>Optional. Max file size: 2MB</small>
              </div>
            </div>
          </div>

          <div className="zv-form-checkbox">
            <label>
              <input type="checkbox" name="agreePrivacy" checked={formData.agreePrivacy} onChange={handleChange} required />
              <span>I agree to the <a href="#">privacy policy</a> and <a href="#">terms of use</a> *</span>
            </label>
          </div>

          <div className="zv-form-actions">
            <button type="button" className="zv-btn-secondary" onClick={onClose}>Cancel</button>
            <button type="button" className="zv-btn-outline" onClick={saveDraft}>
              <FaRegSave /> Save Draft
            </button>
            <button type="submit" className="zv-btn-primary" disabled={isSubmitting || existingApplication}>
              {isSubmitting ? <><FaSpinner className="zv-spinner" /> Submitting...</> : <>Submit Application <FaArrowRight /></>}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}