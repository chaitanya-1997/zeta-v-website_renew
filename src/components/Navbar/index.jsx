import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Zetalogo from "./Zetalogo.png";
/* Links that navigate to separate pages */
const routeLinks = {
  Services: "/services",
  Industries: "/industries",
  Careers: "/careers",
  Contact: "/contact",
};

/* Links that scroll to sections on the home page */
const scrollLinks = ["About", "Journey", "Careers", "Contact"];

/* Full ordered nav list */
const navOrder = [
  "About",
  "Industries",
  "Services",
  "Journey",
  "Careers",
  "Contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /**
   * Handle click for scroll-based links.
   * If we're on the home page, scroll smoothly.
   * If we're on a sub-page, navigate to home first, then scroll.
   */
  const handleScrollLink = (e, link) => {
    e.preventDefault();
    const id = link.toLowerCase();
    setMenuOpen(false);

    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  /**
   * Handle route link click (Services / Industries)
   */
  const handleRouteLink = () => {
    setMenuOpen(false);
  };

  /* After navigating back to home from a sub-page, scroll to the target section */
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  const renderLink = (link) => {
    if (routeLinks[link]) {
      const isActive = location.pathname === routeLinks[link];
      return (
        <Link
          key={link}
          to={routeLinks[link]}
          className={`navbar__link${isActive ? " navbar__link--active" : ""}`}
          onClick={handleRouteLink}
        >
          {link}
        </Link>
      );
    }

    return (
      <a
        key={link}
        href={`#${link.toLowerCase()}`}
        className="navbar__link"
        onClick={(e) => handleScrollLink(e, link)}
      >
        {link}
      </a>
    );
  };

  const renderMobileLink = (link, i) => {
    if (routeLinks[link]) {
      const isActive = location.pathname === routeLinks[link];
      return (
        <Link
          key={link}
          to={routeLinks[link]}
          className={`navbar__mobile-link${isActive ? " navbar__mobile-link--active" : ""}`}
          style={{ animationDelay: menuOpen ? `${i * 80}ms` : "0ms" }}
          onClick={handleRouteLink}
        >
          {link}
        </Link>
      );
    }

    return (
      <a
        key={link}
        href={`#${link.toLowerCase()}`}
        className="navbar__mobile-link"
        style={{ animationDelay: menuOpen ? `${i * 80}ms` : "0ms" }}
        onClick={(e) => handleScrollLink(e, link)}
      >
        {link}
      </a>
    );
  };

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        {/* Logo */}
        {/* <Link to="/" className="navbar__logo">
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
                </Link> */}

        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <img src={Zetalogo} alt="ZETA-V Logo" className="navbar__logo-mark" />

          <span className="navbar__wordmark">Zeta-V Technology Solutions</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__links">
          {navOrder.map((link) => renderLink(link))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="navbar__cta btn-grad"
          onClick={(e) => handleScrollLink(e, "Contact")}
        >
          Let's Talk
        </a>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`navbar__mobile${menuOpen ? " navbar__mobile--open" : ""}`}
      >
        {navOrder.map((link, i) => renderMobileLink(link, i))}
        <a
          href="#contact"
          className="btn-grad navbar__mobile-cta"
          onClick={(e) => handleScrollLink(e, "Contact")}
        >
          Let's Talk
        </a>
      </div>
    </header>
  );
}
