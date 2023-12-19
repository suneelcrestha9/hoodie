// Cart.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  removeFromCart, increaseQuantity, decreaseQuantity } from '../store/cartSlice';
import './Cart.css';

export default function Cart() {
  const addedProducts = useSelector((state) => state.cart.items);
  
  const dispatch = useDispatch();

  const minimumtitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + '...';
    } else {
      return title;
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

   const grandTotal = addedProducts.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="product_cart">
      {addedProducts.length === 0 ? (
        <h2>No Item in cart</h2>
      ) : (
        <div className="">
            <div className="maincart">
              <h1>CART</h1>
              {addedProducts.map((item) => (
                <div className="cart_product" key={item.id}>
                  <div className="cart_image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="ptitle">
                    <p>{minimumtitle(item.title, 20)}</p>
                  </div>
                  <div className="quantity">
                    <p>${item.price}</p>
                  </div>
                  <div className="quantity">
                    <button onClick={() => handleDecrease(item.id)}>-</button>
                    <input type="text" value={item.quantity} readOnly />
                    <button onClick={() => handleIncrease(item.id)}>+</button>
                  </div>
                  <div className="pprice">
                    <p>${item.price * item.quantity}</p>
                  </div>
                  <div className="total">
                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="">
            <h3>Grand Total:{grandTotal}</h3>
          </div>
            </div>
            
          )}
          
      
    </div>
    
  );
}
