import { Routes, Route } from 'react-router-dom'
import HomeCmp from './pages/HomeCmp'
import ServicesPage from './pages/ServicesPage'
import IndustriesPage from './pages/IndustriesPage'
import ScrollNav from './components/Scroller'
import AboutUs from './pages/AboutUs'
import CareersPage from './pages/CareersPage'
import ExpertiseCmp from './pages/ExpertiseCmp'
import AcceleratorCmp from './pages/AcceleratorCmp'
import ContactCmp from './pages/ContactCmp'
import GalleryCmp from './pages/GalleryCmp'

export default function App() {
    return (
        <>
            <ScrollNav />
            <Routes>
                <Route path="/" element={<HomeCmp />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/industries" element={<IndustriesPage />} />
                <Route path="/careers" element={<CareersPage />    } />
                <Route path="/expertise" element={<ExpertiseCmp />} />
                <Route path="/accelerator" element={<AcceleratorCmp />} />
                <Route path="/contact" element={<ContactCmp />} />
                <Route path="/gallery" element={<GalleryCmp />} />
            </Routes>
        </>
    )
}