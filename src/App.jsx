import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import HomeCmp from './pages/HomeCmp'
import ServicesPage from './pages/ServicesPage'
import IndustriesPage from './pages/IndustriesPage'
import CareersPage from '../src/components/Career/CareersPage'

import InteractiveOfficeGlobe from './components/Contact/InteractiveOfficeGlobe'
export default function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomeCmp />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/industries" element={<IndustriesPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/contact" element={<InteractiveOfficeGlobe />} />
            </Routes>
        </>
    )
}
