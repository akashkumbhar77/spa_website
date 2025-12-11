const About = ({ sectionRef }) => (
  <section className="section-spacing" ref={sectionRef} id="about">
    <div className="container-xl">
      <div className="row align-items-center g-4">
        <div className="col-lg-6">
          <p className="eyebrow">Who We Are</p>
          <h2 className="display-6 fw-semibold mb-3">A sanctuary of calm in the heart of the city.</h2>
          <p className="text-muted lead">
            Our therapists curate personalized therapies inspired by ancestral rituals and aromatherapy for you to reconnect
            with your essence. Every aroma, candle, and texture was selected to transform your visit into a deeply restorative
            journey.
          </p>
        </div>
        <div className="col-lg-6">
          <div className="about-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80"
              alt="Luxurious bathtub in a spa"
              className="img-fluid rounded-4 shadow"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
