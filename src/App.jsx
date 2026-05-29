import { Routes, Route } from 'react-router-dom'
import HomeCmp from './pages/HomeCmp'


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomeCmp />} />
          
        </Routes>
    )
}