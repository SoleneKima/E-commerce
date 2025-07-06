// src/components/Cart/CartDrawer.jsx
import { useCart } from "../../contexts/CartContext";
import "./CartDrawer.css";

export default function CartDrawer({ open, onClose }) {
  const { cart, removeItem, totalPrice, clearCart } = useCart();

  return (
    <div
      className={`drawer-backdrop ${open ? "show" : ""}`}
      onClick={onClose}
    >
      <aside
        className={`drawer ${open ? "slide-in" : ""}`}
        onClick={e => e.stopPropagation()}
      >
        <header>
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </header>

        {cart.length === 0 ? (
          <p className="empty">Cart is empty 😢</p>
        ) : (
          <ul className="items">
            {cart.map(p => (
              <li key={p.id}>
                <img src={p.img} alt={p.name} />

                <div className="item-details">
                  <p className="item-name">{p.name}</p>
                  <p className="item-qty">
                    {p.quantity} × ${p.price.toFixed(2)}
                  </p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(p.id)}
                  aria-label={`Remove ${p.name}`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        <footer>
          <strong>Total: ${totalPrice.toFixed(2)}</strong>
          <button
            className="checkout-btn"
            disabled={!cart.length}
            onClick={clearCart}
          >
            Checkout
          </button>
        </footer>
      </aside>
    </div>
  );
}
