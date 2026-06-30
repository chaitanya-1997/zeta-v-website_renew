// IndustryCards.jsx
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { 
    FaUniversity, FaIndustry, FaHeartbeat, FaLandmark,
    FaArrowRight, FaMoneyBillWave, FaStore   // <-- Added FaStore
} from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi2'
import './IndustryCards.css'

const iconMap = {
    FaMoneyBillWave: FaMoneyBillWave,
    FaIndustry: FaIndustry,
    FaHeartbeat: FaHeartbeat,
    FaLandmark: FaLandmark,
    FaStore: FaStore,   // <-- New mapping for retail
}

const industryCardsData = [
    { 
        Icon: 'FaMoneyBillWave', 
        title: 'Financial Services', 
        id: 'financial', 
        tag: 'Banking · Fintech · Insurance',
        gradient: 'linear-gradient(135deg, #22a7f0, #6366f1)',
        color: '#22a7f0',
        lightBg: 'rgba(34, 167, 240, 0.08)',
        bgImage: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1920' 
    },
    { 
        Icon: 'FaIndustry', 
        title: 'Manufacturing', 
        id: 'manufacturing', 
        tag: 'Industry 4.0 · ERP · IIoT',
        gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
        color: '#34d399',
        lightBg: 'rgba(52, 211, 153, 0.08)',
        bgImage: 'https://images.pexels.com/photos/15893881/pexels-photo-15893881.jpeg' 
    },
    { 
        Icon: 'FaHeartbeat', 
        title: 'Healthcare', 
        id: 'healthcare', 
        tag: 'Telemedicine · EHR · AI',
        gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
        color: '#f472b6',
        lightBg: 'rgba(244, 114, 182, 0.08)',
        bgImage: 'https://images.pexels.com/photos/7723524/pexels-photo-7723524.jpeg' 
    },
    // NEW: Retail & Distribution
    { 
        Icon: 'FaStore', 
        title: 'Retail & Distribution', 
        id: 'retail', 
        tag: 'ERP · Commerce · Analytics',
        gradient: 'linear-gradient(135deg, #f97316, #fb923c)',
        color: '#f97316',
        lightBg: 'rgba(249, 115, 22, 0.08)',
        bgImage: 'https://images.pexels.com/photos/4487365/pexels-photo-4487365.jpeg'
    }
]

export default function IndustryCards({ active, setActive }) {
    const handleCardClick = (cardId) => {
        setActive(cardId)
        
        // Wait for state update and DOM render
        setTimeout(() => {
            const detailsSection = document.getElementById(cardId)
            if (detailsSection) {
                const headerOffset = 80
                const elementPosition = detailsSection.getBoundingClientRect().top
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                })
            }
        }, 200)
    }

    return (
        <section id="industries-cards" className="industry-cards-premium">
            {/* Background Decorations */}
            <div className="industry-cards-premium-bg">
                <div className="industry-cards-premium-blob icblob-1" />
                <div className="industry-cards-premium-blob icblob-2" />
                <div className="industry-cards-premium-blob icblob-3" />
            </div>
            <div className="industry-cards-premium-pattern" />

            <div className="industry-cards-premium-container">
                {/* Header */}
                <motion.div
                    className="industry-cards-premium-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="industry-cards-premium-label">
                        <span className="label-line" />
                        <span className="label-text">Industry Verticals</span>
                        <span className="label-line" />
                    </div>
                    
                    <h2 className="industry-cards-premium-title">
                        Industries We 
                        <span >Serve</span>
                        <span className="title-icon">✦</span>
                    </h2>
                    
                    <p className="industry-cards-premium-subtitle">
                        Driving digital transformation across regulated, complex industries.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="industry-cards-premium-grid">
                    {industryCardsData.map((card, i) => {
                        const IconComponent = iconMap[card.Icon]
                        const isActive = active === card.id
                        return (
                            <motion.button
                                key={card.id}
                                className={`industry-cards-premium-card ${isActive ? 'active' : ''}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                whileHover={{ y: -8 }}
                                onClick={() => handleCardClick(card.id)}
                                style={{ '--card-color': card.color }}
                            >
                                <div className="industry-cards-premium-card-glow" style={{ background: card.gradient }} />
                                
                                <div className="industry-cards-premium-card-image">
                                    <img src={card.bgImage} alt={card.title} />
                                    <div className="industry-cards-premium-card-overlay" style={{ background: card.gradient }} />
                                </div>
                                
                                <div className="industry-cards-premium-card-content">
                                    <div className="industry-cards-premium-card-icon" style={{ background: card.lightBg, color: card.color }}>
                                        <IconComponent />
                                    </div>
                                    
                                    <h3 className="industry-cards-premium-card-title">{card.title}</h3>
                                    <p className="industry-cards-premium-card-tag">{card.tag}</p>
                                    
                                    <div className="industry-cards-premium-card-footer">
                                        <span className="industry-cards-premium-card-cta" style={{ color: card.color }}>
                                            {isActive ? 'Active' : 'Explore'}
                                        </span>
                                        <div className="industry-cards-premium-card-arrow" style={{ background: card.gradient }}>
                                            <FaArrowRight />
                                        </div>
                                    </div>
                                    
                                    <div className="industry-cards-premium-card-line" style={{ background: card.gradient }} />
                                </div>
                            </motion.button>
                        )
                    })}
                </div>
            </div>

            {/* Bottom Edge */}
            <div className="industry-cards-premium-bottom" />
        </section>
    )
}