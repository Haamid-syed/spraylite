import { Link } from 'react-router-dom';
import './Footer.css';

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-icon">🫧</span>
            <span className="footer__logo-text">
              Spray<span className="footer__logo-highlight">Lite</span>
            </span>
          </div>
          <p className="footer__tagline">
            Revolutionizing healthy cooking with advanced aerosol technology.
            Less fat. More flavor. Better living.
          </p>
        </div>

        <div className="footer__links">
          <h4 className="footer__heading">Quick Links</h4>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="footer__link">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__links">
          <h4 className="footer__heading">Shop</h4>
          <ul>
            <li>
              <a href="https://www.amazon.in" target="_blank" rel="noopener noreferrer" className="footer__link">
                Amazon India
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__links">
          <h4 className="footer__heading">Connect</h4>
          <ul>
            <li><a href="mailto:hello@spraylite.com" className="footer__link">hello@spraylite.com</a></li>
            <li><a href="#" className="footer__link">Instagram</a></li>
            <li><a href="#" className="footer__link">Facebook</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Spray Lite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
