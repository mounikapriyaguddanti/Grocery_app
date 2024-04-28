// components/ProductList.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { addToCart } from '../slices/cartSlice';
import { useDispatch } from 'react-redux';
import './SearchBar.css';

function ProductList() {
  const [searchTerm, setSearchTerm] = useState('');
  const products = useSelector((state) =>
    state.products.flatMap((category) => category.items)
  );
  const dispatch = useDispatch();

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <div>
                  <h4>{product.name}</h4>
                  <p>&#8377; {product.price}</p>
                </div>
                <button
                  className="add-to-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No products found.</p>
        )}
      </div>
   
  );
}

export default ProductList;