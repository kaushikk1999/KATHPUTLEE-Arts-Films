import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          Kathputlee Arts & Films
        </Link>
        
        <nav className={`desktop-nav`}>
          {/* Removed exact active class matcher for cleaner NavLink usage */}
          <NavLink to="/brand-services">Brand Services</NavLink>
          <NavLink to="/originals">Originals</NavLink>
          <NavLink to="/production-services">Production Services</NavLink>
        </nav>

        <Link to="/contact" className="header-cta d-none-mobile">Start Project</Link>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav>
          <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/brand-services" onClick={() => setIsMobileMenuOpen(false)}>Brand Services</NavLink>
          <NavLink to="/originals" onClick={() => setIsMobileMenuOpen(false)}>Originals</NavLink>
          <NavLink to="/production-services" onClick={() => setIsMobileMenuOpen(false)}>Production Services</NavLink>
          <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</NavLink>
        </nav>
      </div>
    </header>
  );
}
