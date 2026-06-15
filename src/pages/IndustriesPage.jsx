// src/pages/IndustriesPage.jsx
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import FooterSection from '../components/Footer'
import IndustryHero from '../components/IndustryAll/IndustryHero'
import IndustryCards from '../components/IndustryAll/IndustryCards'
import IndustryDetail from '../components/IndustryAll/IndustryDetail'
import IndustryCTA from '../components/IndustryAll/IndustryCTA'

export default function IndustriesPage() {
    const location = useLocation()
    const [activeIndustry, setActiveIndustry] = useState('financial')
    const [shouldAutoScroll, setShouldAutoScroll] = useState(false)

    // Check for navigation state when component mounts or location changes
    useEffect(() => {
        // If coming from home page with selected industry (Learn More button)
        if (location.state && location.state.activeIndustry) {
            setActiveIndustry(location.state.activeIndustry)
            setShouldAutoScroll(true) // Enable auto-scroll to detail section
        } 
        // If coming from Explore Industry Solutions button
        else if (location.state && location.state.scrollToTop) {
            setShouldAutoScroll(false)
            // Scroll to top of the page
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }, 100)
        }
        else {
            setShouldAutoScroll(false)
        }
    }, [location])

    return (
        <>
            <Navbar />
            <main className="ind-page-main">
                <IndustryHero />
                <IndustryCards 
                    active={activeIndustry} 
                    setActive={setActiveIndustry}
                />
                <AnimatePresence mode="wait">
                    <IndustryDetail
                        key={activeIndustry}
                        industryKey={activeIndustry}
                        shouldAutoScroll={shouldAutoScroll}
                    />
                </AnimatePresence>
                <IndustryCTA />
            </main>
            <FooterSection />
        </>
    )
}