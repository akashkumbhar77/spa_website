const testimonials = [
  {
    quote: 'The aromatherapy journey was sublime. I left feeling lighter and inspired.',
    name: 'Carolina M.',
    city: 'São Paulo',
    rating: 5,
  },
  {
    quote: 'My partner and I booked the couple retreat and it exceeded every expectation.',
    name: 'Renato & Livia',
    city: 'Campinas',
    rating: 5,
  },
  {
    quote: 'They listened carefully and adapted the massage to my needs. True professionals.',
    name: 'Helena S.',
    city: 'Rio de Janeiro',
    rating: 4,
  },
];

const Testimonials = ({ sectionRef }) => (
  <section className="section-spacing testimonials" ref={sectionRef} id="testimonials">
    <div className="container-xl">
      <p className="eyebrow">Testimonials</p>
      <h2 className="display-6 fw-semibold mb-5">Stories from guests who found their calm with us.</h2>
      <div className="row g-4">
        {testimonials.map((testimonial) => (
          <div className="col-md-4" key={testimonial.name}>
            <div className="testimonial-card h-100 p-4 rounded-4 shadow-sm bg-white">
              <p className="mb-4">“{testimonial.quote}”</p>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6 className="mb-0 fw-semibold">{testimonial.name}</h6>
                  <small className="text-muted">{testimonial.city}</small>
                </div>
                <div className="text-warning">
                  {'★'.repeat(testimonial.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
