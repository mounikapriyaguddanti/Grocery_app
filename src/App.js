import '@fortawesome/fontawesome-svg-core/styles.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { useSelector } from 'react-redux';

import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function App() {
  const cart = useSelector((state) => state.cart);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  
   
  return (
    <Router>
      <div className="app">
        <header>
        <Link to="/">
    <h1>Groceries</h1>
  </Link>
  
  <Link to="/cart" className="cart-link">
    <FontAwesomeIcon icon={faShoppingCart} />
    <span className="cart-count">{totalQuantity}</span>
  </Link>
        </header>
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;