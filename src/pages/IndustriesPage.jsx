// src/pages/IndustriesPage.jsx
import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import FooterSection from '../components/Footer'
import IndustryHero from '../components/IndustryAll/IndustryHero'
import IndustryCards from '../components/IndustryAll/IndustryCards'
import IndustryDetail from '../components/IndustryAll/IndustryDetail'
import IndustryCTA from '../components/IndustryAll/IndustryCTA'

export default function IndustriesPage() {
  const location = useLocation()
  const [activeIndustry, setActiveIndustry] = useState('financial')
  const [shouldAutoScroll, setShouldAutoScroll] = useState(false)
  const hasScrolledRef = useRef(false)
  const pendingScrollRef = useRef(null) // NEW

  // NEW: Listen for same-page navbar clicks
  useEffect(() => {
    const handleNavbarScroll = (e) => {
      const { hash } = e.detail
      pendingScrollRef.current = hash   // remember we need to scroll after render
      hasScrolledRef.current = false
      setActiveIndustry(hash)           // triggers re-render with new IndustryDetail
      setShouldAutoScroll(true)
    }

    window.addEventListener('navbar:scrollToSection', handleNavbarScroll)
    return () => window.removeEventListener('navbar:scrollToSection', handleNavbarScroll)
  }, [])

  // Existing location effect — unchanged
  useEffect(() => {
    if (window.location.hash && !location.state) {
      window.history.replaceState(null, '', '/industries')
    }
    if (location.state?.scrollToSection) {
      const sectionId = location.state.scrollToSection
      pendingScrollRef.current = sectionId  // NEW
      setActiveIndustry(sectionId)
      setShouldAutoScroll(true)
      hasScrolledRef.current = false
      return
    }
    if (location.state?.activeIndustry) {
      pendingScrollRef.current = location.state.activeIndustry  // NEW
      setActiveIndustry(location.state.activeIndustry)
      setShouldAutoScroll(true)
      hasScrolledRef.current = false
      return
    }
    if (location.state?.scrollToTop) {
      setShouldAutoScroll(false)
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
    } else {
      setShouldAutoScroll(false)
      if (window.location.hash) window.history.replaceState(null, '', '/industries')
    }
  }, [location])

  // UPDATED: scroll effect — uses pendingScrollRef so it fires after the
  // new IndustryDetail has mounted (the key={activeIndustry} remount)
  useEffect(() => {
    if (!shouldAutoScroll || hasScrolledRef.current) return
    if (!pendingScrollRef.current) return

    const targetId = pendingScrollRef.current

    let attempts = 0
    const tryScroll = () => {
      const element = document.getElementById(targetId)
      if (element) {
        const top = element.getBoundingClientRect().top + window.pageYOffset - 80
        window.scrollTo({ top, behavior: 'smooth' })
        hasScrolledRef.current = true
        pendingScrollRef.current = null
      } else if (++attempts < 15) {
        setTimeout(tryScroll, 80)  // retry until IndustryDetail has mounted
      }
    }

    // Small delay so React has flushed the re-render
    const timer = setTimeout(tryScroll, 50)
    return () => clearTimeout(timer)
  }, [activeIndustry, shouldAutoScroll])  // re-runs when activeIndustry changes

  useEffect(() => {
    hasScrolledRef.current = false
  }, [activeIndustry])

  return (
    <>
      <Navbar />
      <main className="ind-page-main">
        <IndustryHero />
        <IndustryCards active={activeIndustry} setActive={setActiveIndustry} />
        <AnimatePresence mode="wait">
          <IndustryDetail
            key={activeIndustry}
            industryKey={activeIndustry}
            shouldAutoScroll={shouldAutoScroll}
          />
        </AnimatePresence>
        <IndustryCTA />
      </main>
      <FooterSection />
    </>
  )
}