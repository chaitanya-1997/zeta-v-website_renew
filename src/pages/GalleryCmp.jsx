import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GalleryHero from "../components/Gallery/GalleryHero"
import GalleryGrid from "../components/Gallery/GalleryGrid"
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
export default function GalleryCmp() {
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
    <div className="gallery-page">
      <Navbar />
      <GalleryHero />
      <GalleryGrid />
      <Footer />
    </div>
  )
}