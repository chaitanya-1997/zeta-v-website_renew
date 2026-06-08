// Footer.jsx
import './Footer.css'
import logoImage from './ZETAV-LOGO-zv.png'

const SocialIcons = {
  linkedin: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  twitter: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43868 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  youtube: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M22.54 6.42C22.4212 5.94541 22.1792 5.51057 21.8387 5.15941C21.4982 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50178 4.84824 2.16127 5.19941C1.82076 5.55057 1.5788 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 1 11.75C0.991235 13.5237 1.14521 15.2944 1.46 17.04C1.5788 17.5146 1.82076 17.9494 2.16127 18.3006C2.50178 18.6518 2.92925 18.9068 3.4 19.04C5.12 19.5 12 19.5 12 19.5C12 19.5 18.88 19.5 20.6 19.04C21.0708 18.9068 21.4982 18.6518 21.8387 18.3006C22.1792 17.9494 22.4212 17.5146 22.54 17.04C22.8548 15.2944 23.0088 13.5237 23 11.75C23.0088 9.97631 22.8548 8.20556 22.54 6.42Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M9.75 15.02L15.5 11.75L9.75 8.48V15.02Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  instagram: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
    </svg>
  ),
  location: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  phone: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M22 16.92V19C22 20.1 21.1 21 20 21C10.61 21 3 13.39 3 4C3 2.9 3.9 2 5 2H7.08C8.18 2 9.08 2.78 9.17 3.88L9.43 7.02C9.51 8.02 8.93 8.92 8.01 9.22L5.96 9.96C7.18 12.83 9.66 15.31 12.53 16.53L13.27 14.48C13.57 13.56 14.47 12.98 15.47 13.06L18.61 13.32C19.71 13.41 20.5 14.31 20.5 15.41L22 16.92Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  email: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  )
}

const social = [
  { icon: SocialIcons.linkedin, href: '#', label: 'LinkedIn' },
  { icon: SocialIcons.twitter, href: '#', label: 'Twitter' },
  { icon: SocialIcons.youtube, href: '#', label: 'YouTube' },
  { icon: SocialIcons.instagram, href: '#', label: 'Instagram' },
]

const footerLinks = {
  Company: ['About Us', 'Leadership', 'Careers', 'News & Insights'],
  Services: ['Strategy Consulting', 'Digital Footprint', 'Analytics & Automation', 'Co-creation & Monetization', 'Enterprise Technologies', 'Legacy Transformation', 'Engineering Solutions', 'Staff Augmentation'],
  Industries: ['Financial Services', 'Manufacturing', 'Healthcare', 'Government', 'Retail', 'Technology'],
  Resources: ['Blogs', 'Case Studies', 'Technology Insights', 'Whitepapers']
}

const legal = ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR Compliance']

export default function FooterSection() {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__grid">
          {/* Brand Column */}
          <div className="site-footer__brand">
            <div className="site-footer__logo">
              <img src={logoImage} alt="Zeta-V Logo" className="site-footer__logo-img" />
              <span className="site-footer__logo-text">ZETA-V</span>
            </div>
            <p className="site-footer__tagline">
              Simplifying Solutions. Multiplying Value.
            </p>
            
            <div className="site-footer__contact">
              <div className="site-footer__contact-item">
                <span className="site-footer__contact-icon"><SocialIcons.phone /></span>
                <a href="tel:+912069015402" className="site-footer__contact-link">+91 206-901-5402</a>
              </div>
              <div className="site-footer__contact-item">
                <span className="site-footer__contact-icon"><SocialIcons.email /></span>
                <a href="mailto:contact-us@zeta-v.com" className="site-footer__contact-link">contact-us@zeta-v.com</a>
              </div>
              <div className="site-footer__contact-item">
                <span className="site-footer__contact-icon"><SocialIcons.location /></span>
                <span className="site-footer__contact-text">Gera's Imperium Rise, Hinjewadi, Pune</span>
              </div>
            </div>

            <div className="site-footer__social">
              {social.map((s, i) => (
                <a key={i} href={s.href} className="site-footer__social-link" aria-label={s.label}>
                  <s.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="site-footer__col">
              <h3 className="site-footer__col-title">{title}</h3>
              <ul className="site-footer__links">
                {links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="site-footer__link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="site-footer__bottom">
          <div className="site-footer__copyright">
            © 2026 <span className="site-footer__copyright-brand">ZETA-V</span>. All rights reserved.
          </div>
          <div className="site-footer__legal">
            {legal.map((l, i) => (
              <a key={i} href="#" className="site-footer__legal-link">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}