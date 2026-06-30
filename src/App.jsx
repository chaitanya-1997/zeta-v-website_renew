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
import Romicons from './pages/Romicons'
import Bookkeeping from './components/ServicesAll/BookkeepingServices'
import Leadership from './components/Leadership'
import PricingCalculator from './components/ServicesAll/BookkeepingServices/PricingCalculator' 
 import DigitalFootprint from "./components/ServicesAll/BookkeepingServices/DigitalFootprint";
import ChatBox from "./components/ChatBox/ChatBox";
export default function App() {
    return (
        <>
            <ScrollNav />
            <Routes>
                <Route path="/" element={<HomeCmp />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/:id" element={<ServicesPage />} />
                <Route path="/industries" element={<IndustriesPage />} />
                <Route path="/industries/:id" element={<IndustriesPage />} />
                <Route path="/careers" element={<CareersPage />    } />
                <Route path="/expertise" element={<ExpertiseCmp />} />
                <Route path="/accelerator" element={<AcceleratorCmp />} />
                <Route path="/contact" element={<ContactCmp />} />
                <Route path="/gallery" element={<GalleryCmp />} />

                <Route path="/romicons" element={<Romicons />} />
                <Route path='/bookkeeping' element={<Bookkeeping></Bookkeeping>}/>
                 <Route path="/leadership" element={<Leadership />} />
                 <Route path='/calculator' element={<PricingCalculator/>}/>
 <Route path="/digitalfootprint" element={<DigitalFootprint/>} />
            </Routes>
            <ChatBox/>
        </>
    )
}