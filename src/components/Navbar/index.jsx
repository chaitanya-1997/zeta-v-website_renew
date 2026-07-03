
// Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStore } from 'react-icons/fa';
import {
  ChevronDown,
  Factory, HeartPulse, Landmark,
  Zap, Building, Users, RefreshCw,
  Award, Image, Rocket,
  X, Home, UsersRound,
  Globe, BookOpen
} from 'lucide-react';
import { BookOpenCheck } from 'lucide-react';
import './Navbar.css';
import logoImage from '../../assets/about/ZETAV-LOGO-zv.webp';
const industryItems = [
  { name: 'Financial Services', path: '/industries', hash: 'financial', icon: Landmark },
  { name: 'Manufacturing', path: '/industries', hash: 'manufacturing', icon: Factory },
  { name: 'Healthcare', path: '/industries', hash: 'healthcare', icon: HeartPulse },
  { name: 'Retail & Distribution', path: '/industries', hash: 'retail', icon: FaStore }
];

const serviceItems = [
  { name: 'Digital Acceleration', path: '/services', hash: 'digital-acceleration', icon: Zap },
  { name: 'Enterprise Transformation', path: '/services', hash: 'enterprise-transformation', icon: Building },
  { name: 'Workforce Management', path: '/services', hash: 'workforce-management', icon: Users },
  {
    name: 'Shared Services',
    path: '/services',
    hash: 'shared-services',
    icon: RefreshCw,
    subItems: [
      { name: 'Digital Footprint', path: '/digitalfootprint', hash: 'digital-footprint', icon: Globe },
      { name: 'Bookkeeping Services', path: '/bookkeeping', hash: 'bookkeeping', icon: BookOpenCheck }
    ]
  },
];

const discoverItems = [
  { name: 'About', path: '/about', icon: Award },
  { name: 'Leadership', path: '/leadership', icon: UsersRound },
  { name: 'Gallery', path: '/gallery', icon: Image },
  { name: 'Accelerator', path: '/accelerator', icon: Rocket }
];

const navLinks = [
  { name: 'Romicons', path: '/romicons' },
  { name: 'Careers', path: '/careers' },
];

