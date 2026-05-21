import './ClientLogos.css'

const logos = [
    'Goldman Sachs', 'Siemens', 'Apollo Hospitals', 'Deloitte',
    'Honeywell', 'JPMorgan', 'Novartis', 'KPMG',
]

export default function ClientLogosStrip() {
    // Duplicate for seamless loop
    const all = [...logos, ...logos]

    return (
        <section className="clients">
            <p className="clients__label">Trusted by leading enterprises worldwide</p>
            <div className="clients__track-wrapper">
                <div className="clients__track">
                    {all.map((name, i) => (
                        <div className="clients__chip" key={i}>
                            {name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
