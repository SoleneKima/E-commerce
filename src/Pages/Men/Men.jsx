
import { products } from "../../data/product";
import ProductCard from "../../components/ProductCard";
import "../Men/Men.css";
export default function Men() {
  const menShoes = products.filter(p => p.gender === "men");

  return (
    <main className="men-page">
      <h1>Men’s Shoes</h1>

      <section className="card-grid">
        {menShoes.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
    </main>
  );
}
