import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', section: 'hero' },
  { label: 'Products', section: 'products' },
  { label: 'Our Services', section: 'services' },
  { label: 'Testimonials', section: 'testimonials' },
  { label: 'Contact', section: 'contact' },
];

const Navbar = ({ onNavClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (sectionKey) => {
    onNavClick?.(sectionKey);
    setIsExpanded(false);
  };

  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    onNavClick?.('hero');
    setIsExpanded(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light sticky-top shadow-sm py-3">
      <div className="container-xl">
        <Link className="navbar-brand fw-bold text-uppercase" to="/" onClick={handleHomeClick}>
          Serenity Spa
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse${isExpanded ? ' show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            {navItems.map((item) => (
              <li className="nav-item" key={item.section}>
                <button
                  type="button"
                  className="btn btn-link nav-link"
                  onClick={() => handleSectionClick(item.section)}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="nav-item d-flex gap-2 ms-lg-4 mt-3 mt-lg-0">
              <Link className="btn btn-outline-dark px-3" to="/login" onClick={() => setIsExpanded(false)}>
                Login
              </Link>
              <Link className="btn btn-dark px-3" to="/signup" onClick={() => setIsExpanded(false)}>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
