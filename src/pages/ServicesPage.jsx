// src/components/ServicesAll/Index.jsx
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FooterSection from '../components/Footer';
import ServicesHero from '../components/ServicesAll/ServicesHero';
import ServicesDetailed from '../components/ServicesAll/ServicesDetailed';
import ServicesHowWeWork from '../components/ServicesAll/ServicesHowWeWork';
import ServicesWhyChoose from '../components/ServicesAll/ServicesWhyChoose';
import ServicesTechStack from '../components/ServicesAll/ServicesTechStack';
import ServicesTestimonials from '../components/ServicesAll/ServicesTestimonials';
import ServicesFAQ from '../components/ServicesAll/ServicesFAQ';
import ServicesCTA from '../components/ServicesAll/ServicesCTA';

export default function ServicesPage() {
  const location = useLocation();
  const [activeService, setActiveService] = useState('digital-acceleration');
  const [shouldAutoScroll, setShouldAutoScroll] = useState(false);
  const hasScrolledRef = useRef(false);
  const pendingScrollRef = useRef(null);

  // ----- 1. STRIP ANY HASH EVERY TIME THE URL CHANGES -----
  useEffect(() => {
    if (location.hash) {
      window.history.replaceState(null, '', location.pathname);
    }
  }, [location]);

  // ----- 2. On mount: also strip any lingering hash -----
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  // ----- 3. Listen for same‑page navbar clicks (custom event) -----
  useEffect(() => {
    const handleNavbarScroll = (e) => {
      const { hash } = e.detail;
      pendingScrollRef.current = hash;
      hasScrolledRef.current = false;
      setActiveService(hash);
      setShouldAutoScroll(true);
    };

    window.addEventListener('navbar:scrollToSection', handleNavbarScroll);
    return () => window.removeEventListener('navbar:scrollToSection', handleNavbarScroll);
  }, []);

  // ----- 4. Handle navigation from other pages (via state) -----
  useEffect(() => {
    if (location.state?.scrollToSection) {
      const sectionId = location.state.scrollToSection;
      pendingScrollRef.current = sectionId;
      setActiveService(sectionId);
      setShouldAutoScroll(true);
      hasScrolledRef.current = false;
      // Clear state so it doesn't re‑trigger on back/forward
      window.history.replaceState({}, document.title, window.location.pathname);
      return;
    }
    // If there's a hash (direct load), it's already stripped by the first effect
    // but just in case:
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    setShouldAutoScroll(false);
  }, [location]);

  // ----- 5. Perform the actual scroll to the ServicesDetailed section -----
  useEffect(() => {
    if (!shouldAutoScroll || hasScrolledRef.current) return;
    if (!pendingScrollRef.current) return;

    const targetId = pendingScrollRef.current;

    let attempts = 0;
    const tryScroll = () => {
      // ServicesDetailed has id="services-premium-detail"
      const element = document.getElementById('services-premium-detail');
      if (element) {
        const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: 'smooth' });
        hasScrolledRef.current = true;
        pendingScrollRef.current = null;
      } else if (++attempts < 15) {
        setTimeout(tryScroll, 80);
      }
    };

    const timer = setTimeout(tryScroll, 50);
    return () => clearTimeout(timer);
  }, [activeService, shouldAutoScroll]);

  // Reset scroll flag when activeService changes (for subsequent clicks)
  useEffect(() => {
    hasScrolledRef.current = false;
  }, [activeService]);

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
  );
}