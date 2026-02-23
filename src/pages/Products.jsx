
import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products(){
 const [active,setActive] = useState("wine");
 const filtered = products.filter(p=>p.category===active);

 return(
  <div>
    <div className="tabs">
      <button className={`tab-btn ${active==="wine"?"tab-active":""}`} onClick={()=>setActive("wine")}>🍷 Wines</button>
      <button className={`tab-btn ${active==="beer"?"tab-active":""}`} onClick={()=>setActive("beer")}>🍺 Beers</button>
      <button className={`tab-btn ${active==="whiskey"?"tab-active":""}`} onClick={()=>setActive("whiskey")}>🥃 Whiskeys</button>
    </div>

    <div className="products-grid">
      {filtered.map(p=><ProductCard key={p.id} product={p}/> )}
    </div>
  </div>
 );
}
