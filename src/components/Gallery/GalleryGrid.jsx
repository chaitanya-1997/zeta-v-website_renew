// GalleryGrid.jsx
import './GalleryGrid.css'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBuilding, FaStar, FaHandshake, FaUsers } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import GalleryCard from './GalleryCard'
import GalleryLightbox from './GalleryLightbox'

// Import all 35 images (now 34 after removing one)
import ph1 from '../../assets/gallerym/ph1.jpg'
import ph2 from '../../assets/gallerym/ph2.jpg'
import ph3 from '../../assets/gallerym/ph3.jpg'
import ph4 from '../../assets/gallerym/ph4.jpg'
import ph5 from '../../assets/gallerym/ph5.jpg'
import Ph6 from '../../assets/gallerym/Media.jpg'
import ph7 from '../../assets/gallerym/ph7.jpg'
import ph8 from '../../assets/gallerym/ph8.jpg'
import ph9 from '../../assets/gallerym/ph9.jpg'
import ph10 from '../../assets/gallerym/ph10.jpg'
import ph11 from '../../assets/gallerym/ph11.jpg'
import ph12 from '../../assets/gallerym/ph12.jpg'
import ph13 from '../../assets/gallerym/ph13.jpg'
import ph14 from '../../assets/gallerym/ph14.jpg'
import ph15 from '../../assets/gallerym/ph15.jpg'
import ph16 from '../../assets/gallerym/ph16.jpg'
import ph17 from '../../assets/gallerym/ph17.jpg'
import ph18 from '../../assets/gallerym/ph18.jpg'
import ph19 from '../../assets/gallerym/ph19.jpg'
import ph20 from '../../assets/gallerym/ph20.jpg'
import ph21 from '../../assets/gallerym/ph21.jpg'
import ph22 from '../../assets/gallerym/ph22.jpg'
import ph23 from '../../assets/gallerym/ph23.jpg'
import ph24 from '../../assets/gallerym/ph24.jpg'
import ph25 from '../../assets/gallerym/ph25.jpg'
import ph26 from '../../assets/gallerym/ph26.jpg'
import ph27 from '../../assets/gallerym/ph27.jpg'
import ph28 from '../../assets/gallerym/ph28.jpg'
import ph29 from '../../assets/gallerym/ph29.jpg'
import ph30 from '../../assets/gallerym/ph30.jpg'
import ph31 from '../../assets/gallerym/ph31.jpg'
import ph32 from '../../assets/gallerym/ph32.jpg'
import ph33 from '../../assets/gallerym/ph33.jpg'
import ph34 from '../../assets/gallerym/ph34.jpg'
import ph35 from '../../assets/gallerym/ph35.jpg'
import ph36 from '../../assets/gallerym/team2.jpg'
// ============================================================
// GALLERY DATA – UPDATED
// ============================================================

