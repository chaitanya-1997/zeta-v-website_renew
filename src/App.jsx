<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomeCmp from './pages/HomeCmp'
import ExpertiseCmp from './pages/ExpertiseCmp'
import AcceleratorCmp from './pages/AcceleratorCmp'
import GalleryCmp from './pages/GalleryCmp'
import ContactCmp from './pages/ContactCmp'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeCmp />} />
                <Route path="/expertise" element={<ExpertiseCmp />} />
                <Route path="/accelerator" element={<AcceleratorCmp />} />
                <Route path="/gallery" element={<GalleryCmp />} />
                <Route path="/contact" element={<ContactCmp />} />
            </Routes>
        </BrowserRouter>
    )
}
=======
import HomeCmp from './pages/HomeCmp'

export default function App() {
    return <HomeCmp />
}
>>>>>>> e60c9f9eb002ec8dddc0358163172988aa51e322
