// src/Pages/Checkout.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";         // <-- new stylesheet

export default function Checkout() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // here you’d normally send the card data off to your API…
    // then, once “paid,” redirect to a confirmation:
    navigate("/confirmation");
  }

  return (
    <main className="checkout-page">
      <h1>Checkout</h1>

      <form onSubmit={handleSubmit}>
        {/* ─── PERSONAL INFO FORM ─── */}
        <section className="info-form">
          <div className="field half">
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" type="text" placeholder="John" required />
          </div>
          <div className="field half">
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" type="text" placeholder="Doe" required />
          </div>

          <div className="field full">
            <label htmlFor="dob">Date of Birth</label>
            <input id="dob" name="dob" type="date" required />
          </div>

          <div className="field two-thirds">
            <label htmlFor="address">Address</label>
            <input id="address" name="address" type="text" placeholder="123 Main St" required />
          </div>
          <div className="field one-sixth">
            <label htmlFor="postal">Postal Code</label>
            <input id="postal" name="postal" type="text" placeholder="K2N 7X2" required />
          </div>
          <div className="field one-sixth">
            <label htmlFor="province">Province</label>
            <input id="province" name="province" type="text" placeholder="ON" required />
          </div>

          <div className="field full">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" name="phone" type="tel" placeholder="(555) 555-1234" required />
          </div>
        </section>

        {/* ─── PAYMENT FORM ─── */}
        <section className="payment-form">
          <h2>Payment</h2>

          <div className="field full">
            <label htmlFor="cardName">Name on Card</label>
            <input id="cardName" name="cardName" type="text" placeholder="John Doe" required />
          </div>
          <div className="field full">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              id="cardNumber"
              name="cardNumber"
              type="text"
              inputMode="numeric"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>
          <div className="field half">
            <label htmlFor="exp">Expiration (MM/YY)</label>
            <input id="exp" name="exp" type="text" placeholder="05/25" required />
          </div>
          <div className="field half">
            <label htmlFor="cvv">CVV</label>
            <input id="cvv" name="cvv" type="text" placeholder="123" required />
          </div>

          <div className="actions">
            <button type="submit" className="submit">Submit Payment</button>
          </div>
        </section>
      </form>
    </main>
  );
}
