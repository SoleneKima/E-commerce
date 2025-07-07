// src/components/Checkout/PaymentForm.jsx
import React, { useState } from "react";
import "./PaymentForm.css";

export default function PaymentForm({ onSubmit }) {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry]       = useState("");
  const [cvv, setCvv]             = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // ici tu appelleras ton API Stripe ou autre
    onSubmit({ cardName, cardNumber, expiry, cvv });
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <h2>Payment</h2>
      <label>
        Name on Card
        <input
          type="text"
          value={cardName}
          onChange={e => setCardName(e.target.value)}
          required
        />
      </label>
      <label>
        Card Number
        <input
          type="text"
          value={cardNumber}
          onChange={e => setCardNumber(e.target.value)}
          pattern="\d{16}"
          placeholder="1234 5678 9012 3456"
          required
        />
      </label>
      <div className="small-inputs">
        <label>
          Expiration (MM/YY)
          <input
            type="text"
            value={expiry}
            onChange={e => setExpiry(e.target.value)}
            pattern="\d{2}\/\d{2}"
            placeholder="05/25"
            required
          />
        </label>
        <label>
          CVV
          <input
            type="text"
            value={cvv}
            onChange={e => setCvv(e.target.value)}
            pattern="\d{3}"
            placeholder="123"
            required
          />
        </label>
      </div>
      <button type="submit">Submit Payment</button>
    </form>
  );
}
