import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import HeroSection from '../components/CareerAll/HeroSection'
import StatsSection from '../components/CareerAll/StatsSection'
import WhyJoinSection from '../components/CareerAll/WhyJoinSection'
import CultureSection from '../components/CareerAll/CultureSection'
import OpenPositionsSection from '../components/CareerAll/OpenPositionsSection'
import ApplicationModal from '../components/CareerAll/ApplicationModal'
import SuccessScreen from '../components/CareerAll/SuccessScreen'
import FinalCTASection from '../components/CareerAll/FinalCTASection'
import Navbar from '../components/Navbar'
import FooterSection from '../components/Footer'


export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null)
  const [showApplicationModal, setShowApplicationModal] = useState(false)
  const [applicationSubmitted, setApplicationSubmitted] = useState(false)

  const handleApply = (job) => {
    setSelectedJob(job)
    setShowApplicationModal(true)
    setApplicationSubmitted(false)
  }

  const handleSubmitApplication = () => {
    setShowApplicationModal(false)
    setApplicationSubmitted(true)
    setTimeout(() => {
      setApplicationSubmitted(false)
    }, 5000)
  }

  return (
    <main className="careers-page">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <WhyJoinSection />
      <CultureSection />
      <OpenPositionsSection onApply={handleApply} />
      
      <AnimatePresence>
        {showApplicationModal && (
          <ApplicationModal 
            job={selectedJob}
            onClose={() => setShowApplicationModal(false)}
            onSubmit={handleSubmitApplication}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {applicationSubmitted && (
          <SuccessScreen onClose={() => setApplicationSubmitted(false)} />
        )}
      </AnimatePresence>

      <FinalCTASection />
      <FooterSection />
    </main>
  )
}