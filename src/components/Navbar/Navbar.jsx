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
  const [activeMenu, setActiveMenu] = useState(null); // hover MEN
  const { totalItems } = useCart();

  return (
    <>
      <div className="navbar">
        {/* burger */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </div>

        {/* main links */}
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          {navLinks.map(link => (
            <li
              key={link.label}
              onMouseEnter={() => setActiveMenu(link.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {/* turn the label into a router link */}
              <Link to={link.path} className="top-link">
                {link.label}
              </Link>

              {/* dropdown only if link.sub exists */}
              {link.sub && activeMenu === link.label && (
                <ul className="dropdown">
                  {link.sub.map(item => (
                    <li key={item}>
  <Link
    to={`${link.path}?filter=${item.toLowerCase()}`}
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
