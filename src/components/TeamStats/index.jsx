import { useCountUp } from '../../hooks/useCountUp'
import './TeamStats.css'

const stats = [
    { value: 500, suffix: '+', label: 'Consultants Worldwide' },
    { value: 18, suffix: '', label: 'Nationalities Represented' },
    { value: 94, suffix: '%', label: 'Client Retention Rate' },
    { value: 8.9, suffix: '/10', label: 'Employee Satisfaction NPS' },
]

function StatBlock({ value, suffix, label }) {
    const [ref, count] = useCountUp(value, 2200)
    return (
        <div ref={ref} className="ts__stat">
            <span className="ts__num">{count}{suffix}</span>
            <span className="ts__label">{label}</span>
        </div>
    )
}

export default function TeamStats() {
    return (
        <section className="ts">
            <div className="ts__watermark">ZV</div>
            <div className="ts__grid-overlay" />
            <div className="ts__mask-left" />
            <div className="ts__mask-right" />

            <div className="ts__inner">
                {stats.map((s, i) => (
                    <div key={i} className="ts__block">
                        <StatBlock {...s} />
                        {i < stats.length - 1 && <div className="ts__divider" />}
                    </div>
                ))}
            </div>
        </section>
    )
}
