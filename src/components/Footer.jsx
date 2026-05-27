import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Kathputlee Arts & Films
          </Link>
          <p className="footer-desc">
            Crafting cinematic narratives with uncompromising vision and precise execution.
          </p>
          <div className="footer-copyright-mobile">
            <p>&copy; {new Date().getFullYear()} Kathputlee Arts & Films. Delhi, India.</p>
          </div>
        </div>
        
        <div className="footer-menus">
          <div className="footer-column">
            <span className="footer-heading">Connect</span>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer">Vimeo</a>
          </div>
          
          <div className="footer-column">
            <span className="footer-heading">Studio</span>
            <Link to="/contact">Contact</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Privacy</Link>
          </div>

          <div className="footer-column">
            <span className="footer-heading">Navigation</span>
            <Link to="/brand-services">Brand Services</Link>
            <Link to="/originals">Originals</Link>
            <Link to="/production-services">Production Services</Link>
          </div>
        </div>

      </div>
      
      <div className="container">
        <div className="footer-copyright-desktop">
          <p>&copy; {new Date().getFullYear()} Kathputlee Arts & Films. Delhi, India.</p>
        </div>
      </div>
    </footer>
  );
}
