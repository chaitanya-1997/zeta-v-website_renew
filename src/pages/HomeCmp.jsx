// HomeCmp.jsx
import Navbar from '../components/Navbar'
import HeroSection from '../components/HomeAll/Hero'
import ClientLogosStrip from '../components/HomeAll/ClientLogos'
import ChallengesSection from '../components/HomeAll/Challenges'
import WhyZetaV from '../components/HomeAll/WhyZetaV'
import IndustriesSection from '../components/HomeAll/Industries'
import ServicesSection from '../components/HomeAll/Services'
import HowWeWork from '../components/HomeAll/HowWeWork'
import SuccessStories from '../components/HomeAll/SuccessStories'
import TeamStats from '../components/HomeAll/TeamStats'
import AwardsPartners from '../components/HomeAll/AwardsPartners'
import ContactSection from '../components/HomeAll/Contact'
import FooterSection from '../components/Footer'

export default function HomeCmp() {
  return (
    <>
      <Navbar />

      <main>
        <section id="about"><HeroSection /></section>
        <section id="clients"><ClientLogosStrip /></section>
        
        {/* Challenges and Why Choose Us with shared background */}
        <div className="shared-bg-wrapper">
          <section id="challenges"><ChallengesSection /></section>
          <section id="why-zeta"><WhyZetaV /></section>
        </div>
        
        <section id="industries"><IndustriesSection /></section>
        <section id="services"><ServicesSection /></section>
        <section id="how-we-work"><HowWeWork /></section>
        <section id="success-stories"><SuccessStories /></section>
        <section id="stats"><TeamStats /></section>
        {/* <section id="awards"><AwardsPartners /></section> */}
        <section id="contact"><ContactSection /></section>
        <FooterSection />
      </main>
    </>
  )
}