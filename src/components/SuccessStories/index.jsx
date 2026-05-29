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
    metric: "100%",
    metricLbl: "Success Rate",
    company: "Fintech"
  },
  {
    text: "It has been a while since we have witnessed such quality and precision of project delivery. Thank you, Zeta-V, for a job well done in the acquisition and transformation program, genuinely exceeding our expectations.",
    author: "Chief Executive Officer – Asia & Project Sponsor",
    pos: "A global leader in precision manufacturing from the German Mittelstand",
    rating: 5,
    initials: "CE",
    metric: "100%",
    metricLbl: "Exceeded Expectations",
    company: "Manufacturing"
  },
  {
    text: "I would like to extend my sincere appreciation to the Zeta-V team for guiding and helping us with strategy formulation and RFP processes. Your product insights and program management made the journey pleasant.",
    author: "Chief Information Officer and Head of Information Technology",
    pos: "A world leading multilateral bank in Asia",
    rating: 5,
    initials: "CI",
    metric: "100%",
    metricLbl: "Satisfaction",
    company: "Banking"
  },
]

export default function SuccessStories() {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [headRef, headVisible] = useReveal(0)

  useEffect(() => {
    if (!playing) return
    const id = setInterval(() => setActive((a) => (a + 1) % stories.length), 5000)
    return () => clearInterval(id)
  }, [playing])

  const handleDot = (i) => { 
    setActive(i)
    setPlaying(false)
    setTimeout(() => setPlaying(true), 10000)
  }

  const initials = stories.map(s => s.initials)

  // Generate story particles
  const storyParticles = [
    { type: 'dark-blue', size: 'xl', speed: 'slow', top: '5%', left: '10%' },
    { type: 'sky-blue', size: 'lg', speed: 'medium', top: '15%', left: '85%' },
    { type: 'light-blue', size: 'md', speed: 'fast', top: '25%', left: '15%' },
    { type: 'dark-blue', size: 'sm', speed: 'medium', top: '35%', left: '75%' },
    { type: 'sky-blue', size: 'xl', speed: 'slow', top: '45%', left: '5%' },
    { type: 'white', size: 'lg', speed: 'fast', top: '55%', left: '90%' },
    { type: 'light-blue', size: 'sm', speed: 'slow', top: '65%', left: '25%' },
    { type: 'dark-blue', size: 'md', speed: 'medium', top: '75%', left: '60%' },
    { type: 'sky-blue', size: 'lg', speed: 'slow', top: '85%', left: '30%' },
    { type: 'white', size: 'xl', speed: 'fast', top: '95%', left: '70%' },
    { type: 'light-blue', size: 'md', speed: 'slow', top: '10%', left: '40%' },
    { type: 'dark-blue', size: 'lg', speed: 'fast', top: '30%', left: '50%' },
    { type: 'sky-blue', size: 'sm', speed: 'medium', top: '50%', left: '80%' },
    { type: 'white', size: 'md', speed: 'slow', top: '70%', left: '45%' },
    { type: 'light-blue', size: 'xl', speed: 'medium', top: '80%', left: '15%' },
    { type: 'dark-blue', size: 'sm', speed: 'fast', top: '20%', left: '95%' },
  ]

  return (
    <section className="testimonials-section">
      {/* Story Particle Background */}
      <div className="story-particles-container">
        {storyParticles.map((particle, index) => (
          <div
            key={index}
            className={`story-particle story-particle-${particle.type} size-${particle.size} ${particle.speed}`}
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: `${index * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="container">
        <div ref={headRef} className={`testimonials-head reveal${headVisible ? ' visible' : ''}`}>
          <span className="section-label">CLIENT SUCCESS STORIES</span>
          <h2>What our <span className="highlight">partners say</span></h2>
          <p>Proven outcomes from trusted partnerships.</p>
        </div>

        <div className="testimonials-layout">
          {/* Stats Column - Left Side */}
          <div className="t-stats-col">
            <div className="t-stats-card">
              <div className="t-stat-item">
                <span className="t-stat-number">100+</span>
                <span className="t-stat-label">Global Clients</span>
              </div>
              <div className="t-stat-divider" />
              <div className="t-stat-item">
                <span className="t-stat-number">100+</span>
                <span className="t-stat-label">Projects Delivered</span>
              </div>
              <div className="t-stat-divider" />
              <div className="t-stat-item">
                <span className="t-stat-number">90%+</span>
                <span className="t-stat-label">Client Retention</span>
              </div>
            </div>

            <div className="t-trusted">
              <div className="t-trusted-avatars">
                {initials.map((init, i) => (
                  <div key={i} className="t-avatar">
                    <div className="t-avatar-inner">{init}</div>
                  </div>
                ))}
              </div>
              <p>Trusted by industry leaders worldwide</p>
            </div>
          </div>

          {/* Testimonial Cards Column - Right Side - Slider from Right to Left */}
          <div className="t-cards-col">
            {stories.map((item, i) => (
              <div
                key={i}
                className={`t-card ${i === active ? 'active' : 'inactive'}`}
                style={{
                  transform: i === active ? 'translateX(0)' : 'translateX(100%)',
                  opacity: i === active ? 1 : 0,
                  pointerEvents: i === active ? "auto" : "none",
                  transition: 'all 0.5s cubic-bezier(0.34, 1.2, 0.64, 1)'
                }}
              >
                <div className="t-company">
                  <div className="t-company-logo">{item.company[0]}</div>
                  <span>{item.company}</span>
                </div>

                <span className="t-quote-mark">"</span>
                <p className="t-text">{item.text}</p>

                <div className="t-metric-pill">
                  <span className="t-metric-val">{item.metric}</span>
                  <span className="t-metric-lbl">{item.metricLbl}</span>
                </div>

                <div className="t-author">
                  <div className="t-author-img">
                    <div className="t-author-avatar">{item.initials}</div>
                    <div className="t-online" />
                  </div>
                  <div className="t-author-info">
                    <p className="t-author-name">{item.author}</p>
                    <p className="t-author-pos">{item.pos}</p>
                  </div>
                  <div className="t-stars">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <svg key={si} viewBox="0 0 24 24" fill={si < item.rating ? "#fbbf24" : "#e2e8f0"} width="15" height="15">
                        <path d="M12 2L15 9H22L16 14L19 21L12 16.5L5 21L8 14L2 9H9L12 2Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="t-nav">
          <div className="t-dots">
            {stories.map((_, i) => (
              <button key={i} className={`t-dot ${i === active ? "active" : ""}`} onClick={() => handleDot(i)}>
                <span className="t-dot-inner" />
              </button>
            ))}
          </div>
          <button className="t-play-btn" onClick={() => setPlaying(!playing)}>
            {playing ? (
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M8 5v14l11-7L8 5Z" />
              </svg>
            )}
          </button>
        </div>

        {/* CTA Button */}
        <div className="t-cta">
          <a href="#case-studies" className="t-cta-btn">
            View More Case Studies →
          </a>
        </div>
      </div>
    </section>
  )
}