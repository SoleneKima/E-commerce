import React, { useState } from 'react';
import './Navbar.css';
import { FaShoppingCart, FaBars } from 'react-icons/fa';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>

      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <li>New and Featured</li>
        <li>Women</li>
        <li>Men</li>
        <li>Kids</li>
        <li className='nav-sales'>Sales</li>
      </ul>

      <div className="nav-cart">
        <FaShoppingCart size={24} color="white" />
        <span className='cart-count'>
          0
        </span>
      </div>
    </div>
  );
};
