import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Check, Building2, Factory, HeartPulse, Landmark } from 'lucide-react';
import './IndustryCards.css';

const industryCardsData = [
  { id: 'financial', icon: Building2, title: 'Financial Services', tag: 'Banking · Fintech · Insurance', accentColor: '#3B82F6', gradientFrom: '#1e40af', gradientTo: '#3B82F6', glowColor: 'rgba(59,130,246,0.25)', cardBg: 'rgba(59,130,246,0.08)', cardBorder: 'rgba(59,130,246,0.18)', bgImage: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1920' },
  { id: 'manufacturing', icon: Factory, title: 'Manufacturing', tag: 'Industry 4.0 · ERP · IIoT', accentColor: '#F59E0B', gradientFrom: '#92400e', gradientTo: '#F59E0B', glowColor: 'rgba(245,158,11,0.25)', cardBg: 'rgba(245,158,11,0.08)', cardBorder: 'rgba(245,158,11,0.18)', bgImage: 'https://images.pexels.com/photos/15893881/pexels-photo-15893881.jpeg' },
  { id: 'healthcare', icon: HeartPulse, title: 'Healthcare', tag: 'Telemedicine · EHR · AI', accentColor: '#10B981', gradientFrom: '#065f46', gradientTo: '#10B981', glowColor: 'rgba(16,185,129,0.25)', cardBg: 'rgba(16,185,129,0.08)', cardBorder: 'rgba(16,185,129,0.18)', bgImage: 'https://images.pexels.com/photos/7723524/pexels-photo-7723524.jpeg' },
  { id: 'government', icon: Landmark, title: 'Government', tag: 'Smart Cities · Cloud · GenAI', accentColor: '#8B5CF6', gradientFrom: '#5b21b6', gradientTo: '#8B5CF6', glowColor: 'rgba(139,92,246,0.25)', cardBg: 'rgba(139,92,246,0.08)', cardBorder: 'rgba(139,92,246,0.18)', bgImage: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1920' },
];

const IndustryCards = ({ active, setActive, isDimmed, setIsDimmed }) => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const handleCardClick = (cardId) => {
    if (active === cardId) return;
    setActive(cardId);
    setIsDimmed(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 200 && isDimmed) { setIsDimmed(false); setActive('financial'); }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDimmed, setIsDimmed, setActive]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  // Header animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.1, ease: "easeOut" } }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  const accentBarVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { scaleX: 1, opacity: 1, transition: { duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  const descVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <section id="industries-cards" className={`industries-section ${isDimmed ? 'industries-section--dimmed' : ''}`} ref={sectionRef}>
      {/* Background image with parallax */}
      <motion.div className="industries-bg" style={{ y: bgY }} />

      <div className="industries-container">
        {/* Section Header */}
        <motion.div className="section-header" variants={headerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          
          {/* Pill Badge */}
          <motion.div className="section-kicker" variants={badgeVariants}>
            <span className="section-kicker-dot" />
            <span className="section-kicker-text">Industry Verticals</span>
          </motion.div>

          {/* Heading */}
          <motion.h2 className="section-title" variants={titleVariants}>
            Industries We Shape
          </motion.h2>

          {/* Accent Bar */}
          <motion.div className="section-accent-bar" variants={accentBarVariants} />

          {/* Description */}
          <motion.p className="section-description" variants={descVariants}>
            Select an industry to explore tailored solutions, case studies, 
            and technology frameworks for mission-critical environments.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div className="industry-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-30px' }}>
          {industryCardsData.map((card) => {
            const IconComponent = card.icon;
            const isActive = active === card.id;
            return (
              <motion.button key={card.id} className={`industry-card ${isActive ? 'industry-card--active' : ''}`} variants={cardVariants} onClick={() => handleCardClick(card.id)} whileHover={{ y: -8 }} whileTap={{ scale: 0.98 }}
                style={{ '--accent-color': card.accentColor, '--gradient-from': card.gradientFrom, '--gradient-to': card.gradientTo, '--glow-color': card.glowColor, background: card.cardBg, borderColor: card.cardBorder }}>
                <div className="industry-card__bg" style={{ backgroundImage: `url(${card.bgImage})` }} />
                <div className="industry-card__overlay" />
                <div className="industry-card__content">
                  <motion.div className="industry-card__icon-wrap" whileHover={{ scale: 1.08 }} transition={{ duration: 0.3 }}>
                    <IconComponent className="industry-card__icon" />
                  </motion.div>
                  <div className="industry-card__text">
                    <h3 className="industry-card__title">{card.title}</h3>
                    <p className="industry-card__tag">{card.tag}</p>
                  </div>
                  <div className="industry-card__indicator">
                    <span className="industry-card__indicator-label">{isActive ? 'Selected' : 'Explore'}</span>
                    {isActive ? <Check size={16} /> : <ArrowRight size={16} />}
                  </div>
                </div>
                <div className="industry-card__bar" />
              </motion.button>
            );
          })}
        </motion.div>

        <AnimatePresence>
          {isDimmed && (
            <motion.p className="industries-hint" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4, delay: 0.3 }}>
              Scroll down to explore{' '}
              <span style={{ color: industryCardsData.find(c => c.id === active)?.accentColor || '#3B82F6', fontWeight: 600 }}>
                {industryCardsData.find(c => c.id === active)?.title || 'industry'}
              </span>{' '}
              solutions ↓
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default IndustryCards;