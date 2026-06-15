

// src/components/IndustryAll/Index.jsx
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import FooterSection from '../components/Footer'
import IndustryHero from '../components/IndustryAll/IndustryHero'
import IndustryCards from '../components/IndustryAll/IndustryCards'
import IndustryDetail from '../components/IndustryAll/IndustryDetail'
import IndustryCTA from '../components/IndustryAll/IndustryCTA'


export default function IndustriesPage() {
    const [activeIndustry, setActiveIndustry] = useState('financial')

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
                />
            </AnimatePresence>
            <IndustryCTA />
        </main>
            <FooterSection />
        </>
    )
}