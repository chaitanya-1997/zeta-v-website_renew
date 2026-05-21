import { useReveal } from '../../hooks/useReveal'
import { useCountUp } from '../../hooks/useCountUp'
import './SuccessStories.css'

const stories = [
    {
        industry: 'Financial Services',
        quote: 'Zeta-V completely reimagined our core banking platform — 40% faster processing with zero downtime migration.',
        metric: '40% Performance Gain',
        author: 'Chief Digital Officer',
        company: 'Leading European Bank',
        initials: 'CD',
    },
    {
        industry: 'Manufacturing',
        quote: 'Their analytics framework helped us reduce manufacturing defects by 35% within just two quarters of engagement.',
        metric: '35% Defect Reduction',
        author: 'VP Operations',
        company: 'Global Auto Manufacturer',
        initials: 'VP',
    },
    {
        industry: 'Healthcare',
        quote: 'The Zeta-V team delivered a fully compliant EHR system on time and under budget — truly exceptional execution.',
        metric: '6-Month On-Time Delivery',
        author: 'CTO',
        company: 'Regional Health Network',
        initials: 'CT',
    },
]

const counters = [
    { value: 500, suffix: '+', label: 'Projects' },
    { value: 40, suffix: '+', label: 'Clients' },
    { value: 15, suffix: '+', label: 'Years' },
    { value: 98, suffix: '%', label: 'Satisfaction' },
]

function Counter({ value, suffix, label }) {
    const [ref, count] = useCountUp(value, 2000)
    return (
        <div ref={ref} className="ss__counter">
            <span className="ss__counter-num">{count}{suffix}</span>
            <span className="ss__counter-label">{label}</span>
        </div>
    )
}

export default function SuccessStories() {
    const [headRef, headVisible] = useReveal(0)

    return (
        <section id="stories" className="ss">
            <div className="ss__inner">
                <div ref={headRef} className={`ss__head reveal${headVisible ? ' visible' : ''}`}>
                    <span className="section-label">Client Impact</span>
                    <h2 className="section-title">
                        Real Results, Real <span className="grad-text">Impact</span>
                    </h2>
                </div>

                <div className="ss__cards">
                    {stories.map((s, i) => {
                        const [ref, visible] = useReveal(i * 150)
                        return (
                            <div key={i} ref={ref} className={`ss__card reveal${visible ? ' visible' : ''}`}>
                                <span className="ss__industry">{s.industry}</span>
                                <div className="ss__quote-mark">"</div>
                                <p className="ss__quote">{s.quote}</p>
                                <span className="ss__metric">{s.metric}</span>
                                <div className="ss__author">
                                    <div className="ss__avatar">{s.initials}</div>
                                    <div>
                                        <div className="ss__author-name">{s.author}</div>
                                        <div className="ss__author-co">{s.company}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="ss__counters">
                    {counters.map((c, i) => (
                        <Counter key={i} {...c} />
                    ))}
                </div>
            </div>
        </section>
    )
}
