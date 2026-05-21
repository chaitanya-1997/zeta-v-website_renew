import { useReveal } from '../../hooks/useReveal'
import './HowWeWork.css'

const steps = [
    {
        icon: '🔍',
        num: '01',
        title: 'Discover',
        body: 'We immerse ourselves in your business context — your challenges, goals, competitive pressures, and constraints. Deep discovery before any solution.',
        badge: 'Weeks 1–2',
    },
    {
        icon: '🎯',
        num: '02',
        title: 'Design',
        body: 'We co-create a transformation blueprint: technology architecture, delivery roadmap, team structure, KPIs, and change management plan.',
        badge: 'Weeks 3–4',
    },
    {
        icon: '🚀',
        num: '03',
        title: 'Deliver',
        body: 'Agile, iterative delivery with embedded quality gates. Sprint reviews, stakeholder demos, and continuous feedback loops — value from Day 1.',
        badge: 'Week 5 onwards',
    },
]

export default function HowWeWork() {
    const [headRef, headVisible] = useReveal(0)
    const [statsRef, statsVisible] = useReveal(0)

    return (
        <section id="journey" className="how">
            <div className="how__inner">
                <div ref={headRef} className={`how__head reveal${headVisible ? ' visible' : ''}`}>
                    <span className="section-label">Our Process</span>
                    <h2 className="section-title">
                        Our <span className="grad-text">3-Step</span> Approach
                    </h2>
                </div>

                <div className="how__steps">
                    {steps.map((step, i) => {
                        const [ref, visible] = useReveal(i * 200)
                        return (
                            <div key={i} className="how__step-wrapper">
                                <div
                                    ref={ref}
                                    className={`how__step reveal${visible ? ' visible' : ''}`}
                                >
                                    <div className="how__step-icon">
                                        <div className="icon-box how__icon">{step.icon}</div>
                                    </div>
                                    <span className="how__step-num">{step.num}</span>
                                    <h3 className="how__step-title">{step.title}</h3>
                                    <p className="how__step-body">{step.body}</p>
                                    <span className="how__badge">{step.badge}</span>
                                </div>

                                {i < steps.length - 1 && (
                                    <div className={`how__arrow${visible ? ' how__arrow--active' : ''}`}>
                                        <div className="how__arrow-line" />
                                        <div className="how__arrow-dot" />
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>

                <div
                    ref={statsRef}
                    className={`how__stats reveal${statsVisible ? ' visible' : ''}`}
                >
                    <span>⏱ Avg. time to first delivery: <strong>6 weeks</strong></span>
                    <span className="how__stats-divider">·</span>
                    <span>📊 <strong>98%</strong> on-time rate</span>
                    <span className="how__stats-divider">·</span>
                    <span>🏆 <strong>0</strong> failed projects</span>
                </div>
            </div>
        </section>
    )
}
