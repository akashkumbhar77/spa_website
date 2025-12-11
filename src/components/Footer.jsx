import { Link } from 'react-router-dom';

const currentYear = new Date().getFullYear();

const Footer = ({ onNavClick }) => (
  <footer className="footer py-5 mt-5 bg-dark text-white">
    <div className="container-xl">
      <div className="row g-4">
        <div className="col-md-4">
          <h5 className="fw-bold">Serenity Spa</h5>
          <p className="text-white-50">
            Immersive rituals, intuitive professionals, and design inspired by nature to help you reconnect.
          </p>
        </div>
        <div className="col-md-4">
          <h6 className="fw-bold mb-3">Quick Links</h6>
          <ul className="list-unstyled d-grid gap-2">
            <li>
              <button type="button" className="btn btn-link text-white p-0" onClick={() => onNavClick?.('hero')}>
                Home
              </button>
            </li>
            <li>
              <button type="button" className="btn btn-link text-white p-0" onClick={() => onNavClick?.('services')}>
                Services
              </button>
            </li>
            <li>
              <button type="button" className="btn btn-link text-white p-0" onClick={() => onNavClick?.('products')}>
                Products
              </button>
            </li>
            <li>
              <Link className="text-white text-decoration-none" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="text-white text-decoration-none" to="/signup">
                Signup
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h6 className="fw-bold mb-3">Stay Connected</h6>
          <div className="d-flex gap-3">
            <span className="social-circle">IG</span>
            <span className="social-circle">FB</span>
            <span className="social-circle">WA</span>
          </div>
        </div>
      </div>
      <hr className="border-white-25 my-4" />
      <div className="text-center text-white-50">© {currentYear} Serenity Spa. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer;