const dropdownConfig = {
  discover: { items: discoverItems, label: 'Discover Zeta-V' },
  industry: { items: industryItems, label: 'Industries' },
  service: { items: serviceItems, label: 'Services' }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [mobileSubDropdownOpen, setMobileSubDropdownOpen] = useState(null);
  const [subDropdownOpen, setSubDropdownOpen] = useState(null);
  const [hoverTimer, setHoverTimer] = useState(null);
  const [subHoverTimer, setSubHoverTimer] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRefs = {
    industry: useRef(null),
    service: useRef(null),
    discover: useRef(null)
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isOutside = Object.values(dropdownRefs).every(
        ref => ref.current && !ref.current.contains(event.target)
      );
      if (isOutside) {
        setDropdownOpen(null);
        setSubDropdownOpen(null);
      }
    };
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [dropdownOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setDropdownOpen(null);
        setMobileDropdownOpen(null);
        setSubDropdownOpen(null);
        setMobileSubDropdownOpen(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [menuOpen]);

  const navigateToSection = (path, hash) => {
    setDropdownOpen(null);
    setSubDropdownOpen(null);
    setMenuOpen(false);
    setMobileDropdownOpen(null);
    setMobileSubDropdownOpen(null);

    const fullPageRoutes = ['/bookkeeping', '/about', '/gallery', '/accelerator', '/romicons', '/careers', '/leadership', '/digitalfootprint'];
    if (fullPageRoutes.includes(path)) {
      navigate(path);
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    } else if (location.pathname === path) {
      window.dispatchEvent(new CustomEvent('navbar:scrollToSection', { detail: { hash } }));
    } else {
      navigate(path, { state: { scrollToSection: hash, activeSection: hash } });
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    setMenuOpen(false);
    setDropdownOpen(null);
    setMobileDropdownOpen(null);
    setSubDropdownOpen(null);
    setMobileSubDropdownOpen(null);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMenuOpen(false);
    setDropdownOpen(null);
    setMobileDropdownOpen(null);
  };

  const handleContactClick = () => {
    navigate('/contact');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    setMenuOpen(false);
    setDropdownOpen(null);
    setMobileDropdownOpen(null);
    setSubDropdownOpen(null);
  };

  const handleDiscoverClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMenuOpen(false);
    setDropdownOpen(null);
    setMobileDropdownOpen(null);
  };

  const handleDropdownClick = (dropdown, e) => {
    e.preventDefault();
    e.stopPropagation();
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
    setSubDropdownOpen(null);
  };

  const handleMouseEnter = (dropdown) => {
    if (hoverTimer) clearTimeout(hoverTimer);
    const timer = setTimeout(() => setDropdownOpen(dropdown), 150);
    setHoverTimer(timer);
  };

  const handleMouseLeave = () => {
    if (hoverTimer) clearTimeout(hoverTimer);
    const timer = setTimeout(() => {
      setDropdownOpen(null);
      setSubDropdownOpen(null);
    }, 250);
    setHoverTimer(timer);
  };

  const handleSubMouseEnter = (itemName) => {
    if (subHoverTimer) clearTimeout(subHoverTimer);
    const timer = setTimeout(() => setSubDropdownOpen(itemName), 100);
    setSubHoverTimer(timer);
  };

  const handleSubMouseLeave = () => {
    if (subHoverTimer) clearTimeout(subHoverTimer);
    const timer = setTimeout(() => setSubDropdownOpen(null), 200);
    setSubHoverTimer(timer);
  };

  const toggleMobileDropdown = (dropdown, e) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileDropdownOpen(mobileDropdownOpen === dropdown ? null : dropdown);
    setMobileSubDropdownOpen(null);
  };

  const toggleMobileSubDropdown = (itemName, e) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileSubDropdownOpen(mobileSubDropdownOpen === itemName ? null : itemName);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(null);
    setMobileDropdownOpen(null);
    setMobileSubDropdownOpen(null);
  };

  const isLinkActive = (path) => location.pathname === path;
  const isHomeActive = () => location.pathname === '/';
  const isDropdownActive = (items) => items.some(item => location.pathname === item.path);

  const getActiveIndustry = () => {
    if (location.pathname === '/industries') {
      if (location.state?.activeSection) return location.state.activeSection;
      return location.hash.replace('#', '') || null;
    }
    return null;
  };

  const getActiveService = () => {
    if (location.pathname === '/services') {
      if (location.state?.activeSection) return location.state.activeSection;
      return location.hash.replace('#', '') || null;
    }
    return null;
  };

  const activeIndustry = getActiveIndustry();
  const activeService = getActiveService();
  const isIndustriesPage = location.pathname === '/industries';
  const isServicesPage = location.pathname === '/services';

  const renderDropdown = (key, config) => {
    const { items, label } = config;
    const isOpen = dropdownOpen === key;
    const isActive = key === 'discover'
      ? isHomeActive() || isDropdownActive(items)
      : (key === 'industry' ? isIndustriesPage || isDropdownActive(items) : isServicesPage || isDropdownActive(items));

    return (
      <div
        key={key}
        ref={dropdownRefs[key]}
        className={`navbar__dropdown ${isOpen ? 'open' : ''} ${isActive ? 'active' : ''}`}
        onMouseEnter={() => handleMouseEnter(key)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="navbar__dropdown-trigger-wrapper">
          {key === 'discover' ? (
            <button className="navbar__dropdown-trigger" onClick={handleDiscoverClick}>
              {label}
            </button>
          ) : (
            <Link
              to={key === 'industry' ? '/industries' : '/services'}
              className="navbar__dropdown-trigger"
              onClick={() => {
                handleNavigation(key === 'industry' ? '/industries' : '/services');
                setDropdownOpen(null);
              }}
            >
              {label}
            </Link>
          )}
          <button
            className="navbar__dropdown-arrow-btn"
            onClick={(e) => handleDropdownClick(key, e)}
            aria-label={`Toggle ${label} dropdown`}
          >
            <ChevronDown className="navbar__dropdown-arrow" size={16} />
          </button>
        </div>

        <div className="navbar__dropdown-menu">
          {items.map((item) => {
            const Icon = item.icon;
            const isActiveItem = key === 'industry'
              ? isIndustriesPage && activeIndustry === item.hash
              : key === 'service'
              ? isServicesPage && activeService === item.hash
              : isLinkActive(item.path);
            const hasSubItems = item.subItems && item.subItems.length > 0;
            const isSubOpen = subDropdownOpen === item.name;

            if (hasSubItems) {
              return (
                <div
                  key={item.name}
                  className={`navbar__dropdown-item-wrapper ${isSubOpen ? 'sub-open' : ''}`}
                  onMouseEnter={() => handleSubMouseEnter(item.name)}
                  onMouseLeave={handleSubMouseLeave}
                >
                  <button
                    className={`navbar__dropdown-item has-sub ${isActiveItem ? 'active' : ''}`}
                    onClick={() => navigateToSection(item.path, item.hash)}
                  >
                    <Icon className="navbar__dropdown-item-icon" size={16} />
                    <span>{item.name}</span>
                    <ChevronDown className="navbar__sub-arrow" size={13} />
                  </button>
                  <div className={`navbar__sub-dropdown-menu ${isSubOpen ? 'open' : ''}`}>
                    {item.subItems.map((sub) => {
                      const SubIcon = sub.icon;
                      return (
                        <button
                          key={sub.name}
                          className="navbar__dropdown-item sub-item"
                          onClick={() => navigateToSection(sub.path, sub.hash)}
                        >
                          <SubIcon className="navbar__dropdown-item-icon" size={15} />
                          {sub.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <button
                key={item.name}
                className={`navbar__dropdown-item ${isActiveItem ? 'active' : ''}`}
                onClick={() => {
                  if (key === 'discover') handleNavigation(item.path);
                  else navigateToSection(item.path, item.hash);
                }}
              >
                <Icon className="navbar__dropdown-item-icon" size={16} />
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const renderMobileDropdown = (key, config) => {
    const { items, label } = config;
    const isOpen = mobileDropdownOpen === key;
    const isActive = key === 'discover'
      ? isHomeActive() || isDropdownActive(items)
      : (key === 'industry' ? isIndustriesPage || isDropdownActive(items) : isServicesPage || isDropdownActive(items));

    return (
      <div key={key} className="navbar__mobile-dropdown-item">
        <button
          className={`navbar__mobile-dropdown-trigger ${isOpen ? 'open' : ''}`}
          onClick={(e) => toggleMobileDropdown(key, e)}
        >
          <span className={isActive ? 'active' : ''}>{label}</span>
          <ChevronDown className="navbar__mobile-dropdown-arrow" size={20} />
        </button>
        <div className={`navbar__mobile-dropdown-menu ${isOpen ? 'open' : ''}`}>
          {key === 'discover' && (
            <Link
              to="/"
              className={`navbar__mobile-dropdown-link ${isHomeActive() ? 'active' : ''}`}
              onClick={() => handleNavigation('/')}
            >
              <Home className="navbar__mobile-dropdown-item-icon" size={16} />
              Home
            </Link>
          )}
          {key !== 'discover' && (
            <Link
              to={key === 'industry' ? '/industries' : '/services'}
              className="navbar__mobile-dropdown-link"
              onClick={() => handleNavigation(key === 'industry' ? '/industries' : '/services')}
            >
              All {label}
            </Link>
          )}
          {items.map((item) => {
            const Icon = item.icon;
            const isActiveItem = key === 'industry'
              ? isIndustriesPage && activeIndustry === item.hash
              : key === 'service'
              ? isServicesPage && activeService === item.hash
              : isLinkActive(item.path);
            const hasSubItems = item.subItems && item.subItems.length > 0;
            const isSubOpen = mobileSubDropdownOpen === item.name;

            if (hasSubItems) {
              return (
                <div key={item.name} className="navbar__mobile-sub-wrapper">
                  <button
                    className={`navbar__mobile-dropdown-link has-sub ${isSubOpen ? 'sub-open' : ''} ${isActiveItem ? 'active' : ''}`}
                    onClick={(e) => toggleMobileSubDropdown(item.name, e)}
                  >
                    <Icon className="navbar__mobile-dropdown-item-icon" size={16} />
                    <span>{item.name}</span>
                    <ChevronDown className="navbar__mobile-sub-arrow" size={14} />
                  </button>
                  <div className={`navbar__mobile-sub-menu ${isSubOpen ? 'open' : ''}`}>
                    {item.subItems.map((sub) => {
                      const SubIcon = sub.icon;
                      return (
                        <button
                          key={sub.name}
                          className="navbar__mobile-dropdown-link sub-link"
                          onClick={() => navigateToSection(sub.path, sub.hash)}
                        >
                          <SubIcon className="navbar__mobile-dropdown-item-icon" size={14} />
                          {sub.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <button
                key={item.name}
                className={`navbar__mobile-dropdown-link ${isActiveItem ? 'active' : ''}`}
                onClick={() => {
                  if (key === 'discover') handleNavigation(item.path);
                  else navigateToSection(item.path, item.hash);
                }}
              >
                <Icon className="navbar__mobile-dropdown-item-icon" size={16} />
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo" onClick={handleLogoClick}>
            <img src={logoImage} alt="Zeta-V Logo" className="navbar__logo-mark" />
            <div className="navbar__wordmark-wrapper">
              <span className="navbar__wordmark-line">Zeta-V Technology Solutions</span>
            </div>
          </Link>

          <nav className="navbar__links">
            {renderDropdown('discover', dropdownConfig.discover)}
            {renderDropdown('industry', dropdownConfig.industry)}
            {renderDropdown('service', dropdownConfig.service)}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`navbar__link ${isLinkActive(link.path) ? 'active' : ''}`}
                onClick={() => handleNavigation(link.path)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="navbar__actions">
            <button className="navbar__btn-contact" onClick={handleContactClick}>
              Get in Touch
            </button>
            <button
              className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <button
              className="navbar__mobile-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
            <div className="navbar__mobile-links">
              {renderMobileDropdown('discover', dropdownConfig.discover)}
              <div className="navbar__mobile-separator"></div>
              {renderMobileDropdown('industry', dropdownConfig.industry)}
              {renderMobileDropdown('service', dropdownConfig.service)}
              <div className="navbar__mobile-separator"></div>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`navbar__mobile-link ${isLinkActive(link.path) ? 'active' : ''}`}
                  onClick={() => handleNavigation(link.path)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="navbar__mobile-btn-contact" onClick={handleContactClick}>
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}