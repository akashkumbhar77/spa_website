const Hero = ({ sectionRef, onContactClick }) => (
  <section className="hero-section rounded-hero" ref={sectionRef}>
    <div className="hero-content text-center text-white">
      <p className="text-uppercase fw-semibold letter-spaced">Bem-vindo ao seu refúgio</p>
      <h1 className="display-4 fw-bold mb-3">Exclusive Spa Treatments for You</h1>
      <p className="lead mb-4">
        Slow down, breathe fundo e permita que nossa equipe cuide de cada detalhe para renovar sua energia.
      </p>
      <button type="button" className="btn btn-light btn-lg px-5" onClick={() => onContactClick?.('contact')}>
        Contact Us
      </button>
    </div>
    <div className="wavy-divider" aria-hidden="true">
      <svg viewBox="0 0 1440 200" preserveAspectRatio="none">
        <path
          d="M0,96L60,85.3C120,75,240,53,360,69.3C480,85,600,139,720,154.7C840,171,960,149,1080,138.7C1200,128,1320,128,1380,128L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  </section>
);

export default Hero;
