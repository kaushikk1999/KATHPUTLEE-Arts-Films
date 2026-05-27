import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import './CTASection.css';

export default function CTASection({ title, subtitle, buttonText, buttonLink }) {
  return (
    <section className="cta-section section">
      <div className="container">
        <ScrollReveal className="cta-content centered">
          <h2 className="cta-title">{title}</h2>
          {subtitle && <p className="cta-subtitle text-muted">{subtitle}</p>}
          <div className="cta-action">
            <Link to={buttonLink} className="btn btn-primary">
              {buttonText}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
