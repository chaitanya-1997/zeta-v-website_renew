import { useReveal } from '../../hooks/useReveal'
import './AwardsPartners.css'

const awards = [
    { icon: '🏆', title: 'Top 25 Emerging Consulting Firms', issuer: 'Consulting Weekly', year: '2023' },
    { icon: '⭐', title: 'Excellence in Digital Transformation', issuer: 'NASSCOM', year: '2022' },
    { icon: '🎖️', title: 'Best Employer in Tech', issuer: 'Great Place to Work', year: '2023' },
]

const partners = [
    'Microsoft', 'SAP', 'Oracle', 'Salesforce', 'AWS', 'Google Cloud',
]

const badges = ['ISO 27001', 'ISO 9001', 'SOC 2 Type II', 'GDPR Compliant']

export default function AwardsPartners() {
    const [leftRef, leftVisible] = useReveal(0)
    const [rightRef, rightVisible] = useReveal(100)
    const [badgeRef, badgeVisible] = useReveal(200)

    return (
        <section id="awards" className="ap">
            <div className="ap__inner">
                <div className="ap__head">
                    <span className="section-label">Recognition & Ecosystem</span>
                    <h2 className="section-title">
                        Awards & <span className="grad-text">Technology Partners</span>
                    </h2>
                </div>

                <div className="ap__grid">
                    {/* Left — Awards */}
                    <div ref={leftRef} className={`ap__left reveal-left${leftVisible ? ' visible' : ''}`}>
                        <h3 className="ap__sub-title">Recognition & Awards</h3>
                        <div className="ap__awards">
                            {awards.map((a, i) => (
                                <div
                                    key={i}
                                    className="ap__award"
                                    style={{ transitionDelay: `${i * 150}ms` }}
                                >
                                    <span className="ap__award-icon">{a.icon}</span>
                                    <div>
                                        <div className="ap__award-title">{a.title}</div>
                                        <div className="ap__award-meta">{a.issuer} · {a.year}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Partners */}
                    <div ref={rightRef} className={`ap__right reveal-right${rightVisible ? ' visible' : ''}`}>
                        <h3 className="ap__sub-title">Technology Partners</h3>
                        <div className="ap__partners">
                            {partners.map((p, i) => (
                                <div
                                    key={i}
                                    className="ap__partner"
                                    style={{ animationDelay: rightVisible ? `${i * 80}ms` : '0ms' }}
                                >
                                    {p}
                                    <span className="ap__partner-badge">Partner</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Compliance badges */}
                <div ref={badgeRef} className={`ap__badges reveal${badgeVisible ? ' visible' : ''}`}>
                    {badges.map((b, i) => (
                        <span key={i} className="ap__badge">{b}</span>
                    ))}
                </div>
            </div>
        </section>
    )
}
