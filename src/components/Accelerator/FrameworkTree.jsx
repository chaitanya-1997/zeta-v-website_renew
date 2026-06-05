import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './FrameworkTree.css'

// Import PROMAF background
import promafBg from '../../assets/accimg/promaf-bg.jpg'

export default function FrameworkTree({ title, description, items, bgClass = '', layoutType = 'zigzag' }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const openModal = (item, index) => {
  setSelectedItem({ ...item, index })
  setModalOpen(true)
  document.body.style.overflow = 'hidden'  // ← ADD THIS
}

const closeModal = () => {
  setModalOpen(false)
  setSelectedItem(null)
  document.body.style.overflow = ''  // ← ADD THIS
}

  return (
    <>
      <div className={`fw-section ${bgClass} ${isVisible ? 'is-visible' : ''}`} ref={sectionRef}>
        {/* PROMAF Background - outside section-container for full coverage */}
        {layoutType === 'graph' && (
          <div className="promaf-bg-wrapper">
            <div className="promaf-bg-image" style={{ backgroundImage: `url(${promafBg})` }}></div>
            <div className="promaf-bg-overlay"></div>
          </div>
        )}

        <div className="section-container">
          <div className="fw-header animate-fade-up">
            <h2>
              {title.split(' ').map((word, i) => 
                i === title.split(' ').length - 1 ? 
                  <span key={i} className="fw-title-last"> {word}</span> : 
                  <span key={i}>{word} </span>
              )}
            </h2>
            <p>{description}</p>
          </div>

          {/* ============ HEXAFIT - ZIGZAG (6 cards: 1,3,5 below | 2,4,6 above) ============ */}
          {layoutType === 'zigzag' && (
            <div className="fw-flow-zigzag">
              {!isMobile && <div className="fw-zigzag-line animate-line-draw"></div>}
              <div className="fw-zigzag-cards">
                {items.map((item, index) => {
                  const isAbove = index === 1 || index === 3 || index === 5
                  return (
                    <div key={index} className={`fw-zigzag-item ${isAbove ? 'zigzag-above' : 'zigzag-below'} animate-card-reveal`} style={{ animationDelay: `${0.8 + (index * 0.12)}s` }}>
                      {!isMobile && (
                        <>
                          {isAbove ? (
                            <>
                              <motion.div className="fw-card-main" onClick={() => openModal(item, index)} whileHover={{ y: -8, boxShadow: '0 14px 40px rgba(11,111,232,0.15)' }}>
                                <div className="fw-card-main-inner"><span className="fw-step">0{index + 1}</span><div className="fw-icon-bg"><span className="fw-icon-el">{item.icon}</span></div><h3>{item.title}</h3><p>{item.desc}</p><div className="fw-read-more-btn">Read More →</div></div>
                              </motion.div>
                              <div className="zigzag-connector-above">
                                <div className="zigzag-line-vert line-from-card-to-dot animate-line-grow" style={{ animationDelay: `${1.3 + (index * 0.12)}s` }}></div>
                                <div className="zigzag-dot animate-dot-pop" style={{ animationDelay: `${1.2 + (index * 0.12)}s` }}><div className="zigzag-dot-inner"></div><div className="zigzag-dot-ripple"></div></div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="zigzag-connector-below">
                                <div className="zigzag-dot animate-dot-pop" style={{ animationDelay: `${1.2 + (index * 0.12)}s` }}><div className="zigzag-dot-inner"></div><div className="zigzag-dot-ripple"></div></div>
                                <div className="zigzag-line-vert line-from-dot-to-card animate-line-grow" style={{ animationDelay: `${1.3 + (index * 0.12)}s` }}></div>
                              </div>
                              <motion.div className="fw-card-main" onClick={() => openModal(item, index)} whileHover={{ y: -8, boxShadow: '0 14px 40px rgba(11,111,232,0.15)' }}>
                                <div className="fw-card-main-inner"><span className="fw-step">0{index + 1}</span><div className="fw-icon-bg"><span className="fw-icon-el">{item.icon}</span></div><h3>{item.title}</h3><p>{item.desc}</p><div className="fw-read-more-btn">Read More →</div></div>
                              </motion.div>
                            </>
                          )}
                        </>
                      )}
                      {isMobile && (
                        <div className="fw-card-main" onClick={() => openModal(item, index)}>
                          <div className="fw-card-main-inner"><span className="fw-step">0{index + 1}</span><div className="fw-icon-bg"><span className="fw-icon-el">{item.icon}</span></div><h3>{item.title}</h3><p>{item.desc}</p></div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* ============ PROMAF - 3+3 GRID (6 cards) ============ */}
          {layoutType === 'graph' && (
            <div className="fw-flow-promaf">
              {!isMobile && (
                <svg className="promaf-bg-svg" viewBox="0 0 1200 420" preserveAspectRatio="none">
                  <motion.path
                    d="M250,80 L500,80 L750,80 L950,80 L900,340 L500,340 L100,340"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="8 4"
                    initial={{ pathLength: 0 }}
                    animate={isVisible ? { pathLength: 1 } : {}}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  {isVisible && (
                    <circle r="6" fill="#ffffff" opacity="0.9">
                      <animateMotion dur="3s" repeatCount="indefinite" begin="2s"
                        path="M250,80 L500,80 L750,80 L950,80 L900,340 L500,340 L100,340" />
                      <animate attributeName="opacity" values="0.9;0.5;0.9" dur="1s" repeatCount="indefinite" />
                    </circle>
                  )}
                </svg>
              )}

              <div className="promaf-cards-grid">
                {/* Row 1: Cards 01, 02, 03 */}
                <div className="promaf-row promaf-row-top">
                  {items.slice(0, 3).map((item, index) => (
                    <div key={index} className="promaf-card-wrapper animate-card-reveal" style={{ animationDelay: `${2.2 + (index * 0.15)}s` }}>
                      <motion.div className="fw-card-main" onClick={() => openModal(item, index)}
                        whileHover={{ y: -12, boxShadow: '0 20px 50px rgba(11,111,232,0.2)', scale: 1.03 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}>
                        <div className="fw-card-main-inner">
                          <span className="fw-step">0{index + 1}</span>
                          <div className="fw-icon-bg"><motion.span className="fw-icon-el" whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }} transition={{ duration: 0.5 }}>{item.icon}</motion.span></div>
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                          <div className="fw-read-more-btn">Read More →</div>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
                {/* Row 2: Cards 06, 05, 04 */}
                <div className="promaf-row promaf-row-bottom">
                  {items.slice(3, 6).map((item, index) => (
                    <div key={index + 3} className="promaf-card-wrapper animate-card-reveal" style={{ animationDelay: `${2.2 + ((index + 3) * 0.15)}s` }}>
                      <motion.div className="fw-card-main" onClick={() => openModal(item, index + 3)}
                        whileHover={{ y: -12, boxShadow: '0 20px 50px rgba(11,111,232,0.2)', scale: 1.03 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}>
                        <div className="fw-card-main-inner">
                          <span className="fw-step">0{6 - index}</span>
                          <div className="fw-icon-bg"><motion.span className="fw-icon-el" whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }} transition={{ duration: 0.5 }}>{item.icon}</motion.span></div>
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                          <div className="fw-read-more-btn">Read More →</div>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ============ RE-FIVE - STACKED ============ */}
          {layoutType === 'stacked' && (
            <div className="fw-flow-stacked">
              {items.map((item, index) => {
                const isReversed = index === 1 || index === 3
                return (
                  <div key={index} className={`stacked-row ${index % 2 === 0 ? 'stacked-left' : 'stacked-right'} animate-card-reveal`} style={{ animationDelay: `${index * 0.15}s` }}>
                    {!isMobile && (
                      <div className="stacked-number">
                        <span className="animate-dot-pop" style={{ animationDelay: `${0.3 + (index * 0.15)}s` }}>0{index + 1}</span>
                      </div>
                    )}
                    <motion.div className="fw-card-stacked" onClick={() => openModal(item, index)} whileHover={{ y: -6, boxShadow: '0 14px 35px rgba(11,111,232,0.15)' }}>
                      <div className="fw-card-stacked-inner">
                        {isReversed ? (
                          <div className="stacked-header-rev">
                            <div className="fw-read-more-btn-sm">← Read More</div>
                            <div className="stacked-title-group stacked-title-right">
                              <h3>{item.title}</h3>
                              <p>{item.desc}</p>
                            </div>
                            <div className="fw-icon-bg"><span className="fw-icon-el">{item.icon}</span></div>
                          </div>
                        ) : (
                          <div className="stacked-header-reg">
                            <div className="fw-icon-bg"><span className="fw-icon-el">{item.icon}</span></div>
                            <div className="stacked-title-group"><h3>{item.title}</h3><p>{item.desc}</p></div>
                            <div className="fw-read-more-btn-sm">Read More →</div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                )
              })}
              <div className="stacked-bottom-spacer"></div>
            </div>
          )}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {modalOpen && selectedItem && (
          <motion.div className="fw-modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal}>
            <motion.div className="fw-modal-popup" initial={{ scale: 0.85, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.85, opacity: 0, y: 20 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} onClick={(e) => e.stopPropagation()}>
              <div className="fw-modal-popup-header"><div className="fw-modal-popup-icon"><span>{selectedItem.icon}</span></div><h2>{selectedItem.title}</h2></div>
              <div className="fw-modal-popup-body">{selectedItem.content}</div>
              <div className="fw-modal-popup-footer"><button className="fw-modal-close-btn" onClick={closeModal}>Close</button></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}