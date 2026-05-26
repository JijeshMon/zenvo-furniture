import ProductCard from '../components/ProductCard';
import { useState } from 'react';
import '../styles/Products.css';
import zh101 from '../assets/images/zh101.png';
import zh102 from '../assets/images/zh102.png';
import zh103 from '../assets/images/zh103.png';
import zh59 from '../assets/images/zh59.png';
import zh54 from '../assets/images/zh54.png';
import zh51 from '../assets/images/zh51.png'; 
import zh52 from '../assets/images/zh52.png';   
import zm31 from '../assets/images/zm31.png';            
import zm29 from '../assets/images/zm29.png';            
import zm28 from '../assets/images/zm28.png';            
import zm33 from '../assets/images/zm33.png';            
import zm24 from '../assets/images/zm24.png';            
import zm36 from '../assets/images/zm36.png';            
import zm38 from '../assets/images/zm36.png';            
import zm21 from '../assets/images/zm21.png';            
import zv31 from '../assets/images/zv31.png';            
import zv26 from '../assets/images/zv26.png';            
import zv24 from '../assets/images/zv24.png';            

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, image: zh101, name: 'Executive Chair', description: 'Premium Upholstery Pufoam with Rexin SEAT & BACK, Foam Padded Handle Premium Base with Pu Wheel Class 3 Gaslift Heavy Duty Machanisum', price: '12,999', oldPrice: '15,999', rating: 4.5 },
    { id: 2, image: zh102, name: 'Executive Chair', description: 'Premium Upholstery Pufoam with Rexin SEAT & BACK, Foam Padded Handle Premium Base with Pu Wheel Class 3 Gaslift Heavy Duty Machanisum', price: '12,999', oldPrice: null, rating: 4.8 },
    { id: 3, image: zh103, name: 'Executive Chair', description: 'Premium Upholstery Pufoam with Rexin SEAT & BACK, Foam Padded Handle Premium Base with Pu Wheel Class 3 Gaslift Centre Tilt Machanisum', price: '12,999', oldPrice: '14,999', rating: 4.3 },
    { id: 4, image: zh59, name: 'Executive Chair', description: 'Adjustable Lumbar Support Adjustable Handrest Adjustable Headrest Class 3 Gaslift Premium upholstery Molded Foam Seat Nylon Base 3 lock Mechanism', price: '12,999', oldPrice: null, rating: 4.7 },
    { id: 5, image: zh54, name: 'Executive Chair', description: 'Adjustable Lumbar Support Adjustable Headrest Class 3 Gaslift Premium upholstery Molded Foam Seat Nylon Base Compact Synchro Mechanism', price: '12,999', oldPrice: '16,999', rating: 4.4 },
    { id: 6, image: zh51, name: 'Executive Chair', description: 'Adjustable Lumbar Support Adjustable Headrest Class 3 Gaslift Premium upholstery Molded Foam Seat Nylon Base Centre Tilt Mechanism', price: '12,999', oldPrice: null, rating: 4.6 },
    { id: 7, image: zh52, name: 'Executive Chair', description: 'Adjustable Lumbar Support Adjustable Headrest Class 3 Gaslift Premium upholstery Molded Foam Seat Nylon Base Compact Synchro Mechanism', price: '12,999', oldPrice: '15,499', rating: 4.5 },
    { id: 8, image: zm31, name: 'Mesh Executive Chair', description: 'Breathing Mesh Back Class 3 Gaslift Premium upholstery Molded Foam Seat Nylon Base Centre Tilt Mechanism', price: '12,999', oldPrice: null, rating: 4.2 },
    { id: 9, image: zm29, name: 'Executive Chair', description: 'Imported Medium Back Class 3 Gaslift Premium upholstery Molded Foam Seat Nylon Base Centre Tilt Mechanism', price: '12,999', oldPrice: '13,999', rating: 4.3 },
    { id: 10, image: zm28, name: 'Mesh Executive Chair', description: 'Breathing Mesh Back Class 3 Gaslift Premium upholstery Molded Foam Seat Nylon Base Centre Tilt Mechanism', price: '12,999', oldPrice: null, rating: 4.1 },
    { id: 11, image: zm33, name: 'Mesh Executive Chair', description: 'Breathing Mesh Back Class 3 Gaslift Premium upholstery Molded Foam Seat Nylon Base Compact Synchro Mechanism', price: '12,999', oldPrice: '14,499', rating: 4.4 },
    { id: 12, image: zm24, name: 'Executive Chair', description: 'Breathing Mesh Back Class 3 Gaslift Premium upholstery Molded Foam Seat Nylon Base Centre Tilt Mechanism', price: '12,999', oldPrice: null, rating: 4.0 },
    { id: 13, image: zm36, name: 'Executive Chair', description: 'Imported Medium Back Class 3 Gaslift Premium upholstery Molded Foam Seat Nylon Base Compact Synchro Mechanism', price: '12,999', oldPrice: '15,999', rating: 4.6 },
    { id: 14, image: zm38, name: 'Mesh Executive Chair', description: 'Breathing Mesh Back Class 3 Gaslift Premium upholstery Molded Foam Seat Nylon Base Compact Synchro Mechanism', price: '12,999', oldPrice: null, rating: 4.3 },
    { id: 15, image: zm21, name: 'Executive Chair', description: 'Breathing Mesh Back Class 3 Gaslift Premium upholstery Molded Foam Seat Nylon Base Push Back Mechanism', price: '12,999', oldPrice: '13,499', rating: 4.2 },
    { id: 16, image: zv31, name: 'Executive Chair', description: 'Breathing Mesh Back Premium upholstery Molded Foam Seat 14 G Powder Coated Frame', price: '12,999', oldPrice: null, rating: 4.5 },
    { id: 17, image: zv26, name: 'Executive Chair', description: 'Breathing Mesh Back Premium upholstery Molded Foam Seat 14 G Powder Coated Frame', price: '12,999', oldPrice: '14,999', rating: 4.4 },
    { id: 18, image: zv24, name: 'Executive Chair', description: 'Breathing Mesh Back Premium upholstery Molded Foam Seat 14 G Powder Coated Frame', price: '12,999', oldPrice: null, rating: 4.3 }
  ];

  return (
    <div className="products-page">
      <h1>Our Products</h1>
      <p className="products-subtitle">Discover premium executive chairs for your office</p>

      <div className="products-grid">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            // price={item.price}
            // oldPrice={item.oldPrice}
            // rating={item.rating}
            onClick={() => setSelectedProduct(item)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-image-container">
              <img src={selectedProduct.image} alt={selectedProduct.name} />
            </div>
            <div className="modal-body">
              <h2>{selectedProduct.name}</h2>
              {/* <div className="modal-price-section">
                <span className="modal-current-price">₹{selectedProduct.price}</span>
                {selectedProduct.oldPrice && (
                  <span className="modal-old-price">₹{selectedProduct.oldPrice}</span>
                )}
              </div> */}
              {/* <div className="product-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fas fa-star ${i < (selectedProduct.rating || 4) ? 'active' : ''}`}></i>
                  ))}
                </div>
               
              </div> */}
              <p className="modal-description">{selectedProduct.description}</p>
              {/* <div className="modal-actions">
                  <button className="btn-add-cart"><i className="fas fa-shopping-cart"></i> Add to Cart</button>
                <button className="btn-buy"><i className="fas fa-bolt"></i> Buy Now</button>  
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;