const galleryData = [
  { id: 1, category: 'Exhibitions & Conferences', title: 'Exhibition', description: 'Mou signed with Client', image: ph1, date: '2016', location: 'Hong Kong', type: 'image' },
  { id: 2, category: 'Events & Celebrations', title: 'Diwali Celebration', description: 'Zeta-V Diwali Celebration 2024', image: ph2, date: '2024', location: 'Dubai, UAE', type: 'image' },
  { id: 3, category: 'Leadership & Team', title: 'Leadership at Zeta-V', description: 'A proud moment featuring our CEO, CPO, and Board of Directors at Zeta-V.', image: ph3, date: '2023', location: 'Singapore', type: 'image' },
    { id: 36, category: 'Leadership & Team', title: 'Leadership at Zeta-V', description: 'A proud moment featuring our CEO, CPO, and Board of Directors at Zeta-V.', image: ph36, date: '2023', location: 'Singapore', type: 'image' },

  { id: 4, category: 'Exhibitions & Conferences', title: 'Conference', description: 'CEO delivering keynote speech', image: ph4, date: '2024', location: 'Bangalore, India', type: 'image' },
  { id: 5, category: 'Exhibitions & Conferences', title: 'Zeta-V signs MoU at China-India Forum', description: 'A landmark moment as Zeta-V formalized a Memorandum of Understanding with the Retail & Distribution of Langfang.', image: ph5, date: '2024', location: 'New York, USA', type: 'image' },
  { id: 6, category: 'Exhibitions & Conferences', title: 'Formal Meeting Moment', description: 'A professional interaction captured in an elegant setting.', image: Ph6, date: '2023', location: 'Jaipur, India', type: 'image' },
  { id: 7, category: 'Client & Partnerships', title: 'Partnership with SIDCOP', description: 'A collaborative moment with our client SIDCOP.', image: ph7, date: '2023', location: 'San Francisco, USA', type: 'image' },
  { id: 8, category: 'Events & Celebrations', title: 'Celebrating Indian Classical Music', description: 'An enchanting evening of Indian classical music featuring Ustad Shujaat Khan.', image: ph8, date: '2024', location: 'Sydney, Australia', type: 'image' },
  { id: 9, category: 'Exhibitions & Conferences', title: 'CEO presenting at Wuhan Conference', description: 'Our CEO addressing delegates at the Wuhan conference.', image: ph9, date: '2024', location: 'Tokyo, Japan', type: 'image' },
  { id: 10, category: 'Exhibitions & Conferences', title: 'Mentoring Program 2016 - HKUST', description: 'A memorable session at the Mentoring Program 2016, hosted at HKUST.', image: ph10, date: '2023', location: 'Paris, France', type: 'image' },
  { id: 11, category: 'Exhibitions & Conferences', title: 'Reception in Honour of the President of India', description: 'A formal reception held in Guangzhou on 24th May 2016.', image: ph11, date: '2024', location: 'Dubai, UAE', type: 'image' },
  { id: 12, category: 'Exhibitions & Conferences', title: "With Hon'ble Prime Minister Narendra Modi", description: 'A distinguished moment captured alongside the Hon\'ble Prime Minister of India.', image: ph12, date: '2024', location: 'Seoul, Korea', type: 'image' },
  { id: 13, category: 'Exhibitions & Conferences', title: 'Professional Meeting Moment', description: 'A formal interaction captured in an academic setting.', image: ph13, date: '2024', location: 'Mumbai, India', type: 'image' },
  { id: 14, category: 'Exhibitions & Conferences', title: 'Delegation Group Photo', description: 'A formal gathering captured during an international delegation meeting.', image: ph14, date: '2024', location: 'Las Vegas, USA', type: 'image' },
  { id: 15, category: 'Client & Partnerships', title: 'Tripartite Cooperation Agreement Signing', description: 'Zeta-V joined hands with Guiyang Hi-tech Zone and Maritime Silk Road Co.', image: ph15, date: '2023', location: 'Goa, India', type: 'image' },
  { id: 16, category: 'Exhibitions & Conferences', title: 'Formal Agreement Ceremony', description: 'A successful partnership formalized during the signing ceremony.', image: ph16, date: '2024', location: 'London, UK', type: 'image' },
  { id: 17, category: 'Exhibitions & Conferences', title: 'Networking at Conference', description: 'A formal moment captured during the conference.', image: ph17, date: '2024', location: 'Delhi, India', type: 'image' },
  { id: 18, category: 'Exhibitions & Conferences', title: 'China-India IT Cooperation Signing', description: 'A landmark ceremony at the Big Data Expo 2018 in Guiyang.', image: ph18, date: '2024', location: 'Dubai, UAE', type: 'image' },
  { id: 19, category: 'Exhibitions & Conferences', title: 'Seventh China-India Forum, Langfang', description: 'Delegates gathered for the Seventh China-India Forum in Langfang.', image: ph19, date: '2024', location: 'Singapore', type: 'image' },
  { id: 20, category: 'Exhibitions & Conferences', title: 'Formal Meeting Moment', description: 'A professional interaction captured in an elegant setting.', image: ph20, date: '2023', location: 'Jaipur, India', type: 'image' },


  // Changed from Leadership & Team → Events & Celebrations
  { id: 21, category: 'Events & Celebrations', title: 'Shanghai Team', description: 'A formal portrait featuring Ranga Vellamore, Founder & CTO, and Sujit Chatterjee, Founder & CEO.', image: ph21, date: '2024', location: 'Mumbai, India', type: 'image' },
  { id: 22, category: 'Client & Partnerships', title: 'Business Delegation Visit', description: 'Corporate meeting with Henan 863 Software Co. Ltd. and Zeta-V Technology Solutions.', image: ph22, date: '2024', location: 'Bangalore, India', type: 'image' },
  { id: 23, category: 'Exhibitions & Conferences', title: 'Strategic Cooperation Signing Ceremony', description: 'A formal signing ceremony marking a strategic cooperation agreement.', image: ph23, date: '2024', location: 'Milan, Italy', type: 'image' },
  { id: 24, category: 'Exhibitions & Conferences', title: 'Innovation & Collaboration', description: 'A professional moment captured during a corporate visit.', image: ph24, date: '2024', location: 'Pune, India', type: 'image' },
  { id: 25, category: 'Exhibitions & Conferences', title: 'Visit to Schoeller Technologies, Switzerland', description: 'Visit to Schoeller Technologies in Switzerland.', image: ph25, date: '2023', location: 'Delhi, India', type: 'image' },
  { id: 26, category: 'Client & Partnerships', title: 'WEISS Partnership Signing', description: 'A formal signing ceremony with WEISS.', image: ph26, date: '2024', location: 'Hyderabad, India', type: 'image' },
  { id: 27, category: 'Exhibitions & Conferences', title: 'India-China Focus Group Roundtable', description: 'A keynote moment at the India-China Focus Group Roundtable.', image: ph27, date: '2024', location: 'Mumbai, India', type: 'image' },
  { id: 28, category: 'Events & Celebrations', title: 'Zeta-V Diwali Celebration', description: 'A festive Diwali event at Zeta-V, celebrating culture and togetherness.', image: ph28, date: '2024', location: 'Goa, India', type: 'image' },
  { id: 29, category: 'Events & Celebrations', title: 'Zeta-V Diwali Celebration', description: 'Team members gathered in traditional attire to celebrate Diwali at Zeta-V.', image: ph29, date: '2024', location: 'Chennai, India', type: 'image' },
  // Changed from Leadership & Team → Events & Celebrations
  { id: 30, category: 'Events & Celebrations', title: 'Zeta-V Team Spirit', description: 'The Zeta-V team captured in a moment of unity and enthusiasm.', image: ph30, date: '2024', location: 'Mumbai, India', type: 'image' },
  { id: 31, category: 'Events & Celebrations', title: 'Zeta-V Board of Directors', description: 'A formal gathering of the Zeta-V Board of Directors.', image: ph31, date: '2024', location: 'Kolkata, India', type: 'image' },
  { id: 32, category: 'Events & Celebrations', title: 'Zeta-V Leadership Team', description: 'A formal moment featuring members of the Zeta-V leadership team.', image: ph32, date: '2023', location: 'Mumbai, India', type: 'image' },
  { id: 33, category: 'Events & Celebrations', title: 'Zeta-V Family', description: 'The Zeta-V family united in spirit and purpose.', image: ph33, date: '2024', location: 'Ahmedabad, India', type: 'image' },
  { id: 34, category: 'Events & Celebrations', title: 'Empowered Women at Zeta-V', description: 'Celebrating the strength and leadership of women at Zeta-V.', image: ph34, date: '2024', location: 'Frankfurt, Germany', type: 'image' },
  { id: 35, category: 'Exhibitions & Conferences', title: 'Zeta-V CEO Address', description: 'Our CEO delivering an insightful presentation.', image: ph35, date: '2024', location: 'Bangalore, India', type: 'image' },
]

