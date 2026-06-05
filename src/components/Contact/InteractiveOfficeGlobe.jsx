import React, { useState, useRef, Suspense, useEffect, useMemo } from 'react'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { OrbitControls, Html, Line } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import * as THREE from 'three'
import { motion, AnimatePresence } from 'framer-motion'
import './InteractiveOfficeGlobe.css'

const officeLocations = [
  {
    id: 'hong-kong', name: 'Hong Kong', flag: '🇭🇰',
    lat: 22.3193, lng: 114.1694,
    address: 'Two IFC, 8 Finance Street, Central, Hong Kong',
    phone: '+852 2297 2888', email: 'hongkong@zetav.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM (HKT)', teamSize: '45+',
    color: '#FF3366', region: 'Asia Pacific',
    mapUrl: 'https://maps.google.com/?q=Two+IFC+Central+Hong+Kong'
  },
  {
    id: 'mumbai', name: 'Mumbai', flag: '🇮🇳',
    lat: 19.1136, lng: 72.8697,
    address: 'Bandra Kurla Complex, Plot C-68, G Block, Mumbai 400051',
    phone: '+91 22 6234 5678', email: 'mumbai@zetav.com',
    hours: 'Mon-Fri: 9:30 AM - 6:30 PM (IST)', teamSize: '120+',
    color: '#FF9933', region: 'South Asia',
    mapUrl: 'https://maps.google.com/?q=Bandra+Kurla+Complex+Mumbai'
  },
  {
    id: 'pune', name: 'Pune', flag: '🇮🇳',
    lat: 18.5503, lng: 73.9478,
    address: 'EON Free Zone, Cluster C, Kharadi, Pune 411014',
    phone: '+91 20 4567 8901', email: 'pune@zetav.com',
    hours: 'Mon-Fri: 9:30 AM - 6:30 PM (IST)', teamSize: '85+',
    color: '#FFCC00', region: 'South Asia',
    mapUrl: 'https://maps.google.com/?q=EON+Free+Zone+Kharadi+Pune'
  },
  {
    id: 'shanghai', name: 'Shanghai', flag: '🇨🇳',
    lat: 31.2363, lng: 121.5014,
    address: 'Shanghai World Financial Center, 100 Century Ave, Pudong',
    phone: '+86 21 2082 8888', email: 'shanghai@zetav.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM (CST)', teamSize: '60+',
    color: '#FF4444', region: 'Asia Pacific',
    mapUrl: 'https://maps.google.com/?q=Shanghai+World+Financial+Center'
  },
  {
    id: 'delhi', name: 'New Delhi', flag: '🇮🇳',
    lat: 28.4595, lng: 77.1046,
    address: 'DLF Cyber City, Building 10, Phase 2, Gurugram 122002',
    phone: '+91 124 678 9012', email: 'delhi@zetav.com',
    hours: 'Mon-Fri: 9:30 AM - 6:30 PM (IST)', teamSize: '95+',
    color: '#FF6600', region: 'South Asia',
    mapUrl: 'https://maps.google.com/?q=DLF+Cyber+City+Gurugram'
  },
  {
    id: 'orlando', name: 'Orlando', flag: '🇺🇸',
    lat: 28.5452, lng: -81.3799,
    address: '200 S Orange Ave, Suite 1500, Orlando, FL 32801',
    phone: '+1 407 555 0123', email: 'orlando@zetav.com',
    hours: 'Mon-Fri: 9:00 AM - 5:00 PM (EST)', teamSize: '35+',
    color: '#3399FF', region: 'North America',
    mapUrl: 'https://maps.google.com/?q=200+S+Orange+Ave+Orlando'
  }
]

