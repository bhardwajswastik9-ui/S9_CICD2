import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


export default function Navbar(){
  const { cart, message } = useCart();

  return (
    <>
      <div className="navbar">
        <h2>🥃 Barrel & Bottle</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart ({cart.length})</Link>
          <Link to="/profile">Profile</Link>

        </div>
      </div>

      {/* Notification Popup */}
      {message && (
        <div style={{
          position:"fixed",
          top:"20px",
          right:"20px",
          background:"gold",
          color:"#000",
          padding:"12px 22px",
          borderRadius:"12px",
          fontWeight:"bold",
          boxShadow:"0 0 15px black",
          zIndex:999
        }}>
          {message}
        </div>
      )}
    </>
  );
}

