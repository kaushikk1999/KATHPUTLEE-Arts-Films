import { Link } from 'react-router-dom';
import './CinematicHero.css';

export default function CinematicHero({ title, subtitle, bgImage, bgVideo, ctaText, ctaLink }) {
  return (
    <section className="cinematic-hero">
      <div className="hero-background fade-in">
        {bgVideo ? (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="bg-media"
            poster={bgImage}
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
        ) : (
          <img src={bgImage} alt="" className="bg-media" />
        )}
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <h1 className="hero-title fade-in" style={{ animationDelay: '0.2s' }}>
          {title.split('\n').map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h1>
        {subtitle && (
          <p className="hero-subtitle fade-in" style={{ animationDelay: '0.6s' }}>
            {subtitle}
          </p>
        )}
        {ctaText && ctaLink && (
          <div className="hero-cta fade-in" style={{ animationDelay: '0.9s' }}>
            <Link to={ctaLink} className="btn btn-primary">
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
