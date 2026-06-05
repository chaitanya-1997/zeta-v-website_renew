import './GalleryCmp.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GalleryGrid from '../components/Gallery/GalleryGrid'

export default function GalleryCmp() {
  return (
    <div className="gallery-page">
      <Navbar />
      <GalleryGrid />
      <Footer />
    </div>
  )
}