
import { useParams } from "react-router-dom";
import { products } from "../../data/product";
import ProductCard from "../../components/ProductCard";
import "../Men/Men.css";
export default function Men() {
  const { type } = useParams(); // get the type from the URL
  const menShoes = products.filter(p => p.gender === "men" && (!type || p.type === type));

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
