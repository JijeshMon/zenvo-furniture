function ProductCard({ image, name, description, price, oldPrice, rating, onClick }) {
  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-card-inner">
        <div className="product-image-container">
          <img src={image} alt={name} />
        </div>
        <div className="product-info">
          <h3>{name}</h3>
          <div className="product-price">
            {oldPrice && <span className="old-price">₹{oldPrice}</span>}
          </div>
          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <i key={i} className={`fas fa-star ${i < (rating || 4) ? 'active' : ''}`}></i>
              ))}
            </div>
          </div>
          <p className="product-description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;