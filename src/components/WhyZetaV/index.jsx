import { useReveal } from '../../hooks/useReveal'
import './WhyZetaV.css'

const blocks = [
    {
        num: '01',
        icon: '🎯',
        title: 'Domain-Deep Expertise',
        body: '15+ years embedded in Financial Services, Healthcare, Manufacturing and Government — we don\'t generalize, we specialize.',
    },
    {
        num: '02',
        icon: '🤝',
        title: 'End-to-End Partnership',
        body: 'From strategy boardrooms to deployment war rooms — one partner for the full journey. No handoffs, no gaps, no blame games.',
    },
    {
        num: '03',
        icon: '📊',
        title: 'Outcome-First Delivery',
        body: 'We measure success by your business metrics, not our timelines. Every engagement is tied to KPIs that matter to your C-suite.',
    },
]

export default function WhyZetaV() {
    const [headRef, headVisible] = useReveal(0)

    return (
        <section id="journey" className="why">
            {/* Watermark */}
            <div className="why__watermark">ZV</div>

            <div className="why__inner">
                <div ref={headRef} className={`why__head reveal${headVisible ? ' visible' : ''}`}>
                    <span className="section-label">Why Choose Us</span>
                    <h2 className="section-title">
                        Why Leading Enterprises Choose{' '}
                        <span className="grad-text">Zeta-V</span>
                    </h2>
                </div>

                <div className="why__blocks">
                    {blocks.map((b, i) => {
                        const [ref, visible] = useReveal(i * 150)
                        return (
                            <div
                                key={i}
                                ref={ref}
                                className={`why__block reveal${visible ? ' visible' : ''}`}
                            >
                                <span className="why__num">{b.num}</span>
                                <div className="why__icon-wrap">
                                    <div className="icon-box why__icon">{b.icon}</div>
                                </div>
                                <h3 className="why__block-title">{b.title}</h3>
                                <p className="why__block-body">{b.body}</p>
                                <a href="#contact" className="why__link">Learn more →</a>
                                <div className="why__underline" />
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Gradient rule */}
            <div className="why__rule" />
        </section>
    )
}
