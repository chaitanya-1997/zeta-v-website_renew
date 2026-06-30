// IndustryCTA.jsx
import { motion } from 'framer-motion'
import { 
  FaArrowRight, 
  FaHandshake, 
  FaRocket, 
  FaChartLine,
  FaCheckCircle
} from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi2'
import './IndustryCTA.css'
import { Link } from 'react-router-dom';

export default function IndustryCTA() {
    return (
        <section className="industry-cta-premium">
            {/* Background */}
            <div className="industry-cta-premium-bg">
                <div 
                    className="industry-cta-premium-bg-image"
                    style={{
                        backgroundImage: `url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
                    }}
                />
                <div className="industry-cta-premium-overlay">
                    <div className="industry-cta-premium-gradient" />
                </div>
            </div>

            {/* Animated Orbs */}
            <div className="industry-cta-premium-orbs">
                <div className="icta-orb icta-orb-1" />
                <div className="icta-orb icta-orb-2" />
                <div className="icta-orb icta-orb-3" />
            </div>

            {/* Floating Particles */}
            <div className="industry-cta-premium-particles">
                {[...Array(15)].map((_, i) => (
                    <div 
                        key={i} 
                        className="particle-icta" 
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`,
                            animationDuration: `${8 + Math.random() * 12}s`,
                            width: `${2 + Math.random() * 5}px`,
                            height: `${2 + Math.random() * 5}px`,
                            background: ['#22a7f0', '#6366f1', '#a78bfa', '#34d399'][Math.floor(Math.random() * 4)]
                        }}
                    />
                ))}
            </div>

            <div className="industry-cta-premium-container">
                <motion.div
                    className="industry-cta-premium-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Badge */}
                    <motion.div 
                        className="industry-cta-premium-badge"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <HiOutlineSparkles className="badge-icon-icta" />
                        <span>Let's Build Together</span>
                    </motion.div>

                    {/* Icon */}
                    <motion.div 
                        className="industry-cta-premium-icon"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <FaHandshake />
                    </motion.div>

                    {/* Title */}
                    <motion.h2 
                        className="industry-cta-premium-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        Your Industry. Your Challenges.
                        <br />
                        {/* <span className="gradient-text-icta">Our Expertise.</span> */}
                          <span >Our Expertise.</span>
                        <span className="title-icon-icta">✦</span>
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p 
                        className="industry-cta-premium-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        Tell us your industry and what you're trying to solve — we'll match you with the
                        right specialist within 24 hours.
                    </motion.p>

                    {/* Actions */}
                    <motion.div 
                        className="industry-cta-premium-actions"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                   <Link 
 to="/contact"
  state={{ scrollTo: 'enquiries' }} 
  className="industry-cta-premium-btn primary"
//   onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  <span>Talk to a Specialist</span>
  <FaArrowRight />
</Link>
                        {/* <a href="#contact" className="industry-cta-premium-btn secondary">
                            See All Case Studies
                        </a> */}
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div 
                        className="industry-cta-premium-trust"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <div className="icta-trust-item">
                            <FaCheckCircle className="trust-icon" />
                            <span>50+ Industry Experts</span>
                        </div>
                        <div className="icta-trust-divider" />
                        <div className="icta-trust-item">
                            <FaRocket className="trust-icon" />
                            <span>242+ Projects Delivered</span>
                        </div>
                        <div className="icta-trust-divider" />
                        <div className="icta-trust-item">
                            <FaChartLine className="trust-icon" />
                            <span>98% Client Retention</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Edge */}
            <div className="industry-cta-premium-bottom" />
        </section>
    )
}