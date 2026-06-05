import React from "react";

import "./AboutUs.css";
import Hero from "../components/About Us/Hero";
import OurStory from "../components/About Us/OurStory";
import OurJourney from "../components/About Us/OurJourney";
import Vision from "../components/About Us/Vision";
import Mission from "../components/About Us/Mission";
import Values from "../components/About Us/Values";
import Leadership from "../components/About Us/Leadership";
import WhyChooseUs from "../components/About Us/WhyChooseUs";
import DevProcess from "../components/About Us/DevProcess";
import Partners from "../components/About Us/Partners";
import Gallery from "../components/About Us/Gallery";
import Culture from "../components/About Us/Culture";
import CTA from "../components/About Us/CTA";
import Navbar from '../components/Navbar';
import FooterSection from '../components/Footer'



const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <main>
      <Hero />
      <OurStory />
      <OurJourney />
      {/* Mission + Vision Section */}
       <div className="mission-vision-section">
        <Mission />
        <Vision />
      </div>
      <Values />
      <WhyChooseUs />
      <DevProcess />
      <Leadership />
      <Partners />
      <Gallery />
      <Culture />
      <CTA />
    </main>
    <FooterSection />
    </>
  );
};

export default AboutUs;