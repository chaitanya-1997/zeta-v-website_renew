import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactHero from '../components/Contact/ContactHero'
import WorldwideOffices from '../components/Contact/WorldwideOffices'
import Enquiries from '../components/Contact/Enquiries'
import ConnectWithUs from '../components/Contact/ConnectWithUs'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function ContactCmp() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location])

  return (
    <div className="contact-page">
      <Navbar />
      <ContactHero />
      <WorldwideOffices />
      <Enquiries />
      <ConnectWithUs />
      <Footer />
    </div>
  )
}