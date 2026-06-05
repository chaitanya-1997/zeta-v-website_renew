// SuccessStories.jsx
import { useEffect, useState } from 'react'
import { useReveal } from '../../hooks/useReveal'
import './SuccessStories.css'

const stories = [
  {
    text: "We are grateful to the Zeta-V team for your great support in migrating our email server from Linode to ZOHO. We greatly appreciate the excellent technical IT work your team has done.",
    author: "Founder & Chief Executive Officer",
    pos: "A leading Fintech in private wealth management in Asia",
    rating: 5,
    initials: "FC",
    company: "Fintech",
    logoColor: "#0D47A1"
  },
  {
    text: "It has been a while since we have witnessed such quality and precision of project delivery. Thank you, Zeta-V, for a job well done in the acquisition and transformation program, genuinely exceeding our expectations.",
    author: "Chief Executive Officer – Asia & Project Sponsor",
    pos: "A global leader in precision manufacturing from the German Mittelstand",
    rating: 5,
    initials: "CE",
    company: "Manufacturing",
    logoColor: "#1565C0"
  },
  {
    text: "I would like to extend my sincere appreciation to the Zeta-V team for guiding and helping us with strategy formulation and RFP processes. Your product insights and program management made the journey pleasant.",
    author: "Chief Information Officer and Head of Information Technology",
    pos: "A world leading multilateral bank in Asia",
    rating: 5,
    initials: "CI",
    company: "Banking",
    logoColor: "#1E88E5"
  },
]

export default function SuccessStories() {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [direction, setDirection] = useState('next')
  const [headRef, headVisible] = useReveal(0)

  useEffect(() => {
    if (!playing) return
    const id = setInterval(() => {
      setDirection('next')
      setActive((a) => (a + 1) % stories.length)
    }, 6000)
    return () => clearInterval(id)
  }, [playing])

  const goToSlide = (index) => {
    if (index === active) return
    setDirection(index > active ? 'next' : 'prev')
    setActive(index)
    setPlaying(false)
    setTimeout(() => setPlaying(true), 10000)
  }

  const nextSlide = () => {
    setDirection('next')
    setActive((prev) => (prev + 1) % stories.length)
    setPlaying(false)
    setTimeout(() => setPlaying(true), 10000)
  }

  const prevSlide = () => {
    setDirection('prev')
    setActive((prev) => (prev - 1 + stories.length) % stories.length)
    setPlaying(false)
    setTimeout(() => setPlaying(true), 10000)
  }

  const currentStory = stories[active]

  return (
    <section className="success-stories">
      {/* Animated Background Elements */}
      <div className="stories-bg">
        <div className="bg-glow glow-1"></div>
        <div className="bg-glow glow-2"></div>
        <div className="bg-glow glow-3"></div>
      </div>

      <div className="stories-container">
        <div ref={headRef} className={`stories-header reveal${headVisible ? ' visible' : ''}`}>
          <span className="section-label">
         
            Client Success Stories
          </span>
          <h2 className="section-title">
            What our <span className="gradient-highlight">partners say</span>
          </h2>
         <p className="section-subtitle">
            Real results from real partnerships — hear directly from our clients
          </p>
        </div>

        {/* Modern Slider Layout */}
        <div className="stories-slider">
          {/* Main Card */}
          <div className="stories-card-wrapper">
            <div 
              key={active}
              className={`stories-card ${direction === 'next' ? 'slide-in-right' : 'slide-in-left'}`}
            >
              {/* Quote Icon */}
              <div className="card-quote-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M18 20H12V26H18V20ZM18 14H12V18H18V14ZM18 32H12V38H18V32ZM36 20H30V26H36V20ZM36 14H30V18H36V14ZM36 32H30V38H36V32Z" fill="currentColor" opacity="0.3"/>
                  <path d="M22 18L16 24L22 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M38 18L32 24L38 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>

              {/* Company Badge */}
              <div className="card-company">
                <div className="company-logo" style={{ background: currentStory.logoColor }}>
                  {currentStory.company.charAt(0)}
                </div>
                <span className="company-name">{currentStory.company}</span>
              </div>

              {/* Testimonial Text */}
              <p className="card-text">"{currentStory.text}"</p>

              {/* Author Section */}
              <div className="card-author">
                <div className="author-avatar">
                  <div className="avatar-initials" style={{ background: currentStory.logoColor }}>
                    {currentStory.initials}
                  </div>
                  <div className="avatar-status"></div>
                </div>
                <div className="author-info">
                  <h4 className="author-name">{currentStory.author}</h4>
                  <p className="author-position">{currentStory.pos}</p>
                </div>
                <div className="author-rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill={i < currentStory.rating ? "#F59E0B" : "#E2E8F0"} width="18" height="18">
                      <path d="M12 2L15 9H22L16 14L19 21L12 16.5L5 21L8 14L2 9H9L12 2Z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="card-decoration">
                <div className="deco-line"></div>
                <div className="deco-dot"></div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="stories-controls">
            <button className="control-btn prev-btn" onClick={prevSlide}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="controls-dots">
              {stories.map((_, idx) => (
                <button
                  key={idx}
                  className={`control-dot ${idx === active ? 'active' : ''}`}
                  onClick={() => goToSlide(idx)}
                >
                  <span className="dot-inner"></span>
                </button>
              ))}
            </div>

            <button className="control-btn next-btn" onClick={nextSlide}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
              <button className="autoplay-toggle" onClick={() => setPlaying(!playing)}>
            {playing ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor"/>
                <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7L8 5Z" fill="currentColor"/>
              </svg>
            )}
          </button>
          </div>

          {/* Auto-play Toggle */}
        
        </div>

        {/* Trust Indicators */}
        <div className="stories-trust">
          <div className="trust-avatars">
            {stories.map((story, i) => (
              <div key={i} className="trust-avatar" style={{ background: story.logoColor }}>
                {story.initials}
              </div>
            ))}
          </div>
          <p className="trust-text">Trusted by industry leaders worldwide</p>
        </div>
      </div>
    </section>
  )
}