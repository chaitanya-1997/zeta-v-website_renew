import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AcceleratorHero from '../components/Accelerator/AcceleratorHero'
import KeyFocus from '../components/Accelerator/KeyFocus'
import HighImpact from '../components/Accelerator/HighImpact'
import HexaFit from '../components/Accelerator/HexaFit'
import Promaf from '../components/Accelerator/Promaf'
import Refive from '../components/Accelerator/Refive'

export default function AcceleratorCmp() {
  return (
    <div className="accelerator-page">
      <Navbar />
      <AcceleratorHero />
      <KeyFocus />
      <HighImpact />
      <HexaFit />
      <Promaf />
      <Refive />
      <Footer />
    </div>
  )
}