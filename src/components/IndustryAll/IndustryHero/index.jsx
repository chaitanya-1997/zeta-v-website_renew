// src/components/IndustryAll/IndustryHero/Index.jsx
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './IndustryHero.css'

export default function IndustryHero() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const y = useTransform(scrollYProgress, [0, 1], [0, 100])

    return (
        <section className="hero" ref={ref}>
            <div className="hero__bg">
                <motion.div 
                    className="hero__bg-image"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.25, 0.1, 0.1, 1] }}
                    style={{
                        backgroundImage: `url('https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg')`,
                    }}
                />
                <div className="hero__bg-overlay"></div>
            </div>

            <div className="hero__stars">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="star"></div>
                ))}
            </div>

            <div className="hero__orb hero__orb--1" />
            <div className="hero__orb hero__orb--2" />
            <div className="hero__orb hero__orb--3" />

            <div className="hero__inner">
                <div className="hero__left">
                    <motion.span className="hero__overline" style={{ y }}>
                        Industry Solutions
                    </motion.span>
                    <motion.h1 className="hero__h1" style={{ y }}>
                        <span className="hero__h1a">Digital Transformation</span>
                        <span className="hero__h1b">
                            for <span className="grad-text">Every Industry</span>
                        </span>
                    </motion.h1>
                    <motion.p className="hero__sub" style={{ y }}>
                        Zeta-V delivers IT consulting services across financial services, manufacturing,
                        healthcare, and government — solving complex challenges with AI, cloud, data
                        analytics, and intelligent automation.
                    </motion.p>
                    <motion.div className="hero__ctas" style={{ y }}>
                        <a href="#industries-cards" className="btn-grad">
                            Explore Industries →
                        </a>
                        <a href="#contact" className="btn-outline">
                            Talk to Our Experts
                        </a>
                    </motion.div>
                </div>
            </div>

            <motion.div 
                className="hero__scroll"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <span>Scroll to explore</span>
                <div className="hero__scroll-dot" />
            </motion.div>
        </section>
    )
}