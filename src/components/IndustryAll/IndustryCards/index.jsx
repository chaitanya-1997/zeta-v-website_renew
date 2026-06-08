// src/components/IndustryAll/IndustryCards/Index.jsx
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { 
    FaUniversity, FaIndustry, FaHeartbeat, FaLandmark 
} from 'react-icons/fa'
import './IndustryCards.css'

const iconMap = {
    FaUniversity: FaUniversity,
    FaIndustry: FaIndustry,
    FaHeartbeat: FaHeartbeat,
    FaLandmark: FaLandmark,
}

// Embedded industry cards data
const industryCardsData = [
    { 
        Icon: 'FaUniversity', 
        title: 'Financial Services', 
        id: 'financial', 
        tag: 'Banking · Fintech · Insurance', 
        bgImage: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1920' 
    },
    { 
        Icon: 'FaIndustry', 
        title: 'Manufacturing', 
        id: 'manufacturing', 
        tag: 'Industry 4.0 · ERP · IIoT', 
        bgImage: 'https://images.pexels.com/photos/15893881/pexels-photo-15893881.jpeg' 
    },
    { 
        Icon: 'FaHeartbeat', 
        title: 'Healthcare', 
        id: 'healthcare', 
        tag: 'Telemedicine · EHR · AI', 
        bgImage: 'https://images.pexels.com/photos/7723524/pexels-photo-7723524.jpeg' 
    },
    { 
        Icon: 'FaLandmark', 
        title: 'Government', 
        id: 'government', 
        tag: 'Smart Cities · Cloud · GenAI', 
        bgImage: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1920' 
    },
]

export default function IndustryCards({ active, setActive }) {
    return (
        <section id="industries-cards" className="ind-cards">
            <div className="ind-cards__inner">
                <motion.div
                    className="ind-cards__head"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Industry Verticals</span>
                    <h2 className="section-title">
                        Industries We <span className="grad-text">Serve</span>
                    </h2>
                    <p className="section-subtitle">
                        Driving digital transformation across regulated, complex industries.
                    </p>
                </motion.div>

                <div className="ind-cards__grid">
                    {industryCardsData.map((card, i) => {
                        const IconComponent = iconMap[card.Icon]
                        const isActive = active === card.id
                        return (
                            <motion.button
                                key={card.id}
                                className={`ind-card ${isActive ? 'ind-card--active' : ''}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                whileHover={{ y: -8 }}
                                onClick={() => setActive(card.id)}
                            >
                                <motion.div 
                                    className="ind-card__bg"
                                    style={{ backgroundImage: `url(${card.bgImage})` }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                />
                                <div className="ind-card__overlay" />
                                <div className="ind-card__glow" />
                                <div className="ind-card__icon-wrap">
                                    <IconComponent className="ind-card__icon" />
                                </div>
                                <h3 className="ind-card__title">{card.title}</h3>
                                <p className="ind-card__tag">{card.tag}</p>
                                <span className="ind-card__cta">
                                    {isActive ? 'Viewing' : 'Explore'} <FiArrowUpRight />
                                </span>
                                <div className="ind-card__bar" />
                            </motion.button>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}