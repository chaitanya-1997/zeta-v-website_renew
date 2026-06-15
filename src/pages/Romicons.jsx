

import Hero from "../components/Romicons/Hero";
import GrowthAdvisory from "../components/Romicons/GrowthAdvisory";
import MarketAdvisory from "../components/Romicons/MarketAdvisory";
import DealAdvisory from "../components/Romicons/DealAdvisory";
import TechAdvisory from "../components/Romicons/TechAdvisory";
import CTA from "../components/Romicons/CTA";
import Navbar from '../components/Navbar';
import FooterSection from '../components/Footer'

const Romicons = () => {
  return (
    <>
    <Navbar/>
    <main>
      <Hero />
      <GrowthAdvisory />
      <MarketAdvisory />
      <DealAdvisory />
      <TechAdvisory />
      <CTA />
    </main>
    <FooterSection />
    </>
  );
};

export default Romicons;