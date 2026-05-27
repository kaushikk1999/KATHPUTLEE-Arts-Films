import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import './ServiceCard.css';

export default function ServiceCard({ title, description, image, link, delay = 0 }) {
  return (
    <ScrollReveal>
      <div className="service-card" style={{ transitionDelay: `${delay}ms` }}>
        <div className="card-image-wrapper">
          {image ? (
            <img src={image} alt={title} className="card-image" loading="lazy" />
          ) : (
            <div className="card-image-placeholder"></div>
          )}
          <div className="card-overlay"></div>
        </div>
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-desc text-muted">{description}</p>
          {link && (
            <Link to={link} className="card-link text-primary">
              Explore &rarr;
            </Link>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
