// src/Pages/Confirmation.jsx
import React from "react";
import { FaStar } from "react-icons/fa";        // ← star icon import
import "./Confirmation.css";
import { useState } from "react";

export default function Confirmation() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <main className="confirmation-page">
      <h1>Payment Successful 🎉</h1>
      <p>Thank you for your order!</p>
      <p>We would love your feedback. Please rate your experience:</p>

      <div className="star-rating">
        {[...Array(5)].map((_, i) => {
          const val = i + 1;
          return (
            <label key={i}>
              <input
                type="radio"
                name="rating"
                value={val}
                onClick={() => setRating(val)}
              />
              <FaStar
                className="star"
                size={32}
                color={val <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={() => setHover(val)}
                onMouseLeave={() => setHover(0)}
              />
            </label>
          );
        })}
      </div>

      {rating > 0 && <p className="thanks">You rated us {rating} out of 5 ⭐️</p>}
    </main>
  );
}
