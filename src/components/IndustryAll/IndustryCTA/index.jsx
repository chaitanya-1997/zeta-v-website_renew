// src/components/IndustryAll/IndustryCTA/Index.jsx
import { motion } from 'framer-motion'
import './IndustryCTA.css'

export default function IndustryCTA() {
    return (
        <section className="ind-cta">
            <div className="ind-cta__bg">
                <motion.div 
                    className="ind-cta__bg-image"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    style={{
                        backgroundImage: `url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
                    }}
                />
                <div className="ind-cta__bg-overlay"></div>
            </div>
            <div className="ind-cta__orb ind-cta__orb--1" />
            <div className="ind-cta__orb ind-cta__orb--2" />

            <motion.div
                className="ind-cta__inner"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
            >
                <span className="hero__overline">Let's Build Together</span>
                <h2 className="hero__h1" style={{ marginBottom: '20px' }}>
                    <span className="hero__h1a">Your Industry. Your Challenges.</span>
                    <span className="hero__h1b"><span className="grad-text">Our Expertise.</span></span>
                </h2>
                <p className="hero__sub" style={{ marginBottom: '36px' }}>
                    Tell us your industry and what you're trying to solve — we'll match you with the
                    right specialist within 24 hours.
                </p>
                <div className="hero__ctas">
                    <a href="#contact" className="btn-grad">
                        Talk to a Specialist →
                    </a>
                    <a href="#contact" className="btn-outline">
                        See All Case Studies
                    </a>
                </div>
            </motion.div>
        </section>
    )
}