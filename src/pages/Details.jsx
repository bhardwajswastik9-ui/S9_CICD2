import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function Details(){
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === parseInt(id));
  if(!product) return <h2>Item not found</h2>;

  return(
    <div style={{padding:"40px",display:"flex",gap:"40px"}}>
      <img
        src={product.image}
        alt={product.name}
        style={{width:"350px",borderRadius:"15px"}}
      />

      <div>
        <h1 style={{color:"gold"}}>{product.name}</h1>
        <h3>Price: ₹{product.price}</h3>
        <p><b>Origin:</b> {product.origin}</p>
        <p><b>Description:</b> {product.description}</p>
        <p><b>Benefits:</b> {product.benefits}</p>
        <p><b>Disadvantages:</b> {product.disadvantages}</p>

        {/* 🛒 Add to Cart Button */}
        <button
          style={{
            marginTop:"20px",
            background:"gold",
            border:"none",
            padding:"12px 25px",
            borderRadius:"30px",
            fontWeight:"bold",
            cursor:"pointer"
          }}
          onClick={() => addToCart(product)}
        >
          Add to Cart 🛒
        </button>
      </div>
    </div>
  );
}

