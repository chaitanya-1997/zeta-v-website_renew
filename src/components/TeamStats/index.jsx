// TeamStats.jsx
import { useState, useEffect } from 'react'
import { useReveal } from '../../hooks/useReveal'
import './TeamStats.css'

const stats = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 40, suffix: '+', label: 'Enterprise Clients' },
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 98, suffix: '%', label: 'Success Rate' },
]

function AnimatedNumber({ value, suffix, label, index }) {
  const [count, setCount] = useState(0)
  const [ref, visible] = useReveal(index * 100)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (visible) {
      setIsAnimating(true)
      let start = 0
      const duration = 1800
      const increment = value / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= value) {
          setCount(value)
          clearInterval(timer)
          setTimeout(() => setIsAnimating(false), 300)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [visible, value])

  return (
    <div 
      ref={ref} 
      className={`ts__stat ${isAnimating ? 'counter-animate' : ''}`}
    >
      <span className="ts__num">
        {count}{suffix}
      </span>
      <span className="ts__label">{label}</span>
    </div>
  )
}

export default function TrustStats() {
  const [sparkles, setSparkles] = useState([])

  useEffect(() => {
    // Generate sparkles
    const sparklesArray = []
    for (let i = 0; i < 30; i++) {
      sparklesArray.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 3
      })
    }
    setSparkles(sparklesArray)
  }, [])

  return (
    <section className="ts">
      {/* Animated waves */}
      <div className="ts__waves">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      {/* Sparkles */}
      <div className="ts__sparkles">
        {sparkles.map(sparkle => (
          <div
            key={sparkle.id}
            className="ts-sparkle"
            style={{
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
              animationDelay: `${sparkle.delay}s`,
              animationDuration: `${sparkle.duration}s`
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div className="ts__grid"></div>

      {/* Watermark */}
      <div className="ts__watermark">ZETA-V</div>

      <div className="ts__inner">
        {stats.map((stat, i) => (
          <div key={i} className="ts__block">
            <AnimatedNumber {...stat} index={i} />
            {i < stats.length - 1 && <div className="ts__divider" />}
          </div>
        ))}
      </div>
    </section>
  )
}