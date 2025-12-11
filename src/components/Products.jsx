const products = [
  {
    name: 'Botanical Serenity Oil',
    description: 'A blend of lavender, blue tansy, and neroli for deep relaxation.',
    image: 'https://images.unsplash.com/photo-1505577058444-a3dab90d4253?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Mineral Silk Scrub',
    description: 'Fine Himalayan salts with jasmine petals to polish and brighten.',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Infused Bath Soak',
    description: 'Chamomile and citrus botanicals melt stress away in minutes.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Silk Eye Pillow',
    description: 'Weighted with lavender buds to calm your senses for bedtime.',
    image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&w=800&q=80',
  },
];

const Products = ({ sectionRef }) => (
  <section className="section-spacing" ref={sectionRef} id="products">
    <div className="container-xl">
      <p className="eyebrow">Our Products</p>
      <h2 className="display-6 fw-semibold mb-3">Premium products to extend the spa glow at home.</h2>
      <p className="text-muted mb-5">
        Each formula is crafted with organic ingredients, cruelty-free processes, and aromas inspired by slow mornings by the
        sea. Explore our collection for gifts or enhance your own rituals.
      </p>
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-6 col-xl-3" key={product.name}>
            <div className="card h-100 product-card rounded-4">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-muted">{product.description}</p>
                <button type="button" className="btn btn-outline-dark w-100">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