// Updated categories (same structure, counts auto‑update)
const categories = [
  { id: 'all', name: 'All', icon: <FaBuilding />, count: galleryData.length },
  { id: 'Exhibitions & Conferences', name: 'Exhibitions & Conferences', icon: <FaBuilding />, count: galleryData.filter(item => item.category === 'Exhibitions & Conferences').length },
  { id: 'Events & Celebrations', name: 'Events & Celebrations', icon: <FaStar />, count: galleryData.filter(item => item.category === 'Events & Celebrations').length },
  { id: 'Client & Partnerships', name: 'Client & Partnerships', icon: <FaHandshake />, count: galleryData.filter(item => item.category === 'Client & Partnerships').length },
  { id: 'Leadership & Team', name: 'Leadership & Team', icon: <FaUsers />, count: galleryData.filter(item => item.category === 'Leadership & Team').length },
]

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxItem, setLightboxItem] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [filteredItems, setFilteredItems] = useState(galleryData)

  useEffect(() => {
    setFilteredItems(activeCategory === 'all' ? galleryData : galleryData.filter(item => item.category === activeCategory))
  }, [activeCategory])

  const openLightbox = (item) => {
    const index = filteredItems.findIndex(i => i.id === item.id)
    setLightboxIndex(index)
    setLightboxItem(item)
  }

  const closeLightbox = () => setLightboxItem(null)

  const nextImage = () => {
    if (lightboxIndex < filteredItems.length - 1) {
      setLightboxIndex(lightboxIndex + 1)
      setLightboxItem(filteredItems[lightboxIndex + 1])
    }
  }

  const prevImage = () => {
    if (lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1)
      setLightboxItem(filteredItems[lightboxIndex - 1])
    }
  }

  return (
    <>
      <section className="gallery-categories" id='galleries'>
        <div className="gallery-categories__inner">
          <div className="gallery-categories__tabs">
            {categories.map((cat, idx) => (
              <motion.button
                key={cat.id}
                className={`gallery-tab ${activeCategory === cat.id ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className="gallery-tab__icon">{cat.icon}</span>
                <span>{cat.name}</span>
                <span className="gallery-tab__count">{cat.count}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-grid-section">
        <div className="gallery-grid__inner">
          <AnimatePresence mode="wait">
            <motion.div key={activeCategory} className="gallery-grid"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
            >
              {filteredItems.map((item, idx) => (
                <GalleryCard key={item.id} item={item} index={idx} onClick={openLightbox} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {lightboxItem && (
          <GalleryLightbox item={lightboxItem} onClose={closeLightbox} onNext={nextImage} onPrev={prevImage}
            hasNext={lightboxIndex < filteredItems.length - 1} hasPrev={lightboxIndex > 0} />
        )}
      </AnimatePresence>
    </>
  )
}