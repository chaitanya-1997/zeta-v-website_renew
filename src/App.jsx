import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeCmp from './pages/HomeCmp'
import AboutUs from './pages/AboutUs'
import Romicons from './pages/Romicons';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeCmp />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/romicons" element={<Romicons />} />
            </Routes>
        </BrowserRouter>
    )
}