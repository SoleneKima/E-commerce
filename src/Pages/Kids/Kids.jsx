// src/Pages/Kids/Kids.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { products }   from "../../data/product";
import ProductCard    from "../../components/ProductCard";
import "./Kids.css";

export default function Kids() {
  const { type } = useParams();              // "boys" or "girls" or undefined
  const allKids = products.filter(p => p.gender === "kids");
  const kidsToShow = type
    ? allKids.filter(p => p.type === type)
    : allKids;

  return (
    <main className="kids-page">
      <h1>Kids’ Shoes</h1>
      {type && <h2 className="subtitle">{type.charAt(0).toUpperCase() + type.slice(1)}</h2>}
      <section className="card-grid">
        {kidsToShow.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
    </main>
  );
}
