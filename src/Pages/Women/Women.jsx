import React from 'react'
import "../Women/Women.css";
import { products } from "../../data/product";
import { useLocation } from 'react-router-dom';
import ProductCard from "../../components/ProductCard";

function useQuery(){
  return new URLSearchParams(useLocation().search);
}

function Women() {
  const query= useQuery();
  const filter=query.get("filter");
  const womenProducts=products.filter(p=>p.gender==="women");

  const filtered= womenProducts.filter(p=>{
    if (filter==="new") return p.isNew;
    if (filter==="heels") return p.type==="heels";
    if(filter==="sneakers") return p.type==="sneakers";
    if (filter==="sandals") return p.type==="sandals";
    return true;
  });
  
  return (
    <main className='women-page'>
      <h1>Women'shoes {filter && '-${filter}'}</h1>

      <section className="card-grid">
              {filtered.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
        </section>
    </main>
  )
}

export default Women
