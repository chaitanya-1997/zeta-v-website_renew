// ClientLogos.jsx
import './ClientLogos.css';

// Logo icons as SVG components - can be replaced with actual brand logos
const CompanyIcon = ({ name }) => {
  // Generate a unique but consistent color for each company
  const getInitial = (str) => str.charAt(0).toUpperCase();
  
  return (
    <div className="clients__icon">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
      </svg>
    </div>
  );
};

// Alternative: Minimal style without icons
// To use minimal style, replace the card component below

const logos = [
  { name: 'Goldman Sachs', icon: '🏦' },
  { name: 'Siemens', icon: '⚙️' },
  { name: 'Apollo Hospitals', icon: '🏥' },
  { name: 'Deloitte', icon: '📊' },
  { name: 'Honeywell', icon: '🔧' },
  { name: 'JPMorgan', icon: '💼' },
  { name: 'Novartis', icon: '💊' },
  { name: 'KPMG', icon: '📈' },
];

export default function ClientLogosStrip({ variant = 'glass' }) {
  // Duplicate for seamless loop
  const allLogos = [...logos, ...logos];
  
  // Variants: 'glass' (default) or 'minimal'
  const cardClassName = variant === 'minimal' ? 'clients__card--minimal' : 'clients__card';
  const nameClassName = variant === 'minimal' ? 'clients__name--minimal' : 'clients__name';

  return (
    <section className="clients">
      <div className="clients__container">
        <div className="clients__header">
          <span className="section-label">Enterprise Trust</span>
          <p className="clients__label">Trusted by leading enterprises worldwide</p>
        </div>
        <div className="clients__track-wrapper">
          <div className="clients__track">
            {allLogos.map((company, idx) => (
              <div className={cardClassName} key={idx}>
                {variant !== 'minimal' && (
                  <CompanyIcon name={company.name} />
                )}
                <span className={nameClassName}>
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}