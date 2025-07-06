// src/components/ProductCard.jsx
import React from "react";
import "./ProductCard.css";
import { useCart } from "../contexts/CartContext";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const { name, brand, price, salePrice, img, isNew } = product;

  return (
    <article className="card">
      {/* Image & badge */}
      <div className="img-wrap">
        {isNew && <span className="badge">New</span>}
        {salePrice && !isNew && (
          <span className="badge sale">
            -{Math.round(100 - (salePrice / price) * 100)}%
          </span>
        )}
        <img src={img} alt={name} />
      </div>

      {/* Textual content */}
      <div className="card-content">
        <h3>{`Mens ${name}`}</h3>
        <p className="brand">{brand}</p>

        <p className="price">
          {salePrice ? (
            <>
              <span className="sale-price">${salePrice.toFixed(2)}</span>
              <span className="old-price">${price.toFixed(2)}</span>
            </>
          ) : (
            <>${price.toFixed(2)}</>
          )}
        </p>

        {/* Add to cart button pinned at bottom */}
        <button onClick={() => addItem(product)}>Add to cart</button>
      </div>
    </article>
  );
}
