const serviceItems = [
  {
    title: 'Revitalizing Facials',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Special Packages',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Japanese Bath Ritual',
    image: 'https://images.unsplash.com/photo-1501117716987-c8e1ecb210cc?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Relaxing Massage',
    image: 'https://images.unsplash.com/photo-1591369822096-0c363b5f31f8?auto=format&fit=crop&w=1000&q=80',
  },
];

const Services = ({ sectionRef }) => (
  <section className="section-spacing" ref={sectionRef} id="services">
    <div className="container-xl">
      <p className="eyebrow">Our Services</p>
      <h2 className="display-6 fw-semibold mb-4">Choose a ritual and we will take care of the rest.</h2>
      <div className="row g-4">
        {serviceItems.map((service) => (
          <div className="col-md-6 col-xl-3" key={service.title}>
            <div className="service-card" style={{ backgroundImage: `url(${service.image})` }}>
              <div className="service-card-overlay">
                <h5 className="mb-0">{service.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
