import React from 'react'
import "../Women/Women.css";
import { products } from "../../data/product";

import ProductCard from "../../components/ProductCard";
import { useParams } from "react-router-dom";

export default function Women() {
  const { type } = useParams(); // get the type from the URL
  const womenShoes = products.filter(p => p.gender === "women" && (!type || p.type === type));

  return (
    <main className="men-page">
      <h1>Women’s Shoes</h1>

      <section className="card-grid">
        {womenShoes.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
    </main>
  );
}
