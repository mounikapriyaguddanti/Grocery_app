
// components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../slices/cartSlice';
import { Link } from 'react-router-dom';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
             <div key={item.id} className="cart-item">
             <img src={item.image} alt={item.name} />
             <div className="item-details">
               <h4>{item.name}</h4>
               <p>Price: &#8377; {item.price}</p>
               <p>Quantity: {item.quantity}</p>
               <p>Total: &#8377; {item.price * item.quantity}</p>
               <button className="remove-button" onClick={() => handleRemoveFromCart(item)}>
                 Remove
               </button>
             </div>
           </div> 
            ))}
          </div>
          <p className="total"><b>Total: &#8377;</b> {getTotalPrice().toFixed(2)}</p>
          <button className="clear-cart" onClick={handleClearCart}>
            Clear Cart
          </button>
          <Link to="/">
            <i className="fas fa-times cancel-icon"></i>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
