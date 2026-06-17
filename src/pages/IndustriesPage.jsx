import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import FooterSection from '../components/Footer'
import IndustryHero from '../components/IndustryAll/IndustryHero'
import IndustryCards from '../components/IndustryAll/IndustryCards'
import IndustryDetail from '../components/IndustryAll/IndustryDetail'
import IndustryCTA from '../components/IndustryAll/IndustryCTA'

export default function IndustriesPage() {
    const location = useLocation()
    const [activeIndustry, setActiveIndustry] = useState('financial')
    const [isDimmed, setIsDimmed] = useState(false)

    useEffect(() => {
        if (location.state && location.state.activeIndustry) {
            setActiveIndustry(location.state.activeIndustry)
        }
    }, [location])

    useEffect(() => {
        setIsDimmed(false)
    }, [activeIndustry])

    return (
        <>
            <Navbar />
            <main className="ind-page-main">
                <IndustryHero />
                <IndustryCards 
                    active={activeIndustry} 
                    setActive={setActiveIndustry}
                    isDimmed={isDimmed}
                    setIsDimmed={setIsDimmed}
                />
                {/* No AnimatePresence, no key — section stays mounted */}
                <IndustryDetail industryKey={activeIndustry} />
                <IndustryCTA />
            </main>
            <FooterSection />
        </>
    )
}