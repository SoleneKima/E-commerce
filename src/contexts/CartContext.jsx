import { createContext, useContext, useReducer } from "react";

// ---------- types ----------
const ADD    = "ADD";
const REMOVE = "REMOVE";
const CLEAR  = "CLEAR";

// ---------- reducer ----------
function cartReducer(state, action) {
  switch (action.type) {
    case ADD: {
      // if product already in cart → increment qty
      const i = state.findIndex(p => p.id === action.payload.id);
      if (i >= 0) {
        const next = [...state];
        next[i].qty += 1;
        return next;
      }
      return [...state, { ...action.payload, qty: 1 }];
    }
    case REMOVE:
      return state.filter(p => p.id !== action.payload);
    case CLEAR:
      return [];
    default:
      return state;
  }
}

// ---------- context ----------
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  // helpers your UI will call
  const addItem    = (item)      => dispatch({ type: ADD, payload: item });
  const removeItem = (id)        => dispatch({ type: REMOVE, payload: id });
  const clearCart  = ()          => dispatch({ type: CLEAR });
  const totalItems = cart.reduce((sum, p) => sum + p.qty, 0);
  const totalPrice = cart.reduce((sum, p) => sum + p.qty * p.price, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

// convenient hook
export const useCart = () => useContext(CartContext);
