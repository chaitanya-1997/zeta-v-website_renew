import './Footer.css'

const social = [
    { icon: '💼', label: 'LinkedIn', href: '#' },
    { icon: '🐦', label: 'Twitter', href: '#' },
    { icon: '▶️', label: 'YouTube', href: '#' },
    { icon: '📸', label: 'Instagram', href: '#' },
]

const cols = [
    {
        title: 'Discover Zeta-V',
        links: ['About Us', 'Leadership', 'Accelerator', 'Careers'],
    },
    {
        title: 'Industries',
        links: ['Financial Services', 'Manufacturing', 'Healthcare', 'Government'],
    },
    {
        title: 'Services',
        links: ['Strategy Consulting', 'Digital Footprint', 'Analytics & Automation', 'Enterprise Technologies', 'Legacy Transformation', 'Staff Augmentation'],
    },
    {
        title: 'Connect',
        links: ['Growth Advisory', 'Deal Advisory', 'Market Advisory', 'Tech Advisory', 'Worldwide Offices', 'Enquiries'],
    },
]

const legal = ['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Sitemap']

export default function FooterSection() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                {/* Brand col */}
                <div className="footer__brand">
                    <div className="footer__logo">
                        <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                            <defs>
                                <linearGradient id="lgFoot" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#0D47A1" />
                                    <stop offset="100%" stopColor="#00B4FF" />
                                </linearGradient>
                            </defs>
                            <text x="2" y="38" fontFamily="Syne,sans-serif" fontWeight="800" fontSize="38" fill="url(#lgFoot)">Z</text>
                        </svg>
                        <span className="footer__wordmark">ZETA-V</span>
                    </div>
                    <p className="footer__tagline">Where Technology Meets Purpose</p>
                    <p className="footer__desc">
                        Global enterprise technology consulting across Financial Services,
                        Manufacturing, Healthcare, and Government.
                    </p>
                    <a href="mailto:contactus@zeta-v.com" className="footer__email">
                        contactus@zeta-v.com
                    </a>
                    <div className="footer__socials">
                        {social.map((s, i) => (
                            <a key={i} href={s.href} className="footer__social" aria-label={s.label}>
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Nav cols */}
                {cols.map((col, i) => (
                    <div key={i} className="footer__col">
                        <h4 className="footer__col-title">{col.title}</h4>
                        <ul className="footer__links">
                            {col.links.map((link, j) => (
                                <li key={j}>
                                    <a href="#" className="footer__link">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="footer__bottom">
                <span className="footer__copy">
                    © 2025 <span className="footer__copy-brand">Zeta-V</span>. All rights reserved.
                </span>
                <div className="footer__legal">
                    {legal.map((l, i) => (
                        <a key={i} href="#" className="footer__legal-link">{l}</a>
                    ))}
                </div>
            </div>
        </footer>
    )
}
