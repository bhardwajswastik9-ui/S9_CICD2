import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart(){
  const { cart, removeFromCart } = useCart();

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ color: "gold" }}>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #444",
                padding: "15px 0"
              }}
            >
              <div>
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(index)}
                style={{
                  background: "red",
                  color: "#fff",
                  border: "none",
                  padding: "8px 18px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}
              >
                Remove ❌
              </button>
            </div>
          ))}

          {/* Total Section */}
          <h3 style={{ marginTop: "20px" }}>
            Total Amount: ₹{total}
          </h3>

          {/* Checkout Button */}
          <Link to="/checkout">
            <button
              style={{
                marginTop: "20px",
                background: "gold",
                border: "none",
                padding: "14px 35px",
                borderRadius: "30px",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              Proceed to Checkout 💳
            </button>
          </Link>
        </>
      )}
    </div>
  );
}
