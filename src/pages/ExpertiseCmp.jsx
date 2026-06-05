import './ExpertiseCmp.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import HeroSection from '../components/Expertise/HeroSection'
import TechStack from '../components/Expertise/TechStack'
import ProjectsDelivered from '../components/Expertise/ProjectsDelivered'
import Services from '../components/Expertise/Services'

export default function ExpertiseCmp() {
    return (
        <div className="expertise-page">

            <Navbar />

            <HeroSection />

            <TechStack />

            <ProjectsDelivered />

            <Services />

            <Footer />

        </div>
    )
}