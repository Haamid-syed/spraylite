import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" aria-label="Spray Lite Home">
          <span className="navbar__logo-icon">🫧</span>
          <span className="navbar__logo-text">
            Spray<span className="navbar__logo-highlight">Lite</span>
          </span>
        </Link>

        <nav className={`navbar__nav ${mobileOpen ? 'navbar__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
              onClick={() => setMobileOpen(false)}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="navbar__nav-cta">
            <Button
              variant="primary"
              size="sm"
              href="https://www.amazon.in"
              external
            >
              Shop Now
            </Button>
          </div>
        </nav>

        <div className="navbar__actions">
          <Button
            variant="primary"
            size="sm"
            href="https://www.amazon.in"
            external
            className="navbar__cta-desktop"
          >
            Shop Now
          </Button>
          <button
            className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
