import React, { useState } from 'react';
import './Navbar.css';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { useCart } from '../../contexts/CartContext';
import CartDrawer from '../Cart/CartDrawer';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
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

      <button className="nav-cart" onClick={() => setDrawerOpen(true)}>
        <FaShoppingCart size={24} color="white" />
        {totalItems > 0 && (
          <span className="cart-count">{totalItems}</span>
        )}
      </button>
      

    </div>
      <CartDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>

    
  );
};
