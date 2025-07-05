import { useCart } from "../../contexts/CartContext";
import "./CartDrawer.css";

export default function CartDrawer({ open, onClose }) {
  const { cart, removeItem, totalPrice, clearCart } = useCart();

  return (
    <div className={`drawer-backdrop ${open ? "show" : ""}`} onClick={onClose}>
      <aside
        className={`drawer ${open ? "slide-in" : ""}`}
        onClick={e => e.stopPropagation()}  /* prevent closing when clicking inside */
      >
        <header>
          <h2>Your Cart</h2>
          <button onClick={onClose}>✕</button>
        </header>

        {cart.length === 0 ? (
          <p className="empty">Cart is empty 😢</p>
        ) : (
          <ul className="items">
            {cart.map(p => (
              <li key={p.id}>
                <img src={p.image} alt={p.name} />
                <div>
                  <h4>{p.name}</h4>
                  <p>{p.qty} × ${p.price}</p>
                </div>
                <button onClick={() => removeItem(p.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}

        <footer>
          <strong>Total: ${totalPrice.toFixed(2)}</strong>
          <button disabled={!cart.length} onClick={clearCart}>Checkout</button>
        </footer>
      </aside>
    </div>
  );
}
