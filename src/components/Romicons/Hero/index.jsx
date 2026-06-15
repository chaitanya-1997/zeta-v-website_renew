import "./Hero.css";
import { ArrowRight } from "lucide-react";
import hero3Img from "../../../assets/Advisory/hero3.webp";

const Hero = () => {
  return (
    <section
      className="romicons-hero"
      style={{ backgroundImage: `url(${hero3Img})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="section-label">
          Strategic Advisory Services
        </span>

        <h1>
          Business <span className="grad-text">Advisories </span>
          that turn Strategy Into Value.
        </h1>

        <p>
          Driving sustainable growth, market expansion,
          strategic transactions, and technology transformation
          through expert advisory and execution excellence.
        </p>

        <div className="hero-buttons">
          <button className="btn-grad">
            Explore Advisories
            <ArrowRight size={18} />
          </button>

          <button className="btn-outline">
            Talk to Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;