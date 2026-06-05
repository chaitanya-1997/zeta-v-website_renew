import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/globals.css'
import ScrollToTop from './components/ScrollToTop.jsx'
import Navbar from './components/Navbar/index.jsx'
import FooterSection from './components/Footer/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
          
            <Navbar />
            <App />
           
        </BrowserRouter>
    </React.StrictMode>,
)
