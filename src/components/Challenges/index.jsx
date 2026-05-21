import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'
import './Challenges.css'

const challenges = [
    { icon: '⚡', title: 'Legacy Modernization', desc: 'Modernize outdated systems without disrupting operations.' },
    { icon: '📊', title: 'Data & Analytics Gaps', desc: 'Unlock actionable insights from your enterprise data.' },
    { icon: '🔒', title: 'Cybersecurity & Compliance', desc: 'Protect assets and meet regulatory requirements.' },
    { icon: '☁️', title: 'Cloud Migration', desc: 'Accelerate your journey to the cloud, safely.' },
    { icon: '🤖', title: 'AI & Automation', desc: 'Embed intelligence into every business process.' },
    { icon: '🌐', title: 'Digital Customer Experience', desc: 'Delight customers with seamless digital touchpoints.' },
    { icon: '🏗️', title: 'Talent & Capability Scaling', desc: 'Build teams and capabilities that grow with you.' },
    { icon: '📈', title: 'Growth & Market Expansion', desc: 'Enter new markets with confidence and clarity.' },
]

export default function ChallengesSection() {
    const [selected, setSelected] = useState([])
    const [headRef, headVisible] = useReveal(0)

    const toggle = (i) => {
        setSelected(prev =>
            prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]
        )
    }

    return (
        <section id="challenges" className="challenges">
            <div className="challenges__inner">
                <div ref={headRef} className={`challenges__head reveal${headVisible ? ' visible' : ''}`}>
                    <span className="section-label">Your Priorities</span>
                    <h2 className="section-title">
                        Which Business Challenges Are Your{' '}
                        <span className="grad-text">Top Priority</span>?
                    </h2>
                    <p className="section-subtitle">
                        Select your key focus areas and we'll design a tailored roadmap for you.
                    </p>
                </div>

                <div className="challenges__grid">
                    {challenges.map((c, i) => {
                        const isActive = selected.includes(i)
                        return (
                            <button
                                key={i}
                                className={`challenges__card${isActive ? ' challenges__card--active' : ''}`}
                                onClick={() => toggle(i)}
                                style={{ transitionDelay: `${i * 60}ms` }}
                            >
                                {isActive && <span className="challenges__check">✓</span>}
                                <div className="icon-box challenges__icon">{c.icon}</div>
                                <h3 className="challenges__title">{c.title}</h3>
                                <p className="challenges__desc">{c.desc}</p>
                            </button>
                        )
                    })}
                </div>

                {selected.length > 0 && (
                    <div className="challenges__cta">
                        <p className="challenges__cta-text">
                            You've selected <strong>{selected.length}</strong> challenge{selected.length > 1 ? 's' : ''}.
                            Let's build your roadmap.
                        </p>
                        <a href="#contact" className="btn-grad">Get Your Custom Roadmap →</a>
                    </div>
                )}
            </div>
        </section>
    )
}
