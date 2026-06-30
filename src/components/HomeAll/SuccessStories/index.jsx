// SuccessStories.jsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiOutlineUser,
  HiOutlineStar,
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiChatBubbleLeft ,
  HiOutlineSparkles
} from 'react-icons/hi2';
import './SuccessStories.css';

const stories = [
  {
    text: "We are grateful to the Zeta-V team for your great support in migrating our email server from Linode to ZOHO. We greatly appreciate the excellent technical IT work your team has done.",
    author: "Founder & CEO",
    company: "Fintech",
    position: "Leading Fintech in private wealth management",
    initials: "FC",
    color: "#22a7f0",
    gradient: "linear-gradient(135deg, #22a7f0, #6366f1)"
  },
  {
    text: "It has been a while since we have witnessed such quality and precision of project delivery. Thank you, Zeta-V, for a job well done in the acquisition and transformation program.",
    author: "CEO – Asia",
    company: "Manufacturing",
    position: "Global leader in precision manufacturing",
    initials: "CE",
    color: "#34d399",
    gradient: "linear-gradient(135deg, #34d399, #06b6d4)"
  },
  {
    text: "I would like to extend my sincere appreciation to the Zeta-V team for guiding and helping us with strategy formulation and RFP processes. Your insights made the journey pleasant.",
    author: "CIO & Head of IT",
    company: "Banking",
    position: "World leading multilateral bank in Asia",
    initials: "CI",
    color: "#f472b6",
    gradient: "linear-gradient(135deg, #f472b6, #ec4899)"
  }
];

export default function SuccessStories() {
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % stories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const nextSlide = () => {
    setActive(prev => (prev + 1) % stories.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 8000);
  };

  const prevSlide = () => {
    setActive(prev => (prev - 1 + stories.length) % stories.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 8000);
  };

  const goToSlide = (index) => {
    setActive(index);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 8000);
  };

  const current = stories[active];

  return (
    <section className="success-premium">
      {/* Background Decorations */}
      <div className="success-premium-bg">
        <div className="success-premium-blob sblob-1" />
        <div className="success-premium-blob sblob-2" />
        <div className="success-premium-blob sblob-3" />
      </div>

      <div className="success-premium-container">
        {/* Header */}
        <motion.div 
          className="success-premium-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="success-premium-label">
            <span className="label-line" />
            <span className="label-text">Client Success Stories</span>
            <span className="label-line" />
          </div>
          
          <h2 className="success-premium-title">
            What Our{' '}
            {/* <span className="gradient-text-success">Clients Say</span> */}
             <span >Clients Say</span>
            <span className="title-icon">✦</span>
          </h2>
          
          <p className="success-premium-subtitle">
            Real results from real partnerships — hear directly from our clients
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="success-premium-carousel">
          <div className="success-premium-card-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="success-premium-card"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ '--card-color': current.color }}
              >
                <div className="success-premium-card-glow" style={{ background: current.gradient }} />
                
                {/* Quote Icon */}
                <div className="success-premium-quote">
                  <HiChatBubbleLeft  />
                </div>

                {/* Company Badge */}
                <div className="success-premium-company">
                  <div className="success-premium-company-icon" style={{ background: current.gradient }}>
                    {current.company.charAt(0)}
                  </div>
                  <span className="success-premium-company-name">{current.company}</span>
                </div>

                {/* Testimonial */}
                <p className="success-premium-text">"{current.text}"</p>

                {/* Author */}
                <div className="success-premium-author">
                  <div className="success-premium-avatar" style={{ background: current.gradient }}>
                    {current.initials}
                  </div>
                  <div className="success-premium-author-info">
                    <h4 className="success-premium-author-name">{current.author}</h4>
                    <p className="success-premium-author-position">{current.position}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="success-premium-rating">
                  {[...Array(5)].map((_, i) => (
                    <HiOutlineStar key={i} className="star" />
                  ))}
                </div>

                <div className="success-premium-card-line" style={{ background: current.gradient }} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="success-premium-nav">
            <button className="success-premium-arrow" onClick={prevSlide}>
              <HiOutlineArrowLeft />
            </button>

            <div className="success-premium-dots">
              {stories.map((_, index) => (
                <button
                  key={index}
                  className={`success-premium-dot ${index === active ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  style={{
                    background: index === active ? current.gradient : 'rgba(15, 23, 42, 0.1)'
                  }}
                />
              ))}
            </div>

            <button className="success-premium-arrow" onClick={nextSlide}>
              <HiOutlineArrowRight />
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
   
      </div>

      {/* Bottom Edge */}
      <div className="success-premium-bottom" />
    </section>
  );
}