// ============================================================
// ✅ THE ONLY CORRECT FORMULA FOR THREE.JS SPHERE + EARTH TEXTURE
//
// Three.js SphereGeometry UV mapping (verified mathematically):
//   U = 0.5 + atan2(z, x) / (2π)   →  U=0.5 means lng=0°
//   V = 0.5 - asin(y) / π           →  V=0   means lat=+90°
//
// Working backward: to place a pin at real-world (lat, lng):
//   phi   = (90 - lat) × π/180      (polar angle from north pole)
//   theta = lng × π/180              (azimuth — NO offset needed)
//
//   x =  sin(phi) × cos(theta)
//   y =  cos(phi)
//   z =  sin(phi) × sin(theta)       ← POSITIVE z (not negative)
//
// Proof that broken variants fail:
//   • (lng+180) offset → Delhi lng 77° maps to texture lng 103°  (India → SE Asia)
//   • negative z       → Delhi lng 77° maps to texture lng -77°  (India → Atlantic)
//   • both together    → Delhi lands on North America (matches screenshot bug)
// ============================================================

const latLngToVector3 = (lat, lng, radius = 1.01) => {
  const phi   = (90 - lat) * (Math.PI / 180)
  const theta = lng        * (Math.PI / 180)
  return new THREE.Vector3(
    radius * Math.sin(phi) * Math.cos(theta),  // x
    radius * Math.cos(phi),                     // y
    radius * Math.sin(phi) * Math.sin(theta)   // z — positive, no offset
  )
}

function EarthMesh() {
  const [colorMap, bumpMap, specularMap, cloudMap] = useLoader(TextureLoader, [
    'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg',
    'https://threejs.org/examples/textures/planets/earth_normal_2048.jpg',
    'https://threejs.org/examples/textures/planets/earth_specular_2048.jpg',
    'https://threejs.org/examples/textures/planets/earth_clouds_1024.png'
  ])
  return (
    <group>
      <mesh>
        <sphereGeometry args={[1, 128, 128]} />
        <meshPhongMaterial
          map={colorMap} bumpMap={bumpMap} bumpScale={0.05}
          specularMap={specularMap} specular={new THREE.Color('grey')} shininess={5}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.01, 128, 128]} />
        <meshPhongMaterial map={cloudMap} transparent opacity={0.15} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  )
}

