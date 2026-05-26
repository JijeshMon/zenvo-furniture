import '../styles/Products.css';
function ProductCard({ image, name, description, price, oldPrice, rating, onClick }) {
  return (
    <div className="product-card" onClick={onClick}>
      {/* Premium Badge */}
      <div className="product-badge">Premium</div>
      
      {/* Image Container with Hover Effect - THIS IS KEY */}
      <div className="product-image-container">
        <img src={image} alt={name} />
        <div className="product-overlay">
          <button 
            className="quick-view-btn" 
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            <i className="fas fa-eye"></i> Quick View
          </button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="product-info">
        <h3>{name}</h3>
        
        {/* <div className="product-price">
          <span className="current-price">₹{price}</span>
          {oldPrice && (
            <span className="old-price">₹{oldPrice}</span>
          )}
        </div> */}
        
        {/* <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <i 
                key={i} 
                className={`fas fa-star ${i < (rating || 4) ? 'active' : ''}`}
              ></i>
            ))}
          </div>
          <span className="rating-count">(128 reviews)</span>
        </div> */}
        
        <p>{description}</p>
        
        <button 
          className="view-details-btn" 
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          View Details <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;