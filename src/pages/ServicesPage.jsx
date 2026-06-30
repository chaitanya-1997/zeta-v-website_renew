// src/components/ServicesAll/Index.jsx
import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import FooterSection from '../components/Footer'
import ServicesHero from '../components/ServicesAll/ServicesHero'
import ServicesDetailed from '../components/ServicesAll/ServicesDetailed'
import ServicesHowWeWork from '../components/ServicesAll/ServicesHowWeWork'
import ServicesWhyChoose from '../components/ServicesAll/ServicesWhyChoose'
import ServicesTechStack from '../components/ServicesAll/ServicesTechStack'
import ServicesTestimonials from '../components/ServicesAll/ServicesTestimonials'
import ServicesFAQ from '../components/ServicesAll/ServicesFAQ'
import ServicesCTA from '../components/ServicesAll/ServicesCTA'

export default function ServicesPage() {
  const location = useLocation()
  const [activeService, setActiveService] = useState('digital-acceleration')
  const [shouldAutoScroll, setShouldAutoScroll] = useState(false)
  const hasScrolledRef = useRef(false)
  const pendingScrollRef = useRef(null) // NEW

  // NEW: Listen for same-page navbar clicks
  useEffect(() => {
    const handleNavbarScroll = (e) => {
      const { hash } = e.detail
      pendingScrollRef.current = hash
      hasScrolledRef.current = false
      setActiveService(hash)
      setShouldAutoScroll(true)
    }

    window.addEventListener('navbar:scrollToSection', handleNavbarScroll)
    return () => window.removeEventListener('navbar:scrollToSection', handleNavbarScroll)
  }, [])

  // Existing location effect — unchanged
  useEffect(() => {
    if (window.location.hash && !location.state) {
      window.history.replaceState(null, '', '/services')
    }
    if (location.state?.scrollToSection) {
      const sectionId = location.state.scrollToSection
      pendingScrollRef.current = sectionId  // NEW
      setActiveService(sectionId)
      setShouldAutoScroll(true)
      hasScrolledRef.current = false
      return
    }
    if (location.state?.scrollToTop) {
      setShouldAutoScroll(false)
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
    } else {
      setShouldAutoScroll(false)
      if (window.location.hash) window.history.replaceState(null, '', '/services')
    }
  }, [location])

  // UPDATED: retry scroll loop — waits for ServicesDetailed to mount the section
  useEffect(() => {
    if (!shouldAutoScroll || hasScrolledRef.current) return
    if (!pendingScrollRef.current) return

    const targetId = pendingScrollRef.current

    // ServicesDetailed uses id="services-premium-detail" on the section wrapper,
    // not individual service IDs. So we scroll to that section, and the tab
    // switch (via activeService prop) handles showing the right content.
    let attempts = 0
    const tryScroll = () => {
      const element = document.getElementById('services-premium-detail')
      if (element) {
        const top = element.getBoundingClientRect().top + window.pageYOffset - 80
        window.scrollTo({ top, behavior: 'smooth' })
        hasScrolledRef.current = true
        pendingScrollRef.current = null
      } else if (++attempts < 15) {
        setTimeout(tryScroll, 80)
      }
    }

    const timer = setTimeout(tryScroll, 50)
    return () => clearTimeout(timer)
  }, [activeService, shouldAutoScroll])

  useEffect(() => {
    hasScrolledRef.current = false
  }, [activeService])

  return (
    <>
      <Navbar />
      <main className="svc-page-main">
        <ServicesHero />
        <ServicesDetailed
          activeService={activeService}
          setActiveService={setActiveService}
          shouldAutoScroll={shouldAutoScroll}
        />
        <ServicesHowWeWork />
        <ServicesWhyChoose />
        <ServicesTechStack />
        <ServicesTestimonials />
        <ServicesFAQ />
        <ServicesCTA />
      </main>
      <FooterSection />
    </>
  )
}