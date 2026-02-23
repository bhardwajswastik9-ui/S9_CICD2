
import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
export default function ProductCard({product}){
 const { addToCart } = useCart();
 const nav = useNavigate();
 return(<div className="card" onClick={()=>nav(`/details/${product.id}`)}>
   <img src={product.image} alt={product.name}/>
   <h3>{product.name}</h3>
   <p>₹{product.price}</p>
   <button onClick={(e)=>{e.stopPropagation();addToCart(product)}}>Add to Cart</button>
 </div>);
}
