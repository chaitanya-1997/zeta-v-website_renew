import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactHero from '../components/Contact/ContactHero'
import WorldwideOffices from '../components/Contact/WorldwideOffices'
import Enquiries from '../components/Contact/Enquiries'
import ConnectWithUs from '../components/Contact/ConnectWithUs'

export default function ContactCmp() {
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