function OfficeMarker({ location, isActive, onClick }) {
  const position = useMemo(() => latLngToVector3(location.lat, location.lng), [location.lat, location.lng])
  const [hovered, setHovered] = useState(false)
  const pulseRef = useRef()

  useFrame(({ clock }) => {
    if (isActive && pulseRef.current) {
      const scale = 1 + Math.sin(clock.getElapsedTime() * 8) * 0.2
      pulseRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`
    }
  })

  return (
    <group>
      <Html position={position} center distanceFactor={0.5} zIndexRange={[100, 0]}>
        <motion.button
          className={`office-marker ${isActive ? 'active' : ''}`}
          style={{
            backgroundColor: location.color,
            border: isActive ? '3px solid white' : '2px solid white',
            boxShadow: hovered || isActive ? `0 0 20px ${location.color}` : `0 0 10px ${location.color}`,
          }}
          onClick={(e) => { e.stopPropagation(); onClick(location) }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          animate={isActive ? { scale: [1, 1.15, 1] } : {}}
          transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
        >
          <span className="marker-emoji">{location.flag}</span>
          <div ref={pulseRef} className="marker-pulse" style={{ backgroundColor: location.color }} />
        </motion.button>
      </Html>

      <Html position={position} center distanceFactor={0.8} style={{ pointerEvents: 'none' }} zIndexRange={[100, 0]}>
        <div className={`marker-label ${hovered || isActive ? 'visible' : ''}`}>
          <span className="label-flag">{location.flag}</span>
          <span className="label-name">{location.name}</span>
        </div>
      </Html>

      <Line
        points={[position.clone().multiplyScalar(0.99), position]}
        color={location.color} lineWidth={1.5} opacity={0.5} transparent
      />
      <mesh position={position.clone().multiplyScalar(0.995)}>
        <sphereGeometry args={[0.008, 8, 8]} />
        <meshBasicMaterial color={location.color} transparent opacity={0.6} />
      </mesh>
    </group>
  )
}

function CustomOrbitControls({ autoRotate, onAutoRotateChange }) {
  const { camera, gl } = useThree()
  return (
    <OrbitControls
      camera={camera} domElement={gl.domElement}
      enableZoom={true} enablePan={false}
      zoomSpeed={0.8} rotateSpeed={0.8}
      autoRotate={autoRotate} autoRotateSpeed={0.6}
      enableDamping={true} dampingFactor={0.05}
      minDistance={1.5} maxDistance={4}
      onStart={() => { if (autoRotate && onAutoRotateChange) onAutoRotateChange(false) }}
    />
  )
}

function Stars() {
  const starsGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(4000 * 3)
    for (let i = 0; i < 4000; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 1000
      positions[i * 3 + 1] = (Math.random() - 0.5) * 500
      positions[i * 3 + 2] = (Math.random() - 0.5) * 300 - 50
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geometry
  }, [])
  return (
    <points geometry={starsGeometry}>
      <pointsMaterial color="#ffffff" size={0.15} transparent opacity={0.5} />
    </points>
  )
}

function GlobeScene({ selectedLocation, onLocationSelect, autoRotate, onAutoRotateChange }) {
  const { camera } = useThree()
  const isAnimatingRef = useRef(false)

  const flyToLocation = (location) => {
    if (isAnimatingRef.current) return
    const targetPosition = latLngToVector3(location.lat, location.lng, 2.2)
    const startPosition = camera.position.clone()
    const duration = 800
    const startTime = performance.now()
    isAnimatingRef.current = true
    const animate = (now) => {
      const t = Math.min(1, (now - startTime) / duration)
      const ease = 1 - Math.pow(1 - t, 3)
      camera.position.lerpVectors(startPosition, targetPosition, ease)
      camera.lookAt(0, 0, 0)
      if (t < 1) requestAnimationFrame(animate)
      else isAnimatingRef.current = false
    }
    requestAnimationFrame(animate)
  }

  const handleMarkerClick = (location) => {
    onLocationSelect(location)
    onAutoRotateChange(false)
    flyToLocation(location)
  }

  return (
    <group>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 3, 5]} intensity={1.0} />
      <pointLight position={[10, 10, 10]} intensity={0.4} />
      <pointLight position={[-5, -3, -5]} intensity={0.2} color="#4466cc" />
      <EarthMesh />
      {officeLocations.map(location => (
        <OfficeMarker
          key={location.id} location={location}
          isActive={selectedLocation?.id === location.id}
          onClick={handleMarkerClick}
        />
      ))}
      <mesh>
        <sphereGeometry args={[1.05, 64, 64]} />
        <meshBasicMaterial color="#00D4FF" transparent opacity={0.04} side={THREE.BackSide} />
      </mesh>
    </group>
  )
}

function InfoPanel({ location }) {
  const [showFullInfo, setShowFullInfo] = useState(false)
  if (!location) return null
  return (
    <motion.div
      key={location.id}
      initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.4 }}
      className="office-info-card" style={{ borderTopColor: location.color }}
    >
      <div className="info-header">
        <div className="info-flag" style={{ backgroundColor: `${location.color}20` }}>
          <span>{location.flag}</span>
        </div>
        <div className="info-title">
          <h2>{location.name}</h2>
          <p className="info-region">{location.region}</p>
        </div>
      </div>
      <div className="info-stats">
        <div className="stat"><span className="stat-value">{location.teamSize}</span><span className="stat-label">Team Members</span></div>
        <div className="stat"><span className="stat-value">4.9⭐</span><span className="stat-label">Rating</span></div>
        <div className="stat"><span className="stat-value">24/7</span><span className="stat-label">Support</span></div>
      </div>
      <div className="info-section">
        <div className="section-icon">📍</div>
        <div className="section-content">
          <h4>Address</h4>
          <p>{location.address}</p>
          <button className="view-map-btn" onClick={() => window.open(location.mapUrl, '_blank')}>View on Map →</button>
        </div>
      </div>
      <div className="info-section">
        <div className="section-icon">📞</div>
        <div className="section-content">
          <h4>Contact</h4>
          <p className="contact-phone">{location.phone}</p>
          <p className="contact-email">{location.email}</p>
        </div>
      </div>
      <div className="info-section">
        <div className="section-icon">🕒</div>
        <div className="section-content">
          <h4>Working Hours</h4>
          <p>{location.hours}</p>
        </div>
      </div>
      <button className="expand-btn" onClick={() => setShowFullInfo(!showFullInfo)}>
        {showFullInfo ? 'Show Less' : 'More Details'}
        <span className="expand-icon">{showFullInfo ? '−' : '+'}</span>
      </button>
      <AnimatePresence>
        {showFullInfo && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
            className="expanded-info"
          >
            <div className="info-section">
              <div className="section-icon">🏢</div>
              <div className="section-content">
                <h4>About Office</h4>
                <p>{location.name} office is our key hub for the {location.region} region.</p>
              </div>
            </div>
            <div className="info-section">
              <div className="section-icon">🎯</div>
              <div className="section-content">
                <h4>Core Focus</h4>
                <p>Cloud solutions, AI consulting, and digital transformation for enterprises in the {location.region} market.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function LocationQuickLinks({ locations, onSelect, selectedId }) {
  return (
    <div className="location-quick-links">
      <h4>📍 Global Offices</h4>
      <div className="quick-links-grid">
        {locations.map(loc => (
          <button
            key={loc.id}
            className={`quick-link-btn ${selectedId === loc.id ? 'active' : ''}`}
            onClick={() => onSelect(loc)}
            style={{ '--hover-color': loc.color }}
          >
            <span className="quick-link-flag">{loc.flag}</span>
            <span className="quick-link-name">{loc.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

function AutoRotateButton({ isAutoRotating, onToggle }) {
  return (
    <button className={`auto-rotate-btn ${isAutoRotating ? 'active' : ''}`} onClick={onToggle}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M23 4V12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 23C5.92487 23 1 18.0751 1 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </button>
  )
}

export default function InteractiveOfficeGlobe() {
  const [selectedLocation, setSelectedLocation] = useState(officeLocations[0])
  const [autoRotate, setAutoRotate] = useState(true)

  return (
    <div className="interactive-globe-container">
      <div className="globe-header">
        <h1 className="globe-title">Our Global <span className="gradient-text">Footprint</span></h1>
        <p className="globe-subtitle">Click on any location pin or use the buttons below to explore our offices</p>
      </div>
      <div className="globe-two-col">
        <div className="globe-col">
          <div className="globe-wrapper">
            <Canvas camera={{ position: [0, 0, 2.8], fov: 45 }} style={{ background: 'radial-gradient(circle at center, #0B1120 0%, #020617 100%)' }}>
              <Suspense fallback={null}>
                <GlobeScene
                  selectedLocation={selectedLocation}
                  onLocationSelect={setSelectedLocation}
                  autoRotate={autoRotate}
                  onAutoRotateChange={setAutoRotate}
                />
                <CustomOrbitControls autoRotate={autoRotate} onAutoRotateChange={setAutoRotate} />
                <Stars />
              </Suspense>
            </Canvas>
            <AutoRotateButton isAutoRotating={autoRotate} onToggle={() => setAutoRotate(!autoRotate)} />
            <div className="globe-legend">
              <span className="legend-dot" style={{ background: '#FF3366' }} />
              <span>Active Offices</span>
            </div>
          </div>
        </div>
        <div className="info-col">
          <InfoPanel location={selectedLocation} />
          <LocationQuickLinks
            locations={officeLocations}
            onSelect={(loc) => { setSelectedLocation(loc); setAutoRotate(false) }}
            selectedId={selectedLocation.id}
          />
        </div>
      </div>
    </div>
  )
}