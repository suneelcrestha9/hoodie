// Navbar.js

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total quantity
  const totalQuantity = cartItems.reduce((total,item)=>total +item.quantity ,0)

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <h2>HOODIESHUB</h2>
        </div>
        <div className="navlink">
          <div className="navlinks">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/categories">Categories</Link></li>
            </ul>
          </div>
          <div className="cart">
            <li><Link to="/cart"><img src="../icon/cart.png" alt="" /></Link></li>
            <p>{totalQuantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
