// Sales.jsx
import React from 'react';
import "../Sales/Sales.css";
import { products } from "../../data/product";
import { useLocation } from 'react-router-dom';
import ProductCard from "../../components/ProductCard"; 

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Sales() {
  const query = useQuery();
  const filter = query.get("filter");

  // Tous les produits avec une réduction
  const saleProducts = products.filter(
    p => p.salePrice && p.salePrice < p.price
  );

 // Filtre les Soldes par Categories
  const filtered = filter
    ? saleProducts.filter(p => p.gender === filter)
    : saleProducts;

  return (
    <div className="sales-page">
      <h2>Sales</h2>
      <div className="products-grid">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Sales;
