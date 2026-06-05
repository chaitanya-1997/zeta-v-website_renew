// HomeCmp.jsx
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
import ScrollNav from '../components/Scroller'

export default function HomeCmp() {
  return (
    <>
      <Navbar />
      <ScrollNav />
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