// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";
import CartDrawer from "../Cart/CartDrawer";
import { navLinks } from "../../data/navLinks";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);    // burger
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
      <div className="navbar">
        {/* burger */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </div>

        {/* main links */}
        <ul className="nav-menu">
          {navLinks.map(link => (
            <li
              key={link.label}
              className = "nav-item"
              
            >
              {/* turn the label into a router link */}
              <Link to={link.path} className="top-link">
                {link.label}
              </Link>

              {/* dropdown only if link.sub exists */}
              {link.sub && (
                <ul className="dropdown">
                  {link.sub.map(item => (
                    <li key={item}>
                      <Link
                        to={`${link.path}/${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="dropdown-link"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
                
        </ul>

        {/* cart icon */}
        <button className="nav-cart" onClick={() => setDrawerOpen(true)}>
          <FaShoppingCart size={24} color="white" />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </button>
      </div>

      {/* slide-in cart drawer */}
      <CartDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
