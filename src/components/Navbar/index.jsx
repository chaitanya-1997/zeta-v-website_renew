import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = ['About', 'Industries', 'Services', 'Journey', 'Careers', 'Contact']

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleLinkClick = (e, link) => {
        e.preventDefault()
        const id = link.toLowerCase()
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        setMenuOpen(false)
    }

    return (
        <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
            <div className="navbar__inner">
                {/* Logo */}
                <a href="/" className="navbar__logo">
                    <svg className="navbar__logo-mark" viewBox="0 0 48 48" fill="none">
                        <defs>
                            <linearGradient id="lgNav" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#0D47A1" />
                                <stop offset="100%" stopColor="#00B4FF" />
                            </linearGradient>
                        </defs>
                        <text x="2" y="38" fontFamily="Syne,sans-serif" fontWeight="800" fontSize="38" fill="url(#lgNav)">Z</text>
                    </svg>
                    <span className="navbar__wordmark">ZETA-V</span>
                </a>

                {/* Desktop Nav */}
                <nav className="navbar__links">
                    {navLinks.map(link => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="navbar__link"
                            onClick={e => handleLinkClick(e, link)}
                        >
                            {link}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <a href="#contact" className="navbar__cta btn-grad" onClick={e => handleLinkClick(e, 'Contact')}>
                    Let's Talk
                </a>

                {/* Hamburger */}
                <button
                    className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}>
                {navLinks.map((link, i) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        className="navbar__mobile-link"
                        style={{ animationDelay: menuOpen ? `${i * 80}ms` : '0ms' }}
                        onClick={e => handleLinkClick(e, link)}
                    >
                        {link}
                    </a>
                ))}
                <a href="#contact" className="btn-grad navbar__mobile-cta" onClick={e => handleLinkClick(e, 'Contact')}>
                    Let's Talk
                </a>
            </div>
        </header>
    )
}
