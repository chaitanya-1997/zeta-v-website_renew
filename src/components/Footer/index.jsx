// Footer.jsx
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUpRight,
  Clock,
  Send
} from 'lucide-react';
import { 
  FaFacebook, 
  FaXTwitter, 
  FaLinkedin, 
  FaInstagram, 
  FaYoutube,
  FaWhatsapp
} from 'react-icons/fa6';
import { HiOutlineSparkles } from 'react-icons/hi2';
import './Footer.css';
import logoImage from '../../../public/ZETAV-LOGO-zv.png';

// ─── FOOTER LINKS MATCHING NAVBAR ───
const footerLinks = {
  'Discover Zeta-V': [
    { name: 'About', path: '/about' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Accelerator', path: '/accelerator' }
  ],
  Industries: [
    { name: 'Financial Services', path: '/industries', hash: 'financial' },
    { name: 'Manufacturing', path: '/industries', hash: 'manufacturing' },
    { name: 'Healthcare', path: '/industries', hash: 'healthcare' },
    { name: 'Retail & Distribution', path: '/industries', hash: 'retail' }
  ],
  Services: [
    { name: 'Digital Acceleration', path: '/services', hash: 'digital-acceleration' },
    { name: 'Enterprise Transformation', path: '/services', hash: 'enterprise-transformation' },
    { name: 'Workforce Management', path: '/services', hash: 'workforce-management' },
    { name: 'Shared Services', path: '/services', hash: 'shared-services' },
    { name: 'Digital Footprint', path: '/digitalfootprint' },
    { name: 'Book Keeping', path: '/bookkeeping' }
  ],
  'Quick Links': [
    { name: 'Romicons', path: '/romicons' },
    { name: 'Careers', path: '/careers' },
      { name: 'Get in Touch', path: '/contact' , hash: 'enquiries' }
  ]
};

// ─── CUSTOM LINK WITH SCROLL HANDLING ───
const ScrollToTopLink = ({ to, hash, children, ...props }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();

    // Full page routes (no hash)
    const fullPageRoutes = ['/about', '/leadership', '/gallery', '/accelerator', '/romicons', '/careers', '/digitalfootprint', '/bookkeeping', '/contact'];

    if (fullPageRoutes.includes(to)) {
      navigate(to);
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    } else if (location.pathname === to && hash) {
      // Same page, scroll to section
      window.dispatchEvent(new CustomEvent('navbar:scrollToSection', { detail: { hash } }));
    } else if (hash) {
      // Different page with hash
      navigate(to, { state: { scrollToSection: hash, activeSection: hash } });
    } else {
      navigate(to);
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    }
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default function FooterSection() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/contact');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  return (
    <footer className="footer-premium">
      {/* Background Decorations */}
      <div className="footer-premium-bg">
        <div className="footer-premium-blob fblob-1" />
        <div className="footer-premium-blob fblob-2" />
        <div className="footer-premium-grid" />
      </div>

      <div className="footer-premium-container">
        {/* Top Section */}
        <div className="footer-premium-top">
          {/* Brand Column */}
          <div className="footer-premium-brand">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="footer-premium-logo">
              <img src={logoImage} alt="Zeta-V Logo" className="footer-premium-logo-img" />
              <span className="footer-premium-logo-text">Zeta-V</span>
            </Link>
            
            <p className="footer-premium-tagline">
              Simplifying Solutions. <span className="highlight-text">Multiplying Value.</span>
              <br />
              Enterprise engineering for the modern world.
            </p>
            
            <div className="footer-premium-contact">
              <div className="footer-premium-contact-item">
                <Phone size={16} />
                <a href="tel:+912069015402">+91 206-901-5402</a>
              </div>
              <div className="footer-premium-contact-item">
                <Mail size={16} />
                <a href="mailto:contactus@zeta-v.com">contactus@zeta-v.com</a>
              </div>
              <div className="footer-premium-contact-item">
                <MapPin size={16} />
                <span>Gera's Imperium Rise, Hinjewadi, Pune</span>
              </div>
              <div className="footer-premium-contact-item">
                <Clock size={16} />
                <span>Mon - Fri</span>
              </div>
            </div>

            <div className="footer-premium-social">
              <span className="social-label">Follow Us</span>
              <div className="social-icons">
                <a href="https://www.linkedin.com/company/zeta-v-technology-solutions-ltd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon linkedin">
                  <FaLinkedin size={18} />
                </a>
                <a href="https://x.com/ZetaV2024" target="_blank" rel="noopener noreferrer" aria-label="Twitter X" className="social-icon twitter">
                  <FaXTwitter size={18} />
                </a>
                <a href="https://www.youtube.com/@zeta-v-2024" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon youtube">
                  <FaYoutube size={18} />
                </a>
                <a href="https://www.instagram.com/zetav24/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon instagram">
                  <FaInstagram size={18} />
                </a>
                <a href="https://www.facebook.com/people/Zeta-V-Technology-Solutions/61571634543628/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon facebook">
                  <FaFacebook size={18} />
                </a>
                <a href="https://wa.me/918087396605" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-icon whatsapp">
                  <FaWhatsapp size={18} /> 
                </a>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="footer-premium-col">
              <h3 className="footer-premium-col-title">
                {/* <HiOutlineSparkles className="col-icon" /> */}
                {title}
              </h3>
              <ul className="footer-premium-links">
                {links.map((link, i) => (
                  <li key={i}>
                    <ScrollToTopLink to={link.path} hash={link.hash} className="footer-premium-link">
                      <span className="link-dot" />
                      {link.name}
                      <ArrowUpRight size={14} className="link-arrow" />
                    </ScrollToTopLink>
                  </li>
                ))}
              
              </ul>
            </div>
          ))}

       
       
        </div>

        {/* Newsletter Section */}
        <div className="footer-premium-newsletter">
          <div className="newsletter-content">
            <div className="newsletter-icon">
              <Send size={20} />
            </div>
            <div className="newsletter-text">
              <h4>Subscribe to Our Newsletter</h4>
              <p>Get the latest updates, insights, and news delivered to your inbox.</p>
            </div>
          </div>
          <a 
            href="https://www.linkedin.com/newsletters/weekly-newsletter-7442213904778371072" 
            target="_blank" 
            rel="noopener noreferrer"
            className="newsletter-link"
          >
            <button type="button" className="newsletter-btn">
              <span>Subscribe on LinkedIn</span>
              <ArrowUpRight size={18} />
            </button>
          </a>
        </div>

        {/* Bottom Section */}
        <div className="footer-premium-bottom">
          <div className="footer-premium-copyright">
            © {new Date().getFullYear()} Zeta-V Technology Solutions. All rights reserved.
          </div>
          {/* <div className="footer-premium-legal">
            <span className="footer-premium-legal-link">Made with ❤️ in India</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}