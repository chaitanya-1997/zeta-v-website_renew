import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'
import './Industries.css'

const industries = [
    {
        icon: '🏦',
        title: 'Financial Services',
        desc: 'Core banking transformation, regulatory compliance, risk analytics, digital lending, and wealth platforms.',
    },
    {
        icon: '🏭',
        title: 'Manufacturing',
        desc: 'Smart factory, supply chain optimization, IoT integration, predictive maintenance, and Industry 4.0 enablement.',
    },
    {
        icon: '🏥',
        title: 'Healthcare',
        desc: 'Digital health records, telemedicine platforms, clinical analytics, HIPAA compliance, and interoperability.',
    },
    {
        icon: '🏛️',
        title: 'Government',
        desc: 'Citizen services modernization, e-governance, cybersecurity, open data platforms, and legacy system transformation.',
    },
]

export default function IndustriesSection() {
    const [active, setActive] = useState(0)
    const [headRef, headVisible] = useReveal(0)

    return (
        <section id="industries" className="industries">
            <div className="industries__inner">
                <div ref={headRef} className={`industries__head reveal${headVisible ? ' visible' : ''}`}>
                    <span className="section-label">Industry Verticals</span>
                    <h2 className="section-title">
                        Deep <span className="grad-text">Industry</span> Expertise
                    </h2>
                </div>

                <div className="industries__layout">
                    {/* Left sticky panel */}
                    <div className="industries__panel">
                        <p className="industries__panel-desc">
                            We bring sector-specific depth to every engagement. Our consultants
                            live and breathe your industry's regulations, pressures, and opportunities.
                        </p>
                        <div className="industries__list">
                            {industries.map((ind, i) => (
                                <button
                                    key={i}
                                    className={`industries__list-item${active === i ? ' active' : ''}`}
                                    onClick={() => setActive(i)}
                                >
                                    <span className="industries__list-icon">{ind.icon}</span>
                                    {ind.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right card grid */}
                    <div className="industries__grid">
                        {industries.map((ind, i) => {
                            const [ref, visible] = useReveal(i * 150)
                            return (
                                <div
                                    key={i}
                                    ref={ref}
                                    className={`industries__card reveal${visible ? ' visible' : ''}${active === i ? ' industries__card--active' : ''}`}
                                    onClick={() => setActive(i)}
                                >
                                    <div className="icon-box industries__icon">{ind.icon}</div>
                                    <h3 className="industries__card-title">{ind.title}</h3>
                                    <p className="industries__card-desc">{ind.desc}</p>
                                    <a href="#contact" className="industries__card-link">Explore →</a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
