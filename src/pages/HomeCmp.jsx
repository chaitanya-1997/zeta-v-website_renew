import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero'
import ClientLogosStrip from '../components/ClientLogos'
import ChallengesSection from '../components/Challenges'
import WhyZetaV from '../components/WhyZetaV'
import IndustriesSection from '../components/Industries'
import ServicesSection from '../components/Services'
import HowWeWork from '../components/HowWeWork'
import SuccessStories from '../components/SuccessStories'
import TeamStats from '../components/TeamStats'
import AwardsPartners from '../components/AwardsPartners'
import ContactSection from '../components/Contact'
import FooterSection from '../components/Footer'

export default function HomeCmp() {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <ClientLogosStrip />
                <ChallengesSection />
                <WhyZetaV />
                <IndustriesSection />
                <ServicesSection />
                <HowWeWork />
                <SuccessStories />
                <TeamStats />
                <AwardsPartners />
                <ContactSection />
            </main>
            <FooterSection />
        </>
    )
}
