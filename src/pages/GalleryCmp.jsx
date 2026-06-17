import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GalleryHero from "../components/Gallery/GalleryHero"
import GalleryGrid from "../components/Gallery/GalleryGrid"

export default function GalleryCmp() {
  return (
    <div className="gallery-page">
      <Navbar />
      <GalleryHero />
      <GalleryGrid />
      <Footer />
    </div>
  )
}