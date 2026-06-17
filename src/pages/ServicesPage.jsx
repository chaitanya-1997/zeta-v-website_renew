// src/components/ServicesAll/Index.jsx
import Navbar from '../components/Navbar'
import FooterSection from '../components/Footer'
import ServicesHero from '../components/ServicesAll/ServicesHero'
import ServicesDetailed from '../components/ServicesAll/ServicesDetailed'
import ServicesHowWeWork from '../components/ServicesAll/ServicesHowWeWork'
import ServicesCaseStudies from '../components/ServicesAll/ServicesCaseStudies'
import ServicesWhyChoose from '../components/ServicesAll/ServicesWhyChoose'
import ServicesTechStack from '../components/ServicesAll/ServicesTechStack'
import ServicesTestimonials from '../components/ServicesAll/ServicesTestimonials'
import ServicesFAQ from '../components/ServicesAll/ServicesFAQ'
import ServicesCTA from '../components/ServicesAll/ServicesCTA'

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="svc-page-main">
         <ServicesHero />
      <ServicesDetailed />
      <ServicesHowWeWork />
      <ServicesCaseStudies />
      <ServicesWhyChoose />
      <ServicesTechStack />
      <ServicesTestimonials />
      <ServicesFAQ />
      <ServicesCTA />
      </main>
      <FooterSection />
    </>
  )
}