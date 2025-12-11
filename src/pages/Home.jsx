import { useEffect, useRef } from 'react';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Services from '../components/Services.jsx';
import Products from '../components/Products.jsx';
import Testimonials from '../components/Testimonials.jsx';

const Home = ({ onRegisterSections, onScrollToSection }) => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const productsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    onRegisterSections?.({
      hero: heroRef,
      about: aboutRef,
      services: servicesRef,
      products: productsRef,
      testimonials: testimonialsRef,
      contact: contactRef,
    });
  }, [onRegisterSections]);

  return (
    <div className="home-page">
      <Hero sectionRef={heroRef} onContactClick={() => onScrollToSection?.('contact')} />
      <About sectionRef={aboutRef} />
      <Services sectionRef={servicesRef} />
      <Products sectionRef={productsRef} />
      <Testimonials sectionRef={testimonialsRef} />
      <section className="section-spacing contact-block" ref={contactRef} id="contact">
        <div className="container-xl">
          <div className="contact-card rounded-4 p-4 p-lg-5 d-flex flex-column flex-lg-row align-items-lg-center justify-content-between">
            <div className="mb-4 mb-lg-0">
              <p className="eyebrow">Contact & Location</p>
              <h3 className="fw-semibold mb-3">Ready for your next moment of self-care?</h3>
              <ul className="list-unstyled text-muted mb-0">
                <li>Avenida Atlântica, 1500 - Copacabana, Rio de Janeiro</li>
                <li>+55 (21) 99999-0000</li>
                <li>contato@serenityspa.com</li>
              </ul>
            </div>
            <button type="button" className="btn btn-dark btn-lg rounded-pill px-5" onClick={() => onScrollToSection?.('hero')}>
              Book an Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
