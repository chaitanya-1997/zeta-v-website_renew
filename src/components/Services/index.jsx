import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'
import './Services.css'

const allServices = [
    { cat: 'Consulting', icon: '📋', title: 'Strategy Consulting', desc: 'Enterprise-wide strategy, operating model, and growth roadmaps.' },
    { cat: 'Consulting', icon: '💡', title: 'Co-creation & Monetization', desc: 'Build new business models and revenue streams with your team.' },
    { cat: 'Digital', icon: '🌐', title: 'Digital Footprint', desc: 'Digital presence, platform architecture, and omnichannel delivery.' },
    { cat: 'Digital', icon: '📊', title: 'Analytics & Automation', desc: 'Data platforms, ML pipelines, and intelligent process automation.' },
    { cat: 'Enterprise', icon: '🏢', title: 'Enterprise Technologies', desc: 'ERP, CRM, ITSM, and core enterprise system modernization.' },
    { cat: 'Enterprise', icon: '🔄', title: 'Legacy Transformation', desc: 'Systematic de-risked migration from legacy to modern stacks.' },
    { cat: 'Enterprise', icon: '⚙️', title: 'Engineering Solutions', desc: 'Full-stack product engineering, QA, and DevSecOps enablement.' },
    { cat: 'Staffing', icon: '👥', title: 'Staff Augmentation', desc: 'On-demand expert talent embedded into your teams.' },
    { cat: 'Staffing', icon: '🎯', title: 'Lateral Hiring', desc: 'Specialized recruitment for senior and niche technology roles.' },
    { cat: 'Staffing', icon: '🚀', title: 'Deployment Support', desc: 'End-to-end project delivery with dedicated resource models.' },
    { cat: 'Advisory', icon: '📈', title: 'Growth Advisory', desc: 'Market entry, M&A, and business acceleration advisory.' },
    { cat: 'Advisory', icon: '🤝', title: 'Deal Advisory', desc: 'Technology due diligence and post-merger integration.' },
]

const tabs = ['All', 'Consulting', 'Digital', 'Enterprise', 'Staffing', 'Advisory']

export default function ServicesSection() {
    const [activeTab, setActiveTab] = useState('All')
    const [headRef, headVisible] = useReveal(0)

    const filtered = activeTab === 'All' ? allServices : allServices.filter(s => s.cat === activeTab)

    return (
        <section id="services" className="services">
            <div className="services__inner">
                <div ref={headRef} className={`services__head reveal${headVisible ? ' visible' : ''}`}>
                    <span className="section-label">What We Do</span>
                    <h2 className="section-title">
                        Our Comprehensive <span className="grad-text">Service Portfolio</span>
                    </h2>
                </div>

                {/* Tabs */}
                <div className="services__tabs">
                    {tabs.map(t => (
                        <button
                            key={t}
                            className={`services__tab${activeTab === t ? ' services__tab--active' : ''}`}
                            onClick={() => setActiveTab(t)}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                {/* Cards */}
                <div className="services__grid">
                    {filtered.map((svc, i) => (
                        <ServiceCard key={`${activeTab}-${i}`} svc={svc} delay={i * 60} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function ServiceCard({ svc, delay }) {
    const [ref, visible] = useReveal(delay)
    return (
        <div ref={ref} className={`services__card reveal${visible ? ' visible' : ''}`}>
            <span className="services__card-num">0{Math.floor(Math.random() * 9) + 1}</span>
            <div className="icon-box services__icon">{svc.icon}</div>
            <h3 className="services__card-title">{svc.title}</h3>
            <p className="services__card-desc">{svc.desc}</p>
            <div className="services__card-border" />
        </div>
    )
}
