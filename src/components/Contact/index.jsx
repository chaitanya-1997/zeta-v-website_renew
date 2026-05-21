import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'
import './Contact.css'

const serviceOptions = [
    'Strategy Consulting', 'Digital Footprint', 'Analytics & Automation',
    'Enterprise Technologies', 'Legacy Transformation', 'Staff Augmentation',
    'Growth Advisory', 'Other',
]

const steps = [
    { num: 1, text: <>Our representative contacts you <em>within</em> 24 hours</> },
    { num: 2, text: <>We collect all the <em>necessary</em> requirements from you</> },
    { num: 3, text: <>We keep confidentiality by <em>signing</em> NDA</> },
    { num: 4, text: <>The team of analysts and developers <em>prepare</em> estimation</> },
]

const contacts = [
    { icon: '📞', label: 'Sales', phone: '+91 (8085)-122017' },
    { icon: '📱', label: 'Partnership', phone: '+91 (8823)-874387' },
    { icon: '📱', label: 'Support', phone: '+91 (8878)-120414' },
    { icon: '📱', label: 'HR', phone: '+91 (6263)-967679' },
]

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '', email: '', company: '', phone: '', service: '', message: '',
    })
    const [submitted, setSubmitted] = useState(false)
    const [headRef, headVisible] = useReveal(0)
    const [leftRef, leftVisible] = useReveal(0)
    const [rightRef, rightVisible] = useReveal(100)
    const [connectRef, connectVisible] = useReveal(0)
    const [hqRef, hqVisible] = useReveal(0)

    const handleChange = e => setFormData(f => ({ ...f, [e.target.name]: e.target.value }))

    const handleSubmit = e => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <section id="contact" className="contact">

            {/* ── Section 1: Header + Form ──────────────────── */}
            <div className="contact__inner">
                <div ref={headRef} className={`contact__head reveal${headVisible ? ' visible' : ''}`}>
                    <span className="section-label">Get in Touch</span>
                    <h2 className="section-title" style={{ textAlign: 'center' }}>
                        Ready to <span className="grad-text">Transform</span> Your Enterprise?
                    </h2>
                    <p className="section-subtitle" style={{ margin: '16px auto 0', textAlign: 'center' }}>
                        Tell us about your challenge. We'll respond within 24 hours.
                    </p>
                </div>

                <div className="contact__layout">
                    {/* Steps */}
                    <div ref={leftRef} className={`contact__steps-box reveal-left${leftVisible ? ' visible' : ''}`}>
                        <h3 className="contact__steps-title">Things we do next:</h3>
                        <ol className="contact__steps">
                            {steps.map(s => (
                                <li key={s.num} className="contact__step">
                                    <span className="contact__step-num">{s.num}</span>
                                    <p className="contact__step-text">{s.text}</p>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Form */}
                    <div ref={rightRef} className={`contact__form-box reveal-right${rightVisible ? ' visible' : ''}`}>
                        {submitted ? (
                            <div className="contact__success">
                                <div className="contact__success-icon">✓</div>
                                <h3>Message Sent!</h3>
                                <p>We'll be in touch within 24 business hours.</p>
                            </div>
                        ) : (
                            <form className="contact__form" onSubmit={handleSubmit}>
                                <div className="contact__row">
                                    <div className="contact__field">
                                        <label htmlFor="cf-name">Full Name</label>
                                        <input id="cf-name" name="name" type="text" placeholder="Full Name"
                                            value={formData.name} onChange={handleChange} required />
                                    </div>
                                    <div className="contact__field">
                                        <label htmlFor="cf-email">Work Email</label>
                                        <input id="cf-email" name="email" type="email" placeholder="Work Email"
                                            value={formData.email} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="contact__row">
                                    <div className="contact__field">
                                        <label htmlFor="cf-company">Company</label>
                                        <input id="cf-company" name="company" type="text" placeholder="Company"
                                            value={formData.company} onChange={handleChange} />
                                    </div>
                                    <div className="contact__field">
                                        <label htmlFor="cf-phone">Phone</label>
                                        <input id="cf-phone" name="phone" type="tel" placeholder="Phone"
                                            value={formData.phone} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="contact__field">
                                    <label htmlFor="cf-service">Service Interest</label>
                                    <select id="cf-service" name="service" value={formData.service} onChange={handleChange}>
                                        <option value="">Select Service Interest</option>
                                        {serviceOptions.map(o => <option key={o} value={o}>{o}</option>)}
                                    </select>
                                </div>
                                <div className="contact__field">
                                    <label htmlFor="cf-message">Message</label>
                                    <textarea id="cf-message" name="message" rows={4}
                                        placeholder="Tell us about your challenge or project..."
                                        value={formData.message} onChange={handleChange} />
                                </div>
                                <button type="submit" className="btn-grad contact__submit">
                                    Send Message →
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            {/* ── Section 2: Connect & Collaborate ─────────── */}
            <div ref={connectRef} className={`contact__connect-section reveal${connectVisible ? ' visible' : ''}`}>
                <div className="contact__connect-inner">
                    <div className="contact__connect-left">
                        <h2 className="contact__connect-title">Let's Connect &amp; Collaborate</h2>
                        <p className="contact__connect-sub">
                            Got a project, idea, or urgent requirement? Reach out today<br />
                            and our team will respond promptly.
                        </p>
                        <div className="contact__cards">
                            {contacts.map((c, i) => (
                                <div key={i} className="contact__card">
                                    <span className="contact__card-icon">{c.icon}</span>
                                    <div>
                                        <div className="contact__card-label">{c.label}</div>
                                        <div className="contact__card-phone">{c.phone}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="contact__qr-box">
                        <div className="contact__qr-badge">Quick Connect</div>
                        <div className="contact__qr-img">
                            {/* QR Code placeholder – replace src with real QR */}
                            <svg viewBox="0 0 100 100" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
                                {/* Finder pattern TL */}
                                <rect x="5" y="5" width="30" height="30" rx="3" fill="#111" />
                                <rect x="10" y="10" width="20" height="20" rx="2" fill="white" />
                                <rect x="14" y="14" width="12" height="12" rx="1" fill="#111" />
                                {/* Finder pattern TR */}
                                <rect x="65" y="5" width="30" height="30" rx="3" fill="#111" />
                                <rect x="70" y="10" width="20" height="20" rx="2" fill="white" />
                                <rect x="74" y="14" width="12" height="12" rx="1" fill="#111" />
                                {/* Finder pattern BL */}
                                <rect x="5" y="65" width="30" height="30" rx="3" fill="#111" />
                                <rect x="10" y="70" width="20" height="20" rx="2" fill="white" />
                                <rect x="14" y="74" width="12" height="12" rx="1" fill="#111" />
                                {/* Data modules */}
                                {[40, 45, 50, 55, 60].map(x => [40, 45, 50, 55, 60].map(y =>
                                    Math.random() > 0.5 ? <rect key={`${x}-${y}`} x={x} y={y} width="4" height="4" fill="#111" /> : null
                                ))}
                                <rect x="40" y="40" width="4" height="4" fill="#111" />
                                <rect x="50" y="40" width="4" height="4" fill="#111" />
                                <rect x="60" y="40" width="4" height="4" fill="#111" />
                                <rect x="40" y="50" width="4" height="4" fill="#111" />
                                <rect x="55" y="50" width="4" height="4" fill="#111" />
                                <rect x="45" y="55" width="4" height="4" fill="#111" />
                                <rect x="60" y="55" width="4" height="4" fill="#111" />
                                <rect x="40" y="60" width="4" height="4" fill="#111" />
                                <rect x="50" y="60" width="4" height="4" fill="#111" />
                                <rect x="42" y="42" width="4" height="4" fill="#111" />
                                <rect x="52" y="45" width="4" height="4" fill="#111" />
                                <rect x="58" y="42" width="4" height="4" fill="#111" />
                                <rect x="44" y="58" width="4" height="4" fill="#111" />
                                <rect x="62" y="62" width="4" height="4" fill="#111" />
                                {/* Timing strips */}
                                {[40, 44, 48, 52, 56, 60].map((x, i) =>
                                    i % 2 === 0 ? <rect key={`th-${x}`} x={x} y="35" width="4" height="4" fill="#111" /> : null
                                )}
                                {[40, 44, 48, 52, 56, 60].map((y, i) =>
                                    i % 2 === 0 ? <rect key={`tv-${y}`} x="35" y={y} width="4" height="4" fill="#111" /> : null
                                )}
                            </svg>
                        </div>
                        <p className="contact__qr-label">Scan to Chat Instantly</p>
                        <p className="contact__qr-email">
                            Prefer email? <a href="mailto:sales@zeta-v.com">sales@zeta-v.com</a><br />
                            or connect on WhatsApp for instant support.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Section 3: Headquarters ───────────────────── */}
            <div ref={hqRef} className={`contact__hq-section reveal${hqVisible ? ' visible' : ''}`}>
                <div className="contact__hq-inner">
                    {/* Map placeholder */}
                    <div className="contact__map">
                        <iframe
                            title="Zeta-V HQ"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835!2d-122.3991!3d37.7919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064!2sSan+Francisco!5e0!3m2!1sen!2sus!4v1699999999999"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: 'inherit' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Info */}
                    <div className="contact__hq-info">
                        <span className="section-label">Our location</span>
                        <h2 className="contact__hq-title">Find our headquarter</h2>
                        <p className="contact__hq-sub">
                            Where ideas meet innovation. Come visit us at our San<br />
                            Francisco headquarters, or connect with us online
                        </p>
                        <div className="contact__hq-address">
                            <span className="contact__hq-pin">📍</span>
                            <div>
                                <div className="contact__hq-name">Zeta-V headquarters</div>
                                <div className="contact__hq-loc">500 Market Street, Suite 1200<br />San Francisco, CA 94105</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
